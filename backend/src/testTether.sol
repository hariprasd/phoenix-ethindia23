// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @title TetherToken
 * @dev Implementation of the Tether USDT
 */
contract TetherToken is ERC20Upgradeable, OwnableUpgradeable, PausableUpgradeable {
    mapping(address => bool) private _blacklisted;

    // Fee parameters
    uint public basisPointsRate ;
    uint public maximumFee ;

     function initialize(string memory name, string memory symbol, uint256 initialSupply) external initializer {
        __ERC20_init(name, symbol);
        __Ownable_init(msg.sender);
        __Pausable_init();

        basisPointsRate ; 
        maximumFee ; 

        _mint(_msgSender(), initialSupply); 
    }

    /**
     * @dev Mints tokens to an address
     * @param to Address to mint tokens to
     * @param amount Amount of tokens to mint
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Burns tokens from an address
     * @param from Address to burn tokens from
     * @param amount Amount of tokens to burn
     */
    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }

    /**
     * @dev Overridden transfer function with fee and blacklist logic
     */
    function transfer(
        address to,
        uint256 amount
    ) public override whenNotPaused returns (bool) {
        require(!_blacklisted[msg.sender], "Sender is blacklisted");
        require(!_blacklisted[to], "Recipient is blacklisted");

        uint fee = calculateFee(amount);
        uint sendAmount = amount - fee;

        _transfer(msg.sender, to, sendAmount);
        if (fee > 0) {
            _transfer(msg.sender, owner(), fee);
        }
        return true;
    }

    /**
     * @dev Overridden transferFrom function with fee and blacklist logic
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public override whenNotPaused returns (bool) {
        require(!_blacklisted[from], "Sender is blacklisted");
        require(!_blacklisted[to], "Recipient is blacklisted");

        uint fee = calculateFee(amount);
        uint sendAmount = amount - fee;

        _transfer(from, to, sendAmount);
        _approve(from, _msgSender(), allowance(from, _msgSender()) - amount);

        if (fee > 0) {
            _transfer(from, owner(), fee);
        }
        return true;
    }

    /**
     * @dev Sets the parameters for transaction fees
     * @param newBasisPoints Basis points rate for transaction fees
     * @param newMaxFee Maximum fee per transaction
     */
    function setFeeParameters(
        uint newBasisPoints,
        uint newMaxFee
    ) external onlyOwner {
        require(newBasisPoints < 100, "Basis points rate too high"); // Ensuring reasonable fee rate
        require(newMaxFee < 50 ether, "Max fee too high"); // Assuming the token has 18 decimals
        basisPointsRate = newBasisPoints;
        maximumFee = newMaxFee;
    }

    /**
     * @dev Calculates the transaction fee
     * @param amount Transaction amount
     * @return Calculated fee
     */
    function calculateFee(uint256 amount) internal view returns (uint) {
        uint fee = (amount * basisPointsRate) / 10000;
        if (fee > maximumFee) {
            fee = maximumFee;
        }
        return fee;
    }

    function addToBlacklist(address account) external onlyOwner {
        _blacklisted[account] = true;
    }

    function removeFromBlacklist(address account) external onlyOwner {
        _blacklisted[account] = false;
    }

    function isBlacklisted(address account) public view returns (bool) {
        return _blacklisted[account];
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}

"use client";
import { useState } from "react";
import FormComponent from "../input-form";
import Image from "next/image";
import { useAccount } from "wagmi";
import tkn from "../../../assets/token.svg";
import ABI from "../../../../contract/escrow";
export default function CompanyDashboard() {
    const EscrowContract = "0x416bB15b7dD4366Eea57139e8Eb487020A721Ee8";
    const TokenContract = "0x35F60099FB588C0d59a467b86Ae002183548a43a";
    const contractAddress = "0xabB639AC9855954445d9Be8D330C8017A90Fb831";
    const [openForm, setOpenForm] = useState(false);
    const [buyPopup, setBuyPopup ] = useState(false);
    const {address , isConnected} = useAccount();
    const [amount ,setamount] = useState(0);
    const [numberofUsers , setNumberofUsers] = useState(0);
 
    const initializeEthers = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const [account] = await provider.listAccounts();
            const balance = await provider.getBalance(account);
            return provider;
        } catch (error) {
            console.error("Error initializing ethers:", error.message);
        }
    };
    useEffect(() => {
        const getEthers = async () => {
            const provider = await initializeEthers();
            console.log("provider is rendered here");
            console.log(provider);
        };
        getEthers();
    }, []);

    const mintTokens = async() => {
        const provider = await initializeEthers();
        console.log(provider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            TokenContract,
            ABI,
            signer
        );
        contract.connect(contractAddress).mint(address,amount);
        const EscrowContract = new ethers.Contract(
            EscrowContract,
            ABI,
            signer
        );
        await EscrowContract.depositTokens(amount);
    }
    const CreateAdpost = async() =>{
        const provider = await initializeEthers();
        console.log(provider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            ABI,
            signer
        );
        let randomId = Math.random();
        await contract.createPromotion(randomId,amount,numberofUsers);
    }
    return (
        <div>
            <h1 className="text-4xl text-center mt-16">Company Dashboard</h1>
            <div className="p-8">
                <div className="flex justify-center gap-6">
                    <div className="p-6 h-fit shrink-0 rounded-xl drop-shadow-xl bg-white w-fit">
                        <h2>Wallet Balance</h2>
                        <div className="">
                            <div className="flex gap-1 mt-4 text-4xl">
                                <Image
                                    src={tkn}
                                    className="inline text-pri w-6 mr-1"
                                />
                                0.0 <span className="text-pri">ADS</span>
                            </div>
                            <button
                                onClick={() => setBuyPopup(true)}
                                className="bg-pri shrink-0 px-4 p-2 text-white mt-4 text-center text-xs  rounded-md"
                            >
                                Mint ADS
                            </button>
                        </div>
                    </div>
                    <div className="p-6 h-fit rounded-xl shrink-0 drop-shadow-xl bg-white w-fit">
                        <h2 className="text-xl">Create an Ad post</h2>
                        <p className="text-black/60 text-sm">
                            Engage with your audience
                        </p>
                        <div className="flex gap-6 items-center">
                            {" "}
                            <button
                                onClick={() => setOpenForm(!openForm)}
                                className="bg-pri text-xs px-4 p-2 w-full text-white mt-12 text-center rounded-md"
                            >
                                {openForm ? `Close Form` : `Create  +`}
                            </button>
                        </div>
                    </div>
                    {openForm && <FormComponent />}
                </div>
            </div>
            {buyPopup && (
                <div className="h-screen w-screen backdrop-blur-sm z-[999] flex justify-center items-center fixed top-0 left-0">
                    <div className="bg-white text-center relative p-8 z-[9999] rounded-xl drop-shadow-xl">
                        <button
                            onClick={() => setBuyPopup(false)}
                            className="absolute top-4 right-4 flex justify-center items-center bg-red-200 text-red-600 rounded-full w-6 scale-75 h-6  pb-0.5"
                        >
                            x
                        </button>
                        <h1>Mint ADS</h1>
                        <input
                            type="text"
                            className="w-full outline-none rounded-md border p-3 mt-6"
                            placeholder="Enter no. of Tokens"
                        />
                        <button className="bg-pri px-4 p-2 mx-auto block w-full text-white mt-4 text-center text-base  rounded-md">
                            Buy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

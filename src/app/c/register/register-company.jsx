"use client";
import Link from "next/link";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ABI } from "../../../../contract/engagement-contract.json";
export default function RegisterForm() {
    const engagementContractAddress =
        "0xabB639AC9855954445d9Be8D330C8017A90Fb831";

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
    const [name, setName] = useState("");
    const registerCompany = async () => {
        const provider = await initializeEthers();
        console.log(provider);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            engagementContractAddress,
            ABI,
            signer
        );
        const tx = contract.registerEnterprise(name);
        await tx.wait();
        redirect("/c/dashboard");
    };

    const ipStyle = ` border border-gray-400/30 outline-none rounded-md my-2 p-2 px-3 w-full`;

    return (
        <div>
            <div className="flex bg-blue-50 flex-col h-screen fixed top-0 left-0 w-screen justify-center items-center">
                <h1 className="text-2xl">Register</h1>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex p-8 mt-6 flex-col w-11/12 md:w-4/6 lg:w-1/3 gap-3 rounded-xl drop-shadow-lg bg-white"
                >
                    <label>
                        <span>Name</span>
                        <input
                            placeholder="John Doe"
                            className={ipStyle}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                        />
                    </label>
                    <label>
                        <span>Email</span>
                        <input
                            placeholder="hello@world.com"
                            className={ipStyle}
                            type="email"
                            name="email"
                            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        />
                    </label>

                    <button
                        onClick={registerCompany}
                        type="submit"
                        className="bg-zinc-700 mt-4 text-center text-base text-white rounded-md p-3 px-5"
                    >
                        Submit
                    </button>
                    <Link
                        href={"?close=true"}
                        className="text-red-600 mt-4 text-center text-base  rounded-md"
                    >
                        Skip
                    </Link>
                </form>
            </div>
        </div>
    );
}

"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import wallet from "../../assets/wallet.png";
import { IoMdWallet } from "react-icons/io";
import { useState } from "react";
import RegisterForm from "./register-user";
export default function Register() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    const [isConnected, setIsConnected] = useState(false);

    return (
        <section>
            {isConnected ? (
                <div>
                    <RegisterForm />
                </div>
            ) : (
                <div className="flex relative overflow-hidden h-screen w-screen justify-center items-center flex-col">
                    <h1 className="text-5xl tracking-tighter -mt-24">
                        Register as {type && type}
                    </h1>
                    <button
                        onClick={() => setIsConnected(true)}
                        className=" pri-btn mx-auto w-fit block mt-6"
                    >
                        {" "}
                        Connect Wallet{" "}
                        <IoMdWallet className="inline ml-1 mb-0.5" />
                    </button>
                    <Image
                        className="z-[-99] fixed -bottom-1/2 centerh"
                        src={wallet}
                    />
                </div>
            )}
        </section>
    );
}

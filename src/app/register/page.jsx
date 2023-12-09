"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import wallet from "../../assets/wallet.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import sendPushNotification from "../register/sendPushNotifications"
import { useAccount } from "wagmi";
import { IoMdWallet } from "react-icons/io";
import { useState ,useEffect } from "react";
import RegisterForm from "./register-user";
export default function Register() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  console.log(useAccount());
  const {address , isConnected} = useAccount();


  useEffect(() => {
    if (isConnected) {
        console.log("Address is connected")
      sendPushNotification();
    }
  }, [isConnected]);
  return (
    <section>
        <div className="flex relative overflow-hidden h-screen w-screen justify-center items-center flex-col">
            <h1 className="text-5xl tracking-tighter -mt-24">
                {!isConnected ? 'Register' : `Registered as ${type && type}`} 
            </h1>
            <div className="relative mt-6">
            <ConnectButton />
            </div>
            {!isConnected &&
                
                    <RegisterForm />
                
            }
            <Image
                className="z-[-99] fixed -bottom-1/2 centerh"
                src={wallet}
                alt=""
            />        
        </div>
    </section>
);
 

}

"use client";
import { useState } from "react";
import FormComponent from "../input-form";
import Image from "next/image";
import tkn from "../../../assets/token.svg";
export default function CompanyDashboard() {
    const [openForm, setOpenForm] = useState(false);
    const [buyPopup, setBuyPopup] = useState(false);
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

import { revenueData } from "@/assets/dummy";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import tkn from "../../../assets/token.svg";

import absbg from "../../../assets/abs-bg-2.png";
export default function Earnings() {
    return (
        <section>
            <Image
                src={absbg}
                className="absolute w-full h-screen object-cover top-0 saturate-0 opacity- brightness-110 contrast-125 z-[-99]"
            />
            <h1 className="my-16 text-center text-4xl font-bold">Earnings</h1>
            <div className="grid grid-cols-2 mx-auto w-11/12w-4/6 lg:w-1/2 p-6 gap-8">
                <div className="p-6 overflow-x-hidden shrink-0 rounded-xl drop-shadow-xl bg-white">
                    <h2>Current Balance</h2>
                    <div className="flex gap-1 mt-4 text-4xl">
                        <Image src={tkn} className="inline text-pri w-6 mr-1" />
                        5300 <span className="text-pri">ADS</span>
                    </div>
                </div>
                {revenueData.map((data, index) => (
                    <div
                        className={`rounded-xl flex justify-center items-center flex-col gap-6 drop-shadow-xl backdrop-blur-md bg-pri/5 hover:ring-4 anim ring-pri ring-2 p-8 ${
                            index === revenueData.length - 1 ? "col-span-2" : ""
                        } `}
                        key={index}
                    >
                        <p className="font-bold">{data.name}</p>
                        <p className="text-4xl whitespace-nowrap font-semibold ">
                            {" "}
                            <Image
                                src={tkn}
                                className="inline text-pri w-6 mr-2 mb-2"
                            />
                            {data.amount} <span className="text-sm">$ADS</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

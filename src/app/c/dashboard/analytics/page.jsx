import { revenueData } from "@/assets/dummy";
import Image from "next/image";

import absbg from "../../../../assets/abs-bg-2.png";
export default function CompanyAnalytics() {
    return (
        <section>
            <Image
                src={absbg}
                className="absolute w-full h-screen object-cover top-0 saturate-0 opacity-80 brightness-110 contrast-125 z-[-99]"
            />
            <h1 className="my-16 text-center text-4xl font-bold">Analytics</h1>
            {/* <div className="grid grid-cols-2 mx-auto w-11/12w-4/6 lg:w-1/2 p-6 gap-8">
                {revenueData.map((data, index) => (
                    <div
                        className="rounded-xl flex justify-center items-center flex-col gap-6 drop-shadow-xl backdrop-blur-md bg-pri/5 hover:ring-4 anim ring-pri ring-2 p-8"
                        key={index}
                    >
                        <p className="font-bold">{data.name}</p>
                        <p className="text-4xl whitespace-nowrap font-semibold ">
                            {" "}
                            <Image
                                src={tkn}
                                className="inline text-pri w-6 mr-2 mb-2"
                            />
                            {data.amount}
                        </p>
                    </div>
                ))}
            </div> */}
        </section>
    );
}

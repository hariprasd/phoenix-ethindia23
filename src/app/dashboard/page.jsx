"use client";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Link from "next/link";
import scroll from "../../assets/ads/huddle.jpg";
import Image from "next/image";
export default function DashboardDefault() {
    const [isLoading, setLoading] = useState(true);
    const [isPlayingAd, setPlayingAd] = useState(false);

    const handleStartWatching = () => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    useEffect(() => {
        handleStartWatching();
    });

    const ImageStory = ({ src, alt }) => {
        return (
            <>
                <Image
                    className="w-full drop-shadow-xl object-contain rounded-xl"
                    src={src}
                    alt={alt}
                />
                <Image
                    className="blur-3xl brightness-125 scale-150 opacity- z-[-9] absolute w-full object-cover "
                    src={src}
                    alt={alt}
                />
            </>
        );
    };

    const Mockup = () => {
        return (
            <div className="relative mx-auto border-slate-300 ring-2 ring-white border-[8px] rounded-[2.5rem] h-[600px] w-[450px] shadow-xl">
                <div className="w-[148px] h-[8px] bg-slate-700 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-slate-600 absolute -left-[12px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-slate-600 absolute -left-[12px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-slate-600 absolute -right-[12px] top-[142px] rounded-r-lg"></div>

                <div className="w-full overflow-hidden rounded-[2rem] h-[100%] bg-[url('/assets/ads/scroll.jpg')] p-3 absolute top-0 flex justify-center items-center gap-8">
                    <ImageStory src={scroll} alt="scroll" />
                </div>
            </div>
        );
    };

    return (
        <div>
            {isLoading ? (
                <div className="flex h-screen w-full justify-center items-center">
                    <Loader />
                </div>
            ) : (
                <>
                    {!isPlayingAd ? (
                        <div className="flex flex-col p-8 justify-center items-center h-screen w-full">
                            <h1 className="text-4xl text-center font-bold">
                                Start watching ads
                            </h1>
                            <button
                                onClick={() => {
                                    setLoading(true);
                                    setPlayingAd(true);
                                }}
                                className="pri-btn w-fit block mt-6"
                            >
                                Watch now
                            </button>
                        </div>
                    ) : (
                        <div className=" flex justify-center items-center h-screen w-full">
                            <Mockup />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

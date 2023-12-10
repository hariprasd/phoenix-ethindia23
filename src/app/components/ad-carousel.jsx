"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./slick/slick.theme.css";
import "./slick/slick.css";
import { adsData } from "@/assets/dummy";
import Link from "next/link";
import Image from "next/image";

const AdCarousel = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [adViewReport, setAdViewReport] = useState(adsData.map(() => 0));
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer >= adsData[currentAdIndex].timeout) {
            nextAd();
        }
    }, [timer]);

    const nextAd = () => {
        updateReport();
        setCurrentAdIndex((currentAdIndex + 1) % adsData.length);
        setTimer(0);
    };

    const stayOnAd = () => {
        setTimer(0); // Reset timer to stay on current ad
    };

    const updateReport = () => {
        setAdViewReport((prevReport) => {
            const newReport = [...prevReport];
            newReport[currentAdIndex] += timer;
            return newReport;
        });
    };

    return (
        <div>
            <div>
                {adsData[currentAdIndex].isVideo ? (
                    <video
                        src={adsData[currentAdIndex].src}
                        controls
                        autoPlay
                        loop
                        className="rounded-xl overflow-hidden"
                    />
                ) : (
                    <Link
                        href={adsData[currentAdIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={adsData[currentAdIndex].src}
                            alt={`Ad ${currentAdIndex + 1}`}
                        />
                    </Link>
                )}
            </div>
            <div className="flex justify-between px-8 mt-4">
                <button className="" onClick={nextAd}>
                    Next Ad
                </button>
                <button className="text-red-400" onClick={stayOnAd}>
                    Stay on this Ad
                </button>
            </div>
            {!adsData[currentAdIndex].isVideo && (
                <div>
                    Time Remaining: {adsData[currentAdIndex].timeout - timer}{" "}
                    seconds
                </div>
            )}
            <div className="mt-8 text-center">
                Organization: {adsData[currentAdIndex].name}
            </div>
        </div>
    );
};

export default AdCarousel;

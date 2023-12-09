"use client";
import { useState, useEffect } from "react";
import AnimatedText from "./text-anim";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import Link from "next/link";
export default function HeroSection() {
    const [type, setType] = useState("user"); // 'user' or 'enterprise'

    const toggleType = () => {
        setType(type === "user" ? "enterprise" : "user");
    };

    const user = [
        {
            texts: ["earn", "find", "buy"],
        },
        {
            cta: "Start earning",
        },
        {
            desc: (
                <p className="font-bold">
                    Watch <span className="text-green-600">• </span>Earn{" "}
                    <span className="text-green-600">• </span> Repeat
                </p>
            ),
        },
    ];

    const enterprise = [
        {
            texts: ["generate leads", "get more sales", "reach more customers"],
        },
        {
            cta: "Start posting Ads",
        },
        {
            desc: (
                <AnimatePresence mode="wait">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="font-bold"
                    >
                        Advertise smart
                        <span className="text-green-600">• </span> Pay less{" "}
                    </motion.p>
                </AnimatePresence>
            ),
        },
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const currentChoice = type === "user" ? user : enterprise;

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex =
                (currentTextIndex + 1) % currentChoice[0].texts.length;
            setCurrentTextIndex(nextIndex);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentTextIndex, currentChoice]);

    const currentText = currentChoice[0];

    return (
        <div>
            <div className="toggle-switch">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="text-xs uppercase tracking-widest backdrop-blur-md ring-green-600/50 bg-green-300/10 text-black hover:ring-green-400 ring-2 rounded-full px-4 md:px-6 p-3 mx-auto w-fit block "
                    onClick={toggleType}
                >
                    {type === "user"
                        ? " are you a Business Owner?"
                        : "are you a User?"}
                    {/* <HiOutlineSwitchVertical className="inline ml-1 mb-0.5 text-md" /> */}
                </motion.button>
            </div>
            <div className="text-3xl md:text-6xl mt-8 tracking-tighter text-center font-black">
                <AnimatedText
                    key={currentTextIndex}
                    text={currentText.texts[currentTextIndex]}
                />
                <span className="block md:mt-2">
                    {" "}
                    with ads<span className="text-green-600">ie</span>
                </span>

                <Link
                    className="pri-btn md:text-lg font-medium mt-8 md:mt-16 px-8 block w-fit mx-auto"
                    href={"#"}
                >
                    {currentChoice[1].cta}
                </Link>
                <div className=" tracking-normal md:text-xl mt-6 text-green-800 ">
                    {currentChoice[2].desc}
                </div>
            </div>
        </div>
    );
}

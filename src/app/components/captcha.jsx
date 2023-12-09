"use client";
import React, { useState, useEffect } from "react";

const Captcha = () => {
    const [captchaText, setCaptchaText] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);

    useEffect(() => {
        generateCaptcha();
        const interval = setInterval(() => {
            setShowCaptcha(true);
            setTimeout(() => {
                setShowCaptcha(false);
            }, 15000); // Hide after 15 seconds
        }, 25000); // Every 25 seconds

        return () => clearInterval(interval);
    }, []);

    const generateCaptcha = () => {
        const text = Math.random().toString(36).substring(2, 8);
        setCaptchaText(text);
    };

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInput("");
        setShowCaptcha(false);
        setIsValid(userInput === captchaText);
        console.log(isValid);
    };

    return (
        <div
            className={`${
                showCaptcha
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            } flex justify-center fixed top-0 left-0 items-center h-screen w-screen backdrop-brightness-50`}
        >
            <div className="flex flex-col gap-3 justify-center items-center p-8 bg-white rounded-lg drop-shadow-xl">
                <div className="pointer-events-none font-mono text-2xl select-none">
                    {captchaText}
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <input
                        type="text"
                        className="border border-zinc-400 rounded-lg p-3"
                        value={userInput}
                        onChange={(e) => handleChange(e)}
                    />
                    <button
                        className={`bg-zinc-700 text-base text-white rounded-md p-3 px-5 ${
                            userInput.length <= 5 &&
                            "opacity-50 pointer-events-none"
                        }  `}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    {!isValid && userInput.length > 5 && (
                        <p>CAPTCHA invalid!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Captcha;

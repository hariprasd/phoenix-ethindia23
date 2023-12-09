"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedText = ({ text, duration = 0.8 }) => {
    // Split the text into words
    const words = text?.split(" ");

    return (
        <AnimatePresence>
            {words?.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                    {/* Iterate over each letter in the word */}
                    {word.split("").map((letter, letterIndex) => (
                        <motion.h1
                            key={letterIndex}
                            initial={{ y: 20, opacity: 0, rotateZ: 2 }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                rotateZ: 0,
                                transition: {
                                    duration: duration,
                                    delay:
                                        (wordIndex * word.length +
                                            letterIndex) *
                                        0.1,
                                },
                            }}
                            transition={{ duration: 0.5 }}
                            exit={{ y: -20, opacity: 0, rotateZ: -2 }}
                            className="inline-block whitespace-nowrap"
                        >
                            {letter}
                        </motion.h1>
                    ))}
                    {/* Add a space after each word except the last */}
                    {wordIndex < words.length - 1 && (
                        <p className="inline">&nbsp;</p>
                    )}
                </span>
            ))}
        </AnimatePresence>
    );
};

export default AnimatedText;

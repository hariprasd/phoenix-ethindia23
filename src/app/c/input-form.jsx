"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FormComponent = () => {
    const [file, setFile] = useState(null);
    const [adType, setAdType] = useState("");
    const [link, setLink] = useState("");
    const [timeout, setTimeoutValue] = useState();
    const [isVideo, setIsVideo] = useState(false);
    const [reward, setReward] = useState();

    const onDrop = useCallback((acceptedFiles) => {
        // Assuming only the first file is relevant
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        setIsVideo(selectedFile.type.startsWith("video/"));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*,video/*",
        maxFiles: 1,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            src: file,
            isVideo,
            link,
            timeout,
        };
        console.log(formData); // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 ">
            <div
                {...getRootProps()}
                className="dropzone border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer"
            >
                <input {...getInputProps()} />
                <p className="text-gray-700">
                    Drag &apos;n&apos; drop some files here, or click to select
                    files
                </p>
            </div>

            <select
                value={adType}
                onChange={(e) => setAdType(e.target.value)}
                className="mt-4 w-full p-2 border-2 border-gray-300 rounded-md"
            >
                <option value="image">Image Only</option>
                <option value="imageLink">Image with Link</option>
                <option value="video">Video Only</option>
                <option value="videoLink">Video with Link</option>
            </select>

            {["imageLink", "videoLink"].includes(adType) && (
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Link"
                    className="mt-4 w-full p-2 border-2 border-gray-300 rounded-md"
                />
            )}

            <input
                type="number"
                value={timeout}
                onChange={(e) => setTimeoutValue(e.target.value)}
                placeholder="Timeout in seconds"
                className="mt-4 w-full p-2 border-2 border-gray-300 rounded-md"
            />

            <input
                type="text"
                placeholder="Reward per view"
                value={reward}
                onChange={(e) => {
                    setReward(e.target.value);
                }}
                className="mt-4 w-full p-2 border-2 border-gray-300 rounded-md"
            />

            <button
                type="submit"
                className="mt-4 w-full bg-pri text-white font-bold py-3 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default FormComponent;

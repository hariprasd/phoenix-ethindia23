"use client";
import { useState } from "react";
import FormComponent from "../input-form";

export default function CompanyDashboard() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <div>
            <h1 className="text-4xl text-center mt-16">Company Dashboard</h1>
            <div className="p-8">
                <button
                    onClick={() => setOpenForm(!openForm)}
                    className="bg-pri px-4 p-2 mx-auto block w-fit text-white mt-12 text-center text-base  rounded-md"
                >
                    {openForm ? `Close Form` : `Create an Ad post  +`}
                </button>
            </div>
            {openForm && <FormComponent />}
        </div>
    );
}

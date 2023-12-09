"use client";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function SideLayout({ children }) {
    const pathname = usePathname();
    const tabs = [
        {
            name: "Home",
            path: "/dashboard",
            icon: <BiSolidHomeAlt2 />,
        },
        {
            name: "Earnings",
            path: "/dashboard/earnings",
            icon: <FaEthereum />,
        },
        {
            name: "Profile",
            path: "/dashboard/profile",
            icon: <FaUser />,
        },
        {
            name: "Referral",
            path: "/dashboard/referral",
            icon: <FaPeoplePulling />,
        },
        {
            name: "Logout",
            path: "/dashboard/logout",
            icon: <IoLogOut />,
        },
    ];

    return (
        <div className="flex">
            <div className="flex sticky top-0 toppppp border-e-2 min-w-[250px] border-green-500/30 h-screen overflow-y-scroll shrink-0  p-3 w-fit flex-col gap-2">
                <Link href={"/"} className="flex gap-2 m-4 mb-12">
                    <span className="text-4xl font-bold ">
                        Ads<span className="text-pri">ie</span>
                    </span>
                </Link>
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        href={`${tab.path}`}
                        className={` ${
                            pathname === `${tab.path}`
                                ? "text-white bg-pri"
                                : "text-black bg-primary/0"
                        } p-3 anim px-6 flex w-full gap-2 justify-start items-center rounded-lg`}
                    >
                        {tab.icon} {tab.name}
                    </Link>
                ))}
            </div>
            <aside className="w-full">{children}</aside>
        </div>
    );
}

import Link from "next/link";

export default function Nav() {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];
    return (
        <nav>
            <ul className="flex pc justify-between items-center w-full p-4 px-8">
                <h1 className="text-4xl  tracking-tighter font-bold">
                    Ads<span className="text-pri">ie</span>
                </h1>
                <div className="flex gap-8 items-center mr-3">
                    {links.map((link, i) => (
                        <Link href={link.path} className="p-2 py-4" key={i}>
                            {link.name}
                        </Link>
                    ))}
                    {/* <button className="bg-zinc-900 text-base font-light text-white rounded-full p-3 px-5">
                        Connect Wallet
                    </button> */}
                </div>
            </ul>
        </nav>
    );
}

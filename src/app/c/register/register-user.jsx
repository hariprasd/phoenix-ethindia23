import Link from "next/link";

export default function RegisterForm() {
    const ipStyle = ` border border-gray-400/30 outline-none rounded-md my-2 p-2 px-3 w-full`;
    return (
        <div>
            <div className="flex bg-blue-50 flex-col h-screen fixed top-0 left-0 w-screen justify-center items-center">
                <h1 className="text-2xl">Register</h1>
                <form className="flex p-8 mt-6 flex-col w-11/12 md:w-4/6 lg:w-1/3 gap-3 rounded-xl drop-shadow-lg bg-white">
                    <label>
                        <span>Name</span>
                        <input
                            placeholder="John Doe"
                            className={ipStyle}
                            type="text"
                            name="name"
                        />
                    </label>
                    <label>
                        <span>Email</span>
                        <input
                            placeholder="hello@world.com"
                            className={ipStyle}
                            type="email"
                            name="email"
                            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        />
                    </label>
                    <label>
                        <span>Mobile</span>
                        <input
                            placeholder="9876543210"
                            className={ipStyle}
                            type="number"
                            name="number"
                        />
                    </label>
                    <Link
                        href={"/dashboard"}
                        type="submit"
                        className="bg-zinc-700 mt-4 text-center text-base text-white rounded-md p-3 px-5"
                    >
                        Submit
                    </Link>
                    <Link
                        href={"?close=true"}
                        className="text-red-600 mt-4 text-center text-base  rounded-md"
                    >
                        Skip
                    </Link>
                </form>
            </div>
        </div>
    );
}

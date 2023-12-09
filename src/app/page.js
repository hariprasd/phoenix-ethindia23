import Image from "next/image";
import Nav from "./components/nav";
import Captcha from "./components/captcha";
import bg from "../assets/bg.svg";
import HeroSection from "./components/hero";
export default function Home() {
    return (
        <main>
            {/* <Nav /> */}
            <Image
                className="absolute w-full h-screen md:h-auto object-cover top-0 left-0 z-[-999] opacity-10"
                src={bg}
                alt="bg"
            />
            {/* <Captcha /> */}
            <section>
                <div className="mt-36">
                    <HeroSection type={"user"} />
                </div>
            </section>
            <section className="mt-16"></section>
        </main>
    );
}

import Image from "next/image";
import Nav from "./components/nav";
import Captcha from "./components/captcha";

export default function Home() {
    return (
        <main>
            <Nav />
            <Captcha />
        </main>
    );
}

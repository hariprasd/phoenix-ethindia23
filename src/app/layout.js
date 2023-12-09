import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const pl = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Adsie",
    description: "just ads & cash",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={pl.className}>{children}</body>
        </html>
    );
}

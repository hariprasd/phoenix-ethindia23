import { userData } from "@/assets/dummy";
import Image from "next/image";
import qr from "../../../assets/qrcode.png";
export default function Profile() {
    const ipStyle = ` text-xl font-bold  my-5 w-full`;
    const valStyle = `text-lg opacity-70`;
    return (
        <section>
            <h1 className="my-16 text-center text-4xl font-bold">Profile</h1>
            <div className="w-fit mx-auto">
                {userData.map((data, index) => (
                    <div key={index}>
                        <p className={ipStyle}>
                            Name : <span className={valStyle}>{data.name}</span>
                        </p>
                        <p className={ipStyle}>
                            Email :{" "}
                            <span className={valStyle}>{data.email}</span>
                        </p>
                        <p className={ipStyle}>
                            Mobile :{" "}
                            <span className={valStyle}>{data.number}</span>
                        </p>
                    </div>
                ))}
                <Image src={qr} className="w-48 mx-auto" alt="qr" />
            </div>
        </section>
    );
}

import { referredByYouData } from "@/assets/dummy";

export default function Referral() {
    return (
        <section>
            <h1 className="my-16 text-center text-4xl font-bold">Referral</h1>
            <div className="grid grid-cols-2 mx-auto w-11/12w-4/6 lg:w-1/2 p-6 gap-8">
                <div>
                    <h2 className="text-xl mb-4">Referred by you</h2>
                    <div className="flex mt-6 flex-col gap-8">
                        {referredByYouData.map((_, index) => (
                            <div
                                key={index}
                                className="bg-white my-2 flex gap-2 items-center"
                            >
                                <img
                                    className="rounded-full"
                                    src={`http://picsum.photos/32/32?${index}`}
                                    alt=""
                                />
                                <p>{referredByYouData[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl mb-4">Referred you</h2>
                    <div className="bg-white my-2 flex gap-2 items-center">
                        <img
                            className="rounded-full"
                            src={`http://picsum.photos/32/32`}
                            alt=""
                        />
                        <p>Hari</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

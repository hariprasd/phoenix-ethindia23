"use client";
export default function Loader() {
    return (
        <>
            <style jsx>
                {`
                    .loader {
                        position: relative;
                        width: 80px;
                        height: 80px;
                    }

                    .loader:before,
                    .loader:after {
                        content: "";
                        border-radius: 50%;
                        position: absolute;
                        inset: 0;
                        box-shadow: 0 0 10px 2px #00baaf30 inset;
                    }
                    .loader:after {
                        box-shadow: 0 2px 0 #00baaf inset;
                        animation: rotate 2s linear infinite;
                    }

                    @keyframes rotate {
                        0% {
                            transform: rotate(0);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
            <span className="loader"></span>
        </>
    );
}

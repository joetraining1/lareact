import { AllColors } from "@/lib/constant/Colors";
import { AllSize } from "@/lib/constant/Styles";
import React from "react";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import { Outlet } from "react-router-dom";
import { Head } from "@inertiajs/react";

const Login = () => {
    return (
        <React.Fragment>
            <Head title="Aplikasi Arsip dan Purchasing" />
            <div
                style={{
                    height: "100svh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "140%",
                        backgroundColor: AllColors.GreenDoff,
                        display: "flex",
                        justifyContent: "center",
                        boxShadow: "0px 5px 25px 10px rgba(0,0,0,0.25)",
                        position: "relative",
                        alignItems: "end",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            display: "flex",
                            zIndex: 1,
                            padding: "0% 0 5% 15%",
                            flexDirection: "column",
                        }}
                    >
                        <h4
                            style={{
                                color: "#fff",
                                letterSpacing: "2px",
                                fontSize: "3em",
                                fontWeight: "500",
                                fontFamily: "Playfair Display, serif",
                            }}
                        >
                            CV. Karya Abadi
                        </h4>
                        <h4
                            style={{
                                color: "#fff",
                                fontWeight: "500",
                                letterSpacing: "2px",
                                fontSize: "3em",
                                fontFamily: "Playfair Display, serif",
                            }}
                        >
                            Dekat Dengan Anda
                        </h4>
                    </div>
                    <div
                        style={{
                            width: "40%",
                            height: "100%",
                            overflow: "auto",
                            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,245,255,0) 100%), url(${bg1})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            boxShadow: "0px 5px 15px 10px rgba(0,0,0,0.25)",
                        }}
                    ></div>
                    <div
                        style={{
                            width: "40%",
                            height: "100%",
                            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,245,255,0) 100%), url(${bg2})`,
                            backgroundPosition: "center left",
                            backgroundSize: "cover",
                            boxShadow: "0px 5px 15px 10px rgba(0,0,0,0.25)",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        ...AllSize,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            width: "450px",
                            height: "fit-content",
                            padding: "3vw",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;

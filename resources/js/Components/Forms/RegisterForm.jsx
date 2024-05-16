import { LoginScene, h4FontStyle } from "@/lib/constant/Styles";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import UniversalButton from "@/lib/parts/UniversalButton/UniversalButton";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ApiClient from "@/lib/services/ApiClient";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [payload, setPayload] = useState({
        email: "",
        password: "",
    });
    const [msg, setMsg] = useState("");

    const adding = async () => {
        const req = await ApiClient.post("auth/register", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                setMsg(error?.data?.message);
                return;
            });
        Cookies.set("accessToken", req.authorization.token);
        navigate("/");
        return;
    };

    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{
                    ...LoginScene,
                    fontWeight: "600",
                }}
            >
                Register
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    ...LoginScene,
                }}
            >
                New member assigning.
            </Typography>
            <br />
            <InputLabel
                title={"Email"}
                labelStyle={{
                    fontFamily: LoginScene.fontFamily,
                }}
                action={(a) => (payload.email = a)}
            />
            <InputLabel
                title={"Password"}
                type={"password"}
                labelStyle={{
                    fontFamily: LoginScene.fontFamily,
                }}
                action={(a) => (payload.password = a)}
            />
            {msg && (
                <Typography
                    variant="body2"
                    sx={{
                        fontStyle: "italic",
                        color: "red",
                        ...h4FontStyle,
                    }}
                >
                    {msg}
                </Typography>
            )}
            <br />
            <SectionDivider
                styles={{
                    justifyContent: "space-between",
                }}
            >
                <SiteButton
                    title={"submit"}
                    styles={{
                        fontFamily: LoginScene.fontFamily,
                    }}
                    action={() => adding()}
                />
                <UniversalButton
                    title={"login"}
                    variant={"text"}
                    action={() => navigate("/login")}
                />
            </SectionDivider>
        </React.Fragment>
    );
};

export default RegisterForm;

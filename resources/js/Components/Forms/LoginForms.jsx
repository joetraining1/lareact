import { LoginScene } from "@/lib/constant/Styles";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import UniversalButton from "@/lib/parts/UniversalButton/UniversalButton";
import { useNavigate } from "react-router-dom";
import ApiClient from "@/lib/services/ApiClient";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";
import Cookies from "js-cookie";

const LoginForms = () => {
    const [payload, setPayload] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const adding = async () => {
        const req = await ApiClient.post("auth/login", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });

        dispatch(
            login({
                user_id: req.user.user_id,
                type: req.user.type,
                token: req.authorization.accessToken,
            })
        );
        Cookies.set("accessToken", req.authorization.accessToken);
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
                Signing In
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    ...LoginScene,
                }}
            >
                Masuk untuk melanjutkan.
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
            <br />
            <SectionDivider
                styles={{
                    justifyContent: "space-between",
                }}
            >
                <SiteButton
                    title={"Sign in"}
                    styles={{
                        fontFamily: LoginScene.fontFamily,
                    }}
                    action={() => adding()}
                />
                <UniversalButton
                    title={"register"}
                    variant={"text"}
                    action={() => navigate("/register")}
                />
            </SectionDivider>
        </React.Fragment>
    );
};

export default LoginForms;

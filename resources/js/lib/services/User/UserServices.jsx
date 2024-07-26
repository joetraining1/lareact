import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ApiClient from "../ApiClient";
import { logout } from "@/redux/slices/authSlice";
import Cookies from "js-cookie";

const UserServices = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signout = async () => {
        const req = await ApiClient.post("auth/logout").then((res) => {
            return res.data;
        });
        console.log(req);
        dispatch(logout());
        Cookies.remove("accessToken");
        navigate("/");
        return;
    };

    const deleting = async ({ id }) => {
        const req = await ApiClient.delete(`account/${id}`).then((res) => {
            return res.data;
        });
        console.log(req);
        return;
    };

    const forceOut = () => {
        dispatch(logout());
        Cookies.remove("accessToken");
        navigate("/");
        return;
    };

    return { signout, forceOut, deleting };
};

export default UserServices;

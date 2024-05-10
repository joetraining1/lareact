import { slidePrev } from "@/redux/slices/sidebarSlice";
import React from "react";
import { useDispatch } from "react-redux";

const SideBurger = () => {
    const burger = document.getElementById("burger-menu");
    const dispatch = useDispatch();
    return (
        <div
            id="burger-menu"
            onClick={() => {
                dispatch(slidePrev());
                burger.classList.toggle("close");
                return;
            }}
        >
            <span></span>
        </div>
    );
};

export default SideBurger;

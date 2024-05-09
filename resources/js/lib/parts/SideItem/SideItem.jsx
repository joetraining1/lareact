import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { urlFilter } from "@/lib/utils/Regex";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideItem = ({ path, title, id, icon, styles }) => {
    const location = useLocation();
    const current = new RegExp(path);

    const proc = urlFilter(location.pathname);
    return (
        <NavLink
            style={{
                ...styles,
                ...h4FontStyle,
                color: AllColors.GreenDoff,
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                gap: "1vw",
                borderRight: proc.includes(path)
                    ? `3px solid ${AllColors.GreenDoff}`
                    : "none",
            }}
            id={id}
            to={path}
            replace={true}
        >
            {icon}
            {title}
        </NavLink>
    );
};

export default SideItem;

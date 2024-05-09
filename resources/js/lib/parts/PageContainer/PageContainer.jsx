import { SideSx } from "@/lib/constant/Styles";
import React from "react";
import { useSelector } from "react-redux";

const PageContainer = ({ children, styles }) => {
    const side = useSelector((state) => state.sidebar.sidebarState.open);

    return (
        <div
            id="page-container"
            style={{
                height: "95svh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingTop: "1vw",
                paddingRight: "2vw",
                paddingBottom: "1vw",
                gap: "1vw",
                paddingLeft: side ? `calc(1vw + ${SideSx.width})` : "1vw",
                ...styles,
                transition: "all 0.2s ease-in-out",
            }}
        >
            {children}
        </div>
    );
};

export default PageContainer;

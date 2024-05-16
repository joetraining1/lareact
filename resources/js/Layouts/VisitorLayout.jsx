import React from "react";

const VisitorLayout = () => {
    return (
        <div
            style={{
                height: "100svh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Outlet />;
        </div>
    );
};

export default VisitorLayout;

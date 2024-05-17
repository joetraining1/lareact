import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const VisitorLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login", {
            replace: true,
        });

        return;
    }, []);

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

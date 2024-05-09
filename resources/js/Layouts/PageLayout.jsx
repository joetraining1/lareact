import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default PageLayout;

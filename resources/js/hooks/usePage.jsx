import { PageContext } from "@/contexts/PageContext";
import React, { useContext } from "react";

const usePage = () => {
    return useContext(PageContext);
};

export default usePage;

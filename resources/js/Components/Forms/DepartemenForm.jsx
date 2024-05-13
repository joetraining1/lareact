import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const DepartemenForm = () => {
    return (
        <div
            style={{
                display: "flex",
                width: "450px",
                height: "fit-content",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <InputLabel title={"Nama Departemen :"} />
            <InputLabel title={"Lokasi Departemen :"} />
            <br />
            <SiteButton title={"submit"} />
        </div>
    );
};

export default DepartemenForm;

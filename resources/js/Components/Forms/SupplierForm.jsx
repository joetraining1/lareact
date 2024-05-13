import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const SupplierForm = () => {
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
            <InputLabel title={"Nama Supplier :"} />
            <InputLabel title={"Kontak Supplier :"} />
            <InputLabel title={"Alamat Supplier :"} />

            <br />
            <SiteButton title={"submit"} />
        </div>
    );
};

export default SupplierForm;

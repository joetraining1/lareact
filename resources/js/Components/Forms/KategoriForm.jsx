import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const KategoriForm = () => {
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
            <InputLabel title={"Nama Kategori :"} />
            <InputLabel
                title={"Deskripsi Kategori :"}
                props={{
                    multiline: true,
                    minRows: 3,
                    maxRows: 3,
                }}
            />
            <br />
            <SiteButton title={"submit"} />
        </div>
    );
};

export default KategoriForm;

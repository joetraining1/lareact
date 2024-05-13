import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const OrderProductForm = ({ order_id }) => {
    return (
        <div
            style={{
                width: "400px",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                position: "relative",
                padding: "10px 0",
            }}
        >
            <SearchField title={"Cari Produk :"} />
            <InputLabel title={"Jumlah Produk :"} />
            <br />
            <SiteButton title={"Simpan"} />
        </div>
    );
};

export default OrderProductForm;

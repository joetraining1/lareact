import SectionHeader from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const MasterDataV1 = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <SectionHeader
                title={"Transaksi"}
                value={"Kelola data transaksi yang terjadi di perusahaan."}
            />
            <SiteButton
                variant="text"
                title={"manage transaction"}
                action={() => navigate("transaksi")}
                styles={{
                    width: "fit-content",
                }}
            />
            <br />
            <SectionHeader
                title={"Shipment"}
                value={
                    "Kelola data pengiriman logistik yang terjadi di perusahaan."
                }
            />
            <SiteButton
                variant="text"
                title={"manage shipment"}
                action={() => navigate("shipment")}
                styles={{
                    width: "200px",
                }}
            />
            <br />
        </React.Fragment>
    );
};

export default MasterDataV1;

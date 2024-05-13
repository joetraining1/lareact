import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { Typography } from "@mui/material";
import React from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
import { h4FontStyle } from "@/lib/constant/Styles";
import { AllColors } from "@/lib/constant/Colors";

const OrderTransaksiForm = () => {
    return (
        <div
            style={{
                width: "500px",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <InputLabel title={"Nomor Referensi :"} />
            <Typography
                variant="body1"
                sx={{ ...h4FontStyle, color: AllColors.DarkGrey }}
            >
                File Upload :
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    ...h4FontStyle,
                    color: AllColors.DarkGrey,
                    fontStyle: "italic",
                }}
            >
                Upload max size 2mb, type: pdf
            </Typography>
            <SectionDivider>
                <FileUploader />
            </SectionDivider>
            <SearchField title={"Supplier :"} />
            <InputLabel title={"Biaya Transaksi :"} />
            <InputLabel title={"Tanggal Transaksi :"} />
            <br />
            <SiteButton title={"Submit"} />
        </div>
    );
};

export default OrderTransaksiForm;
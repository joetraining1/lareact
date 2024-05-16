import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
import { h4FontStyle } from "@/lib/constant/Styles";
import { AllColors } from "@/lib/constant/Colors";
import useModal from "@/hooks/useModal";
import ApiClient from "@/lib/services/ApiClient";

const OrderTransaksiForm = ({ id }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({});

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `order/item/${id}?_method=PUT`,
                payload
            )
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                });

            shiftModal();
            return console.log(up);
        }

        const req = await ApiClient.post("order/item", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
        shiftModal();
        return console.log(req);
    };

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

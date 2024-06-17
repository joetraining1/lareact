import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
import { Typography } from "@mui/material";
import { h4FontStyle } from "@/lib/constant/Styles";
import { AllColors } from "@/lib/constant/Colors";
import useModal from "@/hooks/useModal";
import ApiClient from "@/lib/services/ApiClient";
import TransaksiItems from "../DropItems/TransaksiItems";
import { useSelector } from "react-redux";
import FormData from "form-data";

const OrderShipmentForm = ({
    id,
    trId = "",
    sRef = "",
    sId = "",
    oId = "",
    dId = "",
    cost = "",
    date = "",
    arrive = "",
}) => {
    const { shiftModal } = useModal();
    const user = useSelector((state) => state.auth.authState);
    const [docx, setDocx] = useState(null);

    const [payload, setPayload] = useState({
        transaksi_id: trId,
        shipment_ref: sRef,
        document_id: dId,
        order_id: oId,
        shipment_cost: cost,
        shipment_start: date,
        shipment_estimated: arrive,
        user_id: user.user_id,
    });

    const adding = async () => {
        const sendReq = new FormData();
        sendReq.append("file_pdf", docx);
        sendReq.append("user_id", user.user_id);
        if (sId) {
            //send the document first
            const up = await ApiClient.post(
                `shipment/${sId}?_method=PUT`,
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

        //send the document first

        const doc = await ApiClient.post(`doc`, sendReq).then((res) => {
            return res.data;
        });

        payload.document_id = doc.document_id;

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
            <InputLabel
                title={"Nomor Referensi :"}
                action={(a) => (payload.shipment_ref = a)}
                value={payload.shipment_ref}
            />
            <SearchField
                title={"ID Transaksi :"}
                target={"transaksis/search"}
                value={payload.transaksi_id}
            >
                <TransaksiItems
                    action={(a) =>
                        setPayload({
                            ...payload,
                            transaksi_id: a.transaksi_id,
                        })
                    }
                />
            </SearchField>
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
            <InputLabel
                title={"Biaya Pengiriman :"}
                action={(a) => (payload.shipment_cost = parseInt(a))}
                value={payload.shipment_cost}
            />
            <InputLabel
                title={"Tanggal Pengiriman :"}
                action={(a) => (payload.shipment_start = a)}
                value={payload.shipment_start}
            />
            <InputLabel
                title={"Estimasi Tiba :"}
                action={(a) => (payload.shipment_estimated = a)}
                value={payload.shipment_estimated}
            />
            <br />
            <SiteButton title={"Submit"} action={() => adding()} />
        </div>
    );
};

export default OrderShipmentForm;

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
import { useSelector } from "react-redux";
import SupplierItems from "../DropItems/SupplierItems";

const OrderTransaksiForm = ({
    id,
    trId = "",
    trRef = "",
    sId = "",
    oId = "",
    dId = "",
    cost = "",
    date = "",
}) => {
    const { shiftModal } = useModal();

    const user = useSelector((state) => state.auth.authState);

    const [payload, setPayload] = useState({
        transaksi_ref: trRef,
        supplier_id: sId,
        order_id: oId,
        transaksi_cost: cost,
        transaksi_date: date,
        user_id: user.user_id,
    });

    const adding = async () => {
        if (trId) {
            const up = await ApiClient.post(
                `transaksi/${trId}?_method=PUT`,
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

        const req = await ApiClient.post("transaksi", payload)
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
                action={(a) => (payload.transaksi_ref = a)}
                value={payload.transaksi_ref}
            />
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
            <SearchField
                title={"Supplier :"}
                target={"suppliers/search"}
                value={payload.supplier_id}
            >
                <SupplierItems
                    action={(a) =>
                        setPayload({
                            ...payload,
                            supplier_id: a.supplier_id,
                        })
                    }
                />
            </SearchField>
            <InputLabel
                title={"Biaya Transaksi :"}
                action={(a) => (payload.transaksi_cost = parseInt(a))}
                value={payload.transaksi_cost}
            />
            <InputLabel
                title={"Tanggal Transaksi :"}
                action={(a) => (payload.transaksi_date = a)}
                value={payload.transaksi_date}
            />
            <br />
            <SiteButton title={"Submit"} action={() => adding()} />
        </div>
    );
};

export default OrderTransaksiForm;

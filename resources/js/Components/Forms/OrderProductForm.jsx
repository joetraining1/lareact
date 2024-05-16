import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const OrderProductForm = ({ order_id, id }) => {
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

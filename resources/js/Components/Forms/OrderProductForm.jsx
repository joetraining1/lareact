import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";
import ProductItems from "../DropItems/ProductItems";

const OrderProductForm = ({ order_id, id, pId = "", qty = "", cost = "" }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({
        order_id: order_id,
        product_id: pId,
        order_qty: qty,
        order_cost: cost,
    });

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
            <SearchField
                title={"Cari Produk :"}
                target={"products/search"}
                value={payload.product_id}
            >
                <ProductItems
                    action={(a) =>
                        setPayload({
                            ...payload,
                            product_id: a.product_id,
                        })
                    }
                />
            </SearchField>
            <InputLabel
                title={"Jumlah Produk :"}
                action={(a) => (payload.order_qty = parseInt(a))}
                value={payload.order_qty}
            />
            <InputLabel
                title={"Biaya Pesanan :"}
                action={(a) => (payload.order_cost = parseInt(a))}
                value={payload.order_cost}
            />
            <br />
            <SiteButton title={"Simpan"} action={() => adding()} />
        </div>
    );
};

export default OrderProductForm;

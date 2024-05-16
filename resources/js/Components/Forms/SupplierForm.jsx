import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const SupplierForm = ({ id, name = "", kontak = "", alamat = "" }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({
        supplier_name: name,
        supplier_kontak: kontak,
        supplier_alamat: alamat,
    });

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `supplier/${id}?_method=PUT`,
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
        const req = await ApiClient.post("supplier", payload)
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
                display: "flex",
                width: "450px",
                height: "fit-content",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <InputLabel
                title={"Nama Supplier :"}
                action={(a) => (payload.supplier_name = a)}
            />
            <InputLabel
                title={"Kontak Supplier :"}
                action={(a) => (payload.supplier_kontak = a)}
            />
            <InputLabel
                title={"Alamat Supplier :"}
                action={(a) => (payload.supplier_alamat = a)}
            />

            <br />
            <SiteButton title={"submit"} action={() => adding()} />
        </div>
    );
};

export default SupplierForm;

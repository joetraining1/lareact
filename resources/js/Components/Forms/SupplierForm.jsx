import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import SupplierServices from "@/lib/services/Supplier/SupplierServices";
import React, { useState } from "react";

const SupplierForm = ({ id, refresh, name = "", kontak = "", alamat = "" }) => {
    const { shiftModal } = useModal();
    const { adding } = SupplierServices();

    const [payload, setPayload] = useState({
        supplier_name: name,
        supplier_kontak: kontak,
        supplier_alamat: alamat,
    });

    const service = async () => {
        if (id) {
            adding({
                id: id,
                payload: payload,
            });
            refresh();
            shiftModal();
            return;
        }
        adding({
            payload: payload,
        });
        refresh();
        shiftModal();
        return;
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
                value={payload.supplier_name}
            />
            <InputLabel
                title={"Kontak Supplier :"}
                action={(a) => (payload.supplier_kontak = a)}
                value={payload.supplier_kontak}
            />
            <InputLabel
                title={"Alamat Supplier :"}
                action={(a) => (payload.supplier_alamat = a)}
                value={payload.supplier_alamat}
            />

            <br />
            <SiteButton title={"submit"} action={() => service()} />
        </div>
    );
};

export default SupplierForm;

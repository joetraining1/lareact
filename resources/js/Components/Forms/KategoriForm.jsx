import useModal from "@/hooks/useModal";
import usePage from "@/hooks/usePage";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import KategoriServices from "@/lib/services/Kategori/KategoriServices";
import React, { useState } from "react";

const KategoriForm = ({ refresh, id, name = "", deskripsi = "" }) => {
    const { shiftModal } = useModal();
    const { adding } = KategoriServices();

    const [payload, setPayload] = useState({
        kategori_name: name,
        kategori_deskripsi: deskripsi,
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
                title={"Nama Kategori :"}
                value={payload.kategori_name}
                action={(a) => (payload.kategori_name = a)}
            />
            <InputLabel
                title={"Deskripsi Kategori :"}
                value={payload.kategori_deskripsi}
                props={{
                    multiline: true,
                    minRows: 3,
                    maxRows: 3,
                }}
                action={(a) => (payload.kategori_deskripsi = a)}
            />
            <br />
            <SiteButton title={"submit"} action={() => service()} />
        </div>
    );
};

export default KategoriForm;

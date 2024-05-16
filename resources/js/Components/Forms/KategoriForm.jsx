import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const KategoriForm = ({ refresh, id, name = "", deskripsi = "" }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({
        kategori_name: name,
        kategori_deskripsi: deskripsi,
    });

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `kategori/${id}?_method=PUT`,
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
        const req = await ApiClient.post("kategori", payload)
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
            <SiteButton title={"submit"} action={() => adding()} />
        </div>
    );
};

export default KategoriForm;

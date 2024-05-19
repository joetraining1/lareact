import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import DepartemenServices from "@/lib/services/Departemen/DepartemenServices";
import React, { useState } from "react";

const DepartemenForm = ({ id, refresh, name = "", lokasi = "" }) => {
    const { shiftModal } = useModal();
    const { adding } = DepartemenServices();

    const [payload, setPayload] = useState({
        departemen_name: name,
        lokasi: lokasi,
    });

    const service = async () => {
        if (id) {
            adding({
                id: id,
                payload: payload,
            });
            refresh();
            shiftModal();
            return console.log(up);
        }

        adding({
            payload: payload,
        });
        refresh();
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
                title={"Nama Departemen :"}
                action={(a) => (payload.departemen_name = a)}
            />
            <InputLabel
                title={"Lokasi Departemen :"}
                action={(a) => (payload.lokasi = a)}
            />
            <br />
            <SiteButton title={"submit"} action={() => service()} />
        </div>
    );
};

export default DepartemenForm;

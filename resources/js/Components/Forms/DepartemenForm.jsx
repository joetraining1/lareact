import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const DepartemenForm = ({ id }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({
        departemen_name: "",
        lokasi: "",
    });

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `departemen/${id}?_method=PUT`,
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
        const req = await ApiClient.post("departemen", payload)
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
                title={"Nama Departemen :"}
                action={(a) => (payload.departemen_name = a)}
            />
            <InputLabel
                title={"Lokasi Departemen :"}
                action={(a) => (payload.lokasi = a)}
            />
            <br />
            <SiteButton title={"submit"} action={() => adding()} />
        </div>
    );
};

export default DepartemenForm;

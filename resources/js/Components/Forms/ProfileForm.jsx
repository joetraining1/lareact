import { h4FontStyle } from "@/lib/constant/Styles";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const ProfileForm = ({ id, nama = "", kontak = "", alamat = "" }) => {
    const [payload, setPayload] = useState({
        user_id: id,
        nama: nama,
        kontak: kontak,
        alamat: alamat,
    });

    const [msg, setMsg] = useState("");
    const errorMessage = setTimeout(() => {
        return setMsg("");
    }, 5000);

    const adding = async () => {
        const up = await ApiClient.post(
            `account/profile/${id}?_method=PUT`,
            payload
        )
            .then((res) => {
                setMsg("Update Berhasil");
                errorMessage();
                return res.data;
            })
            .catch((error) => {
                setMsg(error.response.data.message);
                errorMessage();
                console.log(error);
                return;
            });

        return;
    };
    return (
        <React.Fragment>
            {msg && (
                <Typography
                    variant="body2"
                    sx={{
                        fontStyle: "italic",
                        color: "red",
                        ...h4FontStyle,
                    }}
                >
                    {msg}
                </Typography>
            )}
            <InputLabel
                title={"Nama Pegawai"}
                value={payload.nama}
                action={(a) => (payload.nama = a)}
            />
            <InputLabel
                title={"Kontak Pegawai"}
                value={payload.kontak}
                action={(a) => (payload.kontak = a)}
            />
            <InputLabel
                title={"Alamat Pegawai"}
                value={payload.alamat}
                action={(a) => (payload.alamat = a)}
            />
            <SiteButton title={"Simpan"} action={() => adding()} />
        </React.Fragment>
    );
};

export default ProfileForm;

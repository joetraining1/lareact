import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const ProfileForm = ({ id, nama = "", kontak = "", alamat = "" }) => {
    const [payload, setPayload] = useState({
        user_id: id,
        nama: nama,
        kontak: kontak,
        alamat: alamat,
    });

    const adding = async () => {
        const up = await ApiClient.post(
            `account/profile/${id}?_method=PUT`,
            payload
        )
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });

        return;
    };
    return (
        <React.Fragment>
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

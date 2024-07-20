import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const UserProfileForm = ({ id, refresh, name = "", fone = "", addr = "" }) => {
    const [payload, setPayload] = useState({
        nama: name,
        kontak: fone,
        alamat: addr,
    });

    const { shiftModal } = useModal();

    const adding = async () => {
        if (id) {
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
            refresh();
            shiftModal();

            return console.log(up);
        }

        const req = await ApiClient.post("account", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });

        uId(req?.data?.user_id);
        return;
    };

    return (
        <React.Fragment>
            <InputLabel
                title={"Nama User"}
                action={(a) => (payload.nama = a)}
                value={payload.nama}
            />
            <InputLabel
                title={"Kontak User"}
                action={(a) => (payload.kontak = a)}
                value={payload.kontak}
            />
            <InputLabel
                title={"Alamat User"}
                action={(a) => (payload.alamat = a)}
                value={payload.kontak}
            />
            <br />
            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
                action={() => adding()}
            />
        </React.Fragment>
    );
};

export default UserProfileForm;

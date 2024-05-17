import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const UserProfileForm = ({ id }) => {
    const [payload, setPayload] = useState({
        nama: "",
        kontak: "",
        alamat: "",
    });

    console.log(id);

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `account/${id}?_method=PUT`,
                payload
            )
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                });

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
            />
            <InputLabel
                title={"Kontak User"}
                action={(a) => (payload.kontak = a)}
            />
            <InputLabel
                title={"Alamat User"}
                action={(a) => (payload.alamat = a)}
            />
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

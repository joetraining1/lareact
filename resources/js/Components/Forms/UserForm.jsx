import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const UserForm = ({ id, uId }) => {
    const [payload, setPayload] = useState({
        email: "",
        password: "",
    });

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
                title={"Email User"}
                action={(a) => (payload.email = a)}
            />
            <InputLabel
                title={"Password User"}
                type={"password"}
                action={(a) => (payload.password = a)}
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

export default UserForm;

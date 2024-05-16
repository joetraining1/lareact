import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const UserForm = ({ id }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({});

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `order/item/${id}?_method=PUT`,
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

        const req = await ApiClient.post("order/item", payload)
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
        <React.Fragment>
            <InputLabel title={"Email User"} />
            <InputLabel title={"Password User"} />
            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
            />
        </React.Fragment>
    );
};

export default UserForm;

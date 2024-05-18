import React, { useState } from "react";
import ApiClient from "../ApiClient";

const KategoriServices = () => {
    const [msg, setMsg] = useState("");

    const adding = async ({ id, payload }) => {
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
            return;
        }
        const req = await ApiClient.post("kategori", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });

        return;
    };

    const deleting = async ({ id }) => {
        if (id) {
            const req = await ApiClient.delete(`kategori/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                });
            return;
        }
        return console.log("pass some id");
    };

    return { adding, deleting };
};

export default KategoriServices;

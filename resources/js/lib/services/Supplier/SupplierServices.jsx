import React, { useState } from "react";
import ApiClient from "../ApiClient";

const SupplierServices = () => {
    const [msg, setMsg] = useState("");

    const adding = async ({ id, payload }) => {
        if (id) {
            const up = await ApiClient.post(
                `supplier/${id}?_method=PUT`,
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
        const req = await ApiClient.post("supplier", payload)
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
            const req = await ApiClient.delete(`supplier/${id}`)
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

    return {
        msg,
        adding,
        deleting,
    };
};

export default SupplierServices;

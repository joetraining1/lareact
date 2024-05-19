import React, { useState } from "react";
import ApiClient from "../ApiClient";

const ProductServices = () => {
    const [msg, setMsg] = useState("");

    const retrieving = async ({ id }) => {
        const req = await ApiClient.get(`product/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
            });

        return req;
    };

    const adding = async ({ id, payload }) => {
        if (id) {
            const up = await ApiClient.post(
                `product/${id}?_method=PUT`,
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
        const req = await ApiClient.post("product", payload)
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
            const req = await ApiClient.delete(`product/${id}`)
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
        adding,
        deleting,
        msg,
        retrieving,
    };
};

export default ProductServices;

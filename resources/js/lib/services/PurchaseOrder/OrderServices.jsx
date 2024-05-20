import React from "react";
import ApiClient from "../ApiClient";

const OrderServices = () => {
    const retrieving = async ({ id }) => {
        const req = await ApiClient.get(`order/${id}`)
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
            const up = await ApiClient.post(`order/${id}?_method=PUT`, payload)
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                });

            return up;
        }
        const req = await ApiClient.post("order", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
        return req;
    };

    const deleting = async ({ id }) => {
        if (id) {
            const req = await ApiClient.delete(`order/${id}`)
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
        retrieving,
    };
};

export default OrderServices;

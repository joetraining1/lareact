import React from "react";
import ApiClient from "../ApiClient";

const DocumentServices = () => {
    const retrieving = async ({ id }) => {
        const req = await ApiClient.get(`doc/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return;
            });

        return req;
    };

    const deleting = async ({ id }) => {
        if (id) {
            const req = await ApiClient.delete(`doc/${id}`)
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

    return { retrieving, deleting };
};

export default DocumentServices;

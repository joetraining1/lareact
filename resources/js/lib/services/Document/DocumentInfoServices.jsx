import React from "react";
import ApiClient from "../ApiClient";

const DocumentInfoServices = () => {
    const deleting = async ({ id }) => {
        if (id) {
            const req = await ApiClient.delete(`docs/info/${id}`)
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

    const retrieving = async ({ id }) => {
        const req = await ApiClient.get(`docs/info/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return;
            });

        return req;
    };

    return { deleting, retrieving };
};

export default DocumentInfoServices;

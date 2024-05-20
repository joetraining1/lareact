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

    return { retrieving };
};

export default DocumentServices;

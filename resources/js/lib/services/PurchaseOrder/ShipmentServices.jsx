import React from "react";
import ApiClient from "../ApiClient";

const ShipmentServices = () => {
    const deleting = async ({ id }) => {
        if (id) {
            const req = await ApiClient.delete(`shipment/${id}`)
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
        deleting,
    };
};

export default ShipmentServices;

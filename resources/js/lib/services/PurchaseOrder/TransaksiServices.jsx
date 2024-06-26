import React from "react";
import ApiClient from "../ApiClient";

const TransaksiServices = () => {
    const deleting = async ({ id }) => {
        if (id) {
            const req = await ApiClient.delete(`transaksi/${id}`)
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

export default TransaksiServices;

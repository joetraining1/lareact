import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SearchField from "@/lib/parts/SearchField/SearchField";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import useModal from "@/hooks/useModal";
import ApiClient from "@/lib/services/ApiClient";

const ProductForm = ({ id }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({});

    const adding = async () => {
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

            shiftModal();
            return console.log(up);
        }
        const req = await ApiClient.post("product", payload)
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
            <SectionDivider>
                <SearchField
                    title={"Diajukan oleh :"}
                    styles={{
                        width: "100%",
                    }}
                />
                <SearchField
                    title={"Departemen Pengajuan :"}
                    styles={{
                        width: "100%",
                    }}
                />
                <SectionDivider
                    styles={{
                        flexDirection: "column",
                        alignItems: "start",
                    }}
                >
                    <InputLabel
                        title={"Estimasi biaya order"}
                        styles={{
                            width: "100%",
                        }}
                    />
                </SectionDivider>
            </SectionDivider>
            <InputLabel title={"Tujuan pengajuan order :"} />
        </React.Fragment>
    );
};

export default ProductForm;

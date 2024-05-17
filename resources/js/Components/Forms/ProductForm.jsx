import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SearchField from "@/lib/parts/SearchField/SearchField";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import useModal from "@/hooks/useModal";
import ApiClient from "@/lib/services/ApiClient";
import DepartemenForm from "./DepartemenForm";
import DepartemenItems from "../DropItems/DepartemenItems";
import { TargetUrl } from "@/lib/constant/Target";
import UserItems from "../DropItems/UserItems";

const ProductForm = ({ id }) => {
    const { shiftModal } = useModal();

    const [payload, setPayload] = useState({
        departemen_id: "",
        requester: "",
        expense: "",
        purpose: "",
        user_id: "",
    });

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(`order/${id}?_method=PUT`, payload)
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
        const req = await ApiClient.post("order", payload)
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
                    target={TargetUrl.user}
                >
                    <UserItems
                        action={(a) =>
                            setPayload({
                                ...payload,
                                request: a.user_id,
                            })
                        }
                    />
                </SearchField>
                <SearchField
                    title={"Departemen Pengajuan :"}
                    styles={{
                        width: "100%",
                    }}
                    target={TargetUrl.departemen}
                >
                    <DepartemenItems
                        action={(a) =>
                            setPayload({
                                ...payload,
                                departemen_id: a.departemen_id,
                            })
                        }
                    />
                </SearchField>
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
            <InputLabel
                title={"Tujuan pengajuan order :"}
                props={{
                    multiline: true,
                    maxRows: 3,
                }}
            />
        </React.Fragment>
    );
};

export default ProductForm;

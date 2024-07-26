import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SearchField from "@/lib/parts/SearchField/SearchField";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import DepartemenItems from "../DropItems/DepartemenItems";
import { TargetUrl } from "@/lib/constant/Target";
import UserItems from "../DropItems/UserItems";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import OrderServices from "@/lib/services/PurchaseOrder/OrderServices";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { h4FontStyle } from "@/lib/constant/Styles";
import { useNavigate } from "react-router-dom";
import { AllColors } from "@/lib/constant/Colors";
import Messages from "@/lib/parts/AlertMessages/Messages";
import { Rupiah } from "@/lib/utils/IntoCurrency";

const ProductForm = ({
    id = "",
    dId = "",
    req = "",
    proposer = "",
    cost = 0,
    agenda = "",
    dept = "",
}) => {
    const { adding } = OrderServices();
    const user = useSelector((state) => state.auth.authState);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { SuccessMessage } = Messages();

    const [payload, setPayload] = useState({
        departemen_id: dId,
        requester: req,
        expense: cost,
        purpose: agenda,
        user_id: user.user_id,
    });

    const alertRemover = setTimeout(() => {
        return setMsg("");
    }, 5000);

    const service = async () => {
        if (id) {
            adding({
                id: id,
                payload: payload,
            }).then((res) => {
                alertRemover;
                setMsg(res.message);
            });
            return;
        }
        adding({
            payload: payload,
        }).then((res) => {
            alertRemover;
            setMsg(res.message);
            navigate("/order");
            // console.log(res);
        });
        return;
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
                    value={proposer}
                >
                    <UserItems
                        action={(a) =>
                            setPayload({
                                ...payload,
                                requester: a.user_id,
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
                    value={dept}
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
                        action={(a) => (payload.expense = parseInt(a))}
                        value={Rupiah(payload.expense)}
                    />
                </SectionDivider>
            </SectionDivider>
            <InputLabel
                title={"Tujuan pengajuan order :"}
                props={{
                    multiline: true,
                    maxRows: 3,
                }}
                action={(a) => (payload.purpose = a)}
                value={payload.purpose}
            />
            <SectionDivider>
                <SiteButton
                    title={"Simpan"}
                    styles={{
                        width: "150px",
                    }}
                    action={() => service()}
                />
                {msg && <SuccessMessage msg={msg} />}
            </SectionDivider>
        </React.Fragment>
    );
};

export default ProductForm;

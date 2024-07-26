import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React, { useState } from "react";
import UserItems from "../DropItems/UserItems";
import SearchField from "@/lib/parts/SearchField/SearchField";
import DepartemenItems from "../DropItems/DepartemenItems";
import { TargetUrl } from "@/lib/constant/Target";
import useModal from "@/hooks/useModal";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import UserEmployment from "@/lib/services/User/UserEmployment";

const EmploymentForm = ({
    id,
    refresh,
    dId = "",
    name = "",
    dept = "",
    role = "",
    rank = "",
}) => {
    const [payload, setPayload] = useState({
        user_id: id,
        departemen_id: dId,
        posisi: role,
        jabatan: rank,
    });
    const { shiftModal } = useModal();
    const { adding } = UserEmployment();

    const service = async () => {
        if (id) {
            adding({
                id: id,
                payload: payload,
            });
            refresh();
            shiftModal();
            return console.log(up);
        }

        adding({
            payload: payload,
        });
        refresh();
        shiftModal();
        return console.log(req);
    };

    return (
        <div
            style={{
                display: "flex",
                width: "450px",
                height: "fit-content",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <SearchField
                title={"Pegawai :"}
                target={TargetUrl.user}
                value={name}
            >
                <UserItems
                    action={(a) =>
                        setPayload({
                            ...payload,
                            user_id: a.user_id,
                        })
                    }
                />
            </SearchField>
            <SearchField
                title={"Departemen :"}
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
            <InputLabel
                title={"Posisi Pegawai :"}
                action={(a) => (payload.posisi = a)}
                value={payload.posisi}
            />
            <InputLabel
                title={"Jabatan Pegawai :"}
                action={(a) => (payload.jabatan = a)}
                value={payload.jabatan}
            />
            <br />
            <SiteButton title={"submit"} action={() => service()} />
        </div>
    );
};

export default EmploymentForm;

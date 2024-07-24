import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React, { useState } from "react";
import InputLabel from "vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/InputLabel";
import UserItems from "../DropItems/UserItems";
import SearchField from "@/lib/parts/SearchField/SearchField";
import DepartemenItems from "../DropItems/DepartemenItems";
import { TargetUrl } from "@/lib/constant/Target";
import useModal from "@/hooks/useModal";

const EmploymentForm = ({ refresh }) => {
    const [payload, setPayload] = useState({});
    const { shiftModal } = useModal();

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
                value={payload.supplier_id}
            >
                <UserItems
                    action={(a) =>
                        setPayload({
                            ...payload,
                            supplier_id: a.supplier_id,
                        })
                    }
                />
            </SearchField>
            <SearchField
                title={"Departemen :"}
                target={TargetUrl.departemen}
                value={payload.supplier_id}
            >
                <DepartemenItems
                    action={(a) =>
                        setPayload({
                            ...payload,
                            supplier_id: a.supplier_id,
                        })
                    }
                />
            </SearchField>
            <InputLabel
                title={"Posisi Pegawai :"}
                action={(a) => (payload.departemen_name = a)}
                value={payload.departemen_name}
            />
            <InputLabel
                title={"Jabatan Pegawai :"}
                action={(a) => (payload.lokasi = a)}
                value={payload.lokasi}
            />
            <br />
            <SiteButton title={"submit"} action={() => service()} />
        </div>
    );
};

export default EmploymentForm;

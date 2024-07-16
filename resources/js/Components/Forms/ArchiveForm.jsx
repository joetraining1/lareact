import React, { useState } from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SearchField from "@/lib/parts/SearchField/SearchField";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import KategoriItems from "../DropItems/KategoriItems";
import { useSelector } from "react-redux";
import DepartemenItems from "../DropItems/DepartemenItems";
import { TargetUrl } from "@/lib/constant/Target";

const ArchiveForm = ({
    document_id = "",
    id,
    dRef = "",
    dTitle = "",
    dPurpose = "",
    dDate = "",
    cId = "",
    dId = "",
    dept = "",
    kat = "",
}) => {
    if (!document_id) {
        return null;
    }

    const user = useSelector((state) => state.auth.authState);

    const [payload, setPayload] = useState({
        document_id: document_id,
        document_ref: dRef,
        document_judul: dTitle,
        document_agenda: dPurpose,
        document_date: dDate,
        kategori_id: cId,
        departemen_id: dId,
        user_id: user.user_id,
    });

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `docs/info/${document_id}?_method=PUT`,
                payload
            )
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                });

            return console.log(up);
        }
        const req = await ApiClient.post(`docs/info/${document_id}`, payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
        return console.log(req);
    };

    return (
        <React.Fragment>
            <InputLabel
                title={`Nomor Referensei Dokumen ID:${document_id}`}
                action={(a) => (payload.document_ref = a)}
                value={dRef}
            />
            <SectionDivider>
                <SectionDivider
                    styles={{
                        flexDirection: "column",
                        alignItems: "start",
                        position: "relative",
                    }}
                >
                    <SearchField
                        title={"Kategori Dokumen :"}
                        styles={{
                            width: "100%",
                        }}
                        target={TargetUrl.kategori}
                        action={(a) => console.log(a)}
                        value={kat}
                    >
                        <KategoriItems
                            action={(a) =>
                                setPayload({
                                    ...payload,
                                    kategori_id: a.kategori_id,
                                })
                            }
                        />
                    </SearchField>
                </SectionDivider>
                <SectionDivider
                    styles={{
                        flexDirection: "column",
                        alignItems: "start",
                        position: "relative",
                    }}
                >
                    <SearchField
                        title={"Departemen :"}
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
                </SectionDivider>
            </SectionDivider>
            <InputLabel
                title={"Judul Dokumen :"}
                action={(a) => (payload.document_judul = a)}
                value={payload.document_judul}
            />
            <InputLabel
                title={"Agenda Dokumen :"}
                action={(a) => (payload.document_agenda = a)}
                value={payload.document_agenda}
            />
            <InputLabel
                title={"Tanggal Dokumen :"}
                action={(a) => (payload.document_date = a)}
                value={payload.document_date}
            />

            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
                action={() => adding()}
            />
        </React.Fragment>
    );
};

export default ArchiveForm;

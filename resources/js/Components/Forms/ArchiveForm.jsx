import React from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SearchField from "@/lib/parts/SearchField/SearchField";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";

const ArchiveForm = () => {
    return (
        <React.Fragment>
            <InputLabel title={"Nomor Referensei Dokumen :"} />
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
                    />
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
                    />
                </SectionDivider>
            </SectionDivider>
            <InputLabel title={"Judul Dokumen :"} />
            <InputLabel title={"Agenda Dokumen :"} />
            <InputLabel title={"Tanggal Dokumen :"} />
            <SiteButton
                title={"Simpan"}
                styles={{
                    width: "150px",
                }}
            />
        </React.Fragment>
    );
};

export default ArchiveForm;

import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const CUArchive = () => {
    return (
        <SectionContainer url={"/archive"}>
            <BoxContainer>
                <SectionHeader
                    title={"Register Arsip Dokumen"}
                    value={
                        "Menambahkan data dokumen arsip yang digunakan dalam perusahaan."
                    }
                />
                <SiteButton
                    title={"Simpan"}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Urutan Proses Penambahan Arsip"} />
                <ul>
                    <li>1. User Upload Document</li>
                    <li>2. Document Processed</li>
                    <li>3. User Fill the Form</li>
                    <li>4. Document Done Archived</li>
                </ul>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Detail Arsip"}
                    value={"Informasi Dokumen Tambahan."}
                />
                <InputLabel title={"Nama User"} />
                <InputLabel title={"Kontak User"} />
                <InputLabel title={"Alamat User"} />
                <InputLabel title={"Email User"} />
                <InputLabel title={"Password User"} />
                <SiteButton
                    title={"Simpan"}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUArchive;

import ArchiveForm from "@/Components/Forms/ArchiveForm";
import SectionContainer, {
    SectionDivider,
} from "@/Components/SectionContainer/SectionContainer";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
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
                    value={"File maksimal 2mb, pdf."}
                />
                <SectionDivider>
                    <FileUploader file={(a) => console.log(a.name)} />
                </SectionDivider>
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
                <ArchiveForm />
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUArchive;

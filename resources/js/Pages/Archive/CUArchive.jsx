import ArchiveForm from "@/Components/Forms/ArchiveForm";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React, { useState } from "react";
import ArchiveUpload from "./ArchiveUpload";
import { useParams } from "react-router-dom";
import DocumentServices from "@/lib/services/Document/DocumentServices";

const CUArchive = () => {
    const { document_id } = useParams();
    const { retrieving } = DocumentServices();

    const [docId, setDocId] = useState(document_id ? document_id : "");

    if (document_id && docId) {
        retrieving({
            id: document_id,
        }).then((res) => {
            setDocId(res.data.document_id);
            return;
        });
        return;
    }

    return (
        <SectionContainer url={"/archive"}>
            <BoxContainer>
                <SectionHeader
                    title={"Register Arsip Dokumen"}
                    value={"File maksimal 2mb, pdf."}
                />
                <ArchiveUpload action={(a) => setDocId(a)} />
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
                {docId ? <ArchiveForm document_id={docId} /> : null}
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUArchive;

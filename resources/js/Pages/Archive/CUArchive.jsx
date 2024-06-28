import ArchiveForm from "@/Components/Forms/ArchiveForm";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React, { useEffect, useState } from "react";
import ArchiveUpload from "./ArchiveUpload";
import { useParams } from "react-router-dom";
import DocumentServices from "@/lib/services/Document/DocumentServices";
import DocumentInfoServices from "@/lib/services/Document/DocumentInfoServices";

const CUArchive = () => {
    const { document_id } = useParams();
    const { retrieving: getDoc } = DocumentServices();
    const { retrieving: getDocInfo } = DocumentInfoServices();

    const [docId, setDocId] = useState(document_id ? document_id : "");
    const [docData, setDocData] = useState({});

    useEffect(() => {
        if (document_id && docId) {
            getDoc({
                id: document_id,
            }).then((res) => {
                setDocId(res.data.document_id);
                setDocData(res.data);
                return;
            });
            getDocInfo({
                id: document_id,
            });
        }
        return;
    }, []);

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

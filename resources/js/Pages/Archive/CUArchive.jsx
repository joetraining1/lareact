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

    const [docId, setDocId] = useState("");
    const [docData, setDocData] = useState({});
    const [docInfo, setDocInfo] = useState({});

    useEffect(() => {
        if (document_id) {
            getDoc({
                id: document_id,
            }).then((res) => {
                setDocData(res.data);
                return;
            });
            getDocInfo({
                id: document_id,
            }).then((res) => {
                setDocInfo(res.data);
                setDocId(document_id);
                return;
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
                {docData.document_file ? (
                    <ArchiveUpload
                        action={(a) => setDocId(a)}
                        filename={
                            docData.document_file ? docData.document_file : ""
                        }
                    />
                ) : null}
                {docData.document_file ? null : (
                    <ArchiveUpload action={(a) => setDocId(a)} filename={""} />
                )}
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
                {docId !== "" ? (
                    <ArchiveForm
                        document_id={docId}
                        cId={docInfo.kategori_id}
                        dDate={docInfo.document_date}
                        dPurpose={docInfo.document_agenda}
                        dTitle={docInfo.document_judul}
                        dId={docInfo.departemen_id}
                        dRef={docInfo.document_ref}
                        dept={docInfo.departemen_name}
                        kat={docInfo.kategori_name}
                        id={docInfo.id}
                    />
                ) : null}
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUArchive;

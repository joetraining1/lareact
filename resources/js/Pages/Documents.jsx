import ArchiveColumn from "@/Components/TableColumn/ArchiveColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const Documents = () => {
    const navigate = useNavigate();
    const { resp, isFetching, forceRefresh } = useGetFetch("docs");
    const { DataColumn } = ArchiveColumn({
        refresh: () => forceRefresh(),
    });

    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Dokument Arsip"}
                    value={"Manajemen dokumen arsip di perusahaan."}
                />
                <SiteButton
                    title={"Add Archive"}
                    action={() => navigate("add")}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Dokumen Arsip"}
                    value={"Keseluruhan arsip dokumen dalam perusahaan."}
                />
                <TableData
                    column={DataColumn}
                    rows={resp ? resp.data : []}
                    loading={isFetching}
                />
            </BoxContainer>
        </PageContainer>
    );
};

export default Documents;

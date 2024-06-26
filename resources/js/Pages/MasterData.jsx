import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const MasterData = () => {
    const navigate = useNavigate();
    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Master Data"}
                    value={
                        "Gudang Data tambahan yang digunakan di aplikasi perusahaan."
                    }
                />
                <Divider />
                <br />
                <SectionHeader
                    title={"Kategori"}
                    value={"Kelola kategori data di aplikasi."}
                />
                <SiteButton
                    title={"manage kategori"}
                    action={() => navigate("kategori")}
                    styles={{
                        width: "125px",
                    }}
                />
                <br />
                <SectionHeader
                    title={"Departemen"}
                    value={"Kelola data departemen dalam perusahaan."}
                />
                <SiteButton
                    title={"manage department"}
                    action={() => navigate("departemen")}
                    styles={{
                        width: "225px",
                    }}
                />
                <br />
                <SectionHeader
                    title={"Supplier"}
                    value={
                        "Kelola data supplier yang berafiliasi dengan perusahaan."
                    }
                />
                <SiteButton
                    title={"manage supplier"}
                    action={() => navigate("supplier")}
                    styles={{
                        width: "fit-content",
                    }}
                />
                <br />
                <SectionHeader
                    title={"Hubungan Kerja Pegawai"}
                    value={"Kelola data hubungan kerja pegawai di perusahaan."}
                />
                <SiteButton
                    title={"manage employment"}
                    action={() => navigate("employment")}
                    styles={{
                        width: "fit-content",
                    }}
                />
                <br />
            </BoxContainer>
        </PageContainer>
    );
};

export default MasterData;

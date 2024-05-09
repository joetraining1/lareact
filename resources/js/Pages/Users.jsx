import TableData from "@/Components/TableData/TableData";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Users"}
                    value={"Kelola user aplikasi arsip dan purchasing."}
                />
                <SiteButton
                    title={"Add User"}
                    action={() => navigate("add")}
                    styles={{
                        width: "120px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data User Aplikasi"}
                    value={"Kelola keseluruhan data user pada aplikasi."}
                />
                <TableData rows={[]} />
            </BoxContainer>
        </PageContainer>
    );
};

export default Users;

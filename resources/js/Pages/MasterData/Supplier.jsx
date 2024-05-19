import SupplierForm from "@/Components/Forms/SupplierForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SupplierColumn from "@/Components/TableColumn/SupplierColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Supplier = () => {
    const { isFetching, resp, forceRefresh } = useGetFetch("suppliers");

    const { DataColumn } = SupplierColumn({
        refresh: () => forceRefresh(),
    });
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Supplier Data"}
                    value={"Monitor data supplier pada perusahaan."}
                />
                <IndexModal
                    title={"Register New Supplier"}
                    value={"Tambahkan Supplier Baru"}
                    button={"Add new supplier"}
                >
                    <br />
                    <SupplierForm refresh={() => forceRefresh()} />
                </IndexModal>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Supplier"}
                    value={
                        "Kelola keseluruhan data supplier yang berafiliasi dengan perusahaan."
                    }
                />
                <TableData
                    column={DataColumn}
                    rows={resp ? resp.data : []}
                    loading={isFetching}
                />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Supplier;

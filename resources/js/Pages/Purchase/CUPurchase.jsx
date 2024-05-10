import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const CUPurchase = () => {
    return (
        <SectionContainer url={"/purchase"}>
            <BoxContainer>
                <SectionHeader
                    title={"Register Purchase Order"}
                    value={"Menambahkan Purchasing Order baru."}
                />
                <SiteButton
                    title={"Simpan"}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Urutan Proses Penambahan Purchase Order"}
                />
                <ul>
                    <li>1. User Menambahkan </li>
                    <li>2. Document Processed</li>
                    <li>3. User Fill the Form</li>
                    <li>4. Document Done Archived</li>
                </ul>
                <SectionHeader title={"Purchase Order Fields"} />
                <ul>
                    <li>1. Order ID </li>
                    <li>2. Surat Tugas</li>
                    <li>3. Departemen</li>
                    <li>4. Requester</li>
                    <li>5. Purposes</li>
                    <li>6. Expenses</li>
                </ul>
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUPurchase;

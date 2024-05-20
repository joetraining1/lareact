import ProductForm from "@/Components/Forms/ProductForm";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CUPurchase = () => {
    return (
        <SectionContainer url={"/purchase"}>
            <BoxContainer>
                <SectionHeader
                    title={"Register Purchase Order"}
                    value={"Menambahkan Purchasing Order baru."}
                />
                <ProductForm />
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
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUPurchase;

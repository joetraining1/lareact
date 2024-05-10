import SectionContainer, {
    SectionDivider,
} from "@/Components/SectionContainer/SectionContainer";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useParams } from "react-router-dom";

const Progress = () => {
    const { order_id } = useParams();
    return (
        <SectionContainer url={"/purchase"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Purchase Order"}
                    value={`Kelola kemajuan proses Order: ${order_id}.`}
                />
                <SectionDivider>
                    <SiteButton
                        title={"Simpan"}
                        styles={{
                            width: "150px",
                        }}
                    />
                </SectionDivider>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Order Database Relation"} />
                <ul>
                    <li>1. Order had products : qty</li>
                    <li>2. Order had transaction</li>
                    <li>3. transaction had supplier</li>
                    <li>4. transaction had shipment</li>
                </ul>
            </BoxContainer>
            <SectionPresenter
                title={"Product Purchase Order"}
                kontex={"product"}
            />
            <SectionPresenter
                title={"Transaksi Purchase Order"}
                kontex={"transaksi"}
            />
        </SectionContainer>
    );
};

export default Progress;

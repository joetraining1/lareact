import React from "react";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SearchField from "@/lib/parts/SearchField/SearchField";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";

const ProductForm = () => {
    return (
        <React.Fragment>
            <SectionDivider>
                <SearchField
                    title={"Diajukan oleh :"}
                    styles={{
                        width: "100%",
                    }}
                />
                <SearchField
                    title={"Departemen Pengajuan :"}
                    styles={{
                        width: "100%",
                    }}
                />
                <SectionDivider
                    styles={{
                        flexDirection: "column",
                        alignItems: "start",
                    }}
                >
                    <InputLabel
                        title={"Estimasi biaya order"}
                        styles={{
                            width: "100%",
                        }}
                    />
                </SectionDivider>
            </SectionDivider>
            <InputLabel title={"Tujuan pengajuan order :"} />
        </React.Fragment>
    );
};

export default ProductForm;

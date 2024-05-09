import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const CUProduct = () => {
    return (
        <SectionContainer url={"/product"}>
            <BoxContainer>
                <SectionHeader
                    title={"Tambah Data Produk"}
                    value={
                        "Menambahkan data produk yang digunakan dalam perusahaan."
                    }
                />
                <InputLabel title={"Nama Produk"} />
                <InputLabel title={"Harga Produk"} />
                <InputLabel title={"Berat Produk"} />
                <SiteButton
                    title={"Simpan"}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUProduct;

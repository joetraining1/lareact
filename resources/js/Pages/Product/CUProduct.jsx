import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
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
                <InputLabel title={"Nama Produk :"} />
                <SearchField title={"Kategori Produk :"} />
                <InputLabel title={"Harga Produk :"} />
                <InputLabel
                    id={"desc-product"}
                    title={"Deskripsi Produk :"}
                    props={{
                        multiline: true,
                        minRows: 3,
                        maxRows: 3,
                    }}
                />
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

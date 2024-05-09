import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const CUUser = () => {
    return (
        <SectionContainer url={"/user"}>
            <BoxContainer>
                <SectionHeader
                    title={"Tambah Data Produk"}
                    value={
                        "Menambahkan data produk yang digunakan dalam perusahaan."
                    }
                />
                <InputLabel title={"Nama User"} />
                <InputLabel title={"Kontak User"} />
                <InputLabel title={"Alamat User"} />
                <InputLabel title={"Email User"} />
                <InputLabel title={"Password User"} />
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

export default CUUser;

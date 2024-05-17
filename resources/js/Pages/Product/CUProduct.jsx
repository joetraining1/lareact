import KategoriItems from "@/Components/DropItems/KategoriItems";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import { TargetUrl } from "@/lib/constant/Target";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import React, { useState } from "react";

const CUProduct = ({ id }) => {
    const [payload, setPayload] = useState({
        kategori_id: "",
        product_name: "",
        product_harga: "",
        product_deskripsi: "",
    });

    const adding = async () => {
        if (id) {
            const up = await ApiClient.post(
                `product/${id}?_method=PUT`,
                payload
            )
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                    return;
                });

            return console.log(up);
        }
        const req = await ApiClient.post("product", payload)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
        return console.log(req);
    };

    return (
        <SectionContainer url={"/product"}>
            <BoxContainer>
                <SectionHeader
                    title={"Tambah Data Produk"}
                    value={
                        "Menambahkan data produk yang digunakan dalam perusahaan."
                    }
                />
                <InputLabel
                    title={"Nama Produk :"}
                    action={(a) => (payload.product_name = a)}
                />
                <SearchField
                    title={"Kategori Produk :"}
                    target={TargetUrl.kategori}
                >
                    <KategoriItems
                        action={(a) =>
                            setPayload({
                                ...payload,
                                kategori_id: a.kategori_id,
                            })
                        }
                    />
                </SearchField>
                <InputLabel
                    title={"Harga Produk :"}
                    action={(a) => (payload.product_harga = a)}
                />
                <InputLabel
                    id={"desc-product"}
                    title={"Deskripsi Produk :"}
                    action={(a) => (payload.product_deskripsi = a)}
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
                    action={() => adding()}
                />
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUProduct;

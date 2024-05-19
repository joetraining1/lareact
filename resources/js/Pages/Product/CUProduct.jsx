import KategoriItems from "@/Components/DropItems/KategoriItems";
import SectionContainer, {
    SectionDivider,
} from "@/Components/SectionContainer/SectionContainer";
import { TargetUrl } from "@/lib/constant/Target";
import InputLabel from "@/lib/parts/InputLabel/InputLabel";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import ProductServices from "@/lib/services/Product/ProductServices";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CUProduct = () => {
    const { product_id } = useParams();
    const { retrieving } = ProductServices();

    const [ktg, setKtg] = useState("");
    const [payload, setPayload] = useState({
        kategori_id: "",
        product_name: "",
        product_harga: "",
        product_deskripsi: "",
    });

    const fetch = async (id) => {
        retrieving({
            id: id,
        }).then((res) => {
            setPayload({
                kategori_id: res.data.kategori_id,
                product_name: res.data.product_name,
                product_deskripsi: res.data.product_deskripsi,
                product_harga: res.data.product_harga,
            });
            setKtg(res.data.kategori_name);
            return;
        });

        return;
    };

    if (!ktg) {
        fetch(product_id);
        return;
    }

    const adding = async () => {
        if (product_id) {
            const up = await ApiClient.post(
                `product/${product_id}?_method=PUT`,
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
                    value={payload.product_name}
                />
                <SearchField
                    title={"Kategori Produk :"}
                    target={TargetUrl.kategori}
                    value={ktg}
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
                    title={"Harga Produk : Rp"}
                    action={(a) => (payload.product_harga = a)}
                    value={payload.product_harga}
                />
                <InputLabel
                    id={"desc-product"}
                    title={"Deskripsi Produk :"}
                    action={(a) => (payload.product_deskripsi = a)}
                    value={payload.product_deskripsi}
                    props={{
                        multiline: true,
                        minRows: 3,
                        maxRows: 3,
                    }}
                />
                <SectionDivider>
                    <SiteButton
                        title={"Simpan"}
                        styles={{
                            width: "150px",
                        }}
                        action={() => adding()}
                    />
                </SectionDivider>
            </BoxContainer>
        </SectionContainer>
    );
};

export default CUProduct;

import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { BoxContainer } from "@/lib/parts/SectionHeader/SectionHeader";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import Selections from "@/lib/parts/Selections/Selections";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { useNavigate } from "react-router-dom";

const PurchaseColumn = (data) => {
    const navigate = useNavigate();

    const DataColumn = useMemo(() => {
        return [
            {
                field: "id",
                headerName: "No.",
                filterable: false,
                width: 50,
                renderCell: (params) =>
                    `${params.api.getAllRowIds().indexOf(params.id) + 1}.`,
            },
            {
                field: "order_id",
                headerName: "Order ID",
                width: 150,
            },
            {
                field: "requester",
                headerName: "Pemohon",
                width: 150,
            },
            {
                field: "departemen",
                headerName: "Departemen",
                width: 150,
            },
            {
                field: "purpose",
                headerName: "Agenda Kegiatan",
                width: 250,
            },
            {
                field: "expense",
                headerName: "Budget Kegiatan",
                width: 250,
            },
            // {
            //     field: "products",
            //     headerName: "Produk Diajukan",
            //     width: 200,
            //     renderCell: ({ row: { id, requester, order_id } }) => {
            //         return (
            //             <SectionDivider>
            //                 <IndexModal
            //                     button={"Produk"}
            //                     title={`Order : ${order_id}`}
            //                     value={
            //                         "Produk diajukan dalam purchasing order."
            //                     }
            //                 >
            //                     {requester}
            //                 </IndexModal>
            //             </SectionDivider>
            //         );
            //     },
            // },
            // {
            //     field: "transaksi",
            //     headerName: "Progress Transaksi",
            //     width: 200,
            //     renderCell: ({ row: { id, requester, order_id } }) => {
            //         return (
            //             <SectionDivider>
            //                 <IndexModal
            //                     button={"transaksi"}
            //                     title={`Order : ${order_id}`}
            //                     value={
            //                         "Kemajuan proses transaksi pada order yang diajukan."
            //                     }
            //                 >
            //                     {requester}
            //                 </IndexModal>
            //             </SectionDivider>
            //         );
            //     },
            // },
            {
                field: "option",
                headerName: "Option",
                width: 200,
                disableExport: true,
                renderCell: ({ row: { id, requester, order_id } }) => {
                    return (
                        <SectionDivider>
                            <SiteButton
                                title={"kelola"}
                                action={() => navigate(`${order_id}`)}
                                variant={"text"}
                            />
                        </SectionDivider>
                    );
                },
            },
        ];
    }, [data]);

    return {
        DataColumn,
    };
};

export default PurchaseColumn;

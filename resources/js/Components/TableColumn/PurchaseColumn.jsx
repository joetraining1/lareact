import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { BoxContainer } from "@/lib/parts/SectionHeader/SectionHeader";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import Selections from "@/lib/parts/Selections/Selections";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { useNavigate } from "react-router-dom";
import OrderServices from "@/lib/services/PurchaseOrder/OrderServices";

const PurchaseColumn = ({ data, refresh }) => {
    const navigate = useNavigate();
    const { deleting } = OrderServices();

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
                field: "proposer",
                headerName: "Pemohon",
                width: 150,
            },
            {
                field: "departemen_name",
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
            {
                field: "modifier",
                headerName: "Disunting oleh",
                width: 150,
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
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    deleting({
                                        id: order_id,
                                    });
                                    refresh();
                                }}
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

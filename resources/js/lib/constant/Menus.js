import {
    HomeRepairServiceRounded,
    HomeRounded,
    MoveToInboxRounded,
    PeopleOutlineRounded,
    ShopTwoRounded,
} from "@mui/icons-material";

export const SiteMenu = [
    {
        id: "home",
        path: "/",
        title: "Home",
        icon: HomeRounded,
    },
    {
        id: "archives",
        path: "archive",
        title: "Dokumen Arsip",
        icon: MoveToInboxRounded,
    },
    {
        id: "purchases",
        path: "purchase",
        title: "Purchase Order",
        icon: ShopTwoRounded,
    },
    {
        id: "products",
        path: "product",
        title: "Products",
        icon: HomeRepairServiceRounded,
    },
    {
        id: "users",
        path: "user",
        title: "User",
        icon: PeopleOutlineRounded,
    },
];

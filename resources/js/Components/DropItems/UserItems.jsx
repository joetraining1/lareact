import useSearchField from "@/hooks/useSearchField";
import React from "react";

const UserItems = ({ action }) => {
    const { dataset, setIsOpen, setKeyword } = useSearchField();

    if (dataset) {
        return dataset.map((item, index) => {
            return (
                <span
                    key={item.user_id}
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        action(item);
                        setKeyword(item.nama);
                        return setIsOpen(false);
                    }}
                >
                    {item.nama}
                </span>
            );
        });
    }
    return null;
};

export default UserItems;

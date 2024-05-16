import { ModalContext } from "@/Components/Modal/IndexModal";
import React, { useContext } from "react";

const useModal = () => {
    return useContext(ModalContext);
};

export default useModal;

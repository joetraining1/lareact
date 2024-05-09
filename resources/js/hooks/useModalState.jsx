import React, { useState } from "react";

const useModalState = () => {
    const [modalState, setModalState] = useState(false);

    const shiftModal = () => {
        return setModalState((prev) => !prev);
    };
    return {
        modalState,
        shiftModal,
    };
};

export default useModalState;

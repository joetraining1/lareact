import React, { useMemo, useState } from "react";

const useColumn = () => {
    const [datas, setDatas] = useState();

    const DataTracker = (params) => {
        return setDatas(params);
    };

    const DocumentColumns = useMemo(() => {
        return [];
    }, [datas]);

    const ItemColumns = useMemo(() => {
        return [];
    }, [datas]);

    return {
        DataTracker,
        DocumentColumns,
        ItemColumns,
    };
};

export default useColumn;

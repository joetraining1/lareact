import { SearchFieldContext } from "@/lib/parts/SearchField/SearchField";
import React, { useContext } from "react";

const useSearchField = () => {
    return useContext(SearchFieldContext);
};

export default useSearchField;

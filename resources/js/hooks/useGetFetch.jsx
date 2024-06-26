import ApiClient from "@/lib/services/ApiClient";
import React, { useEffect, useState } from "react";

const useGetFetch = (params) => {
    const [url, setUrl] = useState(params ? params : "");

    const [resp, setResp] = useState([]);
    const [current, setCurrent] = useState("Standby");
    const [isError, setIsError] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    const forceRefresh = () => {
        return setIsFetching(true);
    };

    useEffect(() => {
        const handleRequest = async () => {
            setCurrent("Loading");
            setIsError(null);
            try {
                const request = await ApiClient.get(params).then((response) => {
                    return response.data;
                });
                setResp(request);
                return;
            } catch (err) {
                setIsError(err.data);
                console.log(err);
                return;
            } finally {
                setCurrent("Standby");
            }
        };
        if (isFetching) {
            handleRequest();
        }
        return setIsFetching(false);
    }, [isFetching]);

    return { resp, current, isError, isFetching, forceRefresh };
};

export default useGetFetch;

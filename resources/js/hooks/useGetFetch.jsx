import ApiClient from "@/lib/services/ApiClient";
import React, { useEffect, useState } from "react";

const useGetFetch = (params) => {
    const [url, setUrl] = useState(params ? params : "");

    const [resp, setResp] = useState([]);
    const [current, setCurrent] = useState("Standby");
    const [isError, setIsError] = useState(null);

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
        if (resp?.length === 0 && url) {
            handleRequest();
        }
    }, []);

    return { resp, current, isError, setUrl };
};

export default useGetFetch;

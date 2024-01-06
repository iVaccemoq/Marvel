import { useState, useCallback } from "react";

export const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        
        setLoading(true);

        try {
            const response = await fetch(url,{method, body, headers});
            const data = await response.json();

            setLoading(false);
            return data

        } catch(e) {
            setLoading(true);
            setError(e.message)
        }

    },[])

    const comicsRequest = async (url) => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();

            setLoading(false);
            return data;
        } catch(e) {
            setLoading(true);
            setError(e.message)
        }
    }

    const clearError = useCallback(() => setError(null), []);

    return {loading,request,error, clearError, comicsRequest}

}
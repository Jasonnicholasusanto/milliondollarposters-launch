import axios from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest.js";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const res = await axios.get(
                    process.env.REACT_APP_SUB_API_URL + "/subscribers?populate*=",
                    {
                        headers: {
                            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                        }
                    },
                )
                setData(res.data.data);
            } catch (err) {
                setError(true)
            }
            setLoading(false)
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
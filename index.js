import { useState, useEffect } from "react";

//UseGet Hook to make Get API Calls
export const useGet = (initialUrl) => {
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [status, setStatus] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await fetch(url);
            setStatus(response.status);
            setResponseData(await response.json());
        } catch (err) {
            setError(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Call fetchData when the component mounts

        // Clean up any ongoing fetch if the URL changes
        return () => {
            setIsLoading(false);
        };
    }, [url]);

    // Define a function to refetch data with the same URL
    const refetchData = () => {
        fetchData();
    };

    return { isLoading, isError, error, data: responseData, status, refetch: refetchData };
};


// Post Hook
export const usePost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [status, setStatus] = useState(null);

    const sendPostData = async (url, postData) => {
        setIsLoading(true);
        setIsError(false);

        // Create options for the fetch request
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        };

        try {
            const response = await fetch(url, options);
            setStatus(response.status);
            setResponseData(await response.json());
        } catch (err) {
            setError(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, error, data: responseData, status, sendPostData };
};




//Put Hook
export const usePut = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [status, setStatus] = useState(null);

    const sendPutData = async (url, putData) => {
        setIsLoading(true);
        setIsError(false);

        // Create options for the fetch request
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(putData),
        };

        try {
            const response = await fetch(url, options);
            setStatus(response.status);
            setResponseData(await response.json());
        } catch (err) {
            setError(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, error, data: responseData, status, sendPutData };
};


// DELETE Hook
export const useDelete = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [status, setStatus] = useState(null);

    const sendDeleteRequest = async (url) => {
        setIsLoading(true);
        setIsError(false);

        // Create options for the fetch request
        const options = {
            method: "DELETE",
        };

        try {
            const response = await fetch(url, options);
            setStatus(response.status);
            setResponseData(await response.json());
        } catch (err) {
            setError(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, error, data: responseData, status, sendDeleteRequest };
};

//Patch Hook
export const usePatch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [status, setStatus] = useState(null);

    const sendPatchData = async (url, patchData) => {
        setIsLoading(true);
        setIsError(false);

        // Create options for the fetch request
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(patchData),
        };

        try {
            const response = await fetch(url, options);
            setStatus(response.status);
            setResponseData(await response.json());
        } catch (err) {
            setError(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, isError, error, data: responseData, status, sendPatchData };
};


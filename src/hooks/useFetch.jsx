const useFetch = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    return async (url = "", options = {}) => {
        let res = await fetch(baseURL + url, {
            method: options.method || "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json();
    };
};

export default useFetch;

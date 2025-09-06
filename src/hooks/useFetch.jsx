const useFetch = async () => {
    const baseURL = import.meta.env.VITE_BASE_URL
    return async (url = "", options) => {
        let res = await fetch(`${baseURL}${url}`, {
            method: options.method || "GET",
        });
        res = await res.json();
        return res;
    };
}
export default useFetch;
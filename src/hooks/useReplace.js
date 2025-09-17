const useReplace = (value, name) => {
    const url = new URL(window.location.href);
    let query = url.searchParams;
    if (!value || value?.length === 0) query.delete(name);
    else query.set(name, `*${value}*`);
    return url.search
}

export default useReplace
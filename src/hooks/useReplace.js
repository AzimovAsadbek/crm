const useReplace = (value, name) => {
    const url = new URL(window.location.href);
    let query = url.searchParams;
    if (!value.length) query.delete(name);
    else query.set(name, `*${value}*`);
    return url.search
}

export default useReplace
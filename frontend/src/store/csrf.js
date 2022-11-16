import Cookies from "js-cookie";

export const csrfFetch = async (url, options = {}) => {
    options.headers ??= {};
    options.method ??= "GET";

    if (options.method.toUpperCase() !== "GET") {
        options.headers["Content-Type"] ??= "application/json";
        options.headers["XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
    }

    console.log(url)
    const res = await window.fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
};

export const restoreCSRF = async () => {
    return csrfFetch("/api/csrf/restore");
};
import {
    f as r
} from "./fetchRequest-DnbIkz7g.js";
const p = async e => await r.get(`/projects?${new URLSearchParams(e)}`), g = async e => (await r.get(`/project/${e}`)).data, i = async (e, t) => await r.get(`/project/${e}/nfts?${new URLSearchParams(t)}`), w = async (e, t) => await r.get(`/project/${e}/events?${new URLSearchParams(t)}`), $ = async (e, t) => (await r.get(`/user/${e}/nfts?${new URLSearchParams(t)}`)).data, u = async (e, t, s) => {
    const n = new EventSource(`https://api.ppp.fun/sse/events?mint=${encodeURIComponent(e)}`, {
        withCredentials: !0
    });
    return n.onmessage = a => {
        const c = JSON.parse(a.data);
        t && t(c)
    }, n.onerror = a => {
        console.error("Error occurred:", a), s && s(a)
    }, n
}, m = async (e, t) => await r.get(`/user/${e}/transactions?${new URLSearchParams(t)}`);
export {
    i as a, w as b, g as c, $ as d, m as e, p as g, u as s
};
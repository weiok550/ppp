import "./index-DejQ-iz-.js";
import {
    E as h,
    u as S,
    t as d,
    p as y
} from "./index-Brp1LNR4.js";
import {
    w as u
} from "./el-loading-KWzNfS69.js";
import "./isMobile-DPHpSBeS.js";
const E = t => {
        let e = "";
        switch (t) {
            case 400:
                e = "request error(400)";
                break;
            case 403:
                e = "rejected(403)";
                break;
            case 401:
                e = "unauthorized(401)";
                break;
            case 500:
                e = "server error(500)";
                break;
            case 503:
                e = "service unavailable(503)";
                break;
            default:
                e = `unknown error(${t})!`
        }
        return e
    },
    k = async (t, e = {}) => {
        const {
            baseURL: r = "https://api.ppp.fun",
            timeout: o = 15e3,
            headers: s = {
                "Content-Type": "application/json;charset=UTF-8"
            },
            ...m
        } = e, p = a => a, $ = async a => {
            if (a.status === 401 || a.status === 403) throw localStorage.removeItem("token"), new Error("Login expired");
            if (!a.ok) {
                const g = await a.json().catch(() => ({}));
                throw {
                    status: a.status,
                    data: g,
                    message: g.message || E(a.status)
                }
            }
            return a.json()
        };
        try {
            const a = `${r}${t}`,
                g = p(m),
                f = new AbortController,
                T = setTimeout(() => f.abort(), o),
                I = await fetch(a, {
                    ...g,
                    signal: f.signal,
                    headers: {
                        ...s,
                        ...localStorage.getItem("token") ? {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        } : {}
                    }
                });
            return clearTimeout(T), $(I)
        } catch (a) {
            throw a.name === "AbortError" ? h({
                title: "Error",
                message: "Request timeout",
                type: "error"
            }) : e.unshowElMessage || h({
                title: "Error",
                message: a.message || "Network Error",
                type: "error"
            }), a
        }
    }, w = (t, e, r = {}) => {
        const o = e ? `?${new URLSearchParams(e).toString()}` : "";
        return k(`${t}${o}`, {
            ...r,
            unshowElMessage: !0,
            method: "GET"
        })
    }, i = (t, e, r = {}) => k(t, {
        ...r,
        method: "POST",
        body: JSON.stringify(e)
    }), l = S(), n = () => {
        const t = d(),
            e = l.coolingTime,
            r = Math.ceil((e - t) / 1e3);
        return r > 0 ? r : 0
    }, C = async t => (await w(`/auth/${t}`)).data.message, b = async t => {
        const {
            data: e
        } = await i("/auth/verify", {
            ...t,
            refCode: localStorage.getItem("refCode") || ""
        }), r = e.token;
        return localStorage.setItem("token", r), r
    }, c = async () => {
        if (!u.adpter) throw new Error("Wallet not connected");
        try {
            const t = await C(u.provider.publicKey.toBase58()),
                e = await u.signMessage(t),
                r = {
                    publicKey: e.publicKey.toBase58(),
                    signature: Array.from(e.signature),
                    message: t
                };
            return await b(r)
        } catch (t) {
            throw console.error(t), t
        }
    }, R = async (t, e) => {
        let r = localStorage.getItem("token");
        if (r || (r = await c()), n()) throw new Error(`Too many requests. Please try again in ${n()} seconds.`);
        const o = await i(`/threads/${t}`, e);
        return l.setCoolingTime(), o
    }, j = async (t, e) => {
        const r = await w(`/threads/${t}`, e);
        return r.data.list.forEach(o => {
            o.time = d(y(new Date(o.timestamp)))
        }), r.data
    }, U = async (t, e) => {
        let r = localStorage.getItem("token");
        if (r || (r = await c()), n()) throw new Error(`Too many requests. Please try again in ${n()} seconds.`);
        const o = await i(`/threads/${t}/${e.messageId}/comment`, e);
        return l.setCoolingTime(), o
    }, B = async (t, e, r) => {
        const o = await w(`/threads/${t}/${e}/comments`, r);
        return o.data.list.forEach(s => {
            s.time = d(y(new Date(s.timestamp)))
        }), o.data
    }, A = async t => {
        let e = localStorage.getItem("token");
        if (e || (e = await c()), n()) throw new Error(`Too many requests. Please try again in ${n()} seconds.`);
        const r = await i(`/threads/${t.projectId}/${t.messageId}/like`, {});
        return l.setCoolingTime(), r
    }, D = async t => {
        let e = localStorage.getItem("token");
        if (e || (e = await c()), n()) throw new Error(`Too many requests. Please try again in ${n()} seconds.`);
        const r = await i(`/threads/${t.projectId}/${t.messageId}/${t.commentId}/like`, {});
        return l.setCoolingTime(), r
    }, K = async t => await A(t), L = async (t, e, r) => {
        const o = new EventSource(`https://api.ppp.fun/sse/threads/${t}`, {
            withCredentials: !0
        });
        return o.onmessage = s => {
            const m = JSON.parse(s.data);
            e && e(m)
        }, o.onerror = s => {
            console.error("Error occurred:", s), r && r(s)
        }, o
    }, N = async t => {
        let e = localStorage.getItem("token");
        return e || (e = await c()), (await i("/auth/verifyToken", {
            publicKey: t
        })).data.user
    }, O = async t => {
        let e = localStorage.getItem("token");
        return e || (e = await c()), (await i(`/referral/bind/${t}`, {})).data
    }, x = async () => {
        let t = localStorage.getItem("token");
        return t || (t = await c()), (await i("/referral/createRefCode", {})).data
    };
export {
    b as authTokenApi, O as bindRefCode, x as createRefCode, B as getCommentApi, n as getCoolingTime, j as getMessageApi, C as getSignMessageApi, A as likeApi, D as likeCommentApi, U as postCommentApi, R as postMessageApi, L as sseThreadEvents, K as unlikeApi, N as verifyTokenByPublicKey
};
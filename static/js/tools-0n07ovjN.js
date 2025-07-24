import {
    r as g,
    K as P,
    P as a,
    i as c,
    c as u,
    T as E,
    u as m
} from "./el-loading-KWzNfS69.js";
var d = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ASSOCIATED_PROGRAM_ID = e.TOKEN_PROGRAM_ID = void 0, e.associatedAddress = s;
    const r = g;
    e.TOKEN_PROGRAM_ID = new r.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), e.ASSOCIATED_PROGRAM_ID = new r.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");

    function s({
        mint: n,
        owner: t
    }) {
        return r.PublicKey.findProgramAddressSync([t.toBuffer(), e.TOKEN_PROGRAM_ID.toBuffer(), n.toBuffer()], e.ASSOCIATED_PROGRAM_ID)[0]
    }
})(d);

function S(e) {
    return new Worker("/assets/worker-Dq11csW8.js", {
        name: e == null ? void 0 : e.name
    })
}
const l = "ppp_project",
    b = "ppp_nft",
    D = "ppp_auth",
    k = async e => new Promise((r, s) => {
        const n = [];
        for (let t = 0; t < 10; t++) {
            const o = new S;
            o.postMessage(e), o.onmessage = i => {
                n.forEach(y => {
                    y.terminate()
                });
                const _ = i.data.split(","),
                    A = P.fromSecretKey(new Uint8Array(_));
                r({
                    keypair: A
                })
            }, n.push(o)
        }
        setTimeout(() => {
            n.forEach(t => {
                t.terminate()
            }), s(new Error("No matching addresses found"))
        }, 100 * 1e3)
    });

function w(e, r) {
    return a.findProgramAddressSync([c.bytes.utf8.encode(l), r.toBuffer()], e)
}

function B(e, r) {
    return a.findProgramAddressSync([c.bytes.utf8.encode(D), r.toBuffer()], e)
}
const f = new a("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

function O(e) {
    const [r] = a.findProgramAddressSync([u.from("metadata"), f.toBuffer(), e.toBuffer()], f);
    return r
}

function K(e) {
    return O(e)
}
const h = (e, r) => R(e, r) < 0 ? [e, r] : [r, e];

function R(e, r) {
    const s = e.toBytes(),
        n = r.toBytes();
    for (let t = 0; t < 32; t++) {
        if (s[t] < n[t]) return -1;
        if (s[t] > n[t]) return 1
    }
    return 0
}
const p = m(),
    T = p.TokenIds.WSOL;

function I(e) {
    return a.findProgramAddressSync([e.toBuffer(), E.toBuffer(), T.toBuffer()], d.ASSOCIATED_PROGRAM_ID)
}

function G(e, r, s) {
    return a.findProgramAddressSync([c.bytes.utf8.encode(b), r.toArrayLike(u, "le", 8), s.toBuffer()], e)
}

function W(e) {
    try {
        const r = e == null ? void 0 : e.logs;
        if (!Array.isArray(r)) return e.message;
        const s = r.join(`
`),
            n = s.match(/Error Message: (.+?)(?=\.|,|$)/);
        if (n && n[1]) return n[1];
        const t = s.match(/{.*"errorMessage":\s*"([^"]+)".*}/);
        if (t && t[1]) return t[1];
        const o = s.match(/Error Code: ([^.]+)/);
        return (o == null ? void 0 : o[1]) || "Unrecognized transaction error"
    } catch (r) {
        return console.error("Error parsing Solana transaction logs:", r), "Failed to parse error details"
    }
}
export {
    w as a, B as b, K as c, I as d, W as e, G as f, k as g, h as s, d as t
};
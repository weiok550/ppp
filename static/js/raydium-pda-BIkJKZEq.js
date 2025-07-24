import {
    P as d,
    c as t,
    i as r
} from "./el-loading-KWzNfS69.js";
t.from(r.bytes.utf8.encode("amm_config"));
const u = t.from(r.bytes.utf8.encode("pool")),
    a = t.from(r.bytes.utf8.encode("pool_vault")),
    m = t.from(r.bytes.utf8.encode("vault_and_lp_mint_auth_seed")),
    i = t.from(r.bytes.utf8.encode("pool_lp_mint"));
t.from(r.bytes.utf8.encode("tick_array"));
t.from(r.bytes.utf8.encode("operation"));
const y = t.from(r.bytes.utf8.encode("observation"));
async function b(e) {
    const [o, s] = await d.findProgramAddress([m], e);
    return [o, s]
}
async function A(e, o, s, n) {
    const [f, c] = d.findProgramAddressSync([u, e.toBuffer(), o.toBuffer(), s.toBuffer()], n);
    return [f, c]
}
async function P(e, o, s) {
    const [n, f] = d.findProgramAddressSync([a, e.toBuffer(), o.toBuffer()], s);
    return [n, f]
}
async function p(e, o) {
    const [s, n] = d.findProgramAddressSync([i, e.toBuffer()], o);
    return [s, n]
}
async function l(e, o) {
    const [s, n] = d.findProgramAddressSync([y, e.toBuffer()], o);
    return [s, n]
}
export {
    A as a, p as b, P as c, l as d, b as g
};
var m = Object.defineProperty;
var h = (s, e, t) => e in s ? m(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t;
var d = (s, e, t) => h(s, typeof e != "symbol" ? e + "" : e, t);
import {
    d as u,
    h as _,
    i as g,
    b as l,
    v as E,
    l as p,
    k as b,
    m as y,
    E as v,
    o as c,
    e as k,
    bi as B,
    B as L
} from "./index-DejQ-iz-.js";
import {
    E as w
} from "./el-divider-BmWAspa3.js";
import {
    E as f
} from "./index-Brp1LNR4.js";
const q = {
        key: 0
    },
    x = u({
        __name: "LoadMore",
        props: {
            more: {
                type: Boolean,
                default: !0
            },
            method: {
                type: Function,
                default: () => {}
            }
        },
        setup(s) {
            const e = s,
                t = _(null),
                r = new IntersectionObserver(i => {
                    i[0].isIntersecting && e.method()
                }, {
                    threshold: 0
                });
            return g(() => {
                r.observe(t.value)
            }), (i, o) => {
                const n = v,
                    a = w;
                return c(), l("div", {
                    class: "loading",
                    ref_key: "LoadingEle",
                    ref: t
                }, [s.more ? (c(), l("div", q, [p(n, {
                    class: "is-loading icon",
                    color: "#29D4B0"
                }, {
                    default: y(() => [p(k(B))]),
                    _: 1
                }), o[0] || (o[0] = b("p", {
                    class: "desc"
                }, "Loading...", -1))])) : (c(), E(a, {
                    key: 1,
                    dashed: ""
                }))], 512)
            }
        }
    }),
    C = L(x, [
        ["__scopeId", "data-v-0a0cec3b"]
    ]);
class I {
    constructor(e) {
        d(this, "baseURL");
        this.baseURL = e
    }
    request(e, t = {}) {
        let r = this.baseURL + e;
        return (e.startsWith("http://") || e.startsWith("https://")) && (r = e), new Promise((i, o) => {
            fetch(r, t).then(async n => {
                if (n.ok) {
                    const a = await n.json();
                    a.success || (f({
                        title: "Error",
                        message: a.message || a.msg,
                        type: "error"
                    }), o(a)), i(a)
                } else f({
                    title: "Error",
                    message: "Request failed",
                    type: "error"
                }), o(n)
            }).catch(n => {
                o(n)
            })
        })
    }
    get(e) {
        return this.request(e, {
            method: "GET"
        })
    }
    post(e, t) {
        return this.request(e, {
            method: "POST",
            body: JSON.stringify(t)
        })
    }
}
const D = new I("https://api.ppp.fun");
export {
    C as _, D as f
};
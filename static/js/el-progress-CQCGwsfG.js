import {
    X as V,
    $ as b,
    _ as A,
    d as T,
    a as O,
    c as o,
    bM as R,
    b9 as U,
    bN as X,
    ba as j,
    bb as q,
    aD as G,
    V as P,
    b as c,
    o as l,
    x as B,
    n as i,
    e as t,
    k as y,
    f,
    r as C,
    t as D,
    v as I,
    m as H,
    S as J,
    E as K,
    w as Q
} from "./index-DejQ-iz-.js";
const Y = V({
        type: {
            type: String,
            default: "line",
            values: ["line", "circle", "dashboard"]
        },
        percentage: {
            type: Number,
            default: 0,
            validator: u => u >= 0 && u <= 100
        },
        status: {
            type: String,
            default: "",
            values: ["", "success", "exception", "warning"]
        },
        indeterminate: Boolean,
        duration: {
            type: Number,
            default: 3
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        strokeLinecap: {
            type: b(String),
            default: "round"
        },
        textInside: Boolean,
        width: {
            type: Number,
            default: 126
        },
        showText: {
            type: Boolean,
            default: !0
        },
        color: {
            type: b([String, Array, Function]),
            default: ""
        },
        striped: Boolean,
        stripedFlow: Boolean,
        format: {
            type: b(Function),
            default: u => `${u}%`
        }
    }),
    Z = T({
        name: "ElProgress"
    }),
    _ = T({
        ...Z,
        props: Y,
        setup(u) {
            const s = u,
                m = {
                    success: "#13ce66",
                    exception: "#ff4949",
                    warning: "#e6a23c",
                    default: "#20a0ff"
                },
                a = O("progress"),
                F = o(() => {
                    const e = {
                            width: `${s.percentage}%`,
                            animationDuration: `${s.duration}s`
                        },
                        r = N(s.percentage);
                    return r.includes("gradient") ? e.background = r : e.backgroundColor = r, e
                }),
                g = o(() => (s.strokeWidth / s.width * 100).toFixed(1)),
                v = o(() => ["circle", "dashboard"].includes(s.type) ? Number.parseInt(`${50-Number.parseFloat(g.value)/2}`, 10) : 0),
                w = o(() => {
                    const e = v.value,
                        r = s.type === "dashboard";
                    return `
          M 50 50
          m 0 ${r?"":"-"}${e}
          a ${e} ${e} 0 1 1 0 ${r?"-":""}${e*2}
          a ${e} ${e} 0 1 1 0 ${r?"":"-"}${e*2}
          `
                }),
                h = o(() => 2 * Math.PI * v.value),
                k = o(() => s.type === "dashboard" ? .75 : 1),
                $ = o(() => `${-1*h.value*(1-k.value)/2}px`),
                x = o(() => ({
                    strokeDasharray: `${h.value*k.value}px, ${h.value}px`,
                    strokeDashoffset: $.value
                })),
                E = o(() => ({
                    strokeDasharray: `${h.value*k.value*(s.percentage/100)}px, ${h.value}px`,
                    strokeDashoffset: $.value,
                    transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
                })),
                W = o(() => {
                    let e;
                    return s.color ? e = N(s.percentage) : e = m[s.status] || m.default, e
                }),
                z = o(() => s.status === "warning" ? R : s.type === "line" ? s.status === "success" ? U : X : s.status === "success" ? j : q),
                L = o(() => s.type === "line" ? 12 + s.strokeWidth * .4 : s.width * .111111 + 2),
                S = o(() => s.format(s.percentage));

            function M(e) {
                const r = 100 / e.length;
                return e.map((n, p) => P(n) ? {
                    color: n,
                    percentage: (p + 1) * r
                } : n).sort((n, p) => n.percentage - p.percentage)
            }
            const N = e => {
                var r;
                const {
                    color: d
                } = s;
                if (G(d)) return d(e);
                if (P(d)) return d; {
                    const n = M(d);
                    for (const p of n)
                        if (p.percentage > e) return p.color;
                    return (r = n[n.length - 1]) == null ? void 0 : r.color
                }
            };
            return (e, r) => (l(), c("div", {
                class: i([t(a).b(), t(a).m(e.type), t(a).is(e.status), {
                    [t(a).m("without-text")]: !e.showText,
                    [t(a).m("text-inside")]: e.textInside
                }]),
                role: "progressbar",
                "aria-valuenow": e.percentage,
                "aria-valuemin": "0",
                "aria-valuemax": "100"
            }, [e.type === "line" ? (l(), c("div", {
                key: 0,
                class: i(t(a).b("bar"))
            }, [y("div", {
                class: i(t(a).be("bar", "outer")),
                style: f({
                    height: `${e.strokeWidth}px`
                })
            }, [y("div", {
                class: i([t(a).be("bar", "inner"), {
                    [t(a).bem("bar", "inner", "indeterminate")]: e.indeterminate
                }, {
                    [t(a).bem("bar", "inner", "striped")]: e.striped
                }, {
                    [t(a).bem("bar", "inner", "striped-flow")]: e.stripedFlow
                }]),
                style: f(t(F))
            }, [(e.showText || e.$slots.default) && e.textInside ? (l(), c("div", {
                key: 0,
                class: i(t(a).be("bar", "innerText"))
            }, [C(e.$slots, "default", {
                percentage: e.percentage
            }, () => [y("span", null, D(t(S)), 1)])], 2)) : B("v-if", !0)], 6)], 6)], 2)) : (l(), c("div", {
                key: 1,
                class: i(t(a).b("circle")),
                style: f({
                    height: `${e.width}px`,
                    width: `${e.width}px`
                })
            }, [(l(), c("svg", {
                viewBox: "0 0 100 100"
            }, [y("path", {
                class: i(t(a).be("circle", "track")),
                d: t(w),
                stroke: `var(${t(a).cssVarName("fill-color-light")}, #e5e9f2)`,
                "stroke-linecap": e.strokeLinecap,
                "stroke-width": t(g),
                fill: "none",
                style: f(t(x))
            }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]), y("path", {
                class: i(t(a).be("circle", "path")),
                d: t(w),
                stroke: t(W),
                fill: "none",
                opacity: e.percentage ? 1 : 0,
                "stroke-linecap": e.strokeLinecap,
                "stroke-width": t(g),
                style: f(t(E))
            }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])]))], 6)), (e.showText || e.$slots.default) && !e.textInside ? (l(), c("div", {
                key: 2,
                class: i(t(a).e("text")),
                style: f({
                    fontSize: `${t(L)}px`
                })
            }, [C(e.$slots, "default", {
                percentage: e.percentage
            }, () => [e.status ? (l(), I(t(K), {
                key: 1
            }, {
                default: H(() => [(l(), I(J(t(z))))]),
                _: 1
            })) : (l(), c("span", {
                key: 0
            }, D(t(S)), 1))])], 6)) : B("v-if", !0)], 10, ["aria-valuenow"]))
        }
    });
var ee = A(_, [
    ["__file", "progress.vue"]
]);
const se = Q(ee);
export {
    se as E
};
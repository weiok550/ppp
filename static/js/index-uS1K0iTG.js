import {
    X as w,
    b0 as M,
    _ as N,
    d as E,
    aw as V,
    a as $,
    c as I,
    b as P,
    v as r,
    o as i,
    k as u,
    x as k,
    r as g,
    n as o,
    e as a,
    m as d,
    l as v,
    bb as y,
    ad as C,
    E as _,
    f as h,
    a7 as F,
    w as K
} from "./index-DejQ-iz-.js";
const X = w({
        type: {
            type: String,
            values: ["primary", "success", "info", "warning", "danger"],
            default: "primary"
        },
        closable: Boolean,
        disableTransitions: Boolean,
        hit: Boolean,
        color: String,
        size: {
            type: String,
            values: M
        },
        effect: {
            type: String,
            values: ["dark", "light", "plain"],
            default: "light"
        },
        round: Boolean
    }),
    j = {
        close: n => n instanceof MouseEvent,
        click: n => n instanceof MouseEvent
    },
    q = E({
        name: "ElTag"
    }),
    A = E({
        ...q,
        props: X,
        emits: j,
        setup(n, {
            emit: p
        }) {
            const S = n,
                B = V(),
                s = $("tag"),
                m = I(() => {
                    const {
                        type: e,
                        hit: l,
                        effect: t,
                        closable: c,
                        round: z
                    } = S;
                    return [s.b(), s.is("closable", c), s.m(e || "primary"), s.m(B.value), s.m(t), s.is("hit", l), s.is("round", z)]
                }),
                f = e => {
                    p("close", e)
                },
                b = e => {
                    p("click", e)
                },
                T = e => {
                    var l, t, c;
                    (c = (t = (l = e == null ? void 0 : e.component) == null ? void 0 : l.subTree) == null ? void 0 : t.component) != null && c.bum && (e.component.subTree.component.bum = null)
                };
            return (e, l) => e.disableTransitions ? (i(), P("span", {
                key: 0,
                class: o(a(m)),
                style: h({
                    backgroundColor: e.color
                }),
                onClick: b
            }, [u("span", {
                class: o(a(s).e("content"))
            }, [g(e.$slots, "default")], 2), e.closable ? (i(), r(a(_), {
                key: 0,
                class: o(a(s).e("close")),
                onClick: C(f, ["stop"])
            }, {
                default: d(() => [v(a(y))]),
                _: 1
            }, 8, ["class", "onClick"])) : k("v-if", !0)], 6)) : (i(), r(F, {
                key: 1,
                name: `${a(s).namespace.value}-zoom-in-center`,
                appear: "",
                onVnodeMounted: T
            }, {
                default: d(() => [u("span", {
                    class: o(a(m)),
                    style: h({
                        backgroundColor: e.color
                    }),
                    onClick: b
                }, [u("span", {
                    class: o(a(s).e("content"))
                }, [g(e.$slots, "default")], 2), e.closable ? (i(), r(a(_), {
                    key: 0,
                    class: o(a(s).e("close")),
                    onClick: C(f, ["stop"])
                }, {
                    default: d(() => [v(a(y))]),
                    _: 1
                }, 8, ["class", "onClick"])) : k("v-if", !0)], 6)]),
                _: 3
            }, 8, ["name"]))
        }
    });
var D = N(A, [
    ["__file", "tag.vue"]
]);
const H = K(D);
export {
    H as E
};
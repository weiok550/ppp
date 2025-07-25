import {
    X as g,
    a0 as u,
    $ as r,
    _,
    d as f,
    aa as O,
    c as n,
    a as $,
    U as b,
    bm as R,
    v as h,
    o as v,
    m as w,
    r as j,
    f as N,
    e as c,
    n as x,
    S as C,
    w as E,
    a1 as K
} from "./index-DejQ-iz-.js";
const P = g({
        tag: {
            type: String,
            default: "div"
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        pull: {
            type: Number,
            default: 0
        },
        push: {
            type: Number,
            default: 0
        },
        xs: {
            type: r([Number, Object]),
            default: () => u({})
        },
        sm: {
            type: r([Number, Object]),
            default: () => u({})
        },
        md: {
            type: r([Number, Object]),
            default: () => u({})
        },
        lg: {
            type: r([Number, Object]),
            default: () => u({})
        },
        xl: {
            type: r([Number, Object]),
            default: () => u({})
        }
    }),
    S = Symbol("rowContextKey"),
    k = f({
        name: "ElCol"
    }),
    B = f({
        ...k,
        props: P,
        setup(p) {
            const e = p,
                {
                    gutter: l
                } = O(S, {
                    gutter: n(() => 0)
                }),
                a = $("col"),
                i = n(() => {
                    const t = {};
                    return l.value && (t.paddingLeft = t.paddingRight = `${l.value/2}px`), t
                }),
                d = n(() => {
                    const t = [];
                    return ["span", "offset", "pull", "push"].forEach(s => {
                        const o = e[s];
                        b(o) && (s === "span" ? t.push(a.b(`${e[s]}`)) : o > 0 && t.push(a.b(`${s}-${e[s]}`)))
                    }), ["xs", "sm", "md", "lg", "xl"].forEach(s => {
                        b(e[s]) ? t.push(a.b(`${s}-${e[s]}`)) : R(e[s]) && Object.entries(e[s]).forEach(([o, y]) => {
                            t.push(o !== "span" ? a.b(`${s}-${o}-${y}`) : a.b(`${s}-${y}`))
                        })
                    }), l.value && t.push(a.is("guttered")), [a.b(), t]
                });
            return (t, m) => (v(), h(C(t.tag), {
                class: x(c(d)),
                style: N(c(i))
            }, {
                default: w(() => [j(t.$slots, "default")]),
                _: 3
            }, 8, ["class", "style"]))
        }
    });
var L = _(B, [
    ["__file", "col.vue"]
]);
const F = E(L),
    A = ["start", "center", "end", "space-around", "space-between", "space-evenly"],
    D = ["top", "middle", "bottom"],
    I = g({
        tag: {
            type: String,
            default: "div"
        },
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            values: A,
            default: "start"
        },
        align: {
            type: String,
            values: D
        }
    }),
    J = f({
        name: "ElRow"
    }),
    T = f({
        ...J,
        props: I,
        setup(p) {
            const e = p,
                l = $("row"),
                a = n(() => e.gutter);
            K(S, {
                gutter: a
            });
            const i = n(() => {
                    const t = {};
                    return e.gutter && (t.marginRight = t.marginLeft = `-${e.gutter/2}px`), t
                }),
                d = n(() => [l.b(), l.is(`justify-${e.justify}`, e.justify !== "start"), l.is(`align-${e.align}`, !!e.align)]);
            return (t, m) => (v(), h(C(t.tag), {
                class: x(c(d)),
                style: N(c(i))
            }, {
                default: w(() => [j(t.$slots, "default")]),
                _: 3
            }, 8, ["class", "style"]))
        }
    });
var U = _(T, [
    ["__file", "row.vue"]
]);
const G = E(U);
export {
    G as E, F as a
};
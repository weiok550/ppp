import {
    X as W,
    _ as $,
    d as N,
    aa as Q,
    a as U,
    a4 as oe,
    h as d,
    c as T,
    ay as se,
    aq as D,
    ao as Y,
    v as j,
    o as k,
    m as Z,
    H as re,
    k as K,
    ad as ne,
    n as L,
    e as v,
    f as O,
    ae as ie,
    a7 as ce,
    bn as ue,
    b as x,
    l as q,
    F as ve,
    U as B,
    aG as fe,
    $ as ee,
    av as G,
    O as F,
    b2 as de,
    aB as I,
    a1 as me,
    G as pe,
    cv as he,
    i as be,
    aL as ye,
    x as te,
    r as le,
    S as ge,
    bm as Se,
    w as ae
} from "./index-DejQ-iz-.js";
const C = 4,
    we = {
        vertical: {
            offset: "offsetHeight",
            scroll: "scrollTop",
            scrollSize: "scrollHeight",
            size: "height",
            key: "vertical",
            axis: "Y",
            client: "clientY",
            direction: "top"
        },
        horizontal: {
            offset: "offsetWidth",
            scroll: "scrollLeft",
            scrollSize: "scrollWidth",
            size: "width",
            key: "horizontal",
            axis: "X",
            client: "clientX",
            direction: "left"
        }
    },
    ze = ({
        move: m,
        size: u,
        bar: l
    }) => ({
        [l.size]: u,
        transform: `translate${l.axis}(${m}%)`
    }),
    X = Symbol("scrollbarContextKey"),
    _e = W({
        vertical: Boolean,
        size: String,
        move: Number,
        ratio: {
            type: Number,
            required: !0
        },
        always: Boolean
    }),
    Ee = "Thumb",
    He = N({
        __name: "thumb",
        props: _e,
        setup(m) {
            const u = m,
                l = Q(X),
                o = U("scrollbar");
            l || oe(Ee, "can not inject scrollbar context");
            const s = d(),
                f = d(),
                h = d({}),
                c = d(!1);
            let i = !1,
                p = !1,
                P = 0,
                a = 0,
                r = ue ? document.onselectstart : null;
            const t = T(() => we[u.vertical ? "vertical" : "horizontal"]),
                b = T(() => ze({
                    size: u.size,
                    move: u.move,
                    bar: t.value
                })),
                w = T(() => s.value[t.value.offset] ** 2 / l.wrapElement[t.value.scrollSize] / u.ratio / f.value[t.value.offset]),
                E = n => {
                    var g;
                    if (n.stopPropagation(), n.ctrlKey || [1, 2].includes(n.button)) return;
                    (g = window.getSelection()) == null || g.removeAllRanges(), z(n);
                    const H = n.currentTarget;
                    H && (h.value[t.value.axis] = H[t.value.offset] - (n[t.value.client] - H.getBoundingClientRect()[t.value.direction]))
                },
                S = n => {
                    if (!f.value || !s.value || !l.wrapElement) return;
                    const g = Math.abs(n.target.getBoundingClientRect()[t.value.direction] - n[t.value.client]),
                        H = f.value[t.value.offset] / 2,
                        A = (g - H) * 100 * w.value / s.value[t.value.offset];
                    l.wrapElement[t.value.scroll] = A * l.wrapElement[t.value.scrollSize] / 100
                },
                z = n => {
                    n.stopImmediatePropagation(), i = !0, P = l.wrapElement.scrollHeight, a = l.wrapElement.scrollWidth, document.addEventListener("mousemove", M), document.addEventListener("mouseup", R), r = document.onselectstart, document.onselectstart = () => !1
                },
                M = n => {
                    if (!s.value || !f.value || i === !1) return;
                    const g = h.value[t.value.axis];
                    if (!g) return;
                    const H = (s.value.getBoundingClientRect()[t.value.direction] - n[t.value.client]) * -1,
                        A = f.value[t.value.offset] - g,
                        V = (H - A) * 100 * w.value / s.value[t.value.offset];
                    t.value.scroll === "scrollLeft" ? l.wrapElement[t.value.scroll] = V * a / 100 : l.wrapElement[t.value.scroll] = V * P / 100
                },
                R = () => {
                    i = !1, h.value[t.value.axis] = 0, document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", R), y(), p && (c.value = !1)
                },
                _ = () => {
                    p = !1, c.value = !!u.size
                },
                e = () => {
                    p = !0, c.value = i
                };
            se(() => {
                y(), document.removeEventListener("mouseup", R)
            });
            const y = () => {
                document.onselectstart !== r && (document.onselectstart = r)
            };
            return D(Y(l, "scrollbarElement"), "mousemove", _), D(Y(l, "scrollbarElement"), "mouseleave", e), (n, g) => (k(), j(ce, {
                name: v(o).b("fade"),
                persisted: ""
            }, {
                default: Z(() => [re(K("div", {
                    ref_key: "instance",
                    ref: s,
                    class: L([v(o).e("bar"), v(o).is(v(t).key)]),
                    onMousedown: S,
                    onClick: ne(() => {}, ["stop"])
                }, [K("div", {
                    ref_key: "thumb",
                    ref: f,
                    class: L(v(o).e("thumb")),
                    style: O(v(b)),
                    onMousedown: E
                }, null, 38)], 42, ["onClick"]), [
                    [ie, n.always || c.value]
                ])]),
                _: 1
            }, 8, ["name"]))
        }
    });
var J = $(He, [
    ["__file", "thumb.vue"]
]);
const Te = W({
        always: {
            type: Boolean,
            default: !0
        },
        minSize: {
            type: Number,
            required: !0
        }
    }),
    ke = N({
        __name: "bar",
        props: Te,
        setup(m, {
            expose: u
        }) {
            const l = m,
                o = Q(X),
                s = d(0),
                f = d(0),
                h = d(""),
                c = d(""),
                i = d(1),
                p = d(1);
            return u({
                handleScroll: r => {
                    if (r) {
                        const t = r.offsetHeight - C,
                            b = r.offsetWidth - C;
                        f.value = r.scrollTop * 100 / t * i.value, s.value = r.scrollLeft * 100 / b * p.value
                    }
                },
                update: () => {
                    const r = o == null ? void 0 : o.wrapElement;
                    if (!r) return;
                    const t = r.offsetHeight - C,
                        b = r.offsetWidth - C,
                        w = t ** 2 / r.scrollHeight,
                        E = b ** 2 / r.scrollWidth,
                        S = Math.max(w, l.minSize),
                        z = Math.max(E, l.minSize);
                    i.value = w / (t - w) / (S / (t - S)), p.value = E / (b - E) / (z / (b - z)), c.value = S + C < t ? `${S}px` : "", h.value = z + C < b ? `${z}px` : ""
                }
            }), (r, t) => (k(), x(ve, null, [q(J, {
                move: s.value,
                ratio: p.value,
                size: h.value,
                always: r.always
            }, null, 8, ["move", "ratio", "size", "always"]), q(J, {
                move: f.value,
                ratio: i.value,
                size: c.value,
                vertical: "",
                always: r.always
            }, null, 8, ["move", "ratio", "size", "always"])], 64))
        }
    });
var Le = $(ke, [
    ["__file", "bar.vue"]
]);
const Pe = W({
        height: {
            type: [String, Number],
            default: ""
        },
        maxHeight: {
            type: [String, Number],
            default: ""
        },
        native: Boolean,
        wrapStyle: {
            type: ee([String, Object, Array]),
            default: ""
        },
        wrapClass: {
            type: [String, Array],
            default: ""
        },
        viewClass: {
            type: [String, Array],
            default: ""
        },
        viewStyle: {
            type: [String, Array, Object],
            default: ""
        },
        noresize: Boolean,
        tag: {
            type: String,
            default: "div"
        },
        always: Boolean,
        minSize: {
            type: Number,
            default: 20
        },
        tabindex: {
            type: [String, Number],
            default: void 0
        },
        id: String,
        role: String,
        ...fe(["ariaLabel", "ariaOrientation"])
    }),
    Ce = {
        "end-reached": m => ["left", "right", "top", "bottom"].includes(m),
        scroll: ({
            scrollTop: m,
            scrollLeft: u
        }) => [m, u].every(B)
    },
    Ne = "ElScrollbar",
    Re = N({
        name: Ne
    }),
    Be = N({
        ...Re,
        props: Pe,
        emits: Ce,
        setup(m, {
            expose: u,
            emit: l
        }) {
            const o = m,
                s = U("scrollbar");
            let f, h, c = 0,
                i = 0,
                p = "";
            const P = d(),
                a = d(),
                r = d(),
                t = d(),
                b = T(() => {
                    const e = {};
                    return o.height && (e.height = G(o.height)), o.maxHeight && (e.maxHeight = G(o.maxHeight)), [o.wrapStyle, e]
                }),
                w = T(() => [o.wrapClass, s.e("wrap"), {
                    [s.em("wrap", "hidden-default")]: !o.native
                }]),
                E = T(() => [s.e("view"), o.viewClass]),
                S = () => {
                    var e;
                    if (a.value) {
                        (e = t.value) == null || e.handleScroll(a.value);
                        const y = c,
                            n = i;
                        c = a.value.scrollTop, i = a.value.scrollLeft;
                        const g = {
                            bottom: c + a.value.clientHeight >= a.value.scrollHeight,
                            top: c <= 0 && y !== 0,
                            right: i + a.value.clientWidth >= a.value.scrollWidth && n !== i,
                            left: i <= 0 && n !== 0
                        };
                        y !== c && (p = c > y ? "bottom" : "top"), n !== i && (p = i > n ? "right" : "left"), l("scroll", {
                            scrollTop: c,
                            scrollLeft: i
                        }), g[p] && l("end-reached", p)
                    }
                };

            function z(e, y) {
                Se(e) ? a.value.scrollTo(e) : B(e) && B(y) && a.value.scrollTo(e, y)
            }
            const M = e => {
                    B(e) && (a.value.scrollTop = e)
                },
                R = e => {
                    B(e) && (a.value.scrollLeft = e)
                },
                _ = () => {
                    var e;
                    (e = t.value) == null || e.update()
                };
            return F(() => o.noresize, e => {
                e ? (f == null || f(), h == null || h()) : ({
                    stop: f
                } = de(r, _), h = D("resize", _))
            }, {
                immediate: !0
            }), F(() => [o.maxHeight, o.height], () => {
                o.native || I(() => {
                    var e;
                    _(), a.value && ((e = t.value) == null || e.handleScroll(a.value))
                })
            }), me(X, pe({
                scrollbarElement: P,
                wrapElement: a
            })), he(() => {
                a.value && (a.value.scrollTop = c, a.value.scrollLeft = i)
            }), be(() => {
                o.native || I(() => {
                    _()
                })
            }), ye(() => _()), u({
                wrapRef: a,
                update: _,
                scrollTo: z,
                setScrollTop: M,
                setScrollLeft: R,
                handleScroll: S
            }), (e, y) => (k(), x("div", {
                ref_key: "scrollbarRef",
                ref: P,
                class: L(v(s).b())
            }, [K("div", {
                ref_key: "wrapRef",
                ref: a,
                class: L(v(w)),
                style: O(v(b)),
                tabindex: e.tabindex,
                onScroll: S
            }, [(k(), j(ge(e.tag), {
                id: e.id,
                ref_key: "resizeRef",
                ref: r,
                class: L(v(E)),
                style: O(e.viewStyle),
                role: e.role,
                "aria-label": e.ariaLabel,
                "aria-orientation": e.ariaOrientation
            }, {
                default: Z(() => [le(e.$slots, "default")]),
                _: 3
            }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))], 46, ["tabindex"]), e.native ? te("v-if", !0) : (k(), j(Le, {
                key: 0,
                ref_key: "barRef",
                ref: t,
                always: e.always,
                "min-size": e.minSize
            }, null, 8, ["always", "min-size"]))], 2))
        }
    });
var Me = $(Be, [
    ["__file", "scrollbar.vue"]
]);
const De = ae(Me),
    Oe = W({
        direction: {
            type: String,
            values: ["horizontal", "vertical"],
            default: "horizontal"
        },
        contentPosition: {
            type: String,
            values: ["left", "center", "right"],
            default: "center"
        },
        borderStyle: {
            type: ee(String),
            default: "solid"
        }
    }),
    xe = N({
        name: "ElDivider"
    }),
    We = N({
        ...xe,
        props: Oe,
        setup(m) {
            const u = m,
                l = U("divider"),
                o = T(() => l.cssVar({
                    "border-style": u.borderStyle
                }));
            return (s, f) => (k(), x("div", {
                class: L([v(l).b(), v(l).m(s.direction)]),
                style: O(v(o)),
                role: "separator"
            }, [s.$slots.default && s.direction !== "vertical" ? (k(), x("div", {
                key: 0,
                class: L([v(l).e("text"), v(l).is(s.contentPosition)])
            }, [le(s.$slots, "default")], 2)) : te("v-if", !0)], 6))
        }
    });
var $e = $(We, [
    ["__file", "divider.vue"]
]);
const je = ae($e);
export {
    je as E, De as a
};
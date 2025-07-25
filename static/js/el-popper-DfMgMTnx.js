import {
    cF as mn,
    X as te,
    e as p,
    U as Ze,
    _ as le,
    d as $,
    h as L,
    c as A,
    r as se,
    a1 as Pe,
    a as be,
    aa as ue,
    ay as Be,
    b as He,
    o as G,
    f as hn,
    n as _t,
    $ as S,
    b7 as Je,
    H as Ft,
    cG as bn,
    bm as yn,
    F as wn,
    cH as On,
    cu as En,
    l as Se,
    i as Ke,
    O as N,
    bv as Ce,
    v as fe,
    x as We,
    m as Q,
    a5 as Ye,
    cI as kt,
    cJ as yt,
    aE as jt,
    aG as Dt,
    bn as Re,
    aS as Tn,
    bI as wt,
    bA as Cn,
    b3 as Ot,
    bC as Rn,
    w as Lt,
    aA as Ge,
    cK as Nt,
    az as An,
    aD as Le,
    a3 as $t,
    W as xn,
    ao as Te,
    cr as Pn,
    cL as Sn,
    ab as Mn,
    cM as In,
    a7 as Bn,
    ae as _n,
    cN as Fn,
    cO as kn,
    ax as jn,
    ap as Dn,
    cP as Ln,
    t as Nn
} from "./index-DejQ-iz-.js";
import {
    r as $n,
    q as Hn
} from "./index-Brp1LNR4.js";

function Wn(e) {
    return e === void 0
}

function Et() {
    let e;
    const t = (o, r) => {
            n(), e = window.setTimeout(o, r)
        },
        n = () => window.clearTimeout(e);
    return mn(() => n()), {
        registerTimeout: t,
        cancelTimeout: n
    }
}
const qn = te({
        showAfter: {
            type: Number,
            default: 0
        },
        hideAfter: {
            type: Number,
            default: 200
        },
        autoClose: {
            type: Number,
            default: 0
        }
    }),
    Kn = ({
        showAfter: e,
        hideAfter: t,
        autoClose: n,
        open: o,
        close: r
    }) => {
        const {
            registerTimeout: a
        } = Et(), {
            registerTimeout: i,
            cancelTimeout: u
        } = Et();
        return {
            onOpen: f => {
                a(() => {
                    o(f);
                    const v = p(n);
                    Ze(v) && v > 0 && i(() => {
                        r(f)
                    }, v)
                }, p(e))
            },
            onClose: f => {
                u(), a(() => {
                    r(f)
                }, p(t))
            }
        }
    },
    Qe = Symbol("popper"),
    Ht = Symbol("popperContent"),
    zn = ["dialog", "grid", "group", "listbox", "menu", "navigation", "tooltip", "tree"],
    Wt = te({
        role: {
            type: String,
            values: zn,
            default: "tooltip"
        }
    }),
    Un = $({
        name: "ElPopper",
        inheritAttrs: !1
    }),
    Vn = $({
        ...Un,
        props: Wt,
        setup(e, {
            expose: t
        }) {
            const n = e,
                o = L(),
                r = L(),
                a = L(),
                i = L(),
                u = A(() => n.role),
                l = {
                    triggerRef: o,
                    popperInstanceRef: r,
                    contentRef: a,
                    referenceRef: i,
                    role: u
                };
            return t(l), Pe(Qe, l), (s, f) => se(s.$slots, "default")
        }
    });
var Gn = le(Vn, [
    ["__file", "popper.vue"]
]);
const Zn = $({
        name: "ElPopperArrow",
        inheritAttrs: !1
    }),
    Jn = $({
        ...Zn,
        setup(e, {
            expose: t
        }) {
            const n = be("popper"),
                {
                    arrowRef: o,
                    arrowStyle: r
                } = ue(Ht, void 0);
            return Be(() => {
                o.value = void 0
            }), t({
                arrowRef: o
            }), (a, i) => (G(), He("span", {
                ref_key: "arrowRef",
                ref: o,
                class: _t(p(n).e("arrow")),
                style: hn(p(r)),
                "data-popper-arrow": ""
            }, null, 6))
        }
    });
var Xn = le(Jn, [
    ["__file", "arrow.vue"]
]);
const qt = te({
        virtualRef: {
            type: S(Object)
        },
        virtualTriggering: Boolean,
        onMouseenter: {
            type: S(Function)
        },
        onMouseleave: {
            type: S(Function)
        },
        onClick: {
            type: S(Function)
        },
        onKeydown: {
            type: S(Function)
        },
        onFocus: {
            type: S(Function)
        },
        onBlur: {
            type: S(Function)
        },
        onContextmenu: {
            type: S(Function)
        },
        id: String,
        open: Boolean
    }),
    Kt = Symbol("elForwardRef"),
    Yn = e => {
        Pe(Kt, {
            setForwardRef: n => {
                e.value = n
            }
        })
    },
    Qn = e => ({
        mounted(t) {
            e(t)
        },
        updated(t) {
            e(t)
        },
        unmounted() {
            e(null)
        }
    }),
    eo = "ElOnlyChild",
    to = $({
        name: eo,
        setup(e, {
            slots: t,
            attrs: n
        }) {
            var o;
            const r = ue(Kt),
                a = Qn((o = r == null ? void 0 : r.setForwardRef) != null ? o : Je);
            return () => {
                var i;
                const u = (i = t.default) == null ? void 0 : i.call(t, n);
                if (!u || u.length > 1) return null;
                const l = zt(u);
                return l ? Ft(bn(l, n), [
                    [a]
                ]) : null
            }
        }
    });

function zt(e) {
    if (!e) return null;
    const t = e;
    for (const n of t) {
        if (yn(n)) switch (n.type) {
            case En:
                continue;
            case On:
            case "svg":
                return Tt(n);
            case wn:
                return zt(n.children);
            default:
                return n
        }
        return Tt(n)
    }
    return null
}

function Tt(e) {
    const t = be("only-child");
    return Se("span", {
        class: t.e("content")
    }, [e])
}
const no = $({
        name: "ElPopperTrigger",
        inheritAttrs: !1
    }),
    oo = $({
        ...no,
        props: qt,
        setup(e, {
            expose: t
        }) {
            const n = e,
                {
                    role: o,
                    triggerRef: r
                } = ue(Qe, void 0);
            Yn(r);
            const a = A(() => u.value ? n.id : void 0),
                i = A(() => {
                    if (o && o.value === "tooltip") return n.open && n.id ? n.id : void 0
                }),
                u = A(() => {
                    if (o && o.value !== "tooltip") return o.value
                }),
                l = A(() => u.value ? `${n.open}` : void 0);
            let s;
            const f = ["onMouseenter", "onMouseleave", "onClick", "onKeydown", "onFocus", "onBlur", "onContextmenu"];
            return Ke(() => {
                N(() => n.virtualRef, v => {
                    v && (r.value = kt(v))
                }, {
                    immediate: !0
                }), N(r, (v, m) => {
                    s == null || s(), s = void 0, Ce(v) && (f.forEach(g => {
                        var b;
                        const d = n[g];
                        d && (v.addEventListener(g.slice(2).toLowerCase(), d), (b = m == null ? void 0 : m.removeEventListener) == null || b.call(m, g.slice(2).toLowerCase(), d))
                    }), yt(v) && (s = N([a, i, u, l], g => {
                        ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach((b, d) => {
                            jt(g[d]) ? v.removeAttribute(b) : v.setAttribute(b, g[d])
                        })
                    }, {
                        immediate: !0
                    }))), Ce(m) && yt(m) && ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach(g => m.removeAttribute(g))
                }, {
                    immediate: !0
                })
            }), Be(() => {
                if (s == null || s(), s = void 0, r.value && Ce(r.value)) {
                    const v = r.value;
                    f.forEach(m => {
                        const g = n[m];
                        g && v.removeEventListener(m.slice(2).toLowerCase(), g)
                    }), r.value = void 0
                }
            }), t({
                triggerRef: r
            }), (v, m) => v.virtualTriggering ? We("v-if", !0) : (G(), fe(p(to), Ye({
                key: 0
            }, v.$attrs, {
                "aria-controls": p(a),
                "aria-describedby": p(i),
                "aria-expanded": p(l),
                "aria-haspopup": p(u)
            }), {
                default: Q(() => [se(v.$slots, "default")]),
                _: 3
            }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]))
        }
    });
var ro = le(oo, [
        ["__file", "trigger.vue"]
    ]),
    H = "top",
    K = "bottom",
    z = "right",
    W = "left",
    et = "auto",
    _e = [H, K, z, W],
    de = "start",
    Me = "end",
    ao = "clippingParents",
    Ut = "viewport",
    Ee = "popper",
    io = "reference",
    Ct = _e.reduce(function (e, t) {
        return e.concat([t + "-" + de, t + "-" + Me])
    }, []),
    tt = [].concat(_e, [et]).reduce(function (e, t) {
        return e.concat([t, t + "-" + de, t + "-" + Me])
    }, []),
    so = "beforeRead",
    lo = "read",
    uo = "afterRead",
    co = "beforeMain",
    po = "main",
    fo = "afterMain",
    vo = "beforeWrite",
    go = "write",
    mo = "afterWrite",
    ho = [so, lo, uo, co, po, fo, vo, go, mo];

function J(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function V(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function ve(e) {
    var t = V(e).Element;
    return e instanceof t || e instanceof Element
}

function q(e) {
    var t = V(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function nt(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = V(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function bo(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (n) {
        var o = t.styles[n] || {},
            r = t.attributes[n] || {},
            a = t.elements[n];
        !q(a) || !J(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function (i) {
            var u = r[i];
            u === !1 ? a.removeAttribute(i) : a.setAttribute(i, u === !0 ? "" : u)
        }))
    })
}

function yo(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
            Object.keys(t.elements).forEach(function (o) {
                var r = t.elements[o],
                    a = t.attributes[o] || {},
                    i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
                    u = i.reduce(function (l, s) {
                        return l[s] = "", l
                    }, {});
                !q(r) || !J(r) || (Object.assign(r.style, u), Object.keys(a).forEach(function (l) {
                    r.removeAttribute(l)
                }))
            })
        }
}
var Vt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: bo,
    effect: yo,
    requires: ["computeStyles"]
};

function Z(e) {
    return e.split("-")[0]
}
var ie = Math.max,
    qe = Math.min,
    ge = Math.round;

function me(e, t) {
    t === void 0 && (t = !1);
    var n = e.getBoundingClientRect(),
        o = 1,
        r = 1;
    if (q(e) && t) {
        var a = e.offsetHeight,
            i = e.offsetWidth;
        i > 0 && (o = ge(n.width) / i || 1), a > 0 && (r = ge(n.height) / a || 1)
    }
    return {
        width: n.width / o,
        height: n.height / r,
        top: n.top / r,
        right: n.right / o,
        bottom: n.bottom / r,
        left: n.left / o,
        x: n.left / o,
        y: n.top / r
    }
}

function ot(e) {
    var t = me(e),
        n = e.offsetWidth,
        o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}

function Gt(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && nt(n)) {
        var o = t;
        do {
            if (o && e.isSameNode(o)) return !0;
            o = o.parentNode || o.host
        } while (o)
    }
    return !1
}

function ee(e) {
    return V(e).getComputedStyle(e)
}

function wo(e) {
    return ["table", "td", "th"].indexOf(J(e)) >= 0
}

function ne(e) {
    return ((ve(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function ze(e) {
    return J(e) === "html" ? e : e.assignedSlot || e.parentNode || (nt(e) ? e.host : null) || ne(e)
}

function Rt(e) {
    return !q(e) || ee(e).position === "fixed" ? null : e.offsetParent
}

function Oo(e) {
    var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
        n = navigator.userAgent.indexOf("Trident") !== -1;
    if (n && q(e)) {
        var o = ee(e);
        if (o.position === "fixed") return null
    }
    var r = ze(e);
    for (nt(r) && (r = r.host); q(r) && ["html", "body"].indexOf(J(r)) < 0;) {
        var a = ee(r);
        if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
        r = r.parentNode
    }
    return null
}

function Fe(e) {
    for (var t = V(e), n = Rt(e); n && wo(n) && ee(n).position === "static";) n = Rt(n);
    return n && (J(n) === "html" || J(n) === "body" && ee(n).position === "static") ? t : n || Oo(e) || t
}

function rt(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Ae(e, t, n) {
    return ie(e, qe(t, n))
}

function Eo(e, t, n) {
    var o = Ae(e, t, n);
    return o > n ? n : o
}

function Zt() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function Jt(e) {
    return Object.assign({}, Zt(), e)
}

function Xt(e, t) {
    return t.reduce(function (n, o) {
        return n[o] = e, n
    }, {})
}
var To = function (e, t) {
    return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
        placement: t.placement
    })) : e, Jt(typeof e != "number" ? e : Xt(e, _e))
};

function Co(e) {
    var t, n = e.state,
        o = e.name,
        r = e.options,
        a = n.elements.arrow,
        i = n.modifiersData.popperOffsets,
        u = Z(n.placement),
        l = rt(u),
        s = [W, z].indexOf(u) >= 0,
        f = s ? "height" : "width";
    if (!(!a || !i)) {
        var v = To(r.padding, n),
            m = ot(a),
            g = l === "y" ? H : W,
            b = l === "y" ? K : z,
            d = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f],
            E = i[l] - n.rects.reference[l],
            w = Fe(a),
            T = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
            c = d / 2 - E / 2,
            h = v[g],
            C = T - m[f] - v[b],
            x = T / 2 - m[f] / 2 + c,
            O = Ae(h, x, C),
            R = l;
        n.modifiersData[o] = (t = {}, t[R] = O, t.centerOffset = O - x, t)
    }
}

function Ro(e) {
    var t = e.state,
        n = e.options,
        o = n.element,
        r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !Gt(t.elements.popper, r) || (t.elements.arrow = r))
}
var Ao = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Co,
    effect: Ro,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function he(e) {
    return e.split("-")[1]
}
var xo = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function Po(e) {
    var t = e.x,
        n = e.y,
        o = window,
        r = o.devicePixelRatio || 1;
    return {
        x: ge(t * r) / r || 0,
        y: ge(n * r) / r || 0
    }
}

function At(e) {
    var t, n = e.popper,
        o = e.popperRect,
        r = e.placement,
        a = e.variation,
        i = e.offsets,
        u = e.position,
        l = e.gpuAcceleration,
        s = e.adaptive,
        f = e.roundOffsets,
        v = e.isFixed,
        m = i.x,
        g = m === void 0 ? 0 : m,
        b = i.y,
        d = b === void 0 ? 0 : b,
        E = typeof f == "function" ? f({
            x: g,
            y: d
        }) : {
            x: g,
            y: d
        };
    g = E.x, d = E.y;
    var w = i.hasOwnProperty("x"),
        T = i.hasOwnProperty("y"),
        c = W,
        h = H,
        C = window;
    if (s) {
        var x = Fe(n),
            O = "clientHeight",
            R = "clientWidth";
        if (x === V(n) && (x = ne(n), ee(x).position !== "static" && u === "absolute" && (O = "scrollHeight", R = "scrollWidth")), x = x, r === H || (r === W || r === z) && a === Me) {
            h = K;
            var P = v && x === C && C.visualViewport ? C.visualViewport.height : x[O];
            d -= P - o.height, d *= l ? 1 : -1
        }
        if (r === W || (r === H || r === K) && a === Me) {
            c = z;
            var B = v && x === C && C.visualViewport ? C.visualViewport.width : x[R];
            g -= B - o.width, g *= l ? 1 : -1
        }
    }
    var M = Object.assign({
            position: u
        }, s && xo),
        I = f === !0 ? Po({
            x: g,
            y: d
        }) : {
            x: g,
            y: d
        };
    if (g = I.x, d = I.y, l) {
        var F;
        return Object.assign({}, M, (F = {}, F[h] = T ? "0" : "", F[c] = w ? "0" : "", F.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + d + "px)" : "translate3d(" + g + "px, " + d + "px, 0)", F))
    }
    return Object.assign({}, M, (t = {}, t[h] = T ? d + "px" : "", t[c] = w ? g + "px" : "", t.transform = "", t))
}

function So(e) {
    var t = e.state,
        n = e.options,
        o = n.gpuAcceleration,
        r = o === void 0 ? !0 : o,
        a = n.adaptive,
        i = a === void 0 ? !0 : a,
        u = n.roundOffsets,
        l = u === void 0 ? !0 : u,
        s = {
            placement: Z(t.placement),
            variation: he(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: r,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, At(Object.assign({}, s, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: i,
        roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, At(Object.assign({}, s, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var Yt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: So,
        data: {}
    },
    Ne = {
        passive: !0
    };

function Mo(e) {
    var t = e.state,
        n = e.instance,
        o = e.options,
        r = o.scroll,
        a = r === void 0 ? !0 : r,
        i = o.resize,
        u = i === void 0 ? !0 : i,
        l = V(t.elements.popper),
        s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return a && s.forEach(function (f) {
            f.addEventListener("scroll", n.update, Ne)
        }), u && l.addEventListener("resize", n.update, Ne),
        function () {
            a && s.forEach(function (f) {
                f.removeEventListener("scroll", n.update, Ne)
            }), u && l.removeEventListener("resize", n.update, Ne)
        }
}
var Qt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: Mo,
        data: {}
    },
    Io = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function $e(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
        return Io[t]
    })
}
var Bo = {
    start: "end",
    end: "start"
};

function xt(e) {
    return e.replace(/start|end/g, function (t) {
        return Bo[t]
    })
}

function at(e) {
    var t = V(e),
        n = t.pageXOffset,
        o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}

function it(e) {
    return me(ne(e)).left + at(e).scrollLeft
}

function _o(e) {
    var t = V(e),
        n = ne(e),
        o = t.visualViewport,
        r = n.clientWidth,
        a = n.clientHeight,
        i = 0,
        u = 0;
    return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, u = o.offsetTop)), {
        width: r,
        height: a,
        x: i + it(e),
        y: u
    }
}

function Fo(e) {
    var t, n = ne(e),
        o = at(e),
        r = (t = e.ownerDocument) == null ? void 0 : t.body,
        a = ie(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
        i = ie(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
        u = -o.scrollLeft + it(e),
        l = -o.scrollTop;
    return ee(r || n).direction === "rtl" && (u += ie(n.clientWidth, r ? r.clientWidth : 0) - a), {
        width: a,
        height: i,
        x: u,
        y: l
    }
}

function st(e) {
    var t = ee(e),
        n = t.overflow,
        o = t.overflowX,
        r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o)
}

function en(e) {
    return ["html", "body", "#document"].indexOf(J(e)) >= 0 ? e.ownerDocument.body : q(e) && st(e) ? e : en(ze(e))
}

function xe(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = en(e),
        r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
        a = V(o),
        i = r ? [a].concat(a.visualViewport || [], st(o) ? o : []) : o,
        u = t.concat(i);
    return r ? u : u.concat(xe(ze(i)))
}

function Xe(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function ko(e) {
    var t = me(e);
    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
}

function Pt(e, t) {
    return t === Ut ? Xe(_o(e)) : ve(t) ? ko(t) : Xe(Fo(ne(e)))
}

function jo(e) {
    var t = xe(ze(e)),
        n = ["absolute", "fixed"].indexOf(ee(e).position) >= 0,
        o = n && q(e) ? Fe(e) : e;
    return ve(o) ? t.filter(function (r) {
        return ve(r) && Gt(r, o) && J(r) !== "body"
    }) : []
}

function Do(e, t, n) {
    var o = t === "clippingParents" ? jo(e) : [].concat(t),
        r = [].concat(o, [n]),
        a = r[0],
        i = r.reduce(function (u, l) {
            var s = Pt(e, l);
            return u.top = ie(s.top, u.top), u.right = qe(s.right, u.right), u.bottom = qe(s.bottom, u.bottom), u.left = ie(s.left, u.left), u
        }, Pt(e, a));
    return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
}

function tn(e) {
    var t = e.reference,
        n = e.element,
        o = e.placement,
        r = o ? Z(o) : null,
        a = o ? he(o) : null,
        i = t.x + t.width / 2 - n.width / 2,
        u = t.y + t.height / 2 - n.height / 2,
        l;
    switch (r) {
        case H:
            l = {
                x: i,
                y: t.y - n.height
            };
            break;
        case K:
            l = {
                x: i,
                y: t.y + t.height
            };
            break;
        case z:
            l = {
                x: t.x + t.width,
                y: u
            };
            break;
        case W:
            l = {
                x: t.x - n.width,
                y: u
            };
            break;
        default:
            l = {
                x: t.x,
                y: t.y
            }
    }
    var s = r ? rt(r) : null;
    if (s != null) {
        var f = s === "y" ? "height" : "width";
        switch (a) {
            case de:
                l[s] = l[s] - (t[f] / 2 - n[f] / 2);
                break;
            case Me:
                l[s] = l[s] + (t[f] / 2 - n[f] / 2);
                break
        }
    }
    return l
}

function Ie(e, t) {
    t === void 0 && (t = {});
    var n = t,
        o = n.placement,
        r = o === void 0 ? e.placement : o,
        a = n.boundary,
        i = a === void 0 ? ao : a,
        u = n.rootBoundary,
        l = u === void 0 ? Ut : u,
        s = n.elementContext,
        f = s === void 0 ? Ee : s,
        v = n.altBoundary,
        m = v === void 0 ? !1 : v,
        g = n.padding,
        b = g === void 0 ? 0 : g,
        d = Jt(typeof b != "number" ? b : Xt(b, _e)),
        E = f === Ee ? io : Ee,
        w = e.rects.popper,
        T = e.elements[m ? E : f],
        c = Do(ve(T) ? T : T.contextElement || ne(e.elements.popper), i, l),
        h = me(e.elements.reference),
        C = tn({
            reference: h,
            element: w,
            placement: r
        }),
        x = Xe(Object.assign({}, w, C)),
        O = f === Ee ? x : h,
        R = {
            top: c.top - O.top + d.top,
            bottom: O.bottom - c.bottom + d.bottom,
            left: c.left - O.left + d.left,
            right: O.right - c.right + d.right
        },
        P = e.modifiersData.offset;
    if (f === Ee && P) {
        var B = P[r];
        Object.keys(R).forEach(function (M) {
            var I = [z, K].indexOf(M) >= 0 ? 1 : -1,
                F = [H, K].indexOf(M) >= 0 ? "y" : "x";
            R[M] += B[F] * I
        })
    }
    return R
}

function Lo(e, t) {
    t === void 0 && (t = {});
    var n = t,
        o = n.placement,
        r = n.boundary,
        a = n.rootBoundary,
        i = n.padding,
        u = n.flipVariations,
        l = n.allowedAutoPlacements,
        s = l === void 0 ? tt : l,
        f = he(o),
        v = f ? u ? Ct : Ct.filter(function (b) {
            return he(b) === f
        }) : _e,
        m = v.filter(function (b) {
            return s.indexOf(b) >= 0
        });
    m.length === 0 && (m = v);
    var g = m.reduce(function (b, d) {
        return b[d] = Ie(e, {
            placement: d,
            boundary: r,
            rootBoundary: a,
            padding: i
        })[Z(d)], b
    }, {});
    return Object.keys(g).sort(function (b, d) {
        return g[b] - g[d]
    })
}

function No(e) {
    if (Z(e) === et) return [];
    var t = $e(e);
    return [xt(e), t, xt(t)]
}

function $o(e) {
    var t = e.state,
        n = e.options,
        o = e.name;
    if (!t.modifiersData[o]._skip) {
        for (var r = n.mainAxis, a = r === void 0 ? !0 : r, i = n.altAxis, u = i === void 0 ? !0 : i, l = n.fallbackPlacements, s = n.padding, f = n.boundary, v = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, b = g === void 0 ? !0 : g, d = n.allowedAutoPlacements, E = t.options.placement, w = Z(E), T = w === E, c = l || (T || !b ? [$e(E)] : No(E)), h = [E].concat(c).reduce(function (re, X) {
                return re.concat(Z(X) === et ? Lo(t, {
                    placement: X,
                    boundary: f,
                    rootBoundary: v,
                    padding: s,
                    flipVariations: b,
                    allowedAutoPlacements: d
                }) : X)
            }, []), C = t.rects.reference, x = t.rects.popper, O = new Map, R = !0, P = h[0], B = 0; B < h.length; B++) {
            var M = h[B],
                I = Z(M),
                F = he(M) === de,
                D = [H, K].indexOf(I) >= 0,
                U = D ? "width" : "height",
                _ = Ie(t, {
                    placement: M,
                    boundary: f,
                    rootBoundary: v,
                    altBoundary: m,
                    padding: s
                }),
                j = D ? F ? z : W : F ? K : H;
            C[U] > x[U] && (j = $e(j));
            var y = $e(j),
                k = [];
            if (a && k.push(_[I] <= 0), u && k.push(_[j] <= 0, _[y] <= 0), k.every(function (re) {
                    return re
                })) {
                P = M, R = !1;
                break
            }
            O.set(M, k)
        }
        if (R)
            for (var oe = b ? 3 : 1, ye = function (re) {
                    var X = h.find(function (je) {
                        var Oe = O.get(je);
                        if (Oe) return Oe.slice(0, re).every(function (ce) {
                            return ce
                        })
                    });
                    if (X) return P = X, "break"
                }, we = oe; we > 0; we--) {
                var ke = ye(we);
                if (ke === "break") break
            }
        t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0)
    }
}
var Ho = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: $o,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function St(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function Mt(e) {
    return [H, z, K, W].some(function (t) {
        return e[t] >= 0
    })
}

function Wo(e) {
    var t = e.state,
        n = e.name,
        o = t.rects.reference,
        r = t.rects.popper,
        a = t.modifiersData.preventOverflow,
        i = Ie(t, {
            elementContext: "reference"
        }),
        u = Ie(t, {
            altBoundary: !0
        }),
        l = St(i, o),
        s = St(u, r, a),
        f = Mt(l),
        v = Mt(s);
    t.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: s,
        isReferenceHidden: f,
        hasPopperEscaped: v
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": f,
        "data-popper-escaped": v
    })
}
var qo = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Wo
};

function Ko(e, t, n) {
    var o = Z(e),
        r = [W, H].indexOf(o) >= 0 ? -1 : 1,
        a = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        i = a[0],
        u = a[1];
    return i = i || 0, u = (u || 0) * r, [W, z].indexOf(o) >= 0 ? {
        x: u,
        y: i
    } : {
        x: i,
        y: u
    }
}

function zo(e) {
    var t = e.state,
        n = e.options,
        o = e.name,
        r = n.offset,
        a = r === void 0 ? [0, 0] : r,
        i = tt.reduce(function (f, v) {
            return f[v] = Ko(v, t.rects, a), f
        }, {}),
        u = i[t.placement],
        l = u.x,
        s = u.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += s), t.modifiersData[o] = i
}
var Uo = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: zo
};

function Vo(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = tn({
        reference: t.rects.reference,
        element: t.rects.popper,
        placement: t.placement
    })
}
var nn = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Vo,
    data: {}
};

function Go(e) {
    return e === "x" ? "y" : "x"
}

function Zo(e) {
    var t = e.state,
        n = e.options,
        o = e.name,
        r = n.mainAxis,
        a = r === void 0 ? !0 : r,
        i = n.altAxis,
        u = i === void 0 ? !1 : i,
        l = n.boundary,
        s = n.rootBoundary,
        f = n.altBoundary,
        v = n.padding,
        m = n.tether,
        g = m === void 0 ? !0 : m,
        b = n.tetherOffset,
        d = b === void 0 ? 0 : b,
        E = Ie(t, {
            boundary: l,
            rootBoundary: s,
            padding: v,
            altBoundary: f
        }),
        w = Z(t.placement),
        T = he(t.placement),
        c = !T,
        h = rt(w),
        C = Go(h),
        x = t.modifiersData.popperOffsets,
        O = t.rects.reference,
        R = t.rects.popper,
        P = typeof d == "function" ? d(Object.assign({}, t.rects, {
            placement: t.placement
        })) : d,
        B = typeof P == "number" ? {
            mainAxis: P,
            altAxis: P
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, P),
        M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        I = {
            x: 0,
            y: 0
        };
    if (x) {
        if (a) {
            var F, D = h === "y" ? H : W,
                U = h === "y" ? K : z,
                _ = h === "y" ? "height" : "width",
                j = x[h],
                y = j + E[D],
                k = j - E[U],
                oe = g ? -R[_] / 2 : 0,
                ye = T === de ? O[_] : R[_],
                we = T === de ? -R[_] : -O[_],
                ke = t.elements.arrow,
                re = g && ke ? ot(ke) : {
                    width: 0,
                    height: 0
                },
                X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zt(),
                je = X[D],
                Oe = X[U],
                ce = Ae(0, O[_], re[_]),
                un = c ? O[_] / 2 - oe - ce - je - B.mainAxis : ye - ce - je - B.mainAxis,
                cn = c ? -O[_] / 2 + oe + ce + Oe + B.mainAxis : we + ce + Oe + B.mainAxis,
                Ue = t.elements.arrow && Fe(t.elements.arrow),
                pn = Ue ? h === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0,
                ct = (F = M == null ? void 0 : M[h]) != null ? F : 0,
                fn = j + un - ct - pn,
                dn = j + cn - ct,
                pt = Ae(g ? qe(y, fn) : y, j, g ? ie(k, dn) : k);
            x[h] = pt, I[h] = pt - j
        }
        if (u) {
            var ft, vn = h === "x" ? H : W,
                gn = h === "x" ? K : z,
                ae = x[C],
                De = C === "y" ? "height" : "width",
                dt = ae + E[vn],
                vt = ae - E[gn],
                Ve = [H, W].indexOf(w) !== -1,
                gt = (ft = M == null ? void 0 : M[C]) != null ? ft : 0,
                mt = Ve ? dt : ae - O[De] - R[De] - gt + B.altAxis,
                ht = Ve ? ae + O[De] + R[De] - gt - B.altAxis : vt,
                bt = g && Ve ? Eo(mt, ae, ht) : Ae(g ? mt : dt, ae, g ? ht : vt);
            x[C] = bt, I[C] = bt - ae
        }
        t.modifiersData[o] = I
    }
}
var Jo = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Zo,
    requiresIfExists: ["offset"]
};

function Xo(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Yo(e) {
    return e === V(e) || !q(e) ? at(e) : Xo(e)
}

function Qo(e) {
    var t = e.getBoundingClientRect(),
        n = ge(t.width) / e.offsetWidth || 1,
        o = ge(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}

function er(e, t, n) {
    n === void 0 && (n = !1);
    var o = q(t),
        r = q(t) && Qo(t),
        a = ne(t),
        i = me(e, r),
        u = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = {
            x: 0,
            y: 0
        };
    return (o || !o && !n) && ((J(t) !== "body" || st(a)) && (u = Yo(t)), q(t) ? (l = me(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = it(a))), {
        x: i.left + u.scrollLeft - l.x,
        y: i.top + u.scrollTop - l.y,
        width: i.width,
        height: i.height
    }
}

function tr(e) {
    var t = new Map,
        n = new Set,
        o = [];
    e.forEach(function (a) {
        t.set(a.name, a)
    });

    function r(a) {
        n.add(a.name);
        var i = [].concat(a.requires || [], a.requiresIfExists || []);
        i.forEach(function (u) {
            if (!n.has(u)) {
                var l = t.get(u);
                l && r(l)
            }
        }), o.push(a)
    }
    return e.forEach(function (a) {
        n.has(a.name) || r(a)
    }), o
}

function nr(e) {
    var t = tr(e);
    return ho.reduce(function (n, o) {
        return n.concat(t.filter(function (r) {
            return r.phase === o
        }))
    }, [])
}

function or(e) {
    var t;
    return function () {
        return t || (t = new Promise(function (n) {
            Promise.resolve().then(function () {
                t = void 0, n(e())
            })
        })), t
    }
}

function rr(e) {
    var t = e.reduce(function (n, o) {
        var r = n[o.name];
        return n[o.name] = r ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data)
        }) : o, n
    }, {});
    return Object.keys(t).map(function (n) {
        return t[n]
    })
}
var It = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function Bt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}

function lt(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        o = n === void 0 ? [] : n,
        r = t.defaultOptions,
        a = r === void 0 ? It : r;
    return function (i, u, l) {
        l === void 0 && (l = a);
        var s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, It, a),
                modifiersData: {},
                elements: {
                    reference: i,
                    popper: u
                },
                attributes: {},
                styles: {}
            },
            f = [],
            v = !1,
            m = {
                state: s,
                setOptions: function (d) {
                    var E = typeof d == "function" ? d(s.options) : d;
                    b(), s.options = Object.assign({}, a, s.options, E), s.scrollParents = {
                        reference: ve(i) ? xe(i) : i.contextElement ? xe(i.contextElement) : [],
                        popper: xe(u)
                    };
                    var w = nr(rr([].concat(o, s.options.modifiers)));
                    return s.orderedModifiers = w.filter(function (T) {
                        return T.enabled
                    }), g(), m.update()
                },
                forceUpdate: function () {
                    if (!v) {
                        var d = s.elements,
                            E = d.reference,
                            w = d.popper;
                        if (Bt(E, w)) {
                            s.rects = {
                                reference: er(E, Fe(w), s.options.strategy === "fixed"),
                                popper: ot(w)
                            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function (R) {
                                return s.modifiersData[R.name] = Object.assign({}, R.data)
                            });
                            for (var T = 0; T < s.orderedModifiers.length; T++) {
                                if (s.reset === !0) {
                                    s.reset = !1, T = -1;
                                    continue
                                }
                                var c = s.orderedModifiers[T],
                                    h = c.fn,
                                    C = c.options,
                                    x = C === void 0 ? {} : C,
                                    O = c.name;
                                typeof h == "function" && (s = h({
                                    state: s,
                                    options: x,
                                    name: O,
                                    instance: m
                                }) || s)
                            }
                        }
                    }
                },
                update: or(function () {
                    return new Promise(function (d) {
                        m.forceUpdate(), d(s)
                    })
                }),
                destroy: function () {
                    b(), v = !0
                }
            };
        if (!Bt(i, u)) return m;
        m.setOptions(l).then(function (d) {
            !v && l.onFirstUpdate && l.onFirstUpdate(d)
        });

        function g() {
            s.orderedModifiers.forEach(function (d) {
                var E = d.name,
                    w = d.options,
                    T = w === void 0 ? {} : w,
                    c = d.effect;
                if (typeof c == "function") {
                    var h = c({
                            state: s,
                            name: E,
                            instance: m,
                            options: T
                        }),
                        C = function () {};
                    f.push(h || C)
                }
            })
        }

        function b() {
            f.forEach(function (d) {
                return d()
            }), f = []
        }
        return m
    }
}
lt();
var ar = [Qt, nn, Yt, Vt];
lt({
    defaultModifiers: ar
});
var ir = [Qt, nn, Yt, Vt, Uo, Ho, Jo, Ao, qo],
    sr = lt({
        defaultModifiers: ir
    });
const on = te({
        arrowOffset: {
            type: Number,
            default: 5
        }
    }),
    lr = ["fixed", "absolute"],
    ur = te({
        boundariesPadding: {
            type: Number,
            default: 0
        },
        fallbackPlacements: {
            type: S(Array),
            default: void 0
        },
        gpuAcceleration: {
            type: Boolean,
            default: !0
        },
        offset: {
            type: Number,
            default: 12
        },
        placement: {
            type: String,
            values: tt,
            default: "bottom"
        },
        popperOptions: {
            type: S(Object),
            default: () => ({})
        },
        strategy: {
            type: String,
            values: lr,
            default: "absolute"
        }
    }),
    rn = te({
        ...ur,
        ...on,
        id: String,
        style: {
            type: S([String, Array, Object])
        },
        className: {
            type: S([String, Array, Object])
        },
        effect: {
            type: S(String),
            default: "dark"
        },
        visible: Boolean,
        enterable: {
            type: Boolean,
            default: !0
        },
        pure: Boolean,
        focusOnShow: Boolean,
        trapping: Boolean,
        popperClass: {
            type: S([String, Array, Object])
        },
        popperStyle: {
            type: S([String, Array, Object])
        },
        referenceEl: {
            type: S(Object)
        },
        triggerTargetEl: {
            type: S(Object)
        },
        stopPopperMouseEvent: {
            type: Boolean,
            default: !0
        },
        virtualTriggering: Boolean,
        zIndex: Number,
        ...Dt(["ariaLabel"])
    }),
    cr = {
        mouseenter: e => e instanceof MouseEvent,
        mouseleave: e => e instanceof MouseEvent,
        focus: () => !0,
        blur: () => !0,
        close: () => !0
    },
    pr = (e, t) => {
        const n = L(!1),
            o = L();
        return {
            focusStartRef: o,
            trapped: n,
            onFocusAfterReleased: s => {
                var f;
                ((f = s.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"))
            },
            onFocusAfterTrapped: () => {
                t("focus")
            },
            onFocusInTrap: s => {
                e.visible && !n.value && (s.target && (o.value = s.target), n.value = !0)
            },
            onFocusoutPrevented: s => {
                e.trapping || (s.detail.focusReason === "pointer" && s.preventDefault(), n.value = !1)
            },
            onReleaseRequested: () => {
                n.value = !1, t("close")
            }
        }
    },
    fr = (e, t = []) => {
        const {
            placement: n,
            strategy: o,
            popperOptions: r
        } = e, a = {
            placement: n,
            strategy: o,
            ...r,
            modifiers: [...vr(e), ...t]
        };
        return gr(a, r == null ? void 0 : r.modifiers), a
    },
    dr = e => {
        if (Re) return kt(e)
    };

function vr(e) {
    const {
        offset: t,
        gpuAcceleration: n,
        fallbackPlacements: o
    } = e;
    return [{
        name: "offset",
        options: {
            offset: [0, t ?? 12]
        }
    }, {
        name: "preventOverflow",
        options: {
            padding: {
                top: 2,
                bottom: 2,
                left: 5,
                right: 5
            }
        }
    }, {
        name: "flip",
        options: {
            padding: 5,
            fallbackPlacements: o
        }
    }, {
        name: "computeStyles",
        options: {
            gpuAcceleration: n
        }
    }]
}

function gr(e, t) {
    t && (e.modifiers = [...e.modifiers, ...t ?? []])
}
const mr = (e, t, n = {}) => {
    const o = {
            name: "updateState",
            enabled: !0,
            phase: "write",
            fn: ({
                state: l
            }) => {
                const s = hr(l);
                Object.assign(i.value, s)
            },
            requires: ["computeStyles"]
        },
        r = A(() => {
            const {
                onFirstUpdate: l,
                placement: s,
                strategy: f,
                modifiers: v
            } = p(n);
            return {
                onFirstUpdate: l,
                placement: s || "bottom",
                strategy: f || "absolute",
                modifiers: [...v || [], o, {
                    name: "applyStyles",
                    enabled: !1
                }]
            }
        }),
        a = Tn(),
        i = L({
            styles: {
                popper: {
                    position: p(r).strategy,
                    left: "0",
                    top: "0"
                },
                arrow: {
                    position: "absolute"
                }
            },
            attributes: {}
        }),
        u = () => {
            a.value && (a.value.destroy(), a.value = void 0)
        };
    return N(r, l => {
        const s = p(a);
        s && s.setOptions(l)
    }, {
        deep: !0
    }), N([e, t], ([l, s]) => {
        u(), !(!l || !s) && (a.value = sr(l, s, p(r)))
    }), Be(() => {
        u()
    }), {
        state: A(() => {
            var l;
            return {
                ...((l = p(a)) == null ? void 0 : l.state) || {}
            }
        }),
        styles: A(() => p(i).styles),
        attributes: A(() => p(i).attributes),
        update: () => {
            var l;
            return (l = p(a)) == null ? void 0 : l.update()
        },
        forceUpdate: () => {
            var l;
            return (l = p(a)) == null ? void 0 : l.forceUpdate()
        },
        instanceRef: A(() => p(a))
    }
};

function hr(e) {
    const t = Object.keys(e.elements),
        n = wt(t.map(r => [r, e.styles[r] || {}])),
        o = wt(t.map(r => [r, e.attributes[r]]));
    return {
        styles: n,
        attributes: o
    }
}
const br = 0,
    yr = e => {
        const {
            popperInstanceRef: t,
            contentRef: n,
            triggerRef: o,
            role: r
        } = ue(Qe, void 0), a = L(), i = A(() => e.arrowOffset), u = A(() => ({
            name: "eventListeners",
            enabled: !!e.visible
        })), l = A(() => {
            var w;
            const T = p(a),
                c = (w = p(i)) != null ? w : br;
            return {
                name: "arrow",
                enabled: !Wn(T),
                options: {
                    element: T,
                    padding: c
                }
            }
        }), s = A(() => ({
            onFirstUpdate: () => {
                b()
            },
            ...fr(e, [p(l), p(u)])
        })), f = A(() => dr(e.referenceEl) || p(o)), {
            attributes: v,
            state: m,
            styles: g,
            update: b,
            forceUpdate: d,
            instanceRef: E
        } = mr(f, n, s);
        return N(E, w => t.value = w, {
            flush: "sync"
        }), Ke(() => {
            N(() => {
                var w;
                return (w = p(f)) == null ? void 0 : w.getBoundingClientRect()
            }, () => {
                b()
            })
        }), {
            attributes: v,
            arrowRef: a,
            contentRef: n,
            instanceRef: E,
            state: m,
            styles: g,
            role: r,
            forceUpdate: d,
            update: b
        }
    },
    wr = (e, {
        attributes: t,
        styles: n,
        role: o
    }) => {
        const {
            nextZIndex: r
        } = Cn(), a = be("popper"), i = A(() => p(t).popper), u = L(Ze(e.zIndex) ? e.zIndex : r()), l = A(() => [a.b(), a.is("pure", e.pure), a.is(e.effect), e.popperClass]), s = A(() => [{
            zIndex: p(u)
        }, p(n).popper, e.popperStyle || {}]), f = A(() => o.value === "dialog" ? "false" : void 0), v = A(() => p(n).arrow || {});
        return {
            ariaModal: f,
            arrowStyle: v,
            contentAttrs: i,
            contentClass: l,
            contentStyle: s,
            contentZIndex: u,
            updateZIndex: () => {
                u.value = Ze(e.zIndex) ? e.zIndex : r()
            }
        }
    },
    Or = $({
        name: "ElPopperContent"
    }),
    Er = $({
        ...Or,
        props: rn,
        emits: cr,
        setup(e, {
            expose: t,
            emit: n
        }) {
            const o = e,
                {
                    focusStartRef: r,
                    trapped: a,
                    onFocusAfterReleased: i,
                    onFocusAfterTrapped: u,
                    onFocusInTrap: l,
                    onFocusoutPrevented: s,
                    onReleaseRequested: f
                } = pr(o, n),
                {
                    attributes: v,
                    arrowRef: m,
                    contentRef: g,
                    styles: b,
                    instanceRef: d,
                    role: E,
                    update: w
                } = yr(o),
                {
                    ariaModal: T,
                    arrowStyle: c,
                    contentAttrs: h,
                    contentClass: C,
                    contentStyle: x,
                    updateZIndex: O
                } = wr(o, {
                    styles: b,
                    attributes: v,
                    role: E
                }),
                R = ue(Ot, void 0);
            Pe(Ht, {
                arrowStyle: c,
                arrowRef: m
            }), R && Pe(Ot, {
                ...R,
                addInputId: Je,
                removeInputId: Je
            });
            let P;
            const B = (I = !0) => {
                    w(), I && O()
                },
                M = () => {
                    B(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1)
                };
            return Ke(() => {
                N(() => o.triggerTargetEl, (I, F) => {
                    P == null || P(), P = void 0;
                    const D = p(I || g.value),
                        U = p(F || g.value);
                    Ce(D) && (P = N([E, () => o.ariaLabel, T, () => o.id], _ => {
                        ["role", "aria-label", "aria-modal", "id"].forEach((j, y) => {
                            jt(_[y]) ? D.removeAttribute(j) : D.setAttribute(j, _[y])
                        })
                    }, {
                        immediate: !0
                    })), U !== D && Ce(U) && ["role", "aria-label", "aria-modal", "id"].forEach(_ => {
                        U.removeAttribute(_)
                    })
                }, {
                    immediate: !0
                }), N(() => o.visible, M, {
                    immediate: !0
                })
            }), Be(() => {
                P == null || P(), P = void 0
            }), t({
                popperContentRef: g,
                popperInstanceRef: d,
                updatePopper: B,
                contentStyle: x
            }), (I, F) => (G(), He("div", Ye({
                ref_key: "contentRef",
                ref: g
            }, p(h), {
                style: p(x),
                class: p(C),
                tabindex: "-1",
                onMouseenter: D => I.$emit("mouseenter", D),
                onMouseleave: D => I.$emit("mouseleave", D)
            }), [Se(p(Rn), {
                trapped: p(a),
                "trap-on-focus-in": !0,
                "focus-trap-el": p(g),
                "focus-start-el": p(r),
                onFocusAfterTrapped: p(u),
                onFocusAfterReleased: p(i),
                onFocusin: p(l),
                onFocusoutPrevented: p(s),
                onReleaseRequested: p(f)
            }, {
                default: Q(() => [se(I.$slots, "default")]),
                _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])], 16, ["onMouseenter", "onMouseleave"]))
        }
    });
var Tr = le(Er, [
    ["__file", "content.vue"]
]);
const Cr = Lt(Gn),
    ut = Symbol("elTooltip"),
    an = te({
        ...qn,
        ...rn,
        appendTo: {
            type: $n.to.type
        },
        content: {
            type: String,
            default: ""
        },
        rawContent: Boolean,
        persistent: Boolean,
        visible: {
            type: S(Boolean),
            default: null
        },
        transition: String,
        teleported: {
            type: Boolean,
            default: !0
        },
        disabled: Boolean,
        ...Dt(["ariaLabel"])
    }),
    sn = te({
        ...qt,
        disabled: Boolean,
        trigger: {
            type: S([String, Array]),
            default: "hover"
        },
        triggerKeys: {
            type: S(Array),
            default: () => [Ge.enter, Ge.numpadEnter, Ge.space]
        }
    }),
    Rr = Nt({
        type: S(Boolean),
        default: null
    }),
    Ar = Nt({
        type: S(Function)
    }),
    xr = e => {
        const t = `update:${e}`,
            n = `onUpdate:${e}`,
            o = [t],
            r = {
                [e]: Rr,
                [n]: Ar
            };
        return {
            useModelToggle: ({
                indicator: i,
                toggleReason: u,
                shouldHideWhenRouteChanges: l,
                shouldProceed: s,
                onShow: f,
                onHide: v
            }) => {
                const m = An(),
                    {
                        emit: g
                    } = m,
                    b = m.props,
                    d = A(() => Le(b[n])),
                    E = A(() => b[e] === null),
                    w = O => {
                        i.value !== !0 && (i.value = !0, u && (u.value = O), Le(f) && f(O))
                    },
                    T = O => {
                        i.value !== !1 && (i.value = !1, u && (u.value = O), Le(v) && v(O))
                    },
                    c = O => {
                        if (b.disabled === !0 || Le(s) && !s()) return;
                        const R = d.value && Re;
                        R && g(t, !0), (E.value || !R) && w(O)
                    },
                    h = O => {
                        if (b.disabled === !0 || !Re) return;
                        const R = d.value && Re;
                        R && g(t, !1), (E.value || !R) && T(O)
                    },
                    C = O => {
                        $t(O) && (b.disabled && O ? d.value && g(t, !1) : i.value !== O && (O ? w() : T()))
                    },
                    x = () => {
                        i.value ? h() : c()
                    };
                return N(() => b[e], C), l && m.appContext.config.globalProperties.$route !== void 0 && N(() => ({
                    ...m.proxy.$route
                }), () => {
                    l.value && i.value && h()
                }), Ke(() => {
                    C(b[e])
                }), {
                    hide: h,
                    show: c,
                    toggle: x,
                    hasUpdateHandler: d
                }
            },
            useModelToggleProps: r,
            useModelToggleEmits: o
        }
    },
    {
        useModelToggleProps: Pr,
        useModelToggleEmits: Sr,
        useModelToggle: Mr
    } = xr("visible"),
    Ir = te({
        ...Wt,
        ...Pr,
        ...an,
        ...sn,
        ...on,
        showArrow: {
            type: Boolean,
            default: !0
        }
    }),
    Br = [...Sr, "before-show", "before-hide", "show", "hide", "open", "close"],
    _r = (e, t) => xn(e) ? e.includes(t) : e === t,
    pe = (e, t, n) => o => {
        _r(p(e), t) && n(o)
    },
    Y = (e, t, {
        checkForDefaultPrevented: n = !0
    } = {}) => r => {
        const a = e == null ? void 0 : e(r);
        if (n === !1 || !a) return t == null ? void 0 : t(r)
    },
    Vr = e => t => t.pointerType === "mouse" ? e(t) : void 0,
    Fr = $({
        name: "ElTooltipTrigger"
    }),
    kr = $({
        ...Fr,
        props: sn,
        setup(e, {
            expose: t
        }) {
            const n = e,
                o = be("tooltip"),
                {
                    controlled: r,
                    id: a,
                    open: i,
                    onOpen: u,
                    onClose: l,
                    onToggle: s
                } = ue(ut, void 0),
                f = L(null),
                v = () => {
                    if (p(r) || n.disabled) return !0
                },
                m = Te(n, "trigger"),
                g = Y(v, pe(m, "hover", u)),
                b = Y(v, pe(m, "hover", l)),
                d = Y(v, pe(m, "click", h => {
                    h.button === 0 && s(h)
                })),
                E = Y(v, pe(m, "focus", u)),
                w = Y(v, pe(m, "focus", l)),
                T = Y(v, pe(m, "contextmenu", h => {
                    h.preventDefault(), s(h)
                })),
                c = Y(v, h => {
                    const {
                        code: C
                    } = h;
                    n.triggerKeys.includes(C) && (h.preventDefault(), s(h))
                });
            return t({
                triggerRef: f
            }), (h, C) => (G(), fe(p(ro), {
                id: p(a),
                "virtual-ref": h.virtualRef,
                open: p(i),
                "virtual-triggering": h.virtualTriggering,
                class: _t(p(o).e("trigger")),
                onBlur: p(w),
                onClick: p(d),
                onContextmenu: p(T),
                onFocus: p(E),
                onMouseenter: p(g),
                onMouseleave: p(b),
                onKeydown: p(c)
            }, {
                default: Q(() => [se(h.$slots, "default")]),
                _: 3
            }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]))
        }
    });
var jr = le(kr, [
    ["__file", "trigger.vue"]
]);
const ln = () => {
        const e = Sn(),
            t = Mn(),
            n = A(() => `${e.value}-popper-container-${t.prefix}`),
            o = A(() => `#${n.value}`);
        return {
            id: n,
            selector: o
        }
    },
    Dr = e => {
        const t = document.createElement("div");
        return t.id = e, document.body.appendChild(t), t
    },
    Lr = () => {
        const {
            id: e,
            selector: t
        } = ln();
        return Pn(() => {
            Re && (document.body.querySelector(t.value) || Dr(e.value))
        }), {
            id: e,
            selector: t
        }
    },
    Nr = $({
        name: "ElTooltipContent",
        inheritAttrs: !1
    }),
    $r = $({
        ...Nr,
        props: an,
        setup(e, {
            expose: t
        }) {
            const n = e,
                {
                    selector: o
                } = ln(),
                r = be("tooltip"),
                a = L(),
                i = In(() => {
                    var y;
                    return (y = a.value) == null ? void 0 : y.popperContentRef
                });
            let u;
            const {
                controlled: l,
                id: s,
                open: f,
                trigger: v,
                onClose: m,
                onOpen: g,
                onShow: b,
                onHide: d,
                onBeforeShow: E,
                onBeforeHide: w
            } = ue(ut, void 0), T = A(() => n.transition || `${r.namespace.value}-fade-in-linear`), c = A(() => n.persistent);
            Be(() => {
                u == null || u()
            });
            const h = A(() => p(c) ? !0 : p(f)),
                C = A(() => n.disabled ? !1 : p(f)),
                x = A(() => n.appendTo || o.value),
                O = A(() => {
                    var y;
                    return (y = n.style) != null ? y : {}
                }),
                R = L(!0),
                P = () => {
                    d(), j() && Fn(document.body), R.value = !0
                },
                B = () => {
                    if (p(l)) return !0
                },
                M = Y(B, () => {
                    n.enterable && p(v) === "hover" && g()
                }),
                I = Y(B, () => {
                    p(v) === "hover" && m()
                }),
                F = () => {
                    var y, k;
                    (k = (y = a.value) == null ? void 0 : y.updatePopper) == null || k.call(y), E == null || E()
                },
                D = () => {
                    w == null || w()
                },
                U = () => {
                    b()
                },
                _ = () => {
                    n.virtualTriggering || m()
                },
                j = y => {
                    var k;
                    const oe = (k = a.value) == null ? void 0 : k.popperContentRef,
                        ye = (y == null ? void 0 : y.relatedTarget) || document.activeElement;
                    return oe == null ? void 0 : oe.contains(ye)
                };
            return N(() => p(f), y => {
                y ? (R.value = !1, u = kn(i, () => {
                    if (p(l)) return;
                    p(v) !== "hover" && m()
                })) : u == null || u()
            }, {
                flush: "post"
            }), N(() => n.content, () => {
                var y, k;
                (k = (y = a.value) == null ? void 0 : y.updatePopper) == null || k.call(y)
            }), t({
                contentRef: a,
                isFocusInsideContent: j
            }), (y, k) => (G(), fe(p(Hn), {
                disabled: !y.teleported,
                to: p(x)
            }, {
                default: Q(() => [Se(Bn, {
                    name: p(T),
                    onAfterLeave: P,
                    onBeforeEnter: F,
                    onAfterEnter: U,
                    onBeforeLeave: D
                }, {
                    default: Q(() => [p(h) ? Ft((G(), fe(p(Tr), Ye({
                        key: 0,
                        id: p(s),
                        ref_key: "contentRef",
                        ref: a
                    }, y.$attrs, {
                        "aria-label": y.ariaLabel,
                        "aria-hidden": R.value,
                        "boundaries-padding": y.boundariesPadding,
                        "fallback-placements": y.fallbackPlacements,
                        "gpu-acceleration": y.gpuAcceleration,
                        offset: y.offset,
                        placement: y.placement,
                        "popper-options": y.popperOptions,
                        "arrow-offset": y.arrowOffset,
                        strategy: y.strategy,
                        effect: y.effect,
                        enterable: y.enterable,
                        pure: y.pure,
                        "popper-class": y.popperClass,
                        "popper-style": [y.popperStyle, p(O)],
                        "reference-el": y.referenceEl,
                        "trigger-target-el": y.triggerTargetEl,
                        visible: p(C),
                        "z-index": y.zIndex,
                        onMouseenter: p(M),
                        onMouseleave: p(I),
                        onBlur: _,
                        onClose: p(m)
                    }), {
                        default: Q(() => [se(y.$slots, "default")]),
                        _: 3
                    }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "arrow-offset", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                        [_n, p(C)]
                    ]) : We("v-if", !0)]),
                    _: 3
                }, 8, ["name"])]),
                _: 3
            }, 8, ["disabled", "to"]))
        }
    });
var Hr = le($r, [
    ["__file", "content.vue"]
]);
const Wr = $({
        name: "ElTooltip"
    }),
    qr = $({
        ...Wr,
        props: Ir,
        emits: Br,
        setup(e, {
            expose: t,
            emit: n
        }) {
            const o = e;
            Lr();
            const r = be("tooltip"),
                a = jn(),
                i = L(),
                u = L(),
                l = () => {
                    var c;
                    const h = p(i);
                    h && ((c = h.popperInstanceRef) == null || c.update())
                },
                s = L(!1),
                f = L(),
                {
                    show: v,
                    hide: m,
                    hasUpdateHandler: g
                } = Mr({
                    indicator: s,
                    toggleReason: f
                }),
                {
                    onOpen: b,
                    onClose: d
                } = Kn({
                    showAfter: Te(o, "showAfter"),
                    hideAfter: Te(o, "hideAfter"),
                    autoClose: Te(o, "autoClose"),
                    open: v,
                    close: m
                }),
                E = A(() => $t(o.visible) && !g.value),
                w = A(() => [r.b(), o.popperClass]);
            Pe(ut, {
                controlled: E,
                id: a,
                open: Dn(s),
                trigger: Te(o, "trigger"),
                onOpen: c => {
                    b(c)
                },
                onClose: c => {
                    d(c)
                },
                onToggle: c => {
                    p(s) ? d(c) : b(c)
                },
                onShow: () => {
                    n("show", f.value)
                },
                onHide: () => {
                    n("hide", f.value)
                },
                onBeforeShow: () => {
                    n("before-show", f.value)
                },
                onBeforeHide: () => {
                    n("before-hide", f.value)
                },
                updatePopper: l
            }), N(() => o.disabled, c => {
                c && s.value && (s.value = !1)
            });
            const T = c => {
                var h;
                return (h = u.value) == null ? void 0 : h.isFocusInsideContent(c)
            };
            return Ln(() => s.value && m()), t({
                popperRef: i,
                contentRef: u,
                isFocusInsideContent: T,
                updatePopper: l,
                onOpen: b,
                onClose: d,
                hide: m
            }), (c, h) => (G(), fe(p(Cr), {
                ref_key: "popperRef",
                ref: i,
                role: c.role
            }, {
                default: Q(() => [Se(jr, {
                    disabled: c.disabled,
                    trigger: c.trigger,
                    "trigger-keys": c.triggerKeys,
                    "virtual-ref": c.virtualRef,
                    "virtual-triggering": c.virtualTriggering
                }, {
                    default: Q(() => [c.$slots.default ? se(c.$slots, "default", {
                        key: 0
                    }) : We("v-if", !0)]),
                    _: 3
                }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]), Se(Hr, {
                    ref_key: "contentRef",
                    ref: u,
                    "aria-label": c.ariaLabel,
                    "boundaries-padding": c.boundariesPadding,
                    content: c.content,
                    disabled: c.disabled,
                    effect: c.effect,
                    enterable: c.enterable,
                    "fallback-placements": c.fallbackPlacements,
                    "hide-after": c.hideAfter,
                    "gpu-acceleration": c.gpuAcceleration,
                    offset: c.offset,
                    persistent: c.persistent,
                    "popper-class": p(w),
                    "popper-style": c.popperStyle,
                    placement: c.placement,
                    "popper-options": c.popperOptions,
                    "arrow-offset": c.arrowOffset,
                    pure: c.pure,
                    "raw-content": c.rawContent,
                    "reference-el": c.referenceEl,
                    "trigger-target-el": c.triggerTargetEl,
                    "show-after": c.showAfter,
                    strategy: c.strategy,
                    teleported: c.teleported,
                    transition: c.transition,
                    "virtual-triggering": c.virtualTriggering,
                    "z-index": c.zIndex,
                    "append-to": c.appendTo
                }, {
                    default: Q(() => [se(c.$slots, "content", {}, () => [c.rawContent ? (G(), He("span", {
                        key: 0,
                        innerHTML: c.content
                    }, null, 8, ["innerHTML"])) : (G(), He("span", {
                        key: 1
                    }, Nn(c.content), 1))]), c.showArrow ? (G(), fe(p(Xn), {
                        key: 0
                    })) : We("v-if", !0)]),
                    _: 3
                }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "arrow-offset", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])]),
                _: 3
            }, 8, ["role"]))
        }
    });
var Kr = le(qr, [
    ["__file", "tooltip.vue"]
]);
const Gr = Lt(Kr);
export {
    Gr as E, to as O, tt as a, sn as b, Y as c, zn as r, an as u, Vr as w
};
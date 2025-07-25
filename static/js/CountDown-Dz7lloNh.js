import {
    aZ as Ae,
    bn as X,
    U as pe,
    X as Ce,
    $ as U,
    a0 as Le,
    _ as ze,
    d as J,
    bx as ye,
    by as Pe,
    bz as Be,
    au as Ee,
    a as Te,
    bA as Me,
    h as k,
    bB as Ve,
    aS as De,
    c as d,
    O as oe,
    aB as Ne,
    i as we,
    aq as Y,
    v as ge,
    o as w,
    m as h,
    l as m,
    a7 as Fe,
    k as y,
    f as ke,
    n as g,
    e,
    bC as Xe,
    x as C,
    b as L,
    r as A,
    ad as Ye,
    E as x,
    bb as He,
    F as Z,
    bD as je,
    a8 as qe,
    p as Ke,
    t as G,
    bE as We,
    aU as Ue,
    S as Ze,
    bF as Ge,
    am as Je,
    s as Qe,
    bG as et,
    aA as F,
    w as Oe,
    bH as tt,
    bI as at,
    bJ as nt,
    W as st,
    a5 as _e,
    at as ot,
    ar as Ie,
    as as Se,
    bv as rt,
    V as lt,
    bK as it,
    bL as ct,
    j as ut,
    B as dt
} from "./index-DejQ-iz-.js";
import {
    q as ft
} from "./index-Brp1LNR4.js";
import {
    d as vt
} from "./debounce-B0TYyvOo.js";
var mt = "Expected a function";

function me(l, _, r) {
    var s = !0,
        n = !0;
    if (typeof l != "function") throw new TypeError(mt);
    return Ae(r) && (s = "leading" in r ? !!r.leading : s, n = "trailing" in r ? !!r.trailing : n), vt(l, _, {
        leading: s,
        maxWait: _,
        trailing: n
    })
}
const pt = (l, _) => {
        if (!X || !l || !_) return !1;
        const r = l.getBoundingClientRect();
        let s;
        return _ instanceof Element ? s = _.getBoundingClientRect() : s = {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0
        }, r.top < s.bottom && r.bottom > s.top && r.right > s.left && r.left < s.right
    },
    gt = Ce({
        urlList: {
            type: U(Array),
            default: () => Le([])
        },
        zIndex: {
            type: Number
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        infinite: {
            type: Boolean,
            default: !0
        },
        hideOnClickModal: Boolean,
        teleported: Boolean,
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        zoomRate: {
            type: Number,
            default: 1.2
        },
        minScale: {
            type: Number,
            default: .2
        },
        maxScale: {
            type: Number,
            default: 7
        },
        showProgress: Boolean,
        crossorigin: {
            type: U(String)
        }
    }),
    wt = {
        close: () => !0,
        switch: l => pe(l),
        rotate: l => pe(l)
    },
    ht = J({
        name: "ElImageViewer"
    }),
    bt = J({
        ...ht,
        props: gt,
        emits: wt,
        setup(l, {
            expose: _,
            emit: r
        }) {
            var s;
            const n = l,
                u = {
                    CONTAIN: {
                        name: "contain",
                        icon: ye(Be)
                    },
                    ORIGINAL: {
                        name: "original",
                        icon: ye(Pe)
                    }
                };
            let P, B = "";
            const {
                t: H
            } = Ee(), o = Te("image-viewer"), {
                nextZIndex: f
            } = Me(), z = k(), D = k([]), M = Ve(), p = k(!0), b = k(n.initialIndex), O = De(u.CONTAIN), c = k({
                scale: 1,
                deg: 0,
                offsetX: 0,
                offsetY: 0,
                enableTransition: !1
            }), re = k((s = n.zIndex) != null ? s : f()), j = d(() => {
                const {
                    urlList: t
                } = n;
                return t.length <= 1
            }), Q = d(() => b.value === 0), q = d(() => b.value === n.urlList.length - 1), K = d(() => n.urlList[b.value]), le = d(() => [o.e("btn"), o.e("prev"), o.is("disabled", !n.infinite && Q.value)]), ie = d(() => [o.e("btn"), o.e("next"), o.is("disabled", !n.infinite && q.value)]), ee = d(() => {
                const {
                    scale: t,
                    deg: v,
                    offsetX: i,
                    offsetY: S,
                    enableTransition: T
                } = c.value;
                let N = i / t,
                    R = S / t;
                const W = v * Math.PI / 180,
                    he = Math.cos(W),
                    be = Math.sin(W);
                N = N * he + R * be, R = R * he - i / t * be;
                const ve = {
                    transform: `scale(${t}) rotate(${v}deg) translate(${N}px, ${R}px)`,
                    transition: T ? "transform .3s" : ""
                };
                return O.value.name === u.CONTAIN.name && (ve.maxWidth = ve.maxHeight = "100%"), ve
            }), te = d(() => `${b.value+1} / ${n.urlList.length}`);

            function V() {
                ne(), P == null || P(), document.body.style.overflow = B, r("close")
            }

            function ae() {
                const t = me(i => {
                        switch (i.code) {
                            case F.esc:
                                n.closeOnPressEscape && V();
                                break;
                            case F.space:
                                E();
                                break;
                            case F.left:
                                de();
                                break;
                            case F.up:
                                $("zoomIn");
                                break;
                            case F.right:
                                fe();
                                break;
                            case F.down:
                                $("zoomOut");
                                break
                        }
                    }),
                    v = me(i => {
                        const S = i.deltaY || i.deltaX;
                        $(S < 0 ? "zoomIn" : "zoomOut", {
                            zoomRate: n.zoomRate,
                            enableTransition: !1
                        })
                    });
                M.run(() => {
                    Y(document, "keydown", t), Y(document, "wheel", v)
                })
            }

            function ne() {
                M.stop()
            }

            function ce() {
                p.value = !1
            }

            function ue(t) {
                p.value = !1, t.target.alt = H("el.image.error")
            }

            function a(t) {
                if (p.value || t.button !== 0 || !z.value) return;
                c.value.enableTransition = !1;
                const {
                    offsetX: v,
                    offsetY: i
                } = c.value, S = t.pageX, T = t.pageY, N = me(W => {
                    c.value = {
                        ...c.value,
                        offsetX: v + W.pageX - S,
                        offsetY: i + W.pageY - T
                    }
                }), R = Y(document, "mousemove", N);
                Y(document, "mouseup", () => {
                    R()
                }), t.preventDefault()
            }

            function I() {
                c.value = {
                    scale: 1,
                    deg: 0,
                    offsetX: 0,
                    offsetY: 0,
                    enableTransition: !1
                }
            }

            function E() {
                if (p.value) return;
                const t = et(u),
                    v = Object.values(u),
                    i = O.value.name,
                    T = (v.findIndex(N => N.name === i) + 1) % t.length;
                O.value = u[t[T]], I()
            }

            function se(t) {
                const v = n.urlList.length;
                b.value = (t + v) % v
            }

            function de() {
                Q.value && !n.infinite || se(b.value - 1)
            }

            function fe() {
                q.value && !n.infinite || se(b.value + 1)
            }

            function $(t, v = {}) {
                if (p.value) return;
                const {
                    minScale: i,
                    maxScale: S
                } = n, {
                    zoomRate: T,
                    rotateDeg: N,
                    enableTransition: R
                } = {
                    zoomRate: n.zoomRate,
                    rotateDeg: 90,
                    enableTransition: !0,
                    ...v
                };
                switch (t) {
                    case "zoomOut":
                        c.value.scale > i && (c.value.scale = Number.parseFloat((c.value.scale / T).toFixed(3)));
                        break;
                    case "zoomIn":
                        c.value.scale < S && (c.value.scale = Number.parseFloat((c.value.scale * T).toFixed(3)));
                        break;
                    case "clockwise":
                        c.value.deg += N, r("rotate", c.value.deg);
                        break;
                    case "anticlockwise":
                        c.value.deg -= N, r("rotate", c.value.deg);
                        break
                }
                c.value.enableTransition = R
            }

            function $e(t) {
                var v;
                ((v = t.detail) == null ? void 0 : v.focusReason) === "pointer" && t.preventDefault()
            }

            function Re() {
                n.closeOnPressEscape && V()
            }

            function xe(t) {
                if (t.ctrlKey) {
                    if (t.deltaY < 0) return t.preventDefault(), !1;
                    if (t.deltaY > 0) return t.preventDefault(), !1
                }
            }
            return oe(K, () => {
                Ne(() => {
                    const t = D.value[0];
                    t != null && t.complete || (p.value = !0)
                })
            }), oe(b, t => {
                I(), r("switch", t)
            }), we(() => {
                ae(), P = Y("wheel", xe, {
                    passive: !1
                }), B = document.body.style.overflow, document.body.style.overflow = "hidden"
            }), _({
                setActiveItem: se
            }), (t, v) => (w(), ge(e(ft), {
                to: "body",
                disabled: !t.teleported
            }, {
                default: h(() => [m(Fe, {
                    name: "viewer-fade",
                    appear: ""
                }, {
                    default: h(() => [y("div", {
                        ref_key: "wrapper",
                        ref: z,
                        tabindex: -1,
                        class: g(e(o).e("wrapper")),
                        style: ke({
                            zIndex: re.value
                        })
                    }, [m(e(Xe), {
                        loop: "",
                        trapped: "",
                        "focus-trap-el": z.value,
                        "focus-start-el": "container",
                        onFocusoutPrevented: $e,
                        onReleaseRequested: Re
                    }, {
                        default: h(() => [y("div", {
                            class: g(e(o).e("mask")),
                            onClick: Ye(i => t.hideOnClickModal && V(), ["self"])
                        }, null, 10, ["onClick"]), C(" CLOSE "), y("span", {
                            class: g([e(o).e("btn"), e(o).e("close")]),
                            onClick: V
                        }, [m(e(x), null, {
                            default: h(() => [m(e(He))]),
                            _: 1
                        })], 2), C(" ARROW "), e(j) ? C("v-if", !0) : (w(), L(Z, {
                            key: 0
                        }, [y("span", {
                            class: g(e(le)),
                            onClick: de
                        }, [m(e(x), null, {
                            default: h(() => [m(e(je))]),
                            _: 1
                        })], 2), y("span", {
                            class: g(e(ie)),
                            onClick: fe
                        }, [m(e(x), null, {
                            default: h(() => [m(e(qe))]),
                            _: 1
                        })], 2)], 64)), t.$slots.progress || t.showProgress ? (w(), L("div", {
                            key: 1,
                            class: g([e(o).e("btn"), e(o).e("progress")])
                        }, [A(t.$slots, "progress", {
                            activeIndex: b.value,
                            total: t.urlList.length
                        }, () => [Ke(G(e(te)), 1)])], 2)) : C("v-if", !0), C(" ACTIONS "), y("div", {
                            class: g([e(o).e("btn"), e(o).e("actions")])
                        }, [y("div", {
                            class: g(e(o).e("actions__inner"))
                        }, [A(t.$slots, "toolbar", {
                            actions: $,
                            prev: de,
                            next: fe,
                            reset: E,
                            activeIndex: b.value,
                            setActiveItem: se
                        }, () => [m(e(x), {
                            onClick: i => $("zoomOut")
                        }, {
                            default: h(() => [m(e(We))]),
                            _: 1
                        }, 8, ["onClick"]), m(e(x), {
                            onClick: i => $("zoomIn")
                        }, {
                            default: h(() => [m(e(Ue))]),
                            _: 1
                        }, 8, ["onClick"]), y("i", {
                            class: g(e(o).e("actions__divider"))
                        }, null, 2), m(e(x), {
                            onClick: E
                        }, {
                            default: h(() => [(w(), ge(Ze(e(O).icon)))]),
                            _: 1
                        }), y("i", {
                            class: g(e(o).e("actions__divider"))
                        }, null, 2), m(e(x), {
                            onClick: i => $("anticlockwise")
                        }, {
                            default: h(() => [m(e(Ge))]),
                            _: 1
                        }, 8, ["onClick"]), m(e(x), {
                            onClick: i => $("clockwise")
                        }, {
                            default: h(() => [m(e(Je))]),
                            _: 1
                        }, 8, ["onClick"])])], 2)], 2), C(" CANVAS "), y("div", {
                            class: g(e(o).e("canvas"))
                        }, [(w(!0), L(Z, null, Qe(t.urlList, (i, S) => (w(), L(Z, {
                            key: S
                        }, [S === b.value ? (w(), L("img", {
                            key: 0,
                            ref_for: !0,
                            ref: T => D.value[S] = T,
                            src: i,
                            style: ke(e(ee)),
                            class: g(e(o).e("img")),
                            crossorigin: t.crossorigin,
                            onLoad: ce,
                            onError: ue,
                            onMousedown: a
                        }, null, 46, ["src", "crossorigin"])) : C("v-if", !0)], 64))), 128))], 2), A(t.$slots, "default")]),
                        _: 3
                    }, 8, ["focus-trap-el"])], 6)]),
                    _: 3
                })]),
                _: 3
            }, 8, ["disabled"]))
        }
    });
var yt = ze(bt, [
    ["__file", "image-viewer.vue"]
]);
const kt = Oe(yt),
    _t = Ce({
        hideOnClickModal: Boolean,
        src: {
            type: String,
            default: ""
        },
        fit: {
            type: String,
            values: ["", "contain", "cover", "fill", "none", "scale-down"],
            default: ""
        },
        loading: {
            type: String,
            values: ["eager", "lazy"]
        },
        lazy: Boolean,
        scrollContainer: {
            type: U([String, Object])
        },
        previewSrcList: {
            type: U(Array),
            default: () => Le([])
        },
        previewTeleported: Boolean,
        zIndex: {
            type: Number
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        infinite: {
            type: Boolean,
            default: !0
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        zoomRate: {
            type: Number,
            default: 1.2
        },
        minScale: {
            type: Number,
            default: .2
        },
        maxScale: {
            type: Number,
            default: 7
        },
        showProgress: Boolean,
        crossorigin: {
            type: U(String)
        }
    }),
    It = {
        load: l => l instanceof Event,
        error: l => l instanceof Event,
        switch: l => pe(l),
        close: () => !0,
        show: () => !0
    },
    St = J({
        name: "ElImage",
        inheritAttrs: !1
    }),
    Ct = J({
        ...St,
        props: _t,
        emits: It,
        setup(l, {
            expose: _,
            emit: r
        }) {
            const s = l,
                {
                    t: n
                } = Ee(),
                u = Te("image"),
                P = tt(),
                B = d(() => at(Object.entries(P).filter(([a]) => /^(data-|on[A-Z])/i.test(a) || ["id", "style"].includes(a)))),
                H = nt({
                    excludeListeners: !0,
                    excludeKeys: d(() => Object.keys(B.value))
                }),
                o = k(),
                f = k(!1),
                z = k(!0),
                D = k(!1),
                M = k(),
                p = k(),
                b = X && "loading" in HTMLImageElement.prototype;
            let O;
            const c = d(() => [u.e("inner"), j.value && u.e("preview"), z.value && u.is("loading")]),
                re = d(() => {
                    const {
                        fit: a
                    } = s;
                    return X && a ? {
                        objectFit: a
                    } : {}
                }),
                j = d(() => {
                    const {
                        previewSrcList: a
                    } = s;
                    return st(a) && a.length > 0
                }),
                Q = d(() => {
                    const {
                        previewSrcList: a,
                        initialIndex: I
                    } = s;
                    let E = I;
                    return I > a.length - 1 && (E = 0), E
                }),
                q = d(() => s.loading === "eager" ? !1 : !b && s.loading === "lazy" || s.lazy),
                K = () => {
                    X && (z.value = !0, f.value = !1, o.value = s.src)
                };

            function le(a) {
                z.value = !1, f.value = !1, r("load", a)
            }

            function ie(a) {
                z.value = !1, f.value = !0, r("error", a)
            }

            function ee() {
                pt(M.value, p.value) && (K(), ae())
            }
            const te = ct(ee, 200, !0);
            async function V() {
                var a;
                if (!X) return;
                await Ne();
                const {
                    scrollContainer: I
                } = s;
                rt(I) ? p.value = I : lt(I) && I !== "" ? p.value = (a = document.querySelector(I)) != null ? a : void 0 : M.value && (p.value = it(M.value)), p.value && (O = Y(p, "scroll", te), setTimeout(() => ee(), 100))
            }

            function ae() {
                !X || !p.value || !te || (O == null || O(), p.value = void 0)
            }

            function ne() {
                j.value && (D.value = !0, r("show"))
            }

            function ce() {
                D.value = !1, r("close")
            }

            function ue(a) {
                r("switch", a)
            }
            return oe(() => s.src, () => {
                q.value ? (z.value = !0, f.value = !1, ae(), V()) : K()
            }), we(() => {
                q.value ? V() : K()
            }), _({
                showPreview: ne
            }), (a, I) => (w(), L("div", _e({
                ref_key: "container",
                ref: M
            }, e(B), {
                class: [e(u).b(), a.$attrs.class]
            }), [f.value ? A(a.$slots, "error", {
                key: 0
            }, () => [y("div", {
                class: g(e(u).e("error"))
            }, G(e(n)("el.image.error")), 3)]) : (w(), L(Z, {
                key: 1
            }, [o.value !== void 0 ? (w(), L("img", _e({
                key: 0
            }, e(H), {
                src: o.value,
                loading: a.loading,
                style: e(re),
                class: e(c),
                crossorigin: a.crossorigin,
                onClick: ne,
                onLoad: le,
                onError: ie
            }), null, 16, ["src", "loading", "crossorigin"])) : C("v-if", !0), z.value ? (w(), L("div", {
                key: 1,
                class: g(e(u).e("wrapper"))
            }, [A(a.$slots, "placeholder", {}, () => [y("div", {
                class: g(e(u).e("placeholder"))
            }, null, 2)])], 2)) : C("v-if", !0)], 64)), e(j) ? (w(), L(Z, {
                key: 2
            }, [D.value ? (w(), ge(e(kt), {
                key: 0,
                "z-index": a.zIndex,
                "initial-index": e(Q),
                infinite: a.infinite,
                "zoom-rate": a.zoomRate,
                "min-scale": a.minScale,
                "max-scale": a.maxScale,
                "show-progress": a.showProgress,
                "url-list": a.previewSrcList,
                crossorigin: a.crossorigin,
                "hide-on-click-modal": a.hideOnClickModal,
                teleported: a.previewTeleported,
                "close-on-press-escape": a.closeOnPressEscape,
                onClose: ce,
                onSwitch: ue
            }, ot({
                toolbar: h(E => [A(a.$slots, "toolbar", Ie(Se(E)))]),
                default: h(() => [a.$slots.viewer ? (w(), L("div", {
                    key: 0
                }, [A(a.$slots, "viewer")])) : C("v-if", !0)]),
                _: 2
            }, [a.$slots.progress ? {
                name: "progress",
                fn: h(E => [A(a.$slots, "progress", Ie(Se(E)))])
            } : void 0]), 1032, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "show-progress", "url-list", "crossorigin", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : C("v-if", !0)], 64)) : C("v-if", !0)], 16))
        }
    });
var Lt = ze(Ct, [
    ["__file", "image.vue"]
]);
const $t = Oe(Lt),
    zt = {
        class: "countdown"
    },
    Et = J({
        __name: "CountDown",
        props: {
            endTime: {
                type: Number,
                required: !0
            }
        },
        emits: ["changeTime", "endTime"],
        setup(l, {
            emit: _
        }) {
            const r = _,
                s = l;
            oe(() => s.endTime, () => {
                clearInterval(u), o(), setInterval(o, 1e3)
            });
            const n = k(s.endTime - Date.now());
            let u;
            const P = d(() => {
                    const f = Math.floor(n.value / 36e5);
                    return f > 0 ? String(f).padStart(2, "0") : String(0).padStart(2, "0")
                }),
                B = d(() => {
                    const f = Math.floor(n.value % 36e5 / 6e4);
                    return f > 0 ? String(f).padStart(2, "0") : String(0).padStart(2, "0")
                }),
                H = d(() => {
                    const f = Math.floor(n.value % 6e4 / 1e3);
                    return f > 0 ? String(f).padStart(2, "0") : String(0).padStart(2, "0")
                }),
                o = () => {
                    n.value = s.endTime - Date.now(), r("changeTime", n.value), n.value <= 0 && (r("endTime"), clearInterval(u))
                };
            return we(() => {
                u = setInterval(o, 1e3)
            }), ut(() => {
                clearInterval(u)
            }), (f, z) => (w(), L("div", zt, [y("p", null, G(e(P)) + " : " + G(e(B)) + " : " + G(e(H)), 1)]))
        }
    }),
    Rt = dt(Et, [
        ["__scopeId", "data-v-99a44fb5"]
    ]);
export {
    $t as E, Rt as _
};
import {
    X as J,
    a9 as le,
    aD as ae,
    _ as X,
    d as N,
    au as se,
    aa as j,
    aC as te,
    c as S,
    bZ as ne,
    b as q,
    o as D,
    k as z,
    x as U,
    r as E,
    n as g,
    e,
    t as re,
    l as M,
    m,
    v as Z,
    S as ie,
    b_ as de,
    E as ue,
    f as Y,
    a3 as ce,
    Z as Q,
    $ as fe,
    az as ve,
    bA as ye,
    ax as G,
    h as k,
    b$ as pe,
    c0 as ge,
    av as me,
    c1 as Ce,
    O as K,
    aB as be,
    i as he,
    bs as H,
    bn as Ee,
    u as ke,
    c2 as Se,
    a as we,
    a7 as De,
    H as Ie,
    c3 as Be,
    c4 as Te,
    bC as Ae,
    a5 as Fe,
    at as Pe,
    ae as $e,
    a1 as Le,
    w as Oe
} from "./index-DejQ-iz-.js";
import {
    r as Re,
    q as ze
} from "./index-Brp1LNR4.js";
const W = Symbol("dialogInjectionKey"),
    x = J({
        center: Boolean,
        alignCenter: Boolean,
        closeIcon: {
            type: le
        },
        draggable: Boolean,
        overflow: Boolean,
        fullscreen: Boolean,
        headerClass: String,
        bodyClass: String,
        footerClass: String,
        showClose: {
            type: Boolean,
            default: !0
        },
        title: {
            type: String,
            default: ""
        },
        ariaLevel: {
            type: String,
            default: "2"
        }
    }),
    Me = {
        close: () => !0
    },
    Ne = (...o) => n => {
        o.forEach(a => {
            ae(a) ? a(n) : a.value = n
        })
    },
    Ve = N({
        name: "ElDialogContent"
    }),
    qe = N({
        ...Ve,
        props: x,
        emits: Me,
        setup(o, {
            expose: n
        }) {
            const a = o,
                {
                    t: P
                } = se(),
                {
                    Close: i
                } = de,
                {
                    dialogRef: f,
                    headerRef: C,
                    bodyId: b,
                    ns: s,
                    style: d
                } = j(W),
                {
                    focusTrapRef: y
                } = j(te),
                p = S(() => [s.b(), s.is("fullscreen", a.fullscreen), s.is("draggable", a.draggable), s.is("align-center", a.alignCenter), {
                    [s.m("center")]: a.center
                }]),
                h = Ne(y, f),
                u = S(() => a.draggable),
                v = S(() => a.overflow),
                {
                    resetPosition: I,
                    updatePosition: B
                } = ne(f, C, u, v);
            return n({
                resetPosition: I,
                updatePosition: B
            }), (t, w) => (D(), q("div", {
                ref: e(h),
                class: g(e(p)),
                style: Y(e(d)),
                tabindex: "-1"
            }, [z("header", {
                ref_key: "headerRef",
                ref: C,
                class: g([e(s).e("header"), t.headerClass, {
                    "show-close": t.showClose
                }])
            }, [E(t.$slots, "header", {}, () => [z("span", {
                role: "heading",
                "aria-level": t.ariaLevel,
                class: g(e(s).e("title"))
            }, re(t.title), 11, ["aria-level"])]), t.showClose ? (D(), q("button", {
                key: 0,
                "aria-label": e(P)("el.dialog.close"),
                class: g(e(s).e("headerbtn")),
                type: "button",
                onClick: $ => t.$emit("close")
            }, [M(e(ue), {
                class: g(e(s).e("close"))
            }, {
                default: m(() => [(D(), Z(ie(t.closeIcon || e(i))))]),
                _: 1
            }, 8, ["class"])], 10, ["aria-label", "onClick"])) : U("v-if", !0)], 2), z("div", {
                id: e(b),
                class: g([e(s).e("body"), t.bodyClass])
            }, [E(t.$slots, "default")], 10, ["id"]), t.$slots.footer ? (D(), q("footer", {
                key: 0,
                class: g([e(s).e("footer"), t.footerClass])
            }, [E(t.$slots, "footer")], 2)) : U("v-if", !0)], 6))
        }
    });
var Ke = X(qe, [
    ["__file", "dialog-content.vue"]
]);
const Ue = J({
        ...x,
        appendToBody: Boolean,
        appendTo: {
            type: Re.to.type,
            default: "body"
        },
        beforeClose: {
            type: fe(Function)
        },
        destroyOnClose: Boolean,
        closeOnClickModal: {
            type: Boolean,
            default: !0
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        lockScroll: {
            type: Boolean,
            default: !0
        },
        modal: {
            type: Boolean,
            default: !0
        },
        openDelay: {
            type: Number,
            default: 0
        },
        closeDelay: {
            type: Number,
            default: 0
        },
        top: {
            type: String
        },
        modelValue: Boolean,
        modalClass: String,
        headerClass: String,
        bodyClass: String,
        footerClass: String,
        width: {
            type: [String, Number]
        },
        zIndex: {
            type: Number
        },
        trapFocus: Boolean,
        headerAriaLevel: {
            type: String,
            default: "2"
        }
    }),
    Ze = {
        open: () => !0,
        opened: () => !0,
        close: () => !0,
        closed: () => !0,
        [Q]: o => ce(o),
        openAutoFocus: () => !0,
        closeAutoFocus: () => !0
    },
    _e = (o, n) => {
        var a;
        const i = ve().emit,
            {
                nextZIndex: f
            } = ye();
        let C = "";
        const b = G(),
            s = G(),
            d = k(!1),
            y = k(!1),
            p = k(!1),
            h = k((a = o.zIndex) != null ? a : f());
        let u, v;
        const I = pe("namespace", ge),
            B = S(() => {
                const r = {},
                    c = `--${I.value}-dialog`;
                return o.fullscreen || (o.top && (r[`${c}-margin-top`] = o.top), o.width && (r[`${c}-width`] = me(o.width))), r
            }),
            t = S(() => o.alignCenter ? {
                display: "flex"
            } : {});

        function w() {
            i("opened")
        }

        function $() {
            i("closed"), i(Q, !1), o.destroyOnClose && (p.value = !1)
        }

        function V() {
            i("close")
        }

        function L() {
            v == null || v(), u == null || u(), o.openDelay && o.openDelay > 0 ? {
                stop: u
            } = H(() => O(), o.openDelay) : O()
        }

        function T() {
            u == null || u(), v == null || v(), o.closeDelay && o.closeDelay > 0 ? {
                stop: v
            } = H(() => R(), o.closeDelay) : R()
        }

        function A() {
            function r(c) {
                c || (y.value = !0, d.value = !1)
            }
            o.beforeClose ? o.beforeClose(r) : T()
        }

        function F() {
            o.closeOnClickModal && A()
        }

        function O() {
            Ee && (d.value = !0)
        }

        function R() {
            d.value = !1
        }

        function l() {
            i("openAutoFocus")
        }

        function _() {
            i("closeAutoFocus")
        }

        function ee(r) {
            var c;
            ((c = r.detail) == null ? void 0 : c.focusReason) === "pointer" && r.preventDefault()
        }
        o.lockScroll && Ce(d);

        function oe() {
            o.closeOnPressEscape && A()
        }
        return K(() => o.zIndex, () => {
            var r;
            h.value = (r = o.zIndex) != null ? r : f()
        }), K(() => o.modelValue, r => {
            var c;
            r ? (y.value = !1, L(), p.value = !0, h.value = (c = o.zIndex) != null ? c : f(), be(() => {
                i("open"), n.value && (n.value.parentElement.scrollTop = 0, n.value.parentElement.scrollLeft = 0, n.value.scrollTop = 0)
            })) : d.value && T()
        }), K(() => o.fullscreen, r => {
            n.value && (r ? (C = n.value.style.transform, n.value.style.transform = "") : n.value.style.transform = C)
        }), he(() => {
            o.modelValue && (d.value = !0, p.value = !0, L())
        }), {
            afterEnter: w,
            afterLeave: $,
            beforeLeave: V,
            handleClose: A,
            onModalClick: F,
            close: T,
            doClose: R,
            onOpenAutoFocus: l,
            onCloseAutoFocus: _,
            onCloseRequested: oe,
            onFocusoutPrevented: ee,
            titleId: b,
            bodyId: s,
            closed: y,
            style: B,
            overlayDialogStyle: t,
            rendered: p,
            visible: d,
            zIndex: h
        }
    },
    je = N({
        name: "ElDialog",
        inheritAttrs: !1
    }),
    Ge = N({
        ...je,
        props: Ue,
        emits: Ze,
        setup(o, {
            expose: n
        }) {
            const a = o,
                P = ke();
            Se({
                scope: "el-dialog",
                from: "the title slot",
                replacement: "the header slot",
                version: "3.0.0",
                ref: "https://element-plus.org/en-US/component/dialog.html#slots"
            }, S(() => !!P.title));
            const i = we("dialog"),
                f = k(),
                C = k(),
                b = k(),
                {
                    visible: s,
                    titleId: d,
                    bodyId: y,
                    style: p,
                    overlayDialogStyle: h,
                    rendered: u,
                    zIndex: v,
                    afterEnter: I,
                    afterLeave: B,
                    beforeLeave: t,
                    handleClose: w,
                    onModalClick: $,
                    onOpenAutoFocus: V,
                    onCloseAutoFocus: L,
                    onCloseRequested: T,
                    onFocusoutPrevented: A
                } = _e(a, f);
            Le(W, {
                dialogRef: f,
                headerRef: C,
                bodyId: y,
                ns: i,
                rendered: u,
                style: p
            });
            const F = Te($),
                O = S(() => a.draggable && !a.fullscreen);
            return n({
                visible: s,
                dialogContentRef: b,
                resetPosition: () => {
                    var l;
                    (l = b.value) == null || l.resetPosition()
                },
                handleClose: w
            }), (l, _) => (D(), Z(e(ze), {
                to: l.appendTo,
                disabled: l.appendTo !== "body" ? !1 : !l.appendToBody
            }, {
                default: m(() => [M(De, {
                    name: "dialog-fade",
                    onAfterEnter: e(I),
                    onAfterLeave: e(B),
                    onBeforeLeave: e(t),
                    persisted: ""
                }, {
                    default: m(() => [Ie(M(e(Be), {
                        "custom-mask-event": "",
                        mask: l.modal,
                        "overlay-class": l.modalClass,
                        "z-index": e(v)
                    }, {
                        default: m(() => [z("div", {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": l.title || void 0,
                            "aria-labelledby": l.title ? void 0 : e(d),
                            "aria-describedby": e(y),
                            class: g(`${e(i).namespace.value}-overlay-dialog`),
                            style: Y(e(h)),
                            onClick: e(F).onClick,
                            onMousedown: e(F).onMousedown,
                            onMouseup: e(F).onMouseup
                        }, [M(e(Ae), {
                            loop: "",
                            trapped: e(s),
                            "focus-start-el": "container",
                            onFocusAfterTrapped: e(V),
                            onFocusAfterReleased: e(L),
                            onFocusoutPrevented: e(A),
                            onReleaseRequested: e(T)
                        }, {
                            default: m(() => [e(u) ? (D(), Z(Ke, Fe({
                                key: 0,
                                ref_key: "dialogContentRef",
                                ref: b
                            }, l.$attrs, {
                                center: l.center,
                                "align-center": l.alignCenter,
                                "close-icon": l.closeIcon,
                                draggable: e(O),
                                overflow: l.overflow,
                                fullscreen: l.fullscreen,
                                "header-class": l.headerClass,
                                "body-class": l.bodyClass,
                                "footer-class": l.footerClass,
                                "show-close": l.showClose,
                                title: l.title,
                                "aria-level": l.headerAriaLevel,
                                onClose: e(w)
                            }), Pe({
                                header: m(() => [l.$slots.title ? E(l.$slots, "title", {
                                    key: 1
                                }) : E(l.$slots, "header", {
                                    key: 0,
                                    close: e(w),
                                    titleId: e(d),
                                    titleClass: e(i).e("title")
                                })]),
                                default: m(() => [E(l.$slots, "default")]),
                                _: 2
                            }, [l.$slots.footer ? {
                                name: "footer",
                                fn: m(() => [E(l.$slots, "footer")])
                            } : void 0]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : U("v-if", !0)]),
                            _: 3
                        }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])]),
                        _: 3
                    }, 8, ["mask", "overlay-class", "z-index"]), [
                        [$e, e(s)]
                    ])]),
                    _: 3
                }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])]),
                _: 3
            }, 8, ["to", "disabled"]))
        }
    });
var He = X(Ge, [
    ["__file", "dialog.vue"]
]);
const Ye = Oe(He);
export {
    Ye as E, Ne as c
};
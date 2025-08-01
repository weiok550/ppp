import {
    X as Te,
    $ as X,
    _ as A,
    d as M,
    r as P,
    h as T,
    aa as C,
    c as y,
    e as O,
    a1 as J,
    ao as Y,
    ap as $e,
    O as ce,
    aq as Fe,
    Q as w,
    v as z,
    o as N,
    m,
    l as R,
    ar as Re,
    as as Se,
    A as pe,
    b as W,
    x as Z,
    at as Oe,
    a5 as j,
    n as q,
    I as ke,
    E as fe,
    a as ee,
    au as Ne,
    av as Pe,
    aw as De,
    ax as ve,
    ay as Be,
    az as me,
    aA as H,
    aB as Ke,
    k as Le,
    S as Ae,
    ad as x,
    F as Me,
    f as Ge,
    aC as ze,
    g as ge,
    w as Ue
} from "./index-DejQ-iz-.js";
import {
    c as k,
    O as Ye,
    E as He,
    w as ie
} from "./el-popper-DfMgMTnx.js";
import {
    a as Ve
} from "./el-divider-BmWAspa3.js";
import {
    c as Je,
    d as We,
    E as je,
    a as be,
    C as qe,
    b as Qe,
    e as Xe,
    f as Ze,
    g as xe,
    F as eo,
    L as oo
} from "./dropdown-BXx2P874.js";
import {
    c as no
} from "./castArray-G03HepT3.js";
import {
    c as we
} from "./el-dialog-BXbic-ED.js";
const to = Te({
        style: {
            type: X([String, Array, Object])
        },
        currentTabId: {
            type: X(String)
        },
        defaultCurrentTabId: String,
        loop: Boolean,
        dir: {
            type: String,
            values: ["ltr", "rtl"],
            default: "ltr"
        },
        orientation: {
            type: X(String)
        },
        onBlur: Function,
        onFocus: Function,
        onMousedown: Function
    }),
    {
        ElCollection: ro,
        ElCollectionItem: lo,
        COLLECTION_INJECTION_KEY: oe,
        COLLECTION_ITEM_INJECTION_KEY: so
    } = Je("RovingFocusGroup"),
    ne = Symbol("elRovingFocusGroup"),
    _e = Symbol("elRovingFocusGroupItem"),
    ao = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    },
    io = (e, n) => e,
    uo = (e, n, d) => {
        const r = io(e.code);
        return ao[r]
    },
    co = (e, n) => e.map((d, r) => e[(r + n) % e.length]),
    te = e => {
        const {
            activeElement: n
        } = document;
        for (const d of e)
            if (d === n || (d.focus(), n !== document.activeElement)) return
    },
    de = "currentTabIdChange",
    ue = "rovingFocusGroup.entryFocus",
    po = {
        bubbles: !1,
        cancelable: !0
    },
    fo = M({
        name: "ElRovingFocusGroupImpl",
        inheritAttrs: !1,
        props: to,
        emits: [de, "entryFocus"],
        setup(e, {
            emit: n
        }) {
            var d;
            const r = T((d = e.currentTabId || e.defaultCurrentTabId) != null ? d : null),
                c = T(!1),
                u = T(!1),
                a = T(),
                {
                    getItems: l
                } = C(oe, void 0),
                p = y(() => [{
                    outline: "none"
                }, e.style]),
                g = i => {
                    n(de, i)
                },
                b = () => {
                    c.value = !0
                },
                _ = k(i => {
                    var f;
                    (f = e.onMousedown) == null || f.call(e, i)
                }, () => {
                    u.value = !0
                }),
                E = k(i => {
                    var f;
                    (f = e.onFocus) == null || f.call(e, i)
                }, i => {
                    const f = !O(u),
                        {
                            target: D,
                            currentTarget: $
                        } = i;
                    if (D === $ && f && !O(c)) {
                        const B = new Event(ue, po);
                        if ($ == null || $.dispatchEvent(B), !B.defaultPrevented) {
                            const v = l().filter(F => F.focusable),
                                S = v.find(F => F.active),
                                I = v.find(F => F.id === O(r)),
                                L = [S, I, ...v].filter(Boolean).map(F => F.ref);
                            te(L)
                        }
                    }
                    u.value = !1
                }),
                o = k(i => {
                    var f;
                    (f = e.onBlur) == null || f.call(e, i)
                }, () => {
                    c.value = !1
                }),
                s = (...i) => {
                    n("entryFocus", ...i)
                };
            J(ne, {
                currentTabbedId: $e(r),
                loop: Y(e, "loop"),
                tabIndex: y(() => O(c) ? -1 : 0),
                rovingFocusGroupRef: a,
                rovingFocusGroupRootStyle: p,
                orientation: Y(e, "orientation"),
                dir: Y(e, "dir"),
                onItemFocus: g,
                onItemShiftTab: b,
                onBlur: o,
                onFocus: E,
                onMousedown: _
            }), ce(() => e.currentTabId, i => {
                r.value = i ?? null
            }), Fe(a, ue, s)
        }
    });

function vo(e, n, d, r, c, u) {
    return P(e.$slots, "default")
}
var mo = A(fo, [
    ["render", vo],
    ["__file", "roving-focus-group-impl.vue"]
]);
const go = M({
    name: "ElRovingFocusGroup",
    components: {
        ElFocusGroupCollection: ro,
        ElRovingFocusGroupImpl: mo
    }
});

function bo(e, n, d, r, c, u) {
    const a = w("el-roving-focus-group-impl"),
        l = w("el-focus-group-collection");
    return N(), z(l, null, {
        default: m(() => [R(a, Re(Se(e.$attrs)), {
            default: m(() => [P(e.$slots, "default")]),
            _: 3
        }, 16)]),
        _: 3
    })
}
var wo = A(go, [
    ["render", bo],
    ["__file", "roving-focus-group.vue"]
]);
const Q = Symbol("elDropdown"),
    Ie = "elDropdown",
    {
        ButtonGroup: _o
    } = pe,
    Io = M({
        name: "ElDropdown",
        components: {
            ElButton: pe,
            ElButtonGroup: _o,
            ElScrollbar: Ve,
            ElDropdownCollection: je,
            ElTooltip: He,
            ElRovingFocusGroup: wo,
            ElOnlyChild: Ye,
            ElIcon: fe,
            ArrowDown: ke
        },
        props: We,
        emits: ["visible-change", "click", "command"],
        setup(e, {
            emit: n
        }) {
            const d = me(),
                r = ee("dropdown"),
                {
                    t: c
                } = Ne(),
                u = T(),
                a = T(),
                l = T(),
                p = T(),
                g = T(null),
                b = T(null),
                _ = T(!1),
                E = y(() => ({
                    maxHeight: Pe(e.maxHeight)
                })),
                o = y(() => [r.m(v.value)]),
                s = y(() => no(e.trigger)),
                i = ve().value,
                f = y(() => e.id || i);
            ce([u, s], ([t, h], [G]) => {
                var le, se, ae;
                (le = G == null ? void 0 : G.$el) != null && le.removeEventListener && G.$el.removeEventListener("pointerenter", I), (se = t == null ? void 0 : t.$el) != null && se.removeEventListener && t.$el.removeEventListener("pointerenter", I), (ae = t == null ? void 0 : t.$el) != null && ae.addEventListener && h.includes("hover") && t.$el.addEventListener("pointerenter", I)
            }, {
                immediate: !0
            }), Be(() => {
                var t, h;
                (h = (t = u.value) == null ? void 0 : t.$el) != null && h.removeEventListener && u.value.$el.removeEventListener("pointerenter", I)
            });

            function D() {
                $()
            }

            function $() {
                var t;
                (t = l.value) == null || t.onClose()
            }

            function B() {
                var t;
                (t = l.value) == null || t.onOpen()
            }
            const v = De();

            function S(...t) {
                n("command", ...t)
            }

            function I() {
                var t, h;
                (h = (t = u.value) == null ? void 0 : t.$el) == null || h.focus()
            }

            function K() {}

            function L() {
                const t = O(p);
                s.value.includes("hover") && (t == null || t.focus()), b.value = null
            }

            function F(t) {
                b.value = t
            }

            function re(t) {
                _.value || (t.preventDefault(), t.stopImmediatePropagation())
            }

            function V() {
                n("visible-change", !0)
            }

            function U(t) {
                var h;
                (t == null ? void 0 : t.type) === "keydown" && ((h = p.value) == null || h.focus())
            }

            function ye() {
                n("visible-change", !1)
            }
            return J(Q, {
                contentRef: p,
                role: y(() => e.role),
                triggerId: f,
                isUsingKeyboard: _,
                onItemEnter: K,
                onItemLeave: L
            }), J(Ie, {
                instance: d,
                dropdownSize: v,
                handleClick: D,
                commandHandler: S,
                trigger: Y(e, "trigger"),
                hideOnClick: Y(e, "hideOnClick")
            }), {
                t: c,
                ns: r,
                scrollbar: g,
                wrapStyle: E,
                dropdownTriggerKls: o,
                dropdownSize: v,
                triggerId: f,
                currentTabId: b,
                handleCurrentTabIdChange: F,
                handlerMainButtonClick: t => {
                    n("click", t)
                },
                handleEntryFocus: re,
                handleClose: $,
                handleOpen: B,
                handleBeforeShowTooltip: V,
                handleShowTooltip: U,
                handleBeforeHideTooltip: ye,
                onFocusAfterTrapped: t => {
                    var h, G;
                    t.preventDefault(), (G = (h = p.value) == null ? void 0 : h.focus) == null || G.call(h, {
                        preventScroll: !0
                    })
                },
                popperRef: l,
                contentRef: p,
                triggeringElementRef: u,
                referenceElementRef: a
            }
        }
    });

function Eo(e, n, d, r, c, u) {
    var a;
    const l = w("el-dropdown-collection"),
        p = w("el-roving-focus-group"),
        g = w("el-scrollbar"),
        b = w("el-only-child"),
        _ = w("el-tooltip"),
        E = w("el-button"),
        o = w("arrow-down"),
        s = w("el-icon"),
        i = w("el-button-group");
    return N(), W("div", {
        class: q([e.ns.b(), e.ns.is("disabled", e.disabled)])
    }, [R(_, {
        ref: "popperRef",
        role: e.role,
        effect: e.effect,
        "fallback-placements": ["bottom", "top"],
        "popper-options": e.popperOptions,
        "gpu-acceleration": !1,
        "hide-after": e.trigger === "hover" ? e.hideTimeout : 0,
        "manual-mode": !0,
        placement: e.placement,
        "popper-class": [e.ns.e("popper"), e.popperClass],
        "reference-element": (a = e.referenceElementRef) == null ? void 0 : a.$el,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "trigger-target-el": e.contentRef,
        "show-after": e.trigger === "hover" ? e.showTimeout : 0,
        "stop-popper-mouse-event": !1,
        "virtual-ref": e.triggeringElementRef,
        "virtual-triggering": e.splitButton,
        disabled: e.disabled,
        transition: `${e.ns.namespace.value}-zoom-in-top`,
        teleported: e.teleported,
        pure: "",
        persistent: e.persistent,
        onBeforeShow: e.handleBeforeShowTooltip,
        onShow: e.handleShowTooltip,
        onBeforeHide: e.handleBeforeHideTooltip
    }, Oe({
        content: m(() => [R(g, {
            ref: "scrollbar",
            "wrap-style": e.wrapStyle,
            tag: "div",
            "view-class": e.ns.e("list")
        }, {
            default: m(() => [R(p, {
                loop: e.loop,
                "current-tab-id": e.currentTabId,
                orientation: "horizontal",
                onCurrentTabIdChange: e.handleCurrentTabIdChange,
                onEntryFocus: e.handleEntryFocus
            }, {
                default: m(() => [R(l, null, {
                    default: m(() => [P(e.$slots, "dropdown")]),
                    _: 3
                })]),
                _: 3
            }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])]),
            _: 3
        }, 8, ["wrap-style", "view-class"])]),
        _: 2
    }, [e.splitButton ? void 0 : {
        name: "default",
        fn: m(() => [R(b, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
        }, {
            default: m(() => [P(e.$slots, "default")]),
            _: 3
        }, 8, ["id", "tabindex"])])
    }]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]), e.splitButton ? (N(), z(i, {
        key: 0
    }, {
        default: m(() => [R(E, j({
            ref: "referenceElementRef"
        }, e.buttonProps, {
            size: e.dropdownSize,
            type: e.type,
            disabled: e.disabled,
            tabindex: e.tabindex,
            onClick: e.handlerMainButtonClick
        }), {
            default: m(() => [P(e.$slots, "default")]),
            _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]), R(E, j({
            id: e.triggerId,
            ref: "triggeringElementRef"
        }, e.buttonProps, {
            role: "button",
            size: e.dropdownSize,
            type: e.type,
            class: e.ns.e("caret-button"),
            disabled: e.disabled,
            tabindex: e.tabindex,
            "aria-label": e.t("el.dropdown.toggleDropdown")
        }), {
            default: m(() => [R(s, {
                class: q(e.ns.e("icon"))
            }, {
                default: m(() => [R(o)]),
                _: 1
            }, 8, ["class"])]),
            _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])]),
        _: 3
    })) : Z("v-if", !0)], 2)
}
var ho = A(Io, [
    ["render", Eo],
    ["__file", "dropdown.vue"]
]);
const Co = M({
    components: {
        ElRovingFocusCollectionItem: lo
    },
    props: {
        focusable: {
            type: Boolean,
            default: !0
        },
        active: Boolean
    },
    emits: ["mousedown", "focus", "keydown"],
    setup(e, {
        emit: n
    }) {
        const {
            currentTabbedId: d,
            loop: r,
            onItemFocus: c,
            onItemShiftTab: u
        } = C(ne, void 0), {
            getItems: a
        } = C(oe, void 0), l = ve(), p = T(), g = k(o => {
            n("mousedown", o)
        }, o => {
            e.focusable ? c(O(l)) : o.preventDefault()
        }), b = k(o => {
            n("focus", o)
        }, () => {
            c(O(l))
        }), _ = k(o => {
            n("keydown", o)
        }, o => {
            const {
                code: s,
                shiftKey: i,
                target: f,
                currentTarget: D
            } = o;
            if (s === H.tab && i) {
                u();
                return
            }
            if (f !== D) return;
            const $ = uo(o);
            if ($) {
                o.preventDefault();
                let v = a().filter(S => S.focusable).map(S => S.ref);
                switch ($) {
                    case "last": {
                        v.reverse();
                        break
                    }
                    case "prev":
                    case "next": {
                        $ === "prev" && v.reverse();
                        const S = v.indexOf(D);
                        v = r.value ? co(v, S + 1) : v.slice(S + 1);
                        break
                    }
                }
                Ke(() => {
                    te(v)
                })
            }
        }), E = y(() => d.value === O(l));
        return J(_e, {
            rovingFocusGroupItemRef: p,
            tabIndex: y(() => O(E) ? 0 : -1),
            handleMousedown: g,
            handleFocus: b,
            handleKeydown: _
        }), {
            id: l,
            handleKeydown: _,
            handleFocus: b,
            handleMousedown: g
        }
    }
});

function yo(e, n, d, r, c, u) {
    const a = w("el-roving-focus-collection-item");
    return N(), z(a, {
        id: e.id,
        focusable: e.focusable,
        active: e.active
    }, {
        default: m(() => [P(e.$slots, "default")]),
        _: 3
    }, 8, ["id", "focusable", "active"])
}
var To = A(Co, [
    ["render", yo],
    ["__file", "roving-focus-item.vue"]
]);
const $o = M({
    name: "DropdownItemImpl",
    components: {
        ElIcon: fe
    },
    props: be,
    emits: ["pointermove", "pointerleave", "click", "clickimpl"],
    setup(e, {
        emit: n
    }) {
        const d = ee("dropdown"),
            {
                role: r
            } = C(Q, void 0),
            {
                collectionItemRef: c
            } = C(Qe, void 0),
            {
                collectionItemRef: u
            } = C(so, void 0),
            {
                rovingFocusGroupItemRef: a,
                tabIndex: l,
                handleFocus: p,
                handleKeydown: g,
                handleMousedown: b
            } = C(_e, void 0),
            _ = we(c, u, a),
            E = y(() => r.value === "menu" ? "menuitem" : r.value === "navigation" ? "link" : "button"),
            o = k(s => {
                if ([H.enter, H.numpadEnter, H.space].includes(s.code)) return s.preventDefault(), s.stopImmediatePropagation(), n("clickimpl", s), !0
            }, g);
        return {
            ns: d,
            itemRef: _,
            dataset: {
                [qe]: ""
            },
            role: E,
            tabIndex: l,
            handleFocus: p,
            handleKeydown: o,
            handleMousedown: b
        }
    }
});

function Fo(e, n, d, r, c, u) {
    const a = w("el-icon");
    return N(), W(Me, null, [e.divided ? (N(), W("li", {
        key: 0,
        role: "separator",
        class: q(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : Z("v-if", !0), Le("li", j({
        ref: e.itemRef
    }, {
        ...e.dataset,
        ...e.$attrs
    }, {
        "aria-disabled": e.disabled,
        class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
        tabindex: e.tabIndex,
        role: e.role,
        onClick: l => e.$emit("clickimpl", l),
        onFocus: e.handleFocus,
        onKeydown: x(e.handleKeydown, ["self"]),
        onMousedown: e.handleMousedown,
        onPointermove: l => e.$emit("pointermove", l),
        onPointerleave: l => e.$emit("pointerleave", l)
    }), [e.icon ? (N(), z(a, {
        key: 0
    }, {
        default: m(() => [(N(), z(Ae(e.icon)))]),
        _: 1
    })) : Z("v-if", !0), P(e.$slots, "default")], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])], 64)
}
var Ro = A($o, [
    ["render", Fo],
    ["__file", "dropdown-item-impl.vue"]
]);
const Ee = () => {
        const e = C(Ie, {}),
            n = y(() => e == null ? void 0 : e.dropdownSize);
        return {
            elDropdown: e,
            _elDropdownSize: n
        }
    },
    So = M({
        name: "ElDropdownItem",
        components: {
            ElDropdownCollectionItem: Xe,
            ElRovingFocusItem: To,
            ElDropdownItemImpl: Ro
        },
        inheritAttrs: !1,
        props: be,
        emits: ["pointermove", "pointerleave", "click"],
        setup(e, {
            emit: n,
            attrs: d
        }) {
            const {
                elDropdown: r
            } = Ee(), c = me(), u = T(null), a = y(() => {
                var o, s;
                return (s = (o = O(u)) == null ? void 0 : o.textContent) != null ? s : ""
            }), {
                onItemEnter: l,
                onItemLeave: p
            } = C(Q, void 0), g = k(o => (n("pointermove", o), o.defaultPrevented), ie(o => {
                if (e.disabled) {
                    p(o);
                    return
                }
                const s = o.currentTarget;
                s === document.activeElement || s.contains(document.activeElement) || (l(o), o.defaultPrevented || s == null || s.focus())
            })), b = k(o => (n("pointerleave", o), o.defaultPrevented), ie(p)), _ = k(o => {
                if (!e.disabled) return n("click", o), o.type !== "keydown" && o.defaultPrevented
            }, o => {
                var s, i, f;
                if (e.disabled) {
                    o.stopImmediatePropagation();
                    return
                }(s = r == null ? void 0 : r.hideOnClick) != null && s.value && ((i = r.handleClick) == null || i.call(r)), (f = r.commandHandler) == null || f.call(r, e.command, c, o)
            }), E = y(() => ({
                ...e,
                ...d
            }));
            return {
                handleClick: _,
                handlePointerMove: g,
                handlePointerLeave: b,
                textContent: a,
                propsAndAttrs: E
            }
        }
    });

function Oo(e, n, d, r, c, u) {
    var a;
    const l = w("el-dropdown-item-impl"),
        p = w("el-roving-focus-item"),
        g = w("el-dropdown-collection-item");
    return N(), z(g, {
        disabled: e.disabled,
        "text-value": (a = e.textValue) != null ? a : e.textContent
    }, {
        default: m(() => [R(p, {
            focusable: !e.disabled
        }, {
            default: m(() => [R(l, j(e.propsAndAttrs, {
                onPointerleave: e.handlePointerLeave,
                onPointermove: e.handlePointerMove,
                onClickimpl: e.handleClick
            }), {
                default: m(() => [P(e.$slots, "default")]),
                _: 3
            }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])]),
            _: 3
        }, 8, ["focusable"])]),
        _: 3
    }, 8, ["disabled", "text-value"])
}
var he = A(So, [
    ["render", Oo],
    ["__file", "dropdown-item.vue"]
]);
const ko = M({
    name: "ElDropdownMenu",
    props: Ze,
    setup(e) {
        const n = ee("dropdown"),
            {
                _elDropdownSize: d
            } = Ee(),
            r = d.value,
            {
                focusTrapRef: c,
                onKeydown: u
            } = C(ze, void 0),
            {
                contentRef: a,
                role: l,
                triggerId: p
            } = C(Q, void 0),
            {
                collectionRef: g,
                getItems: b
            } = C(xe, void 0),
            {
                rovingFocusGroupRef: _,
                rovingFocusGroupRootStyle: E,
                tabIndex: o,
                onBlur: s,
                onFocus: i,
                onMousedown: f
            } = C(ne, void 0),
            {
                collectionRef: D
            } = C(oe, void 0),
            $ = y(() => [n.b("menu"), n.bm("menu", r == null ? void 0 : r.value)]),
            B = we(a, g, c, _, D),
            v = k(I => {
                var K;
                (K = e.onKeydown) == null || K.call(e, I)
            }, I => {
                const {
                    currentTarget: K,
                    code: L,
                    target: F
                } = I;
                if (K.contains(F), H.tab === L && I.stopImmediatePropagation(), I.preventDefault(), F !== O(a) || !eo.includes(L)) return;
                const V = b().filter(U => !U.disabled).map(U => U.ref);
                oo.includes(L) && V.reverse(), te(V)
            });
        return {
            size: r,
            rovingFocusGroupRootStyle: E,
            tabIndex: o,
            dropdownKls: $,
            role: l,
            triggerId: p,
            dropdownListWrapperRef: B,
            handleKeydown: I => {
                v(I), u(I)
            },
            onBlur: s,
            onFocus: i,
            onMousedown: f
        }
    }
});

function No(e, n, d, r, c, u) {
    return N(), W("ul", {
        ref: e.dropdownListWrapperRef,
        class: q(e.dropdownKls),
        style: Ge(e.rovingFocusGroupRootStyle),
        tabindex: -1,
        role: e.role,
        "aria-labelledby": e.triggerId,
        onBlur: e.onBlur,
        onFocus: e.onFocus,
        onKeydown: x(e.handleKeydown, ["self"]),
        onMousedown: x(e.onMousedown, ["self"])
    }, [P(e.$slots, "default")], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"])
}
var Ce = A(ko, [
    ["render", No],
    ["__file", "dropdown-menu.vue"]
]);
const zo = Ue(ho, {
        DropdownItem: he,
        DropdownMenu: Ce
    }),
    Uo = ge(he),
    Yo = ge(Ce);
export {
    Yo as E, Uo as a, zo as b
};
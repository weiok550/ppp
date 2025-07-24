import {
    u as r,
    b as d,
    E as A
} from "./el-popper-DfMgMTnx.js";
import {
    d as f
} from "./dropdown-BXx2P874.js";
import {
    a3 as R,
    X as U,
    d as h,
    c as n,
    a as $,
    h as D,
    e as p,
    av as K,
    v as O,
    o as u,
    m as v,
    r as c,
    x as b,
    b as V,
    n as H,
    t as g,
    p as I,
    a5 as L,
    _ as z,
    w as F,
    bO as X
} from "./index-DejQ-iz-.js";
const j = U({
        trigger: d.trigger,
        triggerKeys: d.triggerKeys,
        placement: f.placement,
        disabled: d.disabled,
        visible: r.visible,
        transition: r.transition,
        popperOptions: f.popperOptions,
        tabindex: f.tabindex,
        content: r.content,
        popperStyle: r.popperStyle,
        popperClass: r.popperClass,
        enterable: {
            ...r.enterable,
            default: !0
        },
        effect: {
            ...r.effect,
            default: "light"
        },
        teleported: r.teleported,
        appendTo: r.appendTo,
        title: String,
        width: {
            type: [String, Number],
            default: 150
        },
        offset: {
            type: Number,
            default: void 0
        },
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
        },
        showArrow: {
            type: Boolean,
            default: !0
        },
        persistent: {
            type: Boolean,
            default: !0
        },
        "onUpdate:visible": {
            type: Function
        }
    }),
    q = {
        "update:visible": t => R(t),
        "before-enter": () => !0,
        "before-leave": () => !0,
        "after-enter": () => !0,
        "after-leave": () => !0
    },
    G = "onUpdate:visible",
    J = h({
        name: "ElPopover"
    }),
    M = h({
        ...J,
        props: j,
        emits: q,
        setup(t, {
            expose: a,
            emit: s
        }) {
            const o = t,
                y = n(() => o[G]),
                i = $("popover"),
                l = D(),
                w = n(() => {
                    var e;
                    return (e = p(l)) == null ? void 0 : e.popperRef
                }),
                E = n(() => [{
                    width: K(o.width)
                }, o.popperStyle]),
                P = n(() => [i.b(), o.popperClass, {
                    [i.m("plain")]: !!o.content
                }]),
                C = n(() => o.transition === `${i.namespace.value}-fade-in-linear`),
                k = () => {
                    var e;
                    (e = l.value) == null || e.hide()
                },
                S = () => {
                    s("before-enter")
                },
                B = () => {
                    s("before-leave")
                },
                N = () => {
                    s("after-enter")
                },
                T = () => {
                    s("update:visible", !1), s("after-leave")
                };
            return a({
                popperRef: w,
                hide: k
            }), (e, _) => (u(), O(p(A), L({
                ref_key: "tooltipRef",
                ref: l
            }, e.$attrs, {
                trigger: e.trigger,
                "trigger-keys": e.triggerKeys,
                placement: e.placement,
                disabled: e.disabled,
                visible: e.visible,
                transition: e.transition,
                "popper-options": e.popperOptions,
                tabindex: e.tabindex,
                content: e.content,
                offset: e.offset,
                "show-after": e.showAfter,
                "hide-after": e.hideAfter,
                "auto-close": e.autoClose,
                "show-arrow": e.showArrow,
                "aria-label": e.title,
                effect: e.effect,
                enterable: e.enterable,
                "popper-class": p(P),
                "popper-style": p(E),
                teleported: e.teleported,
                "append-to": e.appendTo,
                persistent: e.persistent,
                "gpu-acceleration": p(C),
                "onUpdate:visible": p(y),
                onBeforeShow: S,
                onBeforeHide: B,
                onShow: N,
                onHide: T
            }), {
                content: v(() => [e.title ? (u(), V("div", {
                    key: 0,
                    class: H(p(i).e("title")),
                    role: "title"
                }, g(e.title), 3)) : b("v-if", !0), c(e.$slots, "default", {}, () => [I(g(e.content), 1)])]),
                default: v(() => [e.$slots.reference ? c(e.$slots, "reference", {
                    key: 0
                }) : b("v-if", !0)]),
                _: 3
            }, 16, ["trigger", "trigger-keys", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "append-to", "persistent", "gpu-acceleration", "onUpdate:visible"]))
        }
    });
var Q = z(M, [
    ["__file", "popover.vue"]
]);
const m = (t, a) => {
    const s = a.arg || a.value,
        o = s == null ? void 0 : s.popperRef;
    o && (o.triggerRef = t)
};
var W = {
    mounted(t, a) {
        m(t, a)
    },
    updated(t, a) {
        m(t, a)
    }
};
const Y = "popover",
    Z = X(W, Y),
    oe = F(Q, {
        directive: Z
    });
export {
    oe as E
};
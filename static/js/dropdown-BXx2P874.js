import {
    u as E,
    r as S,
    b
} from "./el-popper-DfMgMTnx.js";
import {
    _ as C,
    d as y,
    r as T,
    h as _,
    aa as L,
    i as $,
    e as f,
    ay as h,
    a1 as I,
    X as m,
    a9 as M,
    $ as o,
    aA as e
} from "./index-DejQ-iz-.js";
const w = y({
    inheritAttrs: !1
});

function A(n, s, a, r, i, d) {
    return T(n.$slots, "default")
}
var v = C(w, [
    ["render", A],
    ["__file", "collection.vue"]
]);
const B = y({
    name: "ElCollectionItem",
    inheritAttrs: !1
});

function K(n, s, a, r, i, d) {
    return T(n.$slots, "default")
}
var P = C(B, [
    ["render", K],
    ["__file", "collection-item.vue"]
]);
const x = "data-el-collection-item",
    Y = n => {
        const s = `El${n}Collection`,
            a = `${s}Item`,
            r = Symbol(s),
            i = Symbol(a),
            d = {
                ...v,
                name: s,
                setup() {
                    const u = _(),
                        c = new Map;
                    I(r, {
                        itemMap: c,
                        getItems: () => {
                            const l = f(u);
                            if (!l) return [];
                            const t = Array.from(l.querySelectorAll(`[${x}]`));
                            return [...c.values()].sort((g, N) => t.indexOf(g.ref) - t.indexOf(N.ref))
                        },
                        collectionRef: u
                    })
                }
            },
            O = {
                ...P,
                name: a,
                setup(u, {
                    attrs: c
                }) {
                    const p = _(),
                        l = L(r, void 0);
                    I(i, {
                        collectionItemRef: p
                    }), $(() => {
                        const t = f(p);
                        t && l.itemMap.set(t, {
                            ref: t,
                            ...c
                        })
                    }), h(() => {
                        const t = f(p);
                        l.itemMap.delete(t)
                    })
                }
            };
        return {
            COLLECTION_INJECTION_KEY: r,
            COLLECTION_ITEM_INJECTION_KEY: i,
            ElCollection: d,
            ElCollectionItem: O
        }
    },
    U = m({
        trigger: b.trigger,
        triggerKeys: {
            type: o(Array),
            default: () => [e.enter, e.numpadEnter, e.space, e.down]
        },
        effect: {
            ...E.effect,
            default: "light"
        },
        type: {
            type: o(String)
        },
        placement: {
            type: o(String),
            default: "bottom"
        },
        popperOptions: {
            type: o(Object),
            default: () => ({})
        },
        id: String,
        size: {
            type: String,
            default: ""
        },
        splitButton: Boolean,
        hideOnClick: {
            type: Boolean,
            default: !0
        },
        loop: {
            type: Boolean,
            default: !0
        },
        showTimeout: {
            type: Number,
            default: 150
        },
        hideTimeout: {
            type: Number,
            default: 150
        },
        tabindex: {
            type: o([Number, String]),
            default: 0
        },
        maxHeight: {
            type: o([Number, String]),
            default: ""
        },
        popperClass: {
            type: String,
            default: ""
        },
        disabled: Boolean,
        role: {
            type: String,
            values: S,
            default: "menu"
        },
        buttonProps: {
            type: o(Object)
        },
        teleported: E.teleported,
        persistent: {
            type: Boolean,
            default: !0
        }
    }),
    V = m({
        command: {
            type: [Object, String, Number],
            default: () => ({})
        },
        disabled: Boolean,
        divided: Boolean,
        textValue: String,
        icon: {
            type: M
        }
    }),
    k = m({
        onKeydown: {
            type: o(Function)
        }
    }),
    j = [e.down, e.pageDown, e.home],
    F = [e.up, e.pageUp, e.end],
    q = [...j, ...F],
    {
        ElCollection: z,
        ElCollectionItem: G,
        COLLECTION_INJECTION_KEY: H,
        COLLECTION_ITEM_INJECTION_KEY: W
    } = Y("Dropdown");
export {
    x as C, z as E, q as F, F as L, V as a, W as b, Y as c, U as d, G as e, k as f, H as g
};
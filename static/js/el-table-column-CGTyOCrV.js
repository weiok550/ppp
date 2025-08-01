import {
    c5 as Rn,
    c6 as Nn,
    c7 as sl,
    aZ as ct,
    c8 as kn,
    c9 as rl,
    aY as il,
    ca as Fn,
    cb as ul,
    cc as dl,
    cd as bt,
    ce as On,
    cf as Tn,
    a_ as at,
    cg as Mn,
    ch as Dt,
    ci as Wn,
    cj as Hn,
    ck as An,
    bn as Ae,
    V as ce,
    U as Oe,
    a3 as xe,
    aG as cl,
    aH as Wt,
    Z as ft,
    aa as re,
    c as M,
    aJ as me,
    aK as $n,
    aI as Ht,
    az as oe,
    O as de,
    aB as Me,
    Y as yt,
    aP as fl,
    h as L,
    W as ee,
    cl as He,
    bm as Ge,
    cm as Gt,
    aw as Ct,
    aT as hl,
    c2 as pt,
    _ as Ie,
    d as fe,
    u as vl,
    a as he,
    v as Fe,
    o as K,
    m as Re,
    k as se,
    b as Z,
    x as Se,
    n as V,
    e as T,
    H as Te,
    ad as ot,
    z as je,
    cn as st,
    r as ye,
    F as rt,
    p as ht,
    t as ke,
    S as pl,
    f as Pe,
    X as Pn,
    $ as _n,
    a1 as ml,
    co as Bn,
    aQ as gl,
    w as bl,
    g as At,
    bv as yl,
    cp as Ue,
    aD as pe,
    l as be,
    bu as jt,
    a4 as Vn,
    b5 as Cl,
    bt as In,
    Q as ve,
    cq as wl,
    s as Ut,
    aN as zn,
    I as Kn,
    E as $t,
    au as Sl,
    cr as xl,
    i as qe,
    aL as Dn,
    j as Pt,
    cs as Ke,
    bQ as Ye,
    bS as it,
    aR as P,
    G as Gn,
    ct as De,
    aq as Yt,
    b2 as qt,
    ae as Xt,
    ay as El,
    a8 as Ll,
    bi as jn,
    cu as Un
} from "./index-DejQ-iz-.js";
import {
    a as Rl
} from "./el-divider-BmWAspa3.js";
import {
    E as Nl,
    u as Yn
} from "./el-popper-DfMgMTnx.js";
import {
    r as vt,
    b as qn,
    S as kl,
    t as Fl,
    k as Ol,
    c as Xn,
    a as Tl,
    l as Qn,
    u as Zn,
    j as Jn,
    m as ea,
    f as ta,
    o as la,
    q as na
} from "./isEqual-m-EOcnpd.js";
import {
    c as Ml
} from "./castArray-G03HepT3.js";
import {
    d as ut
} from "./debounce-B0TYyvOo.js";

function aa(e, t) {
    return Rn(Nn(e, t, sl), e + "")
}

function oa(e, t, l) {
    if (!ct(l)) return !1;
    var n = typeof t;
    return (n == "number" ? vt(l) && kn(t, l.length) : n == "string" && t in l) ? rl(l[t], e) : !1
}

function sa(e) {
    return aa(function (t, l) {
        var n = -1,
            o = l.length,
            s = o > 1 ? l[o - 1] : void 0,
            r = o > 2 ? l[2] : void 0;
        for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, r && oa(l[0], l[1], r) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++n < o;) {
            var a = l[n];
            a && e(t, a, n, s)
        }
        return t
    })
}
var ra = "[object Object]",
    ia = Function.prototype,
    ua = Object.prototype,
    Wl = ia.toString,
    da = ua.hasOwnProperty,
    ca = Wl.call(Object);

function fa(e) {
    if (!il(e) || Fn(e) != ra) return !1;
    var t = qn(e);
    if (t === null) return !0;
    var l = da.call(t, "constructor") && t.constructor;
    return typeof l == "function" && l instanceof l && Wl.call(l) == ca
}
var ha = 1,
    va = 2;

function pa(e, t, l, n) {
    var o = l.length,
        s = o;
    if (e == null) return !s;
    for (e = Object(e); o--;) {
        var r = l[o];
        if (r[2] ? r[1] !== e[r[0]] : !(r[0] in e)) return !1
    }
    for (; ++o < s;) {
        r = l[o];
        var a = r[0],
            u = e[a],
            i = r[1];
        if (r[2]) {
            if (u === void 0 && !(a in e)) return !1
        } else {
            var d = new kl,
                h;
            if (!(h === void 0 ? Fl(i, u, ha | va, n, d) : h)) return !1
        }
    }
    return !0
}

function Hl(e) {
    return e === e && !ct(e)
}

function ma(e) {
    for (var t = Ol(e), l = t.length; l--;) {
        var n = t[l],
            o = e[n];
        t[l] = [n, o, Hl(o)]
    }
    return t
}

function Al(e, t) {
    return function (l) {
        return l == null ? !1 : l[e] === t && (t !== void 0 || e in Object(l))
    }
}

function ga(e) {
    var t = ma(e);
    return t.length == 1 && t[0][2] ? Al(t[0][0], t[0][1]) : function (l) {
        return l === e || pa(l, e, t)
    }
}
var ba = 1,
    ya = 2;

function Ca(e, t) {
    return ul(e) && Hl(t) ? Al(dl(e), t) : function (l) {
        var n = bt(l, e);
        return n === void 0 && n === t ? On(l, e) : Fl(t, n, ba | ya)
    }
}

function wa(e) {
    return function (t) {
        return t == null ? void 0 : t[e]
    }
}

function Sa(e) {
    return function (t) {
        return Tn(t, e)
    }
}

function xa(e) {
    return ul(e) ? wa(dl(e)) : Sa(e)
}

function Ea(e) {
    return typeof e == "function" ? e : e == null ? sl : typeof e == "object" ? at(e) ? Ca(e[0], e[1]) : ga(e) : xa(e)
}

function La(e) {
    return function (t, l, n) {
        for (var o = -1, s = Object(t), r = n(t), a = r.length; a--;) {
            var u = r[++o];
            if (l(s[u], u, s) === !1) break
        }
        return t
    }
}
var $l = La();

function Ra(e, t) {
    return e && $l(e, t, Ol)
}

function Na(e, t) {
    return function (l, n) {
        if (l == null) return l;
        if (!vt(l)) return e(l, n);
        for (var o = l.length, s = -1, r = Object(l); ++s < o && n(r[s], s, r) !== !1;);
        return l
    }
}
var ka = Na(Ra);

function wt(e, t, l) {
    (l !== void 0 && !rl(e[t], l) || l === void 0 && !(t in e)) && Mn(e, t, l)
}

function Fa(e) {
    return il(e) && vt(e)
}

function St(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
}

function Oa(e) {
    return Xn(e, Tl(e))
}

function Ta(e, t, l, n, o, s, r) {
    var a = St(e, l),
        u = St(t, l),
        i = r.get(u);
    if (i) {
        wt(e, l, i);
        return
    }
    var d = s ? s(a, u, l + "", e, t, r) : void 0,
        h = d === void 0;
    if (h) {
        var p = at(u),
            m = !p && Qn(u),
            f = !p && !m && Zn(u);
        d = u, p || m || f ? at(a) ? d = a : Fa(a) ? d = Jn(a) : m ? (h = !1, d = ea(u, !0)) : f ? (h = !1, d = ta(u, !0)) : d = [] : fa(u) || Dt(u) ? (d = a, Dt(a) ? d = Oa(a) : (!ct(a) || Wn(a)) && (d = la(u))) : h = !1
    }
    h && (r.set(u, d), o(d, u, n, s, r), r.delete(u)), wt(e, l, d)
}

function Pl(e, t, l, n, o) {
    e !== t && $l(t, function (s, r) {
        if (o || (o = new kl), ct(s)) Ta(e, t, r, l, Pl, n, o);
        else {
            var a = n ? n(St(e, r), s, r + "", e, t, o) : void 0;
            a === void 0 && (a = s), wt(e, r, a)
        }
    }, Tl)
}

function Ma(e, t) {
    var l = -1,
        n = vt(e) ? Array(e.length) : [];
    return ka(e, function (o, s, r) {
        n[++l] = t(o, s, r)
    }), n
}

function Wa(e, t) {
    var l = at(e) ? Hn : Ma;
    return l(e, Ea(t))
}

function _l(e, t) {
    return An(Wa(e, t))
}

function Xe(e) {
    return e === null
}
var Bl = sa(function (e, t, l) {
    Pl(e, t, l)
});
const Ha = e => Ae ? window.requestAnimationFrame(e) : setTimeout(e, 16),
    Vl = {
        modelValue: {
            type: [Number, String, Boolean],
            default: void 0
        },
        label: {
            type: [String, Boolean, Number, Object],
            default: void 0
        },
        value: {
            type: [String, Boolean, Number, Object],
            default: void 0
        },
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: {
            type: String,
            default: void 0
        },
        trueValue: {
            type: [String, Number],
            default: void 0
        },
        falseValue: {
            type: [String, Number],
            default: void 0
        },
        trueLabel: {
            type: [String, Number],
            default: void 0
        },
        falseLabel: {
            type: [String, Number],
            default: void 0
        },
        id: {
            type: String,
            default: void 0
        },
        border: Boolean,
        size: Wt,
        tabindex: [String, Number],
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...cl(["ariaControls"])
    },
    Il = {
        [ft]: e => ce(e) || Oe(e) || xe(e),
        change: e => ce(e) || Oe(e) || xe(e)
    },
    ze = Symbol("checkboxGroupContextKey"),
    Aa = ({
        model: e,
        isChecked: t
    }) => {
        const l = re(ze, void 0),
            n = M(() => {
                var s, r;
                const a = (s = l == null ? void 0 : l.max) == null ? void 0 : s.value,
                    u = (r = l == null ? void 0 : l.min) == null ? void 0 : r.value;
                return !me(a) && e.value.length >= a && !t.value || !me(u) && e.value.length <= u && t.value
            });
        return {
            isDisabled: $n(M(() => (l == null ? void 0 : l.disabled.value) || n.value)),
            isLimitDisabled: n
        }
    },
    $a = (e, {
        model: t,
        isLimitExceeded: l,
        hasOwnLabel: n,
        isDisabled: o,
        isLabeledByFormItem: s
    }) => {
        const r = re(ze, void 0),
            {
                formItem: a
            } = Ht(),
            {
                emit: u
            } = oe();

        function i(f) {
            var g, b, x, E;
            return [!0, e.trueValue, e.trueLabel].includes(f) ? (b = (g = e.trueValue) != null ? g : e.trueLabel) != null ? b : !0 : (E = (x = e.falseValue) != null ? x : e.falseLabel) != null ? E : !1
        }

        function d(f, g) {
            u(yt, i(f), g)
        }

        function h(f) {
            if (l.value) return;
            const g = f.target;
            u(yt, i(g.checked), f)
        }
        async function p(f) {
            l.value || !n.value && !o.value && s.value && (f.composedPath().some(x => x.tagName === "LABEL") || (t.value = i([!1, e.falseValue, e.falseLabel].includes(t.value)), await Me(), d(t.value, f)))
        }
        const m = M(() => (r == null ? void 0 : r.validateEvent) || e.validateEvent);
        return de(() => e.modelValue, () => {
            m.value && (a == null || a.validate("change").catch(f => fl()))
        }), {
            handleChange: h,
            onClickRoot: p
        }
    },
    Pa = e => {
        const t = L(!1),
            {
                emit: l
            } = oe(),
            n = re(ze, void 0),
            o = M(() => me(n) === !1),
            s = L(!1),
            r = M({
                get() {
                    var a, u;
                    return o.value ? (a = n == null ? void 0 : n.modelValue) == null ? void 0 : a.value : (u = e.modelValue) != null ? u : t.value
                },
                set(a) {
                    var u, i;
                    o.value && ee(a) ? (s.value = ((u = n == null ? void 0 : n.max) == null ? void 0 : u.value) !== void 0 && a.length > (n == null ? void 0 : n.max.value) && a.length > r.value.length, s.value === !1 && ((i = n == null ? void 0 : n.changeEvent) == null || i.call(n, a))) : (l(ft, a), t.value = a)
                }
            });
        return {
            model: r,
            isGroup: o,
            isLimitExceeded: s
        }
    },
    _a = (e, t, {
        model: l
    }) => {
        const n = re(ze, void 0),
            o = L(!1),
            s = M(() => He(e.value) ? e.label : e.value),
            r = M(() => {
                const d = l.value;
                return xe(d) ? d : ee(d) ? Ge(s.value) ? d.map(Gt).some(h => na(h, s.value)) : d.map(Gt).includes(s.value) : d != null ? d === e.trueValue || d === e.trueLabel : !!d
            }),
            a = Ct(M(() => {
                var d;
                return (d = n == null ? void 0 : n.size) == null ? void 0 : d.value
            }), {
                prop: !0
            }),
            u = Ct(M(() => {
                var d;
                return (d = n == null ? void 0 : n.size) == null ? void 0 : d.value
            })),
            i = M(() => !!t.default || !He(s.value));
        return {
            checkboxButtonSize: a,
            isChecked: r,
            isFocused: o,
            checkboxSize: u,
            hasOwnLabel: i,
            actualValue: s
        }
    },
    zl = (e, t) => {
        const {
            formItem: l
        } = Ht(), {
            model: n,
            isGroup: o,
            isLimitExceeded: s
        } = Pa(e), {
            isFocused: r,
            isChecked: a,
            checkboxButtonSize: u,
            checkboxSize: i,
            hasOwnLabel: d,
            actualValue: h
        } = _a(e, t, {
            model: n
        }), {
            isDisabled: p
        } = Aa({
            model: n,
            isChecked: a
        }), {
            inputId: m,
            isLabeledByFormItem: f
        } = hl(e, {
            formItemContext: l,
            disableIdGeneration: d,
            disableIdManagement: o
        }), {
            handleChange: g,
            onClickRoot: b
        } = $a(e, {
            model: n,
            isLimitExceeded: s,
            hasOwnLabel: d,
            isDisabled: p,
            isLabeledByFormItem: f
        });
        return (() => {
            function E() {
                var w, c;
                ee(n.value) && !n.value.includes(h.value) ? n.value.push(h.value) : n.value = (c = (w = e.trueValue) != null ? w : e.trueLabel) != null ? c : !0
            }
            e.checked && E()
        })(), pt({
            from: "label act as value",
            replacement: "value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, M(() => o.value && He(e.value))), pt({
            from: "true-label",
            replacement: "true-value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, M(() => !!e.trueLabel)), pt({
            from: "false-label",
            replacement: "false-value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, M(() => !!e.falseLabel)), {
            inputId: m,
            isLabeledByFormItem: f,
            isChecked: a,
            isDisabled: p,
            isFocused: r,
            checkboxButtonSize: u,
            checkboxSize: i,
            hasOwnLabel: d,
            model: n,
            actualValue: h,
            handleChange: g,
            onClickRoot: b
        }
    },
    Ba = fe({
        name: "ElCheckbox"
    }),
    Va = fe({
        ...Ba,
        props: Vl,
        emits: Il,
        setup(e) {
            const t = e,
                l = vl(),
                {
                    inputId: n,
                    isLabeledByFormItem: o,
                    isChecked: s,
                    isDisabled: r,
                    isFocused: a,
                    checkboxSize: u,
                    hasOwnLabel: i,
                    model: d,
                    actualValue: h,
                    handleChange: p,
                    onClickRoot: m
                } = zl(t, l),
                f = he("checkbox"),
                g = M(() => [f.b(), f.m(u.value), f.is("disabled", r.value), f.is("bordered", t.border), f.is("checked", s.value)]),
                b = M(() => [f.e("input"), f.is("disabled", r.value), f.is("checked", s.value), f.is("indeterminate", t.indeterminate), f.is("focus", a.value)]);
            return (x, E) => (K(), Fe(pl(!T(i) && T(o) ? "span" : "label"), {
                class: V(T(g)),
                "aria-controls": x.indeterminate ? x.ariaControls : null,
                onClick: T(m)
            }, {
                default: Re(() => {
                    var w, c, y, C;
                    return [se("span", {
                        class: V(T(b))
                    }, [x.trueValue || x.falseValue || x.trueLabel || x.falseLabel ? Te((K(), Z("input", {
                        key: 0,
                        id: T(n),
                        "onUpdate:modelValue": v => je(d) ? d.value = v : null,
                        class: V(T(f).e("original")),
                        type: "checkbox",
                        indeterminate: x.indeterminate,
                        name: x.name,
                        tabindex: x.tabindex,
                        disabled: T(r),
                        "true-value": (c = (w = x.trueValue) != null ? w : x.trueLabel) != null ? c : !0,
                        "false-value": (C = (y = x.falseValue) != null ? y : x.falseLabel) != null ? C : !1,
                        onChange: T(p),
                        onFocus: v => a.value = !0,
                        onBlur: v => a.value = !1,
                        onClick: ot(() => {}, ["stop"])
                    }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                        [st, T(d)]
                    ]) : Te((K(), Z("input", {
                        key: 1,
                        id: T(n),
                        "onUpdate:modelValue": v => je(d) ? d.value = v : null,
                        class: V(T(f).e("original")),
                        type: "checkbox",
                        indeterminate: x.indeterminate,
                        disabled: T(r),
                        value: T(h),
                        name: x.name,
                        tabindex: x.tabindex,
                        onChange: T(p),
                        onFocus: v => a.value = !0,
                        onBlur: v => a.value = !1,
                        onClick: ot(() => {}, ["stop"])
                    }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [
                        [st, T(d)]
                    ]), se("span", {
                        class: V(T(f).e("inner"))
                    }, null, 2)], 2), T(i) ? (K(), Z("span", {
                        key: 0,
                        class: V(T(f).e("label"))
                    }, [ye(x.$slots, "default"), x.$slots.default ? Se("v-if", !0) : (K(), Z(rt, {
                        key: 0
                    }, [ht(ke(x.label), 1)], 64))], 2)) : Se("v-if", !0)]
                }),
                _: 3
            }, 8, ["class", "aria-controls", "onClick"]))
        }
    });
var Ia = Ie(Va, [
    ["__file", "checkbox.vue"]
]);
const za = fe({
        name: "ElCheckboxButton"
    }),
    Ka = fe({
        ...za,
        props: Vl,
        emits: Il,
        setup(e) {
            const t = e,
                l = vl(),
                {
                    isFocused: n,
                    isChecked: o,
                    isDisabled: s,
                    checkboxButtonSize: r,
                    model: a,
                    actualValue: u,
                    handleChange: i
                } = zl(t, l),
                d = re(ze, void 0),
                h = he("checkbox"),
                p = M(() => {
                    var f, g, b, x;
                    const E = (g = (f = d == null ? void 0 : d.fill) == null ? void 0 : f.value) != null ? g : "";
                    return {
                        backgroundColor: E,
                        borderColor: E,
                        color: (x = (b = d == null ? void 0 : d.textColor) == null ? void 0 : b.value) != null ? x : "",
                        boxShadow: E ? `-1px 0 0 0 ${E}` : void 0
                    }
                }),
                m = M(() => [h.b("button"), h.bm("button", r.value), h.is("disabled", s.value), h.is("checked", o.value), h.is("focus", n.value)]);
            return (f, g) => {
                var b, x, E, w;
                return K(), Z("label", {
                    class: V(T(m))
                }, [f.trueValue || f.falseValue || f.trueLabel || f.falseLabel ? Te((K(), Z("input", {
                    key: 0,
                    "onUpdate:modelValue": c => je(a) ? a.value = c : null,
                    class: V(T(h).be("button", "original")),
                    type: "checkbox",
                    name: f.name,
                    tabindex: f.tabindex,
                    disabled: T(s),
                    "true-value": (x = (b = f.trueValue) != null ? b : f.trueLabel) != null ? x : !0,
                    "false-value": (w = (E = f.falseValue) != null ? E : f.falseLabel) != null ? w : !1,
                    onChange: T(i),
                    onFocus: c => n.value = !0,
                    onBlur: c => n.value = !1,
                    onClick: ot(() => {}, ["stop"])
                }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                    [st, T(a)]
                ]) : Te((K(), Z("input", {
                    key: 1,
                    "onUpdate:modelValue": c => je(a) ? a.value = c : null,
                    class: V(T(h).be("button", "original")),
                    type: "checkbox",
                    name: f.name,
                    tabindex: f.tabindex,
                    disabled: T(s),
                    value: T(u),
                    onChange: T(i),
                    onFocus: c => n.value = !0,
                    onBlur: c => n.value = !1,
                    onClick: ot(() => {}, ["stop"])
                }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [
                    [st, T(a)]
                ]), f.$slots.default || f.label ? (K(), Z("span", {
                    key: 2,
                    class: V(T(h).be("button", "inner")),
                    style: Pe(T(o) ? T(p) : void 0)
                }, [ye(f.$slots, "default", {}, () => [ht(ke(f.label), 1)])], 6)) : Se("v-if", !0)], 2)
            }
        }
    });
var Kl = Ie(Ka, [
    ["__file", "checkbox-button.vue"]
]);
const Da = Pn({
        modelValue: {
            type: _n(Array),
            default: () => []
        },
        disabled: Boolean,
        min: Number,
        max: Number,
        size: Wt,
        fill: String,
        textColor: String,
        tag: {
            type: String,
            default: "div"
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...cl(["ariaLabel"])
    }),
    Ga = {
        [ft]: e => ee(e),
        change: e => ee(e)
    },
    ja = fe({
        name: "ElCheckboxGroup"
    }),
    Ua = fe({
        ...ja,
        props: Da,
        emits: Ga,
        setup(e, {
            emit: t
        }) {
            const l = e,
                n = he("checkbox"),
                {
                    formItem: o
                } = Ht(),
                {
                    inputId: s,
                    isLabeledByFormItem: r
                } = hl(l, {
                    formItemContext: o
                }),
                a = async i => {
                    t(ft, i), await Me(), t(yt, i)
                }, u = M({
                    get() {
                        return l.modelValue
                    },
                    set(i) {
                        a(i)
                    }
                });
            return ml(ze, {
                ...Bn(gl(l), ["size", "min", "max", "disabled", "validateEvent", "fill", "textColor"]),
                modelValue: u,
                changeEvent: a
            }), de(() => l.modelValue, () => {
                l.validateEvent && (o == null || o.validate("change").catch(i => fl()))
            }), (i, d) => {
                var h;
                return K(), Fe(pl(i.tag), {
                    id: T(s),
                    class: V(T(n).b("group")),
                    role: "group",
                    "aria-label": T(r) ? void 0 : i.ariaLabel || "checkbox-group",
                    "aria-labelledby": T(r) ? (h = T(o)) == null ? void 0 : h.labelId : void 0
                }, {
                    default: Re(() => [ye(i.$slots, "default")]),
                    _: 3
                }, 8, ["id", "class", "aria-label", "aria-labelledby"])
            }
        }
    });
var Dl = Ie(Ua, [
    ["__file", "checkbox-group.vue"]
]);
const Be = bl(Ia, {
    CheckboxButton: Kl,
    CheckboxGroup: Dl
});
At(Kl);
At(Dl);
const Ne = new Map;
if (Ae) {
    let e;
    document.addEventListener("mousedown", t => e = t), document.addEventListener("mouseup", t => {
        if (e) {
            for (const l of Ne.values())
                for (const {
                        documentHandler: n
                    }
                    of l) n(t, e);
            e = void 0
        }
    })
}

function Qt(e, t) {
    let l = [];
    return ee(t.arg) ? l = t.arg : yl(t.arg) && l.push(t.arg),
        function (n, o) {
            const s = t.instance.popperRef,
                r = n.target,
                a = o == null ? void 0 : o.target,
                u = !t || !t.instance,
                i = !r || !a,
                d = e.contains(r) || e.contains(a),
                h = e === r,
                p = l.length && l.some(f => f == null ? void 0 : f.contains(r)) || l.length && l.includes(a),
                m = s && (s.contains(r) || s.contains(a));
            u || i || d || h || p || m || t.value(n, o)
        }
}
const Ya = {
        beforeMount(e, t) {
            Ne.has(e) || Ne.set(e, []), Ne.get(e).push({
                documentHandler: Qt(e, t),
                bindingFn: t.value
            })
        },
        updated(e, t) {
            Ne.has(e) || Ne.set(e, []);
            const l = Ne.get(e),
                n = l.findIndex(s => s.bindingFn === t.oldValue),
                o = {
                    documentHandler: Qt(e, t),
                    bindingFn: t.value
                };
            n >= 0 ? l.splice(n, 1, o) : l.push(o)
        },
        unmounted(e) {
            Ne.delete(e)
        }
    },
    mt = function (e) {
        var t;
        return (t = e.target) == null ? void 0 : t.closest("td")
    },
    qa = function (e, t, l, n, o) {
        if (!t && !n && (!o || ee(o) && !o.length)) return e;
        ce(l) ? l = l === "descending" ? -1 : 1 : l = l && l < 0 ? -1 : 1;
        const s = n ? null : function (a, u) {
                return o ? _l(Ml(o), i => ce(i) ? bt(a, i) : i(a, u, e)) : (t !== "$key" && Ge(a) && "$value" in a && (a = a.$value), [Ge(a) ? t ? bt(a, t) : null : a])
            },
            r = function (a, u) {
                var i, d, h, p, m, f;
                if (n) return n(a.value, u.value);
                for (let g = 0, b = (d = (i = a.key) == null ? void 0 : i.length) != null ? d : 0; g < b; g++) {
                    if (((h = a.key) == null ? void 0 : h[g]) < ((p = u.key) == null ? void 0 : p[g])) return -1;
                    if (((m = a.key) == null ? void 0 : m[g]) > ((f = u.key) == null ? void 0 : f[g])) return 1
                }
                return 0
            };
        return e.map((a, u) => ({
            value: a,
            index: u,
            key: s ? s(a, u) : null
        })).sort((a, u) => {
            let i = r(a, u);
            return i || (i = a.index - u.index), i * +l
        }).map(a => a.value)
    },
    Gl = function (e, t) {
        let l = null;
        return e.columns.forEach(n => {
            n.id === t && (l = n)
        }), l
    },
    Xa = function (e, t) {
        let l = null;
        for (let n = 0; n < e.columns.length; n++) {
            const o = e.columns[n];
            if (o.columnKey === t) {
                l = o;
                break
            }
        }
        return l || Vn("ElTable", `No column matching with column-key: ${t}`), l
    },
    Zt = function (e, t, l) {
        const n = (t.className || "").match(new RegExp(`${l}-table_[^\\s]+`, "gm"));
        return n ? Gl(e, n[0]) : null
    },
    ae = (e, t, l = !1) => {
        if (!e) throw new Error("Row is required when get row identity");
        if (ce(t)) {
            if (!t.includes(".")) return l ? e[t] : `${e[t]}`;
            const n = t.split(".");
            let o = e;
            for (const s of n) o = o[s];
            return l ? o : `${o}`
        } else if (pe(t)) return t.call(null, e);
        return ""
    },
    _e = function (e, t, l = !1, n = "children") {
        const o = e || [],
            s = {};
        return o.forEach((r, a) => {
            if (s[ae(r, t)] = {
                    row: r,
                    index: a
                }, l) {
                const u = r[n];
                ee(u) && Object.assign(s, _e(u, t, !0, n))
            }
        }), s
    };

function Qa(e, t) {
    const l = {};
    let n;
    for (n in e) l[n] = e[n];
    for (n in t)
        if (Ue(t, n)) {
            const o = t[n];
            me(o) || (l[n] = o)
        } return l
}

function _t(e) {
    return e === "" || me(e) || (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e
}

function jl(e) {
    return e === "" || me(e) || (e = _t(e), Number.isNaN(e) && (e = 80)), e
}

function Za(e) {
    return Oe(e) ? e : ce(e) ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null
}

function Ja(...e) {
    return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, l) => (...n) => t(l(...n)))
}

function dt(e, t, l, n, o, s, r) {
    let a = s ?? 0,
        u = !1;
    const d = (() => {
            if (!r) return e.indexOf(t);
            const g = ae(t, r);
            return e.findIndex(b => ae(b, r) === g)
        })(),
        h = d !== -1,
        p = o == null ? void 0 : o.call(null, t, a),
        m = g => {
            g === "add" ? e.push(t) : e.splice(d, 1), u = !0
        },
        f = g => {
            let b = 0;
            const x = (n == null ? void 0 : n.children) && g[n.children];
            return x && ee(x) && (b += x.length, x.forEach(E => {
                b += f(E)
            })), b
        };
    return (!o || p) && (xe(l) ? l && !h ? m("add") : !l && h && m("remove") : m(h ? "remove" : "add")), !(n != null && n.checkStrictly) && (n != null && n.children) && ee(t[n.children]) && t[n.children].forEach(g => {
        const b = dt(e, g, l ?? !h, n, o, a + 1, r);
        a += f(g) + 1, b && (u = b)
    }), u
}

function eo(e, t, l = "children", n = "hasChildren", o = !1) {
    const s = a => !(ee(a) && a.length);

    function r(a, u, i) {
        t(a, u, i), u.forEach(d => {
            if (d[n] && o) {
                t(d, null, i + 1);
                return
            }
            const h = d[l];
            s(h) || r(d, h, i + 1)
        })
    }
    e.forEach(a => {
        if (a[n] && o) {
            t(a, null, 0);
            return
        }
        const u = a[l];
        s(u) || r(a, u, 0)
    })
}
const to = (e, t, l, n) => {
    const o = {
            strategy: "fixed",
            ...e.popperOptions
        },
        s = pe(n == null ? void 0 : n.tooltipFormatter) ? n.tooltipFormatter({
            row: l,
            column: n,
            cellValue: Cl(l, n.property).value
        }) : void 0;
    return In(s) ? {
        slotContent: s,
        content: null,
        ...e,
        popperOptions: o
    } : {
        slotContent: null,
        content: s ?? t,
        ...e,
        popperOptions: o
    }
};
let ue = null;

function lo(e, t, l, n, o, s) {
    var r;
    const a = to(e, t, l, n),
        u = {
            ...a,
            slotContent: void 0
        };
    if ((ue == null ? void 0 : ue.trigger) === o) {
        const f = (r = ue.vm) == null ? void 0 : r.component;
        Bl(f == null ? void 0 : f.props, u), f && a.slotContent && (f.slots.content = () => [a.slotContent]);
        return
    }
    ue == null || ue();
    const i = s == null ? void 0 : s.refs.tableWrapper,
        d = i == null ? void 0 : i.dataset.prefix,
        h = be(Nl, {
            virtualTriggering: !0,
            virtualRef: o,
            appendTo: i,
            placement: "top",
            transition: "none",
            offset: 0,
            hideAfter: 0,
            ...u
        }, a.slotContent ? {
            content: () => a.slotContent
        } : void 0);
    h.appContext = {
        ...s.appContext,
        ...s
    };
    const p = document.createElement("div");
    jt(h, p), h.component.exposed.onOpen();
    const m = i == null ? void 0 : i.querySelector(`.${d}-scrollbar__wrap`);
    ue = () => {
        jt(null, p), m == null || m.removeEventListener("scroll", ue), ue = null
    }, ue.trigger = o ?? void 0, ue.vm = h, m == null || m.addEventListener("scroll", ue)
}

function Ul(e) {
    return e.children ? _l(e.children, Ul) : [e]
}

function Jt(e, t) {
    return e + t.colSpan
}
const Yl = (e, t, l, n) => {
        let o = 0,
            s = e;
        const r = l.states.columns.value;
        if (n) {
            const u = Ul(n[e]);
            o = r.slice(0, r.indexOf(u[0])).reduce(Jt, 0), s = o + u.reduce(Jt, 0) - 1
        } else o = e;
        let a;
        switch (t) {
            case "left":
                s < l.states.fixedLeafColumnsLength.value && (a = "left");
                break;
            case "right":
                o >= r.length - l.states.rightFixedLeafColumnsLength.value && (a = "right");
                break;
            default:
                s < l.states.fixedLeafColumnsLength.value ? a = "left" : o >= r.length - l.states.rightFixedLeafColumnsLength.value && (a = "right")
        }
        return a ? {
            direction: a,
            start: o,
            after: s
        } : {}
    },
    Bt = (e, t, l, n, o, s = 0) => {
        const r = [],
            {
                direction: a,
                start: u,
                after: i
            } = Yl(t, l, n, o);
        if (a) {
            const d = a === "left";
            r.push(`${e}-fixed-column--${a}`), d && i + s === n.states.fixedLeafColumnsLength.value - 1 ? r.push("is-last-column") : !d && u - s === n.states.columns.value.length - n.states.rightFixedLeafColumnsLength.value && r.push("is-first-column")
        }
        return r
    };

function el(e, t) {
    return e + (Xe(t.realWidth) || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth)
}
const Vt = (e, t, l, n) => {
        const {
            direction: o,
            start: s = 0,
            after: r = 0
        } = Yl(e, t, l, n);
        if (!o) return;
        const a = {},
            u = o === "left",
            i = l.states.columns.value;
        return u ? a.left = i.slice(0, s).reduce(el, 0) : a.right = i.slice(r + 1).reverse().reduce(el, 0), a
    },
    Ve = (e, t) => {
        e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`))
    };

function no(e) {
    const t = oe(),
        l = L(!1),
        n = L([]);
    return {
        updateExpandRows: () => {
            const u = e.data.value || [],
                i = e.rowKey.value;
            if (l.value) n.value = u.slice();
            else if (i) {
                const d = _e(n.value, i);
                n.value = u.reduce((h, p) => {
                    const m = ae(p, i);
                    return d[m] && h.push(p), h
                }, [])
            } else n.value = []
        },
        toggleRowExpansion: (u, i) => {
            dt(n.value, u, i, void 0, void 0, void 0, e.rowKey.value) && t.emit("expand-change", u, n.value.slice())
        },
        setExpandRowKeys: u => {
            t.store.assertRowKey();
            const i = e.data.value || [],
                d = e.rowKey.value,
                h = _e(i, d);
            n.value = u.reduce((p, m) => {
                const f = h[m];
                return f && p.push(f.row), p
            }, [])
        },
        isRowExpanded: u => {
            const i = e.rowKey.value;
            return i ? !!_e(n.value, i)[ae(u, i)] : n.value.includes(u)
        },
        states: {
            expandRows: n,
            defaultExpandAll: l
        }
    }
}

function ao(e) {
    const t = oe(),
        l = L(null),
        n = L(null),
        o = i => {
            t.store.assertRowKey(), l.value = i, r(i)
        },
        s = () => {
            l.value = null
        },
        r = i => {
            var d;
            const {
                data: h,
                rowKey: p
            } = e;
            let m = null;
            p.value && (m = (d = (T(h) || []).find(f => ae(f, p.value) === i)) != null ? d : null), n.value = m ?? null, t.emit("current-change", n.value, null)
        };
    return {
        setCurrentRowKey: o,
        restoreCurrentRowKey: s,
        setCurrentRowByKey: r,
        updateCurrentRow: i => {
            const d = n.value;
            if (i && i !== d) {
                n.value = i, t.emit("current-change", n.value, d);
                return
            }!i && d && (n.value = null, t.emit("current-change", null, d))
        },
        updateCurrentRowData: () => {
            const i = e.rowKey.value,
                d = e.data.value || [],
                h = n.value;
            if (h && !d.includes(h)) {
                if (i) {
                    const p = ae(h, i);
                    r(p)
                } else n.value = null;
                Xe(n.value) && t.emit("current-change", null, h)
            } else l.value && (r(l.value), s())
        },
        states: {
            _currentRowKey: l,
            currentRow: n
        }
    }
}

function oo(e) {
    const t = L([]),
        l = L({}),
        n = L(16),
        o = L(!1),
        s = L({}),
        r = L("hasChildren"),
        a = L("children"),
        u = L(!1),
        i = oe(),
        d = M(() => {
            if (!e.rowKey.value) return {};
            const c = e.data.value || [];
            return p(c)
        }),
        h = M(() => {
            const c = e.rowKey.value,
                y = Object.keys(s.value),
                C = {};
            return y.length && y.forEach(v => {
                if (s.value[v].length) {
                    const S = {
                        children: []
                    };
                    s.value[v].forEach(N => {
                        const W = ae(N, c);
                        S.children.push(W), N[r.value] && !C[W] && (C[W] = {
                            children: []
                        })
                    }), C[v] = S
                }
            }), C
        }),
        p = c => {
            const y = e.rowKey.value,
                C = new Map;
            return eo(c, (v, S, N) => {
                const W = ae(v, y, !0);
                ee(S) ? C.set(W, {
                    children: S.map(A => A[y]),
                    level: N
                }) : o.value && C.set(W, {
                    children: [],
                    lazy: !0,
                    level: N
                })
            }, a.value, r.value, o.value), C
        },
        m = (c = !1, y) => {
            var C, v;
            y || (y = (C = i.store) == null ? void 0 : C.states.defaultExpandAll.value);
            const S = d.value,
                N = h.value,
                W = {};
            if (S instanceof Map && S.size) {
                const A = T(l),
                    H = [],
                    D = (z, G) => {
                        if (c) return t.value ? y || t.value.includes(G) : !!(y || z != null && z.expanded); {
                            const k = y || t.value && t.value.includes(G);
                            return !!(z != null && z.expanded || k)
                        }
                    };
                S.forEach((z, G) => {
                    const k = A[G],
                        O = {
                            ...S.get(G)
                        };
                    if (O.expanded = D(k, G), O.lazy) {
                        const {
                            loaded: R = !1,
                            loading: $ = !1
                        } = k || {};
                        O.loaded = !!R, O.loading = !!$, H.push(G)
                    }
                    W[G] = O
                });
                const Y = Object.keys(N);
                o.value && Y.length && H.length && Y.forEach(z => {
                    var G;
                    const k = A[z],
                        O = N[z].children;
                    if (H.includes(z)) {
                        if (((G = W[z].children) == null ? void 0 : G.length) !== 0) throw new Error("[ElTable]children must be an empty array.");
                        W[z].children = O
                    } else {
                        const {
                            loaded: R = !1,
                            loading: $ = !1
                        } = k || {};
                        W[z] = {
                            lazy: !0,
                            loaded: !!R,
                            loading: !!$,
                            expanded: D(k, z),
                            children: O,
                            level: void 0
                        }
                    }
                })
            }
            l.value = W, (v = i.store) == null || v.updateTableScrollY()
        };
    de(() => t.value, () => {
        m(!0)
    }), de(() => d.value, () => {
        m()
    }), de(() => h.value, () => {
        m()
    });
    const f = c => {
            t.value = c, m()
        },
        g = c => o.value && c && "loaded" in c && !c.loaded,
        b = (c, y) => {
            i.store.assertRowKey();
            const C = e.rowKey.value,
                v = ae(c, C),
                S = v && l.value[v];
            if (v && S && "expanded" in S) {
                const N = S.expanded;
                y = me(y) ? !S.expanded : y, l.value[v].expanded = y, N !== y && i.emit("expand-change", c, y), g(S) && E(c, v, S), i.store.updateTableScrollY()
            }
        },
        x = c => {
            i.store.assertRowKey();
            const y = e.rowKey.value,
                C = ae(c, y),
                v = l.value[C];
            g(v) ? E(c, C, v) : b(c, void 0)
        },
        E = (c, y, C) => {
            const {
                load: v
            } = i.props;
            v && !l.value[y].loaded && (l.value[y].loading = !0, v(c, C, S => {
                if (!ee(S)) throw new TypeError("[ElTable] data must be an array");
                l.value[y].loading = !1, l.value[y].loaded = !0, l.value[y].expanded = !0, S.length && (s.value[y] = S), i.emit("expand-change", c, !0)
            }))
        };
    return {
        loadData: E,
        loadOrToggle: x,
        toggleTreeExpansion: b,
        updateTreeExpandKeys: f,
        updateTreeData: m,
        updateKeyChildren: (c, y) => {
            const {
                lazy: C,
                rowKey: v
            } = i.props;
            if (C) {
                if (!v) throw new Error("[Table] rowKey is required in updateKeyChild");
                s.value[c] && (s.value[c] = y)
            }
        },
        normalize: p,
        states: {
            expandRowKeys: t,
            treeData: l,
            indent: n,
            lazy: o,
            lazyTreeNodeMap: s,
            lazyColumnIdentifier: r,
            childrenColumnName: a,
            checkStrictly: u
        }
    }
}
const so = (e, t) => {
        const l = t.sortingColumn;
        return !l || ce(l.sortable) ? e : qa(e, t.sortProp, t.sortOrder, l.sortMethod, l.sortBy)
    },
    et = e => {
        const t = [];
        return e.forEach(l => {
            l.children && l.children.length > 0 ? t.push.apply(t, et(l.children)) : t.push(l)
        }), t
    };

function ro() {
    var e;
    const t = oe(),
        {
            size: l
        } = gl((e = t.proxy) == null ? void 0 : e.$props),
        n = L(null),
        o = L([]),
        s = L([]),
        r = L(!1),
        a = L([]),
        u = L([]),
        i = L([]),
        d = L([]),
        h = L([]),
        p = L([]),
        m = L([]),
        f = L([]),
        g = [],
        b = L(0),
        x = L(0),
        E = L(0),
        w = L(!1),
        c = L([]),
        y = L(!1),
        C = L(!1),
        v = L(null),
        S = L({}),
        N = L(null),
        W = L(null),
        A = L(null),
        H = L(null),
        D = L(null),
        Y = M(() => n.value ? _e(c.value, n.value) : void 0);
    de(o, () => {
        var F;
        t.state && (O(!1), t.props.tableLayout === "auto" && ((F = t.refs.tableHeaderRef) == null || F.updateFixedColumnStyle()))
    }, {
        deep: !0
    });
    const z = () => {
            if (!n.value) throw new Error("[ElTable] prop row-key is required")
        },
        G = F => {
            var _;
            (_ = F.children) == null || _.forEach(I => {
                I.fixed = F.fixed, G(I)
            })
        },
        k = () => {
            a.value.forEach(X => {
                G(X)
            }), d.value = a.value.filter(X => [!0, "left"].includes(X.fixed));
            const F = a.value.find(X => X.type === "selection");
            let _;
            F && F.fixed !== "right" && !d.value.includes(F) && a.value.indexOf(F) === 0 && d.value.length && (d.value.unshift(F), _ = !0), h.value = a.value.filter(X => X.fixed === "right");
            const I = a.value.filter(X => (_ ? X.type !== "selection" : !0) && !X.fixed);
            u.value = Array.from(d.value).concat(I).concat(h.value);
            const B = et(I),
                j = et(d.value),
                U = et(h.value);
            b.value = B.length, x.value = j.length, E.value = U.length, i.value = Array.from(j).concat(B).concat(U), r.value = d.value.length > 0 || h.value.length > 0
        },
        O = (F, _ = !1) => {
            F && k(), _ ? t.state.doLayout() : t.state.debouncedUpdateLayout()
        },
        R = F => Y.value ? !!Y.value[ae(F, n.value)] : c.value.includes(F),
        $ = () => {
            w.value = !1;
            const F = c.value;
            c.value = [], F.length && t.emit("selection-change", [])
        },
        q = () => {
            var F, _;
            let I;
            if (n.value) {
                I = [];
                const B = (_ = (F = t == null ? void 0 : t.store) == null ? void 0 : F.states) == null ? void 0 : _.childrenColumnName.value,
                    j = _e(o.value, n.value, !0, B);
                for (const U in Y.value) Ue(Y.value, U) && !j[U] && I.push(Y.value[U].row)
            } else I = c.value.filter(B => !o.value.includes(B));
            if (I.length) {
                const B = c.value.filter(j => !I.includes(j));
                c.value = B, t.emit("selection-change", B.slice())
            }
        },
        Q = () => (c.value || []).slice(),
        J = (F, _, I = !0, B = !1) => {
            var j, U, X, Ee;
            const Le = {
                children: (U = (j = t == null ? void 0 : t.store) == null ? void 0 : j.states) == null ? void 0 : U.childrenColumnName.value,
                checkStrictly: (Ee = (X = t == null ? void 0 : t.store) == null ? void 0 : X.states) == null ? void 0 : Ee.checkStrictly.value
            };
            if (dt(c.value, F, _, Le, B ? void 0 : v.value, o.value.indexOf(F), n.value)) {
                const Je = (c.value || []).slice();
                I && t.emit("select", Je, F), t.emit("selection-change", Je)
            }
        },
        ne = () => {
            var F, _;
            const I = C.value ? !w.value : !(w.value || c.value.length);
            w.value = I;
            let B = !1,
                j = 0;
            const U = (_ = (F = t == null ? void 0 : t.store) == null ? void 0 : F.states) == null ? void 0 : _.rowKey.value,
                {
                    childrenColumnName: X
                } = t.store.states,
                Ee = {
                    children: X.value,
                    checkStrictly: !1
                };
            o.value.forEach((Le, Ze) => {
                const Je = Ze + j;
                dt(c.value, Le, I, Ee, v.value, Je, U) && (B = !0), j += te(ae(Le, U))
            }), B && t.emit("selection-change", c.value ? c.value.slice() : []), t.emit("select-all", (c.value || []).slice())
        },
        ge = () => {
            var F;
            if (((F = o.value) == null ? void 0 : F.length) === 0) {
                w.value = !1;
                return
            }
            const {
                childrenColumnName: _
            } = t.store.states;
            let I = 0,
                B = 0;
            const j = X => {
                    var Ee;
                    for (const Le of X) {
                        const Ze = v.value && v.value.call(null, Le, I);
                        if (R(Le)) B++;
                        else if (!v.value || Ze) return !1;
                        if (I++, (Ee = Le[_.value]) != null && Ee.length && !j(Le[_.value])) return !1
                    }
                    return !0
                },
                U = j(o.value || []);
            w.value = B === 0 ? !1 : U
        },
        te = F => {
            var _;
            if (!t || !t.store) return 0;
            const {
                treeData: I
            } = t.store.states;
            let B = 0;
            const j = (_ = I.value[F]) == null ? void 0 : _.children;
            return j && (B += j.length, j.forEach(U => {
                B += te(U)
            })), B
        },
        we = (F, _) => {
            const I = {};
            return Ml(F).forEach(B => {
                S.value[B.id] = _, I[B.columnKey || B.id] = _
            }), I
        },
        le = (F, _, I) => {
            W.value && W.value !== F && (W.value.order = null), W.value = F, A.value = _, H.value = I
        },
        $e = () => {
            let F = T(s);
            Object.keys(S.value).forEach(_ => {
                const I = S.value[_];
                if (!I || I.length === 0) return;
                const B = Gl({
                    columns: i.value
                }, _);
                B && B.filterMethod && (F = F.filter(j => I.some(U => B.filterMethod.call(null, U, j, B))))
            }), N.value = F
        },
        Qe = () => {
            var F;
            o.value = so((F = N.value) != null ? F : [], {
                sortingColumn: W.value,
                sortProp: A.value,
                sortOrder: H.value
            })
        },
        un = (F = void 0) => {
            F != null && F.filter || $e(), Qe()
        },
        dn = F => {
            const {
                tableHeaderRef: _
            } = t.refs;
            if (!_) return;
            const I = Object.assign({}, _.filterPanels),
                B = Object.keys(I);
            if (B.length)
                if (ce(F) && (F = [F]), ee(F)) {
                    const j = F.map(U => Xa({
                        columns: i.value
                    }, U));
                    B.forEach(U => {
                        const X = j.find(Ee => Ee.id === U);
                        X && (X.filteredValue = [])
                    }), t.store.commit("filterChange", {
                        column: j,
                        values: [],
                        silent: !0,
                        multi: !0
                    })
                } else B.forEach(j => {
                    const U = i.value.find(X => X.id === j);
                    U && (U.filteredValue = [])
                }), S.value = {}, t.store.commit("filterChange", {
                    column: {},
                    values: [],
                    silent: !0
                })
        },
        cn = () => {
            W.value && (le(null, null, null), t.store.commit("changeSortCondition", {
                silent: !0
            }))
        },
        {
            setExpandRowKeys: fn,
            toggleRowExpansion: Kt,
            updateExpandRows: hn,
            states: vn,
            isRowExpanded: pn
        } = no({
            data: o,
            rowKey: n
        }),
        {
            updateTreeExpandKeys: mn,
            toggleTreeExpansion: gn,
            updateTreeData: bn,
            updateKeyChildren: yn,
            loadOrToggle: Cn,
            states: wn
        } = oo({
            data: o,
            rowKey: n
        }),
        {
            updateCurrentRowData: Sn,
            updateCurrentRow: xn,
            setCurrentRowKey: En,
            states: Ln
        } = ao({
            data: o,
            rowKey: n
        });
    return {
        assertRowKey: z,
        updateColumns: k,
        scheduleLayout: O,
        isSelected: R,
        clearSelection: $,
        cleanSelection: q,
        getSelectionRows: Q,
        toggleRowSelection: J,
        _toggleAllSelection: ne,
        toggleAllSelection: null,
        updateAllSelected: ge,
        updateFilters: we,
        updateCurrentRow: xn,
        updateSort: le,
        execFilter: $e,
        execSort: Qe,
        execQuery: un,
        clearFilter: dn,
        clearSort: cn,
        toggleRowExpansion: Kt,
        setExpandRowKeysAdapter: F => {
            fn(F), mn(F)
        },
        setCurrentRowKey: En,
        toggleRowExpansionAdapter: (F, _) => {
            i.value.some(({
                type: B
            }) => B === "expand") ? Kt(F, _) : gn(F, _)
        },
        isRowExpanded: pn,
        updateExpandRows: hn,
        updateCurrentRowData: Sn,
        loadOrToggle: Cn,
        updateTreeData: bn,
        updateKeyChildren: yn,
        states: {
            tableSize: l,
            rowKey: n,
            data: o,
            _data: s,
            isComplex: r,
            _columns: a,
            originColumns: u,
            columns: i,
            fixedColumns: d,
            rightFixedColumns: h,
            leafColumns: p,
            fixedLeafColumns: m,
            rightFixedLeafColumns: f,
            updateOrderFns: g,
            leafColumnsLength: b,
            fixedLeafColumnsLength: x,
            rightFixedLeafColumnsLength: E,
            isAllSelected: w,
            selection: c,
            reserveSelection: y,
            selectOnIndeterminate: C,
            selectable: v,
            filters: S,
            filteredData: N,
            sortingColumn: W,
            sortProp: A,
            sortOrder: H,
            hoverRow: D,
            ...vn,
            ...wn,
            ...Ln
        }
    }
}

function xt(e, t) {
    return e.map(l => {
        var n;
        return l.id === t.id ? t : ((n = l.children) != null && n.length && (l.children = xt(l.children, t)), l)
    })
}

function Et(e) {
    e.forEach(t => {
        var l, n;
        t.no = (l = t.getColumnIndex) == null ? void 0 : l.call(t), (n = t.children) != null && n.length && Et(t.children)
    }), e.sort((t, l) => t.no - l.no)
}

function io() {
    const e = oe(),
        t = ro();
    return {
        ns: he("table"),
        ...t,
        mutations: {
            setData(r, a) {
                const u = T(r._data) !== a;
                r.data.value = a, r._data.value = a, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), T(r.reserveSelection) ? e.store.assertRowKey() : u ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout()
            },
            insertColumn(r, a, u, i) {
                var d;
                const h = T(r._columns);
                let p = [];
                u ? (u && !u.children && (u.children = []), (d = u.children) == null || d.push(a), p = xt(h, u)) : (h.push(a), p = h), Et(p), r._columns.value = p, r.updateOrderFns.push(i), a.type === "selection" && (r.selectable.value = a.selectable, r.reserveSelection.value = a.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
            },
            updateColumnOrder(r, a) {
                var u;
                ((u = a.getColumnIndex) == null ? void 0 : u.call(a)) !== a.no && (Et(r._columns.value), e.$ready && e.store.updateColumns())
            },
            removeColumn(r, a, u, i) {
                var d;
                const h = T(r._columns) || [];
                if (u)(d = u.children) == null || d.splice(u.children.findIndex(m => m.id === a.id), 1), Me(() => {
                    var m;
                    ((m = u.children) == null ? void 0 : m.length) === 0 && delete u.children
                }), r._columns.value = xt(h, u);
                else {
                    const m = h.indexOf(a);
                    m > -1 && (h.splice(m, 1), r._columns.value = h)
                }
                const p = r.updateOrderFns.indexOf(i);
                p > -1 && r.updateOrderFns.splice(p, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
            },
            sort(r, a) {
                const {
                    prop: u,
                    order: i,
                    init: d
                } = a;
                if (u) {
                    const h = T(r.columns).find(p => p.property === u);
                    h && (h.order = i, e.store.updateSort(h, u, i), e.store.commit("changeSortCondition", {
                        init: d
                    }))
                }
            },
            changeSortCondition(r, a) {
                const {
                    sortingColumn: u,
                    sortProp: i,
                    sortOrder: d
                } = r, h = T(u), p = T(i), m = T(d);
                Xe(m) && (r.sortingColumn.value = null, r.sortProp.value = null);
                const f = {
                    filter: !0
                };
                e.store.execQuery(f), (!a || !(a.silent || a.init)) && e.emit("sort-change", {
                    column: h,
                    prop: p,
                    order: m
                }), e.store.updateTableScrollY()
            },
            filterChange(r, a) {
                const {
                    column: u,
                    values: i,
                    silent: d
                } = a, h = e.store.updateFilters(u, i);
                e.store.execQuery(), d || e.emit("filter-change", h), e.store.updateTableScrollY()
            },
            toggleAllSelection() {
                var r, a;
                (a = (r = e.store).toggleAllSelection) == null || a.call(r)
            },
            rowSelectedChanged(r, a) {
                e.store.toggleRowSelection(a), e.store.updateAllSelected()
            },
            setHoverRow(r, a) {
                r.hoverRow.value = a
            },
            setCurrentRow(r, a) {
                e.store.updateCurrentRow(a)
            }
        },
        commit: function (r, ...a) {
            const u = e.store.mutations;
            if (u[r]) u[r].apply(e, [e.store.states, ...a]);
            else throw new Error(`Action not found: ${r}`)
        },
        updateTableScrollY: function () {
            Me(() => e.layout.updateScrollY.apply(e.layout))
        }
    }
}
const It = {
    rowKey: "rowKey",
    defaultExpandAll: "defaultExpandAll",
    selectOnIndeterminate: "selectOnIndeterminate",
    indent: "indent",
    lazy: "lazy",
    data: "data",
    "treeProps.hasChildren": {
        key: "lazyColumnIdentifier",
        default: "hasChildren"
    },
    "treeProps.children": {
        key: "childrenColumnName",
        default: "children"
    },
    "treeProps.checkStrictly": {
        key: "checkStrictly",
        default: !1
    }
};

function uo(e, t) {
    if (!e) throw new Error("Table is required.");
    const l = io();
    return l.toggleAllSelection = ut(l._toggleAllSelection, 10), Object.keys(It).forEach(n => {
        ql(Xl(t, n), n, l)
    }), co(l, t), l
}

function co(e, t) {
    Object.keys(It).forEach(l => {
        de(() => Xl(t, l), n => {
            ql(n, l, e)
        })
    })
}

function ql(e, t, l) {
    let n = e,
        o = It[t];
    Ge(o) && (n = n || o.default, o = o.key), l.states[o].value = n
}

function Xl(e, t) {
    if (t.includes(".")) {
        const l = t.split(".");
        let n = e;
        return l.forEach(o => {
            n = n[o]
        }), n
    } else return e[t]
}
class fo {
    constructor(t) {
        this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = L(null), this.scrollX = L(!1), this.scrollY = L(!1), this.bodyWidth = L(null), this.fixedWidth = L(null), this.rightFixedWidth = L(null), this.gutterWidth = 0;
        for (const l in t) Ue(t, l) && (je(this[l]) ? this[l].value = t[l] : this[l] = t[l]);
        if (!this.table) throw new Error("Table is required for Table Layout");
        if (!this.store) throw new Error("Store is required for Table Layout")
    }
    updateScrollY() {
        const t = this.height.value;
        if (Xe(t)) return !1;
        const l = this.table.refs.scrollBarRef;
        if (this.table.vnode.el && (l != null && l.wrapRef)) {
            let n = !0;
            const o = this.scrollY.value;
            return n = l.wrapRef.scrollHeight > l.wrapRef.clientHeight, this.scrollY.value = n, o !== n
        }
        return !1
    }
    setHeight(t, l = "height") {
        if (!Ae) return;
        const n = this.table.vnode.el;
        if (t = Za(t), this.height.value = Number(t), !n && (t || t === 0)) {
            Me(() => this.setHeight(t, l));
            return
        }
        n && Oe(t) ? (n.style[l] = `${t}px`, this.updateElsHeight()) : n && ce(t) && (n.style[l] = t, this.updateElsHeight())
    }
    setMaxHeight(t) {
        this.setHeight(t, "max-height")
    }
    getFlattenColumns() {
        const t = [];
        return this.table.store.states.columns.value.forEach(n => {
            n.isColumnGroup ? t.push.apply(t, n.columns) : t.push(n)
        }), t
    }
    updateElsHeight() {
        this.updateScrollY(), this.notifyObservers("scrollable")
    }
    headerDisplayNone(t) {
        if (!t) return !0;
        let l = t;
        for (; l.tagName !== "DIV";) {
            if (getComputedStyle(l).display === "none") return !0;
            l = l.parentElement
        }
        return !1
    }
    updateColumnsWidth() {
        var t;
        if (!Ae) return;
        const l = this.fit,
            n = (t = this.table.vnode.el) == null ? void 0 : t.clientWidth;
        let o = 0;
        const s = this.getFlattenColumns(),
            r = s.filter(i => !Oe(i.width));
        if (s.forEach(i => {
                Oe(i.width) && i.realWidth && (i.realWidth = null)
            }), r.length > 0 && l) {
            if (s.forEach(i => {
                    o += Number(i.width || i.minWidth || 80)
                }), o <= n) {
                this.scrollX.value = !1;
                const i = n - o;
                if (r.length === 1) r[0].realWidth = Number(r[0].minWidth || 80) + i;
                else {
                    const d = r.reduce((m, f) => m + Number(f.minWidth || 80), 0),
                        h = i / d;
                    let p = 0;
                    r.forEach((m, f) => {
                        if (f === 0) return;
                        const g = Math.floor(Number(m.minWidth || 80) * h);
                        p += g, m.realWidth = Number(m.minWidth || 80) + g
                    }), r[0].realWidth = Number(r[0].minWidth || 80) + i - p
                }
            } else this.scrollX.value = !0, r.forEach(i => {
                i.realWidth = Number(i.minWidth)
            });
            this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value
        } else s.forEach(i => {
            !i.width && !i.minWidth ? i.realWidth = 80 : i.realWidth = Number(i.width || i.minWidth), o += i.realWidth
        }), this.scrollX.value = o > n, this.bodyWidth.value = o;
        const a = this.store.states.fixedColumns.value;
        if (a.length > 0) {
            let i = 0;
            a.forEach(d => {
                i += Number(d.realWidth || d.width)
            }), this.fixedWidth.value = i
        }
        const u = this.store.states.rightFixedColumns.value;
        if (u.length > 0) {
            let i = 0;
            u.forEach(d => {
                i += Number(d.realWidth || d.width)
            }), this.rightFixedWidth.value = i
        }
        this.notifyObservers("columns")
    }
    addObserver(t) {
        this.observers.push(t)
    }
    removeObserver(t) {
        const l = this.observers.indexOf(t);
        l !== -1 && this.observers.splice(l, 1)
    }
    notifyObservers(t) {
        this.observers.forEach(n => {
            var o, s;
            switch (t) {
                case "columns":
                    (o = n.state) == null || o.onColumnsChange(this);
                    break;
                case "scrollable":
                    (s = n.state) == null || s.onScrollableChange(this);
                    break;
                default:
                    throw new Error(`Table Layout don't have event ${t}.`)
            }
        })
    }
}
const {
    CheckboxGroup: ho
} = Be, vo = fe({
    name: "ElTableFilterPanel",
    components: {
        ElCheckbox: Be,
        ElCheckboxGroup: ho,
        ElScrollbar: Rl,
        ElTooltip: Nl,
        ElIcon: $t,
        ArrowDown: Kn,
        ArrowUp: zn
    },
    directives: {
        ClickOutside: Ya
    },
    props: {
        placement: {
            type: String,
            default: "bottom-start"
        },
        store: {
            type: Object
        },
        column: {
            type: Object
        },
        upDataColumn: {
            type: Function
        },
        appendTo: Yn.appendTo
    },
    setup(e) {
        const t = oe(),
            {
                t: l
            } = Sl(),
            n = he("table-filter"),
            o = t == null ? void 0 : t.parent;
        e.column && !o.filterPanels.value[e.column.id] && (o.filterPanels.value[e.column.id] = t);
        const s = L(!1),
            r = L(null),
            a = M(() => e.column && e.column.filters),
            u = M(() => e.column && e.column.filterClassName ? `${n.b()} ${e.column.filterClassName}` : n.b()),
            i = M({
                get: () => {
                    var y;
                    return (((y = e.column) == null ? void 0 : y.filteredValue) || [])[0]
                },
                set: y => {
                    d.value && (He(y) ? d.value.splice(0, 1) : d.value.splice(0, 1, y))
                }
            }),
            d = M({
                get() {
                    return e.column ? e.column.filteredValue || [] : []
                },
                set(y) {
                    var C;
                    e.column && ((C = e.upDataColumn) == null || C.call(e, "filteredValue", y))
                }
            }),
            h = M(() => e.column ? e.column.filterMultiple : !0),
            p = y => y.value === i.value,
            m = () => {
                s.value = !1
            },
            f = y => {
                y.stopPropagation(), s.value = !s.value
            },
            g = () => {
                s.value = !1
            },
            b = () => {
                w(d.value), m()
            },
            x = () => {
                d.value = [], w(d.value), m()
            },
            E = y => {
                i.value = y, He(y) ? w([]) : w(d.value), m()
            },
            w = y => {
                var C, v;
                (C = e.store) == null || C.commit("filterChange", {
                    column: e.column,
                    values: y
                }), (v = e.store) == null || v.updateAllSelected()
            };
        de(s, y => {
            var C;
            e.column && ((C = e.upDataColumn) == null || C.call(e, "filterOpened", y))
        }, {
            immediate: !0
        });
        const c = M(() => {
            var y, C;
            return (C = (y = r.value) == null ? void 0 : y.popperRef) == null ? void 0 : C.contentRef
        });
        return {
            tooltipVisible: s,
            multiple: h,
            filterClassName: u,
            filteredValue: d,
            filterValue: i,
            filters: a,
            handleConfirm: b,
            handleReset: x,
            handleSelect: E,
            isPropAbsent: He,
            isActive: p,
            t: l,
            ns: n,
            showFilterPanel: f,
            hideFilterPanel: g,
            popperPaneRef: c,
            tooltip: r
        }
    }
});

function po(e, t, l, n, o, s) {
    const r = ve("el-checkbox"),
        a = ve("el-checkbox-group"),
        u = ve("el-scrollbar"),
        i = ve("arrow-up"),
        d = ve("arrow-down"),
        h = ve("el-icon"),
        p = ve("el-tooltip"),
        m = wl("click-outside");
    return K(), Fe(p, {
        ref: "tooltip",
        visible: e.tooltipVisible,
        offset: 0,
        placement: e.placement,
        "show-arrow": !1,
        "stop-popper-mouse-event": !1,
        teleported: "",
        effect: "light",
        pure: "",
        "popper-class": e.filterClassName,
        persistent: "",
        "append-to": e.appendTo
    }, {
        content: Re(() => [e.multiple ? (K(), Z("div", {
            key: 0
        }, [se("div", {
            class: V(e.ns.e("content"))
        }, [be(u, {
            "wrap-class": e.ns.e("wrap")
        }, {
            default: Re(() => [be(a, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": f => e.filteredValue = f,
                class: V(e.ns.e("checkbox-group"))
            }, {
                default: Re(() => [(K(!0), Z(rt, null, Ut(e.filters, f => (K(), Fe(r, {
                    key: f.value,
                    value: f.value
                }, {
                    default: Re(() => [ht(ke(f.text), 1)]),
                    _: 2
                }, 1032, ["value"]))), 128))]),
                _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "class"])]),
            _: 1
        }, 8, ["wrap-class"])], 2), se("div", {
            class: V(e.ns.e("bottom"))
        }, [se("button", {
            class: V({
                [e.ns.is("disabled")]: e.filteredValue.length === 0
            }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: e.handleConfirm
        }, ke(e.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]), se("button", {
            type: "button",
            onClick: e.handleReset
        }, ke(e.t("el.table.resetFilter")), 9, ["onClick"])], 2)])) : (K(), Z("ul", {
            key: 1,
            class: V(e.ns.e("list"))
        }, [se("li", {
            class: V([e.ns.e("list-item"), {
                [e.ns.is("active")]: e.isPropAbsent(e.filterValue)
            }]),
            onClick: f => e.handleSelect(null)
        }, ke(e.t("el.table.clearFilter")), 11, ["onClick"]), (K(!0), Z(rt, null, Ut(e.filters, f => (K(), Z("li", {
            key: f.value,
            class: V([e.ns.e("list-item"), e.ns.is("active", e.isActive(f))]),
            label: f.value,
            onClick: g => e.handleSelect(f.value)
        }, ke(f.text), 11, ["label", "onClick"]))), 128))], 2))]),
        default: Re(() => [Te((K(), Z("span", {
            class: V([`${e.ns.namespace.value}-table__column-filter-trigger`, `${e.ns.namespace.value}-none-outline`]),
            onClick: e.showFilterPanel
        }, [be(h, null, {
            default: Re(() => [ye(e.$slots, "filter-icon", {}, () => {
                var f;
                return [(f = e.column) != null && f.filterOpened ? (K(), Fe(i, {
                    key: 0
                })) : (K(), Fe(d, {
                    key: 1
                }))]
            })]),
            _: 3
        })], 10, ["onClick"])), [
            [m, e.hideFilterPanel, e.popperPaneRef]
        ])]),
        _: 3
    }, 8, ["visible", "placement", "popper-class", "append-to"])
}
var mo = Ie(vo, [
    ["render", po],
    ["__file", "filter-panel.vue"]
]);

function zt(e) {
    const t = oe();
    xl(() => {
        l.value.addObserver(t)
    }), qe(() => {
        n(l.value), o(l.value)
    }), Dn(() => {
        n(l.value), o(l.value)
    }), Pt(() => {
        l.value.removeObserver(t)
    });
    const l = M(() => {
            const s = e.layout;
            if (!s) throw new Error("Can not find table layout.");
            return s
        }),
        n = s => {
            var r;
            const a = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("colgroup > col")) || [];
            if (!a.length) return;
            const u = s.getFlattenColumns(),
                i = {};
            u.forEach(d => {
                i[d.id] = d
            });
            for (let d = 0, h = a.length; d < h; d++) {
                const p = a[d],
                    m = p.getAttribute("name"),
                    f = i[m];
                f && p.setAttribute("width", f.realWidth || f.width)
            }
        },
        o = s => {
            var r, a;
            const u = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("colgroup > col[name=gutter]")) || [];
            for (let d = 0, h = u.length; d < h; d++) u[d].setAttribute("width", s.scrollY.value ? s.gutterWidth : "0");
            const i = ((a = e.vnode.el) == null ? void 0 : a.querySelectorAll("th.gutter")) || [];
            for (let d = 0, h = i.length; d < h; d++) {
                const p = i[d];
                p.style.width = s.scrollY.value ? `${s.gutterWidth}px` : "0", p.style.display = s.scrollY.value ? "" : "none"
            }
        };
    return {
        tableLayout: l.value,
        onColumnsChange: n,
        onScrollableChange: o
    }
}
const Ce = Symbol("ElTable");

function go(e, t) {
    const l = oe(),
        n = re(Ce),
        o = g => {
            g.stopPropagation()
        },
        s = (g, b) => {
            !b.filters && b.sortable ? f(g, b, !1) : b.filterable && !b.sortable && o(g), n == null || n.emit("header-click", b, g)
        },
        r = (g, b) => {
            n == null || n.emit("header-contextmenu", b, g)
        },
        a = L(null),
        u = L(!1),
        i = L(),
        d = (g, b) => {
            var x, E;
            if (Ae && !(b.children && b.children.length > 0) && a.value && e.border) {
                u.value = !0;
                const w = n;
                t("set-drag-visible", !0);
                const c = w == null ? void 0 : w.vnode.el,
                    y = c == null ? void 0 : c.getBoundingClientRect().left,
                    C = (E = (x = l == null ? void 0 : l.vnode) == null ? void 0 : x.el) == null ? void 0 : E.querySelector(`th.${b.id}`),
                    v = C.getBoundingClientRect(),
                    S = v.left - y + 30;
                it(C, "noclick"), i.value = {
                    startMouseLeft: g.clientX,
                    startLeft: v.right - y,
                    startColumnLeft: v.left - y,
                    tableLeft: y
                };
                const N = w == null ? void 0 : w.refs.resizeProxy;
                N.style.left = `${i.value.startLeft}px`, document.onselectstart = function () {
                    return !1
                }, document.ondragstart = function () {
                    return !1
                };
                const W = H => {
                        const D = H.clientX - i.value.startMouseLeft,
                            Y = i.value.startLeft + D;
                        N.style.left = `${Math.max(S,Y)}px`
                    },
                    A = () => {
                        if (u.value) {
                            const {
                                startColumnLeft: H,
                                startLeft: D
                            } = i.value, z = Number.parseInt(N.style.left, 10) - H;
                            b.width = b.realWidth = z, w == null || w.emit("header-dragend", b.width, D - H, b, g), requestAnimationFrame(() => {
                                e.store.scheduleLayout(!1, !0)
                            }), document.body.style.cursor = "", u.value = !1, a.value = null, i.value = void 0, t("set-drag-visible", !1)
                        }
                        document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", A), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
                            Ye(C, "noclick")
                        }, 0)
                    };
                document.addEventListener("mousemove", W), document.addEventListener("mouseup", A)
            }
        },
        h = (g, b) => {
            var x;
            if (b.children && b.children.length > 0) return;
            const E = g.target;
            if (!yl(E)) return;
            const w = E == null ? void 0 : E.closest("th");
            if (!(!b || !b.resizable || !w) && !u.value && e.border) {
                const c = w.getBoundingClientRect(),
                    y = document.body.style,
                    C = ((x = w.parentNode) == null ? void 0 : x.lastElementChild) === w,
                    v = e.allowDragLastColumn || !C;
                c.width > 12 && c.right - g.clientX < 8 && v ? (y.cursor = "col-resize", Ke(w, "is-sortable") && (w.style.cursor = "col-resize"), a.value = b) : u.value || (y.cursor = "", Ke(w, "is-sortable") && (w.style.cursor = "pointer"), a.value = null)
            }
        },
        p = () => {
            Ae && (document.body.style.cursor = "")
        },
        m = ({
            order: g,
            sortOrders: b
        }) => {
            if (g === "") return b[0];
            const x = b.indexOf(g || null);
            return b[x > b.length - 2 ? 0 : x + 1]
        },
        f = (g, b, x) => {
            var E;
            g.stopPropagation();
            const w = b.order === x ? null : x || m(b),
                c = (E = g.target) == null ? void 0 : E.closest("th");
            if (c && Ke(c, "noclick")) {
                Ye(c, "noclick");
                return
            }
            if (!b.sortable) return;
            const y = g.currentTarget;
            if (["ascending", "descending"].some(W => Ke(y, W) && !b.sortOrders.includes(W))) return;
            const C = e.store.states;
            let v = C.sortProp.value,
                S;
            const N = C.sortingColumn.value;
            (N !== b || N === b && Xe(N.order)) && (N && (N.order = null), C.sortingColumn.value = b, v = b.property), w ? S = b.order = w : S = b.order = null, C.sortProp.value = v, C.sortOrder.value = S, n == null || n.store.commit("changeSortCondition")
        };
    return {
        handleHeaderClick: s,
        handleHeaderContextMenu: r,
        handleMouseDown: d,
        handleMouseMove: h,
        handleMouseOut: p,
        handleSortClick: f,
        handleFilterClick: o
    }
}

function bo(e) {
    const t = re(Ce),
        l = he("table");
    return {
        getHeaderRowStyle: a => {
            const u = t == null ? void 0 : t.props.headerRowStyle;
            return pe(u) ? u.call(null, {
                rowIndex: a
            }) : u
        },
        getHeaderRowClass: a => {
            const u = [],
                i = t == null ? void 0 : t.props.headerRowClassName;
            return ce(i) ? u.push(i) : pe(i) && u.push(i.call(null, {
                rowIndex: a
            })), u.join(" ")
        },
        getHeaderCellStyle: (a, u, i, d) => {
            var h;
            let p = (h = t == null ? void 0 : t.props.headerCellStyle) != null ? h : {};
            pe(p) && (p = p.call(null, {
                rowIndex: a,
                columnIndex: u,
                row: i,
                column: d
            }));
            const m = Vt(u, d.fixed, e.store, i);
            return Ve(m, "left"), Ve(m, "right"), Object.assign({}, p, m)
        },
        getHeaderCellClass: (a, u, i, d) => {
            const h = Bt(l.b(), u, d.fixed, e.store, i),
                p = [d.id, d.order, d.headerAlign, d.className, d.labelClassName, ...h];
            d.children || p.push("is-leaf"), d.sortable && p.push("is-sortable");
            const m = t == null ? void 0 : t.props.headerCellClassName;
            return ce(m) ? p.push(m) : pe(m) && p.push(m.call(null, {
                rowIndex: a,
                columnIndex: u,
                row: i,
                column: d
            })), p.push(l.e("cell")), p.filter(f => !!f).join(" ")
        }
    }
}
const Ql = e => {
        const t = [];
        return e.forEach(l => {
            l.children ? (t.push(l), t.push.apply(t, Ql(l.children))) : t.push(l)
        }), t
    },
    Zl = e => {
        let t = 1;
        const l = (s, r) => {
            if (r && (s.level = r.level + 1, t < s.level && (t = s.level)), s.children) {
                let a = 0;
                s.children.forEach(u => {
                    l(u, s), a += u.colSpan
                }), s.colSpan = a
            } else s.colSpan = 1
        };
        e.forEach(s => {
            s.level = 1, l(s, void 0)
        });
        const n = [];
        for (let s = 0; s < t; s++) n.push([]);
        return Ql(e).forEach(s => {
            s.children ? (s.rowSpan = 1, s.children.forEach(r => r.isSubColumn = !0)) : s.rowSpan = t - s.level + 1, n[s.level - 1].push(s)
        }), n
    };

function yo(e) {
    const t = re(Ce),
        l = M(() => Zl(e.store.states.originColumns.value));
    return {
        isGroup: M(() => {
            const s = l.value.length > 1;
            return s && t && (t.state.isGroup.value = !0), s
        }),
        toggleAllSelection: s => {
            s.stopPropagation(), t == null || t.store.commit("toggleAllSelection")
        },
        columnRows: l
    }
}
var Co = fe({
    name: "ElTableHeader",
    components: {
        ElCheckbox: Be
    },
    props: {
        fixed: {
            type: String,
            default: ""
        },
        store: {
            required: !0,
            type: Object
        },
        border: Boolean,
        defaultSort: {
            type: Object,
            default: () => ({
                prop: "",
                order: ""
            })
        },
        appendFilterPanelTo: {
            type: String
        },
        allowDragLastColumn: {
            type: Boolean
        }
    },
    setup(e, {
        emit: t
    }) {
        const l = oe(),
            n = re(Ce),
            o = he("table"),
            s = L({}),
            {
                onColumnsChange: r,
                onScrollableChange: a
            } = zt(n),
            u = (n == null ? void 0 : n.props.tableLayout) === "auto",
            i = Gn(new Map),
            d = L(),
            h = () => {
                setTimeout(() => {
                    i.size > 0 && (i.forEach((W, A) => {
                        const H = d.value.querySelector(`.${A.replace(/\s/g,".")}`);
                        if (H) {
                            const D = H.getBoundingClientRect().width;
                            W.width = D
                        }
                    }), i.clear())
                })
            };
        de(i, h), qe(async () => {
            await Me(), await Me();
            const {
                prop: W,
                order: A
            } = e.defaultSort;
            n == null || n.store.commit("sort", {
                prop: W,
                order: A,
                init: !0
            }), h()
        });
        const {
            handleHeaderClick: p,
            handleHeaderContextMenu: m,
            handleMouseDown: f,
            handleMouseMove: g,
            handleMouseOut: b,
            handleSortClick: x,
            handleFilterClick: E
        } = go(e, t), {
            getHeaderRowStyle: w,
            getHeaderRowClass: c,
            getHeaderCellStyle: y,
            getHeaderCellClass: C
        } = bo(e), {
            isGroup: v,
            toggleAllSelection: S,
            columnRows: N
        } = yo(e);
        return l.state = {
            onColumnsChange: r,
            onScrollableChange: a
        }, l.filterPanels = s, {
            ns: o,
            filterPanels: s,
            onColumnsChange: r,
            onScrollableChange: a,
            columnRows: N,
            getHeaderRowClass: c,
            getHeaderRowStyle: w,
            getHeaderCellClass: C,
            getHeaderCellStyle: y,
            handleHeaderClick: p,
            handleHeaderContextMenu: m,
            handleMouseDown: f,
            handleMouseMove: g,
            handleMouseOut: b,
            handleSortClick: x,
            handleFilterClick: E,
            isGroup: v,
            toggleAllSelection: S,
            saveIndexSelection: i,
            isTableLayoutAuto: u,
            theadRef: d,
            updateFixedColumnStyle: h
        }
    },
    render() {
        const {
            ns: e,
            isGroup: t,
            columnRows: l,
            getHeaderCellStyle: n,
            getHeaderCellClass: o,
            getHeaderRowClass: s,
            getHeaderRowStyle: r,
            handleHeaderClick: a,
            handleHeaderContextMenu: u,
            handleMouseDown: i,
            handleMouseMove: d,
            handleSortClick: h,
            handleMouseOut: p,
            store: m,
            $parent: f,
            saveIndexSelection: g,
            isTableLayoutAuto: b
        } = this;
        let x = 1;
        return P("thead", {
            ref: "theadRef",
            class: {
                [e.is("group")]: t
            }
        }, l.map((E, w) => P("tr", {
            class: s(w),
            key: w,
            style: r(w)
        }, E.map((c, y) => {
            c.rowSpan > x && (x = c.rowSpan);
            const C = o(w, y, E, c);
            return b && c.fixed && g.set(C, c), P("th", {
                class: C,
                colspan: c.colSpan,
                key: `${c.id}-thead`,
                rowspan: c.rowSpan,
                style: n(w, y, E, c),
                onClick: v => {
                    var S;
                    (S = v.currentTarget) != null && S.classList.contains("noclick") || a(v, c)
                },
                onContextmenu: v => u(v, c),
                onMousedown: v => i(v, c),
                onMousemove: v => d(v, c),
                onMouseout: p
            }, [P("div", {
                class: ["cell", c.filteredValue && c.filteredValue.length > 0 ? "highlight" : ""]
            }, [c.renderHeader ? c.renderHeader({
                column: c,
                $index: y,
                store: m,
                _self: f
            }) : c.label, c.sortable && P("span", {
                onClick: v => h(v, c),
                class: "caret-wrapper"
            }, [P("i", {
                onClick: v => h(v, c, "ascending"),
                class: "sort-caret ascending"
            }), P("i", {
                onClick: v => h(v, c, "descending"),
                class: "sort-caret descending"
            })]), c.filterable && P(mo, {
                store: m,
                placement: c.filterPlacement || "bottom-start",
                appendTo: f == null ? void 0 : f.appendFilterPanelTo,
                column: c,
                upDataColumn: (v, S) => {
                    c[v] = S
                }
            }, {
                "filter-icon": () => c.renderFilterIcon ? c.renderFilterIcon({
                    filterOpened: c.filterOpened
                }) : null
            })])])
        }))))
    }
});

function gt(e, t, l = .03) {
    return e - t > l
}

function wo(e) {
    const t = re(Ce),
        l = L(""),
        n = L(P("div")),
        o = (f, g, b) => {
            var x, E, w;
            const c = t,
                y = mt(f);
            let C = null;
            const v = (x = c == null ? void 0 : c.vnode.el) == null ? void 0 : x.dataset.prefix;
            y && (C = Zt({
                columns: (w = (E = e.store) == null ? void 0 : E.states.columns.value) != null ? w : []
            }, y, v), C && (c == null || c.emit(`cell-${b}`, g, C, y, f))), c == null || c.emit(`row-${b}`, g, C, f)
        },
        s = (f, g) => {
            o(f, g, "dblclick")
        },
        r = (f, g) => {
            var b;
            (b = e.store) == null || b.commit("setCurrentRow", g), o(f, g, "click")
        },
        a = (f, g) => {
            o(f, g, "contextmenu")
        },
        u = ut(f => {
            var g;
            (g = e.store) == null || g.commit("setHoverRow", f)
        }, 30),
        i = ut(() => {
            var f;
            (f = e.store) == null || f.commit("setHoverRow", null)
        }, 30),
        d = f => {
            const g = window.getComputedStyle(f, null),
                b = Number.parseInt(g.paddingLeft, 10) || 0,
                x = Number.parseInt(g.paddingRight, 10) || 0,
                E = Number.parseInt(g.paddingTop, 10) || 0,
                w = Number.parseInt(g.paddingBottom, 10) || 0;
            return {
                left: b,
                right: x,
                top: E,
                bottom: w
            }
        },
        h = (f, g, b) => {
            var x;
            let E = (x = g == null ? void 0 : g.target) == null ? void 0 : x.parentNode;
            for (; f > 1 && (E = E == null ? void 0 : E.nextSibling, !(!E || E.nodeName !== "TR"));) b(E, "hover-row hover-fixed-row"), f--
        };
    return {
        handleDoubleClick: s,
        handleClick: r,
        handleContextMenu: a,
        handleMouseEnter: u,
        handleMouseLeave: i,
        handleCellMouseEnter: (f, g, b) => {
            var x, E, w, c, y, C;
            if (!t) return;
            const v = t,
                S = mt(f),
                N = (x = v == null ? void 0 : v.vnode.el) == null ? void 0 : x.dataset.prefix;
            let W = null;
            if (S) {
                if (W = Zt({
                        columns: (w = (E = e.store) == null ? void 0 : E.states.columns.value) != null ? w : []
                    }, S, N), !W) return;
                S.rowSpan > 1 && h(S.rowSpan, f, it);
                const J = v.hoverState = {
                    cell: S,
                    column: W,
                    row: g
                };
                v == null || v.emit("cell-mouse-enter", J.row, J.column, J.cell, f)
            }
            if (!b) return;
            const A = f.target.querySelector(".cell");
            if (!(Ke(A, `${N}-tooltip`) && A.childNodes.length)) return;
            const H = document.createRange();
            H.setStart(A, 0), H.setEnd(A, A.childNodes.length);
            const {
                width: D,
                height: Y
            } = H.getBoundingClientRect(), {
                width: z,
                height: G
            } = A.getBoundingClientRect(), {
                top: k,
                left: O,
                right: R,
                bottom: $
            } = d(A), q = O + R, Q = k + $;
            gt(D + q, z) || gt(Y + Q, G) || gt(A.scrollWidth, z) ? lo(b, (c = (S == null ? void 0 : S.innerText) || (S == null ? void 0 : S.textContent)) != null ? c : "", g, W, S, v) : ((y = ue) == null ? void 0 : y.trigger) === S && ((C = ue) == null || C())
        },
        handleCellMouseLeave: f => {
            const g = mt(f);
            if (!g) return;
            g.rowSpan > 1 && h(g.rowSpan, f, Ye);
            const b = t == null ? void 0 : t.hoverState;
            t == null || t.emit("cell-mouse-leave", b == null ? void 0 : b.row, b == null ? void 0 : b.column, b == null ? void 0 : b.cell, f)
        },
        tooltipContent: l,
        tooltipTrigger: n
    }
}

function So(e) {
    const t = re(Ce),
        l = he("table");
    return {
        getRowStyle: (i, d) => {
            const h = t == null ? void 0 : t.props.rowStyle;
            return pe(h) ? h.call(null, {
                row: i,
                rowIndex: d
            }) : h || null
        },
        getRowClass: (i, d) => {
            var h;
            const p = [l.e("row")];
            t != null && t.props.highlightCurrentRow && i === ((h = e.store) == null ? void 0 : h.states.currentRow.value) && p.push("current-row"), e.stripe && d % 2 === 1 && p.push(l.em("row", "striped"));
            const m = t == null ? void 0 : t.props.rowClassName;
            return ce(m) ? p.push(m) : pe(m) && p.push(m.call(null, {
                row: i,
                rowIndex: d
            })), p
        },
        getCellStyle: (i, d, h, p) => {
            const m = t == null ? void 0 : t.props.cellStyle;
            let f = m ?? {};
            pe(m) && (f = m.call(null, {
                rowIndex: i,
                columnIndex: d,
                row: h,
                column: p
            }));
            const g = Vt(d, e == null ? void 0 : e.fixed, e.store);
            return Ve(g, "left"), Ve(g, "right"), Object.assign({}, f, g)
        },
        getCellClass: (i, d, h, p, m) => {
            const f = Bt(l.b(), d, e == null ? void 0 : e.fixed, e.store, void 0, m),
                g = [p.id, p.align, p.className, ...f],
                b = t == null ? void 0 : t.props.cellClassName;
            return ce(b) ? g.push(b) : pe(b) && g.push(b.call(null, {
                rowIndex: i,
                columnIndex: d,
                row: h,
                column: p
            })), g.push(l.e("cell")), g.filter(x => !!x).join(" ")
        },
        getSpan: (i, d, h, p) => {
            let m = 1,
                f = 1;
            const g = t == null ? void 0 : t.props.spanMethod;
            if (pe(g)) {
                const b = g({
                    row: i,
                    column: d,
                    rowIndex: h,
                    columnIndex: p
                });
                ee(b) ? (m = b[0], f = b[1]) : Ge(b) && (m = b.rowspan, f = b.colspan)
            }
            return {
                rowspan: m,
                colspan: f
            }
        },
        getColspanRealWidth: (i, d, h) => {
            if (d < 1) return i[h].realWidth;
            const p = i.map(({
                realWidth: m,
                width: f
            }) => m || f).slice(h, h + d);
            return Number(p.reduce((m, f) => Number(m) + Number(f), -1))
        }
    }
}
const xo = fe({
        name: "TableTdWrapper"
    }),
    Eo = fe({
        ...xo,
        props: {
            colspan: {
                type: Number,
                default: 1
            },
            rowspan: {
                type: Number,
                default: 1
            }
        },
        setup(e) {
            return (t, l) => (K(), Z("td", {
                colspan: e.colspan,
                rowspan: e.rowspan
            }, [ye(t.$slots, "default")], 8, ["colspan", "rowspan"]))
        }
    });
var Lo = Ie(Eo, [
    ["__file", "td-wrapper.vue"]
]);

function Ro(e) {
    const t = re(Ce),
        l = he("table"),
        {
            handleDoubleClick: n,
            handleClick: o,
            handleContextMenu: s,
            handleMouseEnter: r,
            handleMouseLeave: a,
            handleCellMouseEnter: u,
            handleCellMouseLeave: i,
            tooltipContent: d,
            tooltipTrigger: h
        } = wo(e),
        {
            getRowStyle: p,
            getRowClass: m,
            getCellStyle: f,
            getCellClass: g,
            getSpan: b,
            getColspanRealWidth: x
        } = So(e),
        E = M(() => {
            var v;
            return (v = e.store) == null ? void 0 : v.states.columns.value.findIndex(({
                type: S
            }) => S === "default")
        }),
        w = (v, S) => {
            var N;
            const W = (N = t == null ? void 0 : t.props) == null ? void 0 : N.rowKey;
            return W ? ae(v, W) : S
        },
        c = (v, S, N, W = !1) => {
            const {
                tooltipEffect: A,
                tooltipOptions: H,
                store: D
            } = e, {
                indent: Y,
                columns: z
            } = D.states, G = m(v, S);
            let k = !0;
            return N && (G.push(l.em("row", `level-${N.level}`)), k = !!N.display), P("tr", {
                style: [k ? null : {
                    display: "none"
                }, p(v, S)],
                class: G,
                key: w(v, S),
                onDblclick: R => n(R, v),
                onClick: R => o(R, v),
                onContextmenu: R => s(R, v),
                onMouseenter: () => r(S),
                onMouseleave: a
            }, z.value.map((R, $) => {
                const {
                    rowspan: q,
                    colspan: Q
                } = b(v, R, S, $);
                if (!q || !Q) return null;
                const J = Object.assign({}, R);
                J.realWidth = x(z.value, Q, $);
                const ne = {
                    store: D,
                    _self: e.context || t,
                    column: J,
                    row: v,
                    $index: S,
                    cellIndex: $,
                    expanded: W
                };
                $ === E.value && N && (ne.treeNode = {
                    indent: N.level && N.level * Y.value,
                    level: N.level
                }, xe(N.expanded) && (ne.treeNode.expanded = N.expanded, "loading" in N && (ne.treeNode.loading = N.loading), "noLazyChildren" in N && (ne.treeNode.noLazyChildren = N.noLazyChildren)));
                const ge = `${w(v,S)},${$}`,
                    te = J.columnKey || J.rawColumnKey || "",
                    we = R.showOverflowTooltip && Bl({
                        effect: A
                    }, H, R.showOverflowTooltip);
                return P(Lo, {
                    style: f(S, $, v, R),
                    class: g(S, $, v, R, Q - 1),
                    key: `${te}${ge}`,
                    rowspan: q,
                    colspan: Q,
                    onMouseenter: le => u(le, v, we),
                    onMouseleave: i
                }, {
                    default: () => y($, R, ne)
                })
            }))
        },
        y = (v, S, N) => S.renderCell(N);
    return {
        wrappedRowRender: (v, S) => {
            const N = e.store,
                {
                    isRowExpanded: W,
                    assertRowKey: A
                } = N,
                {
                    treeData: H,
                    lazyTreeNodeMap: D,
                    childrenColumnName: Y,
                    rowKey: z
                } = N.states,
                G = N.states.columns.value;
            if (G.some(({
                    type: O
                }) => O === "expand")) {
                const O = W(v),
                    R = c(v, S, void 0, O),
                    $ = t == null ? void 0 : t.renderExpanded;
                if (!$) return console.error("[Element Error]renderExpanded is required."), R;
                const q = [
                    [R]
                ];
                return (t.props.preserveExpandedContent || O) && q[0].push(P("tr", {
                    key: `expanded-row__${R.key}`,
                    style: {
                        display: O ? "" : "none"
                    }
                }, [P("td", {
                    colspan: G.length,
                    class: `${l.e("cell")} ${l.e("expanded-cell")}`
                }, [$({
                    row: v,
                    $index: S,
                    store: N,
                    expanded: O
                })])])), q
            } else if (Object.keys(H.value).length) {
                A();
                const O = ae(v, z.value);
                let R = H.value[O],
                    $ = null;
                R && ($ = {
                    expanded: R.expanded,
                    level: R.level,
                    display: !0,
                    noLazyChildren: void 0,
                    loading: void 0
                }, xe(R.lazy) && ($ && xe(R.loaded) && R.loaded && ($.noLazyChildren = !(R.children && R.children.length)), $.loading = R.loading));
                const q = [c(v, S, $ ?? void 0)];
                if (R) {
                    let Q = 0;
                    const J = (ge, te) => {
                        ge && ge.length && te && ge.forEach(we => {
                            const le = {
                                    display: te.display && te.expanded,
                                    level: te.level + 1,
                                    expanded: !1,
                                    noLazyChildren: !1,
                                    loading: !1
                                },
                                $e = ae(we, z.value);
                            if (He($e)) throw new Error("For nested data item, row-key is required.");
                            if (R = {
                                    ...H.value[$e]
                                }, R && (le.expanded = R.expanded, R.level = R.level || le.level, R.display = !!(R.expanded && le.display), xe(R.lazy) && (xe(R.loaded) && R.loaded && (le.noLazyChildren = !(R.children && R.children.length)), le.loading = R.loading)), Q++, q.push(c(we, S + Q, le)), R) {
                                const Qe = D.value[$e] || we[Y.value];
                                J(Qe, R)
                            }
                        })
                    };
                    R.display = !0;
                    const ne = D.value[O] || v[Y.value];
                    J(ne, R)
                }
                return q
            } else return c(v, S, void 0)
        },
        tooltipContent: d,
        tooltipTrigger: h
    }
}
const No = {
    store: {
        required: !0,
        type: Object
    },
    stripe: Boolean,
    tooltipEffect: String,
    tooltipOptions: {
        type: Object
    },
    context: {
        default: () => ({}),
        type: Object
    },
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: {
        type: String,
        default: ""
    },
    highlight: Boolean
};
var ko = fe({
    name: "ElTableBody",
    props: No,
    setup(e) {
        var t;
        const l = oe(),
            n = re(Ce),
            o = he("table"),
            {
                wrappedRowRender: s,
                tooltipContent: r,
                tooltipTrigger: a
            } = Ro(e),
            {
                onColumnsChange: u,
                onScrollableChange: i
            } = zt(n),
            d = [];
        return de((t = e.store) == null ? void 0 : t.states.hoverRow, (h, p) => {
            var m, f;
            const g = l == null ? void 0 : l.vnode.el,
                b = Array.from((g == null ? void 0 : g.children) || []).filter(w => w == null ? void 0 : w.classList.contains(`${o.e("row")}`));
            let x = h;
            const E = (m = b[x]) == null ? void 0 : m.childNodes;
            if (E != null && E.length) {
                let w = 0;
                Array.from(E).reduce((y, C, v) => {
                    var S, N;
                    return ((S = E[v]) == null ? void 0 : S.colSpan) > 1 && (w = (N = E[v]) == null ? void 0 : N.colSpan), C.nodeName !== "TD" && w === 0 && y.push(v), w > 0 && w--, y
                }, []).forEach(y => {
                    var C;
                    for (x = h; x > 0;) {
                        const v = (C = b[x - 1]) == null ? void 0 : C.childNodes;
                        if (v[y] && v[y].nodeName === "TD" && v[y].rowSpan > 1) {
                            it(v[y], "hover-cell"), d.push(v[y]);
                            break
                        }
                        x--
                    }
                })
            } else d.forEach(w => Ye(w, "hover-cell")), d.length = 0;
            !((f = e.store) != null && f.states.isComplex.value) || !Ae || Ha(() => {
                const w = b[p],
                    c = b[h];
                w && !w.classList.contains("hover-fixed-row") && Ye(w, "hover-row"), c && it(c, "hover-row")
            })
        }), Pt(() => {
            var h;
            (h = ue) == null || h()
        }), {
            ns: o,
            onColumnsChange: u,
            onScrollableChange: i,
            wrappedRowRender: s,
            tooltipContent: r,
            tooltipTrigger: a
        }
    },
    render() {
        const {
            wrappedRowRender: e,
            store: t
        } = this, l = (t == null ? void 0 : t.states.data.value) || [];
        return P("tbody", {
            tabIndex: -1
        }, [l.reduce((n, o) => n.concat(e(o, n.length)), [])])
    }
});

function Fo() {
    const e = re(Ce),
        t = e == null ? void 0 : e.store,
        l = M(() => {
            var a;
            return (a = t == null ? void 0 : t.states.fixedLeafColumnsLength.value) != null ? a : 0
        }),
        n = M(() => {
            var a;
            return (a = t == null ? void 0 : t.states.rightFixedColumns.value.length) != null ? a : 0
        }),
        o = M(() => {
            var a;
            return (a = t == null ? void 0 : t.states.columns.value.length) != null ? a : 0
        }),
        s = M(() => {
            var a;
            return (a = t == null ? void 0 : t.states.fixedColumns.value.length) != null ? a : 0
        }),
        r = M(() => {
            var a;
            return (a = t == null ? void 0 : t.states.rightFixedColumns.value.length) != null ? a : 0
        });
    return {
        leftFixedLeafCount: l,
        rightFixedLeafCount: n,
        columnsCount: o,
        leftFixedCount: s,
        rightFixedCount: r,
        columns: M(() => {
            var a;
            return (a = t == null ? void 0 : t.states.columns.value) != null ? a : []
        })
    }
}

function Oo(e) {
    const {
        columns: t
    } = Fo(), l = he("table");
    return {
        getCellClasses: (s, r) => {
            const a = s[r],
                u = [l.e("cell"), a.id, a.align, a.labelClassName, ...Bt(l.b(), r, a.fixed, e.store)];
            return a.className && u.push(a.className), a.children || u.push(l.is("leaf")), u
        },
        getCellStyles: (s, r) => {
            const a = Vt(r, s.fixed, e.store);
            return Ve(a, "left"), Ve(a, "right"), a
        },
        columns: t
    }
}
var To = fe({
    name: "ElTableFooter",
    props: {
        fixed: {
            type: String,
            default: ""
        },
        store: {
            required: !0,
            type: Object
        },
        summaryMethod: Function,
        sumText: String,
        border: Boolean,
        defaultSort: {
            type: Object,
            default: () => ({
                prop: "",
                order: ""
            })
        }
    },
    setup(e) {
        const t = re(Ce),
            l = he("table"),
            {
                getCellClasses: n,
                getCellStyles: o,
                columns: s
            } = Oo(e),
            {
                onScrollableChange: r,
                onColumnsChange: a
            } = zt(t);
        return {
            ns: l,
            onScrollableChange: r,
            onColumnsChange: a,
            getCellClasses: n,
            getCellStyles: o,
            columns: s
        }
    },
    render() {
        const {
            columns: e,
            getCellStyles: t,
            getCellClasses: l,
            summaryMethod: n,
            sumText: o
        } = this, s = this.store.states.data.value;
        let r = [];
        return n ? r = n({
            columns: e,
            data: s
        }) : e.forEach((a, u) => {
            if (u === 0) {
                r[u] = o;
                return
            }
            const i = s.map(m => Number(m[a.property])),
                d = [];
            let h = !0;
            i.forEach(m => {
                if (!Number.isNaN(+m)) {
                    h = !1;
                    const f = `${m}`.split(".")[1];
                    d.push(f ? f.length : 0)
                }
            });
            const p = Math.max.apply(null, d);
            h ? r[u] = "" : r[u] = i.reduce((m, f) => {
                const g = Number(f);
                return Number.isNaN(+g) ? m : Number.parseFloat((m + f).toFixed(Math.min(p, 20)))
            }, 0)
        }), P(P("tfoot", [P("tr", {}, [...e.map((a, u) => P("td", {
            key: u,
            colspan: a.colSpan,
            rowspan: a.rowSpan,
            class: l(e, u),
            style: t(a, u)
        }, [P("div", {
            class: ["cell", a.labelClassName]
        }, [r[u]])]))])]))
    }
});

function Mo(e) {
    return {
        setCurrentRow: h => {
            e.commit("setCurrentRow", h)
        },
        getSelectionRows: () => e.getSelectionRows(),
        toggleRowSelection: (h, p, m = !0) => {
            e.toggleRowSelection(h, p, !1, m), e.updateAllSelected()
        },
        clearSelection: () => {
            e.clearSelection()
        },
        clearFilter: h => {
            e.clearFilter(h)
        },
        toggleAllSelection: () => {
            e.commit("toggleAllSelection")
        },
        toggleRowExpansion: (h, p) => {
            e.toggleRowExpansionAdapter(h, p)
        },
        clearSort: () => {
            e.clearSort()
        },
        sort: (h, p) => {
            e.commit("sort", {
                prop: h,
                order: p
            })
        },
        updateKeyChildren: (h, p) => {
            e.updateKeyChildren(h, p)
        }
    }
}

function Wo(e, t, l, n) {
    const o = L(!1),
        s = L(null),
        r = L(!1),
        a = k => {
            r.value = k
        },
        u = L({
            width: null,
            height: null,
            headerHeight: null
        }),
        i = L(!1),
        d = {
            display: "inline-block",
            verticalAlign: "middle"
        },
        h = L(),
        p = L(0),
        m = L(0),
        f = L(0),
        g = L(0),
        b = L(0);
    De(() => {
        var k;
        t.setHeight((k = e.height) != null ? k : null)
    }), De(() => {
        var k;
        t.setMaxHeight((k = e.maxHeight) != null ? k : null)
    }), de(() => [e.currentRowKey, l.states.rowKey], ([k, O]) => {
        !T(O) || !T(k) || l.setCurrentRowKey(`${k}`)
    }, {
        immediate: !0
    }), de(() => e.data, k => {
        n.store.commit("setData", k)
    }, {
        immediate: !0,
        deep: !0
    }), De(() => {
        e.expandRowKeys && l.setExpandRowKeysAdapter(e.expandRowKeys)
    });
    const x = () => {
            n.store.commit("setHoverRow", null), n.hoverState && (n.hoverState = null)
        },
        E = (k, O) => {
            const {
                pixelX: R,
                pixelY: $
            } = O;
            Math.abs(R) >= Math.abs($) && (n.refs.bodyWrapper.scrollLeft += O.pixelX / 5)
        },
        w = M(() => e.height || e.maxHeight || l.states.fixedColumns.value.length > 0 || l.states.rightFixedColumns.value.length > 0),
        c = M(() => ({
            width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
        })),
        y = () => {
            w.value && t.updateElsHeight(), t.updateColumnsWidth(), !(typeof window > "u") && requestAnimationFrame(N)
        };
    qe(async () => {
        await Me(), l.updateColumns(), W(), requestAnimationFrame(y);
        const k = n.vnode.el,
            O = n.refs.headerWrapper;
        e.flexible && k && k.parentElement && (k.parentElement.style.minWidth = "0"), u.value = {
            width: h.value = k.offsetWidth,
            height: k.offsetHeight,
            headerHeight: e.showHeader && O ? O.offsetHeight : null
        }, l.states.columns.value.forEach(R => {
            R.filteredValue && R.filteredValue.length && n.store.commit("filterChange", {
                column: R,
                values: R.filteredValue,
                silent: !0
            })
        }), n.$ready = !0
    });
    const C = (k, O) => {
            if (!k) return;
            const R = Array.from(k.classList).filter($ => !$.startsWith("is-scrolling-"));
            R.push(t.scrollX.value ? O : "is-scrolling-none"), k.className = R.join(" ")
        },
        v = k => {
            const {
                tableWrapper: O
            } = n.refs;
            C(O, k)
        },
        S = k => {
            const {
                tableWrapper: O
            } = n.refs;
            return !!(O && O.classList.contains(k))
        },
        N = function () {
            if (!n.refs.scrollBarRef) return;
            if (!t.scrollX.value) {
                const ne = "is-scrolling-none";
                S(ne) || v(ne);
                return
            }
            const k = n.refs.scrollBarRef.wrapRef;
            if (!k) return;
            const {
                scrollLeft: O,
                offsetWidth: R,
                scrollWidth: $
            } = k, {
                headerWrapper: q,
                footerWrapper: Q
            } = n.refs;
            q && (q.scrollLeft = O), Q && (Q.scrollLeft = O);
            const J = $ - R - 1;
            O >= J ? v("is-scrolling-right") : v(O === 0 ? "is-scrolling-left" : "is-scrolling-middle")
        },
        W = () => {
            n.refs.scrollBarRef && (n.refs.scrollBarRef.wrapRef && Yt(n.refs.scrollBarRef.wrapRef, "scroll", N, {
                passive: !0
            }), e.fit ? qt(n.vnode.el, A) : Yt(window, "resize", A), qt(n.refs.bodyWrapper, () => {
                var k, O;
                A(), (O = (k = n.refs) == null ? void 0 : k.scrollBarRef) == null || O.update()
            }))
        },
        A = () => {
            var k, O, R, $;
            const q = n.vnode.el;
            if (!n.$ready || !q) return;
            let Q = !1;
            const {
                width: J,
                height: ne,
                headerHeight: ge
            } = u.value, te = h.value = q.offsetWidth;
            J !== te && (Q = !0);
            const we = q.offsetHeight;
            (e.height || w.value) && ne !== we && (Q = !0);
            const le = e.tableLayout === "fixed" ? n.refs.headerWrapper : (k = n.refs.tableHeaderRef) == null ? void 0 : k.$el;
            e.showHeader && (le == null ? void 0 : le.offsetHeight) !== ge && (Q = !0), p.value = ((O = n.refs.tableWrapper) == null ? void 0 : O.scrollHeight) || 0, f.value = (le == null ? void 0 : le.scrollHeight) || 0, g.value = ((R = n.refs.footerWrapper) == null ? void 0 : R.offsetHeight) || 0, b.value = (($ = n.refs.appendWrapper) == null ? void 0 : $.offsetHeight) || 0, m.value = p.value - f.value - g.value - b.value, Q && (u.value = {
                width: te,
                height: we,
                headerHeight: e.showHeader && (le == null ? void 0 : le.offsetHeight) || 0
            }, y())
        },
        H = Ct(),
        D = M(() => {
            const {
                bodyWidth: k,
                scrollY: O,
                gutterWidth: R
            } = t;
            return k.value ? `${k.value-(O.value?R:0)}px` : ""
        }),
        Y = M(() => e.maxHeight ? "fixed" : e.tableLayout),
        z = M(() => {
            if (e.data && e.data.length) return;
            let k = "100%";
            e.height && m.value && (k = `${m.value}px`);
            const O = h.value;
            return {
                width: O ? `${O}px` : "",
                height: k
            }
        }),
        G = M(() => e.height ? {
            height: "100%"
        } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
            maxHeight: `calc(${e.maxHeight} - ${f.value+g.value}px)`
        } : {
            maxHeight: `${+e.maxHeight-f.value-g.value}px`
        } : {});
    return {
        isHidden: o,
        renderExpanded: s,
        setDragVisible: a,
        isGroup: i,
        handleMouseLeave: x,
        handleHeaderFooterMousewheel: E,
        tableSize: H,
        emptyBlockStyle: z,
        resizeProxyVisible: r,
        bodyWidth: D,
        resizeState: u,
        doLayout: y,
        tableBodyStyles: c,
        tableLayout: Y,
        scrollbarViewStyle: d,
        scrollbarStyle: G
    }
}

function Ho(e) {
    const t = L(),
        l = () => {
            const o = e.vnode.el.querySelector(".hidden-columns"),
                s = {
                    childList: !0,
                    subtree: !0
                },
                r = e.store.states.updateOrderFns;
            t.value = new MutationObserver(() => {
                r.forEach(a => a())
            }), t.value.observe(o, s)
        };
    qe(() => {
        l()
    }), Pt(() => {
        var n;
        (n = t.value) == null || n.disconnect()
    })
}
var Ao = {
    data: {
        type: Array,
        default: () => []
    },
    size: Wt,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
        type: Boolean,
        default: !0
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    showHeader: {
        type: Boolean,
        default: !0
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    tooltipOptions: Object,
    spanMethod: Function,
    selectOnIndeterminate: {
        type: Boolean,
        default: !0
    },
    indent: {
        type: Number,
        default: 16
    },
    treeProps: {
        type: Object,
        default: () => ({
            hasChildren: "hasChildren",
            children: "children",
            checkStrictly: !1
        })
    },
    lazy: Boolean,
    load: Function,
    style: {
        type: Object,
        default: () => ({})
    },
    className: {
        type: String,
        default: ""
    },
    tableLayout: {
        type: String,
        default: "fixed"
    },
    scrollbarAlwaysOn: Boolean,
    flexible: Boolean,
    showOverflowTooltip: [Boolean, Object],
    tooltipFormatter: Function,
    appendFilterPanelTo: String,
    scrollbarTabindex: {
        type: [Number, String],
        default: void 0
    },
    allowDragLastColumn: {
        type: Boolean,
        default: !0
    },
    preserveExpandedContent: Boolean
};

function Jl(e) {
    const t = e.tableLayout === "auto";
    let l = e.columns || [];
    t && l.every(({
        width: o
    }) => me(o)) && (l = []);
    const n = o => {
        const s = {
            key: `${e.tableLayout}_${o.id}`,
            style: {},
            name: void 0
        };
        return t ? s.style = {
            width: `${o.width}px`
        } : s.name = o.id, s
    };
    return P("colgroup", {}, l.map(o => P("col", n(o))))
}
Jl.props = ["columns", "tableLayout"];
const $o = () => {
    const e = L(),
        t = (s, r) => {
            const a = e.value;
            a && a.scrollTo(s, r)
        },
        l = (s, r) => {
            const a = e.value;
            a && Oe(r) && ["Top", "Left"].includes(s) && a[`setScroll${s}`](r)
        };
    return {
        scrollBarRef: e,
        scrollTo: t,
        setScrollTop: s => l("Top", s),
        setScrollLeft: s => l("Left", s)
    }
};
var tl = !1,
    We, Lt, Rt, tt, lt, en, nt, Nt, kt, Ft, tn, Ot, Tt, ln, nn;

function ie() {
    if (!tl) {
        tl = !0;
        var e = navigator.userAgent,
            t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),
            l = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
        if (Ot = /\b(iPhone|iP[ao]d)/.exec(e), Tt = /\b(iP[ao]d)/.exec(e), Ft = /Android/i.exec(e), ln = /FBAN\/\w+;/i.exec(e), nn = /Mobile/i.exec(e), tn = !!/Win64/.exec(e), t) {
            We = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, We && document && document.documentMode && (We = document.documentMode);
            var n = /(?:Trident\/(\d+.\d+))/.exec(e);
            en = n ? parseFloat(n[1]) + 4 : We, Lt = t[2] ? parseFloat(t[2]) : NaN, Rt = t[3] ? parseFloat(t[3]) : NaN, tt = t[4] ? parseFloat(t[4]) : NaN, tt ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), lt = t && t[1] ? parseFloat(t[1]) : NaN) : lt = NaN
        } else We = Lt = Rt = lt = tt = NaN;
        if (l) {
            if (l[1]) {
                var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                nt = o ? parseFloat(o[1].replace("_", ".")) : !0
            } else nt = !1;
            Nt = !!l[2], kt = !!l[3]
        } else nt = Nt = kt = !1
    }
}
var Mt = {
        ie: function () {
            return ie() || We
        },
        ieCompatibilityMode: function () {
            return ie() || en > We
        },
        ie64: function () {
            return Mt.ie() && tn
        },
        firefox: function () {
            return ie() || Lt
        },
        opera: function () {
            return ie() || Rt
        },
        webkit: function () {
            return ie() || tt
        },
        safari: function () {
            return Mt.webkit()
        },
        chrome: function () {
            return ie() || lt
        },
        windows: function () {
            return ie() || Nt
        },
        osx: function () {
            return ie() || nt
        },
        linux: function () {
            return ie() || kt
        },
        iphone: function () {
            return ie() || Ot
        },
        mobile: function () {
            return ie() || Ot || Tt || Ft || nn
        },
        nativeApp: function () {
            return ie() || ln
        },
        android: function () {
            return ie() || Ft
        },
        ipad: function () {
            return ie() || Tt
        }
    },
    Po = Mt,
    _o = !!(typeof window < "u" && window.document && window.document.createElement),
    Bo = {
        canUseDOM: _o
    },
    an = Bo,
    on;
an.canUseDOM && (on = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);

function Vo(e, t) {
    if (!an.canUseDOM || t && !("addEventListener" in document)) return !1;
    var l = "on" + e,
        n = l in document;
    if (!n) {
        var o = document.createElement("div");
        o.setAttribute(l, "return;"), n = typeof o[l] == "function"
    }
    return !n && on && e === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
}
var Io = Vo,
    ll = 10,
    nl = 40,
    al = 800;

function sn(e) {
    var t = 0,
        l = 0,
        n = 0,
        o = 0;
    return "detail" in e && (l = e.detail), "wheelDelta" in e && (l = -e.wheelDelta / 120), "wheelDeltaY" in e && (l = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = l, l = 0), n = t * ll, o = l * ll, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (e.deltaMode == 1 ? (n *= nl, o *= nl) : (n *= al, o *= al)), n && !t && (t = n < 1 ? -1 : 1), o && !l && (l = o < 1 ? -1 : 1), {
        spinX: t,
        spinY: l,
        pixelX: n,
        pixelY: o
    }
}
sn.getEventType = function () {
    return Po.firefox() ? "DOMMouseScroll" : Io("wheel") ? "wheel" : "mousewheel"
};
var zo = sn;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const Ko = function (e, t) {
        if (e && e.addEventListener) {
            const l = function (n) {
                const o = zo(n);
                t && Reflect.apply(t, this, [n, o])
            };
            e.addEventListener("wheel", l, {
                passive: !0
            })
        }
    },
    Do = {
        beforeMount(e, t) {
            Ko(e, t.value)
        }
    };
let Go = 1;
const jo = fe({
    name: "ElTable",
    directives: {
        Mousewheel: Do
    },
    components: {
        TableHeader: Co,
        TableBody: ko,
        TableFooter: To,
        ElScrollbar: Rl,
        hColgroup: Jl
    },
    props: Ao,
    emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-contextmenu", "cell-click", "cell-dblclick", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "sort-change", "filter-change", "current-change", "header-dragend", "expand-change", "scroll"],
    setup(e) {
        const {
            t
        } = Sl(), l = he("table"), n = oe();
        ml(Ce, n);
        const o = uo(n, e);
        n.store = o;
        const s = new fo({
            store: n.store,
            table: n,
            fit: e.fit,
            showHeader: e.showHeader
        });
        n.layout = s;
        const r = M(() => (o.states.data.value || []).length === 0),
            {
                setCurrentRow: a,
                getSelectionRows: u,
                toggleRowSelection: i,
                clearSelection: d,
                clearFilter: h,
                toggleAllSelection: p,
                toggleRowExpansion: m,
                clearSort: f,
                sort: g,
                updateKeyChildren: b
            } = Mo(o),
            {
                isHidden: x,
                renderExpanded: E,
                setDragVisible: w,
                isGroup: c,
                handleMouseLeave: y,
                handleHeaderFooterMousewheel: C,
                tableSize: v,
                emptyBlockStyle: S,
                resizeProxyVisible: N,
                bodyWidth: W,
                resizeState: A,
                doLayout: H,
                tableBodyStyles: D,
                tableLayout: Y,
                scrollbarViewStyle: z,
                scrollbarStyle: G
            } = Wo(e, s, o, n),
            {
                scrollBarRef: k,
                scrollTo: O,
                setScrollLeft: R,
                setScrollTop: $
            } = $o(),
            q = ut(H, 50),
            Q = `${l.namespace.value}-table_${Go++}`;
        n.tableId = Q, n.state = {
            isGroup: c,
            resizeState: A,
            doLayout: H,
            debouncedUpdateLayout: q
        };
        const J = M(() => {
                var te;
                return (te = e.sumText) != null ? te : t("el.table.sumText")
            }),
            ne = M(() => {
                var te;
                return (te = e.emptyText) != null ? te : t("el.table.emptyText")
            }),
            ge = M(() => Zl(o.states.originColumns.value)[0]);
        return Ho(n), El(() => {
            q.cancel()
        }), {
            ns: l,
            layout: s,
            store: o,
            columns: ge,
            handleHeaderFooterMousewheel: C,
            handleMouseLeave: y,
            tableId: Q,
            tableSize: v,
            isHidden: x,
            isEmpty: r,
            renderExpanded: E,
            resizeProxyVisible: N,
            resizeState: A,
            isGroup: c,
            bodyWidth: W,
            tableBodyStyles: D,
            emptyBlockStyle: S,
            debouncedUpdateLayout: q,
            setCurrentRow: a,
            getSelectionRows: u,
            toggleRowSelection: i,
            clearSelection: d,
            clearFilter: h,
            toggleAllSelection: p,
            toggleRowExpansion: m,
            clearSort: f,
            doLayout: H,
            sort: g,
            updateKeyChildren: b,
            t,
            setDragVisible: w,
            context: n,
            computedSumText: J,
            computedEmptyText: ne,
            tableLayout: Y,
            scrollbarViewStyle: z,
            scrollbarStyle: G,
            scrollBarRef: k,
            scrollTo: O,
            setScrollLeft: R,
            setScrollTop: $,
            allowDragLastColumn: e.allowDragLastColumn
        }
    }
});

function Uo(e, t, l, n, o, s) {
    const r = ve("hColgroup"),
        a = ve("table-header"),
        u = ve("table-body"),
        i = ve("table-footer"),
        d = ve("el-scrollbar"),
        h = wl("mousewheel");
    return K(), Z("div", {
        ref: "tableWrapper",
        class: V([{
            [e.ns.m("fit")]: e.fit,
            [e.ns.m("striped")]: e.stripe,
            [e.ns.m("border")]: e.border || e.isGroup,
            [e.ns.m("hidden")]: e.isHidden,
            [e.ns.m("group")]: e.isGroup,
            [e.ns.m("fluid-height")]: e.maxHeight,
            [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
            [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
            [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
            [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
            "has-footer": e.showSummary
        }, e.ns.m(e.tableSize), e.className, e.ns.b(), e.ns.m(`layout-${e.tableLayout}`)]),
        style: Pe(e.style),
        "data-prefix": e.ns.namespace.value,
        onMouseleave: e.handleMouseLeave
    }, [se("div", {
        class: V(e.ns.e("inner-wrapper"))
    }, [se("div", {
        ref: "hiddenColumns",
        class: "hidden-columns"
    }, [ye(e.$slots, "default")], 512), e.showHeader && e.tableLayout === "fixed" ? Te((K(), Z("div", {
        key: 0,
        ref: "headerWrapper",
        class: V(e.ns.e("header-wrapper"))
    }, [se("table", {
        ref: "tableHeader",
        class: V(e.ns.e("header")),
        style: Pe(e.tableBodyStyles),
        border: "0",
        cellpadding: "0",
        cellspacing: "0"
    }, [be(r, {
        columns: e.store.states.columns.value,
        "table-layout": e.tableLayout
    }, null, 8, ["columns", "table-layout"]), be(a, {
        ref: "tableHeaderRef",
        border: e.border,
        "default-sort": e.defaultSort,
        store: e.store,
        "append-filter-panel-to": e.appendFilterPanelTo,
        "allow-drag-last-column": e.allowDragLastColumn,
        onSetDragVisible: e.setDragVisible
    }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])], 6)], 2)), [
        [h, e.handleHeaderFooterMousewheel]
    ]) : Se("v-if", !0), se("div", {
        ref: "bodyWrapper",
        class: V(e.ns.e("body-wrapper"))
    }, [be(d, {
        ref: "scrollBarRef",
        "view-style": e.scrollbarViewStyle,
        "wrap-style": e.scrollbarStyle,
        always: e.scrollbarAlwaysOn,
        tabindex: e.scrollbarTabindex,
        onScroll: p => e.$emit("scroll", p)
    }, {
        default: Re(() => [se("table", {
            ref: "tableBody",
            class: V(e.ns.e("body")),
            cellspacing: "0",
            cellpadding: "0",
            border: "0",
            style: Pe({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
            })
        }, [be(r, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
        }, null, 8, ["columns", "table-layout"]), e.showHeader && e.tableLayout === "auto" ? (K(), Fe(a, {
            key: 0,
            ref: "tableHeaderRef",
            class: V(e.ns.e("body-header")),
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "append-filter-panel-to": e.appendFilterPanelTo,
            onSetDragVisible: e.setDragVisible
        }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : Se("v-if", !0), be(u, {
            context: e.context,
            highlight: e.highlightCurrentRow,
            "row-class-name": e.rowClassName,
            "tooltip-effect": e.tooltipEffect,
            "tooltip-options": e.tooltipOptions,
            "row-style": e.rowStyle,
            store: e.store,
            stripe: e.stripe
        }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]), e.showSummary && e.tableLayout === "auto" ? (K(), Fe(i, {
            key: 1,
            class: V(e.ns.e("body-footer")),
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
        }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : Se("v-if", !0)], 6), e.isEmpty ? (K(), Z("div", {
            key: 0,
            ref: "emptyBlock",
            style: Pe(e.emptyBlockStyle),
            class: V(e.ns.e("empty-block"))
        }, [se("span", {
            class: V(e.ns.e("empty-text"))
        }, [ye(e.$slots, "empty", {}, () => [ht(ke(e.computedEmptyText), 1)])], 2)], 6)) : Se("v-if", !0), e.$slots.append ? (K(), Z("div", {
            key: 1,
            ref: "appendWrapper",
            class: V(e.ns.e("append-wrapper"))
        }, [ye(e.$slots, "append")], 2)) : Se("v-if", !0)]),
        _: 3
    }, 8, ["view-style", "wrap-style", "always", "tabindex", "onScroll"])], 2), e.showSummary && e.tableLayout === "fixed" ? Te((K(), Z("div", {
        key: 1,
        ref: "footerWrapper",
        class: V(e.ns.e("footer-wrapper"))
    }, [se("table", {
        class: V(e.ns.e("footer")),
        cellspacing: "0",
        cellpadding: "0",
        border: "0",
        style: Pe(e.tableBodyStyles)
    }, [be(r, {
        columns: e.store.states.columns.value,
        "table-layout": e.tableLayout
    }, null, 8, ["columns", "table-layout"]), be(i, {
        border: e.border,
        "default-sort": e.defaultSort,
        store: e.store,
        "sum-text": e.computedSumText,
        "summary-method": e.summaryMethod
    }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])], 6)], 2)), [
        [Xt, !e.isEmpty],
        [h, e.handleHeaderFooterMousewheel]
    ]) : Se("v-if", !0), e.border || e.isGroup ? (K(), Z("div", {
        key: 2,
        class: V(e.ns.e("border-left-patch"))
    }, null, 2)) : Se("v-if", !0)], 2), Te(se("div", {
        ref: "resizeProxy",
        class: V(e.ns.e("column-resize-proxy"))
    }, null, 2), [
        [Xt, e.resizeProxyVisible]
    ])], 46, ["data-prefix", "onMouseleave"])
}
var Yo = Ie(jo, [
    ["render", Uo],
    ["__file", "table.vue"]
]);
const qo = {
        selection: "table-column--selection",
        expand: "table__expand-column"
    },
    Xo = {
        default: {
            order: ""
        },
        selection: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        },
        expand: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        },
        index: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        }
    },
    Qo = e => qo[e] || "",
    Zo = {
        selection: {
            renderHeader({
                store: e,
                column: t
            }) {
                var l;

                function n() {
                    return e.states.data.value && e.states.data.value.length === 0
                }
                return P(Be, {
                    disabled: n(),
                    size: e.states.tableSize.value,
                    indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
                    "onUpdate:modelValue": (l = e.toggleAllSelection) != null ? l : void 0,
                    modelValue: e.states.isAllSelected.value,
                    ariaLabel: t.label
                })
            },
            renderCell({
                row: e,
                column: t,
                store: l,
                $index: n
            }) {
                return P(Be, {
                    disabled: t.selectable ? !t.selectable.call(null, e, n) : !1,
                    size: l.states.tableSize.value,
                    onChange: () => {
                        l.commit("rowSelectedChanged", e)
                    },
                    onClick: o => o.stopPropagation(),
                    modelValue: l.isSelected(e),
                    ariaLabel: t.label
                })
            },
            sortable: !1,
            resizable: !1
        },
        index: {
            renderHeader({
                column: e
            }) {
                return e.label || "#"
            },
            renderCell({
                column: e,
                $index: t
            }) {
                let l = t + 1;
                const n = e.index;
                return Oe(n) ? l = t + n : pe(n) && (l = n(t)), P("div", {}, [l])
            },
            sortable: !1
        },
        expand: {
            renderHeader({
                column: e
            }) {
                return e.label || ""
            },
            renderCell({
                column: e,
                row: t,
                store: l,
                expanded: n
            }) {
                const {
                    ns: o
                } = l, s = [o.e("expand-icon")];
                return !e.renderExpand && n && s.push(o.em("expand-icon", "expanded")), P("div", {
                    class: s,
                    onClick: function (a) {
                        a.stopPropagation(), l.toggleRowExpansion(t)
                    }
                }, {
                    default: () => e.renderExpand ? [e.renderExpand({
                        expanded: n
                    })] : [P($t, null, {
                        default: () => [P(Ll)]
                    })]
                })
            },
            sortable: !1,
            resizable: !1
        }
    };

function Jo({
    row: e,
    column: t,
    $index: l
}) {
    var n;
    const o = t.property,
        s = o && Cl(e, o).value;
    return t && t.formatter ? t.formatter(e, t, s, l) : ((n = s == null ? void 0 : s.toString) == null ? void 0 : n.call(s)) || ""
}

function es({
    row: e,
    treeNode: t,
    store: l
}, n = !1) {
    const {
        ns: o
    } = l;
    if (!t) return n ? [P("span", {
        class: o.e("placeholder")
    })] : null;
    const s = [],
        r = function (a) {
            a.stopPropagation(), !t.loading && l.loadOrToggle(e)
        };
    if (t.indent && s.push(P("span", {
            class: o.e("indent"),
            style: {
                "padding-left": `${t.indent}px`
            }
        })), xe(t.expanded) && !t.noLazyChildren) {
        const a = [o.e("expand-icon"), t.expanded ? o.em("expand-icon", "expanded") : ""];
        let u = Ll;
        t.loading && (u = jn), s.push(P("div", {
            class: a,
            onClick: r
        }, {
            default: () => [P($t, {
                class: {
                    [o.is("loading")]: t.loading
                }
            }, {
                default: () => [P(u)]
            })]
        }))
    } else s.push(P("span", {
        class: o.e("placeholder")
    }));
    return s
}

function ol(e, t) {
    return e.reduce((l, n) => (l[n] = n, l), t)
}

function ts(e, t) {
    const l = oe();
    return {
        registerComplexWatchers: () => {
            const s = ["fixed"],
                r = {
                    realWidth: "width",
                    realMinWidth: "minWidth"
                },
                a = ol(s, r);
            Object.keys(a).forEach(u => {
                const i = r[u];
                Ue(t, i) && de(() => t[i], d => {
                    let h = d;
                    i === "width" && u === "realWidth" && (h = _t(d)), i === "minWidth" && u === "realMinWidth" && (h = jl(d)), l.columnConfig.value[i] = h, l.columnConfig.value[u] = h;
                    const p = i === "fixed";
                    e.value.store.scheduleLayout(p)
                })
            })
        },
        registerNormalWatchers: () => {
            const s = ["label", "filters", "filterMultiple", "filteredValue", "sortable", "index", "formatter", "className", "labelClassName", "filterClassName", "showOverflowTooltip", "tooltipFormatter"],
                r = {
                    property: "prop",
                    align: "realAlign",
                    headerAlign: "realHeaderAlign"
                },
                a = ol(s, r);
            Object.keys(a).forEach(u => {
                const i = r[u];
                Ue(t, i) && de(() => t[i], d => {
                    l.columnConfig.value[u] = d
                })
            })
        }
    }
}

function ls(e, t, l) {
    const n = oe(),
        o = L(""),
        s = L(!1),
        r = L(),
        a = L(),
        u = he("table");
    De(() => {
        r.value = e.align ? `is-${e.align}` : null, r.value
    }), De(() => {
        a.value = e.headerAlign ? `is-${e.headerAlign}` : r.value, a.value
    });
    const i = M(() => {
            let c = n.vnode.vParent || n.parent;
            for (; c && !c.tableId && !c.columnId;) c = c.vnode.vParent || c.parent;
            return c
        }),
        d = M(() => {
            const {
                store: c
            } = n.parent;
            if (!c) return !1;
            const {
                treeData: y
            } = c.states, C = y.value;
            return C && Object.keys(C).length > 0
        }),
        h = L(_t(e.width)),
        p = L(jl(e.minWidth)),
        m = c => (h.value && (c.width = h.value), p.value && (c.minWidth = p.value), !h.value && p.value && (c.width = void 0), c.minWidth || (c.minWidth = 80), c.realWidth = Number(me(c.width) ? c.minWidth : c.width), c),
        f = c => {
            const y = c.type,
                C = Zo[y] || {};
            Object.keys(C).forEach(S => {
                const N = C[S];
                S !== "className" && !me(N) && (c[S] = N)
            });
            const v = Qo(y);
            if (v) {
                const S = `${T(u.namespace)}-${v}`;
                c.className = c.className ? `${c.className} ${S}` : S
            }
            return c
        },
        g = c => {
            ee(c) ? c.forEach(C => y(C)) : y(c);

            function y(C) {
                var v;
                ((v = C == null ? void 0 : C.type) == null ? void 0 : v.name) === "ElTableColumn" && (C.vParent = n)
            }
        };
    return {
        columnId: o,
        realAlign: r,
        isSubColumn: s,
        realHeaderAlign: a,
        columnOrTableParent: i,
        setColumnWidth: m,
        setColumnForcedProps: f,
        setColumnRenders: c => {
            e.renderHeader || c.type !== "selection" && (c.renderHeader = C => (n.columnConfig.value.label, ye(t, "header", C, () => [c.label]))), t["filter-icon"] && (c.renderFilterIcon = C => ye(t, "filter-icon", C)), t.expand && (c.renderExpand = C => ye(t, "expand", C));
            let y = c.renderCell;
            return c.type === "expand" ? (c.renderCell = C => P("div", {
                class: "cell"
            }, [y(C)]), l.value.renderExpanded = C => t.default ? t.default(C) : t.default) : (y = y || Jo, c.renderCell = C => {
                let v = null;
                if (t.default) {
                    const D = t.default(C);
                    v = D.some(Y => Y.type !== Un) ? D : y(C)
                } else v = y(C);
                const {
                    columns: S
                } = l.value.store.states, N = S.value.findIndex(D => D.type === "default"), W = d.value && C.cellIndex === N, A = es(C, W), H = {
                    class: "cell",
                    style: {}
                };
                return c.showOverflowTooltip && (H.class = `${H.class} ${T(u.namespace)}-tooltip`, H.style = {
                    width: `${(C.column.realWidth||Number(C.column.width))-1}px`
                }), g(v), P("div", H, [A, v])
            }), c
        },
        getPropsData: (...c) => c.reduce((y, C) => (ee(C) && C.forEach(v => {
            y[v] = e[v]
        }), y), {}),
        getColumnElIndex: (c, y) => Array.prototype.indexOf.call(c, y),
        updateColumnOrder: () => {
            l.value.store.commit("updateColumnOrder", n.columnConfig.value)
        }
    }
}
var ns = {
    type: {
        type: String,
        default: "default"
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {
        type: [String, Number],
        default: ""
    },
    minWidth: {
        type: [String, Number],
        default: ""
    },
    renderHeader: Function,
    sortable: {
        type: [Boolean, String],
        default: !1
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
        type: Boolean,
        default: !0
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showOverflowTooltip: {
        type: [Boolean, Object],
        default: void 0
    },
    tooltipFormatter: Function,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
        type: Boolean,
        default: !0
    },
    filterClassName: String,
    index: [Number, Function],
    sortOrders: {
        type: Array,
        default: () => ["ascending", "descending", null],
        validator: e => e.every(t => ["ascending", "descending", null].includes(t))
    }
};
let as = 1;
var rn = fe({
    name: "ElTableColumn",
    components: {
        ElCheckbox: Be
    },
    props: ns,
    setup(e, {
        slots: t
    }) {
        const l = oe(),
            n = L({}),
            o = M(() => {
                let w = l.parent;
                for (; w && !w.tableId;) w = w.parent;
                return w
            }),
            {
                registerNormalWatchers: s,
                registerComplexWatchers: r
            } = ts(o, e),
            {
                columnId: a,
                isSubColumn: u,
                realHeaderAlign: i,
                columnOrTableParent: d,
                setColumnWidth: h,
                setColumnForcedProps: p,
                setColumnRenders: m,
                getPropsData: f,
                getColumnElIndex: g,
                realAlign: b,
                updateColumnOrder: x
            } = ls(e, t, o),
            E = d.value;
        a.value = `${"tableId"in E&&E.tableId||"columnId"in E&&E.columnId}_column_${as++}`, xl(() => {
            u.value = o.value !== E;
            const w = e.type || "default",
                c = e.sortable === "" ? !0 : e.sortable,
                y = w === "selection" ? !1 : me(e.showOverflowTooltip) ? E.props.showOverflowTooltip : e.showOverflowTooltip,
                C = me(e.tooltipFormatter) ? E.props.tooltipFormatter : e.tooltipFormatter,
                v = {
                    ...Xo[w],
                    id: a.value,
                    type: w,
                    property: e.prop || e.property,
                    align: b,
                    headerAlign: i,
                    showOverflowTooltip: y,
                    tooltipFormatter: C,
                    filterable: e.filters || e.filterMethod,
                    filteredValue: [],
                    filterPlacement: "",
                    filterClassName: "",
                    isColumnGroup: !1,
                    isSubColumn: !1,
                    filterOpened: !1,
                    sortable: c,
                    index: e.index,
                    rawColumnKey: l.vnode.key
                };
            let H = f(["columnKey", "label", "className", "labelClassName", "type", "renderHeader", "formatter", "fixed", "resizable"], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], ["filterMethod", "filters", "filterMultiple", "filterOpened", "filteredValue", "filterPlacement", "filterClassName"]);
            H = Qa(v, H), H = Ja(m, h, p)(H), n.value = H, s(), r()
        }), qe(() => {
            var w, c;
            const y = d.value,
                C = u.value ? (w = y.vnode.el) == null ? void 0 : w.children : (c = y.refs.hiddenColumns) == null ? void 0 : c.children,
                v = () => g(C || [], l.vnode.el);
            n.value.getColumnIndex = v, v() > -1 && o.value.store.commit("insertColumn", n.value, u.value ? "columnConfig" in y && y.columnConfig.value : null, x)
        }), El(() => {
            const w = n.value.getColumnIndex;
            (w ? w() : -1) > -1 && o.value.store.commit("removeColumn", n.value, u.value ? "columnConfig" in E && E.columnConfig.value : null, x)
        }), l.columnId = a.value, l.columnConfig = n
    },
    render() {
        var e, t, l;
        try {
            const n = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
                    row: {},
                    column: {},
                    $index: -1
                }),
                o = [];
            if (ee(n))
                for (const r of n)((l = r.type) == null ? void 0 : l.name) === "ElTableColumn" || r.shapeFlag & 2 ? o.push(r) : r.type === rt && ee(r.children) && r.children.forEach(a => {
                    (a == null ? void 0 : a.patchFlag) !== 1024 && !ce(a == null ? void 0 : a.children) && o.push(a)
                });
            return P("div", o)
        } catch {
            return P("div", [])
        }
    }
});
const hs = bl(Yo, {
        TableColumn: rn
    }),
    vs = At(rn);
export {
    hs as E, vs as a
};
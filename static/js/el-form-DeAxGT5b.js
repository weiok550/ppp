import {
    aW as pr,
    aX as ot,
    aY as At,
    aZ as vr,
    a_ as gr,
    a$ as mr,
    W as me,
    V as lt,
    a3 as _t,
    X as se,
    $,
    b0 as Rt,
    h as te,
    c as _,
    d as G,
    G as Ue,
    aw as Lt,
    a as ie,
    O as ye,
    aP as Ct,
    a1 as Ze,
    aQ as xt,
    b1 as Qe,
    b as H,
    o as R,
    r as B,
    n as P,
    e as c,
    aD as et,
    _ as he,
    aa as Ee,
    a4 as _e,
    i as It,
    ay as tt,
    aL as yr,
    b2 as hr,
    l as z,
    F as Mt,
    aB as Ut,
    b3 as Ne,
    u as br,
    ax as wr,
    b4 as Fr,
    av as ut,
    b5 as Ie,
    k as oe,
    m as V,
    v as ee,
    x as C,
    S as Er,
    f as Be,
    p as Tr,
    t as Pe,
    b6 as Nt,
    w as Bt,
    g as Or,
    aE as kt,
    b7 as D,
    a0 as ke,
    au as Sr,
    aK as Re,
    s as jr,
    ac as Dt,
    ad as ve,
    E as de,
    b8 as $r,
    b9 as qr,
    ba as Pr,
    bb as Ar,
    aU as _r,
    aV as Rr,
    aS as De,
    bc as ft,
    bd as Lr,
    be as Cr,
    ao as xr,
    at as ct,
    a5 as dt
} from "./index-DejQ-iz-.js";
import {
    c as Ve
} from "./castArray-G03HepT3.js";
import {
    E as Ir
} from "./el-progress-CQCGwsfG.js";
import {
    c as Le,
    k as Vt,
    a as rt,
    g as Wt,
    s as Mr,
    b as Ur,
    d as Nr,
    e as zt,
    f as Br,
    h as nt,
    i as Kt,
    n as Ae,
    j as kr,
    l as Dr,
    m as Vr,
    o as Wr,
    S as zr,
    p as Kr,
    q as Gr
} from "./isEqual-m-EOcnpd.js";

function Hr(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length; ++t < n && e(r[t], t, r) !== !1;);
    return r
}

function Xr(r, e) {
    return r && Le(e, Vt(e), r)
}

function Jr(r, e) {
    return r && Le(e, rt(e), r)
}

function Yr(r, e) {
    return Le(r, Wt(r), e)
}
var Zr = Object.getOwnPropertySymbols,
    Gt = Zr ? function (r) {
        for (var e = []; r;) pr(e, Wt(r)), r = Ur(r);
        return e
    } : Mr;

function Qr(r, e) {
    return Le(r, Gt(r), e)
}

function en(r) {
    return Nr(r, rt, Gt)
}
var tn = Object.prototype,
    rn = tn.hasOwnProperty;

function nn(r) {
    var e = r.length,
        t = new r.constructor(e);
    return e && typeof r[0] == "string" && rn.call(r, "index") && (t.index = r.index, t.input = r.input), t
}

function an(r, e) {
    var t = e ? zt(r.buffer) : r.buffer;
    return new r.constructor(t, r.byteOffset, r.byteLength)
}
var sn = /\w*$/;

function on(r) {
    var e = new r.constructor(r.source, sn.exec(r));
    return e.lastIndex = r.lastIndex, e
}
var pt = ot ? ot.prototype : void 0,
    vt = pt ? pt.valueOf : void 0;

function ln(r) {
    return vt ? Object(vt.call(r)) : {}
}
var un = "[object Boolean]",
    fn = "[object Date]",
    cn = "[object Map]",
    dn = "[object Number]",
    pn = "[object RegExp]",
    vn = "[object Set]",
    gn = "[object String]",
    mn = "[object Symbol]",
    yn = "[object ArrayBuffer]",
    hn = "[object DataView]",
    bn = "[object Float32Array]",
    wn = "[object Float64Array]",
    Fn = "[object Int8Array]",
    En = "[object Int16Array]",
    Tn = "[object Int32Array]",
    On = "[object Uint8Array]",
    Sn = "[object Uint8ClampedArray]",
    jn = "[object Uint16Array]",
    $n = "[object Uint32Array]";

function qn(r, e, t) {
    var n = r.constructor;
    switch (e) {
        case yn:
            return zt(r);
        case un:
        case fn:
            return new n(+r);
        case hn:
            return an(r, t);
        case bn:
        case wn:
        case Fn:
        case En:
        case Tn:
        case On:
        case Sn:
        case jn:
        case $n:
            return Br(r, t);
        case cn:
            return new n;
        case dn:
        case gn:
            return new n(r);
        case pn:
            return on(r);
        case vn:
            return new n;
        case mn:
            return ln(r)
    }
}
var Pn = "[object Map]";

function An(r) {
    return At(r) && nt(r) == Pn
}
var gt = Ae && Ae.isMap,
    _n = gt ? Kt(gt) : An,
    Rn = "[object Set]";

function Ln(r) {
    return At(r) && nt(r) == Rn
}
var mt = Ae && Ae.isSet,
    Cn = mt ? Kt(mt) : Ln,
    xn = 1,
    In = 2,
    Mn = 4,
    Ht = "[object Arguments]",
    Un = "[object Array]",
    Nn = "[object Boolean]",
    Bn = "[object Date]",
    kn = "[object Error]",
    Xt = "[object Function]",
    Dn = "[object GeneratorFunction]",
    Vn = "[object Map]",
    Wn = "[object Number]",
    Jt = "[object Object]",
    zn = "[object RegExp]",
    Kn = "[object Set]",
    Gn = "[object String]",
    Hn = "[object Symbol]",
    Xn = "[object WeakMap]",
    Jn = "[object ArrayBuffer]",
    Yn = "[object DataView]",
    Zn = "[object Float32Array]",
    Qn = "[object Float64Array]",
    ea = "[object Int8Array]",
    ta = "[object Int16Array]",
    ra = "[object Int32Array]",
    na = "[object Uint8Array]",
    aa = "[object Uint8ClampedArray]",
    ia = "[object Uint16Array]",
    sa = "[object Uint32Array]",
    q = {};
q[Ht] = q[Un] = q[Jn] = q[Yn] = q[Nn] = q[Bn] = q[Zn] = q[Qn] = q[ea] = q[ta] = q[ra] = q[Vn] = q[Wn] = q[Jt] = q[zn] = q[Kn] = q[Gn] = q[Hn] = q[na] = q[aa] = q[ia] = q[sa] = !0;
q[kn] = q[Xt] = q[Xn] = !1;

function we(r, e, t, n, a, i) {
    var s, l = e & xn,
        p = e & In,
        h = e & Mn;
    if (s !== void 0) return s;
    if (!vr(r)) return r;
    var y = gr(r);
    if (y) {
        if (s = nn(r), !l) return kr(r, s)
    } else {
        var v = nt(r),
            F = v == Xt || v == Dn;
        if (Dr(r)) return Vr(r, l);
        if (v == Jt || v == Ht || F && !a) {
            if (s = p || F ? {} : Wr(r), !l) return p ? Qr(r, Jr(s, r)) : Yr(r, Xr(s, r))
        } else {
            if (!q[v]) return a ? r : {};
            s = qn(r, v, l)
        }
    }
    i || (i = new zr);
    var f = i.get(r);
    if (f) return f;
    i.set(r, s), Cn(r) ? r.forEach(function (d) {
        s.add(we(d, e, t, d, r, i))
    }) : _n(r) && r.forEach(function (d, u) {
        s.set(u, we(d, e, t, u, r, i))
    });
    var g = h ? p ? en : Kr : p ? rt : Vt,
        o = y ? void 0 : g(r);
    return Hr(o || r, function (d, u) {
        o && (u = d, d = r[u]), mr(s, u, we(d, e, t, u, r, i))
    }), s
}
var oa = 4;

function yt(r) {
    return we(r, oa)
}
var la = 1,
    ua = 4;

function ht(r) {
    return we(r, la | ua)
}
const fa = se({
        size: {
            type: String,
            values: Rt
        },
        disabled: Boolean
    }),
    ca = se({
        ...fa,
        model: Object,
        rules: {
            type: $(Object)
        },
        labelPosition: {
            type: String,
            values: ["left", "right", "top"],
            default: "right"
        },
        requireAsteriskPosition: {
            type: String,
            values: ["left", "right"],
            default: "left"
        },
        labelWidth: {
            type: [String, Number],
            default: ""
        },
        labelSuffix: {
            type: String,
            default: ""
        },
        inline: Boolean,
        inlineMessage: Boolean,
        statusIcon: Boolean,
        showMessage: {
            type: Boolean,
            default: !0
        },
        validateOnRuleChange: {
            type: Boolean,
            default: !0
        },
        hideRequiredAsterisk: Boolean,
        scrollToError: Boolean,
        scrollIntoViewOptions: {
            type: [Object, Boolean],
            default: !0
        }
    }),
    da = {
        validate: (r, e, t) => (me(r) || lt(r)) && _t(e) && lt(t)
    };

function pa() {
    const r = te([]),
        e = _(() => {
            if (!r.value.length) return "0";
            const i = Math.max(...r.value);
            return i ? `${i}px` : ""
        });

    function t(i) {
        const s = r.value.indexOf(i);
        return s === -1 && e.value, s
    }

    function n(i, s) {
        if (i && s) {
            const l = t(s);
            r.value.splice(l, 1, i)
        } else i && r.value.push(i)
    }

    function a(i) {
        const s = t(i);
        s > -1 && r.value.splice(s, 1)
    }
    return {
        autoLabelWidth: e,
        registerLabelWidth: n,
        deregisterLabelWidth: a
    }
}
const Se = (r, e) => {
        const t = Ve(e).map(n => me(n) ? n.join(".") : n);
        return t.length > 0 ? r.filter(n => n.propString && t.includes(n.propString)) : r
    },
    va = "ElForm",
    ga = G({
        name: va
    }),
    ma = G({
        ...ga,
        props: ca,
        emits: da,
        setup(r, {
            expose: e,
            emit: t
        }) {
            const n = r,
                a = te(),
                i = Ue([]),
                s = Lt(),
                l = ie("form"),
                p = _(() => {
                    const {
                        labelPosition: m,
                        inline: E
                    } = n;
                    return [l.b(), l.m(s.value || "default"), {
                        [l.m(`label-${m}`)]: m,
                        [l.m("inline")]: E
                    }]
                }),
                h = m => Se(i, [m])[0],
                y = m => {
                    i.push(m)
                },
                v = m => {
                    m.prop && i.splice(i.indexOf(m), 1)
                },
                F = (m = []) => {
                    n.model && Se(i, m).forEach(E => E.resetField())
                },
                f = (m = []) => {
                    Se(i, m).forEach(E => E.clearValidate())
                },
                g = _(() => !!n.model),
                o = m => {
                    if (i.length === 0) return [];
                    const E = Se(i, m);
                    return E.length ? E : []
                },
                d = async m => S(void 0, m), u = async (m = []) => {
                    if (!g.value) return !1;
                    const E = o(m);
                    if (E.length === 0) return !0;
                    let T = {};
                    for (const A of E) try {
                        await A.validate(""), A.validateState === "error" && A.resetField()
                    } catch (L) {
                        T = {
                            ...T,
                            ...L
                        }
                    }
                    return Object.keys(T).length === 0 ? !0 : Promise.reject(T)
                }, S = async (m = [], E) => {
                    let T = !1;
                    const A = !et(E);
                    try {
                        return T = await u(m), T === !0 && await (E == null ? void 0 : E(T)), T
                    } catch (L) {
                        if (L instanceof Error) throw L;
                        const W = L;
                        if (n.scrollToError && a.value) {
                            const re = a.value.querySelector(`.${l.b()}-item.is-error`);
                            re == null || re.scrollIntoView(n.scrollIntoViewOptions)
                        }
                        return !T && await (E == null ? void 0 : E(!1, W)), A && Promise.reject(W)
                    }
                }, w = m => {
                    var E;
                    const T = h(m);
                    T && ((E = T.$el) == null || E.scrollIntoView(n.scrollIntoViewOptions))
                };
            return ye(() => n.rules, () => {
                n.validateOnRuleChange && d().catch(m => Ct())
            }, {
                deep: !0,
                flush: "post"
            }), Ze(Qe, Ue({
                ...xt(n),
                emit: t,
                resetFields: F,
                clearValidate: f,
                validateField: S,
                getField: h,
                addField: y,
                removeField: v,
                ...pa()
            })), e({
                validate: d,
                validateField: S,
                resetFields: F,
                clearValidate: f,
                scrollToField: w,
                getField: h,
                fields: i
            }), (m, E) => (R(), H("form", {
                ref_key: "formRef",
                ref: a,
                class: P(c(p))
            }, [B(m.$slots, "default")], 2))
        }
    });
var ya = he(ma, [
        ["__file", "form.vue"]
    ]),
    x = {},
    Z, Q;

function We() {
    throw new Error("setTimeout has not been defined")
}

function ze() {
    throw new Error("clearTimeout has not been defined")
}(function () {
    try {
        typeof setTimeout == "function" ? Z = setTimeout : Z = We
    } catch {
        Z = We
    }
    try {
        typeof clearTimeout == "function" ? Q = clearTimeout : Q = ze
    } catch {
        Q = ze
    }
})();

function Yt(r) {
    if (Z === setTimeout) return setTimeout(r, 0);
    if ((Z === We || !Z) && setTimeout) return Z = setTimeout, setTimeout(r, 0);
    try {
        return Z(r, 0)
    } catch {
        try {
            return Z.call(null, r, 0)
        } catch {
            return Z.call(this, r, 0)
        }
    }
}

function ha(r) {
    if (Q === clearTimeout) return clearTimeout(r);
    if ((Q === ze || !Q) && clearTimeout) return Q = clearTimeout, clearTimeout(r);
    try {
        return Q(r)
    } catch {
        try {
            return Q.call(null, r)
        } catch {
            return Q.call(this, r)
        }
    }
}
var ne = [],
    ge = !1,
    le, $e = -1;

function ba() {
    !ge || !le || (ge = !1, le.length ? ne = le.concat(ne) : $e = -1, ne.length && Zt())
}

function Zt() {
    if (!ge) {
        var r = Yt(ba);
        ge = !0;
        for (var e = ne.length; e;) {
            for (le = ne, ne = []; ++$e < e;) le && le[$e].run();
            $e = -1, e = ne.length
        }
        le = null, ge = !1, ha(r)
    }
}
x.nextTick = function (r) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
    ne.push(new Qt(r, e)), ne.length === 1 && !ge && Yt(Zt)
};

function Qt(r, e) {
    this.fun = r, this.array = e
}
Qt.prototype.run = function () {
    this.fun.apply(null, this.array)
};
x.title = "browser";
x.browser = !0;
x.env = {};
x.argv = [];
x.version = "";
x.versions = {};

function ae() {}
x.on = ae;
x.addListener = ae;
x.once = ae;
x.off = ae;
x.removeListener = ae;
x.removeAllListeners = ae;
x.emit = ae;
x.prependListener = ae;
x.prependOnceListener = ae;
x.listeners = function (r) {
    return []
};
x.binding = function (r) {
    throw new Error("process.binding is not supported")
};
x.cwd = function () {
    return "/"
};
x.chdir = function (r) {
    throw new Error("process.chdir is not supported")
};
x.umask = function () {
    return 0
};

function ue() {
    return ue = Object.assign ? Object.assign.bind() : function (r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n])
        }
        return r
    }, ue.apply(this, arguments)
}

function wa(r, e) {
    r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Te(r, e)
}

function Ke(r) {
    return Ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, Ke(r)
}

function Te(r, e) {
    return Te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (n, a) {
        return n.__proto__ = a, n
    }, Te(r, e)
}

function Fa() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
    } catch {
        return !1
    }
}

function qe(r, e, t) {
    return Fa() ? qe = Reflect.construct.bind() : qe = function (a, i, s) {
        var l = [null];
        l.push.apply(l, i);
        var p = Function.bind.apply(a, l),
            h = new p;
        return s && Te(h, s.prototype), h
    }, qe.apply(null, arguments)
}

function Ea(r) {
    return Function.toString.call(r).indexOf("[native code]") !== -1
}

function Ge(r) {
    var e = typeof Map == "function" ? new Map : void 0;
    return Ge = function (n) {
        if (n === null || !Ea(n)) return n;
        if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof e < "u") {
            if (e.has(n)) return e.get(n);
            e.set(n, a)
        }

        function a() {
            return qe(n, arguments, Ke(this).constructor)
        }
        return a.prototype = Object.create(n.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Te(a, n)
    }, Ge(r)
}
var Ta = /%[sdj%]/g,
    Oa = function () {};

function He(r) {
    if (!r || !r.length) return null;
    var e = {};
    return r.forEach(function (t) {
        var n = t.field;
        e[n] = e[n] || [], e[n].push(t)
    }), e
}

function K(r) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
    var a = 0,
        i = t.length;
    if (typeof r == "function") return r.apply(null, t);
    if (typeof r == "string") {
        var s = r.replace(Ta, function (l) {
            if (l === "%%") return "%";
            if (a >= i) return l;
            switch (l) {
                case "%s":
                    return String(t[a++]);
                case "%d":
                    return Number(t[a++]);
                case "%j":
                    try {
                        return JSON.stringify(t[a++])
                    } catch {
                        return "[Circular]"
                    }
                    break;
                default:
                    return l
            }
        });
        return s
    }
    return r
}

function Sa(r) {
    return r === "string" || r === "url" || r === "hex" || r === "email" || r === "date" || r === "pattern"
}

function I(r, e) {
    return !!(r == null || e === "array" && Array.isArray(r) && !r.length || Sa(e) && typeof r == "string" && !r)
}

function ja(r, e, t) {
    var n = [],
        a = 0,
        i = r.length;

    function s(l) {
        n.push.apply(n, l || []), a++, a === i && t(n)
    }
    r.forEach(function (l) {
        e(l, s)
    })
}

function bt(r, e, t) {
    var n = 0,
        a = r.length;

    function i(s) {
        if (s && s.length) {
            t(s);
            return
        }
        var l = n;
        n = n + 1, l < a ? e(r[l], i) : t([])
    }
    i([])
}

function $a(r) {
    var e = [];
    return Object.keys(r).forEach(function (t) {
        e.push.apply(e, r[t] || [])
    }), e
}
var wt = function (r) {
    wa(e, r);

    function e(t, n) {
        var a;
        return a = r.call(this, "Async Validation Error") || this, a.errors = t, a.fields = n, a
    }
    return e
}(Ge(Error));

function qa(r, e, t, n, a) {
    if (e.first) {
        var i = new Promise(function (F, f) {
            var g = function (u) {
                    return n(u), u.length ? f(new wt(u, He(u))) : F(a)
                },
                o = $a(r);
            bt(o, t, g)
        });
        return i.catch(function (F) {
            return F
        }), i
    }
    var s = e.firstFields === !0 ? Object.keys(r) : e.firstFields || [],
        l = Object.keys(r),
        p = l.length,
        h = 0,
        y = [],
        v = new Promise(function (F, f) {
            var g = function (d) {
                if (y.push.apply(y, d), h++, h === p) return n(y), y.length ? f(new wt(y, He(y))) : F(a)
            };
            l.length || (n(y), F(a)), l.forEach(function (o) {
                var d = r[o];
                s.indexOf(o) !== -1 ? bt(d, t, g) : ja(d, t, g)
            })
        });
    return v.catch(function (F) {
        return F
    }), v
}

function Pa(r) {
    return !!(r && r.message !== void 0)
}

function Aa(r, e) {
    for (var t = r, n = 0; n < e.length; n++) {
        if (t == null) return t;
        t = t[e[n]]
    }
    return t
}

function Ft(r, e) {
    return function (t) {
        var n;
        return r.fullFields ? n = Aa(e, r.fullFields) : n = e[t.field || r.fullField], Pa(t) ? (t.field = t.field || r.fullField, t.fieldValue = n, t) : {
            message: typeof t == "function" ? t() : t,
            fieldValue: n,
            field: t.field || r.fullField
        }
    }
}

function Et(r, e) {
    if (e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var n = e[t];
                typeof n == "object" && typeof r[t] == "object" ? r[t] = ue({}, r[t], n) : r[t] = n
            }
    }
    return r
}
var er = function (e, t, n, a, i, s) {
        e.required && (!n.hasOwnProperty(e.field) || I(t, s || e.type)) && a.push(K(i.messages.required, e.fullField))
    },
    _a = function (e, t, n, a, i) {
        (/^\s+$/.test(t) || t === "") && a.push(K(i.messages.whitespace, e.fullField))
    },
    je, Ra = function () {
        if (je) return je;
        var r = "[a-fA-F\\d:]",
            e = function (m) {
                return m && m.includeBoundaries ? "(?:(?<=\\s|^)(?=" + r + ")|(?<=" + r + ")(?=\\s|$))" : ""
            },
            t = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
            n = "[a-fA-F\\d]{1,4}",
            a = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + t + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + t + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + t + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + t + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + t + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + t + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + t + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
            i = new RegExp("(?:^" + t + "$)|(?:^" + a + "$)"),
            s = new RegExp("^" + t + "$"),
            l = new RegExp("^" + a + "$"),
            p = function (m) {
                return m && m.exact ? i : new RegExp("(?:" + e(m) + t + e(m) + ")|(?:" + e(m) + a + e(m) + ")", "g")
            };
        p.v4 = function (w) {
            return w && w.exact ? s : new RegExp("" + e(w) + t + e(w), "g")
        }, p.v6 = function (w) {
            return w && w.exact ? l : new RegExp("" + e(w) + a + e(w), "g")
        };
        var h = "(?:(?:[a-z]+:)?//)",
            y = "(?:\\S+(?::\\S*)?@)?",
            v = p.v4().source,
            F = p.v6().source,
            f = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
            g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
            o = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
            d = "(?::\\d{2,5})?",
            u = '(?:[/?#][^\\s"]*)?',
            S = "(?:" + h + "|www\\.)" + y + "(?:localhost|" + v + "|" + F + "|" + f + g + o + ")" + d + u;
        return je = new RegExp("(?:^" + S + "$)", "i"), je
    },
    Tt = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    },
    be = {
        integer: function (e) {
            return be.number(e) && parseInt(e, 10) === e
        },
        float: function (e) {
            return be.number(e) && !be.integer(e)
        },
        array: function (e) {
            return Array.isArray(e)
        },
        regexp: function (e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e)
            } catch {
                return !1
            }
        },
        date: function (e) {
            return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime())
        },
        number: function (e) {
            return isNaN(e) ? !1 : typeof e == "number"
        },
        object: function (e) {
            return typeof e == "object" && !be.array(e)
        },
        method: function (e) {
            return typeof e == "function"
        },
        email: function (e) {
            return typeof e == "string" && e.length <= 320 && !!e.match(Tt.email)
        },
        url: function (e) {
            return typeof e == "string" && e.length <= 2048 && !!e.match(Ra())
        },
        hex: function (e) {
            return typeof e == "string" && !!e.match(Tt.hex)
        }
    },
    La = function (e, t, n, a, i) {
        if (e.required && t === void 0) {
            er(e, t, n, a, i);
            return
        }
        var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"],
            l = e.type;
        s.indexOf(l) > -1 ? be[l](t) || a.push(K(i.messages.types[l], e.fullField, e.type)) : l && typeof t !== e.type && a.push(K(i.messages.types[l], e.fullField, e.type))
    },
    Ca = function (e, t, n, a, i) {
        var s = typeof e.len == "number",
            l = typeof e.min == "number",
            p = typeof e.max == "number",
            h = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            y = t,
            v = null,
            F = typeof t == "number",
            f = typeof t == "string",
            g = Array.isArray(t);
        if (F ? v = "number" : f ? v = "string" : g && (v = "array"), !v) return !1;
        g && (y = t.length), f && (y = t.replace(h, "_").length), s ? y !== e.len && a.push(K(i.messages[v].len, e.fullField, e.len)) : l && !p && y < e.min ? a.push(K(i.messages[v].min, e.fullField, e.min)) : p && !l && y > e.max ? a.push(K(i.messages[v].max, e.fullField, e.max)) : l && p && (y < e.min || y > e.max) && a.push(K(i.messages[v].range, e.fullField, e.min, e.max))
    },
    pe = "enum",
    xa = function (e, t, n, a, i) {
        e[pe] = Array.isArray(e[pe]) ? e[pe] : [], e[pe].indexOf(t) === -1 && a.push(K(i.messages[pe], e.fullField, e[pe].join(", ")))
    },
    Ia = function (e, t, n, a, i) {
        if (e.pattern) {
            if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(t) || a.push(K(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
            else if (typeof e.pattern == "string") {
                var s = new RegExp(e.pattern);
                s.test(t) || a.push(K(i.messages.pattern.mismatch, e.fullField, t, e.pattern))
            }
        }
    },
    O = {
        required: er,
        whitespace: _a,
        type: La,
        range: Ca,
        enum: xa,
        pattern: Ia
    },
    Ma = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t, "string") && !e.required) return n();
            O.required(e, t, a, s, i, "string"), I(t, "string") || (O.type(e, t, a, s, i), O.range(e, t, a, s, i), O.pattern(e, t, a, s, i), e.whitespace === !0 && O.whitespace(e, t, a, s, i))
        }
        n(s)
    },
    Ua = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && O.type(e, t, a, s, i)
        }
        n(s)
    },
    Na = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (t === "" && (t = void 0), I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && (O.type(e, t, a, s, i), O.range(e, t, a, s, i))
        }
        n(s)
    },
    Ba = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && O.type(e, t, a, s, i)
        }
        n(s)
    },
    ka = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), I(t) || O.type(e, t, a, s, i)
        }
        n(s)
    },
    Da = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && (O.type(e, t, a, s, i), O.range(e, t, a, s, i))
        }
        n(s)
    },
    Va = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && (O.type(e, t, a, s, i), O.range(e, t, a, s, i))
        }
        n(s)
    },
    Wa = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (t == null && !e.required) return n();
            O.required(e, t, a, s, i, "array"), t != null && (O.type(e, t, a, s, i), O.range(e, t, a, s, i))
        }
        n(s)
    },
    za = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && O.type(e, t, a, s, i)
        }
        n(s)
    },
    Ka = "enum",
    Ga = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i), t !== void 0 && O[Ka](e, t, a, s, i)
        }
        n(s)
    },
    Ha = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t, "string") && !e.required) return n();
            O.required(e, t, a, s, i), I(t, "string") || O.pattern(e, t, a, s, i)
        }
        n(s)
    },
    Xa = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t, "date") && !e.required) return n();
            if (O.required(e, t, a, s, i), !I(t, "date")) {
                var p;
                t instanceof Date ? p = t : p = new Date(t), O.type(e, p, a, s, i), p && O.range(e, p.getTime(), a, s, i)
            }
        }
        n(s)
    },
    Ja = function (e, t, n, a, i) {
        var s = [],
            l = Array.isArray(t) ? "array" : typeof t;
        O.required(e, t, a, s, i, l), n(s)
    },
    Me = function (e, t, n, a, i) {
        var s = e.type,
            l = [],
            p = e.required || !e.required && a.hasOwnProperty(e.field);
        if (p) {
            if (I(t, s) && !e.required) return n();
            O.required(e, t, a, l, i, s), I(t, s) || O.type(e, t, a, l, i)
        }
        n(l)
    },
    Ya = function (e, t, n, a, i) {
        var s = [],
            l = e.required || !e.required && a.hasOwnProperty(e.field);
        if (l) {
            if (I(t) && !e.required) return n();
            O.required(e, t, a, s, i)
        }
        n(s)
    },
    Fe = {
        string: Ma,
        method: Ua,
        number: Na,
        boolean: Ba,
        regexp: ka,
        integer: Da,
        float: Va,
        array: Wa,
        object: za,
        enum: Ga,
        pattern: Ha,
        date: Xa,
        url: Me,
        hex: Me,
        email: Me,
        required: Ja,
        any: Ya
    };

function Xe() {
    return {
        default: "Validation error on field %s",
        required: "%s is required",
        enum: "%s must be one of %s",
        whitespace: "%s cannot be empty",
        date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
        },
        types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            boolean: "%s is not a %s",
            integer: "%s is not an %s",
            float: "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
        },
        string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
        },
        number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
        },
        array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
        },
        pattern: {
            mismatch: "%s value %s does not match pattern %s"
        },
        clone: function () {
            var e = JSON.parse(JSON.stringify(this));
            return e.clone = this.clone, e
        }
    }
}
var Je = Xe(),
    Oe = function () {
        function r(t) {
            this.rules = null, this._messages = Je, this.define(t)
        }
        var e = r.prototype;
        return e.define = function (n) {
            var a = this;
            if (!n) throw new Error("Cannot configure a schema with no rules");
            if (typeof n != "object" || Array.isArray(n)) throw new Error("Rules must be an object");
            this.rules = {}, Object.keys(n).forEach(function (i) {
                var s = n[i];
                a.rules[i] = Array.isArray(s) ? s : [s]
            })
        }, e.messages = function (n) {
            return n && (this._messages = Et(Xe(), n)), this._messages
        }, e.validate = function (n, a, i) {
            var s = this;
            a === void 0 && (a = {}), i === void 0 && (i = function () {});
            var l = n,
                p = a,
                h = i;
            if (typeof p == "function" && (h = p, p = {}), !this.rules || Object.keys(this.rules).length === 0) return h && h(null, l), Promise.resolve(l);

            function y(o) {
                var d = [],
                    u = {};

                function S(m) {
                    if (Array.isArray(m)) {
                        var E;
                        d = (E = d).concat.apply(E, m)
                    } else d.push(m)
                }
                for (var w = 0; w < o.length; w++) S(o[w]);
                d.length ? (u = He(d), h(d, u)) : h(null, l)
            }
            if (p.messages) {
                var v = this.messages();
                v === Je && (v = Xe()), Et(v, p.messages), p.messages = v
            } else p.messages = this.messages();
            var F = {},
                f = p.keys || Object.keys(this.rules);
            f.forEach(function (o) {
                var d = s.rules[o],
                    u = l[o];
                d.forEach(function (S) {
                    var w = S;
                    typeof w.transform == "function" && (l === n && (l = ue({}, l)), u = l[o] = w.transform(u)), typeof w == "function" ? w = {
                        validator: w
                    } : w = ue({}, w), w.validator = s.getValidationMethod(w), w.validator && (w.field = o, w.fullField = w.fullField || o, w.type = s.getType(w), F[o] = F[o] || [], F[o].push({
                        rule: w,
                        value: u,
                        source: l,
                        field: o
                    }))
                })
            });
            var g = {};
            return qa(F, p, function (o, d) {
                var u = o.rule,
                    S = (u.type === "object" || u.type === "array") && (typeof u.fields == "object" || typeof u.defaultField == "object");
                S = S && (u.required || !u.required && o.value), u.field = o.field;

                function w(T, A) {
                    return ue({}, A, {
                        fullField: u.fullField + "." + T,
                        fullFields: u.fullFields ? [].concat(u.fullFields, [T]) : [T]
                    })
                }

                function m(T) {
                    T === void 0 && (T = []);
                    var A = Array.isArray(T) ? T : [T];
                    !p.suppressWarning && A.length && r.warning("async-validator:", A), A.length && u.message !== void 0 && (A = [].concat(u.message));
                    var L = A.map(Ft(u, l));
                    if (p.first && L.length) return g[u.field] = 1, d(L);
                    if (!S) d(L);
                    else {
                        if (u.required && !o.value) return u.message !== void 0 ? L = [].concat(u.message).map(Ft(u, l)) : p.error && (L = [p.error(u, K(p.messages.required, u.field))]), d(L);
                        var W = {};
                        u.defaultField && Object.keys(o.value).map(function (U) {
                            W[U] = u.defaultField
                        }), W = ue({}, W, o.rule.fields);
                        var re = {};
                        Object.keys(W).forEach(function (U) {
                            var k = W[U],
                                J = Array.isArray(k) ? k : [k];
                            re[U] = J.map(w.bind(null, U))
                        });
                        var X = new r(re);
                        X.messages(p.messages), o.rule.options && (o.rule.options.messages = p.messages, o.rule.options.error = p.error), X.validate(o.value, o.rule.options || p, function (U) {
                            var k = [];
                            L && L.length && k.push.apply(k, L), U && U.length && k.push.apply(k, U), d(k.length ? k : null)
                        })
                    }
                }
                var E;
                if (u.asyncValidator) E = u.asyncValidator(u, o.value, m, o.source, p);
                else if (u.validator) {
                    try {
                        E = u.validator(u, o.value, m, o.source, p)
                    } catch (T) {
                        console.error == null || console.error(T), p.suppressValidatorError || setTimeout(function () {
                            throw T
                        }, 0), m(T.message)
                    }
                    E === !0 ? m() : E === !1 ? m(typeof u.message == "function" ? u.message(u.fullField || u.field) : u.message || (u.fullField || u.field) + " fails") : E instanceof Array ? m(E) : E instanceof Error && m(E.message)
                }
                E && E.then && E.then(function () {
                    return m()
                }, function (T) {
                    return m(T)
                })
            }, function (o) {
                y(o)
            }, l)
        }, e.getType = function (n) {
            if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Fe.hasOwnProperty(n.type)) throw new Error(K("Unknown rule type %s", n.type));
            return n.type || "string"
        }, e.getValidationMethod = function (n) {
            if (typeof n.validator == "function") return n.validator;
            var a = Object.keys(n),
                i = a.indexOf("message");
            return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? Fe.required : Fe[this.getType(n)] || void 0
        }, r
    }();
Oe.register = function (e, t) {
    if (typeof t != "function") throw new Error("Cannot register a validator by type, validator is not a function");
    Fe[e] = t
};
Oe.warning = Oa;
Oe.messages = Je;
Oe.validators = Fe;
const Za = ["", "error", "validating", "success"],
    Qa = se({
        label: String,
        labelWidth: {
            type: [String, Number],
            default: ""
        },
        labelPosition: {
            type: String,
            values: ["left", "right", "top", ""],
            default: ""
        },
        prop: {
            type: $([String, Array])
        },
        required: {
            type: Boolean,
            default: void 0
        },
        rules: {
            type: $([Object, Array])
        },
        error: String,
        validateStatus: {
            type: String,
            values: Za
        },
        for: String,
        inlineMessage: {
            type: [String, Boolean],
            default: ""
        },
        showMessage: {
            type: Boolean,
            default: !0
        },
        size: {
            type: String,
            values: Rt
        }
    }),
    Ot = "ElLabelWrap";
var ei = G({
    name: Ot,
    props: {
        isAutoWidth: Boolean,
        updateAll: Boolean
    },
    setup(r, {
        slots: e
    }) {
        const t = Ee(Qe, void 0),
            n = Ee(Ne);
        n || _e(Ot, "usage: <el-form-item><label-wrap /></el-form-item>");
        const a = ie("form"),
            i = te(),
            s = te(0),
            l = () => {
                var y;
                if ((y = i.value) != null && y.firstElementChild) {
                    const v = window.getComputedStyle(i.value.firstElementChild).width;
                    return Math.ceil(Number.parseFloat(v))
                } else return 0
            },
            p = (y = "update") => {
                Ut(() => {
                    e.default && r.isAutoWidth && (y === "update" ? s.value = l() : y === "remove" && (t == null || t.deregisterLabelWidth(s.value)))
                })
            },
            h = () => p("update");
        return It(() => {
            h()
        }), tt(() => {
            p("remove")
        }), yr(() => h()), ye(s, (y, v) => {
            r.updateAll && (t == null || t.registerLabelWidth(y, v))
        }), hr(_(() => {
            var y, v;
            return (v = (y = i.value) == null ? void 0 : y.firstElementChild) != null ? v : null
        }), h), () => {
            var y, v;
            if (!e) return null;
            const {
                isAutoWidth: F
            } = r;
            if (F) {
                const f = t == null ? void 0 : t.autoLabelWidth,
                    g = n == null ? void 0 : n.hasLabel,
                    o = {};
                if (g && f && f !== "auto") {
                    const d = Math.max(0, Number.parseInt(f, 10) - s.value),
                        S = (n.labelPosition || t.labelPosition) === "left" ? "marginRight" : "marginLeft";
                    d && (o[S] = `${d}px`)
                }
                return z("div", {
                    ref: i,
                    class: [a.be("item", "label-wrap")],
                    style: o
                }, [(y = e.default) == null ? void 0 : y.call(e)])
            } else return z(Mt, {
                ref: i
            }, [(v = e.default) == null ? void 0 : v.call(e)])
        }
    }
});
const ti = G({
        name: "ElFormItem"
    }),
    ri = G({
        ...ti,
        props: Qa,
        setup(r, {
            expose: e
        }) {
            const t = r,
                n = br(),
                a = Ee(Qe, void 0),
                i = Ee(Ne, void 0),
                s = Lt(void 0, {
                    formItem: !1
                }),
                l = ie("form-item"),
                p = wr().value,
                h = te([]),
                y = te(""),
                v = Fr(y, 100),
                F = te(""),
                f = te();
            let g, o = !1;
            const d = _(() => t.labelPosition || (a == null ? void 0 : a.labelPosition)),
                u = _(() => {
                    if (d.value === "top") return {};
                    const b = ut(t.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
                    return b ? {
                        width: b
                    } : {}
                }),
                S = _(() => {
                    if (d.value === "top" || a != null && a.inline) return {};
                    if (!t.label && !t.labelWidth && re) return {};
                    const b = ut(t.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
                    return !t.label && !n.label ? {
                        marginLeft: b
                    } : {}
                }),
                w = _(() => [l.b(), l.m(s.value), l.is("error", y.value === "error"), l.is("validating", y.value === "validating"), l.is("success", y.value === "success"), l.is("required", sr.value || t.required), l.is("no-asterisk", a == null ? void 0 : a.hideRequiredAsterisk), (a == null ? void 0 : a.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left", {
                    [l.m("feedback")]: a == null ? void 0 : a.statusIcon,
                    [l.m(`label-${d.value}`)]: d.value
                }]),
                m = _(() => _t(t.inlineMessage) ? t.inlineMessage : (a == null ? void 0 : a.inlineMessage) || !1),
                E = _(() => [l.e("error"), {
                    [l.em("error", "inline")]: m.value
                }]),
                T = _(() => t.prop ? me(t.prop) ? t.prop.join(".") : t.prop : ""),
                A = _(() => !!(t.label || n.label)),
                L = _(() => {
                    var b;
                    return (b = t.for) != null ? b : h.value.length === 1 ? h.value[0] : void 0
                }),
                W = _(() => !L.value && A.value),
                re = !!i,
                X = _(() => {
                    const b = a == null ? void 0 : a.model;
                    if (!(!b || !t.prop)) return Ie(b, t.prop).value
                }),
                U = _(() => {
                    const {
                        required: b
                    } = t, j = [];
                    t.rules && j.push(...Ve(t.rules));
                    const N = a == null ? void 0 : a.rules;
                    if (N && t.prop) {
                        const M = Ie(N, t.prop).value;
                        M && j.push(...Ve(M))
                    }
                    if (b !== void 0) {
                        const M = j.map((Y, ce) => [Y, ce]).filter(([Y]) => Object.keys(Y).includes("required"));
                        if (M.length > 0)
                            for (const [Y, ce] of M) Y.required !== b && (j[ce] = {
                                ...Y,
                                required: b
                            });
                        else j.push({
                            required: b
                        })
                    }
                    return j
                }),
                k = _(() => U.value.length > 0),
                J = b => U.value.filter(N => !N.trigger || !b ? !0 : me(N.trigger) ? N.trigger.includes(b) : N.trigger === b).map(({
                    trigger: N,
                    ...M
                }) => M),
                sr = _(() => U.value.some(b => b.required)),
                or = _(() => {
                    var b;
                    return v.value === "error" && t.showMessage && ((b = a == null ? void 0 : a.showMessage) != null ? b : !0)
                }),
                at = _(() => `${t.label||""}${(a==null?void 0:a.labelSuffix)||""}`),
                fe = b => {
                    y.value = b
                },
                lr = b => {
                    var j, N;
                    const {
                        errors: M,
                        fields: Y
                    } = b;
                    (!M || !Y) && console.error(b), fe("error"), F.value = M ? (N = (j = M == null ? void 0 : M[0]) == null ? void 0 : j.message) != null ? N : `${t.prop} is required` : "", a == null || a.emit("validate", t.prop, !1, F.value)
                },
                ur = () => {
                    fe("success"), a == null || a.emit("validate", t.prop, !0, "")
                },
                fr = async b => {
                    const j = T.value;
                    return new Oe({
                        [j]: b
                    }).validate({
                        [j]: X.value
                    }, {
                        firstFields: !0
                    }).then(() => (ur(), !0)).catch(M => (lr(M), Promise.reject(M)))
                }, it = async (b, j) => {
                    if (o || !t.prop) return !1;
                    const N = et(j);
                    if (!k.value) return j == null || j(!1), !1;
                    const M = J(b);
                    return M.length === 0 ? (j == null || j(!0), !0) : (fe("validating"), fr(M).then(() => (j == null || j(!0), !0)).catch(Y => {
                        const {
                            fields: ce
                        } = Y;
                        return j == null || j(!1, ce), N ? !1 : Promise.reject(ce)
                    }))
                }, Ce = () => {
                    fe(""), F.value = "", o = !1
                }, st = async () => {
                    const b = a == null ? void 0 : a.model;
                    if (!b || !t.prop) return;
                    const j = Ie(b, t.prop);
                    o = !0, j.value = yt(g), await Ut(), Ce(), o = !1
                }, cr = b => {
                    h.value.includes(b) || h.value.push(b)
                }, dr = b => {
                    h.value = h.value.filter(j => j !== b)
                };
            ye(() => t.error, b => {
                F.value = b || "", fe(b ? "error" : "")
            }, {
                immediate: !0
            }), ye(() => t.validateStatus, b => fe(b || ""));
            const xe = Ue({
                ...xt(t),
                $el: f,
                size: s,
                validateMessage: F,
                validateState: y,
                labelId: p,
                inputIds: h,
                isGroup: W,
                hasLabel: A,
                fieldValue: X,
                addInputId: cr,
                removeInputId: dr,
                resetField: st,
                clearValidate: Ce,
                validate: it,
                propString: T
            });
            return Ze(Ne, xe), It(() => {
                t.prop && (a == null || a.addField(xe), g = yt(X.value))
            }), tt(() => {
                a == null || a.removeField(xe)
            }), e({
                size: s,
                validateMessage: F,
                validateState: y,
                validate: it,
                clearValidate: Ce,
                resetField: st
            }), (b, j) => {
                var N;
                return R(), H("div", {
                    ref_key: "formItemRef",
                    ref: f,
                    class: P(c(w)),
                    role: c(W) ? "group" : void 0,
                    "aria-labelledby": c(W) ? c(p) : void 0
                }, [z(c(ei), {
                    "is-auto-width": c(u).width === "auto",
                    "update-all": ((N = c(a)) == null ? void 0 : N.labelWidth) === "auto"
                }, {
                    default: V(() => [c(A) ? (R(), ee(Er(c(L) ? "label" : "div"), {
                        key: 0,
                        id: c(p),
                        for: c(L),
                        class: P(c(l).e("label")),
                        style: Be(c(u))
                    }, {
                        default: V(() => [B(b.$slots, "label", {
                            label: c(at)
                        }, () => [Tr(Pe(c(at)), 1)])]),
                        _: 3
                    }, 8, ["id", "for", "class", "style"])) : C("v-if", !0)]),
                    _: 3
                }, 8, ["is-auto-width", "update-all"]), oe("div", {
                    class: P(c(l).e("content")),
                    style: Be(c(S))
                }, [B(b.$slots, "default"), z(Nt, {
                    name: `${c(l).namespace.value}-zoom-in-top`
                }, {
                    default: V(() => [c(or) ? B(b.$slots, "error", {
                        key: 0,
                        error: F.value
                    }, () => [oe("div", {
                        class: P(c(E))
                    }, Pe(F.value), 3)]) : C("v-if", !0)]),
                    _: 3
                }, 8, ["name"])], 6)], 10, ["role", "aria-labelledby"])
            }
        }
    });
var tr = he(ri, [
    ["__file", "form-item.vue"]
]);
const Pi = Bt(ya, {
        FormItem: tr
    }),
    Ai = Or(tr),
    rr = Symbol("uploadContextKey"),
    ni = "ElUpload";
class ai extends Error {
    constructor(e, t, n, a) {
        super(e), this.name = "UploadAjaxError", this.status = t, this.method = n, this.url = a
    }
}

function St(r, e, t) {
    let n;
    return t.response ? n = `${t.response.error||t.response}` : t.responseText ? n = `${t.responseText}` : n = `fail to ${e.method} ${r} ${t.status}`, new ai(n, t.status, e.method, r)
}

function ii(r) {
    const e = r.responseText || r.response;
    if (!e) return e;
    try {
        return JSON.parse(e)
    } catch {
        return e
    }
}
const si = r => {
        typeof XMLHttpRequest > "u" && _e(ni, "XMLHttpRequest is undefined");
        const e = new XMLHttpRequest,
            t = r.action;
        e.upload && e.upload.addEventListener("progress", i => {
            const s = i;
            s.percent = i.total > 0 ? i.loaded / i.total * 100 : 0, r.onProgress(s)
        });
        const n = new FormData;
        if (r.data)
            for (const [i, s] of Object.entries(r.data)) me(s) && s.length ? n.append(i, ...s) : n.append(i, s);
        n.append(r.filename, r.file, r.file.name), e.addEventListener("error", () => {
            r.onError(St(t, r, e))
        }), e.addEventListener("load", () => {
            if (e.status < 200 || e.status >= 300) return r.onError(St(t, r, e));
            r.onSuccess(ii(e))
        }), e.open(r.method, t, !0), r.withCredentials && "withCredentials" in e && (e.withCredentials = !0);
        const a = r.headers || {};
        if (a instanceof Headers) a.forEach((i, s) => e.setRequestHeader(s, i));
        else
            for (const [i, s] of Object.entries(a)) kt(s) || e.setRequestHeader(i, String(s));
        return e.send(n), e
    },
    nr = ["text", "picture", "picture-card"];
let oi = 1;
const Ye = () => Date.now() + oi++,
    ar = se({
        action: {
            type: String,
            default: "#"
        },
        headers: {
            type: $(Object)
        },
        method: {
            type: String,
            default: "post"
        },
        data: {
            type: $([Object, Function, Promise]),
            default: () => ke({})
        },
        multiple: Boolean,
        name: {
            type: String,
            default: "file"
        },
        drag: Boolean,
        withCredentials: Boolean,
        showFileList: {
            type: Boolean,
            default: !0
        },
        accept: {
            type: String,
            default: ""
        },
        fileList: {
            type: $(Array),
            default: () => ke([])
        },
        autoUpload: {
            type: Boolean,
            default: !0
        },
        listType: {
            type: String,
            values: nr,
            default: "text"
        },
        httpRequest: {
            type: $(Function),
            default: si
        },
        disabled: Boolean,
        limit: Number
    }),
    li = se({
        ...ar,
        beforeUpload: {
            type: $(Function),
            default: D
        },
        beforeRemove: {
            type: $(Function)
        },
        onRemove: {
            type: $(Function),
            default: D
        },
        onChange: {
            type: $(Function),
            default: D
        },
        onPreview: {
            type: $(Function),
            default: D
        },
        onSuccess: {
            type: $(Function),
            default: D
        },
        onProgress: {
            type: $(Function),
            default: D
        },
        onError: {
            type: $(Function),
            default: D
        },
        onExceed: {
            type: $(Function),
            default: D
        },
        crossorigin: {
            type: $(String)
        }
    }),
    ui = se({
        files: {
            type: $(Array),
            default: () => ke([])
        },
        disabled: Boolean,
        handlePreview: {
            type: $(Function),
            default: D
        },
        listType: {
            type: String,
            values: nr,
            default: "text"
        },
        crossorigin: {
            type: $(String)
        }
    }),
    fi = {
        remove: r => !!r
    },
    ci = G({
        name: "ElUploadList"
    }),
    di = G({
        ...ci,
        props: ui,
        emits: fi,
        setup(r, {
            emit: e
        }) {
            const t = r,
                {
                    t: n
                } = Sr(),
                a = ie("upload"),
                i = ie("icon"),
                s = ie("list"),
                l = Re(),
                p = te(!1),
                h = _(() => [a.b("list"), a.bm("list", t.listType), a.is("disabled", t.disabled)]),
                y = v => {
                    e("remove", v)
                };
            return (v, F) => (R(), ee(Nt, {
                tag: "ul",
                class: P(c(h)),
                name: c(s).b()
            }, {
                default: V(() => [(R(!0), H(Mt, null, jr(v.files, (f, g) => (R(), H("li", {
                    key: f.uid || f.name,
                    class: P([c(a).be("list", "item"), c(a).is(f.status), {
                        focusing: p.value
                    }]),
                    tabindex: "0",
                    onKeydown: Dt(o => !c(l) && y(f), ["delete"]),
                    onFocus: o => p.value = !0,
                    onBlur: o => p.value = !1,
                    onClick: o => p.value = !1
                }, [B(v.$slots, "default", {
                    file: f,
                    index: g
                }, () => [v.listType === "picture" || f.status !== "uploading" && v.listType === "picture-card" ? (R(), H("img", {
                    key: 0,
                    class: P(c(a).be("list", "item-thumbnail")),
                    src: f.url,
                    crossorigin: v.crossorigin,
                    alt: ""
                }, null, 10, ["src", "crossorigin"])) : C("v-if", !0), f.status === "uploading" || v.listType !== "picture-card" ? (R(), H("div", {
                    key: 1,
                    class: P(c(a).be("list", "item-info"))
                }, [oe("a", {
                    class: P(c(a).be("list", "item-name")),
                    onClick: ve(o => v.handlePreview(f), ["prevent"])
                }, [z(c(de), {
                    class: P(c(i).m("document"))
                }, {
                    default: V(() => [z(c($r))]),
                    _: 1
                }, 8, ["class"]), oe("span", {
                    class: P(c(a).be("list", "item-file-name")),
                    title: f.name
                }, Pe(f.name), 11, ["title"])], 10, ["onClick"]), f.status === "uploading" ? (R(), ee(c(Ir), {
                    key: 0,
                    type: v.listType === "picture-card" ? "circle" : "line",
                    "stroke-width": v.listType === "picture-card" ? 6 : 2,
                    percentage: Number(f.percentage),
                    style: Be(v.listType === "picture-card" ? "" : "margin-top: 0.5rem")
                }, null, 8, ["type", "stroke-width", "percentage", "style"])) : C("v-if", !0)], 2)) : C("v-if", !0), oe("label", {
                    class: P(c(a).be("list", "item-status-label"))
                }, [v.listType === "text" ? (R(), ee(c(de), {
                    key: 0,
                    class: P([c(i).m("upload-success"), c(i).m("circle-check")])
                }, {
                    default: V(() => [z(c(qr))]),
                    _: 1
                }, 8, ["class"])) : ["picture-card", "picture"].includes(v.listType) ? (R(), ee(c(de), {
                    key: 1,
                    class: P([c(i).m("upload-success"), c(i).m("check")])
                }, {
                    default: V(() => [z(c(Pr))]),
                    _: 1
                }, 8, ["class"])) : C("v-if", !0)], 2), c(l) ? C("v-if", !0) : (R(), ee(c(de), {
                    key: 2,
                    class: P(c(i).m("close")),
                    onClick: o => y(f)
                }, {
                    default: V(() => [z(c(Ar))]),
                    _: 2
                }, 1032, ["class", "onClick"])), C(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), C(" This is a bug which needs to be fixed "), C(" TODO: Fix the incorrect navigation interaction "), c(l) ? C("v-if", !0) : (R(), H("i", {
                    key: 3,
                    class: P(c(i).m("close-tip"))
                }, Pe(c(n)("el.upload.deleteTip")), 3)), v.listType === "picture-card" ? (R(), H("span", {
                    key: 4,
                    class: P(c(a).be("list", "item-actions"))
                }, [oe("span", {
                    class: P(c(a).be("list", "item-preview")),
                    onClick: o => v.handlePreview(f)
                }, [z(c(de), {
                    class: P(c(i).m("zoom-in"))
                }, {
                    default: V(() => [z(c(_r))]),
                    _: 1
                }, 8, ["class"])], 10, ["onClick"]), c(l) ? C("v-if", !0) : (R(), H("span", {
                    key: 0,
                    class: P(c(a).be("list", "item-delete")),
                    onClick: o => y(f)
                }, [z(c(de), {
                    class: P(c(i).m("delete"))
                }, {
                    default: V(() => [z(c(Rr))]),
                    _: 1
                }, 8, ["class"])], 10, ["onClick"]))], 2)) : C("v-if", !0)])], 42, ["onKeydown", "onFocus", "onBlur", "onClick"]))), 128)), B(v.$slots, "append")]),
                _: 3
            }, 8, ["class", "name"]))
        }
    });
var jt = he(di, [
    ["__file", "upload-list.vue"]
]);
const pi = se({
        disabled: Boolean
    }),
    vi = {
        file: r => me(r)
    },
    ir = "ElUploadDrag",
    gi = G({
        name: ir
    }),
    mi = G({
        ...gi,
        props: pi,
        emits: vi,
        setup(r, {
            emit: e
        }) {
            Ee(rr) || _e(ir, "usage: <el-upload><el-upload-dragger /></el-upload>");
            const n = ie("upload"),
                a = te(!1),
                i = Re(),
                s = h => {
                    if (i.value) return;
                    a.value = !1, h.stopPropagation();
                    const y = Array.from(h.dataTransfer.files),
                        v = h.dataTransfer.items || [];
                    y.forEach((F, f) => {
                        var g;
                        const o = v[f],
                            d = (g = o == null ? void 0 : o.webkitGetAsEntry) == null ? void 0 : g.call(o);
                        d && (F.isDirectory = d.isDirectory)
                    }), e("file", y)
                },
                l = () => {
                    i.value || (a.value = !0)
                },
                p = h => {
                    h.currentTarget.contains(h.relatedTarget) || (a.value = !1)
                };
            return (h, y) => (R(), H("div", {
                class: P([c(n).b("dragger"), c(n).is("dragover", a.value)]),
                onDrop: ve(s, ["prevent"]),
                onDragover: ve(l, ["prevent"]),
                onDragleave: ve(p, ["prevent"])
            }, [B(h.$slots, "default")], 42, ["onDrop", "onDragover", "onDragleave"]))
        }
    });
var yi = he(mi, [
    ["__file", "upload-dragger.vue"]
]);
const hi = se({
        ...ar,
        beforeUpload: {
            type: $(Function),
            default: D
        },
        onRemove: {
            type: $(Function),
            default: D
        },
        onStart: {
            type: $(Function),
            default: D
        },
        onSuccess: {
            type: $(Function),
            default: D
        },
        onProgress: {
            type: $(Function),
            default: D
        },
        onError: {
            type: $(Function),
            default: D
        },
        onExceed: {
            type: $(Function),
            default: D
        }
    }),
    bi = G({
        name: "ElUploadContent",
        inheritAttrs: !1
    }),
    wi = G({
        ...bi,
        props: hi,
        setup(r, {
            expose: e
        }) {
            const t = r,
                n = ie("upload"),
                a = Re(),
                i = De({}),
                s = De(),
                l = o => {
                    if (o.length === 0) return;
                    const {
                        autoUpload: d,
                        limit: u,
                        fileList: S,
                        multiple: w,
                        onStart: m,
                        onExceed: E
                    } = t;
                    if (u && S.length + o.length > u) {
                        E(o, S);
                        return
                    }
                    w || (o = o.slice(0, 1));
                    for (const T of o) {
                        const A = T;
                        A.uid = Ye(), m(A), d && p(A)
                    }
                },
                p = async o => {
                    if (s.value.value = "", !t.beforeUpload) return y(o);
                    let d, u = {};
                    try {
                        const w = t.data,
                            m = t.beforeUpload(o);
                        u = ft(t.data) ? ht(t.data) : t.data, d = await m, ft(t.data) && Gr(w, u) && (u = ht(t.data))
                    } catch {
                        d = !1
                    }
                    if (d === !1) {
                        t.onRemove(o);
                        return
                    }
                    let S = o;
                    d instanceof Blob && (d instanceof File ? S = d : S = new File([d], o.name, {
                        type: o.type
                    })), y(Object.assign(S, {
                        uid: o.uid
                    }), u)
                }, h = async (o, d) => et(o) ? o(d) : o, y = async (o, d) => {
                    const {
                        headers: u,
                        data: S,
                        method: w,
                        withCredentials: m,
                        name: E,
                        action: T,
                        onProgress: A,
                        onSuccess: L,
                        onError: W,
                        httpRequest: re
                    } = t;
                    try {
                        d = await h(d ?? S, o)
                    } catch {
                        t.onRemove(o);
                        return
                    }
                    const {
                        uid: X
                    } = o, U = {
                        headers: u || {},
                        withCredentials: m,
                        file: o,
                        data: d,
                        method: w,
                        filename: E,
                        action: T,
                        onProgress: J => {
                            A(J, o)
                        },
                        onSuccess: J => {
                            L(J, o), delete i.value[X]
                        },
                        onError: J => {
                            W(J, o), delete i.value[X]
                        }
                    }, k = re(U);
                    i.value[X] = k, k instanceof Promise && k.then(U.onSuccess, U.onError)
                }, v = o => {
                    const d = o.target.files;
                    d && l(Array.from(d))
                }, F = () => {
                    a.value || (s.value.value = "", s.value.click())
                }, f = () => {
                    F()
                };
            return e({
                abort: o => {
                    Lr(i.value).filter(o ? ([u]) => String(o.uid) === u : () => !0).forEach(([u, S]) => {
                        S instanceof XMLHttpRequest && S.abort(), delete i.value[u]
                    })
                },
                upload: p
            }), (o, d) => (R(), H("div", {
                class: P([c(n).b(), c(n).m(o.listType), c(n).is("drag", o.drag), c(n).is("disabled", c(a))]),
                tabindex: c(a) ? "-1" : "0",
                onClick: F,
                onKeydown: Dt(ve(f, ["self"]), ["enter", "space"])
            }, [o.drag ? (R(), ee(yi, {
                key: 0,
                disabled: c(a),
                onFile: l
            }, {
                default: V(() => [B(o.$slots, "default")]),
                _: 3
            }, 8, ["disabled"])) : B(o.$slots, "default", {
                key: 1
            }), oe("input", {
                ref_key: "inputRef",
                ref: s,
                class: P(c(n).e("input")),
                name: o.name,
                disabled: c(a),
                multiple: o.multiple,
                accept: o.accept,
                type: "file",
                onChange: v,
                onClick: ve(() => {}, ["stop"])
            }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])], 42, ["tabindex", "onKeydown"]))
        }
    });
var $t = he(wi, [
    ["__file", "upload-content.vue"]
]);
const qt = "ElUpload",
    Pt = r => {
        var e;
        (e = r.url) != null && e.startsWith("blob:") && URL.revokeObjectURL(r.url)
    },
    Fi = (r, e) => {
        const t = Cr(r, "fileList", void 0, {
                passive: !0
            }),
            n = f => t.value.find(g => g.uid === f.uid);

        function a(f) {
            var g;
            (g = e.value) == null || g.abort(f)
        }

        function i(f = ["ready", "uploading", "success", "fail"]) {
            t.value = t.value.filter(g => !f.includes(g.status))
        }

        function s(f) {
            t.value = t.value.filter(g => g.uid !== f.uid)
        }
        const l = (f, g) => {
                const o = n(g);
                o && (console.error(f), o.status = "fail", s(o), r.onError(f, o, t.value), r.onChange(o, t.value))
            },
            p = (f, g) => {
                const o = n(g);
                o && (r.onProgress(f, o, t.value), o.status = "uploading", o.percentage = Math.round(f.percent))
            },
            h = (f, g) => {
                const o = n(g);
                o && (o.status = "success", o.response = f, r.onSuccess(f, o, t.value), r.onChange(o, t.value))
            },
            y = f => {
                kt(f.uid) && (f.uid = Ye());
                const g = {
                    name: f.name,
                    percentage: 0,
                    status: "ready",
                    size: f.size,
                    raw: f,
                    uid: f.uid
                };
                if (r.listType === "picture-card" || r.listType === "picture") try {
                    g.url = URL.createObjectURL(f)
                } catch (o) {
                    Ct(qt, o.message), r.onError(o, g, t.value)
                }
                t.value = [...t.value, g], r.onChange(g, t.value)
            },
            v = async f => {
                const g = f instanceof File ? n(f) : f;
                g || _e(qt, "file to be removed not found");
                const o = d => {
                    a(d), s(d), r.onRemove(d, t.value), Pt(d)
                };
                r.beforeRemove ? await r.beforeRemove(g, t.value) !== !1 && o(g) : o(g)
            };

        function F() {
            t.value.filter(({
                status: f
            }) => f === "ready").forEach(({
                raw: f
            }) => {
                var g;
                return f && ((g = e.value) == null ? void 0 : g.upload(f))
            })
        }
        return ye(() => r.listType, f => {
            f !== "picture-card" && f !== "picture" || (t.value = t.value.map(g => {
                const {
                    raw: o,
                    url: d
                } = g;
                if (!d && o) try {
                    g.url = URL.createObjectURL(o)
                } catch (u) {
                    r.onError(u, g, t.value)
                }
                return g
            }))
        }), ye(t, f => {
            for (const g of f) g.uid || (g.uid = Ye()), g.status || (g.status = "success")
        }, {
            immediate: !0,
            deep: !0
        }), {
            uploadFiles: t,
            abort: a,
            clearFiles: i,
            handleError: l,
            handleProgress: p,
            handleStart: y,
            handleSuccess: h,
            handleRemove: v,
            submit: F,
            revokeFileObjectURL: Pt
        }
    },
    Ei = G({
        name: "ElUpload"
    }),
    Ti = G({
        ...Ei,
        props: li,
        setup(r, {
            expose: e
        }) {
            const t = r,
                n = Re(),
                a = De(),
                {
                    abort: i,
                    submit: s,
                    clearFiles: l,
                    uploadFiles: p,
                    handleStart: h,
                    handleError: y,
                    handleRemove: v,
                    handleSuccess: F,
                    handleProgress: f,
                    revokeFileObjectURL: g
                } = Fi(t, a),
                o = _(() => t.listType === "picture-card"),
                d = _(() => ({
                    ...t,
                    fileList: p.value,
                    onStart: h,
                    onProgress: f,
                    onSuccess: F,
                    onError: y,
                    onRemove: v
                }));
            return tt(() => {
                p.value.forEach(g)
            }), Ze(rr, {
                accept: xr(t, "accept")
            }), e({
                abort: i,
                submit: s,
                clearFiles: l,
                handleStart: h,
                handleRemove: v
            }), (u, S) => (R(), H("div", null, [c(o) && u.showFileList ? (R(), ee(jt, {
                key: 0,
                disabled: c(n),
                "list-type": u.listType,
                files: c(p),
                crossorigin: u.crossorigin,
                "handle-preview": u.onPreview,
                onRemove: c(v)
            }, ct({
                append: V(() => [z($t, dt({
                    ref_key: "uploadRef",
                    ref: a
                }, c(d)), {
                    default: V(() => [u.$slots.trigger ? B(u.$slots, "trigger", {
                        key: 0
                    }) : C("v-if", !0), !u.$slots.trigger && u.$slots.default ? B(u.$slots, "default", {
                        key: 1
                    }) : C("v-if", !0)]),
                    _: 3
                }, 16)]),
                _: 2
            }, [u.$slots.file ? {
                name: "default",
                fn: V(({
                    file: w,
                    index: m
                }) => [B(u.$slots, "file", {
                    file: w,
                    index: m
                })])
            } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : C("v-if", !0), !c(o) || c(o) && !u.showFileList ? (R(), ee($t, dt({
                key: 1,
                ref_key: "uploadRef",
                ref: a
            }, c(d)), {
                default: V(() => [u.$slots.trigger ? B(u.$slots, "trigger", {
                    key: 0
                }) : C("v-if", !0), !u.$slots.trigger && u.$slots.default ? B(u.$slots, "default", {
                    key: 1
                }) : C("v-if", !0)]),
                _: 3
            }, 16)) : C("v-if", !0), u.$slots.trigger ? B(u.$slots, "default", {
                key: 2
            }) : C("v-if", !0), B(u.$slots, "tip"), !c(o) && u.showFileList ? (R(), ee(jt, {
                key: 3,
                disabled: c(n),
                "list-type": u.listType,
                files: c(p),
                crossorigin: u.crossorigin,
                "handle-preview": u.onPreview,
                onRemove: c(v)
            }, ct({
                _: 2
            }, [u.$slots.file ? {
                name: "default",
                fn: V(({
                    file: w,
                    index: m
                }) => [B(u.$slots, "file", {
                    file: w,
                    index: m
                })])
            } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : C("v-if", !0)]))
        }
    });
var Oi = he(Ti, [
    ["__file", "upload.vue"]
]);
const _i = Bt(Oi);
async function Ri(r) {
    if (!r) throw new Error("No File");
    if (r.size > 1.5 * 1024 * 1024) throw new Error("File too large");
    const e = new FormData;
    return e.append("img", r), await (await fetch("https://ipfsw.ppp.fun/upload", {
        method: "POST",
        body: e
    })).json()
}
async function Li(r) {
    try {
        return `https://ipfs.ppp.fun/ipfs/${(await(await fetch("https://ipfsw.ppp.fun/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json()).cid}`
    } catch (e) {
        throw console.error("Error fetching token URI:", e), new Error("Failed to fetch token URI")
    }
}
export {
    _i as E, Ri as I, Pi as a, Ai as b, Li as f, Ye as g
};
import {
    X as cn,
    $ as wt,
    _ as dn,
    d as wr,
    r as rr,
    v as Le,
    o as De,
    cQ as ws,
    w as _s,
    bb as ys,
    a9 as Hr,
    bp as vs,
    h as ks,
    c as Qe,
    bq as Vr,
    i as Ss,
    aq as Ms,
    m as Bt,
    H as $r,
    k as Xe,
    f as Gr,
    e as Z,
    n as Ie,
    x as Jt,
    E as qr,
    S as jr,
    t as Zr,
    b as zr,
    F as Ds,
    ae as Br,
    ad as Ns,
    a7 as Ys,
    bs as Os,
    aA as Qt,
    bn as Ts,
    V as nr,
    bt as sr,
    bv as Jr,
    l as bs,
    aD as Cs,
    aJ as Ps,
    bu as Qr,
    bw as Es,
    bW as Fs,
    bX as Rs
} from "./index-DejQ-iz-.js";
const Ws = cn({
        to: {
            type: wt([String, Object]),
            required: !0
        },
        disabled: Boolean
    }),
    Is = wr({
        __name: "teleport",
        props: Ws,
        setup(e) {
            return (t, r) => t.disabled ? rr(t.$slots, "default", {
                key: 0
            }) : (De(), Le(ws, {
                key: 1,
                to: t.to
            }, [rr(t.$slots, "default")], 8, ["to"]))
        }
    });
var xs = dn(Is, [
    ["__file", "teleport.vue"]
]);
const Xu = _s(xs),
    hn = ["primary", "success", "info", "warning", "error"],
    Ls = cn({
        customClass: {
            type: String,
            default: ""
        },
        dangerouslyUseHTMLString: Boolean,
        duration: {
            type: Number,
            default: 4500
        },
        icon: {
            type: Hr
        },
        id: {
            type: String,
            default: ""
        },
        message: {
            type: wt([String, Object, Function]),
            default: ""
        },
        offset: {
            type: Number,
            default: 0
        },
        onClick: {
            type: wt(Function),
            default: () => {}
        },
        onClose: {
            type: wt(Function),
            required: !0
        },
        position: {
            type: String,
            values: ["top-right", "top-left", "bottom-right", "bottom-left"],
            default: "top-right"
        },
        showClose: {
            type: Boolean,
            default: !0
        },
        title: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            values: [...hn, ""],
            default: ""
        },
        zIndex: Number,
        closeIcon: {
            type: Hr,
            default: ys
        }
    }),
    As = {
        destroy: () => !0
    },
    Us = wr({
        name: "ElNotification"
    }),
    Hs = wr({
        ...Us,
        props: Ls,
        emits: As,
        setup(e, {
            expose: t
        }) {
            const r = e,
                {
                    ns: n,
                    zIndex: s
                } = vs("notification"),
                {
                    nextZIndex: i,
                    currentZIndex: a
                } = s,
                o = ks(!1);
            let u;
            const l = Qe(() => {
                    const N = r.type;
                    return N && Vr[r.type] ? n.m(N) : ""
                }),
                f = Qe(() => r.type && Vr[r.type] || r.icon),
                c = Qe(() => r.position.endsWith("right") ? "right" : "left"),
                d = Qe(() => r.position.startsWith("top") ? "top" : "bottom"),
                w = Qe(() => {
                    var N;
                    return {
                        [d.value]: `${r.offset}px`,
                        zIndex: (N = r.zIndex) != null ? N : a.value
                    }
                });

            function D() {
                r.duration > 0 && ({
                    stop: u
                } = Os(() => {
                    o.value && A()
                }, r.duration))
            }

            function k() {
                u == null || u()
            }

            function A() {
                o.value = !1
            }

            function R({
                code: N
            }) {
                N === Qt.delete || N === Qt.backspace ? k() : N === Qt.esc ? o.value && A() : D()
            }
            return Ss(() => {
                D(), i(), o.value = !0
            }), Ms(document, "keydown", R), t({
                visible: o,
                close: A
            }), (N, C) => (De(), Le(Ys, {
                name: Z(n).b("fade"),
                onBeforeLeave: N.onClose,
                onAfterLeave: V => N.$emit("destroy"),
                persisted: ""
            }, {
                default: Bt(() => [$r(Xe("div", {
                    id: N.id,
                    class: Ie([Z(n).b(), N.customClass, Z(c)]),
                    style: Gr(Z(w)),
                    role: "alert",
                    onMouseenter: k,
                    onMouseleave: D,
                    onClick: N.onClick
                }, [Z(f) ? (De(), Le(Z(qr), {
                    key: 0,
                    class: Ie([Z(n).e("icon"), Z(l)])
                }, {
                    default: Bt(() => [(De(), Le(jr(Z(f))))]),
                    _: 1
                }, 8, ["class"])) : Jt("v-if", !0), Xe("div", {
                    class: Ie(Z(n).e("group"))
                }, [Xe("h2", {
                    class: Ie(Z(n).e("title")),
                    textContent: Zr(N.title)
                }, null, 10, ["textContent"]), $r(Xe("div", {
                    class: Ie(Z(n).e("content")),
                    style: Gr(N.title ? void 0 : {
                        margin: 0
                    })
                }, [rr(N.$slots, "default", {}, () => [N.dangerouslyUseHTMLString ? (De(), zr(Ds, {
                    key: 1
                }, [Jt(" Caution here, message could've been compromised, never use user's input as message "), Xe("p", {
                    innerHTML: N.message
                }, null, 8, ["innerHTML"])], 2112)) : (De(), zr("p", {
                    key: 0
                }, Zr(N.message), 1))])], 6), [
                    [Br, N.message]
                ]), N.showClose ? (De(), Le(Z(qr), {
                    key: 0,
                    class: Ie(Z(n).e("closeBtn")),
                    onClick: Ns(A, ["stop"])
                }, {
                    default: Bt(() => [(De(), Le(jr(N.closeIcon)))]),
                    _: 1
                }, 8, ["class", "onClick"])) : Jt("v-if", !0)], 2)], 46, ["id", "onClick"]), [
                    [Br, o.value]
                ])]),
                _: 3
            }, 8, ["name", "onBeforeLeave", "onAfterLeave"]))
        }
    });
var Vs = dn(Hs, [
    ["__file", "notification.vue"]
]);
const Mt = {
        "top-left": [],
        "top-right": [],
        "bottom-left": [],
        "bottom-right": []
    },
    ir = 16;
let $s = 1;
const qe = function (e = {}, t) {
    if (!Ts) return {
        close: () => {}
    };
    (nr(e) || sr(e)) && (e = {
        message: e
    });
    const r = e.position || "top-right";
    let n = e.offset || 0;
    Mt[r].forEach(({
        vm: f
    }) => {
        var c;
        n += (((c = f.el) == null ? void 0 : c.offsetHeight) || 0) + ir
    }), n += ir;
    const s = `notification_${$s++}`,
        i = e.onClose,
        a = {
            ...e,
            offset: n,
            id: s,
            onClose: () => {
                Gs(s, r, i)
            }
        };
    let o = document.body;
    Jr(e.appendTo) ? o = e.appendTo : nr(e.appendTo) && (o = document.querySelector(e.appendTo)), Jr(o) || (o = document.body);
    const u = document.createElement("div"),
        l = bs(Vs, a, Cs(a.message) ? a.message : sr(a.message) ? () => a.message : null);
    return l.appContext = Ps(t) ? qe._context : t, l.props.onDestroy = () => {
        Qr(null, u)
    }, Qr(l, u), Mt[r].push({
        vm: l
    }), o.appendChild(u.firstElementChild), {
        close: () => {
            l.component.exposed.visible.value = !1
        }
    }
};
hn.forEach(e => {
    qe[e] = (t = {}, r) => ((nr(t) || sr(t)) && (t = {
        message: t
    }), qe({
        ...t,
        type: e
    }, r))
});

function Gs(e, t, r) {
    const n = Mt[t],
        s = n.findIndex(({
            vm: l
        }) => {
            var f;
            return ((f = l.component) == null ? void 0 : f.props.id) === e
        });
    if (s === -1) return;
    const {
        vm: i
    } = n[s];
    if (!i) return;
    r == null || r(i);
    const a = i.el.offsetHeight,
        o = t.split("-")[0];
    n.splice(s, 1);
    const u = n.length;
    if (!(u < 1))
        for (let l = s; l < u; l++) {
            const {
                el: f,
                component: c
            } = n[l].vm, d = Number.parseInt(f.style[o], 10) - a - ir;
            c.props.offset = d
        }
}

function qs() {
    for (const e of Object.values(Mt)) e.forEach(({
        vm: t
    }) => {
        t.component.exposed.visible.value = !1
    })
}
qe.closeAll = qs;
qe._context = null;
const Xr = Es(qe, "$notify"),
    js = e => e.slice(0, 4) + ".." + e.slice(-4);

function Ku(e) {
    return navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(e).then(() => {
        Xr({
            title: "Success",
            type: "success",
            message: "Copied"
        })
    }, t => {
        throw console.error("Failed to copy text: ", t), Xr({
            title: "Failed",
            type: "error",
            message: "Copy failed"
        }), t
    }) : Zs(e)
}

function Zs(e) {
    const t = document.createElement("textarea");
    t.value = e, t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", document.body.appendChild(t), t.select();
    try {
        "" + (document.execCommand("copy") ? "successful" : "unsuccessful")
    } catch (r) {
        throw r
    } finally {
        document.body.removeChild(t)
    }
}

function zs(e) {
    if (isNaN(e)) return e;
    const t = String(e);
    return /e/i.test(t) ? Number(e).toFixed(18).replace(/\.?0+$/, "") : e
}

function ef(e, t) {
    t === void 0 && (t = 4);
    let r = isNaN(e) || !e ? 0 : e,
        n = isNaN(t) || !t ? 4 : t;
    r = zs(r);
    var s = String(r).split("."),
        i = s.length > 1 ? s[1] : "";
    return i.length > n ? i = i.substr(0, n) : i += Array(n - i.length + 1).join("0"), s[0] + (i == "" ? "" : "." + i)
}

function tf(e) {
    const s = Bs(e) % 150;
    return `https://resource2.dfs.land/avatars/${parseInt(`${1e4+s}`)}.png`
}

function Bs(e = "1111") {
    const t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        r = e.slice(-4);
    let n = "";
    for (const s of r) {
        const i = t.indexOf(s);
        if (i === -1) throw new Error(`Invalid character '${s}' in address`);
        n += i.toString()
    }
    return Number(n)
}
const rf = (e, t = 120) => {
    if (!e) return "";
    const r = e.split("/ipfs/");
    return r.length === 2 && r[1] ? `https://ppp.fun/cdn-cgi/imagedelivery/hc5yVyoIvwlbf8YqJjqHMw/${r[1]}/h=${t}` : e.startsWith("http://") || e.startsWith("https://") ? e : `https://ppp.fun/cdn-cgi/imagedelivery/hc5yVyoIvwlbf8YqJjqHMw/${e}/h=${t}`
};

function nf(e, t = 300, r = !1) {
    let n = null;
    const s = function (...i) {
        const a = this,
            o = () => {
                n = null, r || e.apply(a, i)
            },
            u = r && !n;
        n && clearTimeout(n), n = setTimeout(o, t), u && e.apply(a, i)
    };
    return s.cancel = () => {
        n && (clearTimeout(n), n = null)
    }, s
}

function sf(e, t = {}) {
    const {
        allowDecimal: r = !0,
        decimalPrecision: n = 9,
        allowLeadingZero: s = !1
    } = t;
    let a = String(e).replace(/[^\d.]/g, "");
    if (a.startsWith(".") && (a = r ? a === "." ? "0" : `0${a}` : a.slice(1)), r) {
        const o = a.indexOf(".");
        o !== -1 && (a = a.slice(0, o + 1) + a.slice(o + 1).replace(/\./g, ""))
    } else a = a.replace(/\./g, "");
    if (!s && a.length > 1) {
        const [o, ...u] = a;
        o === "0" && u[0] !== "." && (a = u.join(""))
    }
    if (r && a.includes(".")) {
        const [o, u] = a.split(".");
        u && (a = `${o}.${u.slice(0,n)}`)
    }
    return a === "" ? "" : a
}
var Js = (e => (e.All = "all", e.Minting = "minting", e.Launched = "launched", e.Favorite = "favorite", e))(Js || {}),
    mn = (e => (e.UpdatedTitle = "updatedTitle", e.AccountChanged = "accountChanged", e))(mn || {}),
    Qs = (e => (e.ID = "nft_id", e.Price = "price", e.TradeTime = "last_trade", e))(Qs || {}),
    Xs = (e => (e.Newest = "", e.Volume24 = "volume", e.MC = "mc", e))(Xs || {}); //! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var pn;

function p() {
    return pn.apply(null, arguments)
}

function Ks(e) {
    pn = e
}

function se(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
}

function Re(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]"
}

function T(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function _r(e) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
        if (T(e, t)) return !1;
    return !0
}

function z(e) {
    return e === void 0
}

function ke(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
}

function ot(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
}

function gn(e, t) {
    var r = [],
        n, s = e.length;
    for (n = 0; n < s; ++n) r.push(t(e[n], n));
    return r
}

function Ye(e, t) {
    for (var r in t) T(t, r) && (e[r] = t[r]);
    return T(t, "toString") && (e.toString = t.toString), T(t, "valueOf") && (e.valueOf = t.valueOf), e
}

function ce(e, t, r, n) {
    return An(e, t, r, n, !0).utc()
}

function ei() {
    return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }
}

function M(e) {
    return e._pf == null && (e._pf = ei()), e._pf
}
var ar;
Array.prototype.some ? ar = Array.prototype.some : ar = function (e) {
    var t = Object(this),
        r = t.length >>> 0,
        n;
    for (n = 0; n < r; n++)
        if (n in t && e.call(this, t[n], n, t)) return !0;
    return !1
};

function yr(e) {
    var t = null,
        r = !1,
        n = e._d && !isNaN(e._d.getTime());
    if (n && (t = M(e), r = ar.call(t.parsedDateParts, function (s) {
            return s != null
        }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = n;
    else return n;
    return e._isValid
}

function Et(e) {
    var t = ce(NaN);
    return e != null ? Ye(M(t), e) : M(t).userInvalidated = !0, t
}
var Kr = p.momentProperties = [],
    Xt = !1;

function vr(e, t) {
    var r, n, s, i = Kr.length;
    if (z(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), z(t._i) || (e._i = t._i), z(t._f) || (e._f = t._f), z(t._l) || (e._l = t._l), z(t._strict) || (e._strict = t._strict), z(t._tzm) || (e._tzm = t._tzm), z(t._isUTC) || (e._isUTC = t._isUTC), z(t._offset) || (e._offset = t._offset), z(t._pf) || (e._pf = M(t)), z(t._locale) || (e._locale = t._locale), i > 0)
        for (r = 0; r < i; r++) n = Kr[r], s = t[n], z(s) || (e[n] = s);
    return e
}

function lt(e) {
    vr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Xt === !1 && (Xt = !0, p.updateOffset(this), Xt = !1)
}

function ie(e) {
    return e instanceof lt || e != null && e._isAMomentObject != null
}

function wn(e) {
    p.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
}

function K(e, t) {
    var r = !0;
    return Ye(function () {
        if (p.deprecationHandler != null && p.deprecationHandler(null, e), r) {
            var n = [],
                s, i, a, o = arguments.length;
            for (i = 0; i < o; i++) {
                if (s = "", typeof arguments[i] == "object") {
                    s += `
[` + i + "] ";
                    for (a in arguments[0]) T(arguments[0], a) && (s += a + ": " + arguments[0][a] + ", ");
                    s = s.slice(0, -2)
                } else s = arguments[i];
                n.push(s)
            }
            wn(e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack), r = !1
        }
        return t.apply(this, arguments)
    }, t)
}
var en = {};

function _n(e, t) {
    p.deprecationHandler != null && p.deprecationHandler(e, t), en[e] || (wn(t), en[e] = !0)
}
p.suppressDeprecationWarnings = !1;
p.deprecationHandler = null;

function de(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
}

function ti(e) {
    var t, r;
    for (r in e) T(e, r) && (t = e[r], de(t) ? this[r] = t : this["_" + r] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}

function or(e, t) {
    var r = Ye({}, e),
        n;
    for (n in t) T(t, n) && (Re(e[n]) && Re(t[n]) ? (r[n] = {}, Ye(r[n], e[n]), Ye(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
    for (n in e) T(e, n) && !T(t, n) && Re(e[n]) && (r[n] = Ye({}, r[n]));
    return r
}

function kr(e) {
    e != null && this.set(e)
}
var lr;
Object.keys ? lr = Object.keys : lr = function (e) {
    var t, r = [];
    for (t in e) T(e, t) && r.push(t);
    return r
};
var ri = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
};

function ni(e, t, r) {
    var n = this._calendar[e] || this._calendar.sameElse;
    return de(n) ? n.call(t, r) : n
}

function ue(e, t, r) {
    var n = "" + Math.abs(e),
        s = t - n.length,
        i = e >= 0;
    return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
}
var Sr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Kt = {},
    Ve = {};

function y(e, t, r, n) {
    var s = n;
    typeof n == "string" && (s = function () {
        return this[n]()
    }), e && (Ve[e] = s), t && (Ve[t[0]] = function () {
        return ue(s.apply(this, arguments), t[1], t[2])
    }), r && (Ve[r] = function () {
        return this.localeData().ordinal(s.apply(this, arguments), e)
    })
}

function si(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
}

function ii(e) {
    var t = e.match(Sr),
        r, n;
    for (r = 0, n = t.length; r < n; r++) Ve[t[r]] ? t[r] = Ve[t[r]] : t[r] = si(t[r]);
    return function (s) {
        var i = "",
            a;
        for (a = 0; a < n; a++) i += de(t[a]) ? t[a].call(s, e) : t[a];
        return i
    }
}

function _t(e, t) {
    return e.isValid() ? (t = yn(t, e.localeData()), Kt[t] = Kt[t] || ii(t), Kt[t](e)) : e.localeData().invalidDate()
}

function yn(e, t) {
    var r = 5;

    function n(s) {
        return t.longDateFormat(s) || s
    }
    for (pt.lastIndex = 0; r >= 0 && pt.test(e);) e = e.replace(pt, n), pt.lastIndex = 0, r -= 1;
    return e
}
var ai = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
};

function oi(e) {
    var t = this._longDateFormat[e],
        r = this._longDateFormat[e.toUpperCase()];
    return t || !r ? t : (this._longDateFormat[e] = r.match(Sr).map(function (n) {
        return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n
    }).join(""), this._longDateFormat[e])
}
var li = "Invalid date";

function ui() {
    return this._invalidDate
}
var fi = "%d",
    ci = /\d{1,2}/;

function di(e) {
    return this._ordinal.replace("%d", e)
}
var hi = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
};

function mi(e, t, r, n) {
    var s = this._relativeTime[r];
    return de(s) ? s(e, t, r, n) : s.replace(/%d/i, e)
}

function pi(e, t) {
    var r = this._relativeTime[e > 0 ? "future" : "past"];
    return de(r) ? r(t) : r.replace(/%s/i, t)
}
var tn = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
};

function ee(e) {
    return typeof e == "string" ? tn[e] || tn[e.toLowerCase()] : void 0
}

function Mr(e) {
    var t = {},
        r, n;
    for (n in e) T(e, n) && (r = ee(n), r && (t[r] = e[n]));
    return t
}
var gi = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
};

function wi(e) {
    var t = [],
        r;
    for (r in e) T(e, r) && t.push({
        unit: r,
        priority: gi[r]
    });
    return t.sort(function (n, s) {
        return n.priority - s.priority
    }), t
}
var vn = /\d/,
    J = /\d\d/,
    kn = /\d{3}/,
    Dr = /\d{4}/,
    Ft = /[+-]?\d{6}/,
    I = /\d\d?/,
    Sn = /\d\d\d\d?/,
    Mn = /\d\d\d\d\d\d?/,
    Rt = /\d{1,3}/,
    Nr = /\d{1,4}/,
    Wt = /[+-]?\d{1,6}/,
    Ze = /\d+/,
    It = /[+-]?\d+/,
    _i = /Z|[+-]\d\d:?\d\d/gi,
    xt = /Z|[+-]\d\d(?::?\d\d)?/gi,
    yi = /[+-]?\d+(\.\d{1,3})?/,
    ut = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    ze = /^[1-9]\d?/,
    Yr = /^([1-9]\d|\d)/,
    Dt;
Dt = {};

function g(e, t, r) {
    Dt[e] = de(t) ? t : function (n, s) {
        return n && r ? r : t
    }
}

function vi(e, t) {
    return T(Dt, e) ? Dt[e](t._strict, t._locale) : new RegExp(ki(e))
}

function ki(e) {
    return ye(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, r, n, s, i) {
        return r || n || s || i
    }))
}

function ye(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

function Q(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
}

function Y(e) {
    var t = +e,
        r = 0;
    return t !== 0 && isFinite(t) && (r = Q(t)), r
}
var ur = {};

function P(e, t) {
    var r, n = t,
        s;
    for (typeof e == "string" && (e = [e]), ke(t) && (n = function (i, a) {
            a[t] = Y(i)
        }), s = e.length, r = 0; r < s; r++) ur[e[r]] = n
}

function ft(e, t) {
    P(e, function (r, n, s, i) {
        s._w = s._w || {}, t(r, s._w, s, i)
    })
}

function Si(e, t, r) {
    t != null && T(ur, e) && ur[e](t, r._a, r, e)
}

function Lt(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}
var q = 0,
    ge = 1,
    oe = 2,
    H = 3,
    re = 4,
    we = 5,
    Fe = 6,
    Mi = 7,
    Di = 8;
y("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? ue(e, 4) : "+" + e
});
y(0, ["YY", 2], 0, function () {
    return this.year() % 100
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
g("Y", It);
g("YY", I, J);
g("YYYY", Nr, Dr);
g("YYYYY", Wt, Ft);
g("YYYYYY", Wt, Ft);
P(["YYYYY", "YYYYYY"], q);
P("YYYY", function (e, t) {
    t[q] = e.length === 2 ? p.parseTwoDigitYear(e) : Y(e)
});
P("YY", function (e, t) {
    t[q] = p.parseTwoDigitYear(e)
});
P("Y", function (e, t) {
    t[q] = parseInt(e, 10)
});

function tt(e) {
    return Lt(e) ? 366 : 365
}
p.parseTwoDigitYear = function (e) {
    return Y(e) + (Y(e) > 68 ? 1900 : 2e3)
};
var Dn = Be("FullYear", !0);

function Ni() {
    return Lt(this.year())
}

function Be(e, t) {
    return function (r) {
        return r != null ? (Nn(this, e, r), p.updateOffset(this, t), this) : rt(this, e)
    }
}

function rt(e, t) {
    if (!e.isValid()) return NaN;
    var r = e._d,
        n = e._isUTC;
    switch (t) {
        case "Milliseconds":
            return n ? r.getUTCMilliseconds() : r.getMilliseconds();
        case "Seconds":
            return n ? r.getUTCSeconds() : r.getSeconds();
        case "Minutes":
            return n ? r.getUTCMinutes() : r.getMinutes();
        case "Hours":
            return n ? r.getUTCHours() : r.getHours();
        case "Date":
            return n ? r.getUTCDate() : r.getDate();
        case "Day":
            return n ? r.getUTCDay() : r.getDay();
        case "Month":
            return n ? r.getUTCMonth() : r.getMonth();
        case "FullYear":
            return n ? r.getUTCFullYear() : r.getFullYear();
        default:
            return NaN
    }
}

function Nn(e, t, r) {
    var n, s, i, a, o;
    if (!(!e.isValid() || isNaN(r))) {
        switch (n = e._d, s = e._isUTC, t) {
            case "Milliseconds":
                return void(s ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
            case "Seconds":
                return void(s ? n.setUTCSeconds(r) : n.setSeconds(r));
            case "Minutes":
                return void(s ? n.setUTCMinutes(r) : n.setMinutes(r));
            case "Hours":
                return void(s ? n.setUTCHours(r) : n.setHours(r));
            case "Date":
                return void(s ? n.setUTCDate(r) : n.setDate(r));
            case "FullYear":
                break;
            default:
                return
        }
        i = r, a = e.month(), o = e.date(), o = o === 29 && a === 1 && !Lt(i) ? 28 : o, s ? n.setUTCFullYear(i, a, o) : n.setFullYear(i, a, o)
    }
}

function Yi(e) {
    return e = ee(e), de(this[e]) ? this[e]() : this
}

function Oi(e, t) {
    if (typeof e == "object") {
        e = Mr(e);
        var r = wi(e),
            n, s = r.length;
        for (n = 0; n < s; n++) this[r[n].unit](e[r[n].unit])
    } else if (e = ee(e), de(this[e])) return this[e](t);
    return this
}

function Ti(e, t) {
    return (e % t + t) % t
}
var L;
Array.prototype.indexOf ? L = Array.prototype.indexOf : L = function (e) {
    var t;
    for (t = 0; t < this.length; ++t)
        if (this[t] === e) return t;
    return -1
};

function Or(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var r = Ti(t, 12);
    return e += (t - r) / 12, r === 1 ? Lt(e) ? 29 : 28 : 31 - r % 7 % 2
}
y("M", ["MM", 2], "Mo", function () {
    return this.month() + 1
});
y("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e)
});
y("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e)
});
g("M", I, ze);
g("MM", I, J);
g("MMM", function (e, t) {
    return t.monthsShortRegex(e)
});
g("MMMM", function (e, t) {
    return t.monthsRegex(e)
});
P(["M", "MM"], function (e, t) {
    t[ge] = Y(e) - 1
});
P(["MMM", "MMMM"], function (e, t, r, n) {
    var s = r._locale.monthsParse(e, n, r._strict);
    s != null ? t[ge] = s : M(r).invalidMonth = e
});
var bi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    Yn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    On = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Ci = ut,
    Pi = ut;

function Ei(e, t) {
    return e ? se(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || On).test(t) ? "format" : "standalone"][e.month()] : se(this._months) ? this._months : this._months.standalone
}

function Fi(e, t) {
    return e ? se(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[On.test(t) ? "format" : "standalone"][e.month()] : se(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}

function Ri(e, t, r) {
    var n, s, i, a = e.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) i = ce([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
    return r ? t === "MMM" ? (s = L.call(this._shortMonthsParse, a), s !== -1 ? s : null) : (s = L.call(this._longMonthsParse, a), s !== -1 ? s : null) : t === "MMM" ? (s = L.call(this._shortMonthsParse, a), s !== -1 ? s : (s = L.call(this._longMonthsParse, a), s !== -1 ? s : null)) : (s = L.call(this._longMonthsParse, a), s !== -1 ? s : (s = L.call(this._shortMonthsParse, a), s !== -1 ? s : null))
}

function Wi(e, t, r) {
    var n, s, i;
    if (this._monthsParseExact) return Ri.call(this, e, t, r);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
        if (s = ce([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), !r && !this._monthsParse[n] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e)) return n;
        if (r && t === "MMM" && this._shortMonthsParse[n].test(e)) return n;
        if (!r && this._monthsParse[n].test(e)) return n
    }
}

function Tn(e, t) {
    if (!e.isValid()) return e;
    if (typeof t == "string") {
        if (/^\d+$/.test(t)) t = Y(t);
        else if (t = e.localeData().monthsParse(t), !ke(t)) return e
    }
    var r = t,
        n = e.date();
    return n = n < 29 ? n : Math.min(n, Or(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e
}

function bn(e) {
    return e != null ? (Tn(this, e), p.updateOffset(this, !0), this) : rt(this, "Month")
}

function Ii() {
    return Or(this.year(), this.month())
}

function xi(e) {
    return this._monthsParseExact ? (T(this, "_monthsRegex") || Cn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (T(this, "_monthsShortRegex") || (this._monthsShortRegex = Ci), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
}

function Li(e) {
    return this._monthsParseExact ? (T(this, "_monthsRegex") || Cn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (T(this, "_monthsRegex") || (this._monthsRegex = Pi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
}

function Cn() {
    function e(u, l) {
        return l.length - u.length
    }
    var t = [],
        r = [],
        n = [],
        s, i, a, o;
    for (s = 0; s < 12; s++) i = ce([2e3, s]), a = ye(this.monthsShort(i, "")), o = ye(this.months(i, "")), t.push(a), r.push(o), n.push(o), n.push(a);
    t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}

function Ai(e, t, r, n, s, i, a) {
    var o;
    return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, n, s, i, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, n, s, i, a), o
}

function nt(e) {
    var t, r;
    return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
}

function Nt(e, t, r) {
    var n = 7 + t - r,
        s = (7 + nt(e, 0, n).getUTCDay() - t) % 7;
    return -s + n - 1
}

function Pn(e, t, r, n, s) {
    var i = (7 + r - n) % 7,
        a = Nt(e, n, s),
        o = 1 + 7 * (t - 1) + i + a,
        u, l;
    return o <= 0 ? (u = e - 1, l = tt(u) + o) : o > tt(e) ? (u = e + 1, l = o - tt(e)) : (u = e, l = o), {
        year: u,
        dayOfYear: l
    }
}

function st(e, t, r) {
    var n = Nt(e.year(), t, r),
        s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
        i, a;
    return s < 1 ? (a = e.year() - 1, i = s + ve(a, t, r)) : s > ve(e.year(), t, r) ? (i = s - ve(e.year(), t, r), a = e.year() + 1) : (a = e.year(), i = s), {
        week: i,
        year: a
    }
}

function ve(e, t, r) {
    var n = Nt(e, t, r),
        s = Nt(e + 1, t, r);
    return (tt(e) - n + s) / 7
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
g("w", I, ze);
g("ww", I, J);
g("W", I, ze);
g("WW", I, J);
ft(["w", "ww", "W", "WW"], function (e, t, r, n) {
    t[n.substr(0, 1)] = Y(e)
});

function Ui(e) {
    return st(e, this._week.dow, this._week.doy).week
}
var Hi = {
    dow: 0,
    doy: 6
};

function Vi() {
    return this._week.dow
}

function $i() {
    return this._week.doy
}

function Gi(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d")
}

function qi(e) {
    var t = st(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d")
}
y("d", 0, "do", "day");
y("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e)
});
y("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e)
});
y("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e)
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
g("d", I);
g("e", I);
g("E", I);
g("dd", function (e, t) {
    return t.weekdaysMinRegex(e)
});
g("ddd", function (e, t) {
    return t.weekdaysShortRegex(e)
});
g("dddd", function (e, t) {
    return t.weekdaysRegex(e)
});
ft(["dd", "ddd", "dddd"], function (e, t, r, n) {
    var s = r._locale.weekdaysParse(e, n, r._strict);
    s != null ? t.d = s : M(r).invalidWeekday = e
});
ft(["d", "e", "E"], function (e, t, r, n) {
    t[n] = Y(e)
});

function ji(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10)
}

function Zi(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
}

function Tr(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
}
var zi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    En = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Bi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Ji = ut,
    Qi = ut,
    Xi = ut;

function Ki(e, t) {
    var r = se(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? Tr(r, this._week.dow) : e ? r[e.day()] : r
}

function ea(e) {
    return e === !0 ? Tr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
}

function ta(e) {
    return e === !0 ? Tr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
}

function ra(e, t, r) {
    var n, s, i, a = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) i = ce([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
    return r ? t === "dddd" ? (s = L.call(this._weekdaysParse, a), s !== -1 ? s : null) : t === "ddd" ? (s = L.call(this._shortWeekdaysParse, a), s !== -1 ? s : null) : (s = L.call(this._minWeekdaysParse, a), s !== -1 ? s : null) : t === "dddd" ? (s = L.call(this._weekdaysParse, a), s !== -1 || (s = L.call(this._shortWeekdaysParse, a), s !== -1) ? s : (s = L.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : t === "ddd" ? (s = L.call(this._shortWeekdaysParse, a), s !== -1 || (s = L.call(this._weekdaysParse, a), s !== -1) ? s : (s = L.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : (s = L.call(this._minWeekdaysParse, a), s !== -1 || (s = L.call(this._weekdaysParse, a), s !== -1) ? s : (s = L.call(this._shortWeekdaysParse, a), s !== -1 ? s : null))
}

function na(e, t, r) {
    var n, s, i;
    if (this._weekdaysParseExact) return ra.call(this, e, t, r);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
        if (s = ce([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e)) return n;
        if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e)) return n;
        if (r && t === "dd" && this._minWeekdaysParse[n].test(e)) return n;
        if (!r && this._weekdaysParse[n].test(e)) return n
    }
}

function sa(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = rt(this, "Day");
    return e != null ? (e = ji(e, this.localeData()), this.add(e - t, "d")) : t
}

function ia(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d")
}

function aa(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
        var t = Zi(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7)
    } else return this.day() || 7
}

function oa(e) {
    return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || br.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (T(this, "_weekdaysRegex") || (this._weekdaysRegex = Ji), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
}

function la(e) {
    return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || br.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (T(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qi), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}

function ua(e) {
    return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || br.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (T(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}

function br() {
    function e(f, c) {
        return c.length - f.length
    }
    var t = [],
        r = [],
        n = [],
        s = [],
        i, a, o, u, l;
    for (i = 0; i < 7; i++) a = ce([2e3, 1]).day(i), o = ye(this.weekdaysMin(a, "")), u = ye(this.weekdaysShort(a, "")), l = ye(this.weekdays(a, "")), t.push(o), r.push(u), n.push(l), s.push(o), s.push(u), s.push(l);
    t.sort(e), r.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}

function Cr() {
    return this.hours() % 12 || 12
}

function fa() {
    return this.hours() || 24
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, Cr);
y("k", ["kk", 2], 0, fa);
y("hmm", 0, 0, function () {
    return "" + Cr.apply(this) + ue(this.minutes(), 2)
});
y("hmmss", 0, 0, function () {
    return "" + Cr.apply(this) + ue(this.minutes(), 2) + ue(this.seconds(), 2)
});
y("Hmm", 0, 0, function () {
    return "" + this.hours() + ue(this.minutes(), 2)
});
y("Hmmss", 0, 0, function () {
    return "" + this.hours() + ue(this.minutes(), 2) + ue(this.seconds(), 2)
});

function Fn(e, t) {
    y(e, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
}
Fn("a", !0);
Fn("A", !1);

function Rn(e, t) {
    return t._meridiemParse
}
g("a", Rn);
g("A", Rn);
g("H", I, Yr);
g("h", I, ze);
g("k", I, ze);
g("HH", I, J);
g("hh", I, J);
g("kk", I, J);
g("hmm", Sn);
g("hmmss", Mn);
g("Hmm", Sn);
g("Hmmss", Mn);
P(["H", "HH"], H);
P(["k", "kk"], function (e, t, r) {
    var n = Y(e);
    t[H] = n === 24 ? 0 : n
});
P(["a", "A"], function (e, t, r) {
    r._isPm = r._locale.isPM(e), r._meridiem = e
});
P(["h", "hh"], function (e, t, r) {
    t[H] = Y(e), M(r).bigHour = !0
});
P("hmm", function (e, t, r) {
    var n = e.length - 2;
    t[H] = Y(e.substr(0, n)), t[re] = Y(e.substr(n)), M(r).bigHour = !0
});
P("hmmss", function (e, t, r) {
    var n = e.length - 4,
        s = e.length - 2;
    t[H] = Y(e.substr(0, n)), t[re] = Y(e.substr(n, 2)), t[we] = Y(e.substr(s)), M(r).bigHour = !0
});
P("Hmm", function (e, t, r) {
    var n = e.length - 2;
    t[H] = Y(e.substr(0, n)), t[re] = Y(e.substr(n))
});
P("Hmmss", function (e, t, r) {
    var n = e.length - 4,
        s = e.length - 2;
    t[H] = Y(e.substr(0, n)), t[re] = Y(e.substr(n, 2)), t[we] = Y(e.substr(s))
});

function ca(e) {
    return (e + "").toLowerCase().charAt(0) === "p"
}
var da = /[ap]\.?m?\.?/i,
    ha = Be("Hours", !0);

function ma(e, t, r) {
    return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM"
}
var Wn = {
        calendar: ri,
        longDateFormat: ai,
        invalidDate: li,
        ordinal: fi,
        dayOfMonthOrdinalParse: ci,
        relativeTime: hi,
        months: bi,
        monthsShort: Yn,
        week: Hi,
        weekdays: zi,
        weekdaysMin: Bi,
        weekdaysShort: En,
        meridiemParse: da
    },
    x = {},
    Ke = {},
    it;

function pa(e, t) {
    var r, n = Math.min(e.length, t.length);
    for (r = 0; r < n; r += 1)
        if (e[r] !== t[r]) return r;
    return n
}

function rn(e) {
    return e && e.toLowerCase().replace("_", "-")
}

function ga(e) {
    for (var t = 0, r, n, s, i; t < e.length;) {
        for (i = rn(e[t]).split("-"), r = i.length, n = rn(e[t + 1]), n = n ? n.split("-") : null; r > 0;) {
            if (s = At(i.slice(0, r).join("-")), s) return s;
            if (n && n.length >= r && pa(i, n) >= r - 1) break;
            r--
        }
        t++
    }
    return it
}

function wa(e) {
    return !!(e && e.match("^[^/\\\\]*$"))
}

function At(e) {
    var t = null,
        r;
    if (x[e] === void 0 && typeof module < "u" && module && module.exports && wa(e)) try {
        t = it._abbr, r = require, r("./locale/" + e), be(t)
    } catch {
        x[e] = null
    }
    return x[e]
}

function be(e, t) {
    var r;
    return e && (z(t) ? r = Se(e) : r = Pr(e, t), r ? it = r : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), it._abbr
}

function Pr(e, t) {
    if (t !== null) {
        var r, n = Wn;
        if (t.abbr = e, x[e] != null) _n("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = x[e]._config;
        else if (t.parentLocale != null)
            if (x[t.parentLocale] != null) n = x[t.parentLocale]._config;
            else if (r = At(t.parentLocale), r != null) n = r._config;
        else return Ke[t.parentLocale] || (Ke[t.parentLocale] = []), Ke[t.parentLocale].push({
            name: e,
            config: t
        }), null;
        return x[e] = new kr(or(n, t)), Ke[e] && Ke[e].forEach(function (s) {
            Pr(s.name, s.config)
        }), be(e), x[e]
    } else return delete x[e], null
}

function _a(e, t) {
    if (t != null) {
        var r, n, s = Wn;
        x[e] != null && x[e].parentLocale != null ? x[e].set(or(x[e]._config, t)) : (n = At(e), n != null && (s = n._config), t = or(s, t), n == null && (t.abbr = e), r = new kr(t), r.parentLocale = x[e], x[e] = r), be(e)
    } else x[e] != null && (x[e].parentLocale != null ? (x[e] = x[e].parentLocale, e === be() && be(e)) : x[e] != null && delete x[e]);
    return x[e]
}

function Se(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return it;
    if (!se(e)) {
        if (t = At(e), t) return t;
        e = [e]
    }
    return ga(e)
}

function ya() {
    return lr(x)
}

function Er(e) {
    var t, r = e._a;
    return r && M(e).overflow === -2 && (t = r[ge] < 0 || r[ge] > 11 ? ge : r[oe] < 1 || r[oe] > Or(r[q], r[ge]) ? oe : r[H] < 0 || r[H] > 24 || r[H] === 24 && (r[re] !== 0 || r[we] !== 0 || r[Fe] !== 0) ? H : r[re] < 0 || r[re] > 59 ? re : r[we] < 0 || r[we] > 59 ? we : r[Fe] < 0 || r[Fe] > 999 ? Fe : -1, M(e)._overflowDayOfYear && (t < q || t > oe) && (t = oe), M(e)._overflowWeeks && t === -1 && (t = Mi), M(e)._overflowWeekday && t === -1 && (t = Di), M(e).overflow = t), e
}
var va = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ka = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Sa = /Z|[+-]\d\d(?::?\d\d)?/,
    gt = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1]
    ],
    er = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ],
    Ma = /^\/?Date\((-?\d+)/i,
    Da = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Na = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

function In(e) {
    var t, r, n = e._i,
        s = va.exec(n) || ka.exec(n),
        i, a, o, u, l = gt.length,
        f = er.length;
    if (s) {
        for (M(e).iso = !0, t = 0, r = l; t < r; t++)
            if (gt[t][1].exec(s[1])) {
                a = gt[t][0], i = gt[t][2] !== !1;
                break
            } if (a == null) {
            e._isValid = !1;
            return
        }
        if (s[3]) {
            for (t = 0, r = f; t < r; t++)
                if (er[t][1].exec(s[3])) {
                    o = (s[2] || " ") + er[t][0];
                    break
                } if (o == null) {
                e._isValid = !1;
                return
            }
        }
        if (!i && o != null) {
            e._isValid = !1;
            return
        }
        if (s[4])
            if (Sa.exec(s[4])) u = "Z";
            else {
                e._isValid = !1;
                return
            } e._f = a + (o || "") + (u || ""), Rr(e)
    } else e._isValid = !1
}

function Ya(e, t, r, n, s, i) {
    var a = [Oa(e), Yn.indexOf(t), parseInt(r, 10), parseInt(n, 10), parseInt(s, 10)];
    return i && a.push(parseInt(i, 10)), a
}

function Oa(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
}

function Ta(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function ba(e, t, r) {
    if (e) {
        var n = En.indexOf(e),
            s = new Date(t[0], t[1], t[2]).getDay();
        if (n !== s) return M(r).weekdayMismatch = !0, r._isValid = !1, !1
    }
    return !0
}

function Ca(e, t, r) {
    if (e) return Na[e];
    if (t) return 0;
    var n = parseInt(r, 10),
        s = n % 100,
        i = (n - s) / 100;
    return i * 60 + s
}

function xn(e) {
    var t = Da.exec(Ta(e._i)),
        r;
    if (t) {
        if (r = Ya(t[4], t[3], t[2], t[5], t[6], t[7]), !ba(t[1], r, e)) return;
        e._a = r, e._tzm = Ca(t[8], t[9], t[10]), e._d = nt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), M(e).rfc2822 = !0
    } else e._isValid = !1
}

function Pa(e) {
    var t = Ma.exec(e._i);
    if (t !== null) {
        e._d = new Date(+t[1]);
        return
    }
    if (In(e), e._isValid === !1) delete e._isValid;
    else return;
    if (xn(e), e._isValid === !1) delete e._isValid;
    else return;
    e._strict ? e._isValid = !1 : p.createFromInputFallback(e)
}
p.createFromInputFallback = K("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
});

function Ae(e, t, r) {
    return e ?? t ?? r
}

function Ea(e) {
    var t = new Date(p.now());
    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
}

function Fr(e) {
    var t, r, n = [],
        s, i, a;
    if (!e._d) {
        for (s = Ea(e), e._w && e._a[oe] == null && e._a[ge] == null && Fa(e), e._dayOfYear != null && (a = Ae(e._a[q], s[q]), (e._dayOfYear > tt(a) || e._dayOfYear === 0) && (M(e)._overflowDayOfYear = !0), r = nt(a, 0, e._dayOfYear), e._a[ge] = r.getUTCMonth(), e._a[oe] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = n[t] = s[t];
        for (; t < 7; t++) e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[H] === 24 && e._a[re] === 0 && e._a[we] === 0 && e._a[Fe] === 0 && (e._nextDay = !0, e._a[H] = 0), e._d = (e._useUTC ? nt : Ai).apply(null, n), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[H] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (M(e).weekdayMismatch = !0)
    }
}

function Fa(e) {
    var t, r, n, s, i, a, o, u, l;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, r = Ae(t.GG, e._a[q], st(W(), 1, 4).year), n = Ae(t.W, 1), s = Ae(t.E, 1), (s < 1 || s > 7) && (u = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, l = st(W(), i, a), r = Ae(t.gg, e._a[q], l.year), n = Ae(t.w, l.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (u = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : s = i), n < 1 || n > ve(r, i, a) ? M(e)._overflowWeeks = !0 : u != null ? M(e)._overflowWeekday = !0 : (o = Pn(r, n, s, i, a), e._a[q] = o.year, e._dayOfYear = o.dayOfYear)
}
p.ISO_8601 = function () {};
p.RFC_2822 = function () {};

function Rr(e) {
    if (e._f === p.ISO_8601) {
        In(e);
        return
    }
    if (e._f === p.RFC_2822) {
        xn(e);
        return
    }
    e._a = [], M(e).empty = !0;
    var t = "" + e._i,
        r, n, s, i, a, o = t.length,
        u = 0,
        l, f;
    for (s = yn(e._f, e._locale).match(Sr) || [], f = s.length, r = 0; r < f; r++) i = s[r], n = (t.match(vi(i, e)) || [])[0], n && (a = t.substr(0, t.indexOf(n)), a.length > 0 && M(e).unusedInput.push(a), t = t.slice(t.indexOf(n) + n.length), u += n.length), Ve[i] ? (n ? M(e).empty = !1 : M(e).unusedTokens.push(i), Si(i, n, e)) : e._strict && !n && M(e).unusedTokens.push(i);
    M(e).charsLeftOver = o - u, t.length > 0 && M(e).unusedInput.push(t), e._a[H] <= 12 && M(e).bigHour === !0 && e._a[H] > 0 && (M(e).bigHour = void 0), M(e).parsedDateParts = e._a.slice(0), M(e).meridiem = e._meridiem, e._a[H] = Ra(e._locale, e._a[H], e._meridiem), l = M(e).era, l !== null && (e._a[q] = e._locale.erasConvertYear(l, e._a[q])), Fr(e), Er(e)
}

function Ra(e, t, r) {
    var n;
    return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t)
}

function Wa(e) {
    var t, r, n, s, i, a, o = !1,
        u = e._f.length;
    if (u === 0) {
        M(e).invalidFormat = !0, e._d = new Date(NaN);
        return
    }
    for (s = 0; s < u; s++) i = 0, a = !1, t = vr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Rr(t), yr(t) && (a = !0), i += M(t).charsLeftOver, i += M(t).unusedTokens.length * 10, M(t).score = i, o ? i < n && (n = i, r = t) : (n == null || i < n || a) && (n = i, r = t, a && (o = !0));
    Ye(e, r || t)
}

function Ia(e) {
    if (!e._d) {
        var t = Mr(e._i),
            r = t.day === void 0 ? t.date : t.day;
        e._a = gn([t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond], function (n) {
            return n && parseInt(n, 10)
        }), Fr(e)
    }
}

function xa(e) {
    var t = new lt(Er(Ln(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
}

function Ln(e) {
    var t = e._i,
        r = e._f;
    return e._locale = e._locale || Se(e._l), t === null || r === void 0 && t === "" ? Et({
        nullInput: !0
    }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ie(t) ? new lt(Er(t)) : (ot(t) ? e._d = t : se(r) ? Wa(e) : r ? Rr(e) : La(e), yr(e) || (e._d = null), e))
}

function La(e) {
    var t = e._i;
    z(t) ? e._d = new Date(p.now()) : ot(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Pa(e) : se(t) ? (e._a = gn(t.slice(0), function (r) {
        return parseInt(r, 10)
    }), Fr(e)) : Re(t) ? Ia(e) : ke(t) ? e._d = new Date(t) : p.createFromInputFallback(e)
}

function An(e, t, r, n, s) {
    var i = {};
    return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Re(e) && _r(e) || se(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = r, i._i = e, i._f = t, i._strict = n, xa(i)
}

function W(e, t, r, n) {
    return An(e, t, r, n, !1)
}
var Aa = K("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = W.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : Et()
    }),
    Ua = K("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = W.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : Et()
    });

function Un(e, t) {
    var r, n;
    if (t.length === 1 && se(t[0]) && (t = t[0]), !t.length) return W();
    for (r = t[0], n = 1; n < t.length; ++n)(!t[n].isValid() || t[n][e](r)) && (r = t[n]);
    return r
}

function Ha() {
    var e = [].slice.call(arguments, 0);
    return Un("isBefore", e)
}

function Va() {
    var e = [].slice.call(arguments, 0);
    return Un("isAfter", e)
}
var $a = function () {
        return Date.now ? Date.now() : +new Date
    },
    et = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

function Ga(e) {
    var t, r = !1,
        n, s = et.length;
    for (t in e)
        if (T(e, t) && !(L.call(et, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
    for (n = 0; n < s; ++n)
        if (e[et[n]]) {
            if (r) return !1;
            parseFloat(e[et[n]]) !== Y(e[et[n]]) && (r = !0)
        } return !0
}

function qa() {
    return this._isValid
}

function ja() {
    return ae(NaN)
}

function Ut(e) {
    var t = Mr(e),
        r = t.year || 0,
        n = t.quarter || 0,
        s = t.month || 0,
        i = t.week || t.isoWeek || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        f = t.millisecond || 0;
    this._isValid = Ga(t), this._milliseconds = +f + l * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +s + n * 3 + r * 12, this._data = {}, this._locale = Se(), this._bubble()
}

function yt(e) {
    return e instanceof Ut
}

function fr(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
}

function Za(e, t, r) {
    var n = Math.min(e.length, t.length),
        s = Math.abs(e.length - t.length),
        i = 0,
        a;
    for (a = 0; a < n; a++) Y(e[a]) !== Y(t[a]) && i++;
    return i + s
}

function Hn(e, t) {
    y(e, 0, 0, function () {
        var r = this.utcOffset(),
            n = "+";
        return r < 0 && (r = -r, n = "-"), n + ue(~~(r / 60), 2) + t + ue(~~r % 60, 2)
    })
}
Hn("Z", ":");
Hn("ZZ", "");
g("Z", xt);
g("ZZ", xt);
P(["Z", "ZZ"], function (e, t, r) {
    r._useUTC = !0, r._tzm = Wr(xt, e)
});
var za = /([\+\-]|\d\d)/gi;

function Wr(e, t) {
    var r = (t || "").match(e),
        n, s, i;
    return r === null ? null : (n = r[r.length - 1] || [], s = (n + "").match(za) || ["-", 0, 0], i = +(s[1] * 60) + Y(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i)
}

function Ir(e, t) {
    var r, n;
    return t._isUTC ? (r = t.clone(), n = (ie(e) || ot(e) ? e.valueOf() : W(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), p.updateOffset(r, !1), r) : W(e).local()
}

function cr(e) {
    return -Math.round(e._d.getTimezoneOffset())
}
p.updateOffset = function () {};

function Ba(e, t, r) {
    var n = this._offset || 0,
        s;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
        if (typeof e == "string") {
            if (e = Wr(xt, e), e === null) return this
        } else Math.abs(e) < 16 && !r && (e = e * 60);
        return !this._isUTC && t && (s = cr(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? Gn(this, ae(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this
    } else return this._isUTC ? n : cr(this)
}

function Ja(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
}

function Qa(e) {
    return this.utcOffset(0, e)
}

function Xa(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(cr(this), "m")), this
}

function Ka() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var e = Wr(_i, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
}

function eo(e) {
    return this.isValid() ? (e = e ? W(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
}

function to() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}

function ro() {
    if (!z(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
        t;
    return vr(e, this), e = Ln(e), e._a ? (t = e._isUTC ? ce(e._a) : W(e._a), this._isDSTShifted = this.isValid() && Za(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
}

function no() {
    return this.isValid() ? !this._isUTC : !1
}

function so() {
    return this.isValid() ? this._isUTC : !1
}

function Vn() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
}
var io = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    ao = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function ae(e, t) {
    var r = e,
        n = null,
        s, i, a;
    return yt(e) ? r = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
    } : ke(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = io.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
        y: 0,
        d: Y(n[oe]) * s,
        h: Y(n[H]) * s,
        m: Y(n[re]) * s,
        s: Y(n[we]) * s,
        ms: Y(fr(n[Fe] * 1e3)) * s
    }) : (n = ao.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
        y: Ee(n[2], s),
        M: Ee(n[3], s),
        w: Ee(n[4], s),
        d: Ee(n[5], s),
        h: Ee(n[6], s),
        m: Ee(n[7], s),
        s: Ee(n[8], s)
    }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (a = oo(W(r.from), W(r.to)), r = {}, r.ms = a.milliseconds, r.M = a.months), i = new Ut(r), yt(e) && T(e, "_locale") && (i._locale = e._locale), yt(e) && T(e, "_isValid") && (i._isValid = e._isValid), i
}
ae.fn = Ut.prototype;
ae.invalid = ja;

function Ee(e, t) {
    var r = e && parseFloat(e.replace(",", "."));
    return (isNaN(r) ? 0 : r) * t
}

function nn(e, t) {
    var r = {};
    return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r
}

function oo(e, t) {
    var r;
    return e.isValid() && t.isValid() ? (t = Ir(t, e), e.isBefore(t) ? r = nn(e, t) : (r = nn(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : {
        milliseconds: 0,
        months: 0
    }
}

function $n(e, t) {
    return function (r, n) {
        var s, i;
        return n !== null && !isNaN(+n) && (_n(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = r, r = n, n = i), s = ae(r, n), Gn(this, s, e), this
    }
}

function Gn(e, t, r, n) {
    var s = t._milliseconds,
        i = fr(t._days),
        a = fr(t._months);
    e.isValid() && (n = n ?? !0, a && Tn(e, rt(e, "Month") + a * r), i && Nn(e, "Date", rt(e, "Date") + i * r), s && e._d.setTime(e._d.valueOf() + s * r), n && p.updateOffset(e, i || a))
}
var lo = $n(1, "add"),
    uo = $n(-1, "subtract");

function qn(e) {
    return typeof e == "string" || e instanceof String
}

function fo(e) {
    return ie(e) || ot(e) || qn(e) || ke(e) || ho(e) || co(e) || e === null || e === void 0
}

function co(e) {
    var t = Re(e) && !_r(e),
        r = !1,
        n = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
        s, i, a = n.length;
    for (s = 0; s < a; s += 1) i = n[s], r = r || T(e, i);
    return t && r
}

function ho(e) {
    var t = se(e),
        r = !1;
    return t && (r = e.filter(function (n) {
        return !ke(n) && qn(e)
    }).length === 0), t && r
}

function mo(e) {
    var t = Re(e) && !_r(e),
        r = !1,
        n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
        s, i;
    for (s = 0; s < n.length; s += 1) i = n[s], r = r || T(e, i);
    return t && r
}

function po(e, t) {
    var r = e.diff(t, "days", !0);
    return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse"
}

function go(e, t) {
    arguments.length === 1 && (arguments[0] ? fo(arguments[0]) ? (e = arguments[0], t = void 0) : mo(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var r = e || W(),
        n = Ir(r, this).startOf("day"),
        s = p.calendarFormat(this, n) || "sameElse",
        i = t && (de(t[s]) ? t[s].call(this, r) : t[s]);
    return this.format(i || this.localeData().calendar(s, this, W(r)))
}

function wo() {
    return new lt(this)
}

function _o(e, t) {
    var r = ie(e) ? e : W(e);
    return this.isValid() && r.isValid() ? (t = ee(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1
}

function yo(e, t) {
    var r = ie(e) ? e : W(e);
    return this.isValid() && r.isValid() ? (t = ee(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1
}

function vo(e, t, r, n) {
    var s = ie(e) ? e : W(e),
        i = ie(t) ? t : W(t);
    return this.isValid() && s.isValid() && i.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (n[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1
}

function ko(e, t) {
    var r = ie(e) ? e : W(e),
        n;
    return this.isValid() && r.isValid() ? (t = ee(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1
}

function So(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
}

function Mo(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
}

function Do(e, t, r) {
    var n, s, i;
    if (!this.isValid()) return NaN;
    if (n = Ir(e, this), !n.isValid()) return NaN;
    switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = ee(t), t) {
        case "year":
            i = vt(this, n) / 12;
            break;
        case "month":
            i = vt(this, n);
            break;
        case "quarter":
            i = vt(this, n) / 3;
            break;
        case "second":
            i = (this - n) / 1e3;
            break;
        case "minute":
            i = (this - n) / 6e4;
            break;
        case "hour":
            i = (this - n) / 36e5;
            break;
        case "day":
            i = (this - n - s) / 864e5;
            break;
        case "week":
            i = (this - n - s) / 6048e5;
            break;
        default:
            i = this - n
    }
    return r ? i : Q(i)
}

function vt(e, t) {
    if (e.date() < t.date()) return -vt(t, e);
    var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
        n = e.clone().add(r, "months"),
        s, i;
    return t - n < 0 ? (s = e.clone().add(r - 1, "months"), i = (t - n) / (n - s)) : (s = e.clone().add(r + 1, "months"), i = (t - n) / (s - n)), -(r + i) || 0
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

function No() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}

function Yo(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
        r = t ? this.clone().utc() : this;
    return r.year() < 0 || r.year() > 9999 ? _t(r, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : de(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", _t(r, "Z")) : _t(r, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}

function Oo() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        t = "",
        r, n, s, i;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + n + s + i)
}

function To(e) {
    e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
    var t = _t(this, e);
    return this.localeData().postformat(t)
}

function bo(e, t) {
    return this.isValid() && (ie(e) && e.isValid() || W(e).isValid()) ? ae({
        to: this,
        from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}

function Co(e) {
    return this.from(W(), e)
}

function Po(e, t) {
    return this.isValid() && (ie(e) && e.isValid() || W(e).isValid()) ? ae({
        from: this,
        to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}

function Eo(e) {
    return this.to(W(), e)
}

function jn(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = Se(e), t != null && (this._locale = t), this)
}
var Zn = K("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return e === void 0 ? this.localeData() : this.locale(e)
});

function zn() {
    return this._locale
}
var Yt = 1e3,
    $e = 60 * Yt,
    Ot = 60 * $e,
    Bn = (365 * 400 + 97) * 24 * Ot;

function Ge(e, t) {
    return (e % t + t) % t
}

function Jn(e, t, r) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Bn : new Date(e, t, r).valueOf()
}

function Qn(e, t, r) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Bn : Date.UTC(e, t, r)
}

function Fo(e) {
    var t, r;
    if (e = ee(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (r = this._isUTC ? Qn : Jn, e) {
        case "year":
            t = r(this.year(), 0, 1);
            break;
        case "quarter":
            t = r(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = r(this.year(), this.month(), 1);
            break;
        case "week":
            t = r(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = r(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(), t -= Ge(t + (this._isUTC ? 0 : this.utcOffset() * $e), Ot);
            break;
        case "minute":
            t = this._d.valueOf(), t -= Ge(t, $e);
            break;
        case "second":
            t = this._d.valueOf(), t -= Ge(t, Yt);
            break
    }
    return this._d.setTime(t), p.updateOffset(this, !0), this
}

function Ro(e) {
    var t, r;
    if (e = ee(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (r = this._isUTC ? Qn : Jn, e) {
        case "year":
            t = r(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = r(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = r(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(), t += Ot - Ge(t + (this._isUTC ? 0 : this.utcOffset() * $e), Ot) - 1;
            break;
        case "minute":
            t = this._d.valueOf(), t += $e - Ge(t, $e) - 1;
            break;
        case "second":
            t = this._d.valueOf(), t += Yt - Ge(t, Yt) - 1;
            break
    }
    return this._d.setTime(t), p.updateOffset(this, !0), this
}

function Wo() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
}

function Io() {
    return Math.floor(this.valueOf() / 1e3)
}

function xo() {
    return new Date(this.valueOf())
}

function Lo() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
}

function Ao() {
    var e = this;
    return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
    }
}

function Uo() {
    return this.isValid() ? this.toISOString() : null
}

function Ho() {
    return yr(this)
}

function Vo() {
    return Ye({}, M(this))
}

function $o() {
    return M(this).overflow
}

function Go() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
g("N", xr);
g("NN", xr);
g("NNN", xr);
g("NNNN", tl);
g("NNNNN", rl);
P(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, r, n) {
    var s = r._locale.erasParse(e, n, r._strict);
    s ? M(r).era = s : M(r).invalidEra = e
});
g("y", Ze);
g("yy", Ze);
g("yyy", Ze);
g("yyyy", Ze);
g("yo", nl);
P(["y", "yy", "yyy", "yyyy"], q);
P(["yo"], function (e, t, r, n) {
    var s;
    r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[q] = r._locale.eraYearOrdinalParse(e, s) : t[q] = parseInt(e, 10)
});

function qo(e, t) {
    var r, n, s, i = this._eras || Se("en")._eras;
    for (r = 0, n = i.length; r < n; ++r) {
        switch (typeof i[r].since) {
            case "string":
                s = p(i[r].since).startOf("day"), i[r].since = s.valueOf();
                break
        }
        switch (typeof i[r].until) {
            case "undefined":
                i[r].until = 1 / 0;
                break;
            case "string":
                s = p(i[r].until).startOf("day").valueOf(), i[r].until = s.valueOf();
                break
        }
    }
    return i
}

function jo(e, t, r) {
    var n, s, i = this.eras(),
        a, o, u;
    for (e = e.toUpperCase(), n = 0, s = i.length; n < s; ++n)
        if (a = i[n].name.toUpperCase(), o = i[n].abbr.toUpperCase(), u = i[n].narrow.toUpperCase(), r) switch (t) {
            case "N":
            case "NN":
            case "NNN":
                if (o === e) return i[n];
                break;
            case "NNNN":
                if (a === e) return i[n];
                break;
            case "NNNNN":
                if (u === e) return i[n];
                break
        } else if ([a, o, u].indexOf(e) >= 0) return i[n]
}

function Zo(e, t) {
    var r = e.since <= e.until ? 1 : -1;
    return t === void 0 ? p(e.since).year() : p(e.since).year() + (t - e.offset) * r
}

function zo() {
    var e, t, r, n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
        if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since) return n[e].name;
    return ""
}

function Bo() {
    var e, t, r, n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
        if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since) return n[e].narrow;
    return ""
}

function Jo() {
    var e, t, r, n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
        if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since) return n[e].abbr;
    return ""
}

function Qo() {
    var e, t, r, n, s = this.localeData().eras();
    for (e = 0, t = s.length; e < t; ++e)
        if (r = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since) return (this.year() - p(s[e].since).year()) * r + s[e].offset;
    return this.year()
}

function Xo(e) {
    return T(this, "_erasNameRegex") || Lr.call(this), e ? this._erasNameRegex : this._erasRegex
}

function Ko(e) {
    return T(this, "_erasAbbrRegex") || Lr.call(this), e ? this._erasAbbrRegex : this._erasRegex
}

function el(e) {
    return T(this, "_erasNarrowRegex") || Lr.call(this), e ? this._erasNarrowRegex : this._erasRegex
}

function xr(e, t) {
    return t.erasAbbrRegex(e)
}

function tl(e, t) {
    return t.erasNameRegex(e)
}

function rl(e, t) {
    return t.erasNarrowRegex(e)
}

function nl(e, t) {
    return t._eraYearOrdinalRegex || Ze
}

function Lr() {
    var e = [],
        t = [],
        r = [],
        n = [],
        s, i, a, o, u, l = this.eras();
    for (s = 0, i = l.length; s < i; ++s) a = ye(l[s].name), o = ye(l[s].abbr), u = ye(l[s].narrow), t.push(a), e.push(o), r.push(u), n.push(a), n.push(o), n.push(u);
    this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
}
y(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100
});
y(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100
});

function Ht(e, t) {
    y(0, [e, e.length], 0, t)
}
Ht("gggg", "weekYear");
Ht("ggggg", "weekYear");
Ht("GGGG", "isoWeekYear");
Ht("GGGGG", "isoWeekYear");
g("G", It);
g("g", It);
g("GG", I, J);
g("gg", I, J);
g("GGGG", Nr, Dr);
g("gggg", Nr, Dr);
g("GGGGG", Wt, Ft);
g("ggggg", Wt, Ft);
ft(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, r, n) {
    t[n.substr(0, 2)] = Y(e)
});
ft(["gg", "GG"], function (e, t, r, n) {
    t[n] = p.parseTwoDigitYear(e)
});

function sl(e) {
    return Xn.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
}

function il(e) {
    return Xn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}

function al() {
    return ve(this.year(), 1, 4)
}

function ol() {
    return ve(this.isoWeekYear(), 1, 4)
}

function ll() {
    var e = this.localeData()._week;
    return ve(this.year(), e.dow, e.doy)
}

function ul() {
    var e = this.localeData()._week;
    return ve(this.weekYear(), e.dow, e.doy)
}

function Xn(e, t, r, n, s) {
    var i;
    return e == null ? st(this, n, s).year : (i = ve(e, n, s), t > i && (t = i), fl.call(this, e, t, r, n, s))
}

function fl(e, t, r, n, s) {
    var i = Pn(e, t, r, n, s),
        a = nt(i.year, 0, i.dayOfYear);
    return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
}
y("Q", 0, "Qo", "quarter");
g("Q", vn);
P("Q", function (e, t) {
    t[ge] = (Y(e) - 1) * 3
});

function cl(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
}
y("D", ["DD", 2], "Do", "date");
g("D", I, ze);
g("DD", I, J);
g("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
});
P(["D", "DD"], oe);
P("Do", function (e, t) {
    t[oe] = Y(e.match(I)[0])
});
var Kn = Be("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
g("DDD", Rt);
g("DDDD", kn);
P(["DDD", "DDDD"], function (e, t, r) {
    r._dayOfYear = Y(e)
});

function dl(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return e == null ? t : this.add(e - t, "d")
}
y("m", ["mm", 2], 0, "minute");
g("m", I, Yr);
g("mm", I, J);
P(["m", "mm"], re);
var hl = Be("Minutes", !1);
y("s", ["ss", 2], 0, "second");
g("s", I, Yr);
g("ss", I, J);
P(["s", "ss"], we);
var ml = Be("Seconds", !1);
y("S", 0, 0, function () {
    return ~~(this.millisecond() / 100)
});
y(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10)
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10
});
y(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100
});
y(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3
});
y(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4
});
y(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5
});
y(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6
});
g("S", Rt, vn);
g("SS", Rt, J);
g("SSS", Rt, kn);
var Oe, es;
for (Oe = "SSSS"; Oe.length <= 9; Oe += "S") g(Oe, Ze);

function pl(e, t) {
    t[Fe] = Y(("0." + e) * 1e3)
}
for (Oe = "S"; Oe.length <= 9; Oe += "S") P(Oe, pl);
es = Be("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");

function gl() {
    return this._isUTC ? "UTC" : ""
}

function wl() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}
var m = lt.prototype;
m.add = lo;
m.calendar = go;
m.clone = wo;
m.diff = Do;
m.endOf = Ro;
m.format = To;
m.from = bo;
m.fromNow = Co;
m.to = Po;
m.toNow = Eo;
m.get = Yi;
m.invalidAt = $o;
m.isAfter = _o;
m.isBefore = yo;
m.isBetween = vo;
m.isSame = ko;
m.isSameOrAfter = So;
m.isSameOrBefore = Mo;
m.isValid = Ho;
m.lang = Zn;
m.locale = jn;
m.localeData = zn;
m.max = Ua;
m.min = Aa;
m.parsingFlags = Vo;
m.set = Oi;
m.startOf = Fo;
m.subtract = uo;
m.toArray = Lo;
m.toObject = Ao;
m.toDate = xo;
m.toISOString = Yo;
m.inspect = Oo;
typeof Symbol < "u" && Symbol.for != null && (m[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">"
});
m.toJSON = Uo;
m.toString = No;
m.unix = Io;
m.valueOf = Wo;
m.creationData = Go;
m.eraName = zo;
m.eraNarrow = Bo;
m.eraAbbr = Jo;
m.eraYear = Qo;
m.year = Dn;
m.isLeapYear = Ni;
m.weekYear = sl;
m.isoWeekYear = il;
m.quarter = m.quarters = cl;
m.month = bn;
m.daysInMonth = Ii;
m.week = m.weeks = Gi;
m.isoWeek = m.isoWeeks = qi;
m.weeksInYear = ll;
m.weeksInWeekYear = ul;
m.isoWeeksInYear = al;
m.isoWeeksInISOWeekYear = ol;
m.date = Kn;
m.day = m.days = sa;
m.weekday = ia;
m.isoWeekday = aa;
m.dayOfYear = dl;
m.hour = m.hours = ha;
m.minute = m.minutes = hl;
m.second = m.seconds = ml;
m.millisecond = m.milliseconds = es;
m.utcOffset = Ba;
m.utc = Qa;
m.local = Xa;
m.parseZone = Ka;
m.hasAlignedHourOffset = eo;
m.isDST = to;
m.isLocal = no;
m.isUtcOffset = so;
m.isUtc = Vn;
m.isUTC = Vn;
m.zoneAbbr = gl;
m.zoneName = wl;
m.dates = K("dates accessor is deprecated. Use date instead.", Kn);
m.months = K("months accessor is deprecated. Use month instead", bn);
m.years = K("years accessor is deprecated. Use year instead", Dn);
m.zone = K("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ja);
m.isDSTShifted = K("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", ro);

function _l(e) {
    return W(e * 1e3)
}

function yl() {
    return W.apply(null, arguments).parseZone()
}

function ts(e) {
    return e
}
var b = kr.prototype;
b.calendar = ni;
b.longDateFormat = oi;
b.invalidDate = ui;
b.ordinal = di;
b.preparse = ts;
b.postformat = ts;
b.relativeTime = mi;
b.pastFuture = pi;
b.set = ti;
b.eras = qo;
b.erasParse = jo;
b.erasConvertYear = Zo;
b.erasAbbrRegex = Ko;
b.erasNameRegex = Xo;
b.erasNarrowRegex = el;
b.months = Ei;
b.monthsShort = Fi;
b.monthsParse = Wi;
b.monthsRegex = Li;
b.monthsShortRegex = xi;
b.week = Ui;
b.firstDayOfYear = $i;
b.firstDayOfWeek = Vi;
b.weekdays = Ki;
b.weekdaysMin = ta;
b.weekdaysShort = ea;
b.weekdaysParse = na;
b.weekdaysRegex = oa;
b.weekdaysShortRegex = la;
b.weekdaysMinRegex = ua;
b.isPM = ca;
b.meridiem = ma;

function Tt(e, t, r, n) {
    var s = Se(),
        i = ce().set(n, t);
    return s[r](i, e)
}

function rs(e, t, r) {
    if (ke(e) && (t = e, e = void 0), e = e || "", t != null) return Tt(e, t, r, "month");
    var n, s = [];
    for (n = 0; n < 12; n++) s[n] = Tt(e, n, r, "month");
    return s
}

function Ar(e, t, r, n) {
    typeof e == "boolean" ? (ke(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, ke(t) && (r = t, t = void 0), t = t || "");
    var s = Se(),
        i = e ? s._week.dow : 0,
        a, o = [];
    if (r != null) return Tt(t, (r + i) % 7, n, "day");
    for (a = 0; a < 7; a++) o[a] = Tt(t, (a + i) % 7, n, "day");
    return o
}

function vl(e, t) {
    return rs(e, t, "months")
}

function kl(e, t) {
    return rs(e, t, "monthsShort")
}

function Sl(e, t, r) {
    return Ar(e, t, r, "weekdays")
}

function Ml(e, t, r) {
    return Ar(e, t, r, "weekdaysShort")
}

function Dl(e, t, r) {
    return Ar(e, t, r, "weekdaysMin")
}
be("en", {
    eras: [{
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
    }, {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
        var t = e % 10,
            r = Y(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + r
    }
});
p.lang = K("moment.lang is deprecated. Use moment.locale instead.", be);
p.langData = K("moment.langData is deprecated. Use moment.localeData instead.", Se);
var me = Math.abs;

function Nl() {
    var e = this._data;
    return this._milliseconds = me(this._milliseconds), this._days = me(this._days), this._months = me(this._months), e.milliseconds = me(e.milliseconds), e.seconds = me(e.seconds), e.minutes = me(e.minutes), e.hours = me(e.hours), e.months = me(e.months), e.years = me(e.years), this
}

function ns(e, t, r, n) {
    var s = ae(t, r);
    return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble()
}

function Yl(e, t) {
    return ns(this, e, t, 1)
}

function Ol(e, t) {
    return ns(this, e, t, -1)
}

function sn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
}

function Tl() {
    var e = this._milliseconds,
        t = this._days,
        r = this._months,
        n = this._data,
        s, i, a, o, u;
    return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += sn(dr(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, s = Q(e / 1e3), n.seconds = s % 60, i = Q(s / 60), n.minutes = i % 60, a = Q(i / 60), n.hours = a % 24, t += Q(a / 24), u = Q(ss(t)), r += u, t -= sn(dr(u)), o = Q(r / 12), r %= 12, n.days = t, n.months = r, n.years = o, this
}

function ss(e) {
    return e * 4800 / 146097
}

function dr(e) {
    return e * 146097 / 4800
}

function bl(e) {
    if (!this.isValid()) return NaN;
    var t, r, n = this._milliseconds;
    if (e = ee(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + n / 864e5, r = this._months + ss(t), e) {
        case "month":
            return r;
        case "quarter":
            return r / 3;
        case "year":
            return r / 12
    } else switch (t = this._days + Math.round(dr(this._months)), e) {
        case "week":
            return t / 7 + n / 6048e5;
        case "day":
            return t + n / 864e5;
        case "hour":
            return t * 24 + n / 36e5;
        case "minute":
            return t * 1440 + n / 6e4;
        case "second":
            return t * 86400 + n / 1e3;
        case "millisecond":
            return Math.floor(t * 864e5) + n;
        default:
            throw new Error("Unknown unit " + e)
    }
}

function Me(e) {
    return function () {
        return this.as(e)
    }
}
var is = Me("ms"),
    Cl = Me("s"),
    Pl = Me("m"),
    El = Me("h"),
    Fl = Me("d"),
    Rl = Me("w"),
    Wl = Me("M"),
    Il = Me("Q"),
    xl = Me("y"),
    Ll = is;

function Al() {
    return ae(this)
}

function Ul(e) {
    return e = ee(e), this.isValid() ? this[e + "s"]() : NaN
}

function We(e) {
    return function () {
        return this.isValid() ? this._data[e] : NaN
    }
}
var Hl = We("milliseconds"),
    Vl = We("seconds"),
    $l = We("minutes"),
    Gl = We("hours"),
    ql = We("days"),
    jl = We("months"),
    Zl = We("years");

function zl() {
    return Q(this.days() / 7)
}
var pe = Math.round,
    Ue = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };

function Bl(e, t, r, n, s) {
    return s.relativeTime(t || 1, !!r, e, n)
}

function Jl(e, t, r, n) {
    var s = ae(e).abs(),
        i = pe(s.as("s")),
        a = pe(s.as("m")),
        o = pe(s.as("h")),
        u = pe(s.as("d")),
        l = pe(s.as("M")),
        f = pe(s.as("w")),
        c = pe(s.as("y")),
        d = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || a <= 1 && ["m"] || a < r.m && ["mm", a] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
    return r.w != null && (d = d || f <= 1 && ["w"] || f < r.w && ["ww", f]), d = d || l <= 1 && ["M"] || l < r.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c], d[2] = t, d[3] = +e > 0, d[4] = n, Bl.apply(null, d)
}

function Ql(e) {
    return e === void 0 ? pe : typeof e == "function" ? (pe = e, !0) : !1
}

function Xl(e, t) {
    return Ue[e] === void 0 ? !1 : t === void 0 ? Ue[e] : (Ue[e] = t, e === "s" && (Ue.ss = t - 1), !0)
}

function Kl(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var r = !1,
        n = Ue,
        s, i;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Ue, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), i = Jl(this, !r, n, s), r && (i = s.pastFuture(+this, i)), s.postformat(i)
}
var tr = Math.abs;

function xe(e) {
    return (e > 0) - (e < 0) || +e
}

function Vt() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = tr(this._milliseconds) / 1e3,
        t = tr(this._days),
        r = tr(this._months),
        n, s, i, a, o = this.asSeconds(),
        u, l, f, c;
    return o ? (n = Q(e / 60), s = Q(n / 60), e %= 60, n %= 60, i = Q(r / 12), r %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", l = xe(this._months) !== xe(o) ? "-" : "", f = xe(this._days) !== xe(o) ? "-" : "", c = xe(this._milliseconds) !== xe(o) ? "-" : "", u + "P" + (i ? l + i + "Y" : "") + (r ? l + r + "M" : "") + (t ? f + t + "D" : "") + (s || n || e ? "T" : "") + (s ? c + s + "H" : "") + (n ? c + n + "M" : "") + (e ? c + a + "S" : "")) : "P0D"
}
var O = Ut.prototype;
O.isValid = qa;
O.abs = Nl;
O.add = Yl;
O.subtract = Ol;
O.as = bl;
O.asMilliseconds = is;
O.asSeconds = Cl;
O.asMinutes = Pl;
O.asHours = El;
O.asDays = Fl;
O.asWeeks = Rl;
O.asMonths = Wl;
O.asQuarters = Il;
O.asYears = xl;
O.valueOf = Ll;
O._bubble = Tl;
O.clone = Al;
O.get = Ul;
O.milliseconds = Hl;
O.seconds = Vl;
O.minutes = $l;
O.hours = Gl;
O.days = ql;
O.weeks = zl;
O.months = jl;
O.years = Zl;
O.humanize = Kl;
O.toISOString = Vt;
O.toString = Vt;
O.toJSON = Vt;
O.locale = jn;
O.localeData = zn;
O.toIsoString = K("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vt);
O.lang = Zn;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
g("x", It);
g("X", yi);
P("X", function (e, t, r) {
    r._d = new Date(parseFloat(e) * 1e3)
});
P("x", function (e, t, r) {
    r._d = new Date(Y(e))
}); //! moment.js
p.version = "2.30.1";
Ks(W);
p.fn = m;
p.min = Ha;
p.max = Va;
p.now = $a;
p.utc = ce;
p.unix = _l;
p.months = vl;
p.isDate = ot;
p.locale = be;
p.invalid = Et;
p.duration = ae;
p.isMoment = ie;
p.weekdays = Sl;
p.parseZone = yl;
p.localeData = Se;
p.isDuration = yt;
p.monthsShort = kl;
p.weekdaysMin = Dl;
p.defineLocale = Pr;
p.updateLocale = _a;
p.locales = ya;
p.weekdaysShort = Ml;
p.normalizeUnits = ee;
p.relativeTimeRounding = Ql;
p.relativeTimeThreshold = Xl;
p.calendarFormat = po;
p.prototype = m;
p.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
};
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var He = 9e15,
    Pe = 1e9,
    hr = "0123456789abcdef",
    bt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    Ct = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    mr = {
        precision: 20,
        rounding: 4,
        modulo: 1,
        toExpNeg: -7,
        toExpPos: 21,
        minE: -He,
        maxE: He,
        crypto: !1
    },
    as, _e, S = !0,
    $t = "[DecimalError] ",
    Ce = $t + "Invalid argument: ",
    os = $t + "Precision limit exceeded",
    ls = $t + "crypto unavailable",
    us = "[object Decimal]",
    j = Math.floor,
    U = Math.pow,
    eu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    tu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    ru = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    fs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    ne = 1e7,
    v = 7,
    nu = 9007199254740991,
    su = bt.length - 1,
    pr = Ct.length - 1,
    h = {
        toStringTag: us
    };
h.absoluteValue = h.abs = function () {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), _(e)
};
h.ceil = function () {
    return _(new this.constructor(this), this.e + 1, 2)
};
h.clampedTo = h.clamp = function (e, t) {
    var r, n = this,
        s = n.constructor;
    if (e = new s(e), t = new s(t), !e.s || !t.s) return new s(NaN);
    if (e.gt(t)) throw Error(Ce + t);
    return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new s(n)
};
h.comparedTo = h.cmp = function (e) {
    var t, r, n, s, i = this,
        a = i.d,
        o = (e = new i.constructor(e)).d,
        u = i.s,
        l = e.s;
    if (!a || !o) return !u || !l ? NaN : u !== l ? u : a === o ? 0 : !a ^ u < 0 ? 1 : -1;
    if (!a[0] || !o[0]) return a[0] ? u : o[0] ? -l : 0;
    if (u !== l) return u;
    if (i.e !== e.e) return i.e > e.e ^ u < 0 ? 1 : -1;
    for (n = a.length, s = o.length, t = 0, r = n < s ? n : s; t < r; ++t)
        if (a[t] !== o[t]) return a[t] > o[t] ^ u < 0 ? 1 : -1;
    return n === s ? 0 : n > s ^ u < 0 ? 1 : -1
};
h.cosine = h.cos = function () {
    var e, t, r = this,
        n = r.constructor;
    return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + v, n.rounding = 1, r = iu(n, ps(n, r)), n.precision = e, n.rounding = t, _(_e == 2 || _e == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN)
};
h.cubeRoot = h.cbrt = function () {
    var e, t, r, n, s, i, a, o, u, l, f = this,
        c = f.constructor;
    if (!f.isFinite() || f.isZero()) return new c(f);
    for (S = !1, i = f.s * U(f.s * f, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = $(f.d), e = f.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = U(r, 1 / 3), e = j((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new c(r), n.s = f.s) : n = new c(i.toString()), a = (e = c.precision) + 3;;)
        if (o = n, u = o.times(o).times(o), l = u.plus(f), n = E(l.plus(f).times(o), l.plus(u), a + 2, 1), $(o.d).slice(0, a) === (r = $(n.d)).slice(0, a))
            if (r = r.slice(a - 3, a + 1), r == "9999" || !s && r == "4999") {
                if (!s && (_(o, e + 1, 0), o.times(o).times(o).eq(f))) {
                    n = o;
                    break
                }
                a += 4, s = 1
            } else {
                (!+r || !+r.slice(1) && r.charAt(0) == "5") && (_(n, e + 1, 1), t = !n.times(n).times(n).eq(f));
                break
            } return S = !0, _(n, e, c.rounding, t)
};
h.decimalPlaces = h.dp = function () {
    var e, t = this.d,
        r = NaN;
    if (t) {
        if (e = t.length - 1, r = (e - j(this.e / v)) * v, e = t[e], e)
            for (; e % 10 == 0; e /= 10) r--;
        r < 0 && (r = 0)
    }
    return r
};
h.dividedBy = h.div = function (e) {
    return E(this, new this.constructor(e))
};
h.dividedToIntegerBy = h.divToInt = function (e) {
    var t = this,
        r = t.constructor;
    return _(E(t, new r(e), 0, 1, 1), r.precision, r.rounding)
};
h.equals = h.eq = function (e) {
    return this.cmp(e) === 0
};
h.floor = function () {
    return _(new this.constructor(this), this.e + 1, 3)
};
h.greaterThan = h.gt = function (e) {
    return this.cmp(e) > 0
};
h.greaterThanOrEqualTo = h.gte = function (e) {
    var t = this.cmp(e);
    return t == 1 || t === 0
};
h.hyperbolicCosine = h.cosh = function () {
    var e, t, r, n, s, i = this,
        a = i.constructor,
        o = new a(1);
    if (!i.isFinite()) return new a(i.s ? 1 / 0 : NaN);
    if (i.isZero()) return o;
    r = a.precision, n = a.rounding, a.precision = r + Math.max(i.e, i.sd()) + 4, a.rounding = 1, s = i.d.length, s < 32 ? (e = Math.ceil(s / 3), t = (1 / qt(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), i = je(a, 1, i.times(t), new a(1), !0);
    for (var u, l = e, f = new a(8); l--;) u = i.times(i), i = o.minus(u.times(f.minus(u.times(f))));
    return _(i, a.precision = r, a.rounding = n, !0)
};
h.hyperbolicSine = h.sinh = function () {
    var e, t, r, n, s = this,
        i = s.constructor;
    if (!s.isFinite() || s.isZero()) return new i(s);
    if (t = i.precision, r = i.rounding, i.precision = t + Math.max(s.e, s.sd()) + 4, i.rounding = 1, n = s.d.length, n < 3) s = je(i, 2, s, s, !0);
    else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, s = s.times(1 / qt(5, e)), s = je(i, 2, s, s, !0);
        for (var a, o = new i(5), u = new i(16), l = new i(20); e--;) a = s.times(s), s = s.times(o.plus(a.times(u.times(a).plus(l))))
    }
    return i.precision = t, i.rounding = r, _(s, t, r, !0)
};
h.hyperbolicTangent = h.tanh = function () {
    var e, t, r = this,
        n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, E(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s)
};
h.inverseCosine = h.acos = function () {
    var e = this,
        t = e.constructor,
        r = e.abs().cmp(1),
        n = t.precision,
        s = t.rounding;
    return r !== -1 ? r === 0 ? e.isNeg() ? le(t, n, s) : new t(0) : new t(NaN) : e.isZero() ? le(t, n + 4, s).times(.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = s, e.times(2))
};
h.inverseHyperbolicCosine = h.acosh = function () {
    var e, t, r = this,
        n = r.constructor;
    return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, S = !1, r = r.times(r).minus(1).sqrt().plus(r), S = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r)
};
h.inverseHyperbolicSine = h.asinh = function () {
    var e, t, r = this,
        n = r.constructor;
    return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, S = !1, r = r.times(r).plus(1).sqrt().plus(r), S = !0, n.precision = e, n.rounding = t, r.ln())
};
h.inverseHyperbolicTangent = h.atanh = function () {
    var e, t, r, n, s = this,
        i = s.constructor;
    return s.isFinite() ? s.e >= 0 ? new i(s.abs().eq(1) ? s.s / 0 : s.isZero() ? s : NaN) : (e = i.precision, t = i.rounding, n = s.sd(), Math.max(n, e) < 2 * -s.e - 1 ? _(new i(s), e, t, !0) : (i.precision = r = n - s.e, s = E(s.plus(1), new i(1).minus(s), r + e, 1), i.precision = e + 4, i.rounding = 1, s = s.ln(), i.precision = e, i.rounding = t, s.times(.5))) : new i(NaN)
};
h.inverseSine = h.asin = function () {
    var e, t, r, n, s = this,
        i = s.constructor;
    return s.isZero() ? new i(s) : (t = s.abs().cmp(1), r = i.precision, n = i.rounding, t !== -1 ? t === 0 ? (e = le(i, r + 4, n).times(.5), e.s = s.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, s = s.div(new i(1).minus(s.times(s)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = n, s.times(2)))
};
h.inverseTangent = h.atan = function () {
    var e, t, r, n, s, i, a, o, u, l = this,
        f = l.constructor,
        c = f.precision,
        d = f.rounding;
    if (l.isFinite()) {
        if (l.isZero()) return new f(l);
        if (l.abs().eq(1) && c + 4 <= pr) return a = le(f, c + 4, d).times(.25), a.s = l.s, a
    } else {
        if (!l.s) return new f(NaN);
        if (c + 4 <= pr) return a = le(f, c + 4, d).times(.5), a.s = l.s, a
    }
    for (f.precision = o = c + 10, f.rounding = 1, r = Math.min(28, o / v + 2 | 0), e = r; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
    for (S = !1, t = Math.ceil(o / v), n = 1, u = l.times(l), a = new f(l), s = l; e !== -1;)
        if (s = s.times(u), i = a.minus(s.div(n += 2)), s = s.times(u), a = i.plus(s.div(n += 2)), a.d[t] !== void 0)
            for (e = t; a.d[e] === i.d[e] && e--;);
    return r && (a = a.times(2 << r - 1)), S = !0, _(a, f.precision = c, f.rounding = d, !0)
};
h.isFinite = function () {
    return !!this.d
};
h.isInteger = h.isInt = function () {
    return !!this.d && j(this.e / v) > this.d.length - 2
};
h.isNaN = function () {
    return !this.s
};
h.isNegative = h.isNeg = function () {
    return this.s < 0
};
h.isPositive = h.isPos = function () {
    return this.s > 0
};
h.isZero = function () {
    return !!this.d && this.d[0] === 0
};
h.lessThan = h.lt = function (e) {
    return this.cmp(e) < 0
};
h.lessThanOrEqualTo = h.lte = function (e) {
    return this.cmp(e) < 1
};
h.logarithm = h.log = function (e) {
    var t, r, n, s, i, a, o, u, l = this,
        f = l.constructor,
        c = f.precision,
        d = f.rounding,
        w = 5;
    if (e == null) e = new f(10), t = !0;
    else {
        if (e = new f(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new f(NaN);
        t = e.eq(10)
    }
    if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1)) return new f(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
        if (r.length > 1) i = !0;
        else {
            for (s = r[0]; s % 10 === 0;) s /= 10;
            i = s !== 1
        } if (S = !1, o = c + w, a = Te(l, o), n = t ? Pt(f, o + 10) : Te(e, o), u = E(a, n, o, 1), at(u.d, s = c, d))
        do
            if (o += 10, a = Te(l, o), n = t ? Pt(f, o + 10) : Te(e, o), u = E(a, n, o, 1), !i) {
                +$(u.d).slice(s + 1, s + 15) + 1 == 1e14 && (u = _(u, c + 1, 0));
                break
            } while (at(u.d, s += 10, d));
    return S = !0, _(u, c, d)
};
h.minus = h.sub = function (e) {
    var t, r, n, s, i, a, o, u, l, f, c, d, w = this,
        D = w.constructor;
    if (e = new D(e), !w.d || !e.d) return !w.s || !e.s ? e = new D(NaN) : w.d ? e.s = -e.s : e = new D(e.d || w.s !== e.s ? w : NaN), e;
    if (w.s != e.s) return e.s = -e.s, w.plus(e);
    if (l = w.d, d = e.d, o = D.precision, u = D.rounding, !l[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (l[0]) e = new D(w);
        else return new D(u === 3 ? -0 : 0);
        return S ? _(e, o, u) : e
    }
    if (r = j(e.e / v), f = j(w.e / v), l = l.slice(), i = f - r, i) {
        for (c = i < 0, c ? (t = l, i = -i, a = d.length) : (t = d, r = f, a = l.length), n = Math.max(Math.ceil(o / v), a) + 2, i > n && (i = n, t.length = 1), t.reverse(), n = i; n--;) t.push(0);
        t.reverse()
    } else {
        for (n = l.length, a = d.length, c = n < a, c && (a = n), n = 0; n < a; n++)
            if (l[n] != d[n]) {
                c = l[n] < d[n];
                break
            } i = 0
    }
    for (c && (t = l, l = d, d = t, e.s = -e.s), a = l.length, n = d.length - a; n > 0; --n) l[a++] = 0;
    for (n = d.length; n > i;) {
        if (l[--n] < d[n]) {
            for (s = n; s && l[--s] === 0;) l[s] = ne - 1;
            --l[s], l[n] += ne
        }
        l[n] -= d[n]
    }
    for (; l[--a] === 0;) l.pop();
    for (; l[0] === 0; l.shift()) --r;
    return l[0] ? (e.d = l, e.e = Gt(l, r), S ? _(e, o, u) : e) : new D(u === 3 ? -0 : 0)
};
h.modulo = h.mod = function (e) {
    var t, r = this,
        n = r.constructor;
    return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? _(new n(r), n.precision, n.rounding) : (S = !1, n.modulo == 9 ? (t = E(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = E(r, e, 0, n.modulo, 1), t = t.times(e), S = !0, r.minus(t))
};
h.naturalExponential = h.exp = function () {
    return gr(this)
};
h.naturalLogarithm = h.ln = function () {
    return Te(this)
};
h.negated = h.neg = function () {
    var e = new this.constructor(this);
    return e.s = -e.s, _(e)
};
h.plus = h.add = function (e) {
    var t, r, n, s, i, a, o, u, l, f, c = this,
        d = c.constructor;
    if (e = new d(e), !c.d || !e.d) return !c.s || !e.s ? e = new d(NaN) : c.d || (e = new d(e.d || c.s === e.s ? c : NaN)), e;
    if (c.s != e.s) return e.s = -e.s, c.minus(e);
    if (l = c.d, f = e.d, o = d.precision, u = d.rounding, !l[0] || !f[0]) return f[0] || (e = new d(c)), S ? _(e, o, u) : e;
    if (i = j(c.e / v), n = j(e.e / v), l = l.slice(), s = i - n, s) {
        for (s < 0 ? (r = l, s = -s, a = f.length) : (r = f, n = i, a = l.length), i = Math.ceil(o / v), a = i > a ? i + 1 : a + 1, s > a && (s = a, r.length = 1), r.reverse(); s--;) r.push(0);
        r.reverse()
    }
    for (a = l.length, s = f.length, a - s < 0 && (s = a, r = f, f = l, l = r), t = 0; s;) t = (l[--s] = l[s] + f[s] + t) / ne | 0, l[s] %= ne;
    for (t && (l.unshift(t), ++n), a = l.length; l[--a] == 0;) l.pop();
    return e.d = l, e.e = Gt(l, n), S ? _(e, o, u) : e
};
h.precision = h.sd = function (e) {
    var t, r = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ce + e);
    return r.d ? (t = cs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t
};
h.round = function () {
    var e = this,
        t = e.constructor;
    return _(new t(e), e.e + 1, t.rounding)
};
h.sine = h.sin = function () {
    var e, t, r = this,
        n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + v, n.rounding = 1, r = ou(n, ps(n, r)), n.precision = e, n.rounding = t, _(_e > 2 ? r.neg() : r, e, t, !0)) : new n(NaN)
};
h.squareRoot = h.sqrt = function () {
    var e, t, r, n, s, i, a = this,
        o = a.d,
        u = a.e,
        l = a.s,
        f = a.constructor;
    if (l !== 1 || !o || !o[0]) return new f(!l || l < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
    for (S = !1, l = Math.sqrt(+a), l == 0 || l == 1 / 0 ? (t = $(o), (t.length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = j((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), n = new f(t)) : n = new f(l.toString()), r = (u = f.precision) + 3;;)
        if (i = n, n = i.plus(E(a, i, r + 2, 1)).times(.5), $(i.d).slice(0, r) === (t = $(n.d)).slice(0, r))
            if (t = t.slice(r - 3, r + 1), t == "9999" || !s && t == "4999") {
                if (!s && (_(i, u + 1, 0), i.times(i).eq(a))) {
                    n = i;
                    break
                }
                r += 4, s = 1
            } else {
                (!+t || !+t.slice(1) && t.charAt(0) == "5") && (_(n, u + 1, 1), e = !n.times(n).eq(a));
                break
            } return S = !0, _(n, u, f.rounding, e)
};
h.tangent = h.tan = function () {
    var e, t, r = this,
        n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = E(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, _(_e == 2 || _e == 4 ? r.neg() : r, e, t, !0)) : new n(NaN)
};
h.times = h.mul = function (e) {
    var t, r, n, s, i, a, o, u, l, f = this,
        c = f.constructor,
        d = f.d,
        w = (e = new c(e)).d;
    if (e.s *= f.s, !d || !d[0] || !w || !w[0]) return new c(!e.s || d && !d[0] && !w || w && !w[0] && !d ? NaN : !d || !w ? e.s / 0 : e.s * 0);
    for (r = j(f.e / v) + j(e.e / v), u = d.length, l = w.length, u < l && (i = d, d = w, w = i, a = u, u = l, l = a), i = [], a = u + l, n = a; n--;) i.push(0);
    for (n = l; --n >= 0;) {
        for (t = 0, s = u + n; s > n;) o = i[s] + w[n] * d[s - n - 1] + t, i[s--] = o % ne | 0, t = o / ne | 0;
        i[s] = (i[s] + t) % ne | 0
    }
    for (; !i[--a];) i.pop();
    return t ? ++r : i.shift(), e.d = i, e.e = Gt(i, r), S ? _(e, c.precision, c.rounding) : e
};
h.toBinary = function (e, t) {
    return Ur(this, 2, e, t)
};
h.toDecimalPlaces = h.toDP = function (e, t) {
    var r = this,
        n = r.constructor;
    return r = new n(r), e === void 0 ? r : (B(e, 0, Pe), t === void 0 ? t = n.rounding : B(t, 0, 8), _(r, e + r.e + 1, t))
};
h.toExponential = function (e, t) {
    var r, n = this,
        s = n.constructor;
    return e === void 0 ? r = fe(n, !0) : (B(e, 0, Pe), t === void 0 ? t = s.rounding : B(t, 0, 8), n = _(new s(n), e + 1, t), r = fe(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r
};
h.toFixed = function (e, t) {
    var r, n, s = this,
        i = s.constructor;
    return e === void 0 ? r = fe(s) : (B(e, 0, Pe), t === void 0 ? t = i.rounding : B(t, 0, 8), n = _(new i(s), e + s.e + 1, t), r = fe(n, !1, e + n.e + 1)), s.isNeg() && !s.isZero() ? "-" + r : r
};
h.toFraction = function (e) {
    var t, r, n, s, i, a, o, u, l, f, c, d, w = this,
        D = w.d,
        k = w.constructor;
    if (!D) return new k(w);
    if (l = r = new k(1), n = u = new k(0), t = new k(n), i = t.e = cs(D) - w.e - 1, a = i % v, t.d[0] = U(10, a < 0 ? v + a : a), e == null) e = i > 0 ? t : l;
    else {
        if (o = new k(e), !o.isInt() || o.lt(l)) throw Error(Ce + o);
        e = o.gt(t) ? i > 0 ? t : l : o
    }
    for (S = !1, o = new k($(D)), f = k.precision, k.precision = i = D.length * v * 2; c = E(o, t, 0, 1, 1), s = r.plus(c.times(n)), s.cmp(e) != 1;) r = n, n = s, s = l, l = u.plus(c.times(s)), u = s, s = t, t = o.minus(c.times(s)), o = s;
    return s = E(e.minus(r), n, 0, 1, 1), u = u.plus(s.times(l)), r = r.plus(s.times(n)), u.s = l.s = w.s, d = E(l, n, i, 1).minus(w).abs().cmp(E(u, r, i, 1).minus(w).abs()) < 1 ? [l, n] : [u, r], k.precision = f, S = !0, d
};
h.toHexadecimal = h.toHex = function (e, t) {
    return Ur(this, 16, e, t)
};
h.toNearest = function (e, t) {
    var r = this,
        n = r.constructor;
    if (r = new n(r), e == null) {
        if (!r.d) return r;
        e = new n(1), t = n.rounding
    } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : B(t, 0, 8), !r.d) return e.s ? r : e;
        if (!e.d) return e.s && (e.s = r.s), e
    }
    return e.d[0] ? (S = !1, r = E(r, e, 0, t, 1).times(e), S = !0, _(r)) : (e.s = r.s, r = e), r
};
h.toNumber = function () {
    return +this
};
h.toOctal = function (e, t) {
    return Ur(this, 8, e, t)
};
h.toPower = h.pow = function (e) {
    var t, r, n, s, i, a, o = this,
        u = o.constructor,
        l = +(e = new u(e));
    if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new u(U(+o, l));
    if (o = new u(o), o.eq(1)) return o;
    if (n = u.precision, i = u.rounding, e.eq(1)) return _(o, n, i);
    if (t = j(e.e / v), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= nu) return s = ds(u, o, r, n), e.s < 0 ? new u(1).div(s) : _(s, n, i);
    if (a = o.s, a < 0) {
        if (t < e.d.length - 1) return new u(NaN);
        if (e.d[t] & 1 || (a = 1), o.e == 0 && o.d[0] == 1 && o.d.length == 1) return o.s = a, o
    }
    return r = U(+o, l), t = r == 0 || !isFinite(r) ? j(l * (Math.log("0." + $(o.d)) / Math.LN10 + o.e + 1)) : new u(r + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? a / 0 : 0) : (S = !1, u.rounding = o.s = 1, r = Math.min(12, (t + "").length), s = gr(e.times(Te(o, n + r)), n), s.d && (s = _(s, n + 5, 1), at(s.d, n, i) && (t = n + 10, s = _(gr(e.times(Te(o, t + r)), t), t + 5, 1), +$(s.d).slice(n + 1, n + 15) + 1 == 1e14 && (s = _(s, n + 1, 0)))), s.s = a, S = !0, u.rounding = i, _(s, n, i))
};
h.toPrecision = function (e, t) {
    var r, n = this,
        s = n.constructor;
    return e === void 0 ? r = fe(n, n.e <= s.toExpNeg || n.e >= s.toExpPos) : (B(e, 1, Pe), t === void 0 ? t = s.rounding : B(t, 0, 8), n = _(new s(n), e, t), r = fe(n, e <= n.e || n.e <= s.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r
};
h.toSignificantDigits = h.toSD = function (e, t) {
    var r = this,
        n = r.constructor;
    return e === void 0 ? (e = n.precision, t = n.rounding) : (B(e, 1, Pe), t === void 0 ? t = n.rounding : B(t, 0, 8)), _(new n(r), e, t)
};
h.toString = function () {
    var e = this,
        t = e.constructor,
        r = fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r
};
h.truncated = h.trunc = function () {
    return _(new this.constructor(this), this.e + 1, 1)
};
h.valueOf = h.toJSON = function () {
    var e = this,
        t = e.constructor,
        r = fe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r
};

function $(e) {
    var t, r, n, s = e.length - 1,
        i = "",
        a = e[0];
    if (s > 0) {
        for (i += a, t = 1; t < s; t++) n = e[t] + "", r = v - n.length, r && (i += Ne(r)), i += n;
        a = e[t], n = a + "", r = v - n.length, r && (i += Ne(r))
    } else if (a === 0) return "0";
    for (; a % 10 === 0;) a /= 10;
    return i + a
}

function B(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(Ce + e)
}

function at(e, t, r, n) {
    var s, i, a, o;
    for (i = e[0]; i >= 10; i /= 10) --t;
    return --t < 0 ? (t += v, s = 0) : (s = Math.ceil((t + 1) / v), t %= v), i = U(10, v - t), o = e[s] % i | 0, n == null ? t < 3 ? (t == 0 ? o = o / 100 | 0 : t == 1 && (o = o / 10 | 0), a = r < 4 && o == 99999 || r > 3 && o == 49999 || o == 5e4 || o == 0) : a = (r < 4 && o + 1 == i || r > 3 && o + 1 == i / 2) && (e[s + 1] / i / 100 | 0) == U(10, t - 2) - 1 || (o == i / 2 || o == 0) && (e[s + 1] / i / 100 | 0) == 0 : t < 4 ? (t == 0 ? o = o / 1e3 | 0 : t == 1 ? o = o / 100 | 0 : t == 2 && (o = o / 10 | 0), a = (n || r < 4) && o == 9999 || !n && r > 3 && o == 4999) : a = ((n || r < 4) && o + 1 == i || !n && r > 3 && o + 1 == i / 2) && (e[s + 1] / i / 1e3 | 0) == U(10, t - 3) - 1, a
}

function kt(e, t, r) {
    for (var n, s = [0], i, a = 0, o = e.length; a < o;) {
        for (i = s.length; i--;) s[i] *= t;
        for (s[0] += hr.indexOf(e.charAt(a++)), n = 0; n < s.length; n++) s[n] > r - 1 && (s[n + 1] === void 0 && (s[n + 1] = 0), s[n + 1] += s[n] / r | 0, s[n] %= r)
    }
    return s.reverse()
}

function iu(e, t) {
    var r, n, s;
    if (t.isZero()) return t;
    n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), s = (1 / qt(4, r)).toString()) : (r = 16, s = "2.3283064365386962890625e-10"), e.precision += r, t = je(e, 1, t.times(s), new e(1));
    for (var i = r; i--;) {
        var a = t.times(t);
        t = a.times(a).minus(a).times(8).plus(1)
    }
    return e.precision -= r, t
}
var E = function () {
    function e(n, s, i) {
        var a, o = 0,
            u = n.length;
        for (n = n.slice(); u--;) a = n[u] * s + o, n[u] = a % i | 0, o = a / i | 0;
        return o && n.unshift(o), n
    }

    function t(n, s, i, a) {
        var o, u;
        if (i != a) u = i > a ? 1 : -1;
        else
            for (o = u = 0; o < i; o++)
                if (n[o] != s[o]) {
                    u = n[o] > s[o] ? 1 : -1;
                    break
                } return u
    }

    function r(n, s, i, a) {
        for (var o = 0; i--;) n[i] -= o, o = n[i] < s[i] ? 1 : 0, n[i] = o * a + n[i] - s[i];
        for (; !n[0] && n.length > 1;) n.shift()
    }
    return function (n, s, i, a, o, u) {
        var l, f, c, d, w, D, k, A, R, N, C, V, ct, he, jt, dt, Je, Zt, te, ht, mt = n.constructor,
            zt = n.s == s.s ? 1 : -1,
            G = n.d,
            F = s.d;
        if (!G || !G[0] || !F || !F[0]) return new mt(!n.s || !s.s || (G ? F && G[0] == F[0] : !F) ? NaN : G && G[0] == 0 || !F ? zt * 0 : zt / 0);
        for (u ? (w = 1, f = n.e - s.e) : (u = ne, w = v, f = j(n.e / w) - j(s.e / w)), te = F.length, Je = G.length, R = new mt(zt), N = R.d = [], c = 0; F[c] == (G[c] || 0); c++);
        if (F[c] > (G[c] || 0) && f--, i == null ? (he = i = mt.precision, a = mt.rounding) : o ? he = i + (n.e - s.e) + 1 : he = i, he < 0) N.push(1), D = !0;
        else {
            if (he = he / w + 2 | 0, c = 0, te == 1) {
                for (d = 0, F = F[0], he++;
                    (c < Je || d) && he--; c++) jt = d * u + (G[c] || 0), N[c] = jt / F | 0, d = jt % F | 0;
                D = d || c < Je
            } else {
                for (d = u / (F[0] + 1) | 0, d > 1 && (F = e(F, d, u), G = e(G, d, u), te = F.length, Je = G.length), dt = te, C = G.slice(0, te), V = C.length; V < te;) C[V++] = 0;
                ht = F.slice(), ht.unshift(0), Zt = F[0], F[1] >= u / 2 && ++Zt;
                do d = 0, l = t(F, C, te, V), l < 0 ? (ct = C[0], te != V && (ct = ct * u + (C[1] || 0)), d = ct / Zt | 0, d > 1 ? (d >= u && (d = u - 1), k = e(F, d, u), A = k.length, V = C.length, l = t(k, C, A, V), l == 1 && (d--, r(k, te < A ? ht : F, A, u))) : (d == 0 && (l = d = 1), k = F.slice()), A = k.length, A < V && k.unshift(0), r(C, k, V, u), l == -1 && (V = C.length, l = t(F, C, te, V), l < 1 && (d++, r(C, te < V ? ht : F, V, u))), V = C.length) : l === 0 && (d++, C = [0]), N[c++] = d, l && C[0] ? C[V++] = G[dt] || 0 : (C = [G[dt]], V = 1); while ((dt++ < Je || C[0] !== void 0) && he--);
                D = C[0] !== void 0
            }
            N[0] || N.shift()
        }
        if (w == 1) R.e = f, as = D;
        else {
            for (c = 1, d = N[0]; d >= 10; d /= 10) c++;
            R.e = c + f * w - 1, _(R, o ? i + R.e + 1 : i, a, D)
        }
        return R
    }
}();

function _(e, t, r, n) {
    var s, i, a, o, u, l, f, c, d, w = e.constructor;
    e: if (t != null) {
        if (c = e.d, !c) return e;
        for (s = 1, o = c[0]; o >= 10; o /= 10) s++;
        if (i = t - s, i < 0) i += v, a = t, f = c[d = 0], u = f / U(10, s - a - 1) % 10 | 0;
        else if (d = Math.ceil((i + 1) / v), o = c.length, d >= o)
            if (n) {
                for (; o++ <= d;) c.push(0);
                f = u = 0, s = 1, i %= v, a = i - v + 1
            } else break e;
        else {
            for (f = o = c[d], s = 1; o >= 10; o /= 10) s++;
            i %= v, a = i - v + s, u = a < 0 ? 0 : f / U(10, s - a - 1) % 10 | 0
        }
        if (n = n || t < 0 || c[d + 1] !== void 0 || (a < 0 ? f : f % U(10, s - a - 1)), l = r < 4 ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || n || r == 6 && (i > 0 ? a > 0 ? f / U(10, s - a) : 0 : c[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !c[0]) return c.length = 0, l ? (t -= e.e + 1, c[0] = U(10, (v - t % v) % v), e.e = -t || 0) : c[0] = e.e = 0, e;
        if (i == 0 ? (c.length = d, o = 1, d--) : (c.length = d + 1, o = U(10, v - i), c[d] = a > 0 ? (f / U(10, s - a) % U(10, a) | 0) * o : 0), l)
            for (;;)
                if (d == 0) {
                    for (i = 1, a = c[0]; a >= 10; a /= 10) i++;
                    for (a = c[0] += o, o = 1; a >= 10; a /= 10) o++;
                    i != o && (e.e++, c[0] == ne && (c[0] = 1));
                    break
                } else {
                    if (c[d] += o, c[d] != ne) break;
                    c[d--] = 0, o = 1
                } for (i = c.length; c[--i] === 0;) c.pop()
    }
    return S && (e.e > w.maxE ? (e.d = null, e.e = NaN) : e.e < w.minE && (e.e = 0, e.d = [0])), e
}

function fe(e, t, r) {
    if (!e.isFinite()) return ms(e);
    var n, s = e.e,
        i = $(e.d),
        a = i.length;
    return t ? (r && (n = r - a) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Ne(n) : a > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : s < 0 ? (i = "0." + Ne(-s - 1) + i, r && (n = r - a) > 0 && (i += Ne(n))) : s >= a ? (i += Ne(s + 1 - a), r && (n = r - s - 1) > 0 && (i = i + "." + Ne(n))) : ((n = s + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - a) > 0 && (s + 1 === a && (i += "."), i += Ne(n))), i
}

function Gt(e, t) {
    var r = e[0];
    for (t *= v; r >= 10; r /= 10) t++;
    return t
}

function Pt(e, t, r) {
    if (t > su) throw S = !0, r && (e.precision = r), Error(os);
    return _(new e(bt), t, 1, !0)
}

function le(e, t, r) {
    if (t > pr) throw Error(os);
    return _(new e(Ct), t, r, !0)
}

function cs(e) {
    var t = e.length - 1,
        r = t * v + 1;
    if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10) r--;
        for (t = e[0]; t >= 10; t /= 10) r++
    }
    return r
}

function Ne(e) {
    for (var t = ""; e--;) t += "0";
    return t
}

function ds(e, t, r, n) {
    var s, i = new e(1),
        a = Math.ceil(n / v + 4);
    for (S = !1;;) {
        if (r % 2 && (i = i.times(t), on(i.d, a) && (s = !0)), r = j(r / 2), r === 0) {
            r = i.d.length - 1, s && i.d[r] === 0 && ++i.d[r];
            break
        }
        t = t.times(t), on(t.d, a)
    }
    return S = !0, i
}

function an(e) {
    return e.d[e.d.length - 1] & 1
}

function hs(e, t, r) {
    for (var n, s, i = new e(t[0]), a = 0; ++a < t.length;) {
        if (s = new e(t[a]), !s.s) {
            i = s;
            break
        }
        n = i.cmp(s), (n === r || n === 0 && i.s === r) && (i = s)
    }
    return i
}

function gr(e, t) {
    var r, n, s, i, a, o, u, l = 0,
        f = 0,
        c = 0,
        d = e.constructor,
        w = d.rounding,
        D = d.precision;
    if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t == null ? (S = !1, u = D) : u = t, o = new d(.03125); e.e > -2;) e = e.times(o), c += 5;
    for (n = Math.log(U(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new d(1), d.precision = u;;) {
        if (i = _(i.times(e), u, 1), r = r.times(++f), o = a.plus(E(i, r, u, 1)), $(o.d).slice(0, u) === $(a.d).slice(0, u)) {
            for (s = c; s--;) a = _(a.times(a), u, 1);
            if (t == null)
                if (l < 3 && at(a.d, u - n, w, l)) d.precision = u += 10, r = i = o = new d(1), f = 0, l++;
                else return _(a, d.precision = D, w, S = !0);
            else return d.precision = D, a
        }
        a = o
    }
}

function Te(e, t) {
    var r, n, s, i, a, o, u, l, f, c, d, w = 1,
        D = 10,
        k = e,
        A = k.d,
        R = k.constructor,
        N = R.rounding,
        C = R.precision;
    if (k.s < 0 || !A || !A[0] || !k.e && A[0] == 1 && A.length == 1) return new R(A && !A[0] ? -1 / 0 : k.s != 1 ? NaN : A ? 0 : k);
    if (t == null ? (S = !1, f = C) : f = t, R.precision = f += D, r = $(A), n = r.charAt(0), Math.abs(i = k.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) k = k.times(e), r = $(k.d), n = r.charAt(0), w++;
        i = k.e, n > 1 ? (k = new R("0." + r), i++) : k = new R(n + "." + r.slice(1))
    } else return l = Pt(R, f + 2, C).times(i + ""), k = Te(new R(n + "." + r.slice(1)), f - D).plus(l), R.precision = C, t == null ? _(k, C, N, S = !0) : k;
    for (c = k, u = a = k = E(k.minus(1), k.plus(1), f, 1), d = _(k.times(k), f, 1), s = 3;;) {
        if (a = _(a.times(d), f, 1), l = u.plus(E(a, new R(s), f, 1)), $(l.d).slice(0, f) === $(u.d).slice(0, f))
            if (u = u.times(2), i !== 0 && (u = u.plus(Pt(R, f + 2, C).times(i + ""))), u = E(u, new R(w), f, 1), t == null)
                if (at(u.d, f - D, N, o)) R.precision = f += D, l = a = k = E(c.minus(1), c.plus(1), f, 1), d = _(k.times(k), f, 1), s = o = 1;
                else return _(u, R.precision = C, N, S = !0);
        else return R.precision = C, u;
        u = l, s += 2
    }
}

function ms(e) {
    return String(e.s * e.s / 0)
}

function St(e, t) {
    var r, n, s;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++);
    for (s = t.length; t.charCodeAt(s - 1) === 48; --s);
    if (t = t.slice(n, s), t) {
        if (s -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % v, r < 0 && (n += v), n < s) {
            for (n && e.d.push(+t.slice(0, n)), s -= v; n < s;) e.d.push(+t.slice(n, n += v));
            t = t.slice(n), n = v - t.length
        } else n -= s;
        for (; n--;) t += "0";
        e.d.push(+t), S && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
    } else e.e = 0, e.d = [0];
    return e
}

function au(e, t) {
    var r, n, s, i, a, o, u, l, f;
    if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), fs.test(t)) return St(e, t)
    } else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (tu.test(t)) r = 16, t = t.toLowerCase();
    else if (eu.test(t)) r = 2;
    else if (ru.test(t)) r = 8;
    else throw Error(Ce + t);
    for (i = t.search(/p/i), i > 0 ? (u = +t.slice(i + 1), t = t.substring(2, i)) : t = t.slice(2), i = t.indexOf("."), a = i >= 0, n = e.constructor, a && (t = t.replace(".", ""), o = t.length, i = o - i, s = ds(n, new n(r), i, i * 2)), l = kt(t, r, ne), f = l.length - 1, i = f; l[i] === 0; --i) l.pop();
    return i < 0 ? new n(e.s * 0) : (e.e = Gt(l, f), e.d = l, S = !1, a && (e = E(e, s, o * 4)), u && (e = e.times(Math.abs(u) < 54 ? U(2, u) : X.pow(2, u))), S = !0, e)
}

function ou(e, t) {
    var r, n = t.d.length;
    if (n < 3) return t.isZero() ? t : je(e, 2, t, t);
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / qt(5, r)), t = je(e, 2, t, t);
    for (var s, i = new e(5), a = new e(16), o = new e(20); r--;) s = t.times(t), t = t.times(i.plus(s.times(a.times(s).minus(o))));
    return t
}

function je(e, t, r, n, s) {
    var i, a, o, u, l = e.precision,
        f = Math.ceil(l / v);
    for (S = !1, u = r.times(r), o = new e(n);;) {
        if (a = E(o.times(u), new e(t++ * t++), l, 1), o = s ? n.plus(a) : n.minus(a), n = E(a.times(u), new e(t++ * t++), l, 1), a = o.plus(n), a.d[f] !== void 0) {
            for (i = f; a.d[i] === o.d[i] && i--;);
            if (i == -1) break
        }
        i = o, o = n, n = a, a = i
    }
    return S = !0, a.d.length = f + 1, a
}

function qt(e, t) {
    for (var r = e; --t;) r *= e;
    return r
}

function ps(e, t) {
    var r, n = t.s < 0,
        s = le(e, e.precision, 1),
        i = s.times(.5);
    if (t = t.abs(), t.lte(i)) return _e = n ? 4 : 1, t;
    if (r = t.divToInt(s), r.isZero()) _e = n ? 3 : 2;
    else {
        if (t = t.minus(r.times(s)), t.lte(i)) return _e = an(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        _e = an(r) ? n ? 1 : 4 : n ? 3 : 2
    }
    return t.minus(s).abs()
}

function Ur(e, t, r, n) {
    var s, i, a, o, u, l, f, c, d, w = e.constructor,
        D = r !== void 0;
    if (D ? (B(r, 1, Pe), n === void 0 ? n = w.rounding : B(n, 0, 8)) : (r = w.precision, n = w.rounding), !e.isFinite()) f = ms(e);
    else {
        for (f = fe(e), a = f.indexOf("."), D ? (s = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : s = t, a >= 0 && (f = f.replace(".", ""), d = new w(1), d.e = f.length - a, d.d = kt(fe(d), 10, s), d.e = d.d.length), c = kt(f, 10, s), i = u = c.length; c[--u] == 0;) c.pop();
        if (!c[0]) f = D ? "0p+0" : "0";
        else {
            if (a < 0 ? i-- : (e = new w(e), e.d = c, e.e = i, e = E(e, d, r, n, 0, s), c = e.d, i = e.e, l = as), a = c[r], o = s / 2, l = l || c[r + 1] !== void 0, l = n < 4 ? (a !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : a > o || a === o && (n === 4 || l || n === 6 && c[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), c.length = r, l)
                for (; ++c[--r] > s - 1;) c[r] = 0, r || (++i, c.unshift(1));
            for (u = c.length; !c[u - 1]; --u);
            for (a = 0, f = ""; a < u; a++) f += hr.charAt(c[a]);
            if (D) {
                if (u > 1)
                    if (t == 16 || t == 8) {
                        for (a = t == 16 ? 4 : 3, --u; u % a; u++) f += "0";
                        for (c = kt(f, s, t), u = c.length; !c[u - 1]; --u);
                        for (a = 1, f = "1."; a < u; a++) f += hr.charAt(c[a])
                    } else f = f.charAt(0) + "." + f.slice(1);
                f = f + (i < 0 ? "p" : "p+") + i
            } else if (i < 0) {
                for (; ++i;) f = "0" + f;
                f = "0." + f
            } else if (++i > u)
                for (i -= u; i--;) f += "0";
            else i < u && (f = f.slice(0, i) + "." + f.slice(i))
        }
        f = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + f
    }
    return e.s < 0 ? "-" + f : f
}

function on(e, t) {
    if (e.length > t) return e.length = t, !0
}

function lu(e) {
    return new this(e).abs()
}

function uu(e) {
    return new this(e).acos()
}

function fu(e) {
    return new this(e).acosh()
}

function cu(e, t) {
    return new this(e).plus(t)
}

function du(e) {
    return new this(e).asin()
}

function hu(e) {
    return new this(e).asinh()
}

function mu(e) {
    return new this(e).atan()
}

function pu(e) {
    return new this(e).atanh()
}

function gu(e, t) {
    e = new this(e), t = new this(t);
    var r, n = this.precision,
        s = this.rounding,
        i = n + 4;
    return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = le(this, i, 1).times(t.s > 0 ? .25 : .75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? le(this, n, s) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = le(this, i, 1).times(.5), r.s = e.s) : t.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(E(e, t, i, 1)), t = le(this, i, 1), this.precision = n, this.rounding = s, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(E(e, t, i, 1)), r
}

function wu(e) {
    return new this(e).cbrt()
}

function _u(e) {
    return _(e = new this(e), e.e + 1, 2)
}

function yu(e, t, r) {
    return new this(e).clamp(t, r)
}

function vu(e) {
    if (!e || typeof e != "object") throw Error($t + "Object expected");
    var t, r, n, s = e.defaults === !0,
        i = ["precision", 1, Pe, "rounding", 0, 8, "toExpNeg", -He, 0, "toExpPos", 0, He, "maxE", 0, He, "minE", -He, 0, "modulo", 0, 9];
    for (t = 0; t < i.length; t += 3)
        if (r = i[t], s && (this[r] = mr[r]), (n = e[r]) !== void 0)
            if (j(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(Ce + r + ": " + n);
    if (r = "crypto", s && (this[r] = mr[r]), (n = e[r]) !== void 0)
        if (n === !0 || n === !1 || n === 0 || n === 1)
            if (n)
                if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = !0;
                else throw Error(ls);
    else this[r] = !1;
    else throw Error(Ce + r + ": " + n);
    return this
}

function ku(e) {
    return new this(e).cos()
}

function Su(e) {
    return new this(e).cosh()
}

function gs(e) {
    var t, r, n;

    function s(i) {
        var a, o, u, l = this;
        if (!(l instanceof s)) return new s(i);
        if (l.constructor = s, ln(i)) {
            l.s = i.s, S ? !i.d || i.e > s.maxE ? (l.e = NaN, l.d = null) : i.e < s.minE ? (l.e = 0, l.d = [0]) : (l.e = i.e, l.d = i.d.slice()) : (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
            return
        }
        if (u = typeof i, u === "number") {
            if (i === 0) {
                l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
                return
            }
            if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
                for (a = 0, o = i; o >= 10; o /= 10) a++;
                S ? a > s.maxE ? (l.e = NaN, l.d = null) : a < s.minE ? (l.e = 0, l.d = [0]) : (l.e = a, l.d = [i]) : (l.e = a, l.d = [i]);
                return
            }
            if (i * 0 !== 0) {
                i || (l.s = NaN), l.e = NaN, l.d = null;
                return
            }
            return St(l, i.toString())
        }
        if (u === "string") return (o = i.charCodeAt(0)) === 45 ? (i = i.slice(1), l.s = -1) : (o === 43 && (i = i.slice(1)), l.s = 1), fs.test(i) ? St(l, i) : au(l, i);
        if (u === "bigint") return i < 0 ? (i = -i, l.s = -1) : l.s = 1, St(l, i.toString());
        throw Error(Ce + i)
    }
    if (s.prototype = h, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = vu, s.clone = gs, s.isDecimal = ln, s.abs = lu, s.acos = uu, s.acosh = fu, s.add = cu, s.asin = du, s.asinh = hu, s.atan = mu, s.atanh = pu, s.atan2 = gu, s.cbrt = wu, s.ceil = _u, s.clamp = yu, s.cos = ku, s.cosh = Su, s.div = Mu, s.exp = Du, s.floor = Nu, s.hypot = Yu, s.ln = Ou, s.log = Tu, s.log10 = Cu, s.log2 = bu, s.max = Pu, s.min = Eu, s.mod = Fu, s.mul = Ru, s.pow = Wu, s.random = Iu, s.round = xu, s.sign = Lu, s.sin = Au, s.sinh = Uu, s.sqrt = Hu, s.sub = Vu, s.sum = $u, s.tan = Gu, s.tanh = qu, s.trunc = ju, e === void 0 && (e = {}), e && e.defaults !== !0)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length;) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return s.config(e), s
}

function Mu(e, t) {
    return new this(e).div(t)
}

function Du(e) {
    return new this(e).exp()
}

function Nu(e) {
    return _(e = new this(e), e.e + 1, 3)
}

function Yu() {
    var e, t, r = new this(0);
    for (S = !1, e = 0; e < arguments.length;)
        if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
        else {
            if (t.s) return S = !0, new this(1 / 0);
            r = t
        } return S = !0, r.sqrt()
}

function ln(e) {
    return e instanceof X || e && e.toStringTag === us || !1
}

function Ou(e) {
    return new this(e).ln()
}

function Tu(e, t) {
    return new this(e).log(t)
}

function bu(e) {
    return new this(e).log(2)
}

function Cu(e) {
    return new this(e).log(10)
}

function Pu() {
    return hs(this, arguments, -1)
}

function Eu() {
    return hs(this, arguments, 1)
}

function Fu(e, t) {
    return new this(e).mod(t)
}

function Ru(e, t) {
    return new this(e).mul(t)
}

function Wu(e, t) {
    return new this(e).pow(t)
}

function Iu(e) {
    var t, r, n, s, i = 0,
        a = new this(1),
        o = [];
    if (e === void 0 ? e = this.precision : B(e, 1, Pe), n = Math.ceil(e / v), this.crypto)
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); i < n;) s = t[i], s >= 429e7 ? t[i] = crypto.getRandomValues(new Uint32Array(1))[0] : o[i++] = s % 1e7;
        else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4); i < n;) s = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) + ((t[i + 3] & 127) << 24), s >= 214e7 ? crypto.randomBytes(4).copy(t, i) : (o.push(s % 1e7), i += 4);
        i = n / 4
    } else throw Error(ls);
    else
        for (; i < n;) o[i++] = Math.random() * 1e7 | 0;
    for (n = o[--i], e %= v, n && e && (s = U(10, v - e), o[i] = (n / s | 0) * s); o[i] === 0; i--) o.pop();
    if (i < 0) r = 0, o = [0];
    else {
        for (r = -1; o[0] === 0; r -= v) o.shift();
        for (n = 1, s = o[0]; s >= 10; s /= 10) n++;
        n < v && (r -= v - n)
    }
    return a.e = r, a.d = o, a
}

function xu(e) {
    return _(e = new this(e), e.e + 1, this.rounding)
}

function Lu(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
}

function Au(e) {
    return new this(e).sin()
}

function Uu(e) {
    return new this(e).sinh()
}

function Hu(e) {
    return new this(e).sqrt()
}

function Vu(e, t) {
    return new this(e).sub(t)
}

function $u() {
    var e = 0,
        t = arguments,
        r = new this(t[e]);
    for (S = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
    return S = !0, _(r, this.precision, this.rounding)
}

function Gu(e) {
    return new this(e).tan()
}

function qu(e) {
    return new this(e).tanh()
}

function ju(e) {
    return _(e = new this(e), e.e + 1, 1)
}
h[Symbol.for("nodejs.util.inspect.custom")] = h.toString;
h[Symbol.toStringTag] = "Decimal";
var X = h.constructor = gs(mr);
bt = new X(bt);
Ct = new X(Ct);

function af(e, t) {
    return new X(e).sub(new X(t)).toNumber()
}

function of(e, t) {
    return !e || !t ? 0 : new X(e).mul(new X(t)).toNumber()
}

function un(e, t) {
    return !e || !t ? 0 : new X(e).div(new X(t)).toNumber()
}

function lf(e, t = "0.1") {
    const r = new X(e.toString()),
        n = new X(t);
    return r.mod(n).equals(0)
}

function fn(e) {
    let t = new Date(e).toISOString();
    return p(t).format("YYYY-MM-DD HH:mm:ss")
}

function uf(e) {
    return p.utc(e).local().format("YYYY-MM-DD HH:mm:ss")
}

function Zu(e) {
    return p(e).valueOf()
}

function ff(e) {
    var t = 6e4,
        r = t * 60,
        n = r * 24,
        s = p().valueOf(),
        i = s - e;
    if (i < 0) return fn(e);
    var a = i / (7 * n),
        o = i / n,
        u = i / r,
        l = i / t,
        f = i / 1e3;
    let c = "";
    return a >= 1 ? c = fn(e).substring(5, 16) : o >= 1 ? c = "" + parseInt(`${o}`) + " day ago" : u >= 1 ? c = "" + parseInt(`${u}`) + " hour ago" : l >= 1 ? c = "" + parseInt(`${l}`) + " min ago" : c = "" + parseInt(`${f}`) + " sec ago", c
}

function cf(e) {
    return e > 3600 ? `${un(e,3600)} Hour` : e > 60 ? `${un(e,60)} Min` : `${e} Sec`
}
const zu = Fs("User", {
        state: () => ({
            walletName: "",
            account: "",
            shortAcc: "",
            solBalance: 0,
            slippage: "0.01",
            showConnectWallet: !1,
            coolingTime: 0,
            userInfo: null
        }),
        getters: {},
        actions: {
            setAccount(e) {
                !e || this.account !== e ? (this.shortAcc = "", this.solBalance = 0, this.userInfo = null, localStorage.removeItem("token")) : this.shortAcc = js(e), this.account = e
            },
            setSolBalance(e) {
                this.solBalance = e
            },
            setWalletName(e) {
                this.walletName = e
            },
            setSlippage(e) {
                this.slippage = e
            },
            setShowConnectWallet(e) {
                this.showConnectWallet = e
            },
            setCoolingTime() {
                this.coolingTime = Zu() + 6e4
            },
            setUserInfo(e) {
                this.userInfo = e
            },
            setReferral(e) {
                this.userInfo && (this.userInfo.referral = e)
            },
            setRefCode(e) {
                this.userInfo && (this.userInfo.refCode = e)
            }
        },
        persist: {
            key: "user",
            storage: localStorage
        }
    }),
    Bu = () => {
        window.addEventListener(mn.AccountChanged, e => {
            const t = e.detail;
            Ju().setAccount(t)
        })
    };
Bu();

function Ju() {
    return zu(Rs)
}
export {
    Xr as E, Js as F, Qs as I, Ku as a, un as b, js as c, af as d, of as e, sf as f, rf as g, ef as h, cf as i, Xs as j, nf as k, lf as l, ff as m, uf as n, tf as o, fn as p, Xu as q, Ws as r, Zu as t, Ju as u
};
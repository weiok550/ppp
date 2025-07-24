const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["static/js/user-rn3_sb6w.js", "static/js/index-DejQ-iz-.js", "static/css/index-CpdhnRrV.css", "static/js/index-Brp1LNR4.js", "static/css/index-DENVy1Kb.css", "static/js/isMobile-DPHpSBeS.js"]))) => i.map(i => d[i]);
var _p = Object.defineProperty;
var Ep = (r, e, t) => e in r ? _p(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var Ae = (r, e, t) => Ep(r, typeof e != "symbol" ? e + "" : e, t);
import {
    h as Qu,
    G as vp,
    bP as Rp,
    aQ as Ap,
    d as kp,
    bp as Sp,
    aR as ti,
    m as Ip,
    H as xp,
    l as Tp,
    ae as Op,
    a7 as Np,
    bQ as eo,
    bn as Cp,
    aB as el,
    V as tl,
    bR as ni,
    bS as wc,
    bm as nl,
    z as Bp,
    bT as Mp,
    bU as wo,
    bg as $r,
    bf as jt,
    bV as bc,
    bW as Pp,
    bX as Lp,
    bY as Up
} from "./index-DejQ-iz-.js";
import {
    a as Dp,
    u as _c
} from "./index-Brp1LNR4.js";
import {
    c as Fp
} from "./isMobile-DPHpSBeS.js";

function Hp(r, e) {
    let t;
    const n = Qu(!1),
        i = vp({
            ...r,
            originalPosition: "",
            originalOverflow: "",
            visible: !1
        });

    function o(m) {
        i.text = m
    }

    function s() {
        const m = i.parent,
            v = S.ns;
        if (!m.vLoadingAddClassList) {
            let T = m.getAttribute("loading-number");
            T = Number.parseInt(T) - 1, T ? m.setAttribute("loading-number", T.toString()) : (eo(m, v.bm("parent", "relative")), m.removeAttribute("loading-number")), eo(m, v.bm("parent", "hidden"))
        }
        a(), b.unmount()
    }

    function a() {
        var m, v;
        (v = (m = S.$el) == null ? void 0 : m.parentNode) == null || v.removeChild(S.$el)
    }

    function u() {
        var m;
        r.beforeClose && !r.beforeClose() || (n.value = !0, clearTimeout(t), t = setTimeout(d, 400), i.visible = !1, (m = r.closed) == null || m.call(r))
    }

    function d() {
        if (!n.value) return;
        const m = i.parent;
        n.value = !1, m.vLoadingAddClassList = void 0, s()
    }
    const l = kp({
            name: "ElLoading",
            setup(m, {
                expose: v
            }) {
                const {
                    ns: T,
                    zIndex: R
                } = Sp("loading");
                return v({
                    ns: T,
                    zIndex: R
                }), () => {
                    const N = i.spinner || i.svg,
                        $ = ti("svg", {
                            class: "circular",
                            viewBox: i.svgViewBox ? i.svgViewBox : "0 0 50 50",
                            ...N ? {
                                innerHTML: N
                            } : {}
                        }, [ti("circle", {
                            class: "path",
                            cx: "25",
                            cy: "25",
                            r: "20",
                            fill: "none"
                        })]),
                        P = i.text ? ti("p", {
                            class: T.b("text")
                        }, [i.text]) : void 0;
                    return ti(Np, {
                        name: T.b("fade"),
                        onAfterLeave: d
                    }, {
                        default: Ip(() => [xp(Tp("div", {
                            style: {
                                backgroundColor: i.background || ""
                            },
                            class: [T.b("mask"), i.customClass, i.fullscreen ? "is-fullscreen" : ""]
                        }, [ti("div", {
                            class: T.b("spinner")
                        }, [$, P])]), [
                            [Op, i.visible]
                        ])])
                    })
                }
            }
        }),
        b = Rp(l);
    Object.assign(b._context, e ?? {});
    const S = b.mount(document.createElement("div"));
    return {
        ...Ap(i),
        setText: o,
        removeElLoadingChild: a,
        close: u,
        handleAfterLeave: d,
        vm: S,
        get $el() {
            return S.$el
        }
    }
}
let Mi;
const ha = function (r = {}) {
        if (!Cp) return;
        const e = zp(r);
        if (e.fullscreen && Mi) return Mi;
        const t = Hp({
            ...e,
            closed: () => {
                var i;
                (i = e.closed) == null || i.call(e), e.fullscreen && (Mi = void 0)
            }
        }, ha._context);
        Kp(e, e.parent, t), Ec(e, e.parent, t), e.parent.vLoadingAddClassList = () => Ec(e, e.parent, t);
        let n = e.parent.getAttribute("loading-number");
        return n ? n = `${Number.parseInt(n)+1}` : n = "1", e.parent.setAttribute("loading-number", n), e.parent.appendChild(t.$el), el(() => t.visible.value = e.visible), e.fullscreen && (Mi = t), t
    },
    zp = r => {
        var e, t, n, i;
        let o;
        return tl(r.target) ? o = (e = document.querySelector(r.target)) != null ? e : document.body : o = r.target || document.body, {
            parent: o === document.body || r.body ? document.body : o,
            background: r.background || "",
            svg: r.svg || "",
            svgViewBox: r.svgViewBox || "",
            spinner: r.spinner || !1,
            text: r.text || "",
            fullscreen: o === document.body && ((t = r.fullscreen) != null ? t : !0),
            lock: (n = r.lock) != null ? n : !1,
            customClass: r.customClass || "",
            visible: (i = r.visible) != null ? i : !0,
            beforeClose: r.beforeClose,
            closed: r.closed,
            target: o
        }
    },
    Kp = async (r, e, t) => {
        const {
            nextZIndex: n
        } = t.vm.zIndex || t.vm._.exposed.zIndex, i = {};
        if (r.fullscreen) t.originalPosition.value = ni(document.body, "position"), t.originalOverflow.value = ni(document.body, "overflow"), i.zIndex = n();
        else if (r.parent === document.body) {
            t.originalPosition.value = ni(document.body, "position"), await el();
            for (const o of ["top", "left"]) {
                const s = o === "top" ? "scrollTop" : "scrollLeft";
                i[o] = `${r.target.getBoundingClientRect()[o]+document.body[s]+document.documentElement[s]-Number.parseInt(ni(document.body,`margin-${o}`),10)}px`
            }
            for (const o of ["height", "width"]) i[o] = `${r.target.getBoundingClientRect()[o]}px`
        } else t.originalPosition.value = ni(e, "position");
        for (const [o, s] of Object.entries(i)) t.$el.style[o] = s
    }, Ec = (r, e, t) => {
        const n = t.vm.ns || t.vm._.exposed.ns;
        ["absolute", "fixed", "sticky"].includes(t.originalPosition.value) ? eo(e, n.bm("parent", "relative")) : wc(e, n.bm("parent", "relative")), r.fullscreen && r.lock ? wc(e, n.bm("parent", "hidden")) : eo(e, n.bm("parent", "hidden"))
    };
ha._context = null;
const si = Symbol("ElLoading"),
    tr = r => `element-loading-${Mp(r)}`,
    vc = (r, e) => {
        var t, n, i, o;
        const s = e.instance,
            a = m => nl(e.value) ? e.value[m] : void 0,
            u = m => {
                const v = tl(m) && (s == null ? void 0 : s[m]) || m;
                return Qu(v)
            },
            d = m => u(a(m) || r.getAttribute(tr(m))),
            l = (t = a("fullscreen")) != null ? t : e.modifiers.fullscreen,
            b = {
                text: d("text"),
                svg: d("svg"),
                svgViewBox: d("svgViewBox"),
                spinner: d("spinner"),
                background: d("background"),
                customClass: d("customClass"),
                fullscreen: l,
                target: (n = a("target")) != null ? n : l ? void 0 : r,
                body: (i = a("body")) != null ? i : e.modifiers.body,
                lock: (o = a("lock")) != null ? o : e.modifiers.lock
            },
            S = ha(b);
        S._context = rl._context, r[si] = {
            options: b,
            instance: S
        }
    },
    $p = (r, e) => {
        for (const t of Object.keys(r)) Bp(r[t]) && (r[t].value = e[t])
    },
    rl = {
        mounted(r, e) {
            e.value && vc(r, e)
        },
        updated(r, e) {
            const t = r[si];
            if (!e.value) {
                t == null || t.instance.close(), r[si] = null;
                return
            }
            t ? $p(t.options, nl(e.value) ? e.value : {
                text: r.getAttribute(tr("text")),
                svg: r.getAttribute(tr("svg")),
                svgViewBox: r.getAttribute(tr("svgViewBox")),
                spinner: r.getAttribute(tr("spinner")),
                background: r.getAttribute(tr("background")),
                customClass: r.getAttribute(tr("customClass"))
            }) : vc(r, e)
        },
        unmounted(r) {
            var e;
            (e = r[si]) == null || e.instance.close(), r[si] = null
        }
    };
rl._context = null;
var Rt = {},
    bo = {};
bo.byteLength = Vp;
bo.toByteArray = jp;
bo.fromByteArray = Xp;
var hn = [],
    Xt = [],
    Wp = typeof Uint8Array < "u" ? Uint8Array : Array,
    fs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var _r = 0, qp = fs.length; _r < qp; ++_r) hn[_r] = fs[_r], Xt[fs.charCodeAt(_r)] = _r;
Xt[45] = 62;
Xt[95] = 63;

function il(r) {
    var e = r.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var t = r.indexOf("=");
    t === -1 && (t = e);
    var n = t === e ? 0 : 4 - t % 4;
    return [t, n]
}

function Vp(r) {
    var e = il(r),
        t = e[0],
        n = e[1];
    return (t + n) * 3 / 4 - n
}

function Gp(r, e, t) {
    return (e + t) * 3 / 4 - t
}

function jp(r) {
    var e, t = il(r),
        n = t[0],
        i = t[1],
        o = new Wp(Gp(r, n, i)),
        s = 0,
        a = i > 0 ? n - 4 : n,
        u;
    for (u = 0; u < a; u += 4) e = Xt[r.charCodeAt(u)] << 18 | Xt[r.charCodeAt(u + 1)] << 12 | Xt[r.charCodeAt(u + 2)] << 6 | Xt[r.charCodeAt(u + 3)], o[s++] = e >> 16 & 255, o[s++] = e >> 8 & 255, o[s++] = e & 255;
    return i === 2 && (e = Xt[r.charCodeAt(u)] << 2 | Xt[r.charCodeAt(u + 1)] >> 4, o[s++] = e & 255), i === 1 && (e = Xt[r.charCodeAt(u)] << 10 | Xt[r.charCodeAt(u + 1)] << 4 | Xt[r.charCodeAt(u + 2)] >> 2, o[s++] = e >> 8 & 255, o[s++] = e & 255), o
}

function Zp(r) {
    return hn[r >> 18 & 63] + hn[r >> 12 & 63] + hn[r >> 6 & 63] + hn[r & 63]
}

function Yp(r, e, t) {
    for (var n, i = [], o = e; o < t; o += 3) n = (r[o] << 16 & 16711680) + (r[o + 1] << 8 & 65280) + (r[o + 2] & 255), i.push(Zp(n));
    return i.join("")
}

function Xp(r) {
    for (var e, t = r.length, n = t % 3, i = [], o = 16383, s = 0, a = t - n; s < a; s += o) i.push(Yp(r, s, s + o > a ? a : s + o));
    return n === 1 ? (e = r[t - 1], i.push(hn[e >> 2] + hn[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(hn[e >> 10] + hn[e >> 4 & 63] + hn[e << 2 & 63] + "=")), i.join("")
}
var pa = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
pa.read = function (r, e, t, n, i) {
    var o, s, a = i * 8 - n - 1,
        u = (1 << a) - 1,
        d = u >> 1,
        l = -7,
        b = t ? i - 1 : 0,
        S = t ? -1 : 1,
        m = r[e + b];
    for (b += S, o = m & (1 << -l) - 1, m >>= -l, l += a; l > 0; o = o * 256 + r[e + b], b += S, l -= 8);
    for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = s * 256 + r[e + b], b += S, l -= 8);
    if (o === 0) o = 1 - d;
    else {
        if (o === u) return s ? NaN : (m ? -1 : 1) * (1 / 0);
        s = s + Math.pow(2, n), o = o - d
    }
    return (m ? -1 : 1) * s * Math.pow(2, o - n)
};
pa.write = function (r, e, t, n, i, o) {
    var s, a, u, d = o * 8 - i - 1,
        l = (1 << d) - 1,
        b = l >> 1,
        S = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        m = n ? 0 : o - 1,
        v = n ? 1 : -1,
        T = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + b >= 1 ? e += S / u : e += S * Math.pow(2, 1 - b), e * u >= 2 && (s++, u /= 2), s + b >= l ? (a = 0, s = l) : s + b >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s = s + b) : (a = e * Math.pow(2, b - 1) * Math.pow(2, i), s = 0)); i >= 8; r[t + m] = a & 255, m += v, a /= 256, i -= 8);
    for (s = s << i | a, d += i; d > 0; r[t + m] = s & 255, m += v, s /= 256, d -= 8);
    r[t + m - v] |= T * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (r) {
    const e = bo,
        t = pa,
        n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    r.Buffer = l, r.SlowBuffer = U, r.INSPECT_MAX_BYTES = 50;
    const i = 2147483647;
    r.kMaxLength = i;
    const {
        Uint8Array: o,
        ArrayBuffer: s,
        SharedArrayBuffer: a
    } = globalThis;
    l.TYPED_ARRAY_SUPPORT = u(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function u() {
        try {
            const _ = new o(1),
                h = {
                    foo: function () {
                        return 42
                    }
                };
            return Object.setPrototypeOf(h, o.prototype), Object.setPrototypeOf(_, h), _.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(l.prototype, "parent", {
        enumerable: !0,
        get: function () {
            if (l.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(l.prototype, "offset", {
        enumerable: !0,
        get: function () {
            if (l.isBuffer(this)) return this.byteOffset
        }
    });

    function d(_) {
        if (_ > i) throw new RangeError('The value "' + _ + '" is invalid for option "size"');
        const h = new o(_);
        return Object.setPrototypeOf(h, l.prototype), h
    }

    function l(_, h, p) {
        if (typeof _ == "number") {
            if (typeof h == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return v(_)
        }
        return b(_, h, p)
    }
    l.poolSize = 8192;

    function b(_, h, p) {
        if (typeof _ == "string") return T(_, h);
        if (s.isView(_)) return N(_);
        if (_ == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _);
        if (Wt(_, s) || _ && Wt(_.buffer, s) || typeof a < "u" && (Wt(_, a) || _ && Wt(_.buffer, a))) return $(_, h, p);
        if (typeof _ == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const I = _.valueOf && _.valueOf();
        if (I != null && I !== _) return l.from(I, h, p);
        const B = P(_);
        if (B) return B;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof _[Symbol.toPrimitive] == "function") return l.from(_[Symbol.toPrimitive]("string"), h, p);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _)
    }
    l.from = function (_, h, p) {
        return b(_, h, p)
    }, Object.setPrototypeOf(l.prototype, o.prototype), Object.setPrototypeOf(l, o);

    function S(_) {
        if (typeof _ != "number") throw new TypeError('"size" argument must be of type number');
        if (_ < 0) throw new RangeError('The value "' + _ + '" is invalid for option "size"')
    }

    function m(_, h, p) {
        return S(_), _ <= 0 ? d(_) : h !== void 0 ? typeof p == "string" ? d(_).fill(h, p) : d(_).fill(h) : d(_)
    }
    l.alloc = function (_, h, p) {
        return m(_, h, p)
    };

    function v(_) {
        return S(_), d(_ < 0 ? 0 : K(_) | 0)
    }
    l.allocUnsafe = function (_) {
        return v(_)
    }, l.allocUnsafeSlow = function (_) {
        return v(_)
    };

    function T(_, h) {
        if ((typeof h != "string" || h === "") && (h = "utf8"), !l.isEncoding(h)) throw new TypeError("Unknown encoding: " + h);
        const p = Y(_, h) | 0;
        let I = d(p);
        const B = I.write(_, h);
        return B !== p && (I = I.slice(0, B)), I
    }

    function R(_) {
        const h = _.length < 0 ? 0 : K(_.length) | 0,
            p = d(h);
        for (let I = 0; I < h; I += 1) p[I] = _[I] & 255;
        return p
    }

    function N(_) {
        if (Wt(_, o)) {
            const h = new o(_);
            return $(h.buffer, h.byteOffset, h.byteLength)
        }
        return R(_)
    }

    function $(_, h, p) {
        if (h < 0 || _.byteLength < h) throw new RangeError('"offset" is outside of buffer bounds');
        if (_.byteLength < h + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let I;
        return h === void 0 && p === void 0 ? I = new o(_) : p === void 0 ? I = new o(_, h) : I = new o(_, h, p), Object.setPrototypeOf(I, l.prototype), I
    }

    function P(_) {
        if (l.isBuffer(_)) {
            const h = K(_.length) | 0,
                p = d(h);
            return p.length === 0 || _.copy(p, 0, 0, h), p
        }
        if (_.length !== void 0) return typeof _.length != "number" || We(_.length) ? d(0) : R(_);
        if (_.type === "Buffer" && Array.isArray(_.data)) return R(_.data)
    }

    function K(_) {
        if (_ >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return _ | 0
    }

    function U(_) {
        return +_ != _ && (_ = 0), l.alloc(+_)
    }
    l.isBuffer = function (h) {
        return h != null && h._isBuffer === !0 && h !== l.prototype
    }, l.compare = function (h, p) {
        if (Wt(h, o) && (h = l.from(h, h.offset, h.byteLength)), Wt(p, o) && (p = l.from(p, p.offset, p.byteLength)), !l.isBuffer(h) || !l.isBuffer(p)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (h === p) return 0;
        let I = h.length,
            B = p.length;
        for (let F = 0, V = Math.min(I, B); F < V; ++F)
            if (h[F] !== p[F]) {
                I = h[F], B = p[F];
                break
            } return I < B ? -1 : B < I ? 1 : 0
    }, l.isEncoding = function (h) {
        switch (String(h).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, l.concat = function (h, p) {
        if (!Array.isArray(h)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (h.length === 0) return l.alloc(0);
        let I;
        if (p === void 0)
            for (p = 0, I = 0; I < h.length; ++I) p += h[I].length;
        const B = l.allocUnsafe(p);
        let F = 0;
        for (I = 0; I < h.length; ++I) {
            let V = h[I];
            if (Wt(V, o)) F + V.length > B.length ? (l.isBuffer(V) || (V = l.from(V)), V.copy(B, F)) : o.prototype.set.call(B, V, F);
            else if (l.isBuffer(V)) V.copy(B, F);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            F += V.length
        }
        return B
    };

    function Y(_, h) {
        if (l.isBuffer(_)) return _.length;
        if (s.isView(_) || Wt(_, s)) return _.byteLength;
        if (typeof _ != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof _);
        const p = _.length,
            I = arguments.length > 2 && arguments[2] === !0;
        if (!I && p === 0) return 0;
        let B = !1;
        for (;;) switch (h) {
            case "ascii":
            case "latin1":
            case "binary":
                return p;
            case "utf8":
            case "utf-8":
                return $e(_).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return p * 2;
            case "hex":
                return p >>> 1;
            case "base64":
                return Ge(_).length;
            default:
                if (B) return I ? -1 : $e(_).length;
                h = ("" + h).toLowerCase(), B = !0
        }
    }
    l.byteLength = Y;

    function G(_, h, p) {
        let I = !1;
        if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, h >>>= 0, p <= h)) return "";
        for (_ || (_ = "utf8");;) switch (_) {
            case "hex":
                return y(this, h, p);
            case "utf8":
            case "utf-8":
                return E(this, h, p);
            case "ascii":
                return C(this, h, p);
            case "latin1":
            case "binary":
                return A(this, h, p);
            case "base64":
                return g(this, h, p);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return x(this, h, p);
            default:
                if (I) throw new TypeError("Unknown encoding: " + _);
                _ = (_ + "").toLowerCase(), I = !0
        }
    }
    l.prototype._isBuffer = !0;

    function Z(_, h, p) {
        const I = _[h];
        _[h] = _[p], _[p] = I
    }
    l.prototype.swap16 = function () {
        const h = this.length;
        if (h % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let p = 0; p < h; p += 2) Z(this, p, p + 1);
        return this
    }, l.prototype.swap32 = function () {
        const h = this.length;
        if (h % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let p = 0; p < h; p += 4) Z(this, p, p + 3), Z(this, p + 1, p + 2);
        return this
    }, l.prototype.swap64 = function () {
        const h = this.length;
        if (h % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let p = 0; p < h; p += 8) Z(this, p, p + 7), Z(this, p + 1, p + 6), Z(this, p + 2, p + 5), Z(this, p + 3, p + 4);
        return this
    }, l.prototype.toString = function () {
        const h = this.length;
        return h === 0 ? "" : arguments.length === 0 ? E(this, 0, h) : G.apply(this, arguments)
    }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function (h) {
        if (!l.isBuffer(h)) throw new TypeError("Argument must be a Buffer");
        return this === h ? !0 : l.compare(this, h) === 0
    }, l.prototype.inspect = function () {
        let h = "";
        const p = r.INSPECT_MAX_BYTES;
        return h = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (h += " ... "), "<Buffer " + h + ">"
    }, n && (l.prototype[n] = l.prototype.inspect), l.prototype.compare = function (h, p, I, B, F) {
        if (Wt(h, o) && (h = l.from(h, h.offset, h.byteLength)), !l.isBuffer(h)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof h);
        if (p === void 0 && (p = 0), I === void 0 && (I = h ? h.length : 0), B === void 0 && (B = 0), F === void 0 && (F = this.length), p < 0 || I > h.length || B < 0 || F > this.length) throw new RangeError("out of range index");
        if (B >= F && p >= I) return 0;
        if (B >= F) return -1;
        if (p >= I) return 1;
        if (p >>>= 0, I >>>= 0, B >>>= 0, F >>>= 0, this === h) return 0;
        let V = F - B,
            ge = I - p;
        const ye = Math.min(V, ge),
            pe = this.slice(B, F),
            ze = h.slice(p, I);
        for (let fe = 0; fe < ye; ++fe)
            if (pe[fe] !== ze[fe]) {
                V = pe[fe], ge = ze[fe];
                break
            } return V < ge ? -1 : ge < V ? 1 : 0
    };

    function L(_, h, p, I, B) {
        if (_.length === 0) return -1;
        if (typeof p == "string" ? (I = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, We(p) && (p = B ? 0 : _.length - 1), p < 0 && (p = _.length + p), p >= _.length) {
            if (B) return -1;
            p = _.length - 1
        } else if (p < 0)
            if (B) p = 0;
            else return -1;
        if (typeof h == "string" && (h = l.from(h, I)), l.isBuffer(h)) return h.length === 0 ? -1 : q(_, h, p, I, B);
        if (typeof h == "number") return h = h & 255, typeof o.prototype.indexOf == "function" ? B ? o.prototype.indexOf.call(_, h, p) : o.prototype.lastIndexOf.call(_, h, p) : q(_, [h], p, I, B);
        throw new TypeError("val must be string, number or Buffer")
    }

    function q(_, h, p, I, B) {
        let F = 1,
            V = _.length,
            ge = h.length;
        if (I !== void 0 && (I = String(I).toLowerCase(), I === "ucs2" || I === "ucs-2" || I === "utf16le" || I === "utf-16le")) {
            if (_.length < 2 || h.length < 2) return -1;
            F = 2, V /= 2, ge /= 2, p /= 2
        }

        function ye(ze, fe) {
            return F === 1 ? ze[fe] : ze.readUInt16BE(fe * F)
        }
        let pe;
        if (B) {
            let ze = -1;
            for (pe = p; pe < V; pe++)
                if (ye(_, pe) === ye(h, ze === -1 ? 0 : pe - ze)) {
                    if (ze === -1 && (ze = pe), pe - ze + 1 === ge) return ze * F
                } else ze !== -1 && (pe -= pe - ze), ze = -1
        } else
            for (p + ge > V && (p = V - ge), pe = p; pe >= 0; pe--) {
                let ze = !0;
                for (let fe = 0; fe < ge; fe++)
                    if (ye(_, pe + fe) !== ye(h, fe)) {
                        ze = !1;
                        break
                    } if (ze) return pe
            }
        return -1
    }
    l.prototype.includes = function (h, p, I) {
        return this.indexOf(h, p, I) !== -1
    }, l.prototype.indexOf = function (h, p, I) {
        return L(this, h, p, I, !0)
    }, l.prototype.lastIndexOf = function (h, p, I) {
        return L(this, h, p, I, !1)
    };

    function M(_, h, p, I) {
        p = Number(p) || 0;
        const B = _.length - p;
        I ? (I = Number(I), I > B && (I = B)) : I = B;
        const F = h.length;
        I > F / 2 && (I = F / 2);
        let V;
        for (V = 0; V < I; ++V) {
            const ge = parseInt(h.substr(V * 2, 2), 16);
            if (We(ge)) return V;
            _[p + V] = ge
        }
        return V
    }

    function D(_, h, p, I) {
        return He($e(h, _.length - p), _, p, I)
    }

    function w(_, h, p, I) {
        return He(Je(h), _, p, I)
    }

    function c(_, h, p, I) {
        return He(Ge(h), _, p, I)
    }

    function f(_, h, p, I) {
        return He(Bi(h, _.length - p), _, p, I)
    }
    l.prototype.write = function (h, p, I, B) {
        if (p === void 0) B = "utf8", I = this.length, p = 0;
        else if (I === void 0 && typeof p == "string") B = p, I = this.length, p = 0;
        else if (isFinite(p)) p = p >>> 0, isFinite(I) ? (I = I >>> 0, B === void 0 && (B = "utf8")) : (B = I, I = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const F = this.length - p;
        if ((I === void 0 || I > F) && (I = F), h.length > 0 && (I < 0 || p < 0) || p > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        B || (B = "utf8");
        let V = !1;
        for (;;) switch (B) {
            case "hex":
                return M(this, h, p, I);
            case "utf8":
            case "utf-8":
                return D(this, h, p, I);
            case "ascii":
            case "latin1":
            case "binary":
                return w(this, h, p, I);
            case "base64":
                return c(this, h, p, I);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return f(this, h, p, I);
            default:
                if (V) throw new TypeError("Unknown encoding: " + B);
                B = ("" + B).toLowerCase(), V = !0
        }
    }, l.prototype.toJSON = function () {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function g(_, h, p) {
        return h === 0 && p === _.length ? e.fromByteArray(_) : e.fromByteArray(_.slice(h, p))
    }

    function E(_, h, p) {
        p = Math.min(_.length, p);
        const I = [];
        let B = h;
        for (; B < p;) {
            const F = _[B];
            let V = null,
                ge = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
            if (B + ge <= p) {
                let ye, pe, ze, fe;
                switch (ge) {
                    case 1:
                        F < 128 && (V = F);
                        break;
                    case 2:
                        ye = _[B + 1], (ye & 192) === 128 && (fe = (F & 31) << 6 | ye & 63, fe > 127 && (V = fe));
                        break;
                    case 3:
                        ye = _[B + 1], pe = _[B + 2], (ye & 192) === 128 && (pe & 192) === 128 && (fe = (F & 15) << 12 | (ye & 63) << 6 | pe & 63, fe > 2047 && (fe < 55296 || fe > 57343) && (V = fe));
                        break;
                    case 4:
                        ye = _[B + 1], pe = _[B + 2], ze = _[B + 3], (ye & 192) === 128 && (pe & 192) === 128 && (ze & 192) === 128 && (fe = (F & 15) << 18 | (ye & 63) << 12 | (pe & 63) << 6 | ze & 63, fe > 65535 && fe < 1114112 && (V = fe))
                }
            }
            V === null ? (V = 65533, ge = 1) : V > 65535 && (V -= 65536, I.push(V >>> 10 & 1023 | 55296), V = 56320 | V & 1023), I.push(V), B += ge
        }
        return O(I)
    }
    const k = 4096;

    function O(_) {
        const h = _.length;
        if (h <= k) return String.fromCharCode.apply(String, _);
        let p = "",
            I = 0;
        for (; I < h;) p += String.fromCharCode.apply(String, _.slice(I, I += k));
        return p
    }

    function C(_, h, p) {
        let I = "";
        p = Math.min(_.length, p);
        for (let B = h; B < p; ++B) I += String.fromCharCode(_[B] & 127);
        return I
    }

    function A(_, h, p) {
        let I = "";
        p = Math.min(_.length, p);
        for (let B = h; B < p; ++B) I += String.fromCharCode(_[B]);
        return I
    }

    function y(_, h, p) {
        const I = _.length;
        (!h || h < 0) && (h = 0), (!p || p < 0 || p > I) && (p = I);
        let B = "";
        for (let F = h; F < p; ++F) B += Qe[_[F]];
        return B
    }

    function x(_, h, p) {
        const I = _.slice(h, p);
        let B = "";
        for (let F = 0; F < I.length - 1; F += 2) B += String.fromCharCode(I[F] + I[F + 1] * 256);
        return B
    }
    l.prototype.slice = function (h, p) {
        const I = this.length;
        h = ~~h, p = p === void 0 ? I : ~~p, h < 0 ? (h += I, h < 0 && (h = 0)) : h > I && (h = I), p < 0 ? (p += I, p < 0 && (p = 0)) : p > I && (p = I), p < h && (p = h);
        const B = this.subarray(h, p);
        return Object.setPrototypeOf(B, l.prototype), B
    };

    function ee(_, h, p) {
        if (_ % 1 !== 0 || _ < 0) throw new RangeError("offset is not uint");
        if (_ + h > p) throw new RangeError("Trying to access beyond buffer length")
    }
    l.prototype.readUintLE = l.prototype.readUIntLE = function (h, p, I) {
        h = h >>> 0, p = p >>> 0, I || ee(h, p, this.length);
        let B = this[h],
            F = 1,
            V = 0;
        for (; ++V < p && (F *= 256);) B += this[h + V] * F;
        return B
    }, l.prototype.readUintBE = l.prototype.readUIntBE = function (h, p, I) {
        h = h >>> 0, p = p >>> 0, I || ee(h, p, this.length);
        let B = this[h + --p],
            F = 1;
        for (; p > 0 && (F *= 256);) B += this[h + --p] * F;
        return B
    }, l.prototype.readUint8 = l.prototype.readUInt8 = function (h, p) {
        return h = h >>> 0, p || ee(h, 1, this.length), this[h]
    }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function (h, p) {
        return h = h >>> 0, p || ee(h, 2, this.length), this[h] | this[h + 1] << 8
    }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function (h, p) {
        return h = h >>> 0, p || ee(h, 2, this.length), this[h] << 8 | this[h + 1]
    }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function (h, p) {
        return h = h >>> 0, p || ee(h, 4, this.length), (this[h] | this[h + 1] << 8 | this[h + 2] << 16) + this[h + 3] * 16777216
    }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function (h, p) {
        return h = h >>> 0, p || ee(h, 4, this.length), this[h] * 16777216 + (this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3])
    }, l.prototype.readBigUInt64LE = on(function (h) {
        h = h >>> 0, An(h, "offset");
        const p = this[h],
            I = this[h + 7];
        (p === void 0 || I === void 0) && Le(h, this.length - 8);
        const B = p + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24,
            F = this[++h] + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + I * 2 ** 24;
        return BigInt(B) + (BigInt(F) << BigInt(32))
    }), l.prototype.readBigUInt64BE = on(function (h) {
        h = h >>> 0, An(h, "offset");
        const p = this[h],
            I = this[h + 7];
        (p === void 0 || I === void 0) && Le(h, this.length - 8);
        const B = p * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h],
            F = this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + I;
        return (BigInt(B) << BigInt(32)) + BigInt(F)
    }), l.prototype.readIntLE = function (h, p, I) {
        h = h >>> 0, p = p >>> 0, I || ee(h, p, this.length);
        let B = this[h],
            F = 1,
            V = 0;
        for (; ++V < p && (F *= 256);) B += this[h + V] * F;
        return F *= 128, B >= F && (B -= Math.pow(2, 8 * p)), B
    }, l.prototype.readIntBE = function (h, p, I) {
        h = h >>> 0, p = p >>> 0, I || ee(h, p, this.length);
        let B = p,
            F = 1,
            V = this[h + --B];
        for (; B > 0 && (F *= 256);) V += this[h + --B] * F;
        return F *= 128, V >= F && (V -= Math.pow(2, 8 * p)), V
    }, l.prototype.readInt8 = function (h, p) {
        return h = h >>> 0, p || ee(h, 1, this.length), this[h] & 128 ? (255 - this[h] + 1) * -1 : this[h]
    }, l.prototype.readInt16LE = function (h, p) {
        h = h >>> 0, p || ee(h, 2, this.length);
        const I = this[h] | this[h + 1] << 8;
        return I & 32768 ? I | 4294901760 : I
    }, l.prototype.readInt16BE = function (h, p) {
        h = h >>> 0, p || ee(h, 2, this.length);
        const I = this[h + 1] | this[h] << 8;
        return I & 32768 ? I | 4294901760 : I
    }, l.prototype.readInt32LE = function (h, p) {
        return h = h >>> 0, p || ee(h, 4, this.length), this[h] | this[h + 1] << 8 | this[h + 2] << 16 | this[h + 3] << 24
    }, l.prototype.readInt32BE = function (h, p) {
        return h = h >>> 0, p || ee(h, 4, this.length), this[h] << 24 | this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3]
    }, l.prototype.readBigInt64LE = on(function (h) {
        h = h >>> 0, An(h, "offset");
        const p = this[h],
            I = this[h + 7];
        (p === void 0 || I === void 0) && Le(h, this.length - 8);
        const B = this[h + 4] + this[h + 5] * 2 ** 8 + this[h + 6] * 2 ** 16 + (I << 24);
        return (BigInt(B) << BigInt(32)) + BigInt(p + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24)
    }), l.prototype.readBigInt64BE = on(function (h) {
        h = h >>> 0, An(h, "offset");
        const p = this[h],
            I = this[h + 7];
        (p === void 0 || I === void 0) && Le(h, this.length - 8);
        const B = (p << 24) + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h];
        return (BigInt(B) << BigInt(32)) + BigInt(this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + I)
    }), l.prototype.readFloatLE = function (h, p) {
        return h = h >>> 0, p || ee(h, 4, this.length), t.read(this, h, !0, 23, 4)
    }, l.prototype.readFloatBE = function (h, p) {
        return h = h >>> 0, p || ee(h, 4, this.length), t.read(this, h, !1, 23, 4)
    }, l.prototype.readDoubleLE = function (h, p) {
        return h = h >>> 0, p || ee(h, 8, this.length), t.read(this, h, !0, 52, 8)
    }, l.prototype.readDoubleBE = function (h, p) {
        return h = h >>> 0, p || ee(h, 8, this.length), t.read(this, h, !1, 52, 8)
    };

    function J(_, h, p, I, B, F) {
        if (!l.isBuffer(_)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (h > B || h < F) throw new RangeError('"value" argument is out of bounds');
        if (p + I > _.length) throw new RangeError("Index out of range")
    }
    l.prototype.writeUintLE = l.prototype.writeUIntLE = function (h, p, I, B) {
        if (h = +h, p = p >>> 0, I = I >>> 0, !B) {
            const ge = Math.pow(2, 8 * I) - 1;
            J(this, h, p, I, ge, 0)
        }
        let F = 1,
            V = 0;
        for (this[p] = h & 255; ++V < I && (F *= 256);) this[p + V] = h / F & 255;
        return p + I
    }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function (h, p, I, B) {
        if (h = +h, p = p >>> 0, I = I >>> 0, !B) {
            const ge = Math.pow(2, 8 * I) - 1;
            J(this, h, p, I, ge, 0)
        }
        let F = I - 1,
            V = 1;
        for (this[p + F] = h & 255; --F >= 0 && (V *= 256);) this[p + F] = h / V & 255;
        return p + I
    }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 1, 255, 0), this[p] = h & 255, p + 1
    }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 2, 65535, 0), this[p] = h & 255, this[p + 1] = h >>> 8, p + 2
    }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 2, 65535, 0), this[p] = h >>> 8, this[p + 1] = h & 255, p + 2
    }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 4, 4294967295, 0), this[p + 3] = h >>> 24, this[p + 2] = h >>> 16, this[p + 1] = h >>> 8, this[p] = h & 255, p + 4
    }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 4, 4294967295, 0), this[p] = h >>> 24, this[p + 1] = h >>> 16, this[p + 2] = h >>> 8, this[p + 3] = h & 255, p + 4
    };

    function ue(_, h, p, I, B) {
        Ve(h, I, B, _, p, 7);
        let F = Number(h & BigInt(4294967295));
        _[p++] = F, F = F >> 8, _[p++] = F, F = F >> 8, _[p++] = F, F = F >> 8, _[p++] = F;
        let V = Number(h >> BigInt(32) & BigInt(4294967295));
        return _[p++] = V, V = V >> 8, _[p++] = V, V = V >> 8, _[p++] = V, V = V >> 8, _[p++] = V, p
    }

    function Fe(_, h, p, I, B) {
        Ve(h, I, B, _, p, 7);
        let F = Number(h & BigInt(4294967295));
        _[p + 7] = F, F = F >> 8, _[p + 6] = F, F = F >> 8, _[p + 5] = F, F = F >> 8, _[p + 4] = F;
        let V = Number(h >> BigInt(32) & BigInt(4294967295));
        return _[p + 3] = V, V = V >> 8, _[p + 2] = V, V = V >> 8, _[p + 1] = V, V = V >> 8, _[p] = V, p + 8
    }
    l.prototype.writeBigUInt64LE = on(function (h, p = 0) {
        return ue(this, h, p, BigInt(0), BigInt("0xffffffffffffffff"))
    }), l.prototype.writeBigUInt64BE = on(function (h, p = 0) {
        return Fe(this, h, p, BigInt(0), BigInt("0xffffffffffffffff"))
    }), l.prototype.writeIntLE = function (h, p, I, B) {
        if (h = +h, p = p >>> 0, !B) {
            const ye = Math.pow(2, 8 * I - 1);
            J(this, h, p, I, ye - 1, -ye)
        }
        let F = 0,
            V = 1,
            ge = 0;
        for (this[p] = h & 255; ++F < I && (V *= 256);) h < 0 && ge === 0 && this[p + F - 1] !== 0 && (ge = 1), this[p + F] = (h / V >> 0) - ge & 255;
        return p + I
    }, l.prototype.writeIntBE = function (h, p, I, B) {
        if (h = +h, p = p >>> 0, !B) {
            const ye = Math.pow(2, 8 * I - 1);
            J(this, h, p, I, ye - 1, -ye)
        }
        let F = I - 1,
            V = 1,
            ge = 0;
        for (this[p + F] = h & 255; --F >= 0 && (V *= 256);) h < 0 && ge === 0 && this[p + F + 1] !== 0 && (ge = 1), this[p + F] = (h / V >> 0) - ge & 255;
        return p + I
    }, l.prototype.writeInt8 = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 1, 127, -128), h < 0 && (h = 255 + h + 1), this[p] = h & 255, p + 1
    }, l.prototype.writeInt16LE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 2, 32767, -32768), this[p] = h & 255, this[p + 1] = h >>> 8, p + 2
    }, l.prototype.writeInt16BE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 2, 32767, -32768), this[p] = h >>> 8, this[p + 1] = h & 255, p + 2
    }, l.prototype.writeInt32LE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 4, 2147483647, -2147483648), this[p] = h & 255, this[p + 1] = h >>> 8, this[p + 2] = h >>> 16, this[p + 3] = h >>> 24, p + 4
    }, l.prototype.writeInt32BE = function (h, p, I) {
        return h = +h, p = p >>> 0, I || J(this, h, p, 4, 2147483647, -2147483648), h < 0 && (h = 4294967295 + h + 1), this[p] = h >>> 24, this[p + 1] = h >>> 16, this[p + 2] = h >>> 8, this[p + 3] = h & 255, p + 4
    }, l.prototype.writeBigInt64LE = on(function (h, p = 0) {
        return ue(this, h, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), l.prototype.writeBigInt64BE = on(function (h, p = 0) {
        return Fe(this, h, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function Re(_, h, p, I, B, F) {
        if (p + I > _.length) throw new RangeError("Index out of range");
        if (p < 0) throw new RangeError("Index out of range")
    }

    function ke(_, h, p, I, B) {
        return h = +h, p = p >>> 0, B || Re(_, h, p, 4), t.write(_, h, p, I, 23, 4), p + 4
    }
    l.prototype.writeFloatLE = function (h, p, I) {
        return ke(this, h, p, !0, I)
    }, l.prototype.writeFloatBE = function (h, p, I) {
        return ke(this, h, p, !1, I)
    };

    function Rn(_, h, p, I, B) {
        return h = +h, p = p >>> 0, B || Re(_, h, p, 8), t.write(_, h, p, I, 52, 8), p + 8
    }
    l.prototype.writeDoubleLE = function (h, p, I) {
        return Rn(this, h, p, !0, I)
    }, l.prototype.writeDoubleBE = function (h, p, I) {
        return Rn(this, h, p, !1, I)
    }, l.prototype.copy = function (h, p, I, B) {
        if (!l.isBuffer(h)) throw new TypeError("argument should be a Buffer");
        if (I || (I = 0), !B && B !== 0 && (B = this.length), p >= h.length && (p = h.length), p || (p = 0), B > 0 && B < I && (B = I), B === I || h.length === 0 || this.length === 0) return 0;
        if (p < 0) throw new RangeError("targetStart out of bounds");
        if (I < 0 || I >= this.length) throw new RangeError("Index out of range");
        if (B < 0) throw new RangeError("sourceEnd out of bounds");
        B > this.length && (B = this.length), h.length - p < B - I && (B = h.length - p + I);
        const F = B - I;
        return this === h && typeof o.prototype.copyWithin == "function" ? this.copyWithin(p, I, B) : o.prototype.set.call(h, this.subarray(I, B), p), F
    }, l.prototype.fill = function (h, p, I, B) {
        if (typeof h == "string") {
            if (typeof p == "string" ? (B = p, p = 0, I = this.length) : typeof I == "string" && (B = I, I = this.length), B !== void 0 && typeof B != "string") throw new TypeError("encoding must be a string");
            if (typeof B == "string" && !l.isEncoding(B)) throw new TypeError("Unknown encoding: " + B);
            if (h.length === 1) {
                const V = h.charCodeAt(0);
                (B === "utf8" && V < 128 || B === "latin1") && (h = V)
            }
        } else typeof h == "number" ? h = h & 255 : typeof h == "boolean" && (h = Number(h));
        if (p < 0 || this.length < p || this.length < I) throw new RangeError("Out of range index");
        if (I <= p) return this;
        p = p >>> 0, I = I === void 0 ? this.length : I >>> 0, h || (h = 0);
        let F;
        if (typeof h == "number")
            for (F = p; F < I; ++F) this[F] = h;
        else {
            const V = l.isBuffer(h) ? h : l.from(h, B),
                ge = V.length;
            if (ge === 0) throw new TypeError('The value "' + h + '" is invalid for argument "value"');
            for (F = 0; F < I - p; ++F) this[F + p] = V[F % ge]
        }
        return this
    };
    const Se = {};

    function Ke(_, h, p) {
        Se[_] = class extends p {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: h.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${_}]`, this.stack, delete this.name
            }
            get code() {
                return _
            }
            set code(B) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: B,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${_}]: ${this.message}`
            }
        }
    }
    Ke("ERR_BUFFER_OUT_OF_BOUNDS", function (_) {
        return _ ? `${_} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), Ke("ERR_INVALID_ARG_TYPE", function (_, h) {
        return `The "${_}" argument must be of type number. Received type ${typeof h}`
    }, TypeError), Ke("ERR_OUT_OF_RANGE", function (_, h, p) {
        let I = `The value of "${_}" is out of range.`,
            B = p;
        return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? B = ei(String(p)) : typeof p == "bigint" && (B = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (B = ei(B)), B += "n"), I += ` It must be ${h}. Received ${B}`, I
    }, RangeError);

    function ei(_) {
        let h = "",
            p = _.length;
        const I = _[0] === "-" ? 1 : 0;
        for (; p >= I + 4; p -= 3) h = `_${_.slice(p-3,p)}${h}`;
        return `${_.slice(0,p)}${h}`
    }

    function Ye(_, h, p) {
        An(h, "offset"), (_[h] === void 0 || _[h + p] === void 0) && Le(h, _.length - (p + 1))
    }

    function Ve(_, h, p, I, B, F) {
        if (_ > p || _ < h) {
            const V = typeof h == "bigint" ? "n" : "";
            let ge;
            throw h === 0 || h === BigInt(0) ? ge = `>= 0${V} and < 2${V} ** ${(F+1)*8}${V}` : ge = `>= -(2${V} ** ${(F+1)*8-1}${V}) and < 2 ** ${(F+1)*8-1}${V}`, new Se.ERR_OUT_OF_RANGE("value", ge, _)
        }
        Ye(I, B, F)
    }

    function An(_, h) {
        if (typeof _ != "number") throw new Se.ERR_INVALID_ARG_TYPE(h, "number", _)
    }

    function Le(_, h, p) {
        throw Math.floor(_) !== _ ? (An(_, p), new Se.ERR_OUT_OF_RANGE("offset", "an integer", _)) : h < 0 ? new Se.ERR_BUFFER_OUT_OF_BOUNDS : new Se.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${h}`, _)
    }
    const Xe = /[^+/0-9A-Za-z-_]/g;

    function Ci(_) {
        if (_ = _.split("=")[0], _ = _.trim().replace(Xe, ""), _.length < 2) return "";
        for (; _.length % 4 !== 0;) _ = _ + "=";
        return _
    }

    function $e(_, h) {
        h = h || 1 / 0;
        let p;
        const I = _.length;
        let B = null;
        const F = [];
        for (let V = 0; V < I; ++V) {
            if (p = _.charCodeAt(V), p > 55295 && p < 57344) {
                if (!B) {
                    if (p > 56319) {
                        (h -= 3) > -1 && F.push(239, 191, 189);
                        continue
                    } else if (V + 1 === I) {
                        (h -= 3) > -1 && F.push(239, 191, 189);
                        continue
                    }
                    B = p;
                    continue
                }
                if (p < 56320) {
                    (h -= 3) > -1 && F.push(239, 191, 189), B = p;
                    continue
                }
                p = (B - 55296 << 10 | p - 56320) + 65536
            } else B && (h -= 3) > -1 && F.push(239, 191, 189);
            if (B = null, p < 128) {
                if ((h -= 1) < 0) break;
                F.push(p)
            } else if (p < 2048) {
                if ((h -= 2) < 0) break;
                F.push(p >> 6 | 192, p & 63 | 128)
            } else if (p < 65536) {
                if ((h -= 3) < 0) break;
                F.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128)
            } else if (p < 1114112) {
                if ((h -= 4) < 0) break;
                F.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return F
    }

    function Je(_) {
        const h = [];
        for (let p = 0; p < _.length; ++p) h.push(_.charCodeAt(p) & 255);
        return h
    }

    function Bi(_, h) {
        let p, I, B;
        const F = [];
        for (let V = 0; V < _.length && !((h -= 2) < 0); ++V) p = _.charCodeAt(V), I = p >> 8, B = p % 256, F.push(B), F.push(I);
        return F
    }

    function Ge(_) {
        return e.toByteArray(Ci(_))
    }

    function He(_, h, p, I) {
        let B;
        for (B = 0; B < I && !(B + p >= h.length || B >= _.length); ++B) h[B + p] = _[B];
        return B
    }

    function Wt(_, h) {
        return _ instanceof h || _ != null && _.constructor != null && _.constructor.name != null && _.constructor.name === h.name
    }

    function We(_) {
        return _ !== _
    }
    const Qe = function () {
        const _ = "0123456789abcdef",
            h = new Array(256);
        for (let p = 0; p < 16; ++p) {
            const I = p * 16;
            for (let B = 0; B < 16; ++B) h[I + B] = _[p] + _[B]
        }
        return h
    }();

    function on(_) {
        return typeof BigInt > "u" ? et : _
    }

    function et() {
        throw new Error("BigInt not supported")
    }
})(Rt);
const he = Rt.Buffer,
    Jp = Rt.Blob,
    Qp = Rt.BlobOptions,
    se = Rt.Buffer,
    e0 = Rt.File,
    t0 = Rt.FileOptions,
    n0 = Rt.INSPECT_MAX_BYTES,
    r0 = Rt.SlowBuffer,
    i0 = Rt.TranscodeEncoding,
    o0 = Rt.atob,
    s0 = Rt.btoa,
    a0 = Rt.constants,
    c0 = Rt.isAscii,
    u0 = Rt.isUtf8,
    l0 = Rt.kMaxLength,
    d0 = Rt.kStringMaxLength,
    f0 = Rt.resolveObjectURL,
    h0 = Rt.transcode,
    p0 = Object.freeze(Object.defineProperty({
        __proto__: null,
        Blob: Jp,
        BlobOptions: Qp,
        Buffer: se,
        File: e0,
        FileOptions: t0,
        INSPECT_MAX_BYTES: n0,
        SlowBuffer: r0,
        TranscodeEncoding: i0,
        atob: o0,
        btoa: s0,
        constants: a0,
        default: he,
        isAscii: c0,
        isUtf8: u0,
        kMaxLength: l0,
        kStringMaxLength: d0,
        resolveObjectURL: f0,
        transcode: h0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Er = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ya(r) {
    return r instanceof Uint8Array || ArrayBuffer.isView(r) && r.constructor.name === "Uint8Array"
}

function pi(r) {
    if (!Number.isSafeInteger(r) || r < 0) throw new Error("positive integer expected, got " + r)
}

function tn(r, ...e) {
    if (!ya(r)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(r.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + r.length)
}

function y0(r) {
    if (typeof r != "function" || typeof r.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    pi(r.outputLen), pi(r.blockLen)
}

function Lr(r, e = !0) {
    if (r.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && r.finished) throw new Error("Hash#digest() has already been called")
}

function ol(r, e) {
    tn(r);
    const t = e.outputLen;
    if (r.length < t) throw new Error("digestInto() expects output buffer of length at least " + t)
}

function m0(r) {
    return new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4))
}

function Zn(...r) {
    for (let e = 0; e < r.length; e++) r[e].fill(0)
}

function hs(r) {
    return new DataView(r.buffer, r.byteOffset, r.byteLength)
}

function un(r, e) {
    return r << 32 - e | r >>> e
}
const g0 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;

function w0(r) {
    return r << 24 & 4278190080 | r << 8 & 16711680 | r >>> 8 & 65280 | r >>> 24 & 255
}

function b0(r) {
    for (let e = 0; e < r.length; e++) r[e] = w0(r[e]);
    return r
}
const Rc = g0 ? r => r : b0,
    sl = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function",
    _0 = Array.from({
        length: 256
    }, (r, e) => e.toString(16).padStart(2, "0"));

function Ur(r) {
    if (tn(r), sl) return r.toHex();
    let e = "";
    for (let t = 0; t < r.length; t++) e += _0[r[t]];
    return e
}
const kn = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};

function Ac(r) {
    if (r >= kn._0 && r <= kn._9) return r - kn._0;
    if (r >= kn.A && r <= kn.F) return r - (kn.A - 10);
    if (r >= kn.a && r <= kn.f) return r - (kn.a - 10)
}

function ma(r) {
    if (typeof r != "string") throw new Error("hex string expected, got " + typeof r);
    if (sl) return Uint8Array.fromHex(r);
    const e = r.length,
        t = e / 2;
    if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(t);
    for (let i = 0, o = 0; i < t; i++, o += 2) {
        const s = Ac(r.charCodeAt(o)),
            a = Ac(r.charCodeAt(o + 1));
        if (s === void 0 || a === void 0) {
            const u = r[o] + r[o + 1];
            throw new Error('hex string expected, got non-hex character "' + u + '" at index ' + o)
        }
        n[i] = s * 16 + a
    }
    return n
}

function E0(r) {
    if (typeof r != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(r))
}

function _o(r) {
    return typeof r == "string" && (r = E0(r)), tn(r), r
}

function Pn(...r) {
    let e = 0;
    for (let n = 0; n < r.length; n++) {
        const i = r[n];
        tn(i), e += i.length
    }
    const t = new Uint8Array(e);
    for (let n = 0, i = 0; n < r.length; n++) {
        const o = r[n];
        t.set(o, i), i += o.length
    }
    return t
}
class ga {}

function wa(r) {
    const e = n => r().update(_o(n)).digest(),
        t = r();
    return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e
}

function al(r = 32) {
    if (Er && typeof Er.getRandomValues == "function") return Er.getRandomValues(new Uint8Array(r));
    if (Er && typeof Er.randomBytes == "function") return Uint8Array.from(Er.randomBytes(r));
    throw new Error("crypto.getRandomValues must be defined")
}

function v0(r, e, t, n) {
    if (typeof r.setBigUint64 == "function") return r.setBigUint64(e, t, n);
    const i = BigInt(32),
        o = BigInt(4294967295),
        s = Number(t >> i & o),
        a = Number(t & o),
        u = n ? 4 : 0,
        d = n ? 0 : 4;
    r.setUint32(e + u, s, n), r.setUint32(e + d, a, n)
}

function R0(r, e, t) {
    return r & e ^ ~r & t
}

function A0(r, e, t) {
    return r & e ^ r & t ^ e & t
}
class cl extends ga {
    constructor(e, t, n, i) {
        super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = i, this.buffer = new Uint8Array(e), this.view = hs(this.buffer)
    }
    update(e) {
        Lr(this), e = _o(e), tn(e);
        const {
            view: t,
            buffer: n,
            blockLen: i
        } = this, o = e.length;
        for (let s = 0; s < o;) {
            const a = Math.min(i - this.pos, o - s);
            if (a === i) {
                const u = hs(e);
                for (; i <= o - s; s += i) this.process(u, s);
                continue
            }
            n.set(e.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(t, 0), this.pos = 0)
        }
        return this.length += e.length, this.roundClean(), this
    }
    digestInto(e) {
        Lr(this), ol(e, this), this.finished = !0;
        const {
            buffer: t,
            view: n,
            blockLen: i,
            isLE: o
        } = this;
        let {
            pos: s
        } = this;
        t[s++] = 128, Zn(this.buffer.subarray(s)), this.padOffset > i - s && (this.process(n, 0), s = 0);
        for (let b = s; b < i; b++) t[b] = 0;
        v0(n, i - 8, BigInt(this.length * 8), o), this.process(n, 0);
        const a = hs(e),
            u = this.outputLen;
        if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const d = u / 4,
            l = this.get();
        if (d > l.length) throw new Error("_sha2: outputLen bigger than state");
        for (let b = 0; b < d; b++) a.setUint32(4 * b, l[b], o)
    }
    digest() {
        const {
            buffer: e,
            outputLen: t
        } = this;
        this.digestInto(e);
        const n = e.slice(0, t);
        return this.destroy(), n
    }
    _cloneInto(e) {
        e || (e = new this.constructor), e.set(...this.get());
        const {
            blockLen: t,
            buffer: n,
            length: i,
            finished: o,
            destroyed: s,
            pos: a
        } = this;
        return e.destroyed = s, e.finished = o, e.length = i, e.pos = a, i % t && e.buffer.set(n), e
    }
    clone() {
        return this._cloneInto()
    }
}
const Dn = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    Ot = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]),
    Pi = BigInt(2 ** 32 - 1),
    kc = BigInt(32);

function k0(r, e = !1) {
    return e ? {
        h: Number(r & Pi),
        l: Number(r >> kc & Pi)
    } : {
        h: Number(r >> kc & Pi) | 0,
        l: Number(r & Pi) | 0
    }
}

function ul(r, e = !1) {
    const t = r.length;
    let n = new Uint32Array(t),
        i = new Uint32Array(t);
    for (let o = 0; o < t; o++) {
        const {
            h: s,
            l: a
        } = k0(r[o], e);
        [n[o], i[o]] = [s, a]
    }
    return [n, i]
}
const Sc = (r, e, t) => r >>> t,
    Ic = (r, e, t) => r << 32 - t | e >>> t,
    vr = (r, e, t) => r >>> t | e << 32 - t,
    Rr = (r, e, t) => r << 32 - t | e >>> t,
    Li = (r, e, t) => r << 64 - t | e >>> t - 32,
    Ui = (r, e, t) => r >>> t - 32 | e << 64 - t,
    S0 = (r, e, t) => r << t | e >>> 32 - t,
    I0 = (r, e, t) => e << t | r >>> 32 - t,
    x0 = (r, e, t) => e << t - 32 | r >>> 64 - t,
    T0 = (r, e, t) => r << t - 32 | e >>> 64 - t;

function Sn(r, e, t, n) {
    const i = (e >>> 0) + (n >>> 0);
    return {
        h: r + t + (i / 2 ** 32 | 0) | 0,
        l: i | 0
    }
}
const O0 = (r, e, t) => (r >>> 0) + (e >>> 0) + (t >>> 0),
    N0 = (r, e, t, n) => e + t + n + (r / 2 ** 32 | 0) | 0,
    C0 = (r, e, t, n) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0),
    B0 = (r, e, t, n, i) => e + t + n + i + (r / 2 ** 32 | 0) | 0,
    M0 = (r, e, t, n, i) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0),
    P0 = (r, e, t, n, i, o) => e + t + n + i + o + (r / 2 ** 32 | 0) | 0,
    L0 = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    Fn = new Uint32Array(64);
class U0 extends cl {
    constructor(e = 32) {
        super(64, e, 8, !1), this.A = Dn[0] | 0, this.B = Dn[1] | 0, this.C = Dn[2] | 0, this.D = Dn[3] | 0, this.E = Dn[4] | 0, this.F = Dn[5] | 0, this.G = Dn[6] | 0, this.H = Dn[7] | 0
    }
    get() {
        const {
            A: e,
            B: t,
            C: n,
            D: i,
            E: o,
            F: s,
            G: a,
            H: u
        } = this;
        return [e, t, n, i, o, s, a, u]
    }
    set(e, t, n, i, o, s, a, u) {
        this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = i | 0, this.E = o | 0, this.F = s | 0, this.G = a | 0, this.H = u | 0
    }
    process(e, t) {
        for (let b = 0; b < 16; b++, t += 4) Fn[b] = e.getUint32(t, !1);
        for (let b = 16; b < 64; b++) {
            const S = Fn[b - 15],
                m = Fn[b - 2],
                v = un(S, 7) ^ un(S, 18) ^ S >>> 3,
                T = un(m, 17) ^ un(m, 19) ^ m >>> 10;
            Fn[b] = T + Fn[b - 7] + v + Fn[b - 16] | 0
        }
        let {
            A: n,
            B: i,
            C: o,
            D: s,
            E: a,
            F: u,
            G: d,
            H: l
        } = this;
        for (let b = 0; b < 64; b++) {
            const S = un(a, 6) ^ un(a, 11) ^ un(a, 25),
                m = l + S + R0(a, u, d) + L0[b] + Fn[b] | 0,
                T = (un(n, 2) ^ un(n, 13) ^ un(n, 22)) + A0(n, i, o) | 0;
            l = d, d = u, u = a, a = s + m | 0, s = o, o = i, i = n, n = m + T | 0
        }
        n = n + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, u = u + this.F | 0, d = d + this.G | 0, l = l + this.H | 0, this.set(n, i, o, s, a, u, d, l)
    }
    roundClean() {
        Zn(Fn)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), Zn(this.buffer)
    }
}
const ll = ul(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(r => BigInt(r))),
    D0 = ll[0],
    F0 = ll[1],
    Hn = new Uint32Array(80),
    zn = new Uint32Array(80);
class H0 extends cl {
    constructor(e = 64) {
        super(128, e, 16, !1), this.Ah = Ot[0] | 0, this.Al = Ot[1] | 0, this.Bh = Ot[2] | 0, this.Bl = Ot[3] | 0, this.Ch = Ot[4] | 0, this.Cl = Ot[5] | 0, this.Dh = Ot[6] | 0, this.Dl = Ot[7] | 0, this.Eh = Ot[8] | 0, this.El = Ot[9] | 0, this.Fh = Ot[10] | 0, this.Fl = Ot[11] | 0, this.Gh = Ot[12] | 0, this.Gl = Ot[13] | 0, this.Hh = Ot[14] | 0, this.Hl = Ot[15] | 0
    }
    get() {
        const {
            Ah: e,
            Al: t,
            Bh: n,
            Bl: i,
            Ch: o,
            Cl: s,
            Dh: a,
            Dl: u,
            Eh: d,
            El: l,
            Fh: b,
            Fl: S,
            Gh: m,
            Gl: v,
            Hh: T,
            Hl: R
        } = this;
        return [e, t, n, i, o, s, a, u, d, l, b, S, m, v, T, R]
    }
    set(e, t, n, i, o, s, a, u, d, l, b, S, m, v, T, R) {
        this.Ah = e | 0, this.Al = t | 0, this.Bh = n | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = u | 0, this.Eh = d | 0, this.El = l | 0, this.Fh = b | 0, this.Fl = S | 0, this.Gh = m | 0, this.Gl = v | 0, this.Hh = T | 0, this.Hl = R | 0
    }
    process(e, t) {
        for (let P = 0; P < 16; P++, t += 4) Hn[P] = e.getUint32(t), zn[P] = e.getUint32(t += 4);
        for (let P = 16; P < 80; P++) {
            const K = Hn[P - 15] | 0,
                U = zn[P - 15] | 0,
                Y = vr(K, U, 1) ^ vr(K, U, 8) ^ Sc(K, U, 7),
                G = Rr(K, U, 1) ^ Rr(K, U, 8) ^ Ic(K, U, 7),
                Z = Hn[P - 2] | 0,
                L = zn[P - 2] | 0,
                q = vr(Z, L, 19) ^ Li(Z, L, 61) ^ Sc(Z, L, 6),
                M = Rr(Z, L, 19) ^ Ui(Z, L, 61) ^ Ic(Z, L, 6),
                D = C0(G, M, zn[P - 7], zn[P - 16]),
                w = B0(D, Y, q, Hn[P - 7], Hn[P - 16]);
            Hn[P] = w | 0, zn[P] = D | 0
        }
        let {
            Ah: n,
            Al: i,
            Bh: o,
            Bl: s,
            Ch: a,
            Cl: u,
            Dh: d,
            Dl: l,
            Eh: b,
            El: S,
            Fh: m,
            Fl: v,
            Gh: T,
            Gl: R,
            Hh: N,
            Hl: $
        } = this;
        for (let P = 0; P < 80; P++) {
            const K = vr(b, S, 14) ^ vr(b, S, 18) ^ Li(b, S, 41),
                U = Rr(b, S, 14) ^ Rr(b, S, 18) ^ Ui(b, S, 41),
                Y = b & m ^ ~b & T,
                G = S & v ^ ~S & R,
                Z = M0($, U, G, F0[P], zn[P]),
                L = P0(Z, N, K, Y, D0[P], Hn[P]),
                q = Z | 0,
                M = vr(n, i, 28) ^ Li(n, i, 34) ^ Li(n, i, 39),
                D = Rr(n, i, 28) ^ Ui(n, i, 34) ^ Ui(n, i, 39),
                w = n & o ^ n & a ^ o & a,
                c = i & s ^ i & u ^ s & u;
            N = T | 0, $ = R | 0, T = m | 0, R = v | 0, m = b | 0, v = S | 0, {
                h: b,
                l: S
            } = Sn(d | 0, l | 0, L | 0, q | 0), d = a | 0, l = u | 0, a = o | 0, u = s | 0, o = n | 0, s = i | 0;
            const f = O0(q, D, c);
            n = N0(f, L, M, w), i = f | 0
        }({
            h: n,
            l: i
        } = Sn(this.Ah | 0, this.Al | 0, n | 0, i | 0)), {
            h: o,
            l: s
        } = Sn(this.Bh | 0, this.Bl | 0, o | 0, s | 0), {
            h: a,
            l: u
        } = Sn(this.Ch | 0, this.Cl | 0, a | 0, u | 0), {
            h: d,
            l
        } = Sn(this.Dh | 0, this.Dl | 0, d | 0, l | 0), {
            h: b,
            l: S
        } = Sn(this.Eh | 0, this.El | 0, b | 0, S | 0), {
            h: m,
            l: v
        } = Sn(this.Fh | 0, this.Fl | 0, m | 0, v | 0), {
            h: T,
            l: R
        } = Sn(this.Gh | 0, this.Gl | 0, T | 0, R | 0), {
            h: N,
            l: $
        } = Sn(this.Hh | 0, this.Hl | 0, N | 0, $ | 0), this.set(n, i, o, s, a, u, d, l, b, S, m, v, T, R, N, $)
    }
    roundClean() {
        Zn(Hn, zn)
    }
    destroy() {
        Zn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
const dl = wa(() => new U0),
    z0 = wa(() => new H0); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ba = BigInt(0),
    Ws = BigInt(1);

function lr(r, e) {
    if (typeof e != "boolean") throw new Error(r + " boolean expected, got " + e)
}

function Di(r) {
    const e = r.toString(16);
    return e.length & 1 ? "0" + e : e
}

function fl(r) {
    if (typeof r != "string") throw new Error("hex string expected, got " + typeof r);
    return r === "" ? ba : BigInt("0x" + r)
}

function Eo(r) {
    return fl(Ur(r))
}

function yi(r) {
    return tn(r), fl(Ur(Uint8Array.from(r).reverse()))
}

function _a(r, e) {
    return ma(r.toString(16).padStart(e * 2, "0"))
}

function vo(r, e) {
    return _a(r, e).reverse()
}

function rt(r, e, t) {
    let n;
    if (typeof e == "string") try {
            n = ma(e)
        } catch (o) {
            throw new Error(r + " must be hex string or Uint8Array, cause: " + o)
        } else if (ya(e)) n = Uint8Array.from(e);
        else throw new Error(r + " must be hex string or Uint8Array");
    const i = n.length;
    if (typeof t == "number" && i !== t) throw new Error(r + " of length " + t + " expected, got " + i);
    return n
}
const ps = r => typeof r == "bigint" && ba <= r;

function K0(r, e, t) {
    return ps(r) && ps(e) && ps(t) && e <= r && r < t
}

function Tr(r, e, t, n) {
    if (!K0(e, t, n)) throw new Error("expected valid " + r + ": " + t + " <= n < " + n + ", got " + e)
}

function $0(r) {
    let e;
    for (e = 0; r > ba; r >>= Ws, e += 1);
    return e
}
const Ro = r => (Ws << BigInt(r)) - Ws;

function W0(r, e, t) {
    if (typeof r != "number" || r < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof t != "function") throw new Error("hmacFn must be a function");
    const n = m => new Uint8Array(m),
        i = m => Uint8Array.of(m);
    let o = n(r),
        s = n(r),
        a = 0;
    const u = () => {
            o.fill(1), s.fill(0), a = 0
        },
        d = (...m) => t(s, o, ...m),
        l = (m = n(0)) => {
            s = d(i(0), m), o = d(), m.length !== 0 && (s = d(i(1), m), o = d())
        },
        b = () => {
            if (a++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let m = 0;
            const v = [];
            for (; m < e;) {
                o = d();
                const T = o.slice();
                v.push(T), m += o.length
            }
            return Pn(...v)
        };
    return (m, v) => {
        u(), l(m);
        let T;
        for (; !(T = v(b()));) l();
        return u(), T
    }
}

function vi(r, e, t = {}) {
    if (!r || typeof r != "object") throw new Error("expected valid options object");

    function n(i, o, s) {
        const a = r[i];
        if (s && a === void 0) return;
        const u = typeof a;
        if (u !== o || a === null) throw new Error(`param "${i}" is invalid: expected ${o}, got ${u}`)
    }
    Object.entries(e).forEach(([i, o]) => n(i, o, !1)), Object.entries(t).forEach(([i, o]) => n(i, o, !0))
}

function to(r) {
    const e = new WeakMap;
    return (t, ...n) => {
        const i = e.get(t);
        if (i !== void 0) return i;
        const o = r(t, ...n);
        return e.set(t, o), o
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Kt = BigInt(0),
    Tt = BigInt(1),
    or = BigInt(2),
    q0 = BigInt(3),
    hl = BigInt(4),
    pl = BigInt(5),
    yl = BigInt(8);

function it(r, e) {
    const t = r % e;
    return t >= Kt ? t : e + t
}

function tt(r, e, t) {
    let n = r;
    for (; e-- > Kt;) n *= n, n %= t;
    return n
}

function xc(r, e) {
    if (r === Kt) throw new Error("invert: expected non-zero number");
    if (e <= Kt) throw new Error("invert: expected positive modulus, got " + e);
    let t = it(r, e),
        n = e,
        i = Kt,
        o = Tt;
    for (; t !== Kt;) {
        const a = n / t,
            u = n % t,
            d = i - o * a;
        n = t, t = u, i = o, o = d
    }
    if (n !== Tt) throw new Error("invert: does not exist");
    return it(i, e)
}

function ml(r, e) {
    const t = (r.ORDER + Tt) / hl,
        n = r.pow(e, t);
    if (!r.eql(r.sqr(n), e)) throw new Error("Cannot find square root");
    return n
}

function V0(r, e) {
    const t = (r.ORDER - pl) / yl,
        n = r.mul(e, or),
        i = r.pow(n, t),
        o = r.mul(e, i),
        s = r.mul(r.mul(o, or), i),
        a = r.mul(o, r.sub(s, r.ONE));
    if (!r.eql(r.sqr(a), e)) throw new Error("Cannot find square root");
    return a
}

function G0(r) {
    if (r < BigInt(3)) throw new Error("sqrt is not defined for small field");
    let e = r - Tt,
        t = 0;
    for (; e % or === Kt;) e /= or, t++;
    let n = or;
    const i = Wr(r);
    for (; Tc(i, n) === 1;)
        if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (t === 1) return ml;
    let o = i.pow(n, e);
    const s = (e + Tt) / or;
    return function (u, d) {
        if (u.is0(d)) return d;
        if (Tc(u, d) !== 1) throw new Error("Cannot find square root");
        let l = t,
            b = u.mul(u.ONE, o),
            S = u.pow(d, e),
            m = u.pow(d, s);
        for (; !u.eql(S, u.ONE);) {
            if (u.is0(S)) return u.ZERO;
            let v = 1,
                T = u.sqr(S);
            for (; !u.eql(T, u.ONE);)
                if (v++, T = u.sqr(T), v === l) throw new Error("Cannot find square root");
            const R = Tt << BigInt(l - v - 1),
                N = u.pow(b, R);
            l = v, b = u.sqr(N), S = u.mul(S, b), m = u.mul(m, N)
        }
        return m
    }
}

function j0(r) {
    return r % hl === q0 ? ml : r % yl === pl ? V0 : G0(r)
}
const Z0 = (r, e) => (it(r, e) & Tt) === Tt,
    Y0 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function X0(r) {
    const e = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number"
        },
        t = Y0.reduce((n, i) => (n[i] = "function", n), e);
    return vi(r, t), r
}

function J0(r, e, t) {
    if (t < Kt) throw new Error("invalid exponent, negatives unsupported");
    if (t === Kt) return r.ONE;
    if (t === Tt) return e;
    let n = r.ONE,
        i = e;
    for (; t > Kt;) t & Tt && (n = r.mul(n, i)), i = r.sqr(i), t >>= Tt;
    return n
}

function gl(r, e, t = !1) {
    const n = new Array(e.length).fill(t ? r.ZERO : void 0),
        i = e.reduce((s, a, u) => r.is0(a) ? s : (n[u] = s, r.mul(s, a)), r.ONE),
        o = r.inv(i);
    return e.reduceRight((s, a, u) => r.is0(a) ? s : (n[u] = r.mul(s, n[u]), r.mul(s, a)), o), n
}

function Tc(r, e) {
    const t = (r.ORDER - Tt) / or,
        n = r.pow(e, t),
        i = r.eql(n, r.ONE),
        o = r.eql(n, r.ZERO),
        s = r.eql(n, r.neg(r.ONE));
    if (!i && !o && !s) throw new Error("invalid Legendre symbol result");
    return i ? 1 : o ? 0 : -1
}

function Q0(r, e) {
    e !== void 0 && pi(e);
    const t = e !== void 0 ? e : r.toString(2).length,
        n = Math.ceil(t / 8);
    return {
        nBitLength: t,
        nByteLength: n
    }
}

function Wr(r, e, t = !1, n = {}) {
    if (r <= Kt) throw new Error("invalid field: expected ORDER > 0, got " + r);
    let i, o;
    if (typeof e == "object" && e != null) {
        if (n.sqrt || t) throw new Error("cannot specify opts in two arguments");
        const l = e;
        l.BITS && (i = l.BITS), l.sqrt && (o = l.sqrt), typeof l.isLE == "boolean" && (t = l.isLE)
    } else typeof e == "number" && (i = e), n.sqrt && (o = n.sqrt);
    const {
        nBitLength: s,
        nByteLength: a
    } = Q0(r, i);
    if (a > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let u;
    const d = Object.freeze({
        ORDER: r,
        isLE: t,
        BITS: s,
        BYTES: a,
        MASK: Ro(s),
        ZERO: Kt,
        ONE: Tt,
        create: l => it(l, r),
        isValid: l => {
            if (typeof l != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof l);
            return Kt <= l && l < r
        },
        is0: l => l === Kt,
        isValidNot0: l => !d.is0(l) && d.isValid(l),
        isOdd: l => (l & Tt) === Tt,
        neg: l => it(-l, r),
        eql: (l, b) => l === b,
        sqr: l => it(l * l, r),
        add: (l, b) => it(l + b, r),
        sub: (l, b) => it(l - b, r),
        mul: (l, b) => it(l * b, r),
        pow: (l, b) => J0(d, l, b),
        div: (l, b) => it(l * xc(b, r), r),
        sqrN: l => l * l,
        addN: (l, b) => l + b,
        subN: (l, b) => l - b,
        mulN: (l, b) => l * b,
        inv: l => xc(l, r),
        sqrt: o || (l => (u || (u = j0(r)), u(d, l))),
        toBytes: l => t ? vo(l, a) : _a(l, a),
        fromBytes: l => {
            if (l.length !== a) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + l.length);
            return t ? yi(l) : Eo(l)
        },
        invertBatch: l => gl(d, l),
        cmov: (l, b, S) => S ? b : l
    });
    return Object.freeze(d)
}

function wl(r) {
    if (typeof r != "bigint") throw new Error("field order must be bigint");
    const e = r.toString(2).length;
    return Math.ceil(e / 8)
}

function bl(r) {
    const e = wl(r);
    return e + Math.ceil(e / 2)
}

function ey(r, e, t = !1) {
    const n = r.length,
        i = wl(e),
        o = bl(e);
    if (n < 16 || n < o || n > 1024) throw new Error("expected " + o + "-1024 bytes of input, got " + n);
    const s = t ? yi(r) : Eo(r),
        a = it(s, e - Tt) + Tt;
    return t ? vo(a, i) : _a(a, i)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Dr = BigInt(0),
    sr = BigInt(1);

function ai(r, e) {
    const t = e.negate();
    return r ? t : e
}

function _l(r, e, t) {
    const n = e === "pz" ? s => s.pz : s => s.ez,
        i = gl(r.Fp, t.map(n));
    return t.map((s, a) => s.toAffine(i[a])).map(r.fromAffine)
}

function El(r, e) {
    if (!Number.isSafeInteger(r) || r <= 0 || r > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + r)
}

function ys(r, e) {
    El(r, e);
    const t = Math.ceil(e / r) + 1,
        n = 2 ** (r - 1),
        i = 2 ** r,
        o = Ro(r),
        s = BigInt(r);
    return {
        windows: t,
        windowSize: n,
        mask: o,
        maxNumber: i,
        shiftBy: s
    }
}

function Oc(r, e, t) {
    const {
        windowSize: n,
        mask: i,
        maxNumber: o,
        shiftBy: s
    } = t;
    let a = Number(r & i),
        u = r >> s;
    a > n && (a -= o, u += sr);
    const d = e * n,
        l = d + Math.abs(a) - 1,
        b = a === 0,
        S = a < 0,
        m = e % 2 !== 0;
    return {
        nextN: u,
        offset: l,
        isZero: b,
        isNeg: S,
        isNegF: m,
        offsetF: d
    }
}

function ty(r, e) {
    if (!Array.isArray(r)) throw new Error("array expected");
    r.forEach((t, n) => {
        if (!(t instanceof e)) throw new Error("invalid point at index " + n)
    })
}

function ny(r, e) {
    if (!Array.isArray(r)) throw new Error("array of scalars expected");
    r.forEach((t, n) => {
        if (!e.isValid(t)) throw new Error("invalid scalar at index " + n)
    })
}
const ms = new WeakMap,
    vl = new WeakMap;

function gs(r) {
    return vl.get(r) || 1
}

function Nc(r) {
    if (r !== Dr) throw new Error("invalid wNAF")
}

function Rl(r, e) {
    return {
        constTimeNegate: ai,
        hasPrecomputes(t) {
            return gs(t) !== 1
        },
        unsafeLadder(t, n, i = r.ZERO) {
            let o = t;
            for (; n > Dr;) n & sr && (i = i.add(o)), o = o.double(), n >>= sr;
            return i
        },
        precomputeWindow(t, n) {
            const {
                windows: i,
                windowSize: o
            } = ys(n, e), s = [];
            let a = t,
                u = a;
            for (let d = 0; d < i; d++) {
                u = a, s.push(u);
                for (let l = 1; l < o; l++) u = u.add(a), s.push(u);
                a = u.double()
            }
            return s
        },
        wNAF(t, n, i) {
            let o = r.ZERO,
                s = r.BASE;
            const a = ys(t, e);
            for (let u = 0; u < a.windows; u++) {
                const {
                    nextN: d,
                    offset: l,
                    isZero: b,
                    isNeg: S,
                    isNegF: m,
                    offsetF: v
                } = Oc(i, u, a);
                i = d, b ? s = s.add(ai(m, n[v])) : o = o.add(ai(S, n[l]))
            }
            return Nc(i), {
                p: o,
                f: s
            }
        },
        wNAFUnsafe(t, n, i, o = r.ZERO) {
            const s = ys(t, e);
            for (let a = 0; a < s.windows && i !== Dr; a++) {
                const {
                    nextN: u,
                    offset: d,
                    isZero: l,
                    isNeg: b
                } = Oc(i, a, s);
                if (i = u, !l) {
                    const S = n[d];
                    o = o.add(b ? S.negate() : S)
                }
            }
            return Nc(i), o
        },
        getPrecomputes(t, n, i) {
            let o = ms.get(n);
            return o || (o = this.precomputeWindow(n, t), t !== 1 && (typeof i == "function" && (o = i(o)), ms.set(n, o))), o
        },
        wNAFCached(t, n, i) {
            const o = gs(t);
            return this.wNAF(o, this.getPrecomputes(o, t, i), n)
        },
        wNAFCachedUnsafe(t, n, i, o) {
            const s = gs(t);
            return s === 1 ? this.unsafeLadder(t, n, o) : this.wNAFUnsafe(s, this.getPrecomputes(s, t, i), n, o)
        },
        setWindowSize(t, n) {
            El(n, e), vl.set(t, n), ms.delete(t)
        }
    }
}

function ry(r, e, t, n) {
    let i = e,
        o = r.ZERO,
        s = r.ZERO;
    for (; t > Dr || n > Dr;) t & sr && (o = o.add(i)), n & sr && (s = s.add(i)), i = i.double(), t >>= sr, n >>= sr;
    return {
        p1: o,
        p2: s
    }
}

function Al(r, e, t, n) {
    ty(t, r), ny(n, e);
    const i = t.length,
        o = n.length;
    if (i !== o) throw new Error("arrays of points and scalars must have equal length");
    const s = r.ZERO,
        a = $0(BigInt(i));
    let u = 1;
    a > 12 ? u = a - 3 : a > 4 ? u = a - 2 : a > 0 && (u = 2);
    const d = Ro(u),
        l = new Array(Number(d) + 1).fill(s),
        b = Math.floor((e.BITS - 1) / u) * u;
    let S = s;
    for (let m = b; m >= 0; m -= u) {
        l.fill(s);
        for (let T = 0; T < o; T++) {
            const R = n[T],
                N = Number(R >> BigInt(m) & d);
            l[N] = l[N].add(t[T])
        }
        let v = s;
        for (let T = l.length - 1, R = s; T > 0; T--) R = R.add(l[T]), v = v.add(R);
        if (S = S.add(v), m !== 0)
            for (let T = 0; T < u; T++) S = S.double()
    }
    return S
}

function Cc(r, e) {
    if (e) {
        if (e.ORDER !== r) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
        return X0(e), e
    } else return Wr(r)
}

function kl(r, e, t = {}) {
    if (!e || typeof e != "object") throw new Error(`expected valid ${r} CURVE object`);
    for (const a of ["p", "n", "h"]) {
        const u = e[a];
        if (!(typeof u == "bigint" && u > Dr)) throw new Error(`CURVE.${a} must be positive bigint`)
    }
    const n = Cc(e.p, t.Fp),
        i = Cc(e.n, t.Fn),
        s = ["Gx", "Gy", "a", r === "weierstrass" ? "b" : "d"];
    for (const a of s)
        if (!n.isValid(e[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return {
        Fp: n,
        Fn: i
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const dn = BigInt(0),
    Pt = BigInt(1),
    ws = BigInt(2),
    iy = BigInt(8),
    oy = {
        zip215: !0
    };

function sy(r, e, t, n) {
    const i = r.sqr(t),
        o = r.sqr(n),
        s = r.add(r.mul(e.a, i), o),
        a = r.add(r.ONE, r.mul(e.d, r.mul(i, o)));
    return r.eql(s, a)
}

function ay(r, e = {}) {
    const {
        Fp: t,
        Fn: n
    } = kl("edwards", r, e), {
        h: i,
        n: o
    } = r;
    vi(e, {}, {
        uvRatio: "function"
    });
    const s = ws << BigInt(n.BYTES * 8) - Pt,
        a = T => t.create(T),
        u = e.uvRatio || ((T, R) => {
            try {
                return {
                    isValid: !0,
                    value: t.sqrt(t.div(T, R))
                }
            } catch {
                return {
                    isValid: !1,
                    value: dn
                }
            }
        });
    if (!sy(t, r, r.Gx, r.Gy)) throw new Error("bad curve params: generator point");

    function d(T, R, N = !1) {
        const $ = N ? Pt : dn;
        return Tr("coordinate " + T, R, $, s), R
    }

    function l(T) {
        if (!(T instanceof m)) throw new Error("ExtendedPoint expected")
    }
    const b = to((T, R) => {
            const {
                ex: N,
                ey: $,
                ez: P
            } = T, K = T.is0();
            R == null && (R = K ? iy : t.inv(P));
            const U = a(N * R),
                Y = a($ * R),
                G = a(P * R);
            if (K) return {
                x: dn,
                y: Pt
            };
            if (G !== Pt) throw new Error("invZ was invalid");
            return {
                x: U,
                y: Y
            }
        }),
        S = to(T => {
            const {
                a: R,
                d: N
            } = r;
            if (T.is0()) throw new Error("bad point: ZERO");
            const {
                ex: $,
                ey: P,
                ez: K,
                et: U
            } = T, Y = a($ * $), G = a(P * P), Z = a(K * K), L = a(Z * Z), q = a(Y * R), M = a(Z * a(q + G)), D = a(L + a(N * a(Y * G)));
            if (M !== D) throw new Error("bad point: equation left != right (1)");
            const w = a($ * P),
                c = a(K * U);
            if (w !== c) throw new Error("bad point: equation left != right (2)");
            return !0
        });
    class m {
        constructor(R, N, $, P) {
            this.ex = d("x", R), this.ey = d("y", N), this.ez = d("z", $, !0), this.et = d("t", P), Object.freeze(this)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(R) {
            if (R instanceof m) throw new Error("extended point not allowed");
            const {
                x: N,
                y: $
            } = R || {};
            return d("x", N), d("y", $), new m(N, $, Pt, a(N * $))
        }
        static normalizeZ(R) {
            return _l(m, "ez", R)
        }
        static msm(R, N) {
            return Al(m, n, R, N)
        }
        _setWindowSize(R) {
            this.precompute(R)
        }
        precompute(R = 8, N = !0) {
            return v.setWindowSize(this, R), N || this.multiply(ws), this
        }
        assertValidity() {
            S(this)
        }
        equals(R) {
            l(R);
            const {
                ex: N,
                ey: $,
                ez: P
            } = this, {
                ex: K,
                ey: U,
                ez: Y
            } = R, G = a(N * Y), Z = a(K * P), L = a($ * Y), q = a(U * P);
            return G === Z && L === q
        }
        is0() {
            return this.equals(m.ZERO)
        }
        negate() {
            return new m(a(-this.ex), this.ey, this.ez, a(-this.et))
        }
        double() {
            const {
                a: R
            } = r, {
                ex: N,
                ey: $,
                ez: P
            } = this, K = a(N * N), U = a($ * $), Y = a(ws * a(P * P)), G = a(R * K), Z = N + $, L = a(a(Z * Z) - K - U), q = G + U, M = q - Y, D = G - U, w = a(L * M), c = a(q * D), f = a(L * D), g = a(M * q);
            return new m(w, c, g, f)
        }
        add(R) {
            l(R);
            const {
                a: N,
                d: $
            } = r, {
                ex: P,
                ey: K,
                ez: U,
                et: Y
            } = this, {
                ex: G,
                ey: Z,
                ez: L,
                et: q
            } = R, M = a(P * G), D = a(K * Z), w = a(Y * $ * q), c = a(U * L), f = a((P + K) * (G + Z) - M - D), g = c - w, E = c + w, k = a(D - N * M), O = a(f * g), C = a(E * k), A = a(f * k), y = a(g * E);
            return new m(O, C, y, A)
        }
        subtract(R) {
            return this.add(R.negate())
        }
        multiply(R) {
            const N = R;
            Tr("scalar", N, Pt, o);
            const {
                p: $,
                f: P
            } = v.wNAFCached(this, N, m.normalizeZ);
            return m.normalizeZ([$, P])[0]
        }
        multiplyUnsafe(R, N = m.ZERO) {
            const $ = R;
            return Tr("scalar", $, dn, o), $ === dn ? m.ZERO : this.is0() || $ === Pt ? this : v.wNAFCachedUnsafe(this, $, m.normalizeZ, N)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(i).is0()
        }
        isTorsionFree() {
            return v.wNAFCachedUnsafe(this, o).is0()
        }
        toAffine(R) {
            return b(this, R)
        }
        clearCofactor() {
            return i === Pt ? this : this.multiplyUnsafe(i)
        }
        static fromBytes(R, N = !1) {
            return tn(R), this.fromHex(R, N)
        }
        static fromHex(R, N = !1) {
            const {
                d: $,
                a: P
            } = r, K = t.BYTES;
            R = rt("pointHex", R, K), lr("zip215", N);
            const U = R.slice(),
                Y = R[K - 1];
            U[K - 1] = Y & -129;
            const G = yi(U),
                Z = N ? s : t.ORDER;
            Tr("pointHex.y", G, dn, Z);
            const L = a(G * G),
                q = a(L - Pt),
                M = a($ * L - P);
            let {
                isValid: D,
                value: w
            } = u(q, M);
            if (!D) throw new Error("Point.fromHex: invalid y coordinate");
            const c = (w & Pt) === Pt,
                f = (Y & 128) !== 0;
            if (!N && w === dn && f) throw new Error("Point.fromHex: x=0 and x_0=1");
            return f !== c && (w = a(-w)), m.fromAffine({
                x: w,
                y: G
            })
        }
        static fromPrivateScalar(R) {
            return m.BASE.multiply(R)
        }
        toBytes() {
            const {
                x: R,
                y: N
            } = this.toAffine(), $ = vo(N, t.BYTES);
            return $[$.length - 1] |= R & Pt ? 128 : 0, $
        }
        toRawBytes() {
            return this.toBytes()
        }
        toHex() {
            return Ur(this.toBytes())
        }
        toString() {
            return `<Point ${this.is0()?"ZERO":this.toHex()}>`
        }
    }
    m.BASE = new m(r.Gx, r.Gy, Pt, a(r.Gx * r.Gy)), m.ZERO = new m(dn, Pt, Pt, dn), m.Fp = t, m.Fn = n;
    const v = Rl(m, n.BYTES * 8);
    return m
}

function cy(r, e) {
    vi(e, {
        hash: "function"
    }, {
        adjustScalarBytes: "function",
        randomBytes: "function",
        domain: "function",
        prehash: "function",
        mapToCurve: "function"
    });
    const {
        prehash: t,
        hash: n
    } = e, {
        BASE: i,
        Fp: o,
        Fn: s
    } = r, a = s.ORDER, u = e.randomBytes || al, d = e.adjustScalarBytes || (U => U), l = e.domain || ((U, Y, G) => {
        if (lr("phflag", G), Y.length || G) throw new Error("Contexts/pre-hash are not supported");
        return U
    });

    function b(U) {
        return s.create(U)
    }

    function S(U) {
        return b(yi(U))
    }

    function m(U) {
        const Y = o.BYTES;
        U = rt("private key", U, Y);
        const G = rt("hashed private key", n(U), 2 * Y),
            Z = d(G.slice(0, Y)),
            L = G.slice(Y, 2 * Y),
            q = S(Z);
        return {
            head: Z,
            prefix: L,
            scalar: q
        }
    }

    function v(U) {
        const {
            head: Y,
            prefix: G,
            scalar: Z
        } = m(U), L = i.multiply(Z), q = L.toBytes();
        return {
            head: Y,
            prefix: G,
            scalar: Z,
            point: L,
            pointBytes: q
        }
    }

    function T(U) {
        return v(U).pointBytes
    }

    function R(U = Uint8Array.of(), ...Y) {
        const G = Pn(...Y);
        return S(n(l(G, rt("context", U), !!t)))
    }

    function N(U, Y, G = {}) {
        U = rt("message", U), t && (U = t(U));
        const {
            prefix: Z,
            scalar: L,
            pointBytes: q
        } = v(Y), M = R(G.context, Z, U), D = i.multiply(M).toBytes(), w = R(G.context, D, q, U), c = b(M + w * L);
        Tr("signature.s", c, dn, a);
        const f = o.BYTES,
            g = Pn(D, vo(c, f));
        return rt("result", g, f * 2)
    }
    const $ = oy;

    function P(U, Y, G, Z = $) {
        const {
            context: L,
            zip215: q
        } = Z, M = o.BYTES;
        U = rt("signature", U, 2 * M), Y = rt("message", Y), G = rt("publicKey", G, M), q !== void 0 && lr("zip215", q), t && (Y = t(Y));
        const D = yi(U.slice(M, 2 * M));
        let w, c, f;
        try {
            w = r.fromHex(G, q), c = r.fromHex(U.slice(0, M), q), f = i.multiplyUnsafe(D)
        } catch {
            return !1
        }
        if (!q && w.isSmallOrder()) return !1;
        const g = R(L, c.toBytes(), w.toBytes(), Y);
        return c.add(w.multiplyUnsafe(g)).subtract(f).clearCofactor().is0()
    }
    return i.precompute(8), {
        getPublicKey: T,
        sign: N,
        verify: P,
        utils: {
            getExtendedPublicKey: v,
            randomPrivateKey: () => u(o.BYTES),
            precompute(U = 8, Y = r.BASE) {
                return Y.precompute(U, !1)
            }
        },
        Point: r
    }
}

function uy(r) {
    const e = {
            a: r.a,
            d: r.d,
            p: r.Fp.ORDER,
            n: r.n,
            h: r.h,
            Gx: r.Gx,
            Gy: r.Gy
        },
        t = r.Fp,
        n = Wr(e.n, r.nBitLength, !0),
        i = {
            Fp: t,
            Fn: n,
            uvRatio: r.uvRatio
        },
        o = {
            hash: r.hash,
            randomBytes: r.randomBytes,
            adjustScalarBytes: r.adjustScalarBytes,
            domain: r.domain,
            prehash: r.prehash,
            mapToCurve: r.mapToCurve
        };
    return {
        CURVE: e,
        curveOpts: i,
        eddsaOpts: o
    }
}

function ly(r, e) {
    return Object.assign({}, e, {
        ExtendedPoint: e.Point,
        CURVE: r
    })
}

function dy(r) {
    const {
        CURVE: e,
        curveOpts: t,
        eddsaOpts: n
    } = uy(r), i = ay(e, t), o = cy(i, n);
    return ly(r, o)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const fy = BigInt(1),
    Bc = BigInt(2);
BigInt(3);
const hy = BigInt(5),
    py = BigInt(8),
    Ao = {
        p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),
        n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
        h: py,
        a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
        d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
        Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
        Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
    };

function yy(r) {
    const e = BigInt(10),
        t = BigInt(20),
        n = BigInt(40),
        i = BigInt(80),
        o = Ao.p,
        a = r * r % o * r % o,
        u = tt(a, Bc, o) * a % o,
        d = tt(u, fy, o) * r % o,
        l = tt(d, hy, o) * d % o,
        b = tt(l, e, o) * l % o,
        S = tt(b, t, o) * b % o,
        m = tt(S, n, o) * S % o,
        v = tt(m, i, o) * m % o,
        T = tt(v, i, o) * m % o,
        R = tt(T, e, o) * l % o;
    return {
        pow_p_5_8: tt(R, Bc, o) * r % o,
        b2: a
    }
}

function my(r) {
    return r[0] &= 248, r[31] &= 127, r[31] |= 64, r
}
const Mc = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");

function gy(r, e) {
    const t = Ao.p,
        n = it(e * e * e, t),
        i = it(n * n * e, t),
        o = yy(r * i).pow_p_5_8;
    let s = it(r * n * o, t);
    const a = it(e * s * s, t),
        u = s,
        d = it(s * Mc, t),
        l = a === r,
        b = a === it(-r, t),
        S = a === it(-r * Mc, t);
    return l && (s = u), (b || S) && (s = d), Z0(s, t) && (s = it(-s, t)), {
        isValid: l || b,
        value: s
    }
}
const wy = Wr(Ao.p, void 0, !0),
    by = {
        ...Ao,
        Fp: wy,
        hash: z0,
        adjustScalarBytes: my,
        uvRatio: gy
    },
    qr = dy(by);
var Ea = {
    exports: {}
};
const va = wo(p0);
Ea.exports;
(function (r) {
    (function (e, t) {
        function n(w, c) {
            if (!w) throw new Error(c || "Assertion failed")
        }

        function i(w, c) {
            w.super_ = c;
            var f = function () {};
            f.prototype = c.prototype, w.prototype = new f, w.prototype.constructor = w
        }

        function o(w, c, f) {
            if (o.isBN(w)) return w;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, w !== null && ((c === "le" || c === "be") && (f = c, c = 10), this._init(w || 0, c || 10, f || "be"))
        }
        typeof e == "object" ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
        var s;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = va.Buffer
        } catch {}
        o.isBN = function (c) {
            return c instanceof o ? !0 : c !== null && typeof c == "object" && c.constructor.wordSize === o.wordSize && Array.isArray(c.words)
        }, o.max = function (c, f) {
            return c.cmp(f) > 0 ? c : f
        }, o.min = function (c, f) {
            return c.cmp(f) < 0 ? c : f
        }, o.prototype._init = function (c, f, g) {
            if (typeof c == "number") return this._initNumber(c, f, g);
            if (typeof c == "object") return this._initArray(c, f, g);
            f === "hex" && (f = 16), n(f === (f | 0) && f >= 2 && f <= 36), c = c.toString().replace(/\s+/g, "");
            var E = 0;
            c[0] === "-" && (E++, this.negative = 1), E < c.length && (f === 16 ? this._parseHex(c, E, g) : (this._parseBase(c, f, E), g === "le" && this._initArray(this.toArray(), f, g)))
        }, o.prototype._initNumber = function (c, f, g) {
            c < 0 && (this.negative = 1, c = -c), c < 67108864 ? (this.words = [c & 67108863], this.length = 1) : c < 4503599627370496 ? (this.words = [c & 67108863, c / 67108864 & 67108863], this.length = 2) : (n(c < 9007199254740992), this.words = [c & 67108863, c / 67108864 & 67108863, 1], this.length = 3), g === "le" && this._initArray(this.toArray(), f, g)
        }, o.prototype._initArray = function (c, f, g) {
            if (n(typeof c.length == "number"), c.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(c.length / 3), this.words = new Array(this.length);
            for (var E = 0; E < this.length; E++) this.words[E] = 0;
            var k, O, C = 0;
            if (g === "be")
                for (E = c.length - 1, k = 0; E >= 0; E -= 3) O = c[E] | c[E - 1] << 8 | c[E - 2] << 16, this.words[k] |= O << C & 67108863, this.words[k + 1] = O >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, k++);
            else if (g === "le")
                for (E = 0, k = 0; E < c.length; E += 3) O = c[E] | c[E + 1] << 8 | c[E + 2] << 16, this.words[k] |= O << C & 67108863, this.words[k + 1] = O >>> 26 - C & 67108863, C += 24, C >= 26 && (C -= 26, k++);
            return this._strip()
        };

        function a(w, c) {
            var f = w.charCodeAt(c);
            if (f >= 48 && f <= 57) return f - 48;
            if (f >= 65 && f <= 70) return f - 55;
            if (f >= 97 && f <= 102) return f - 87;
            n(!1, "Invalid character in " + w)
        }

        function u(w, c, f) {
            var g = a(w, f);
            return f - 1 >= c && (g |= a(w, f - 1) << 4), g
        }
        o.prototype._parseHex = function (c, f, g) {
            this.length = Math.ceil((c.length - f) / 6), this.words = new Array(this.length);
            for (var E = 0; E < this.length; E++) this.words[E] = 0;
            var k = 0,
                O = 0,
                C;
            if (g === "be")
                for (E = c.length - 1; E >= f; E -= 2) C = u(c, f, E) << k, this.words[O] |= C & 67108863, k >= 18 ? (k -= 18, O += 1, this.words[O] |= C >>> 26) : k += 8;
            else {
                var A = c.length - f;
                for (E = A % 2 === 0 ? f + 1 : f; E < c.length; E += 2) C = u(c, f, E) << k, this.words[O] |= C & 67108863, k >= 18 ? (k -= 18, O += 1, this.words[O] |= C >>> 26) : k += 8
            }
            this._strip()
        };

        function d(w, c, f, g) {
            for (var E = 0, k = 0, O = Math.min(w.length, f), C = c; C < O; C++) {
                var A = w.charCodeAt(C) - 48;
                E *= g, A >= 49 ? k = A - 49 + 10 : A >= 17 ? k = A - 17 + 10 : k = A, n(A >= 0 && k < g, "Invalid character"), E += k
            }
            return E
        }
        o.prototype._parseBase = function (c, f, g) {
            this.words = [0], this.length = 1;
            for (var E = 0, k = 1; k <= 67108863; k *= f) E++;
            E--, k = k / f | 0;
            for (var O = c.length - g, C = O % E, A = Math.min(O, O - C) + g, y = 0, x = g; x < A; x += E) y = d(c, x, x + E, f), this.imuln(k), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y);
            if (C !== 0) {
                var ee = 1;
                for (y = d(c, x, c.length, f), x = 0; x < C; x++) ee *= f;
                this.imuln(ee), this.words[0] + y < 67108864 ? this.words[0] += y : this._iaddn(y)
            }
            this._strip()
        }, o.prototype.copy = function (c) {
            c.words = new Array(this.length);
            for (var f = 0; f < this.length; f++) c.words[f] = this.words[f];
            c.length = this.length, c.negative = this.negative, c.red = this.red
        };

        function l(w, c) {
            w.words = c.words, w.length = c.length, w.negative = c.negative, w.red = c.red
        }
        if (o.prototype._move = function (c) {
                l(c, this)
            }, o.prototype.clone = function () {
                var c = new o(null);
                return this.copy(c), c
            }, o.prototype._expand = function (c) {
                for (; this.length < c;) this.words[this.length++] = 0;
                return this
            }, o.prototype._strip = function () {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, o.prototype._normSign = function () {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = b
        } catch {
            o.prototype.inspect = b
        } else o.prototype.inspect = b;

        function b() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var S = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            m = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            v = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        o.prototype.toString = function (c, f) {
            c = c || 10, f = f | 0 || 1;
            var g;
            if (c === 16 || c === "hex") {
                g = "";
                for (var E = 0, k = 0, O = 0; O < this.length; O++) {
                    var C = this.words[O],
                        A = ((C << E | k) & 16777215).toString(16);
                    k = C >>> 24 - E & 16777215, E += 2, E >= 26 && (E -= 26, O--), k !== 0 || O !== this.length - 1 ? g = S[6 - A.length] + A + g : g = A + g
                }
                for (k !== 0 && (g = k.toString(16) + g); g.length % f !== 0;) g = "0" + g;
                return this.negative !== 0 && (g = "-" + g), g
            }
            if (c === (c | 0) && c >= 2 && c <= 36) {
                var y = m[c],
                    x = v[c];
                g = "";
                var ee = this.clone();
                for (ee.negative = 0; !ee.isZero();) {
                    var J = ee.modrn(x).toString(c);
                    ee = ee.idivn(x), ee.isZero() ? g = J + g : g = S[y - J.length] + J + g
                }
                for (this.isZero() && (g = "0" + g); g.length % f !== 0;) g = "0" + g;
                return this.negative !== 0 && (g = "-" + g), g
            }
            n(!1, "Base should be between 2 and 36")
        }, o.prototype.toNumber = function () {
            var c = this.words[0];
            return this.length === 2 ? c += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? c += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -c : c
        }, o.prototype.toJSON = function () {
            return this.toString(16, 2)
        }, s && (o.prototype.toBuffer = function (c, f) {
            return this.toArrayLike(s, c, f)
        }), o.prototype.toArray = function (c, f) {
            return this.toArrayLike(Array, c, f)
        };
        var T = function (c, f) {
            return c.allocUnsafe ? c.allocUnsafe(f) : new c(f)
        };
        o.prototype.toArrayLike = function (c, f, g) {
            this._strip();
            var E = this.byteLength(),
                k = g || Math.max(1, E);
            n(E <= k, "byte array longer than desired length"), n(k > 0, "Requested array length <= 0");
            var O = T(c, k),
                C = f === "le" ? "LE" : "BE";
            return this["_toArrayLike" + C](O, E), O
        }, o.prototype._toArrayLikeLE = function (c, f) {
            for (var g = 0, E = 0, k = 0, O = 0; k < this.length; k++) {
                var C = this.words[k] << O | E;
                c[g++] = C & 255, g < c.length && (c[g++] = C >> 8 & 255), g < c.length && (c[g++] = C >> 16 & 255), O === 6 ? (g < c.length && (c[g++] = C >> 24 & 255), E = 0, O = 0) : (E = C >>> 24, O += 2)
            }
            if (g < c.length)
                for (c[g++] = E; g < c.length;) c[g++] = 0
        }, o.prototype._toArrayLikeBE = function (c, f) {
            for (var g = c.length - 1, E = 0, k = 0, O = 0; k < this.length; k++) {
                var C = this.words[k] << O | E;
                c[g--] = C & 255, g >= 0 && (c[g--] = C >> 8 & 255), g >= 0 && (c[g--] = C >> 16 & 255), O === 6 ? (g >= 0 && (c[g--] = C >> 24 & 255), E = 0, O = 0) : (E = C >>> 24, O += 2)
            }
            if (g >= 0)
                for (c[g--] = E; g >= 0;) c[g--] = 0
        }, Math.clz32 ? o.prototype._countBits = function (c) {
            return 32 - Math.clz32(c)
        } : o.prototype._countBits = function (c) {
            var f = c,
                g = 0;
            return f >= 4096 && (g += 13, f >>>= 13), f >= 64 && (g += 7, f >>>= 7), f >= 8 && (g += 4, f >>>= 4), f >= 2 && (g += 2, f >>>= 2), g + f
        }, o.prototype._zeroBits = function (c) {
            if (c === 0) return 26;
            var f = c,
                g = 0;
            return f & 8191 || (g += 13, f >>>= 13), f & 127 || (g += 7, f >>>= 7), f & 15 || (g += 4, f >>>= 4), f & 3 || (g += 2, f >>>= 2), f & 1 || g++, g
        }, o.prototype.bitLength = function () {
            var c = this.words[this.length - 1],
                f = this._countBits(c);
            return (this.length - 1) * 26 + f
        };

        function R(w) {
            for (var c = new Array(w.bitLength()), f = 0; f < c.length; f++) {
                var g = f / 26 | 0,
                    E = f % 26;
                c[f] = w.words[g] >>> E & 1
            }
            return c
        }
        o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var c = 0, f = 0; f < this.length; f++) {
                var g = this._zeroBits(this.words[f]);
                if (c += g, g !== 26) break
            }
            return c
        }, o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8)
        }, o.prototype.toTwos = function (c) {
            return this.negative !== 0 ? this.abs().inotn(c).iaddn(1) : this.clone()
        }, o.prototype.fromTwos = function (c) {
            return this.testn(c - 1) ? this.notn(c).iaddn(1).ineg() : this.clone()
        }, o.prototype.isNeg = function () {
            return this.negative !== 0
        }, o.prototype.neg = function () {
            return this.clone().ineg()
        }, o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this
        }, o.prototype.iuor = function (c) {
            for (; this.length < c.length;) this.words[this.length++] = 0;
            for (var f = 0; f < c.length; f++) this.words[f] = this.words[f] | c.words[f];
            return this._strip()
        }, o.prototype.ior = function (c) {
            return n((this.negative | c.negative) === 0), this.iuor(c)
        }, o.prototype.or = function (c) {
            return this.length > c.length ? this.clone().ior(c) : c.clone().ior(this)
        }, o.prototype.uor = function (c) {
            return this.length > c.length ? this.clone().iuor(c) : c.clone().iuor(this)
        }, o.prototype.iuand = function (c) {
            var f;
            this.length > c.length ? f = c : f = this;
            for (var g = 0; g < f.length; g++) this.words[g] = this.words[g] & c.words[g];
            return this.length = f.length, this._strip()
        }, o.prototype.iand = function (c) {
            return n((this.negative | c.negative) === 0), this.iuand(c)
        }, o.prototype.and = function (c) {
            return this.length > c.length ? this.clone().iand(c) : c.clone().iand(this)
        }, o.prototype.uand = function (c) {
            return this.length > c.length ? this.clone().iuand(c) : c.clone().iuand(this)
        }, o.prototype.iuxor = function (c) {
            var f, g;
            this.length > c.length ? (f = this, g = c) : (f = c, g = this);
            for (var E = 0; E < g.length; E++) this.words[E] = f.words[E] ^ g.words[E];
            if (this !== f)
                for (; E < f.length; E++) this.words[E] = f.words[E];
            return this.length = f.length, this._strip()
        }, o.prototype.ixor = function (c) {
            return n((this.negative | c.negative) === 0), this.iuxor(c)
        }, o.prototype.xor = function (c) {
            return this.length > c.length ? this.clone().ixor(c) : c.clone().ixor(this)
        }, o.prototype.uxor = function (c) {
            return this.length > c.length ? this.clone().iuxor(c) : c.clone().iuxor(this)
        }, o.prototype.inotn = function (c) {
            n(typeof c == "number" && c >= 0);
            var f = Math.ceil(c / 26) | 0,
                g = c % 26;
            this._expand(f), g > 0 && f--;
            for (var E = 0; E < f; E++) this.words[E] = ~this.words[E] & 67108863;
            return g > 0 && (this.words[E] = ~this.words[E] & 67108863 >> 26 - g), this._strip()
        }, o.prototype.notn = function (c) {
            return this.clone().inotn(c)
        }, o.prototype.setn = function (c, f) {
            n(typeof c == "number" && c >= 0);
            var g = c / 26 | 0,
                E = c % 26;
            return this._expand(g + 1), f ? this.words[g] = this.words[g] | 1 << E : this.words[g] = this.words[g] & ~(1 << E), this._strip()
        }, o.prototype.iadd = function (c) {
            var f;
            if (this.negative !== 0 && c.negative === 0) return this.negative = 0, f = this.isub(c), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && c.negative !== 0) return c.negative = 0, f = this.isub(c), c.negative = 1, f._normSign();
            var g, E;
            this.length > c.length ? (g = this, E = c) : (g = c, E = this);
            for (var k = 0, O = 0; O < E.length; O++) f = (g.words[O] | 0) + (E.words[O] | 0) + k, this.words[O] = f & 67108863, k = f >>> 26;
            for (; k !== 0 && O < g.length; O++) f = (g.words[O] | 0) + k, this.words[O] = f & 67108863, k = f >>> 26;
            if (this.length = g.length, k !== 0) this.words[this.length] = k, this.length++;
            else if (g !== this)
                for (; O < g.length; O++) this.words[O] = g.words[O];
            return this
        }, o.prototype.add = function (c) {
            var f;
            return c.negative !== 0 && this.negative === 0 ? (c.negative = 0, f = this.sub(c), c.negative ^= 1, f) : c.negative === 0 && this.negative !== 0 ? (this.negative = 0, f = c.sub(this), this.negative = 1, f) : this.length > c.length ? this.clone().iadd(c) : c.clone().iadd(this)
        }, o.prototype.isub = function (c) {
            if (c.negative !== 0) {
                c.negative = 0;
                var f = this.iadd(c);
                return c.negative = 1, f._normSign()
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(c), this.negative = 1, this._normSign();
            var g = this.cmp(c);
            if (g === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var E, k;
            g > 0 ? (E = this, k = c) : (E = c, k = this);
            for (var O = 0, C = 0; C < k.length; C++) f = (E.words[C] | 0) - (k.words[C] | 0) + O, O = f >> 26, this.words[C] = f & 67108863;
            for (; O !== 0 && C < E.length; C++) f = (E.words[C] | 0) + O, O = f >> 26, this.words[C] = f & 67108863;
            if (O === 0 && C < E.length && E !== this)
                for (; C < E.length; C++) this.words[C] = E.words[C];
            return this.length = Math.max(this.length, C), E !== this && (this.negative = 1), this._strip()
        }, o.prototype.sub = function (c) {
            return this.clone().isub(c)
        };

        function N(w, c, f) {
            f.negative = c.negative ^ w.negative;
            var g = w.length + c.length | 0;
            f.length = g, g = g - 1 | 0;
            var E = w.words[0] | 0,
                k = c.words[0] | 0,
                O = E * k,
                C = O & 67108863,
                A = O / 67108864 | 0;
            f.words[0] = C;
            for (var y = 1; y < g; y++) {
                for (var x = A >>> 26, ee = A & 67108863, J = Math.min(y, c.length - 1), ue = Math.max(0, y - w.length + 1); ue <= J; ue++) {
                    var Fe = y - ue | 0;
                    E = w.words[Fe] | 0, k = c.words[ue] | 0, O = E * k + ee, x += O / 67108864 | 0, ee = O & 67108863
                }
                f.words[y] = ee | 0, A = x | 0
            }
            return A !== 0 ? f.words[y] = A | 0 : f.length--, f._strip()
        }
        var $ = function (c, f, g) {
            var E = c.words,
                k = f.words,
                O = g.words,
                C = 0,
                A, y, x, ee = E[0] | 0,
                J = ee & 8191,
                ue = ee >>> 13,
                Fe = E[1] | 0,
                Re = Fe & 8191,
                ke = Fe >>> 13,
                Rn = E[2] | 0,
                Se = Rn & 8191,
                Ke = Rn >>> 13,
                ei = E[3] | 0,
                Ye = ei & 8191,
                Ve = ei >>> 13,
                An = E[4] | 0,
                Le = An & 8191,
                Xe = An >>> 13,
                Ci = E[5] | 0,
                $e = Ci & 8191,
                Je = Ci >>> 13,
                Bi = E[6] | 0,
                Ge = Bi & 8191,
                He = Bi >>> 13,
                Wt = E[7] | 0,
                We = Wt & 8191,
                Qe = Wt >>> 13,
                on = E[8] | 0,
                et = on & 8191,
                _ = on >>> 13,
                h = E[9] | 0,
                p = h & 8191,
                I = h >>> 13,
                B = k[0] | 0,
                F = B & 8191,
                V = B >>> 13,
                ge = k[1] | 0,
                ye = ge & 8191,
                pe = ge >>> 13,
                ze = k[2] | 0,
                fe = ze & 8191,
                at = ze >>> 13,
                dc = k[3] | 0,
                ct = dc & 8191,
                ut = dc >>> 13,
                fc = k[4] | 0,
                lt = fc & 8191,
                dt = fc >>> 13,
                hc = k[5] | 0,
                ft = hc & 8191,
                ht = hc >>> 13,
                pc = k[6] | 0,
                pt = pc & 8191,
                yt = pc >>> 13,
                yc = k[7] | 0,
                mt = yc & 8191,
                gt = yc >>> 13,
                mc = k[8] | 0,
                wt = mc & 8191,
                bt = mc >>> 13,
                gc = k[9] | 0,
                _t = gc & 8191,
                Et = gc >>> 13;
            g.negative = c.negative ^ f.negative, g.length = 19, A = Math.imul(J, F), y = Math.imul(J, V), y = y + Math.imul(ue, F) | 0, x = Math.imul(ue, V);
            var Go = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (Go >>> 26) | 0, Go &= 67108863, A = Math.imul(Re, F), y = Math.imul(Re, V), y = y + Math.imul(ke, F) | 0, x = Math.imul(ke, V), A = A + Math.imul(J, ye) | 0, y = y + Math.imul(J, pe) | 0, y = y + Math.imul(ue, ye) | 0, x = x + Math.imul(ue, pe) | 0;
            var jo = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (jo >>> 26) | 0, jo &= 67108863, A = Math.imul(Se, F), y = Math.imul(Se, V), y = y + Math.imul(Ke, F) | 0, x = Math.imul(Ke, V), A = A + Math.imul(Re, ye) | 0, y = y + Math.imul(Re, pe) | 0, y = y + Math.imul(ke, ye) | 0, x = x + Math.imul(ke, pe) | 0, A = A + Math.imul(J, fe) | 0, y = y + Math.imul(J, at) | 0, y = y + Math.imul(ue, fe) | 0, x = x + Math.imul(ue, at) | 0;
            var Zo = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (Zo >>> 26) | 0, Zo &= 67108863, A = Math.imul(Ye, F), y = Math.imul(Ye, V), y = y + Math.imul(Ve, F) | 0, x = Math.imul(Ve, V), A = A + Math.imul(Se, ye) | 0, y = y + Math.imul(Se, pe) | 0, y = y + Math.imul(Ke, ye) | 0, x = x + Math.imul(Ke, pe) | 0, A = A + Math.imul(Re, fe) | 0, y = y + Math.imul(Re, at) | 0, y = y + Math.imul(ke, fe) | 0, x = x + Math.imul(ke, at) | 0, A = A + Math.imul(J, ct) | 0, y = y + Math.imul(J, ut) | 0, y = y + Math.imul(ue, ct) | 0, x = x + Math.imul(ue, ut) | 0;
            var Yo = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (Yo >>> 26) | 0, Yo &= 67108863, A = Math.imul(Le, F), y = Math.imul(Le, V), y = y + Math.imul(Xe, F) | 0, x = Math.imul(Xe, V), A = A + Math.imul(Ye, ye) | 0, y = y + Math.imul(Ye, pe) | 0, y = y + Math.imul(Ve, ye) | 0, x = x + Math.imul(Ve, pe) | 0, A = A + Math.imul(Se, fe) | 0, y = y + Math.imul(Se, at) | 0, y = y + Math.imul(Ke, fe) | 0, x = x + Math.imul(Ke, at) | 0, A = A + Math.imul(Re, ct) | 0, y = y + Math.imul(Re, ut) | 0, y = y + Math.imul(ke, ct) | 0, x = x + Math.imul(ke, ut) | 0, A = A + Math.imul(J, lt) | 0, y = y + Math.imul(J, dt) | 0, y = y + Math.imul(ue, lt) | 0, x = x + Math.imul(ue, dt) | 0;
            var Xo = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (Xo >>> 26) | 0, Xo &= 67108863, A = Math.imul($e, F), y = Math.imul($e, V), y = y + Math.imul(Je, F) | 0, x = Math.imul(Je, V), A = A + Math.imul(Le, ye) | 0, y = y + Math.imul(Le, pe) | 0, y = y + Math.imul(Xe, ye) | 0, x = x + Math.imul(Xe, pe) | 0, A = A + Math.imul(Ye, fe) | 0, y = y + Math.imul(Ye, at) | 0, y = y + Math.imul(Ve, fe) | 0, x = x + Math.imul(Ve, at) | 0, A = A + Math.imul(Se, ct) | 0, y = y + Math.imul(Se, ut) | 0, y = y + Math.imul(Ke, ct) | 0, x = x + Math.imul(Ke, ut) | 0, A = A + Math.imul(Re, lt) | 0, y = y + Math.imul(Re, dt) | 0, y = y + Math.imul(ke, lt) | 0, x = x + Math.imul(ke, dt) | 0, A = A + Math.imul(J, ft) | 0, y = y + Math.imul(J, ht) | 0, y = y + Math.imul(ue, ft) | 0, x = x + Math.imul(ue, ht) | 0;
            var Jo = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (Jo >>> 26) | 0, Jo &= 67108863, A = Math.imul(Ge, F), y = Math.imul(Ge, V), y = y + Math.imul(He, F) | 0, x = Math.imul(He, V), A = A + Math.imul($e, ye) | 0, y = y + Math.imul($e, pe) | 0, y = y + Math.imul(Je, ye) | 0, x = x + Math.imul(Je, pe) | 0, A = A + Math.imul(Le, fe) | 0, y = y + Math.imul(Le, at) | 0, y = y + Math.imul(Xe, fe) | 0, x = x + Math.imul(Xe, at) | 0, A = A + Math.imul(Ye, ct) | 0, y = y + Math.imul(Ye, ut) | 0, y = y + Math.imul(Ve, ct) | 0, x = x + Math.imul(Ve, ut) | 0, A = A + Math.imul(Se, lt) | 0, y = y + Math.imul(Se, dt) | 0, y = y + Math.imul(Ke, lt) | 0, x = x + Math.imul(Ke, dt) | 0, A = A + Math.imul(Re, ft) | 0, y = y + Math.imul(Re, ht) | 0, y = y + Math.imul(ke, ft) | 0, x = x + Math.imul(ke, ht) | 0, A = A + Math.imul(J, pt) | 0, y = y + Math.imul(J, yt) | 0, y = y + Math.imul(ue, pt) | 0, x = x + Math.imul(ue, yt) | 0;
            var Qo = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (Qo >>> 26) | 0, Qo &= 67108863, A = Math.imul(We, F), y = Math.imul(We, V), y = y + Math.imul(Qe, F) | 0, x = Math.imul(Qe, V), A = A + Math.imul(Ge, ye) | 0, y = y + Math.imul(Ge, pe) | 0, y = y + Math.imul(He, ye) | 0, x = x + Math.imul(He, pe) | 0, A = A + Math.imul($e, fe) | 0, y = y + Math.imul($e, at) | 0, y = y + Math.imul(Je, fe) | 0, x = x + Math.imul(Je, at) | 0, A = A + Math.imul(Le, ct) | 0, y = y + Math.imul(Le, ut) | 0, y = y + Math.imul(Xe, ct) | 0, x = x + Math.imul(Xe, ut) | 0, A = A + Math.imul(Ye, lt) | 0, y = y + Math.imul(Ye, dt) | 0, y = y + Math.imul(Ve, lt) | 0, x = x + Math.imul(Ve, dt) | 0, A = A + Math.imul(Se, ft) | 0, y = y + Math.imul(Se, ht) | 0, y = y + Math.imul(Ke, ft) | 0, x = x + Math.imul(Ke, ht) | 0, A = A + Math.imul(Re, pt) | 0, y = y + Math.imul(Re, yt) | 0, y = y + Math.imul(ke, pt) | 0, x = x + Math.imul(ke, yt) | 0, A = A + Math.imul(J, mt) | 0, y = y + Math.imul(J, gt) | 0, y = y + Math.imul(ue, mt) | 0, x = x + Math.imul(ue, gt) | 0;
            var es = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (es >>> 26) | 0, es &= 67108863, A = Math.imul(et, F), y = Math.imul(et, V), y = y + Math.imul(_, F) | 0, x = Math.imul(_, V), A = A + Math.imul(We, ye) | 0, y = y + Math.imul(We, pe) | 0, y = y + Math.imul(Qe, ye) | 0, x = x + Math.imul(Qe, pe) | 0, A = A + Math.imul(Ge, fe) | 0, y = y + Math.imul(Ge, at) | 0, y = y + Math.imul(He, fe) | 0, x = x + Math.imul(He, at) | 0, A = A + Math.imul($e, ct) | 0, y = y + Math.imul($e, ut) | 0, y = y + Math.imul(Je, ct) | 0, x = x + Math.imul(Je, ut) | 0, A = A + Math.imul(Le, lt) | 0, y = y + Math.imul(Le, dt) | 0, y = y + Math.imul(Xe, lt) | 0, x = x + Math.imul(Xe, dt) | 0, A = A + Math.imul(Ye, ft) | 0, y = y + Math.imul(Ye, ht) | 0, y = y + Math.imul(Ve, ft) | 0, x = x + Math.imul(Ve, ht) | 0, A = A + Math.imul(Se, pt) | 0, y = y + Math.imul(Se, yt) | 0, y = y + Math.imul(Ke, pt) | 0, x = x + Math.imul(Ke, yt) | 0, A = A + Math.imul(Re, mt) | 0, y = y + Math.imul(Re, gt) | 0, y = y + Math.imul(ke, mt) | 0, x = x + Math.imul(ke, gt) | 0, A = A + Math.imul(J, wt) | 0, y = y + Math.imul(J, bt) | 0, y = y + Math.imul(ue, wt) | 0, x = x + Math.imul(ue, bt) | 0;
            var ts = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (ts >>> 26) | 0, ts &= 67108863, A = Math.imul(p, F), y = Math.imul(p, V), y = y + Math.imul(I, F) | 0, x = Math.imul(I, V), A = A + Math.imul(et, ye) | 0, y = y + Math.imul(et, pe) | 0, y = y + Math.imul(_, ye) | 0, x = x + Math.imul(_, pe) | 0, A = A + Math.imul(We, fe) | 0, y = y + Math.imul(We, at) | 0, y = y + Math.imul(Qe, fe) | 0, x = x + Math.imul(Qe, at) | 0, A = A + Math.imul(Ge, ct) | 0, y = y + Math.imul(Ge, ut) | 0, y = y + Math.imul(He, ct) | 0, x = x + Math.imul(He, ut) | 0, A = A + Math.imul($e, lt) | 0, y = y + Math.imul($e, dt) | 0, y = y + Math.imul(Je, lt) | 0, x = x + Math.imul(Je, dt) | 0, A = A + Math.imul(Le, ft) | 0, y = y + Math.imul(Le, ht) | 0, y = y + Math.imul(Xe, ft) | 0, x = x + Math.imul(Xe, ht) | 0, A = A + Math.imul(Ye, pt) | 0, y = y + Math.imul(Ye, yt) | 0, y = y + Math.imul(Ve, pt) | 0, x = x + Math.imul(Ve, yt) | 0, A = A + Math.imul(Se, mt) | 0, y = y + Math.imul(Se, gt) | 0, y = y + Math.imul(Ke, mt) | 0, x = x + Math.imul(Ke, gt) | 0, A = A + Math.imul(Re, wt) | 0, y = y + Math.imul(Re, bt) | 0, y = y + Math.imul(ke, wt) | 0, x = x + Math.imul(ke, bt) | 0, A = A + Math.imul(J, _t) | 0, y = y + Math.imul(J, Et) | 0, y = y + Math.imul(ue, _t) | 0, x = x + Math.imul(ue, Et) | 0;
            var ns = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (ns >>> 26) | 0, ns &= 67108863, A = Math.imul(p, ye), y = Math.imul(p, pe), y = y + Math.imul(I, ye) | 0, x = Math.imul(I, pe), A = A + Math.imul(et, fe) | 0, y = y + Math.imul(et, at) | 0, y = y + Math.imul(_, fe) | 0, x = x + Math.imul(_, at) | 0, A = A + Math.imul(We, ct) | 0, y = y + Math.imul(We, ut) | 0, y = y + Math.imul(Qe, ct) | 0, x = x + Math.imul(Qe, ut) | 0, A = A + Math.imul(Ge, lt) | 0, y = y + Math.imul(Ge, dt) | 0, y = y + Math.imul(He, lt) | 0, x = x + Math.imul(He, dt) | 0, A = A + Math.imul($e, ft) | 0, y = y + Math.imul($e, ht) | 0, y = y + Math.imul(Je, ft) | 0, x = x + Math.imul(Je, ht) | 0, A = A + Math.imul(Le, pt) | 0, y = y + Math.imul(Le, yt) | 0, y = y + Math.imul(Xe, pt) | 0, x = x + Math.imul(Xe, yt) | 0, A = A + Math.imul(Ye, mt) | 0, y = y + Math.imul(Ye, gt) | 0, y = y + Math.imul(Ve, mt) | 0, x = x + Math.imul(Ve, gt) | 0, A = A + Math.imul(Se, wt) | 0, y = y + Math.imul(Se, bt) | 0, y = y + Math.imul(Ke, wt) | 0, x = x + Math.imul(Ke, bt) | 0, A = A + Math.imul(Re, _t) | 0, y = y + Math.imul(Re, Et) | 0, y = y + Math.imul(ke, _t) | 0, x = x + Math.imul(ke, Et) | 0;
            var rs = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (rs >>> 26) | 0, rs &= 67108863, A = Math.imul(p, fe), y = Math.imul(p, at), y = y + Math.imul(I, fe) | 0, x = Math.imul(I, at), A = A + Math.imul(et, ct) | 0, y = y + Math.imul(et, ut) | 0, y = y + Math.imul(_, ct) | 0, x = x + Math.imul(_, ut) | 0, A = A + Math.imul(We, lt) | 0, y = y + Math.imul(We, dt) | 0, y = y + Math.imul(Qe, lt) | 0, x = x + Math.imul(Qe, dt) | 0, A = A + Math.imul(Ge, ft) | 0, y = y + Math.imul(Ge, ht) | 0, y = y + Math.imul(He, ft) | 0, x = x + Math.imul(He, ht) | 0, A = A + Math.imul($e, pt) | 0, y = y + Math.imul($e, yt) | 0, y = y + Math.imul(Je, pt) | 0, x = x + Math.imul(Je, yt) | 0, A = A + Math.imul(Le, mt) | 0, y = y + Math.imul(Le, gt) | 0, y = y + Math.imul(Xe, mt) | 0, x = x + Math.imul(Xe, gt) | 0, A = A + Math.imul(Ye, wt) | 0, y = y + Math.imul(Ye, bt) | 0, y = y + Math.imul(Ve, wt) | 0, x = x + Math.imul(Ve, bt) | 0, A = A + Math.imul(Se, _t) | 0, y = y + Math.imul(Se, Et) | 0, y = y + Math.imul(Ke, _t) | 0, x = x + Math.imul(Ke, Et) | 0;
            var is = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (is >>> 26) | 0, is &= 67108863, A = Math.imul(p, ct), y = Math.imul(p, ut), y = y + Math.imul(I, ct) | 0, x = Math.imul(I, ut), A = A + Math.imul(et, lt) | 0, y = y + Math.imul(et, dt) | 0, y = y + Math.imul(_, lt) | 0, x = x + Math.imul(_, dt) | 0, A = A + Math.imul(We, ft) | 0, y = y + Math.imul(We, ht) | 0, y = y + Math.imul(Qe, ft) | 0, x = x + Math.imul(Qe, ht) | 0, A = A + Math.imul(Ge, pt) | 0, y = y + Math.imul(Ge, yt) | 0, y = y + Math.imul(He, pt) | 0, x = x + Math.imul(He, yt) | 0, A = A + Math.imul($e, mt) | 0, y = y + Math.imul($e, gt) | 0, y = y + Math.imul(Je, mt) | 0, x = x + Math.imul(Je, gt) | 0, A = A + Math.imul(Le, wt) | 0, y = y + Math.imul(Le, bt) | 0, y = y + Math.imul(Xe, wt) | 0, x = x + Math.imul(Xe, bt) | 0, A = A + Math.imul(Ye, _t) | 0, y = y + Math.imul(Ye, Et) | 0, y = y + Math.imul(Ve, _t) | 0, x = x + Math.imul(Ve, Et) | 0;
            var os = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (os >>> 26) | 0, os &= 67108863, A = Math.imul(p, lt), y = Math.imul(p, dt), y = y + Math.imul(I, lt) | 0, x = Math.imul(I, dt), A = A + Math.imul(et, ft) | 0, y = y + Math.imul(et, ht) | 0, y = y + Math.imul(_, ft) | 0, x = x + Math.imul(_, ht) | 0, A = A + Math.imul(We, pt) | 0, y = y + Math.imul(We, yt) | 0, y = y + Math.imul(Qe, pt) | 0, x = x + Math.imul(Qe, yt) | 0, A = A + Math.imul(Ge, mt) | 0, y = y + Math.imul(Ge, gt) | 0, y = y + Math.imul(He, mt) | 0, x = x + Math.imul(He, gt) | 0, A = A + Math.imul($e, wt) | 0, y = y + Math.imul($e, bt) | 0, y = y + Math.imul(Je, wt) | 0, x = x + Math.imul(Je, bt) | 0, A = A + Math.imul(Le, _t) | 0, y = y + Math.imul(Le, Et) | 0, y = y + Math.imul(Xe, _t) | 0, x = x + Math.imul(Xe, Et) | 0;
            var ss = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (ss >>> 26) | 0, ss &= 67108863, A = Math.imul(p, ft), y = Math.imul(p, ht), y = y + Math.imul(I, ft) | 0, x = Math.imul(I, ht), A = A + Math.imul(et, pt) | 0, y = y + Math.imul(et, yt) | 0, y = y + Math.imul(_, pt) | 0, x = x + Math.imul(_, yt) | 0, A = A + Math.imul(We, mt) | 0, y = y + Math.imul(We, gt) | 0, y = y + Math.imul(Qe, mt) | 0, x = x + Math.imul(Qe, gt) | 0, A = A + Math.imul(Ge, wt) | 0, y = y + Math.imul(Ge, bt) | 0, y = y + Math.imul(He, wt) | 0, x = x + Math.imul(He, bt) | 0, A = A + Math.imul($e, _t) | 0, y = y + Math.imul($e, Et) | 0, y = y + Math.imul(Je, _t) | 0, x = x + Math.imul(Je, Et) | 0;
            var as = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (as >>> 26) | 0, as &= 67108863, A = Math.imul(p, pt), y = Math.imul(p, yt), y = y + Math.imul(I, pt) | 0, x = Math.imul(I, yt), A = A + Math.imul(et, mt) | 0, y = y + Math.imul(et, gt) | 0, y = y + Math.imul(_, mt) | 0, x = x + Math.imul(_, gt) | 0, A = A + Math.imul(We, wt) | 0, y = y + Math.imul(We, bt) | 0, y = y + Math.imul(Qe, wt) | 0, x = x + Math.imul(Qe, bt) | 0, A = A + Math.imul(Ge, _t) | 0, y = y + Math.imul(Ge, Et) | 0, y = y + Math.imul(He, _t) | 0, x = x + Math.imul(He, Et) | 0;
            var cs = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (cs >>> 26) | 0, cs &= 67108863, A = Math.imul(p, mt), y = Math.imul(p, gt), y = y + Math.imul(I, mt) | 0, x = Math.imul(I, gt), A = A + Math.imul(et, wt) | 0, y = y + Math.imul(et, bt) | 0, y = y + Math.imul(_, wt) | 0, x = x + Math.imul(_, bt) | 0, A = A + Math.imul(We, _t) | 0, y = y + Math.imul(We, Et) | 0, y = y + Math.imul(Qe, _t) | 0, x = x + Math.imul(Qe, Et) | 0;
            var us = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (us >>> 26) | 0, us &= 67108863, A = Math.imul(p, wt), y = Math.imul(p, bt), y = y + Math.imul(I, wt) | 0, x = Math.imul(I, bt), A = A + Math.imul(et, _t) | 0, y = y + Math.imul(et, Et) | 0, y = y + Math.imul(_, _t) | 0, x = x + Math.imul(_, Et) | 0;
            var ls = (C + A | 0) + ((y & 8191) << 13) | 0;
            C = (x + (y >>> 13) | 0) + (ls >>> 26) | 0, ls &= 67108863, A = Math.imul(p, _t), y = Math.imul(p, Et), y = y + Math.imul(I, _t) | 0, x = Math.imul(I, Et);
            var ds = (C + A | 0) + ((y & 8191) << 13) | 0;
            return C = (x + (y >>> 13) | 0) + (ds >>> 26) | 0, ds &= 67108863, O[0] = Go, O[1] = jo, O[2] = Zo, O[3] = Yo, O[4] = Xo, O[5] = Jo, O[6] = Qo, O[7] = es, O[8] = ts, O[9] = ns, O[10] = rs, O[11] = is, O[12] = os, O[13] = ss, O[14] = as, O[15] = cs, O[16] = us, O[17] = ls, O[18] = ds, C !== 0 && (O[19] = C, g.length++), g
        };
        Math.imul || ($ = N);

        function P(w, c, f) {
            f.negative = c.negative ^ w.negative, f.length = w.length + c.length;
            for (var g = 0, E = 0, k = 0; k < f.length - 1; k++) {
                var O = E;
                E = 0;
                for (var C = g & 67108863, A = Math.min(k, c.length - 1), y = Math.max(0, k - w.length + 1); y <= A; y++) {
                    var x = k - y,
                        ee = w.words[x] | 0,
                        J = c.words[y] | 0,
                        ue = ee * J,
                        Fe = ue & 67108863;
                    O = O + (ue / 67108864 | 0) | 0, Fe = Fe + C | 0, C = Fe & 67108863, O = O + (Fe >>> 26) | 0, E += O >>> 26, O &= 67108863
                }
                f.words[k] = C, g = O, O = E
            }
            return g !== 0 ? f.words[k] = g : f.length--, f._strip()
        }

        function K(w, c, f) {
            return P(w, c, f)
        }
        o.prototype.mulTo = function (c, f) {
            var g, E = this.length + c.length;
            return this.length === 10 && c.length === 10 ? g = $(this, c, f) : E < 63 ? g = N(this, c, f) : E < 1024 ? g = P(this, c, f) : g = K(this, c, f), g
        }, o.prototype.mul = function (c) {
            var f = new o(null);
            return f.words = new Array(this.length + c.length), this.mulTo(c, f)
        }, o.prototype.mulf = function (c) {
            var f = new o(null);
            return f.words = new Array(this.length + c.length), K(this, c, f)
        }, o.prototype.imul = function (c) {
            return this.clone().mulTo(c, this)
        }, o.prototype.imuln = function (c) {
            var f = c < 0;
            f && (c = -c), n(typeof c == "number"), n(c < 67108864);
            for (var g = 0, E = 0; E < this.length; E++) {
                var k = (this.words[E] | 0) * c,
                    O = (k & 67108863) + (g & 67108863);
                g >>= 26, g += k / 67108864 | 0, g += O >>> 26, this.words[E] = O & 67108863
            }
            return g !== 0 && (this.words[E] = g, this.length++), this.length = c === 0 ? 1 : this.length, f ? this.ineg() : this
        }, o.prototype.muln = function (c) {
            return this.clone().imuln(c)
        }, o.prototype.sqr = function () {
            return this.mul(this)
        }, o.prototype.isqr = function () {
            return this.imul(this.clone())
        }, o.prototype.pow = function (c) {
            var f = R(c);
            if (f.length === 0) return new o(1);
            for (var g = this, E = 0; E < f.length && f[E] === 0; E++, g = g.sqr());
            if (++E < f.length)
                for (var k = g.sqr(); E < f.length; E++, k = k.sqr()) f[E] !== 0 && (g = g.mul(k));
            return g
        }, o.prototype.iushln = function (c) {
            n(typeof c == "number" && c >= 0);
            var f = c % 26,
                g = (c - f) / 26,
                E = 67108863 >>> 26 - f << 26 - f,
                k;
            if (f !== 0) {
                var O = 0;
                for (k = 0; k < this.length; k++) {
                    var C = this.words[k] & E,
                        A = (this.words[k] | 0) - C << f;
                    this.words[k] = A | O, O = C >>> 26 - f
                }
                O && (this.words[k] = O, this.length++)
            }
            if (g !== 0) {
                for (k = this.length - 1; k >= 0; k--) this.words[k + g] = this.words[k];
                for (k = 0; k < g; k++) this.words[k] = 0;
                this.length += g
            }
            return this._strip()
        }, o.prototype.ishln = function (c) {
            return n(this.negative === 0), this.iushln(c)
        }, o.prototype.iushrn = function (c, f, g) {
            n(typeof c == "number" && c >= 0);
            var E;
            f ? E = (f - f % 26) / 26 : E = 0;
            var k = c % 26,
                O = Math.min((c - k) / 26, this.length),
                C = 67108863 ^ 67108863 >>> k << k,
                A = g;
            if (E -= O, E = Math.max(0, E), A) {
                for (var y = 0; y < O; y++) A.words[y] = this.words[y];
                A.length = O
            }
            if (O !== 0)
                if (this.length > O)
                    for (this.length -= O, y = 0; y < this.length; y++) this.words[y] = this.words[y + O];
                else this.words[0] = 0, this.length = 1;
            var x = 0;
            for (y = this.length - 1; y >= 0 && (x !== 0 || y >= E); y--) {
                var ee = this.words[y] | 0;
                this.words[y] = x << 26 - k | ee >>> k, x = ee & C
            }
            return A && x !== 0 && (A.words[A.length++] = x), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
        }, o.prototype.ishrn = function (c, f, g) {
            return n(this.negative === 0), this.iushrn(c, f, g)
        }, o.prototype.shln = function (c) {
            return this.clone().ishln(c)
        }, o.prototype.ushln = function (c) {
            return this.clone().iushln(c)
        }, o.prototype.shrn = function (c) {
            return this.clone().ishrn(c)
        }, o.prototype.ushrn = function (c) {
            return this.clone().iushrn(c)
        }, o.prototype.testn = function (c) {
            n(typeof c == "number" && c >= 0);
            var f = c % 26,
                g = (c - f) / 26,
                E = 1 << f;
            if (this.length <= g) return !1;
            var k = this.words[g];
            return !!(k & E)
        }, o.prototype.imaskn = function (c) {
            n(typeof c == "number" && c >= 0);
            var f = c % 26,
                g = (c - f) / 26;
            if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g) return this;
            if (f !== 0 && g++, this.length = Math.min(g, this.length), f !== 0) {
                var E = 67108863 ^ 67108863 >>> f << f;
                this.words[this.length - 1] &= E
            }
            return this._strip()
        }, o.prototype.maskn = function (c) {
            return this.clone().imaskn(c)
        }, o.prototype.iaddn = function (c) {
            return n(typeof c == "number"), n(c < 67108864), c < 0 ? this.isubn(-c) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= c ? (this.words[0] = c - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(c), this.negative = 1, this) : this._iaddn(c)
        }, o.prototype._iaddn = function (c) {
            this.words[0] += c;
            for (var f = 0; f < this.length && this.words[f] >= 67108864; f++) this.words[f] -= 67108864, f === this.length - 1 ? this.words[f + 1] = 1 : this.words[f + 1]++;
            return this.length = Math.max(this.length, f + 1), this
        }, o.prototype.isubn = function (c) {
            if (n(typeof c == "number"), n(c < 67108864), c < 0) return this.iaddn(-c);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(c), this.negative = 1, this;
            if (this.words[0] -= c, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var f = 0; f < this.length && this.words[f] < 0; f++) this.words[f] += 67108864, this.words[f + 1] -= 1;
            return this._strip()
        }, o.prototype.addn = function (c) {
            return this.clone().iaddn(c)
        }, o.prototype.subn = function (c) {
            return this.clone().isubn(c)
        }, o.prototype.iabs = function () {
            return this.negative = 0, this
        }, o.prototype.abs = function () {
            return this.clone().iabs()
        }, o.prototype._ishlnsubmul = function (c, f, g) {
            var E = c.length + g,
                k;
            this._expand(E);
            var O, C = 0;
            for (k = 0; k < c.length; k++) {
                O = (this.words[k + g] | 0) + C;
                var A = (c.words[k] | 0) * f;
                O -= A & 67108863, C = (O >> 26) - (A / 67108864 | 0), this.words[k + g] = O & 67108863
            }
            for (; k < this.length - g; k++) O = (this.words[k + g] | 0) + C, C = O >> 26, this.words[k + g] = O & 67108863;
            if (C === 0) return this._strip();
            for (n(C === -1), C = 0, k = 0; k < this.length; k++) O = -(this.words[k] | 0) + C, C = O >> 26, this.words[k] = O & 67108863;
            return this.negative = 1, this._strip()
        }, o.prototype._wordDiv = function (c, f) {
            var g = this.length - c.length,
                E = this.clone(),
                k = c,
                O = k.words[k.length - 1] | 0,
                C = this._countBits(O);
            g = 26 - C, g !== 0 && (k = k.ushln(g), E.iushln(g), O = k.words[k.length - 1] | 0);
            var A = E.length - k.length,
                y;
            if (f !== "mod") {
                y = new o(null), y.length = A + 1, y.words = new Array(y.length);
                for (var x = 0; x < y.length; x++) y.words[x] = 0
            }
            var ee = E.clone()._ishlnsubmul(k, 1, A);
            ee.negative === 0 && (E = ee, y && (y.words[A] = 1));
            for (var J = A - 1; J >= 0; J--) {
                var ue = (E.words[k.length + J] | 0) * 67108864 + (E.words[k.length + J - 1] | 0);
                for (ue = Math.min(ue / O | 0, 67108863), E._ishlnsubmul(k, ue, J); E.negative !== 0;) ue--, E.negative = 0, E._ishlnsubmul(k, 1, J), E.isZero() || (E.negative ^= 1);
                y && (y.words[J] = ue)
            }
            return y && y._strip(), E._strip(), f !== "div" && g !== 0 && E.iushrn(g), {
                div: y || null,
                mod: E
            }
        }, o.prototype.divmod = function (c, f, g) {
            if (n(!c.isZero()), this.isZero()) return {
                div: new o(0),
                mod: new o(0)
            };
            var E, k, O;
            return this.negative !== 0 && c.negative === 0 ? (O = this.neg().divmod(c, f), f !== "mod" && (E = O.div.neg()), f !== "div" && (k = O.mod.neg(), g && k.negative !== 0 && k.iadd(c)), {
                div: E,
                mod: k
            }) : this.negative === 0 && c.negative !== 0 ? (O = this.divmod(c.neg(), f), f !== "mod" && (E = O.div.neg()), {
                div: E,
                mod: O.mod
            }) : this.negative & c.negative ? (O = this.neg().divmod(c.neg(), f), f !== "div" && (k = O.mod.neg(), g && k.negative !== 0 && k.isub(c)), {
                div: O.div,
                mod: k
            }) : c.length > this.length || this.cmp(c) < 0 ? {
                div: new o(0),
                mod: this
            } : c.length === 1 ? f === "div" ? {
                div: this.divn(c.words[0]),
                mod: null
            } : f === "mod" ? {
                div: null,
                mod: new o(this.modrn(c.words[0]))
            } : {
                div: this.divn(c.words[0]),
                mod: new o(this.modrn(c.words[0]))
            } : this._wordDiv(c, f)
        }, o.prototype.div = function (c) {
            return this.divmod(c, "div", !1).div
        }, o.prototype.mod = function (c) {
            return this.divmod(c, "mod", !1).mod
        }, o.prototype.umod = function (c) {
            return this.divmod(c, "mod", !0).mod
        }, o.prototype.divRound = function (c) {
            var f = this.divmod(c);
            if (f.mod.isZero()) return f.div;
            var g = f.div.negative !== 0 ? f.mod.isub(c) : f.mod,
                E = c.ushrn(1),
                k = c.andln(1),
                O = g.cmp(E);
            return O < 0 || k === 1 && O === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1)
        }, o.prototype.modrn = function (c) {
            var f = c < 0;
            f && (c = -c), n(c <= 67108863);
            for (var g = (1 << 26) % c, E = 0, k = this.length - 1; k >= 0; k--) E = (g * E + (this.words[k] | 0)) % c;
            return f ? -E : E
        }, o.prototype.modn = function (c) {
            return this.modrn(c)
        }, o.prototype.idivn = function (c) {
            var f = c < 0;
            f && (c = -c), n(c <= 67108863);
            for (var g = 0, E = this.length - 1; E >= 0; E--) {
                var k = (this.words[E] | 0) + g * 67108864;
                this.words[E] = k / c | 0, g = k % c
            }
            return this._strip(), f ? this.ineg() : this
        }, o.prototype.divn = function (c) {
            return this.clone().idivn(c)
        }, o.prototype.egcd = function (c) {
            n(c.negative === 0), n(!c.isZero());
            var f = this,
                g = c.clone();
            f.negative !== 0 ? f = f.umod(c) : f = f.clone();
            for (var E = new o(1), k = new o(0), O = new o(0), C = new o(1), A = 0; f.isEven() && g.isEven();) f.iushrn(1), g.iushrn(1), ++A;
            for (var y = g.clone(), x = f.clone(); !f.isZero();) {
                for (var ee = 0, J = 1; !(f.words[0] & J) && ee < 26; ++ee, J <<= 1);
                if (ee > 0)
                    for (f.iushrn(ee); ee-- > 0;)(E.isOdd() || k.isOdd()) && (E.iadd(y), k.isub(x)), E.iushrn(1), k.iushrn(1);
                for (var ue = 0, Fe = 1; !(g.words[0] & Fe) && ue < 26; ++ue, Fe <<= 1);
                if (ue > 0)
                    for (g.iushrn(ue); ue-- > 0;)(O.isOdd() || C.isOdd()) && (O.iadd(y), C.isub(x)), O.iushrn(1), C.iushrn(1);
                f.cmp(g) >= 0 ? (f.isub(g), E.isub(O), k.isub(C)) : (g.isub(f), O.isub(E), C.isub(k))
            }
            return {
                a: O,
                b: C,
                gcd: g.iushln(A)
            }
        }, o.prototype._invmp = function (c) {
            n(c.negative === 0), n(!c.isZero());
            var f = this,
                g = c.clone();
            f.negative !== 0 ? f = f.umod(c) : f = f.clone();
            for (var E = new o(1), k = new o(0), O = g.clone(); f.cmpn(1) > 0 && g.cmpn(1) > 0;) {
                for (var C = 0, A = 1; !(f.words[0] & A) && C < 26; ++C, A <<= 1);
                if (C > 0)
                    for (f.iushrn(C); C-- > 0;) E.isOdd() && E.iadd(O), E.iushrn(1);
                for (var y = 0, x = 1; !(g.words[0] & x) && y < 26; ++y, x <<= 1);
                if (y > 0)
                    for (g.iushrn(y); y-- > 0;) k.isOdd() && k.iadd(O), k.iushrn(1);
                f.cmp(g) >= 0 ? (f.isub(g), E.isub(k)) : (g.isub(f), k.isub(E))
            }
            var ee;
            return f.cmpn(1) === 0 ? ee = E : ee = k, ee.cmpn(0) < 0 && ee.iadd(c), ee
        }, o.prototype.gcd = function (c) {
            if (this.isZero()) return c.abs();
            if (c.isZero()) return this.abs();
            var f = this.clone(),
                g = c.clone();
            f.negative = 0, g.negative = 0;
            for (var E = 0; f.isEven() && g.isEven(); E++) f.iushrn(1), g.iushrn(1);
            do {
                for (; f.isEven();) f.iushrn(1);
                for (; g.isEven();) g.iushrn(1);
                var k = f.cmp(g);
                if (k < 0) {
                    var O = f;
                    f = g, g = O
                } else if (k === 0 || g.cmpn(1) === 0) break;
                f.isub(g)
            } while (!0);
            return g.iushln(E)
        }, o.prototype.invm = function (c) {
            return this.egcd(c).a.umod(c)
        }, o.prototype.isEven = function () {
            return (this.words[0] & 1) === 0
        }, o.prototype.isOdd = function () {
            return (this.words[0] & 1) === 1
        }, o.prototype.andln = function (c) {
            return this.words[0] & c
        }, o.prototype.bincn = function (c) {
            n(typeof c == "number");
            var f = c % 26,
                g = (c - f) / 26,
                E = 1 << f;
            if (this.length <= g) return this._expand(g + 1), this.words[g] |= E, this;
            for (var k = E, O = g; k !== 0 && O < this.length; O++) {
                var C = this.words[O] | 0;
                C += k, k = C >>> 26, C &= 67108863, this.words[O] = C
            }
            return k !== 0 && (this.words[O] = k, this.length++), this
        }, o.prototype.isZero = function () {
            return this.length === 1 && this.words[0] === 0
        }, o.prototype.cmpn = function (c) {
            var f = c < 0;
            if (this.negative !== 0 && !f) return -1;
            if (this.negative === 0 && f) return 1;
            this._strip();
            var g;
            if (this.length > 1) g = 1;
            else {
                f && (c = -c), n(c <= 67108863, "Number is too big");
                var E = this.words[0] | 0;
                g = E === c ? 0 : E < c ? -1 : 1
            }
            return this.negative !== 0 ? -g | 0 : g
        }, o.prototype.cmp = function (c) {
            if (this.negative !== 0 && c.negative === 0) return -1;
            if (this.negative === 0 && c.negative !== 0) return 1;
            var f = this.ucmp(c);
            return this.negative !== 0 ? -f | 0 : f
        }, o.prototype.ucmp = function (c) {
            if (this.length > c.length) return 1;
            if (this.length < c.length) return -1;
            for (var f = 0, g = this.length - 1; g >= 0; g--) {
                var E = this.words[g] | 0,
                    k = c.words[g] | 0;
                if (E !== k) {
                    E < k ? f = -1 : E > k && (f = 1);
                    break
                }
            }
            return f
        }, o.prototype.gtn = function (c) {
            return this.cmpn(c) === 1
        }, o.prototype.gt = function (c) {
            return this.cmp(c) === 1
        }, o.prototype.gten = function (c) {
            return this.cmpn(c) >= 0
        }, o.prototype.gte = function (c) {
            return this.cmp(c) >= 0
        }, o.prototype.ltn = function (c) {
            return this.cmpn(c) === -1
        }, o.prototype.lt = function (c) {
            return this.cmp(c) === -1
        }, o.prototype.lten = function (c) {
            return this.cmpn(c) <= 0
        }, o.prototype.lte = function (c) {
            return this.cmp(c) <= 0
        }, o.prototype.eqn = function (c) {
            return this.cmpn(c) === 0
        }, o.prototype.eq = function (c) {
            return this.cmp(c) === 0
        }, o.red = function (c) {
            return new M(c)
        }, o.prototype.toRed = function (c) {
            return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), c.convertTo(this)._forceRed(c)
        }, o.prototype.fromRed = function () {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, o.prototype._forceRed = function (c) {
            return this.red = c, this
        }, o.prototype.forceRed = function (c) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(c)
        }, o.prototype.redAdd = function (c) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, c)
        }, o.prototype.redIAdd = function (c) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, c)
        }, o.prototype.redSub = function (c) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, c)
        }, o.prototype.redISub = function (c) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, c)
        }, o.prototype.redShl = function (c) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, c)
        }, o.prototype.redMul = function (c) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.mul(this, c)
        }, o.prototype.redIMul = function (c) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.imul(this, c)
        }, o.prototype.redSqr = function () {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, o.prototype.redISqr = function () {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, o.prototype.redSqrt = function () {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, o.prototype.redInvm = function () {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, o.prototype.redNeg = function () {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, o.prototype.redPow = function (c) {
            return n(this.red && !c.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, c)
        };
        var U = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function Y(w, c) {
            this.name = w, this.p = new o(c, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }
        Y.prototype._tmp = function () {
            var c = new o(null);
            return c.words = new Array(Math.ceil(this.n / 13)), c
        }, Y.prototype.ireduce = function (c) {
            var f = c,
                g;
            do this.split(f, this.tmp), f = this.imulK(f), f = f.iadd(this.tmp), g = f.bitLength(); while (g > this.n);
            var E = g < this.n ? -1 : f.ucmp(this.p);
            return E === 0 ? (f.words[0] = 0, f.length = 1) : E > 0 ? f.isub(this.p) : f.strip !== void 0 ? f.strip() : f._strip(), f
        }, Y.prototype.split = function (c, f) {
            c.iushrn(this.n, 0, f)
        }, Y.prototype.imulK = function (c) {
            return c.imul(this.k)
        };

        function G() {
            Y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        i(G, Y), G.prototype.split = function (c, f) {
            for (var g = 4194303, E = Math.min(c.length, 9), k = 0; k < E; k++) f.words[k] = c.words[k];
            if (f.length = E, c.length <= 9) {
                c.words[0] = 0, c.length = 1;
                return
            }
            var O = c.words[9];
            for (f.words[f.length++] = O & g, k = 10; k < c.length; k++) {
                var C = c.words[k] | 0;
                c.words[k - 10] = (C & g) << 4 | O >>> 22, O = C
            }
            O >>>= 22, c.words[k - 10] = O, O === 0 && c.length > 10 ? c.length -= 10 : c.length -= 9
        }, G.prototype.imulK = function (c) {
            c.words[c.length] = 0, c.words[c.length + 1] = 0, c.length += 2;
            for (var f = 0, g = 0; g < c.length; g++) {
                var E = c.words[g] | 0;
                f += E * 977, c.words[g] = f & 67108863, f = E * 64 + (f / 67108864 | 0)
            }
            return c.words[c.length - 1] === 0 && (c.length--, c.words[c.length - 1] === 0 && c.length--), c
        };

        function Z() {
            Y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        i(Z, Y);

        function L() {
            Y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        i(L, Y);

        function q() {
            Y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        i(q, Y), q.prototype.imulK = function (c) {
            for (var f = 0, g = 0; g < c.length; g++) {
                var E = (c.words[g] | 0) * 19 + f,
                    k = E & 67108863;
                E >>>= 26, c.words[g] = k, f = E
            }
            return f !== 0 && (c.words[c.length++] = f), c
        }, o._prime = function (c) {
            if (U[c]) return U[c];
            var f;
            if (c === "k256") f = new G;
            else if (c === "p224") f = new Z;
            else if (c === "p192") f = new L;
            else if (c === "p25519") f = new q;
            else throw new Error("Unknown prime " + c);
            return U[c] = f, f
        };

        function M(w) {
            if (typeof w == "string") {
                var c = o._prime(w);
                this.m = c.p, this.prime = c
            } else n(w.gtn(1), "modulus must be greater than 1"), this.m = w, this.prime = null
        }
        M.prototype._verify1 = function (c) {
            n(c.negative === 0, "red works only with positives"), n(c.red, "red works only with red numbers")
        }, M.prototype._verify2 = function (c, f) {
            n((c.negative | f.negative) === 0, "red works only with positives"), n(c.red && c.red === f.red, "red works only with red numbers")
        }, M.prototype.imod = function (c) {
            return this.prime ? this.prime.ireduce(c)._forceRed(this) : (l(c, c.umod(this.m)._forceRed(this)), c)
        }, M.prototype.neg = function (c) {
            return c.isZero() ? c.clone() : this.m.sub(c)._forceRed(this)
        }, M.prototype.add = function (c, f) {
            this._verify2(c, f);
            var g = c.add(f);
            return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this)
        }, M.prototype.iadd = function (c, f) {
            this._verify2(c, f);
            var g = c.iadd(f);
            return g.cmp(this.m) >= 0 && g.isub(this.m), g
        }, M.prototype.sub = function (c, f) {
            this._verify2(c, f);
            var g = c.sub(f);
            return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this)
        }, M.prototype.isub = function (c, f) {
            this._verify2(c, f);
            var g = c.isub(f);
            return g.cmpn(0) < 0 && g.iadd(this.m), g
        }, M.prototype.shl = function (c, f) {
            return this._verify1(c), this.imod(c.ushln(f))
        }, M.prototype.imul = function (c, f) {
            return this._verify2(c, f), this.imod(c.imul(f))
        }, M.prototype.mul = function (c, f) {
            return this._verify2(c, f), this.imod(c.mul(f))
        }, M.prototype.isqr = function (c) {
            return this.imul(c, c.clone())
        }, M.prototype.sqr = function (c) {
            return this.mul(c, c)
        }, M.prototype.sqrt = function (c) {
            if (c.isZero()) return c.clone();
            var f = this.m.andln(3);
            if (n(f % 2 === 1), f === 3) {
                var g = this.m.add(new o(1)).iushrn(2);
                return this.pow(c, g)
            }
            for (var E = this.m.subn(1), k = 0; !E.isZero() && E.andln(1) === 0;) k++, E.iushrn(1);
            n(!E.isZero());
            var O = new o(1).toRed(this),
                C = O.redNeg(),
                A = this.m.subn(1).iushrn(1),
                y = this.m.bitLength();
            for (y = new o(2 * y * y).toRed(this); this.pow(y, A).cmp(C) !== 0;) y.redIAdd(C);
            for (var x = this.pow(y, E), ee = this.pow(c, E.addn(1).iushrn(1)), J = this.pow(c, E), ue = k; J.cmp(O) !== 0;) {
                for (var Fe = J, Re = 0; Fe.cmp(O) !== 0; Re++) Fe = Fe.redSqr();
                n(Re < ue);
                var ke = this.pow(x, new o(1).iushln(ue - Re - 1));
                ee = ee.redMul(ke), x = ke.redSqr(), J = J.redMul(x), ue = Re
            }
            return ee
        }, M.prototype.invm = function (c) {
            var f = c._invmp(this.m);
            return f.negative !== 0 ? (f.negative = 0, this.imod(f).redNeg()) : this.imod(f)
        }, M.prototype.pow = function (c, f) {
            if (f.isZero()) return new o(1).toRed(this);
            if (f.cmpn(1) === 0) return c.clone();
            var g = 4,
                E = new Array(1 << g);
            E[0] = new o(1).toRed(this), E[1] = c;
            for (var k = 2; k < E.length; k++) E[k] = this.mul(E[k - 1], c);
            var O = E[0],
                C = 0,
                A = 0,
                y = f.bitLength() % 26;
            for (y === 0 && (y = 26), k = f.length - 1; k >= 0; k--) {
                for (var x = f.words[k], ee = y - 1; ee >= 0; ee--) {
                    var J = x >> ee & 1;
                    if (O !== E[0] && (O = this.sqr(O)), J === 0 && C === 0) {
                        A = 0;
                        continue
                    }
                    C <<= 1, C |= J, A++, !(A !== g && (k !== 0 || ee !== 0)) && (O = this.mul(O, E[C]), A = 0, C = 0)
                }
                y = 26
            }
            return O
        }, M.prototype.convertTo = function (c) {
            var f = c.umod(this.m);
            return f === c ? f.clone() : f
        }, M.prototype.convertFrom = function (c) {
            var f = c.clone();
            return f.red = null, f
        }, o.mont = function (c) {
            return new D(c)
        };

        function D(w) {
            M.call(this, w), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        i(D, M), D.prototype.convertTo = function (c) {
            return this.imod(c.ushln(this.shift))
        }, D.prototype.convertFrom = function (c) {
            var f = this.imod(c.mul(this.rinv));
            return f.red = null, f
        }, D.prototype.imul = function (c, f) {
            if (c.isZero() || f.isZero()) return c.words[0] = 0, c.length = 1, c;
            var g = c.imul(f),
                E = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                k = g.isub(E).iushrn(this.shift),
                O = k;
            return k.cmp(this.m) >= 0 ? O = k.isub(this.m) : k.cmpn(0) < 0 && (O = k.iadd(this.m)), O._forceRed(this)
        }, D.prototype.mul = function (c, f) {
            if (c.isZero() || f.isZero()) return new o(0)._forceRed(this);
            var g = c.mul(f),
                E = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                k = g.isub(E).iushrn(this.shift),
                O = k;
            return k.cmp(this.m) >= 0 ? O = k.isub(this.m) : k.cmpn(0) < 0 && (O = k.iadd(this.m)), O._forceRed(this)
        }, D.prototype.invm = function (c) {
            var f = this.imod(c._invmp(this.m).mul(this.r2));
            return f._forceRed(this)
        }
    })(r, jt)
})(Ea);
var Ra = Ea.exports;
const Nn = $r(Ra);
var qs = {
    exports: {}
}; /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function (r, e) {
    var t = va,
        n = t.Buffer;

    function i(s, a) {
        for (var u in s) a[u] = s[u]
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? r.exports = t : (i(t, e), e.Buffer = o);

    function o(s, a, u) {
        return n(s, a, u)
    }
    o.prototype = Object.create(n.prototype), i(n, o), o.from = function (s, a, u) {
        if (typeof s == "number") throw new TypeError("Argument must not be a number");
        return n(s, a, u)
    }, o.alloc = function (s, a, u) {
        if (typeof s != "number") throw new TypeError("Argument must be a number");
        var d = n(s);
        return a !== void 0 ? typeof u == "string" ? d.fill(a, u) : d.fill(a) : d.fill(0), d
    }, o.allocUnsafe = function (s) {
        if (typeof s != "number") throw new TypeError("Argument must be a number");
        return n(s)
    }, o.allocUnsafeSlow = function (s) {
        if (typeof s != "number") throw new TypeError("Argument must be a number");
        return t.SlowBuffer(s)
    }
})(qs, qs.exports);
var _y = qs.exports,
    Fi = _y.Buffer;

function Ey(r) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++) e[t] = 255;
    for (var n = 0; n < r.length; n++) {
        var i = r.charAt(n),
            o = i.charCodeAt(0);
        if (e[o] !== 255) throw new TypeError(i + " is ambiguous");
        e[o] = n
    }
    var s = r.length,
        a = r.charAt(0),
        u = Math.log(s) / Math.log(256),
        d = Math.log(256) / Math.log(s);

    function l(m) {
        if ((Array.isArray(m) || m instanceof Uint8Array) && (m = Fi.from(m)), !Fi.isBuffer(m)) throw new TypeError("Expected Buffer");
        if (m.length === 0) return "";
        for (var v = 0, T = 0, R = 0, N = m.length; R !== N && m[R] === 0;) R++, v++;
        for (var $ = (N - R) * d + 1 >>> 0, P = new Uint8Array($); R !== N;) {
            for (var K = m[R], U = 0, Y = $ - 1;
                (K !== 0 || U < T) && Y !== -1; Y--, U++) K += 256 * P[Y] >>> 0, P[Y] = K % s >>> 0, K = K / s >>> 0;
            if (K !== 0) throw new Error("Non-zero carry");
            T = U, R++
        }
        for (var G = $ - T; G !== $ && P[G] === 0;) G++;
        for (var Z = a.repeat(v); G < $; ++G) Z += r.charAt(P[G]);
        return Z
    }

    function b(m) {
        if (typeof m != "string") throw new TypeError("Expected String");
        if (m.length === 0) return Fi.alloc(0);
        for (var v = 0, T = 0, R = 0; m[v] === a;) T++, v++;
        for (var N = (m.length - v) * u + 1 >>> 0, $ = new Uint8Array(N); v < m.length;) {
            var P = m.charCodeAt(v);
            if (P > 255) return;
            var K = e[P];
            if (K === 255) return;
            for (var U = 0, Y = N - 1;
                (K !== 0 || U < R) && Y !== -1; Y--, U++) K += s * $[Y] >>> 0, $[Y] = K % 256 >>> 0, K = K / 256 >>> 0;
            if (K !== 0) throw new Error("Non-zero carry");
            R = U, v++
        }
        for (var G = N - R; G !== N && $[G] === 0;) G++;
        var Z = Fi.allocUnsafe(T + (N - G));
        Z.fill(0, 0, T);
        for (var L = T; G !== N;) Z[L++] = $[G++];
        return Z
    }

    function S(m) {
        var v = b(m);
        if (v) return v;
        throw new Error("Non-base" + s + " character")
    }
    return {
        encode: l,
        decodeUnsafe: b,
        decode: S
    }
}
var vy = Ey,
    Ry = vy,
    Ay = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    Sl = Ry(Ay);
const ot = $r(Sl),
    no = dl;
var It = {};

function Cn(r, e, t) {
    return e <= r && r <= t
}

function ko(r) {
    if (r === void 0) return {};
    if (r === Object(r)) return r;
    throw TypeError("Could not convert argument to dictionary")
}

function ky(r) {
    for (var e = String(r), t = e.length, n = 0, i = []; n < t;) {
        var o = e.charCodeAt(n);
        if (o < 55296 || o > 57343) i.push(o);
        else if (56320 <= o && o <= 57343) i.push(65533);
        else if (55296 <= o && o <= 56319)
            if (n === t - 1) i.push(65533);
            else {
                var s = r.charCodeAt(n + 1);
                if (56320 <= s && s <= 57343) {
                    var a = o & 1023,
                        u = s & 1023;
                    i.push(65536 + (a << 10) + u), n += 1
                } else i.push(65533)
            } n += 1
    }
    return i
}

function Sy(r) {
    for (var e = "", t = 0; t < r.length; ++t) {
        var n = r[t];
        n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
    }
    return e
}
var ro = -1;

function Aa(r) {
    this.tokens = [].slice.call(r)
}
Aa.prototype = {
    endOfStream: function () {
        return !this.tokens.length
    },
    read: function () {
        return this.tokens.length ? this.tokens.shift() : ro
    },
    prepend: function (r) {
        if (Array.isArray(r))
            for (var e = r; e.length;) this.tokens.unshift(e.pop());
        else this.tokens.unshift(r)
    },
    push: function (r) {
        if (Array.isArray(r))
            for (var e = r; e.length;) this.tokens.push(e.shift());
        else this.tokens.push(r)
    }
};
var Fr = -1;

function bs(r, e) {
    if (r) throw TypeError("Decoder error");
    return e || 65533
}
var io = "utf-8";

function oo(r, e) {
    if (!(this instanceof oo)) return new oo(r, e);
    if (r = r !== void 0 ? String(r).toLowerCase() : io, r !== io) throw new Error("Encoding not supported. Only utf-8 is supported");
    e = ko(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!e.fatal, this._ignoreBOM = !!e.ignoreBOM, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }), Object.defineProperty(this, "fatal", {
        value: this._fatal
    }), Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}
oo.prototype = {
    decode: function (e, t) {
        var n;
        typeof e == "object" && e instanceof ArrayBuffer ? n = new Uint8Array(e) : typeof e == "object" && "buffer" in e && e.buffer instanceof ArrayBuffer ? n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : n = new Uint8Array(0), t = ko(t), this._streaming || (this._decoder = new Iy({
            fatal: this._fatal
        }), this._BOMseen = !1), this._streaming = !!t.stream;
        for (var i = new Aa(n), o = [], s; !i.endOfStream() && (s = this._decoder.handler(i, i.read()), s !== Fr);) s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s));
        if (!this._streaming) {
            do {
                if (s = this._decoder.handler(i, i.read()), s === Fr) break;
                s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s))
            } while (!i.endOfStream());
            this._decoder = null
        }
        return o.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0), Sy(o)
    }
};

function so(r, e) {
    if (!(this instanceof so)) return new so(r, e);
    if (r = r !== void 0 ? String(r).toLowerCase() : io, r !== io) throw new Error("Encoding not supported. Only utf-8 is supported");
    e = ko(e), this._streaming = !1, this._encoder = null, this._options = {
        fatal: !!e.fatal
    }, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}
so.prototype = {
    encode: function (e, t) {
        e = e ? String(e) : "", t = ko(t), this._streaming || (this._encoder = new xy(this._options)), this._streaming = !!t.stream;
        for (var n = [], i = new Aa(ky(e)), o; !i.endOfStream() && (o = this._encoder.handler(i, i.read()), o !== Fr);) Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
        if (!this._streaming) {
            for (; o = this._encoder.handler(i, i.read()), o !== Fr;) Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
            this._encoder = null
        }
        return new Uint8Array(n)
    }
};

function Iy(r) {
    var e = r.fatal,
        t = 0,
        n = 0,
        i = 0,
        o = 128,
        s = 191;
    this.handler = function (a, u) {
        if (u === ro && i !== 0) return i = 0, bs(e);
        if (u === ro) return Fr;
        if (i === 0) {
            if (Cn(u, 0, 127)) return u;
            if (Cn(u, 194, 223)) i = 1, t = u - 192;
            else if (Cn(u, 224, 239)) u === 224 && (o = 160), u === 237 && (s = 159), i = 2, t = u - 224;
            else if (Cn(u, 240, 244)) u === 240 && (o = 144), u === 244 && (s = 143), i = 3, t = u - 240;
            else return bs(e);
            return t = t << 6 * i, null
        }
        if (!Cn(u, o, s)) return t = i = n = 0, o = 128, s = 191, a.prepend(u), bs(e);
        if (o = 128, s = 191, n += 1, t += u - 128 << 6 * (i - n), n !== i) return null;
        var d = t;
        return t = i = n = 0, d
    }
}

function xy(r) {
    r.fatal, this.handler = function (e, t) {
        if (t === ro) return Fr;
        if (Cn(t, 0, 127)) return t;
        var n, i;
        Cn(t, 128, 2047) ? (n = 1, i = 192) : Cn(t, 2048, 65535) ? (n = 2, i = 224) : Cn(t, 65536, 1114111) && (n = 3, i = 240);
        for (var o = [(t >> 6 * n) + i]; n > 0;) {
            var s = t >> 6 * (n - 1);
            o.push(128 | s & 63), n -= 1
        }
        return o
    }
}
const Ty = Object.freeze(Object.defineProperty({
        __proto__: null,
        TextDecoder: oo,
        TextEncoder: so
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Oy = wo(Ty);
var Ny = jt && jt.__createBinding || (Object.create ? function (r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function () {
                return e[t]
            }
        })
    } : function (r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t]
    }),
    Cy = jt && jt.__setModuleDefault || (Object.create ? function (r, e) {
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        })
    } : function (r, e) {
        r.default = e
    }),
    bn = jt && jt.__decorate || function (r, e, t, n) {
        var i = arguments.length,
            o = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n,
            s;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(r, e, t, n);
        else
            for (var a = r.length - 1; a >= 0; a--)(s = r[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(e, t, o) : s(e, t)) || o);
        return i > 3 && o && Object.defineProperty(e, t, o), o
    },
    By = jt && jt.__importStar || function (r) {
        if (r && r.__esModule) return r;
        var e = {};
        if (r != null)
            for (var t in r) t !== "default" && Object.hasOwnProperty.call(r, t) && Ny(e, r, t);
        return Cy(e, r), e
    },
    Il = jt && jt.__importDefault || function (r) {
        return r && r.__esModule ? r : {
            default: r
        }
    };
Object.defineProperty(It, "__esModule", {
    value: !0
});
var xl = It.deserializeUnchecked = Ml = It.deserialize = Bl = It.serialize = It.BinaryReader = It.BinaryWriter = It.BorshError = It.baseDecode = It.baseEncode = void 0;
const Wn = Il(Ra),
    Tl = Il(Sl),
    My = By(Oy),
    Py = typeof TextDecoder != "function" ? My.TextDecoder : TextDecoder,
    Ly = new Py("utf-8", {
        fatal: !0
    });

function Uy(r) {
    return typeof r == "string" && (r = he.from(r, "utf8")), Tl.default.encode(he.from(r))
}
It.baseEncode = Uy;

function Dy(r) {
    return he.from(Tl.default.decode(r))
}
It.baseDecode = Dy;
const _s = 1024;
class Lt extends Error {
    constructor(e) {
        super(e), this.fieldPath = [], this.originalMessage = e
    }
    addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
    }
}
It.BorshError = Lt;
class Ol {
    constructor() {
        this.buf = he.alloc(_s), this.length = 0
    }
    maybeResize() {
        this.buf.length < 16 + this.length && (this.buf = he.concat([this.buf, he.alloc(_s)]))
    }
    writeU8(e) {
        this.maybeResize(), this.buf.writeUInt8(e, this.length), this.length += 1
    }
    writeU16(e) {
        this.maybeResize(), this.buf.writeUInt16LE(e, this.length), this.length += 2
    }
    writeU32(e) {
        this.maybeResize(), this.buf.writeUInt32LE(e, this.length), this.length += 4
    }
    writeU64(e) {
        this.maybeResize(), this.writeBuffer(he.from(new Wn.default(e).toArray("le", 8)))
    }
    writeU128(e) {
        this.maybeResize(), this.writeBuffer(he.from(new Wn.default(e).toArray("le", 16)))
    }
    writeU256(e) {
        this.maybeResize(), this.writeBuffer(he.from(new Wn.default(e).toArray("le", 32)))
    }
    writeU512(e) {
        this.maybeResize(), this.writeBuffer(he.from(new Wn.default(e).toArray("le", 64)))
    }
    writeBuffer(e) {
        this.buf = he.concat([he.from(this.buf.subarray(0, this.length)), e, he.alloc(_s)]), this.length += e.length
    }
    writeString(e) {
        this.maybeResize();
        const t = he.from(e, "utf8");
        this.writeU32(t.length), this.writeBuffer(t)
    }
    writeFixedArray(e) {
        this.writeBuffer(he.from(e))
    }
    writeArray(e, t) {
        this.maybeResize(), this.writeU32(e.length);
        for (const n of e) this.maybeResize(), t(n)
    }
    toArray() {
        return this.buf.subarray(0, this.length)
    }
}
It.BinaryWriter = Ol;

function _n(r, e, t) {
    const n = t.value;
    t.value = function (...i) {
        try {
            return n.apply(this, i)
        } catch (o) {
            if (o instanceof RangeError) {
                const s = o.code;
                if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(s) >= 0) throw new Lt("Reached the end of buffer when deserializing")
            }
            throw o
        }
    }
}
class Zt {
    constructor(e) {
        this.buf = e, this.offset = 0
    }
    readU8() {
        const e = this.buf.readUInt8(this.offset);
        return this.offset += 1, e
    }
    readU16() {
        const e = this.buf.readUInt16LE(this.offset);
        return this.offset += 2, e
    }
    readU32() {
        const e = this.buf.readUInt32LE(this.offset);
        return this.offset += 4, e
    }
    readU64() {
        const e = this.readBuffer(8);
        return new Wn.default(e, "le")
    }
    readU128() {
        const e = this.readBuffer(16);
        return new Wn.default(e, "le")
    }
    readU256() {
        const e = this.readBuffer(32);
        return new Wn.default(e, "le")
    }
    readU512() {
        const e = this.readBuffer(64);
        return new Wn.default(e, "le")
    }
    readBuffer(e) {
        if (this.offset + e > this.buf.length) throw new Lt(`Expected buffer length ${e} isn't within bounds`);
        const t = this.buf.slice(this.offset, this.offset + e);
        return this.offset += e, t
    }
    readString() {
        const e = this.readU32(),
            t = this.readBuffer(e);
        try {
            return Ly.decode(t)
        } catch (n) {
            throw new Lt(`Error decoding UTF-8 string: ${n}`)
        }
    }
    readFixedArray(e) {
        return new Uint8Array(this.readBuffer(e))
    }
    readArray(e) {
        const t = this.readU32(),
            n = Array();
        for (let i = 0; i < t; ++i) n.push(e());
        return n
    }
}
bn([_n], Zt.prototype, "readU8", null);
bn([_n], Zt.prototype, "readU16", null);
bn([_n], Zt.prototype, "readU32", null);
bn([_n], Zt.prototype, "readU64", null);
bn([_n], Zt.prototype, "readU128", null);
bn([_n], Zt.prototype, "readU256", null);
bn([_n], Zt.prototype, "readU512", null);
bn([_n], Zt.prototype, "readString", null);
bn([_n], Zt.prototype, "readFixedArray", null);
bn([_n], Zt.prototype, "readArray", null);
It.BinaryReader = Zt;

function Nl(r) {
    return r.charAt(0).toUpperCase() + r.slice(1)
}

function nr(r, e, t, n, i) {
    try {
        if (typeof n == "string") i[`write${Nl(n)}`](t);
        else if (n instanceof Array)
            if (typeof n[0] == "number") {
                if (t.length !== n[0]) throw new Lt(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);
                i.writeFixedArray(t)
            } else if (n.length === 2 && typeof n[1] == "number") {
            if (t.length !== n[1]) throw new Lt(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);
            for (let o = 0; o < n[1]; o++) nr(r, null, t[o], n[0], i)
        } else i.writeArray(t, o => {
            nr(r, e, o, n[0], i)
        });
        else if (n.kind !== void 0) switch (n.kind) {
            case "option": {
                t == null ? i.writeU8(0) : (i.writeU8(1), nr(r, e, t, n.type, i));
                break
            }
            case "map": {
                i.writeU32(t.size), t.forEach((o, s) => {
                    nr(r, e, s, n.key, i), nr(r, e, o, n.value, i)
                });
                break
            }
            default:
                throw new Lt(`FieldType ${n} unrecognized`)
        } else Cl(r, t, i)
    } catch (o) {
        throw o instanceof Lt && o.addToFieldPath(e), o
    }
}

function Cl(r, e, t) {
    if (typeof e.borshSerialize == "function") {
        e.borshSerialize(t);
        return
    }
    const n = r.get(e.constructor);
    if (!n) throw new Lt(`Class ${e.constructor.name} is missing in schema`);
    if (n.kind === "struct") n.fields.map(([i, o]) => {
        nr(r, i, e[i], o, t)
    });
    else if (n.kind === "enum") {
        const i = e[n.field];
        for (let o = 0; o < n.values.length; ++o) {
            const [s, a] = n.values[o];
            if (s === i) {
                t.writeU8(o), nr(r, s, e[s], a, t);
                break
            }
        }
    } else throw new Lt(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
}

function Fy(r, e, t = Ol) {
    const n = new t;
    return Cl(r, e, n), n.toArray()
}
var Bl = It.serialize = Fy;

function rr(r, e, t, n) {
    try {
        if (typeof t == "string") return n[`read${Nl(t)}`]();
        if (t instanceof Array) {
            if (typeof t[0] == "number") return n.readFixedArray(t[0]);
            if (typeof t[1] == "number") {
                const i = [];
                for (let o = 0; o < t[1]; o++) i.push(rr(r, null, t[0], n));
                return i
            } else return n.readArray(() => rr(r, e, t[0], n))
        }
        if (t.kind === "option") return n.readU8() ? rr(r, e, t.type, n) : void 0;
        if (t.kind === "map") {
            let i = new Map;
            const o = n.readU32();
            for (let s = 0; s < o; s++) {
                const a = rr(r, e, t.key, n),
                    u = rr(r, e, t.value, n);
                i.set(a, u)
            }
            return i
        }
        return ka(r, t, n)
    } catch (i) {
        throw i instanceof Lt && i.addToFieldPath(e), i
    }
}

function ka(r, e, t) {
    if (typeof e.borshDeserialize == "function") return e.borshDeserialize(t);
    const n = r.get(e);
    if (!n) throw new Lt(`Class ${e.name} is missing in schema`);
    if (n.kind === "struct") {
        const i = {};
        for (const [o, s] of r.get(e).fields) i[o] = rr(r, o, s, t);
        return new e(i)
    }
    if (n.kind === "enum") {
        const i = t.readU8();
        if (i >= n.values.length) throw new Lt(`Enum index: ${i} is out of range`);
        const [o, s] = n.values[i], a = rr(r, o, s, t);
        return new e({
            [o]: a
        })
    }
    throw new Lt(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
}

function Hy(r, e, t, n = Zt) {
    const i = new n(t),
        o = ka(r, e, i);
    if (i.offset < t.length) throw new Lt(`Unexpected ${t.length-i.offset} bytes after deserialized data`);
    return o
}
var Ml = It.deserialize = Hy;

function zy(r, e, t, n = Zt) {
    const i = new n(t);
    return ka(r, e, i)
}
xl = It.deserializeUnchecked = zy;
var W = {};
Object.defineProperty(W, "__esModule", {
    value: !0
});
W.s16 = W.s8 = W.nu64be = W.u48be = W.u40be = W.u32be = W.u24be = W.u16be = St = W.nu64 = W.u48 = W.u40 = ae = W.u32 = W.u24 = Jt = W.u16 = ve = W.u8 = Vn = W.offset = W.greedy = W.Constant = W.UTF8 = W.CString = W.Blob = W.Boolean = W.BitField = W.BitStructure = W.VariantLayout = W.Union = W.UnionLayoutDiscriminator = W.UnionDiscriminator = W.Structure = W.Sequence = W.DoubleBE = W.Double = W.FloatBE = W.Float = W.NearInt64BE = W.NearInt64 = W.NearUInt64BE = W.NearUInt64 = W.IntBE = W.Int = W.UIntBE = W.UInt = W.OffsetLayout = W.GreedyCount = W.ExternalLayout = W.bindConstructorLayout = W.nameWithProperty = W.Layout = W.uint8ArrayToBuffer = W.checkUint8Array = void 0;
W.constant = W.utf8 = W.cstr = Pe = W.blob = W.unionLayoutDiscriminator = W.union = xt = W.seq = W.bits = ce = W.struct = W.f64be = W.f64 = W.f32be = W.f32 = W.ns64be = W.s48be = W.s40be = W.s32be = W.s24be = W.s16be = Vt = W.ns64 = W.s48 = W.s40 = W.s32 = W.s24 = void 0;
const Sa = va;

function Vr(r) {
    if (!(r instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array")
}
W.checkUint8Array = Vr;

function Ne(r) {
    return Vr(r), Sa.Buffer.from(r.buffer, r.byteOffset, r.length)
}
W.uint8ArrayToBuffer = Ne;
let Be = class {
    constructor(e, t) {
        if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
        this.span = e, this.property = t
    }
    makeDestinationObject() {
        return {}
    }
    getSpan(e, t) {
        if (0 > this.span) throw new RangeError("indeterminate span");
        return this.span
    }
    replicate(e) {
        const t = Object.create(this.constructor.prototype);
        return Object.assign(t, this), t.property = e, t
    }
    fromArray(e) {}
};
W.Layout = Be;

function Ia(r, e) {
    return e.property ? r + "[" + e.property + "]" : r
}
W.nameWithProperty = Ia;

function Ky(r, e) {
    if (typeof r != "function") throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(r, "layout_")) throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof Be)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
    r.layout_ = e, e.boundConstructor_ = r, e.makeDestinationObject = () => new r, Object.defineProperty(r.prototype, "encode", {
        value(t, n) {
            return e.encode(this, t, n)
        },
        writable: !0
    }), Object.defineProperty(r, "decode", {
        value(t, n) {
            return e.decode(t, n)
        },
        writable: !0
    })
}
W.bindConstructorLayout = Ky;
let Ht = class extends Be {
    isCount() {
        throw new Error("ExternalLayout is abstract")
    }
};
W.ExternalLayout = Ht;
let Pl = class extends Ht {
    constructor(e = 1, t) {
        if (!Number.isInteger(e) || 0 >= e) throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, t), this.elementSpan = e
    }
    isCount() {
        return !0
    }
    decode(e, t = 0) {
        Vr(e);
        const n = e.length - t;
        return Math.floor(n / this.elementSpan)
    }
    encode(e, t, n) {
        return 0
    }
};
W.GreedyCount = Pl;
let xa = class extends Ht {
    constructor(e, t = 0, n) {
        if (!(e instanceof Be)) throw new TypeError("layout must be a Layout");
        if (!Number.isInteger(t)) throw new TypeError("offset must be integer or undefined");
        super(e.span, n || e.property), this.layout = e, this.offset = t
    }
    isCount() {
        return this.layout instanceof en || this.layout instanceof sn
    }
    decode(e, t = 0) {
        return this.layout.decode(e, t + this.offset)
    }
    encode(e, t, n = 0) {
        return this.layout.encode(e, t, n + this.offset)
    }
};
W.OffsetLayout = xa;
let en = class extends Be {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t = 0) {
        return Ne(e).readUIntLE(t, this.span)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeUIntLE(e, n, this.span), this.span
    }
};
W.UInt = en;
let sn = class extends Be {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t = 0) {
        return Ne(e).readUIntBE(t, this.span)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeUIntBE(e, n, this.span), this.span
    }
};
W.UIntBE = sn;
let pr = class extends Be {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t = 0) {
        return Ne(e).readIntLE(t, this.span)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeIntLE(e, n, this.span), this.span
    }
};
W.Int = pr;
let Gr = class extends Be {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t = 0) {
        return Ne(e).readIntBE(t, this.span)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeIntBE(e, n, this.span), this.span
    }
};
W.IntBE = Gr;
const Vs = Math.pow(2, 32);

function So(r) {
    const e = Math.floor(r / Vs),
        t = r - e * Vs;
    return {
        hi32: e,
        lo32: t
    }
}

function Io(r, e) {
    return r * Vs + e
}
let Ll = class extends Be {
    constructor(e) {
        super(8, e)
    }
    decode(e, t = 0) {
        const n = Ne(e),
            i = n.readUInt32LE(t),
            o = n.readUInt32LE(t + 4);
        return Io(o, i)
    }
    encode(e, t, n = 0) {
        const i = So(e),
            o = Ne(t);
        return o.writeUInt32LE(i.lo32, n), o.writeUInt32LE(i.hi32, n + 4), 8
    }
};
W.NearUInt64 = Ll;
let Ul = class extends Be {
    constructor(e) {
        super(8, e)
    }
    decode(e, t = 0) {
        const n = Ne(e),
            i = n.readUInt32BE(t),
            o = n.readUInt32BE(t + 4);
        return Io(i, o)
    }
    encode(e, t, n = 0) {
        const i = So(e),
            o = Ne(t);
        return o.writeUInt32BE(i.hi32, n), o.writeUInt32BE(i.lo32, n + 4), 8
    }
};
W.NearUInt64BE = Ul;
let Dl = class extends Be {
    constructor(e) {
        super(8, e)
    }
    decode(e, t = 0) {
        const n = Ne(e),
            i = n.readUInt32LE(t),
            o = n.readInt32LE(t + 4);
        return Io(o, i)
    }
    encode(e, t, n = 0) {
        const i = So(e),
            o = Ne(t);
        return o.writeUInt32LE(i.lo32, n), o.writeInt32LE(i.hi32, n + 4), 8
    }
};
W.NearInt64 = Dl;
let Fl = class extends Be {
    constructor(e) {
        super(8, e)
    }
    decode(e, t = 0) {
        const n = Ne(e),
            i = n.readInt32BE(t),
            o = n.readUInt32BE(t + 4);
        return Io(i, o)
    }
    encode(e, t, n = 0) {
        const i = So(e),
            o = Ne(t);
        return o.writeInt32BE(i.hi32, n), o.writeUInt32BE(i.lo32, n + 4), 8
    }
};
W.NearInt64BE = Fl;
let Hl = class extends Be {
    constructor(e) {
        super(4, e)
    }
    decode(e, t = 0) {
        return Ne(e).readFloatLE(t)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeFloatLE(e, n), 4
    }
};
W.Float = Hl;
let zl = class extends Be {
    constructor(e) {
        super(4, e)
    }
    decode(e, t = 0) {
        return Ne(e).readFloatBE(t)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeFloatBE(e, n), 4
    }
};
W.FloatBE = zl;
let Kl = class extends Be {
    constructor(e) {
        super(8, e)
    }
    decode(e, t = 0) {
        return Ne(e).readDoubleLE(t)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeDoubleLE(e, n), 8
    }
};
W.Double = Kl;
let $l = class extends Be {
    constructor(e) {
        super(8, e)
    }
    decode(e, t = 0) {
        return Ne(e).readDoubleBE(t)
    }
    encode(e, t, n = 0) {
        return Ne(t).writeDoubleBE(e, n), 8
    }
};
W.DoubleBE = $l;
let Wl = class extends Be {
    constructor(e, t, n) {
        if (!(e instanceof Be)) throw new TypeError("elementLayout must be a Layout");
        if (!(t instanceof Ht && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        let i = -1;
        !(t instanceof Ht) && 0 < e.span && (i = t * e.span), super(i, n), this.elementLayout = e, this.count = t
    }
    getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let n = 0,
            i = this.count;
        if (i instanceof Ht && (i = i.decode(e, t)), 0 < this.elementLayout.span) n = i * this.elementLayout.span;
        else {
            let o = 0;
            for (; o < i;) n += this.elementLayout.getSpan(e, t + n), ++o
        }
        return n
    }
    decode(e, t = 0) {
        const n = [];
        let i = 0,
            o = this.count;
        for (o instanceof Ht && (o = o.decode(e, t)); i < o;) n.push(this.elementLayout.decode(e, t)), t += this.elementLayout.getSpan(e, t), i += 1;
        return n
    }
    encode(e, t, n = 0) {
        const i = this.elementLayout,
            o = e.reduce((s, a) => s + i.encode(a, t, n + s), 0);
        return this.count instanceof Ht && this.count.encode(e.length, t, n), o
    }
};
W.Sequence = Wl;
let ql = class extends Be {
    constructor(e, t, n) {
        if (!(Array.isArray(e) && e.reduce((o, s) => o && s instanceof Be, !0))) throw new TypeError("fields must be array of Layout instances");
        typeof t == "boolean" && n === void 0 && (n = t, t = void 0);
        for (const o of e)
            if (0 > o.span && o.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
        let i = -1;
        try {
            i = e.reduce((o, s) => o + s.getSpan(), 0)
        } catch {}
        super(i, t), this.fields = e, this.decodePrefixes = !!n
    }
    getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let n = 0;
        try {
            n = this.fields.reduce((i, o) => {
                const s = o.getSpan(e, t);
                return t += s, i + s
            }, 0)
        } catch {
            throw new RangeError("indeterminate span")
        }
        return n
    }
    decode(e, t = 0) {
        Vr(e);
        const n = this.makeDestinationObject();
        for (const i of this.fields)
            if (i.property !== void 0 && (n[i.property] = i.decode(e, t)), t += i.getSpan(e, t), this.decodePrefixes && e.length === t) break;
        return n
    }
    encode(e, t, n = 0) {
        const i = n;
        let o = 0,
            s = 0;
        for (const a of this.fields) {
            let u = a.span;
            if (s = 0 < u ? u : 0, a.property !== void 0) {
                const d = e[a.property];
                d !== void 0 && (s = a.encode(d, t, n), 0 > u && (u = a.getSpan(t, n)))
            }
            o = n, n += u
        }
        return o + s - i
    }
    fromArray(e) {
        const t = this.makeDestinationObject();
        for (const n of this.fields) n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
        return t
    }
    layoutFor(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        for (const t of this.fields)
            if (t.property === e) return t
    }
    offsetOf(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        let t = 0;
        for (const n of this.fields) {
            if (n.property === e) return t;
            0 > n.span ? t = -1 : 0 <= t && (t += n.span)
        }
    }
};
W.Structure = ql;
let Ta = class {
    constructor(e) {
        this.property = e
    }
    decode(e, t) {
        throw new Error("UnionDiscriminator is abstract")
    }
    encode(e, t, n) {
        throw new Error("UnionDiscriminator is abstract")
    }
};
W.UnionDiscriminator = Ta;
let ao = class extends Ta {
    constructor(e, t) {
        if (!(e instanceof Ht && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(t || e.property || "variant"), this.layout = e
    }
    decode(e, t) {
        return this.layout.decode(e, t)
    }
    encode(e, t, n) {
        return this.layout.encode(e, t, n)
    }
};
W.UnionLayoutDiscriminator = ao;
let Oa = class extends Be {
    constructor(e, t, n) {
        let i;
        if (e instanceof en || e instanceof sn) i = new ao(new xa(e));
        else if (e instanceof Ht && e.isCount()) i = new ao(e);
        else if (e instanceof Ta) i = e;
        else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (t === void 0 && (t = null), !(t === null || t instanceof Be)) throw new TypeError("defaultLayout must be null or a Layout");
        if (t !== null) {
            if (0 > t.span) throw new Error("defaultLayout must have constant span");
            t.property === void 0 && (t = t.replicate("content"))
        }
        let o = -1;
        t && (o = t.span, 0 <= o && (e instanceof en || e instanceof sn) && (o += i.layout.span)), super(o, n), this.discriminator = i, this.usesPrefixDiscriminator = e instanceof en || e instanceof sn, this.defaultLayout = t, this.registry = {};
        let s = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function (a) {
            return s(a)
        }, this.configGetSourceVariant = function (a) {
            s = a.bind(this)
        }
    }
    getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        const n = this.getVariant(e, t);
        if (!n) throw new Error("unable to determine span for unrecognized variant");
        return n.getSpan(e, t)
    }
    defaultGetSourceVariant(e) {
        if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
            if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)) return;
            const t = this.registry[e[this.discriminator.property]];
            if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property))) return t
        } else
            for (const t in this.registry) {
                const n = this.registry[t];
                if (n.property && Object.prototype.hasOwnProperty.call(e, n.property)) return n
            }
        throw new Error("unable to infer src variant")
    }
    decode(e, t = 0) {
        let n;
        const i = this.discriminator,
            o = i.decode(e, t),
            s = this.registry[o];
        if (s === void 0) {
            const a = this.defaultLayout;
            let u = 0;
            this.usesPrefixDiscriminator && (u = i.layout.span), n = this.makeDestinationObject(), n[i.property] = o, n[a.property] = a.decode(e, t + u)
        } else n = s.decode(e, t);
        return n
    }
    encode(e, t, n = 0) {
        const i = this.getSourceVariant(e);
        if (i === void 0) {
            const o = this.discriminator,
                s = this.defaultLayout;
            let a = 0;
            return this.usesPrefixDiscriminator && (a = o.layout.span), o.encode(e[o.property], t, n), a + s.encode(e[s.property], t, n + a)
        }
        return i.encode(e, t, n)
    }
    addVariant(e, t, n) {
        const i = new Vl(this, e, t, n);
        return this.registry[e] = i, i
    }
    getVariant(e, t = 0) {
        let n;
        return e instanceof Uint8Array ? n = this.discriminator.decode(e, t) : n = e, this.registry[n]
    }
};
W.Union = Oa;
let Vl = class extends Be {
    constructor(e, t, n, i) {
        if (!(e instanceof Oa)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(t) || 0 > t) throw new TypeError("variant must be a (non-negative) integer");
        if (typeof n == "string" && i === void 0 && (i = n, n = null), n) {
            if (!(n instanceof Be)) throw new TypeError("layout must be a Layout");
            if (e.defaultLayout !== null && 0 <= n.span && n.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
            if (typeof i != "string") throw new TypeError("variant must have a String property")
        }
        let o = e.span;
        0 > e.span && (o = n ? n.span : 0, 0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)), super(o, i), this.union = e, this.variant = t, this.layout = n || null
    }
    getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let n = 0;
        this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
        let i = 0;
        return this.layout && (i = this.layout.getSpan(e, t + n)), n + i
    }
    decode(e, t = 0) {
        const n = this.makeDestinationObject();
        if (this !== this.union.getVariant(e, t)) throw new Error("variant mismatch");
        let i = 0;
        return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(e, t + i) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n
    }
    encode(e, t, n = 0) {
        let i = 0;
        if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(e, this.property)) throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, t, n);
        let o = i;
        if (this.layout && (this.layout.encode(e[this.property], t, n + i), o += this.layout.getSpan(t, n + i), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
        return o
    }
    fromArray(e) {
        if (this.layout) return this.layout.fromArray(e)
    }
};
W.VariantLayout = Vl;

function Ir(r) {
    return 0 > r && (r += 4294967296), r
}
let Na = class extends Be {
    constructor(e, t, n) {
        if (!(e instanceof en || e instanceof sn)) throw new TypeError("word must be a UInt or UIntBE layout");
        if (typeof t == "string" && n === void 0 && (n = t, t = !1), 4 < e.span) throw new RangeError("word cannot exceed 32 bits");
        super(e.span, n), this.word = e, this.msb = !!t, this.fields = [];
        let i = 0;
        this._packedSetValue = function (o) {
            return i = Ir(o), this
        }, this._packedGetValue = function () {
            return i
        }
    }
    decode(e, t = 0) {
        const n = this.makeDestinationObject(),
            i = this.word.decode(e, t);
        this._packedSetValue(i);
        for (const o of this.fields) o.property !== void 0 && (n[o.property] = o.decode(e));
        return n
    }
    encode(e, t, n = 0) {
        const i = this.word.decode(t, n);
        this._packedSetValue(i);
        for (const o of this.fields)
            if (o.property !== void 0) {
                const s = e[o.property];
                s !== void 0 && o.encode(s)
            } return this.word.encode(this._packedGetValue(), t, n)
    }
    addField(e, t) {
        const n = new Ca(this, e, t);
        return this.fields.push(n), n
    }
    addBoolean(e) {
        const t = new Gl(this, e);
        return this.fields.push(t), t
    }
    fieldFor(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        for (const t of this.fields)
            if (t.property === e) return t
    }
};
W.BitStructure = Na;
let Ca = class {
    constructor(e, t, n) {
        if (!(e instanceof Na)) throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(t) || 0 >= t) throw new TypeError("bits must be positive integer");
        const i = 8 * e.span,
            o = e.fields.reduce((s, a) => s + a.bits, 0);
        if (t + o > i) throw new Error("bits too long for span remainder (" + (i - o) + " of " + i + " remain)");
        this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, t === 32 && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = i - o - t), this.wordMask = Ir(this.valueMask << this.start), this.property = n
    }
    decode(e, t) {
        const n = this.container._packedGetValue();
        return Ir(n & this.wordMask) >>> this.start
    }
    encode(e) {
        if (typeof e != "number" || !Number.isInteger(e) || e !== Ir(e & this.valueMask)) throw new TypeError(Ia("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const t = this.container._packedGetValue(),
            n = Ir(e << this.start);
        this.container._packedSetValue(Ir(t & ~this.wordMask) | n)
    }
};
W.BitField = Ca;
let Gl = class extends Ca {
    constructor(e, t) {
        super(e, 1, t)
    }
    decode(e, t) {
        return !!super.decode(e, t)
    }
    encode(e) {
        typeof e == "boolean" && (e = +e), super.encode(e)
    }
};
W.Boolean = Gl;
let jl = class extends Be {
    constructor(e, t) {
        if (!(e instanceof Ht && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let n = -1;
        e instanceof Ht || (n = e), super(n, t), this.length = e
    }
    getSpan(e, t) {
        let n = this.span;
        return 0 > n && (n = this.length.decode(e, t)), n
    }
    decode(e, t = 0) {
        let n = this.span;
        return 0 > n && (n = this.length.decode(e, t)), Ne(e).slice(t, t + n)
    }
    encode(e, t, n) {
        let i = this.length;
        if (this.length instanceof Ht && (i = e.length), !(e instanceof Uint8Array && i === e.length)) throw new TypeError(Ia("Blob.encode", this) + " requires (length " + i + ") Uint8Array as src");
        if (n + i > t.length) throw new RangeError("encoding overruns Uint8Array");
        const o = Ne(e);
        return Ne(t).write(o.toString("hex"), n, i, "hex"), this.length instanceof Ht && this.length.encode(i, t, n), i
    }
};
W.Blob = jl;
let Zl = class extends Be {
    constructor(e) {
        super(-1, e)
    }
    getSpan(e, t = 0) {
        Vr(e);
        let n = t;
        for (; n < e.length && e[n] !== 0;) n += 1;
        return 1 + n - t
    }
    decode(e, t = 0) {
        const n = this.getSpan(e, t);
        return Ne(e).slice(t, t + n - 1).toString("utf-8")
    }
    encode(e, t, n = 0) {
        typeof e != "string" && (e = String(e));
        const i = Sa.Buffer.from(e, "utf8"),
            o = i.length;
        if (n + o > t.length) throw new RangeError("encoding overruns Buffer");
        const s = Ne(t);
        return i.copy(s, n), s[n + o] = 0, o + 1
    }
};
W.CString = Zl;
let Yl = class extends Be {
    constructor(e, t) {
        if (typeof e == "string" && t === void 0 && (t = e, e = void 0), e === void 0) e = -1;
        else if (!Number.isInteger(e)) throw new TypeError("maxSpan must be an integer");
        super(-1, t), this.maxSpan = e
    }
    getSpan(e, t = 0) {
        return Vr(e), e.length - t
    }
    decode(e, t = 0) {
        const n = this.getSpan(e, t);
        if (0 <= this.maxSpan && this.maxSpan < n) throw new RangeError("text length exceeds maxSpan");
        return Ne(e).slice(t, t + n).toString("utf-8")
    }
    encode(e, t, n = 0) {
        typeof e != "string" && (e = String(e));
        const i = Sa.Buffer.from(e, "utf8"),
            o = i.length;
        if (0 <= this.maxSpan && this.maxSpan < o) throw new RangeError("text length exceeds maxSpan");
        if (n + o > t.length) throw new RangeError("encoding overruns Buffer");
        return i.copy(Ne(t), n), o
    }
};
W.UTF8 = Yl;
let Xl = class extends Be {
    constructor(e, t) {
        super(0, t), this.value = e
    }
    decode(e, t) {
        return this.value
    }
    encode(e, t, n) {
        return 0
    }
};
W.Constant = Xl;
W.greedy = (r, e) => new Pl(r, e);
var Vn = W.offset = (r, e, t) => new xa(r, e, t),
    ve = W.u8 = r => new en(1, r),
    Jt = W.u16 = r => new en(2, r);
W.u24 = r => new en(3, r);
var ae = W.u32 = r => new en(4, r);
W.u40 = r => new en(5, r);
W.u48 = r => new en(6, r);
var St = W.nu64 = r => new Ll(r);
W.u16be = r => new sn(2, r);
W.u24be = r => new sn(3, r);
W.u32be = r => new sn(4, r);
W.u40be = r => new sn(5, r);
W.u48be = r => new sn(6, r);
W.nu64be = r => new Ul(r);
W.s8 = r => new pr(1, r);
W.s16 = r => new pr(2, r);
W.s24 = r => new pr(3, r);
W.s32 = r => new pr(4, r);
W.s40 = r => new pr(5, r);
W.s48 = r => new pr(6, r);
var Vt = W.ns64 = r => new Dl(r);
W.s16be = r => new Gr(2, r);
W.s24be = r => new Gr(3, r);
W.s32be = r => new Gr(4, r);
W.s40be = r => new Gr(5, r);
W.s48be = r => new Gr(6, r);
W.ns64be = r => new Fl(r);
W.f32 = r => new Hl(r);
W.f32be = r => new zl(r);
W.f64 = r => new Kl(r);
W.f64be = r => new $l(r);
var ce = W.struct = (r, e, t) => new ql(r, e, t);
W.bits = (r, e, t) => new Na(r, e, t);
var xt = W.seq = (r, e, t) => new Wl(r, e, t);
W.union = (r, e, t) => new Oa(r, e, t);
W.unionLayoutDiscriminator = (r, e) => new ao(r, e);
var Pe = W.blob = (r, e) => new jl(r, e);
W.cstr = r => new Zl(r);
W.utf8 = (r, e) => new Yl(r, e);
W.constant = (r, e) => new Xl(r, e);
var $y = 8078e3,
    Wy = 8078001,
    qy = 8078004,
    Vy = 8078005,
    Gy = 8078006,
    jy = 8078011;

function Jl(r) {
    return Array.isArray(r) ? "%5B" + r.map(Jl).join("%2C%20") + "%5D" : typeof r == "bigint" ? `${r}n` : encodeURIComponent(String(r != null && Object.getPrototypeOf(r) === null ? {
        ...r
    } : r))
}

function Zy([r, e]) {
    return `${r}=${Jl(e)}`
}

function Yy(r) {
    const e = Object.entries(r).map(Zy).join("&");
    return btoa(e)
}

function Xy(r, e = {}) {
    {
        let t = `Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;
        return Object.keys(e).length && (t += ` '${Yy(e)}'`), `${t}\``
    }
}
var Cr = class extends Error {
    constructor(...[e, t]) {
        let n, i;
        if (t) {
            const {
                cause: s,
                ...a
            } = t;
            s && (i = {
                cause: s
            }), Object.keys(a).length > 0 && (n = a)
        }
        const o = Xy(e, n);
        super(o, i);
        Ae(this, "cause", this.cause);
        Ae(this, "context");
        this.context = {
            __code: e,
            ...n
        }, this.name = "SolanaError"
    }
};

function Jy(r, e) {
    return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(r)
}

function Qy(r) {
    return Object.freeze({
        ...r,
        encode: e => {
            const t = new Uint8Array(Jy(e, r));
            return r.write(e, t, 0), t
        }
    })
}

function em(r) {
    return Object.freeze({
        ...r,
        decode: (e, t = 0) => r.read(e, t)[0]
    })
}

function Ar(r) {
    return "fixedSize" in r && typeof r.fixedSize == "number"
}

function tm(r, e) {
    if (Ar(r) !== Ar(e)) throw new Cr(qy);
    if (Ar(r) && Ar(e) && r.fixedSize !== e.fixedSize) throw new Cr(Vy, {
        decoderFixedSize: e.fixedSize,
        encoderFixedSize: r.fixedSize
    });
    if (!Ar(r) && !Ar(e) && r.maxSize !== e.maxSize) throw new Cr(Gy, {
        decoderMaxSize: e.maxSize,
        encoderMaxSize: r.maxSize
    });
    return {
        ...e,
        ...r,
        decode: e.decode,
        encode: r.encode,
        read: e.read,
        write: r.write
    }
}

function nm(r, e, t = 0) {
    if (e.length - t <= 0) throw new Cr($y, {
        codecDescription: r
    })
}

function rm(r, e, t, n = 0) {
    const i = t.length - n;
    if (i < e) throw new Cr(Wy, {
        bytesLength: i,
        codecDescription: r,
        expected: e
    })
}

function im(r, e, t, n) {
    if (n < e || n > t) throw new Cr(jy, {
        codecDescription: r,
        max: t,
        min: e,
        value: n
    })
}

function Ql(r) {
    return (r == null ? void 0 : r.endian) !== 1
}

function om(r) {
    return Qy({
        fixedSize: r.size,
        write(e, t, n) {
            r.range && im(r.name, r.range[0], r.range[1], e);
            const i = new ArrayBuffer(r.size);
            return r.set(new DataView(i), e, Ql(r.config)), t.set(new Uint8Array(i), n), n + r.size
        }
    })
}

function sm(r) {
    return em({
        fixedSize: r.size,
        read(e, t = 0) {
            nm(r.name, e, t), rm(r.name, r.size, e, t);
            const n = new DataView(am(e, t, r.size));
            return [r.get(n, Ql(r.config)), t + r.size]
        }
    })
}

function am(r, e, t) {
    const n = r.byteOffset + (e ?? 0),
        i = t ?? r.byteLength;
    return r.buffer.slice(n, n + i)
}
var ed = (r = {}) => om({
        config: r,
        name: "u64",
        range: [0n, BigInt("0xffffffffffffffff")],
        set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
        size: 8
    }),
    cm = (r = {}) => sm({
        config: r,
        get: (e, t) => e.getBigUint64(0, t),
        name: "u64",
        size: 8
    }),
    um = (r = {}) => tm(ed(r), cm(r));
let lm = class extends TypeError {
    constructor(e, t) {
        let n;
        const {
            message: i,
            explanation: o,
            ...s
        } = e, {
            path: a
        } = e, u = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
        super(o ?? u), o != null && (this.cause = u), Object.assign(this, s), this.name = this.constructor.name, this.failures = () => n ?? (n = [e, ...t()])
    }
};

function dm(r) {
    return Ri(r) && typeof r[Symbol.iterator] == "function"
}

function Ri(r) {
    return typeof r == "object" && r != null
}

function co(r) {
    return Ri(r) && !Array.isArray(r)
}

function an(r) {
    return typeof r == "symbol" ? r.toString() : typeof r == "string" ? JSON.stringify(r) : `${r}`
}

function fm(r) {
    const {
        done: e,
        value: t
    } = r.next();
    return e ? void 0 : t
}

function hm(r, e, t, n) {
    if (r === !0) return;
    r === !1 ? r = {} : typeof r == "string" && (r = {
        message: r
    });
    const {
        path: i,
        branch: o
    } = e, {
        type: s
    } = t, {
        refinement: a,
        message: u = `Expected a value of type \`${s}\`${a?` with refinement \`${a}\``:""}, but received: \`${an(n)}\``
    } = r;
    return {
        value: n,
        type: s,
        refinement: a,
        key: i[i.length - 1],
        path: i,
        branch: o,
        ...r,
        message: u
    }
}

function* Pc(r, e, t, n) {
    dm(r) || (r = [r]);
    for (const i of r) {
        const o = hm(i, e, t, n);
        o && (yield o)
    }
}

function* Ba(r, e, t = {}) {
    const {
        path: n = [],
        branch: i = [r],
        coerce: o = !1,
        mask: s = !1
    } = t, a = {
        path: n,
        branch: i,
        mask: s
    };
    o && (r = e.coercer(r, a));
    let u = "valid";
    for (const d of e.validator(r, a)) d.explanation = t.message, u = "not_valid", yield [d, void 0];
    for (let [d, l, b] of e.entries(r, a)) {
        const S = Ba(l, b, {
            path: d === void 0 ? n : [...n, d],
            branch: d === void 0 ? i : [...i, l],
            coerce: o,
            mask: s,
            message: t.message
        });
        for (const m of S) m[0] ? (u = m[0].refinement != null ? "not_refined" : "not_valid", yield [m[0], void 0]) : o && (l = m[1], d === void 0 ? r = l : r instanceof Map ? r.set(d, l) : r instanceof Set ? r.add(l) : Ri(r) && (l !== void 0 || d in r) && (r[d] = l))
    }
    if (u !== "not_valid")
        for (const d of e.refiner(r, a)) d.explanation = t.message, u = "not_refined", yield [d, void 0];
    u === "valid" && (yield [void 0, r])
}
let En = class {
    constructor(e) {
        const {
            type: t,
            schema: n,
            validator: i,
            refiner: o,
            coercer: s = u => u,
            entries: a = function* () {}
        } = e;
        this.type = t, this.schema = n, this.entries = a, this.coercer = s, i ? this.validator = (u, d) => {
            const l = i(u, d);
            return Pc(l, d, this, u)
        } : this.validator = () => [], o ? this.refiner = (u, d) => {
            const l = o(u, d);
            return Pc(l, d, this, u)
        } : this.refiner = () => []
    }
    assert(e, t) {
        return td(e, this, t)
    }
    create(e, t) {
        return te(e, this, t)
    }
    is(e) {
        return nd(e, this)
    }
    mask(e, t) {
        return pm(e, this, t)
    }
    validate(e, t = {}) {
        return Ai(e, this, t)
    }
};

function td(r, e, t) {
    const n = Ai(r, e, {
        message: t
    });
    if (n[0]) throw n[0]
}

function te(r, e, t) {
    const n = Ai(r, e, {
        coerce: !0,
        message: t
    });
    if (n[0]) throw n[0];
    return n[1]
}

function pm(r, e, t) {
    const n = Ai(r, e, {
        coerce: !0,
        mask: !0,
        message: t
    });
    if (n[0]) throw n[0];
    return n[1]
}

function nd(r, e) {
    return !Ai(r, e)[0]
}

function Ai(r, e, t = {}) {
    const n = Ba(r, e, t),
        i = fm(n);
    return i[0] ? [new lm(i[0], function* () {
        for (const s of n) s[0] && (yield s[0])
    }), void 0] : [void 0, i[1]]
}

function yr(r, e) {
    return new En({
        type: r,
        schema: null,
        validator: e
    })
}

function ym() {
    return yr("any", () => !0)
}

function re(r) {
    return new En({
        type: "array",
        schema: r,
        * entries(e) {
            if (r && Array.isArray(e))
                for (const [t, n] of e.entries()) yield [t, n, r]
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        },
        validator(e) {
            return Array.isArray(e) || `Expected an array value, but received: ${an(e)}`
        }
    })
}

function wn() {
    return yr("boolean", r => typeof r == "boolean")
}

function Ma(r) {
    return yr("instance", e => e instanceof r || `Expected a \`${r.name}\` instance, but received: ${an(e)}`)
}

function je(r) {
    const e = an(r),
        t = typeof r;
    return new En({
        type: "literal",
        schema: t === "string" || t === "number" || t === "boolean" ? r : null,
        validator(n) {
            return n === r || `Expected the literal \`${e}\`, but received: ${an(n)}`
        }
    })
}

function mm() {
    return yr("never", () => !1)
}

function ie(r) {
    return new En({
        ...r,
        validator: (e, t) => e === null || r.validator(e, t),
        refiner: (e, t) => e === null || r.refiner(e, t)
    })
}

function H() {
    return yr("number", r => typeof r == "number" && !isNaN(r) || `Expected a number, but received: ${an(r)}`)
}

function de(r) {
    return new En({
        ...r,
        validator: (e, t) => e === void 0 || r.validator(e, t),
        refiner: (e, t) => e === void 0 || r.refiner(e, t)
    })
}

function rd(r, e) {
    return new En({
        type: "record",
        schema: null,
        * entries(t) {
            if (Ri(t))
                for (const n in t) {
                    const i = t[n];
                    yield [n, n, r], yield [n, i, e]
                }
        },
        validator(t) {
            return co(t) || `Expected an object, but received: ${an(t)}`
        },
        coercer(t) {
            return co(t) ? {
                ...t
            } : t
        }
    })
}

function Q() {
    return yr("string", r => typeof r == "string" || `Expected a string, but received: ${an(r)}`)
}

function Pa(r) {
    const e = mm();
    return new En({
        type: "tuple",
        schema: null,
        * entries(t) {
            if (Array.isArray(t)) {
                const n = Math.max(r.length, t.length);
                for (let i = 0; i < n; i++) yield [i, t[i], r[i] || e]
            }
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array, but received: ${an(t)}`
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        }
    })
}

function X(r) {
    const e = Object.keys(r);
    return new En({
        type: "type",
        schema: r,
        * entries(t) {
            if (Ri(t))
                for (const n of e) yield [n, t[n], r[n]]
        },
        validator(t) {
            return co(t) || `Expected an object, but received: ${an(t)}`
        },
        coercer(t) {
            return co(t) ? {
                ...t
            } : t
        }
    })
}

function Ut(r) {
    const e = r.map(t => t.type).join(" | ");
    return new En({
        type: "union",
        schema: null,
        coercer(t, n) {
            for (const i of r) {
                const [o, s] = i.validate(t, {
                    coerce: !0,
                    mask: n.mask
                });
                if (!o) return s
            }
            return t
        },
        validator(t, n) {
            const i = [];
            for (const o of r) {
                const [...s] = Ba(t, o, n), [a] = s;
                if (a[0])
                    for (const [u] of s) u && i.push(u);
                else return []
            }
            return [`Expected the value to satisfy a union of \`${e}\`, but received: ${an(t)}`, ...i]
        }
    })
}

function jr() {
    return yr("unknown", () => !0)
}

function ki(r, e, t) {
    return new En({
        ...r,
        coercer: (n, i) => nd(n, e) ? r.coercer(t(n, i), i) : r.coercer(n, i)
    })
}
var Hi, gm = new Uint8Array(16);

function id() {
    if (!Hi && (Hi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Hi)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Hi(gm)
}
const wm = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function xo(r) {
    return typeof r == "string" && wm.test(r)
}
var kt = [];
for (var Es = 0; Es < 256; ++Es) kt.push((Es + 256).toString(16).substr(1));

function To(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        t = (kt[r[e + 0]] + kt[r[e + 1]] + kt[r[e + 2]] + kt[r[e + 3]] + "-" + kt[r[e + 4]] + kt[r[e + 5]] + "-" + kt[r[e + 6]] + kt[r[e + 7]] + "-" + kt[r[e + 8]] + kt[r[e + 9]] + "-" + kt[r[e + 10]] + kt[r[e + 11]] + kt[r[e + 12]] + kt[r[e + 13]] + kt[r[e + 14]] + kt[r[e + 15]]).toLowerCase();
    if (!xo(t)) throw TypeError("Stringified UUID is invalid");
    return t
}
var Lc, vs, Rs = 0,
    As = 0;

function bm(r, e, t) {
    var n = e && t || 0,
        i = e || new Array(16);
    r = r || {};
    var o = r.node || Lc,
        s = r.clockseq !== void 0 ? r.clockseq : vs;
    if (o == null || s == null) {
        var a = r.random || (r.rng || id)();
        o == null && (o = Lc = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]), s == null && (s = vs = (a[6] << 8 | a[7]) & 16383)
    }
    var u = r.msecs !== void 0 ? r.msecs : Date.now(),
        d = r.nsecs !== void 0 ? r.nsecs : As + 1,
        l = u - Rs + (d - As) / 1e4;
    if (l < 0 && r.clockseq === void 0 && (s = s + 1 & 16383), (l < 0 || u > Rs) && r.nsecs === void 0 && (d = 0), d >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    Rs = u, As = d, vs = s, u += 122192928e5;
    var b = ((u & 268435455) * 1e4 + d) % 4294967296;
    i[n++] = b >>> 24 & 255, i[n++] = b >>> 16 & 255, i[n++] = b >>> 8 & 255, i[n++] = b & 255;
    var S = u / 4294967296 * 1e4 & 268435455;
    i[n++] = S >>> 8 & 255, i[n++] = S & 255, i[n++] = S >>> 24 & 15 | 16, i[n++] = S >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = s & 255;
    for (var m = 0; m < 6; ++m) i[n + m] = o[m];
    return e || To(i)
}

function od(r) {
    if (!xo(r)) throw TypeError("Invalid UUID");
    var e, t = new Uint8Array(16);
    return t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t
}

function _m(r) {
    r = unescape(encodeURIComponent(r));
    for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t));
    return e
}
var Em = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    vm = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

function sd(r, e, t) {
    function n(i, o, s, a) {
        if (typeof i == "string" && (i = _m(i)), typeof o == "string" && (o = od(o)), o.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var u = new Uint8Array(16 + i.length);
        if (u.set(o), u.set(i, o.length), u = t(u), u[6] = u[6] & 15 | e, u[8] = u[8] & 63 | 128, s) {
            a = a || 0;
            for (var d = 0; d < 16; ++d) s[a + d] = u[d];
            return s
        }
        return To(u)
    }
    try {
        n.name = r
    } catch {}
    return n.DNS = Em, n.URL = vm, n
}

function Rm(r) {
    if (typeof r == "string") {
        var e = unescape(encodeURIComponent(r));
        r = new Uint8Array(e.length);
        for (var t = 0; t < e.length; ++t) r[t] = e.charCodeAt(t)
    }
    return Am(km(Sm(r), r.length * 8))
}

function Am(r) {
    for (var e = [], t = r.length * 32, n = "0123456789abcdef", i = 0; i < t; i += 8) {
        var o = r[i >> 5] >>> i % 32 & 255,
            s = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(o & 15), 16);
        e.push(s)
    }
    return e
}

function ad(r) {
    return (r + 64 >>> 9 << 4) + 14 + 1
}

function km(r, e) {
    r[e >> 5] |= 128 << e % 32, r[ad(e) - 1] = e;
    for (var t = 1732584193, n = -271733879, i = -1732584194, o = 271733878, s = 0; s < r.length; s += 16) {
        var a = t,
            u = n,
            d = i,
            l = o;
        t = Nt(t, n, i, o, r[s], 7, -680876936), o = Nt(o, t, n, i, r[s + 1], 12, -389564586), i = Nt(i, o, t, n, r[s + 2], 17, 606105819), n = Nt(n, i, o, t, r[s + 3], 22, -1044525330), t = Nt(t, n, i, o, r[s + 4], 7, -176418897), o = Nt(o, t, n, i, r[s + 5], 12, 1200080426), i = Nt(i, o, t, n, r[s + 6], 17, -1473231341), n = Nt(n, i, o, t, r[s + 7], 22, -45705983), t = Nt(t, n, i, o, r[s + 8], 7, 1770035416), o = Nt(o, t, n, i, r[s + 9], 12, -1958414417), i = Nt(i, o, t, n, r[s + 10], 17, -42063), n = Nt(n, i, o, t, r[s + 11], 22, -1990404162), t = Nt(t, n, i, o, r[s + 12], 7, 1804603682), o = Nt(o, t, n, i, r[s + 13], 12, -40341101), i = Nt(i, o, t, n, r[s + 14], 17, -1502002290), n = Nt(n, i, o, t, r[s + 15], 22, 1236535329), t = Ct(t, n, i, o, r[s + 1], 5, -165796510), o = Ct(o, t, n, i, r[s + 6], 9, -1069501632), i = Ct(i, o, t, n, r[s + 11], 14, 643717713), n = Ct(n, i, o, t, r[s], 20, -373897302), t = Ct(t, n, i, o, r[s + 5], 5, -701558691), o = Ct(o, t, n, i, r[s + 10], 9, 38016083), i = Ct(i, o, t, n, r[s + 15], 14, -660478335), n = Ct(n, i, o, t, r[s + 4], 20, -405537848), t = Ct(t, n, i, o, r[s + 9], 5, 568446438), o = Ct(o, t, n, i, r[s + 14], 9, -1019803690), i = Ct(i, o, t, n, r[s + 3], 14, -187363961), n = Ct(n, i, o, t, r[s + 8], 20, 1163531501), t = Ct(t, n, i, o, r[s + 13], 5, -1444681467), o = Ct(o, t, n, i, r[s + 2], 9, -51403784), i = Ct(i, o, t, n, r[s + 7], 14, 1735328473), n = Ct(n, i, o, t, r[s + 12], 20, -1926607734), t = Bt(t, n, i, o, r[s + 5], 4, -378558), o = Bt(o, t, n, i, r[s + 8], 11, -2022574463), i = Bt(i, o, t, n, r[s + 11], 16, 1839030562), n = Bt(n, i, o, t, r[s + 14], 23, -35309556), t = Bt(t, n, i, o, r[s + 1], 4, -1530992060), o = Bt(o, t, n, i, r[s + 4], 11, 1272893353), i = Bt(i, o, t, n, r[s + 7], 16, -155497632), n = Bt(n, i, o, t, r[s + 10], 23, -1094730640), t = Bt(t, n, i, o, r[s + 13], 4, 681279174), o = Bt(o, t, n, i, r[s], 11, -358537222), i = Bt(i, o, t, n, r[s + 3], 16, -722521979), n = Bt(n, i, o, t, r[s + 6], 23, 76029189), t = Bt(t, n, i, o, r[s + 9], 4, -640364487), o = Bt(o, t, n, i, r[s + 12], 11, -421815835), i = Bt(i, o, t, n, r[s + 15], 16, 530742520), n = Bt(n, i, o, t, r[s + 2], 23, -995338651), t = Mt(t, n, i, o, r[s], 6, -198630844), o = Mt(o, t, n, i, r[s + 7], 10, 1126891415), i = Mt(i, o, t, n, r[s + 14], 15, -1416354905), n = Mt(n, i, o, t, r[s + 5], 21, -57434055), t = Mt(t, n, i, o, r[s + 12], 6, 1700485571), o = Mt(o, t, n, i, r[s + 3], 10, -1894986606), i = Mt(i, o, t, n, r[s + 10], 15, -1051523), n = Mt(n, i, o, t, r[s + 1], 21, -2054922799), t = Mt(t, n, i, o, r[s + 8], 6, 1873313359), o = Mt(o, t, n, i, r[s + 15], 10, -30611744), i = Mt(i, o, t, n, r[s + 6], 15, -1560198380), n = Mt(n, i, o, t, r[s + 13], 21, 1309151649), t = Mt(t, n, i, o, r[s + 4], 6, -145523070), o = Mt(o, t, n, i, r[s + 11], 10, -1120210379), i = Mt(i, o, t, n, r[s + 2], 15, 718787259), n = Mt(n, i, o, t, r[s + 9], 21, -343485551), t = qn(t, a), n = qn(n, u), i = qn(i, d), o = qn(o, l)
    }
    return [t, n, i, o]
}

function Sm(r) {
    if (r.length === 0) return [];
    for (var e = r.length * 8, t = new Uint32Array(ad(e)), n = 0; n < e; n += 8) t[n >> 5] |= (r[n / 8] & 255) << n % 32;
    return t
}

function qn(r, e) {
    var t = (r & 65535) + (e & 65535),
        n = (r >> 16) + (e >> 16) + (t >> 16);
    return n << 16 | t & 65535
}

function Im(r, e) {
    return r << e | r >>> 32 - e
}

function Oo(r, e, t, n, i, o) {
    return qn(Im(qn(qn(e, r), qn(n, o)), i), t)
}

function Nt(r, e, t, n, i, o, s) {
    return Oo(e & t | ~e & n, r, e, i, o, s)
}

function Ct(r, e, t, n, i, o, s) {
    return Oo(e & n | t & ~n, r, e, i, o, s)
}

function Bt(r, e, t, n, i, o, s) {
    return Oo(e ^ t ^ n, r, e, i, o, s)
}

function Mt(r, e, t, n, i, o, s) {
    return Oo(t ^ (e | ~n), r, e, i, o, s)
}
var xm = sd("v3", 48, Rm);

function Tm(r, e, t) {
    r = r || {};
    var n = r.random || (r.rng || id)();
    if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
        t = t || 0;
        for (var i = 0; i < 16; ++i) e[t + i] = n[i];
        return e
    }
    return To(n)
}

function Om(r, e, t, n) {
    switch (r) {
        case 0:
            return e & t ^ ~e & n;
        case 1:
            return e ^ t ^ n;
        case 2:
            return e & t ^ e & n ^ t & n;
        case 3:
            return e ^ t ^ n
    }
}

function ks(r, e) {
    return r << e | r >>> 32 - e
}

function Nm(r) {
    var e = [1518500249, 1859775393, 2400959708, 3395469782],
        t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof r == "string") {
        var n = unescape(encodeURIComponent(r));
        r = [];
        for (var i = 0; i < n.length; ++i) r.push(n.charCodeAt(i))
    } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
    r.push(128);
    for (var o = r.length / 4 + 2, s = Math.ceil(o / 16), a = new Array(s), u = 0; u < s; ++u) {
        for (var d = new Uint32Array(16), l = 0; l < 16; ++l) d[l] = r[u * 64 + l * 4] << 24 | r[u * 64 + l * 4 + 1] << 16 | r[u * 64 + l * 4 + 2] << 8 | r[u * 64 + l * 4 + 3];
        a[u] = d
    }
    a[s - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = (r.length - 1) * 8 & 4294967295;
    for (var b = 0; b < s; ++b) {
        for (var S = new Uint32Array(80), m = 0; m < 16; ++m) S[m] = a[b][m];
        for (var v = 16; v < 80; ++v) S[v] = ks(S[v - 3] ^ S[v - 8] ^ S[v - 14] ^ S[v - 16], 1);
        for (var T = t[0], R = t[1], N = t[2], $ = t[3], P = t[4], K = 0; K < 80; ++K) {
            var U = Math.floor(K / 20),
                Y = ks(T, 5) + Om(U, R, N, $) + P + e[U] + S[K] >>> 0;
            P = $, $ = N, N = ks(R, 30) >>> 0, R = T, T = Y
        }
        t[0] = t[0] + T >>> 0, t[1] = t[1] + R >>> 0, t[2] = t[2] + N >>> 0, t[3] = t[3] + $ >>> 0, t[4] = t[4] + P >>> 0
    }
    return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255]
}
var Cm = sd("v5", 80, Nm);
const Bm = "00000000-0000-0000-0000-000000000000";

function Mm(r) {
    if (!xo(r)) throw TypeError("Invalid UUID");
    return parseInt(r.substr(14, 1), 16)
}
const Pm = Object.freeze(Object.defineProperty({
        __proto__: null,
        NIL: Bm,
        parse: od,
        stringify: To,
        v1: bm,
        v3: xm,
        v4: Tm,
        v5: Cm,
        validate: xo,
        version: Mm
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cd = wo(Pm),
    Lm = cd.v4,
    Um = function (r, e, t, n) {
        if (typeof r != "string") throw new TypeError(r + " must be a string");
        n = n || {};
        const i = typeof n.version == "number" ? n.version : 2;
        if (i !== 1 && i !== 2) throw new TypeError(i + " must be 1 or 2");
        const o = {
            method: r
        };
        if (i === 2 && (o.jsonrpc = "2.0"), e) {
            if (typeof e != "object" && !Array.isArray(e)) throw new TypeError(e + " must be an object, array or omitted");
            o.params = e
        }
        if (typeof t > "u") {
            const s = typeof n.generator == "function" ? n.generator : function () {
                return Lm()
            };
            o.id = s(o, n)
        } else i === 2 && t === null ? n.notificationIdNull && (o.id = null) : o.id = t;
        return o
    };
var Dm = Um;
const Fm = cd.v4,
    Hm = Dm,
    mi = function (r, e) {
        if (!(this instanceof mi)) return new mi(r, e);
        e || (e = {}), this.options = {
            reviver: typeof e.reviver < "u" ? e.reviver : null,
            replacer: typeof e.replacer < "u" ? e.replacer : null,
            generator: typeof e.generator < "u" ? e.generator : function () {
                return Fm()
            },
            version: typeof e.version < "u" ? e.version : 2,
            notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
        }, this.callServer = r
    };
var zm = mi;
mi.prototype.request = function (r, e, t, n) {
    const i = this;
    let o = null;
    const s = Array.isArray(r) && typeof e == "function";
    if (this.options.version === 1 && s) throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (s || !s && r && typeof r == "object" && typeof e == "function") n = e, o = r;
    else {
        typeof t == "function" && (n = t, t = void 0);
        const d = typeof n == "function";
        try {
            o = Hm(r, e, t, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull
            })
        } catch (l) {
            if (d) return n(l);
            throw l
        }
        if (!d) return o
    }
    let u;
    try {
        u = JSON.stringify(o, this.options.replacer)
    } catch (d) {
        return n(d)
    }
    return this.callServer(u, function (d, l) {
        i._parseResponse(d, l, n)
    }), o
};
mi.prototype._parseResponse = function (r, e, t) {
    if (r) {
        t(r);
        return
    }
    if (!e) return t();
    let n;
    try {
        n = JSON.parse(e, this.options.reviver)
    } catch (i) {
        return t(i)
    }
    if (t.length === 3)
        if (Array.isArray(n)) {
            const i = function (s) {
                    return typeof s.error < "u"
                },
                o = function (s) {
                    return !i(s)
                };
            return t(null, n.filter(i), n.filter(o))
        } else return t(null, n.error, n.result);
    t(null, n)
};
const Km = $r(zm);
var ud = {
    exports: {}
};
(function (r) {
    var e = Object.prototype.hasOwnProperty,
        t = "~";

    function n() {}
    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (t = !1));

    function i(u, d, l) {
        this.fn = u, this.context = d, this.once = l || !1
    }

    function o(u, d, l, b, S) {
        if (typeof l != "function") throw new TypeError("The listener must be a function");
        var m = new i(l, b || u, S),
            v = t ? t + d : d;
        return u._events[v] ? u._events[v].fn ? u._events[v] = [u._events[v], m] : u._events[v].push(m) : (u._events[v] = m, u._eventsCount++), u
    }

    function s(u, d) {
        --u._eventsCount === 0 ? u._events = new n : delete u._events[d]
    }

    function a() {
        this._events = new n, this._eventsCount = 0
    }
    a.prototype.eventNames = function () {
        var d = [],
            l, b;
        if (this._eventsCount === 0) return d;
        for (b in l = this._events) e.call(l, b) && d.push(t ? b.slice(1) : b);
        return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(l)) : d
    }, a.prototype.listeners = function (d) {
        var l = t ? t + d : d,
            b = this._events[l];
        if (!b) return [];
        if (b.fn) return [b.fn];
        for (var S = 0, m = b.length, v = new Array(m); S < m; S++) v[S] = b[S].fn;
        return v
    }, a.prototype.listenerCount = function (d) {
        var l = t ? t + d : d,
            b = this._events[l];
        return b ? b.fn ? 1 : b.length : 0
    }, a.prototype.emit = function (d, l, b, S, m, v) {
        var T = t ? t + d : d;
        if (!this._events[T]) return !1;
        var R = this._events[T],
            N = arguments.length,
            $, P;
        if (R.fn) {
            switch (R.once && this.removeListener(d, R.fn, void 0, !0), N) {
                case 1:
                    return R.fn.call(R.context), !0;
                case 2:
                    return R.fn.call(R.context, l), !0;
                case 3:
                    return R.fn.call(R.context, l, b), !0;
                case 4:
                    return R.fn.call(R.context, l, b, S), !0;
                case 5:
                    return R.fn.call(R.context, l, b, S, m), !0;
                case 6:
                    return R.fn.call(R.context, l, b, S, m, v), !0
            }
            for (P = 1, $ = new Array(N - 1); P < N; P++) $[P - 1] = arguments[P];
            R.fn.apply(R.context, $)
        } else {
            var K = R.length,
                U;
            for (P = 0; P < K; P++) switch (R[P].once && this.removeListener(d, R[P].fn, void 0, !0), N) {
                case 1:
                    R[P].fn.call(R[P].context);
                    break;
                case 2:
                    R[P].fn.call(R[P].context, l);
                    break;
                case 3:
                    R[P].fn.call(R[P].context, l, b);
                    break;
                case 4:
                    R[P].fn.call(R[P].context, l, b, S);
                    break;
                default:
                    if (!$)
                        for (U = 1, $ = new Array(N - 1); U < N; U++) $[U - 1] = arguments[U];
                    R[P].fn.apply(R[P].context, $)
            }
        }
        return !0
    }, a.prototype.on = function (d, l, b) {
        return o(this, d, l, b, !1)
    }, a.prototype.once = function (d, l, b) {
        return o(this, d, l, b, !0)
    }, a.prototype.removeListener = function (d, l, b, S) {
        var m = t ? t + d : d;
        if (!this._events[m]) return this;
        if (!l) return s(this, m), this;
        var v = this._events[m];
        if (v.fn) v.fn === l && (!S || v.once) && (!b || v.context === b) && s(this, m);
        else {
            for (var T = 0, R = [], N = v.length; T < N; T++)(v[T].fn !== l || S && !v[T].once || b && v[T].context !== b) && R.push(v[T]);
            R.length ? this._events[m] = R.length === 1 ? R[0] : R : s(this, m)
        }
        return this
    }, a.prototype.removeAllListeners = function (d) {
        var l;
        return d ? (l = t ? t + d : d, this._events[l] && s(this, l)) : (this._events = new n, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, r.exports = a
})(ud);
var $m = ud.exports;
const ld = $r($m);
var Wm = class extends ld {
    constructor(e, t, n) {
        super();
        Ae(this, "socket");
        this.socket = new window.WebSocket(e, n), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = i => this.emit("message", i.data), this.socket.onerror = i => this.emit("error", i), this.socket.onclose = i => {
            this.emit("close", i.code, i.reason)
        }
    }
    send(e, t, n) {
        const i = n || t;
        try {
            this.socket.send(e), i()
        } catch (o) {
            i(o)
        }
    }
    close(e, t) {
        this.socket.close(e, t)
    }
    addEventListener(e, t, n) {
        this.socket.addEventListener(e, t, n)
    }
};

function qm(r, e) {
    return new Wm(r, e)
}
var Vm = class {
        encode(r) {
            return JSON.stringify(r)
        }
        decode(r) {
            return JSON.parse(r)
        }
    },
    Gm = class extends ld {
        constructor(e, t = "ws://localhost:8080", {
            autoconnect: n = !0,
            reconnect: i = !0,
            reconnect_interval: o = 1e3,
            max_reconnects: s = 5,
            ...a
        } = {}, u, d) {
            super();
            Ae(this, "address");
            Ae(this, "rpc_id");
            Ae(this, "queue");
            Ae(this, "options");
            Ae(this, "autoconnect");
            Ae(this, "ready");
            Ae(this, "reconnect");
            Ae(this, "reconnect_timer_id");
            Ae(this, "reconnect_interval");
            Ae(this, "max_reconnects");
            Ae(this, "rest_options");
            Ae(this, "current_reconnects");
            Ae(this, "generate_request_id");
            Ae(this, "socket");
            Ae(this, "webSocketFactory");
            Ae(this, "dataPack");
            this.webSocketFactory = e, this.queue = {}, this.rpc_id = 0, this.address = t, this.autoconnect = n, this.ready = !1, this.reconnect = i, this.reconnect_timer_id = void 0, this.reconnect_interval = o, this.max_reconnects = s, this.rest_options = a, this.current_reconnects = 0, this.generate_request_id = u || (() => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1), d ? this.dataPack = d : this.dataPack = new Vm, this.autoconnect && this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options
            })
        }
        connect() {
            this.socket || this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options
            })
        }
        call(e, t, n, i) {
            return !i && typeof n == "object" && (i = n, n = null), new Promise((o, s) => {
                if (!this.ready) return s(new Error("socket not ready"));
                const a = this.generate_request_id(e, t),
                    u = {
                        jsonrpc: "2.0",
                        method: e,
                        params: t || void 0,
                        id: a
                    };
                this.socket.send(this.dataPack.encode(u), i, d => {
                    if (d) return s(d);
                    this.queue[a] = {
                        promise: [o, s]
                    }, n && (this.queue[a].timeout = setTimeout(() => {
                        delete this.queue[a], s(new Error("reply timeout"))
                    }, n))
                })
            })
        }
        async login(e) {
            const t = await this.call("rpc.login", e);
            if (!t) throw new Error("authentication failed");
            return t
        }
        async listMethods() {
            return await this.call("__listMethods")
        }
        notify(e, t) {
            return new Promise((n, i) => {
                if (!this.ready) return i(new Error("socket not ready"));
                const o = {
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                };
                this.socket.send(this.dataPack.encode(o), s => {
                    if (s) return i(s);
                    n()
                })
            })
        }
        async subscribe(e) {
            typeof e == "string" && (e = [e]);
            const t = await this.call("rpc.on", e);
            if (typeof e == "string" && t[e] !== "ok") throw new Error("Failed subscribing to an event '" + e + "' with: " + t[e]);
            return t
        }
        async unsubscribe(e) {
            typeof e == "string" && (e = [e]);
            const t = await this.call("rpc.off", e);
            if (typeof e == "string" && t[e] !== "ok") throw new Error("Failed unsubscribing from an event with: " + t);
            return t
        }
        close(e, t) {
            this.socket.close(e || 1e3, t)
        }
        setAutoReconnect(e) {
            this.reconnect = e
        }
        setReconnectInterval(e) {
            this.reconnect_interval = e
        }
        setMaxReconnects(e) {
            this.max_reconnects = e
        }
        _connect(e, t) {
            clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(e, t), this.socket.addEventListener("open", () => {
                this.ready = !0, this.emit("open"), this.current_reconnects = 0
            }), this.socket.addEventListener("message", ({
                data: n
            }) => {
                n instanceof ArrayBuffer && (n = se.from(n).toString());
                try {
                    n = this.dataPack.decode(n)
                } catch {
                    return
                }
                if (n.notification && this.listeners(n.notification).length) {
                    if (!Object.keys(n.params).length) return this.emit(n.notification);
                    const i = [n.notification];
                    if (n.params.constructor === Object) i.push(n.params);
                    else
                        for (let o = 0; o < n.params.length; o++) i.push(n.params[o]);
                    return Promise.resolve().then(() => {
                        this.emit.apply(this, i)
                    })
                }
                if (!this.queue[n.id]) return n.method ? Promise.resolve().then(() => {
                    this.emit(n.method, n == null ? void 0 : n.params)
                }) : void 0;
                "error" in n == "result" in n && this.queue[n.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), this.queue[n.id].timeout && clearTimeout(this.queue[n.id].timeout), n.error ? this.queue[n.id].promise[1](n.error) : this.queue[n.id].promise[0](n.result), delete this.queue[n.id]
            }), this.socket.addEventListener("error", n => this.emit("error", n)), this.socket.addEventListener("close", ({
                code: n,
                reason: i
            }) => {
                this.ready && setTimeout(() => this.emit("close", n, i), 0), this.ready = !1, this.socket = void 0, n !== 1e3 && (this.current_reconnects++, this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout(() => this._connect(e, t), this.reconnect_interval)))
            })
        }
    };
const jm = BigInt(0),
    ri = BigInt(1),
    Zm = BigInt(2),
    Ym = BigInt(7),
    Xm = BigInt(256),
    Jm = BigInt(113),
    dd = [],
    fd = [],
    hd = [];
for (let r = 0, e = ri, t = 1, n = 0; r < 24; r++) {
    [t, n] = [n, (2 * t + 3 * n) % 5], dd.push(2 * (5 * n + t)), fd.push((r + 1) * (r + 2) / 2 % 64);
    let i = jm;
    for (let o = 0; o < 7; o++) e = (e << ri ^ (e >> Ym) * Jm) % Xm, e & Zm && (i ^= ri << (ri << BigInt(o)) - ri);
    hd.push(i)
}
const pd = ul(hd, !0),
    Qm = pd[0],
    eg = pd[1],
    Uc = (r, e, t) => t > 32 ? x0(r, e, t) : S0(r, e, t),
    Dc = (r, e, t) => t > 32 ? T0(r, e, t) : I0(r, e, t);

function tg(r, e = 24) {
    const t = new Uint32Array(10);
    for (let n = 24 - e; n < 24; n++) {
        for (let s = 0; s < 10; s++) t[s] = r[s] ^ r[s + 10] ^ r[s + 20] ^ r[s + 30] ^ r[s + 40];
        for (let s = 0; s < 10; s += 2) {
            const a = (s + 8) % 10,
                u = (s + 2) % 10,
                d = t[u],
                l = t[u + 1],
                b = Uc(d, l, 1) ^ t[a],
                S = Dc(d, l, 1) ^ t[a + 1];
            for (let m = 0; m < 50; m += 10) r[s + m] ^= b, r[s + m + 1] ^= S
        }
        let i = r[2],
            o = r[3];
        for (let s = 0; s < 24; s++) {
            const a = fd[s],
                u = Uc(i, o, a),
                d = Dc(i, o, a),
                l = dd[s];
            i = r[l], o = r[l + 1], r[l] = u, r[l + 1] = d
        }
        for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++) t[a] = r[s + a];
            for (let a = 0; a < 10; a++) r[s + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10]
        }
        r[0] ^= Qm[n], r[1] ^= eg[n]
    }
    Zn(t)
}
class La extends ga {
    constructor(e, t, n, i = !1, o = 24) {
        if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = i, this.rounds = o, pi(n), !(0 < e && e < 200)) throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200), this.state32 = m0(this.state)
    }
    clone() {
        return this._cloneInto()
    }
    keccak() {
        Rc(this.state32), tg(this.state32, this.rounds), Rc(this.state32), this.posOut = 0, this.pos = 0
    }
    update(e) {
        Lr(this), e = _o(e), tn(e);
        const {
            blockLen: t,
            state: n
        } = this, i = e.length;
        for (let o = 0; o < i;) {
            const s = Math.min(t - this.pos, i - o);
            for (let a = 0; a < s; a++) n[this.pos++] ^= e[o++];
            this.pos === t && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {
            state: e,
            suffix: t,
            pos: n,
            blockLen: i
        } = this;
        e[n] ^= t, t & 128 && n === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak()
    }
    writeInto(e) {
        Lr(this, !1), tn(e), this.finish();
        const t = this.state,
            {
                blockLen: n
            } = this;
        for (let i = 0, o = e.length; i < o;) {
            this.posOut >= n && this.keccak();
            const s = Math.min(n - this.posOut, o - i);
            e.set(t.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return pi(e), this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (ol(e, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0, Zn(this.state)
    }
    _cloneInto(e) {
        const {
            blockLen: t,
            suffix: n,
            outputLen: i,
            rounds: o,
            enableXOF: s
        } = this;
        return e || (e = new La(t, n, i, s, o)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = o, e.suffix = n, e.outputLen = i, e.enableXOF = s, e.destroyed = this.destroyed, e
    }
}
const ng = (r, e, t) => wa(() => new La(e, r, t)),
    Fc = ng(1, 136, 256 / 8);
class yd extends ga {
    constructor(e, t) {
        super(), this.finished = !1, this.destroyed = !1, y0(e);
        const n = _o(t);
        if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const i = this.blockLen,
            o = new Uint8Array(i);
        o.set(n.length > i ? e.create().update(n).digest() : n);
        for (let s = 0; s < o.length; s++) o[s] ^= 54;
        this.iHash.update(o), this.oHash = e.create();
        for (let s = 0; s < o.length; s++) o[s] ^= 106;
        this.oHash.update(o), Zn(o)
    }
    update(e) {
        return Lr(this), this.iHash.update(e), this
    }
    digestInto(e) {
        Lr(this), tn(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: t,
            iHash: n,
            finished: i,
            destroyed: o,
            blockLen: s,
            outputLen: a
        } = this;
        return e = e, e.finished = i, e.destroyed = o, e.blockLen = s, e.outputLen = a, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e
    }
    clone() {
        return this._cloneInto()
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const md = (r, e, t) => new yd(r, e).update(t).digest();
md.create = (r, e) => new yd(r, e); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Hc(r) {
    r.lowS !== void 0 && lr("lowS", r.lowS), r.prehash !== void 0 && lr("prehash", r.prehash)
}
class rg extends Error {
    constructor(e = "") {
        super(e)
    }
}
const Tn = {
        Err: rg,
        _tlv: {
            encode: (r, e) => {
                const {
                    Err: t
                } = Tn;
                if (r < 0 || r > 256) throw new t("tlv.encode: wrong tag");
                if (e.length & 1) throw new t("tlv.encode: unpadded data");
                const n = e.length / 2,
                    i = Di(n);
                if (i.length / 2 & 128) throw new t("tlv.encode: long form length too big");
                const o = n > 127 ? Di(i.length / 2 | 128) : "";
                return Di(r) + o + i + e
            },
            decode(r, e) {
                const {
                    Err: t
                } = Tn;
                let n = 0;
                if (r < 0 || r > 256) throw new t("tlv.encode: wrong tag");
                if (e.length < 2 || e[n++] !== r) throw new t("tlv.decode: wrong tlv");
                const i = e[n++],
                    o = !!(i & 128);
                let s = 0;
                if (!o) s = i;
                else {
                    const u = i & 127;
                    if (!u) throw new t("tlv.decode(long): indefinite length not supported");
                    if (u > 4) throw new t("tlv.decode(long): byte length is too big");
                    const d = e.subarray(n, n + u);
                    if (d.length !== u) throw new t("tlv.decode: length bytes not complete");
                    if (d[0] === 0) throw new t("tlv.decode(long): zero leftmost byte");
                    for (const l of d) s = s << 8 | l;
                    if (n += u, s < 128) throw new t("tlv.decode(long): not minimal encoding")
                }
                const a = e.subarray(n, n + s);
                if (a.length !== s) throw new t("tlv.decode: wrong value length");
                return {
                    v: a,
                    l: e.subarray(n + s)
                }
            }
        },
        _int: {
            encode(r) {
                const {
                    Err: e
                } = Tn;
                if (r < ci) throw new e("integer: negative integers are not allowed");
                let t = Di(r);
                if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t), t.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
                return t
            },
            decode(r) {
                const {
                    Err: e
                } = Tn;
                if (r[0] & 128) throw new e("invalid signature integer: negative");
                if (r[0] === 0 && !(r[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
                return Eo(r)
            }
        },
        toSig(r) {
            const {
                Err: e,
                _int: t,
                _tlv: n
            } = Tn, i = rt("signature", r), {
                v: o,
                l: s
            } = n.decode(48, i);
            if (s.length) throw new e("invalid signature: left bytes after parsing");
            const {
                v: a,
                l: u
            } = n.decode(2, o), {
                v: d,
                l
            } = n.decode(2, u);
            if (l.length) throw new e("invalid signature: left bytes after parsing");
            return {
                r: t.decode(a),
                s: t.decode(d)
            }
        },
        hexFromSig(r) {
            const {
                _tlv: e,
                _int: t
            } = Tn, n = e.encode(2, t.encode(r.r)), i = e.encode(2, t.encode(r.s)), o = n + i;
            return e.encode(48, o)
        }
    },
    ci = BigInt(0),
    ui = BigInt(1),
    ig = BigInt(2),
    zi = BigInt(3),
    og = BigInt(4);

function sg(r, e, t) {
    function n(i) {
        const o = r.sqr(i),
            s = r.mul(o, i);
        return r.add(r.add(s, r.mul(i, e)), t)
    }
    return n
}

function gd(r, e, t) {
    const {
        BYTES: n
    } = r;

    function i(o) {
        let s;
        if (typeof o == "bigint") s = o;
        else {
            let a = rt("private key", o);
            if (e) {
                if (!e.includes(a.length * 2)) throw new Error("invalid private key");
                const u = new Uint8Array(n);
                u.set(a, u.length - a.length), a = u
            }
            try {
                s = r.fromBytes(a)
            } catch {
                throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof o}`)
            }
        }
        if (t && (s = r.create(s)), !r.isValidNot0(s)) throw new Error("invalid private key: out of range [1..N-1]");
        return s
    }
    return i
}

function ag(r, e = {}) {
    const {
        Fp: t,
        Fn: n
    } = kl("weierstrass", r, e), {
        h: i,
        n: o
    } = r;
    vi(e, {}, {
        allowInfinityPoint: "boolean",
        clearCofactor: "function",
        isTorsionFree: "function",
        fromBytes: "function",
        toBytes: "function",
        endo: "object",
        wrapPrivateKey: "boolean"
    });
    const {
        endo: s
    } = e;
    if (s && (!t.is0(r.a) || typeof s.beta != "bigint" || typeof s.splitScalar != "function")) throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');

    function a() {
        if (!t.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()")
    }

    function u(Z, L, q) {
        const {
            x: M,
            y: D
        } = L.toAffine(), w = t.toBytes(M);
        if (lr("isCompressed", q), q) {
            a();
            const c = !t.isOdd(D);
            return Pn(wd(c), w)
        } else return Pn(Uint8Array.of(4), w, t.toBytes(D))
    }

    function d(Z) {
        tn(Z);
        const L = t.BYTES,
            q = L + 1,
            M = 2 * L + 1,
            D = Z.length,
            w = Z[0],
            c = Z.subarray(1);
        if (D === q && (w === 2 || w === 3)) {
            const f = t.fromBytes(c);
            if (!t.isValid(f)) throw new Error("bad point: is not on curve, wrong x");
            const g = S(f);
            let E;
            try {
                E = t.sqrt(g)
            } catch (C) {
                const A = C instanceof Error ? ": " + C.message : "";
                throw new Error("bad point: is not on curve, sqrt error" + A)
            }
            a();
            const k = t.isOdd(E);
            return (w & 1) === 1 !== k && (E = t.neg(E)), {
                x: f,
                y: E
            }
        } else if (D === M && w === 4) {
            const f = t.fromBytes(c.subarray(L * 0, L * 1)),
                g = t.fromBytes(c.subarray(L * 1, L * 2));
            if (!m(f, g)) throw new Error("bad point: is not on curve");
            return {
                x: f,
                y: g
            }
        } else throw new Error(`bad point: got length ${D}, expected compressed=${q} or uncompressed=${M}`)
    }
    const l = e.toBytes || u,
        b = e.fromBytes || d,
        S = sg(t, r.a, r.b);

    function m(Z, L) {
        const q = t.sqr(L),
            M = S(Z);
        return t.eql(q, M)
    }
    if (!m(r.Gx, r.Gy)) throw new Error("bad curve params: generator point");
    const v = t.mul(t.pow(r.a, zi), og),
        T = t.mul(t.sqr(r.b), BigInt(27));
    if (t.is0(t.add(v, T))) throw new Error("bad curve params: a or b");

    function R(Z, L, q = !1) {
        if (!t.isValid(L) || q && t.is0(L)) throw new Error(`bad point coordinate ${Z}`);
        return L
    }

    function N(Z) {
        if (!(Z instanceof U)) throw new Error("ProjectivePoint expected")
    }
    const $ = to((Z, L) => {
            const {
                px: q,
                py: M,
                pz: D
            } = Z;
            if (t.eql(D, t.ONE)) return {
                x: q,
                y: M
            };
            const w = Z.is0();
            L == null && (L = w ? t.ONE : t.inv(D));
            const c = t.mul(q, L),
                f = t.mul(M, L),
                g = t.mul(D, L);
            if (w) return {
                x: t.ZERO,
                y: t.ZERO
            };
            if (!t.eql(g, t.ONE)) throw new Error("invZ was invalid");
            return {
                x: c,
                y: f
            }
        }),
        P = to(Z => {
            if (Z.is0()) {
                if (e.allowInfinityPoint && !t.is0(Z.py)) return;
                throw new Error("bad point: ZERO")
            }
            const {
                x: L,
                y: q
            } = Z.toAffine();
            if (!t.isValid(L) || !t.isValid(q)) throw new Error("bad point: x or y not field elements");
            if (!m(L, q)) throw new Error("bad point: equation left != right");
            if (!Z.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
            return !0
        });

    function K(Z, L, q, M, D) {
        return q = new U(t.mul(q.px, Z), q.py, q.pz), L = ai(M, L), q = ai(D, q), L.add(q)
    }
    class U {
        constructor(L, q, M) {
            this.px = R("x", L), this.py = R("y", q, !0), this.pz = R("z", M), Object.freeze(this)
        }
        static fromAffine(L) {
            const {
                x: q,
                y: M
            } = L || {};
            if (!L || !t.isValid(q) || !t.isValid(M)) throw new Error("invalid affine point");
            if (L instanceof U) throw new Error("projective point not allowed");
            return t.is0(q) && t.is0(M) ? U.ZERO : new U(q, M, t.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(L) {
            return _l(U, "pz", L)
        }
        static fromBytes(L) {
            return tn(L), U.fromHex(L)
        }
        static fromHex(L) {
            const q = U.fromAffine(b(rt("pointHex", L)));
            return q.assertValidity(), q
        }
        static fromPrivateKey(L) {
            const q = gd(n, e.allowedPrivateKeyLengths, e.wrapPrivateKey);
            return U.BASE.multiply(q(L))
        }
        static msm(L, q) {
            return Al(U, n, L, q)
        }
        precompute(L = 8, q = !0) {
            return G.setWindowSize(this, L), q || this.multiply(zi), this
        }
        _setWindowSize(L) {
            this.precompute(L)
        }
        assertValidity() {
            P(this)
        }
        hasEvenY() {
            const {
                y: L
            } = this.toAffine();
            if (!t.isOdd) throw new Error("Field doesn't support isOdd");
            return !t.isOdd(L)
        }
        equals(L) {
            N(L);
            const {
                px: q,
                py: M,
                pz: D
            } = this, {
                px: w,
                py: c,
                pz: f
            } = L, g = t.eql(t.mul(q, f), t.mul(w, D)), E = t.eql(t.mul(M, f), t.mul(c, D));
            return g && E
        }
        negate() {
            return new U(this.px, t.neg(this.py), this.pz)
        }
        double() {
            const {
                a: L,
                b: q
            } = r, M = t.mul(q, zi), {
                px: D,
                py: w,
                pz: c
            } = this;
            let f = t.ZERO,
                g = t.ZERO,
                E = t.ZERO,
                k = t.mul(D, D),
                O = t.mul(w, w),
                C = t.mul(c, c),
                A = t.mul(D, w);
            return A = t.add(A, A), E = t.mul(D, c), E = t.add(E, E), f = t.mul(L, E), g = t.mul(M, C), g = t.add(f, g), f = t.sub(O, g), g = t.add(O, g), g = t.mul(f, g), f = t.mul(A, f), E = t.mul(M, E), C = t.mul(L, C), A = t.sub(k, C), A = t.mul(L, A), A = t.add(A, E), E = t.add(k, k), k = t.add(E, k), k = t.add(k, C), k = t.mul(k, A), g = t.add(g, k), C = t.mul(w, c), C = t.add(C, C), k = t.mul(C, A), f = t.sub(f, k), E = t.mul(C, O), E = t.add(E, E), E = t.add(E, E), new U(f, g, E)
        }
        add(L) {
            N(L);
            const {
                px: q,
                py: M,
                pz: D
            } = this, {
                px: w,
                py: c,
                pz: f
            } = L;
            let g = t.ZERO,
                E = t.ZERO,
                k = t.ZERO;
            const O = r.a,
                C = t.mul(r.b, zi);
            let A = t.mul(q, w),
                y = t.mul(M, c),
                x = t.mul(D, f),
                ee = t.add(q, M),
                J = t.add(w, c);
            ee = t.mul(ee, J), J = t.add(A, y), ee = t.sub(ee, J), J = t.add(q, D);
            let ue = t.add(w, f);
            return J = t.mul(J, ue), ue = t.add(A, x), J = t.sub(J, ue), ue = t.add(M, D), g = t.add(c, f), ue = t.mul(ue, g), g = t.add(y, x), ue = t.sub(ue, g), k = t.mul(O, J), g = t.mul(C, x), k = t.add(g, k), g = t.sub(y, k), k = t.add(y, k), E = t.mul(g, k), y = t.add(A, A), y = t.add(y, A), x = t.mul(O, x), J = t.mul(C, J), y = t.add(y, x), x = t.sub(A, x), x = t.mul(O, x), J = t.add(J, x), A = t.mul(y, J), E = t.add(E, A), A = t.mul(ue, J), g = t.mul(ee, g), g = t.sub(g, A), A = t.mul(ee, y), k = t.mul(ue, k), k = t.add(k, A), new U(g, E, k)
        }
        subtract(L) {
            return this.add(L.negate())
        }
        is0() {
            return this.equals(U.ZERO)
        }
        multiply(L) {
            const {
                endo: q
            } = e;
            if (!n.isValidNot0(L)) throw new Error("invalid scalar: out of range");
            let M, D;
            const w = c => G.wNAFCached(this, c, U.normalizeZ);
            if (q) {
                const {
                    k1neg: c,
                    k1: f,
                    k2neg: g,
                    k2: E
                } = q.splitScalar(L), {
                    p: k,
                    f: O
                } = w(f), {
                    p: C,
                    f: A
                } = w(E);
                D = O.add(A), M = K(q.beta, k, C, c, g)
            } else {
                const {
                    p: c,
                    f
                } = w(L);
                M = c, D = f
            }
            return U.normalizeZ([M, D])[0]
        }
        multiplyUnsafe(L) {
            const {
                endo: q
            } = e, M = this;
            if (!n.isValid(L)) throw new Error("invalid scalar: out of range");
            if (L === ci || M.is0()) return U.ZERO;
            if (L === ui) return M;
            if (G.hasPrecomputes(this)) return this.multiply(L);
            if (q) {
                const {
                    k1neg: D,
                    k1: w,
                    k2neg: c,
                    k2: f
                } = q.splitScalar(L), {
                    p1: g,
                    p2: E
                } = ry(U, M, w, f);
                return K(q.beta, g, E, D, c)
            } else return G.wNAFCachedUnsafe(M, L)
        }
        multiplyAndAddUnsafe(L, q, M) {
            const D = this.multiplyUnsafe(q).add(L.multiplyUnsafe(M));
            return D.is0() ? void 0 : D
        }
        toAffine(L) {
            return $(this, L)
        }
        isTorsionFree() {
            const {
                isTorsionFree: L
            } = e;
            return i === ui ? !0 : L ? L(U, this) : G.wNAFCachedUnsafe(this, o).is0()
        }
        clearCofactor() {
            const {
                clearCofactor: L
            } = e;
            return i === ui ? this : L ? L(U, this) : this.multiplyUnsafe(i)
        }
        toBytes(L = !0) {
            return lr("isCompressed", L), this.assertValidity(), l(U, this, L)
        }
        toRawBytes(L = !0) {
            return this.toBytes(L)
        }
        toHex(L = !0) {
            return Ur(this.toBytes(L))
        }
        toString() {
            return `<Point ${this.is0()?"ZERO":this.toHex()}>`
        }
    }
    U.BASE = new U(r.Gx, r.Gy, t.ONE), U.ZERO = new U(t.ZERO, t.ONE, t.ZERO), U.Fp = t, U.Fn = n;
    const Y = n.BITS,
        G = Rl(U, e.endo ? Math.ceil(Y / 2) : Y);
    return U
}

function wd(r) {
    return Uint8Array.of(r ? 2 : 3)
}

function cg(r, e, t = {}) {
    vi(e, {
        hash: "function"
    }, {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function"
    });
    const n = e.randomBytes || al,
        i = e.hmac || ((M, ...D) => md(e.hash, M, Pn(...D))),
        {
            Fp: o,
            Fn: s
        } = r,
        {
            ORDER: a,
            BITS: u
        } = s;

    function d(M) {
        const D = a >> ui;
        return M > D
    }

    function l(M) {
        return d(M) ? s.neg(M) : M
    }

    function b(M, D) {
        if (!s.isValidNot0(D)) throw new Error(`invalid signature ${M}: out of range 1..CURVE.n`)
    }
    class S {
        constructor(D, w, c) {
            b("r", D), b("s", w), this.r = D, this.s = w, c != null && (this.recovery = c), Object.freeze(this)
        }
        static fromCompact(D) {
            const w = s.BYTES,
                c = rt("compactSignature", D, w * 2);
            return new S(s.fromBytes(c.subarray(0, w)), s.fromBytes(c.subarray(w, w * 2)))
        }
        static fromDER(D) {
            const {
                r: w,
                s: c
            } = Tn.toSig(rt("DER", D));
            return new S(w, c)
        }
        assertValidity() {}
        addRecoveryBit(D) {
            return new S(this.r, this.s, D)
        }
        recoverPublicKey(D) {
            const w = o.ORDER,
                {
                    r: c,
                    s: f,
                    recovery: g
                } = this;
            if (g == null || ![0, 1, 2, 3].includes(g)) throw new Error("recovery id invalid");
            if (a * ig < w && g > 1) throw new Error("recovery id is ambiguous for h>1 curve");
            const k = g === 2 || g === 3 ? c + a : c;
            if (!o.isValid(k)) throw new Error("recovery id 2 or 3 invalid");
            const O = o.toBytes(k),
                C = r.fromHex(Pn(wd((g & 1) === 0), O)),
                A = s.inv(k),
                y = P(rt("msgHash", D)),
                x = s.create(-y * A),
                ee = s.create(f * A),
                J = r.BASE.multiplyUnsafe(x).add(C.multiplyUnsafe(ee));
            if (J.is0()) throw new Error("point at infinify");
            return J.assertValidity(), J
        }
        hasHighS() {
            return d(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new S(this.r, s.neg(this.s), this.recovery) : this
        }
        toBytes(D) {
            if (D === "compact") return Pn(s.toBytes(this.r), s.toBytes(this.s));
            if (D === "der") return ma(Tn.hexFromSig(this));
            throw new Error("invalid format")
        }
        toDERRawBytes() {
            return this.toBytes("der")
        }
        toDERHex() {
            return Ur(this.toBytes("der"))
        }
        toCompactRawBytes() {
            return this.toBytes("compact")
        }
        toCompactHex() {
            return Ur(this.toBytes("compact"))
        }
    }
    const m = gd(s, t.allowedPrivateKeyLengths, t.wrapPrivateKey),
        v = {
            isValidPrivateKey(M) {
                try {
                    return m(M), !0
                } catch {
                    return !1
                }
            },
            normPrivateKeyToScalar: m,
            randomPrivateKey: () => {
                const M = a;
                return ey(n(bl(M)), M)
            },
            precompute(M = 8, D = r.BASE) {
                return D.precompute(M, !1)
            }
        };

    function T(M, D = !0) {
        return r.fromPrivateKey(M).toBytes(D)
    }

    function R(M) {
        if (typeof M == "bigint") return !1;
        if (M instanceof r) return !0;
        const w = rt("key", M).length,
            c = o.BYTES,
            f = c + 1,
            g = 2 * c + 1;
        if (!(t.allowedPrivateKeyLengths || s.BYTES === f)) return w === f || w === g
    }

    function N(M, D, w = !0) {
        if (R(M) === !0) throw new Error("first arg must be private key");
        if (R(D) === !1) throw new Error("second arg must be public key");
        return r.fromHex(D).multiply(m(M)).toBytes(w)
    }
    const $ = e.bits2int || function (M) {
            if (M.length > 8192) throw new Error("input is too large");
            const D = Eo(M),
                w = M.length * 8 - u;
            return w > 0 ? D >> BigInt(w) : D
        },
        P = e.bits2int_modN || function (M) {
            return s.create($(M))
        },
        K = Ro(u);

    function U(M) {
        return Tr("num < 2^" + u, M, ci, K), s.toBytes(M)
    }

    function Y(M, D, w = G) {
        if (["recovered", "canonical"].some(ee => ee in w)) throw new Error("sign() legacy options not supported");
        const {
            hash: c
        } = e;
        let {
            lowS: f,
            prehash: g,
            extraEntropy: E
        } = w;
        f == null && (f = !0), M = rt("msgHash", M), Hc(w), g && (M = rt("prehashed msgHash", c(M)));
        const k = P(M),
            O = m(D),
            C = [U(O), U(k)];
        if (E != null && E !== !1) {
            const ee = E === !0 ? n(o.BYTES) : E;
            C.push(rt("extraEntropy", ee))
        }
        const A = Pn(...C),
            y = k;

        function x(ee) {
            const J = $(ee);
            if (!s.isValidNot0(J)) return;
            const ue = s.inv(J),
                Fe = r.BASE.multiply(J).toAffine(),
                Re = s.create(Fe.x);
            if (Re === ci) return;
            const ke = s.create(ue * s.create(y + Re * O));
            if (ke === ci) return;
            let Rn = (Fe.x === Re ? 0 : 2) | Number(Fe.y & ui),
                Se = ke;
            return f && d(ke) && (Se = l(ke), Rn ^= 1), new S(Re, Se, Rn)
        }
        return {
            seed: A,
            k2sig: x
        }
    }
    const G = {
            lowS: e.lowS,
            prehash: !1
        },
        Z = {
            lowS: e.lowS,
            prehash: !1
        };

    function L(M, D, w = G) {
        const {
            seed: c,
            k2sig: f
        } = Y(M, D, w);
        return W0(e.hash.outputLen, s.BYTES, i)(c, f)
    }
    r.BASE.precompute(8);

    function q(M, D, w, c = Z) {
        const f = M;
        D = rt("msgHash", D), w = rt("publicKey", w), Hc(c);
        const {
            lowS: g,
            prehash: E,
            format: k
        } = c;
        if ("strict" in c) throw new Error("options.strict was renamed to lowS");
        if (k !== void 0 && !["compact", "der", "js"].includes(k)) throw new Error('format must be "compact", "der" or "js"');
        const O = typeof f == "string" || ya(f),
            C = !O && !k && typeof f == "object" && f !== null && typeof f.r == "bigint" && typeof f.s == "bigint";
        if (!O && !C) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let A, y;
        try {
            if (C)
                if (k === void 0 || k === "js") A = new S(f.r, f.s);
                else throw new Error("invalid format");
            if (O) {
                try {
                    k !== "compact" && (A = S.fromDER(f))
                } catch (Se) {
                    if (!(Se instanceof Tn.Err)) throw Se
                }!A && k !== "der" && (A = S.fromCompact(f))
            }
            y = r.fromHex(w)
        } catch {
            return !1
        }
        if (!A || g && A.hasHighS()) return !1;
        E && (D = e.hash(D));
        const {
            r: x,
            s: ee
        } = A, J = P(D), ue = s.inv(ee), Fe = s.create(J * ue), Re = s.create(x * ue), ke = r.BASE.multiplyUnsafe(Fe).add(y.multiplyUnsafe(Re));
        return ke.is0() ? !1 : s.create(ke.x) === x
    }
    return Object.freeze({
        getPublicKey: T,
        getSharedSecret: N,
        sign: L,
        verify: q,
        utils: v,
        Point: r,
        Signature: S
    })
}

function ug(r) {
    const e = {
            a: r.a,
            b: r.b,
            p: r.Fp.ORDER,
            n: r.n,
            h: r.h,
            Gx: r.Gx,
            Gy: r.Gy
        },
        t = r.Fp,
        n = Wr(e.n, r.nBitLength),
        i = {
            Fp: t,
            Fn: n,
            allowedPrivateKeyLengths: r.allowedPrivateKeyLengths,
            allowInfinityPoint: r.allowInfinityPoint,
            endo: r.endo,
            wrapPrivateKey: r.wrapPrivateKey,
            isTorsionFree: r.isTorsionFree,
            clearCofactor: r.clearCofactor,
            fromBytes: r.fromBytes,
            toBytes: r.toBytes
        };
    return {
        CURVE: e,
        curveOpts: i
    }
}

function lg(r) {
    const {
        CURVE: e,
        curveOpts: t
    } = ug(r), n = {
        hash: r.hash,
        hmac: r.hmac,
        randomBytes: r.randomBytes,
        lowS: r.lowS,
        bits2int: r.bits2int,
        bits2int_modN: r.bits2int_modN
    };
    return {
        CURVE: e,
        curveOpts: t,
        ecdsaOpts: n
    }
}

function dg(r, e) {
    return Object.assign({}, e, {
        ProjectivePoint: e.Point,
        CURVE: r
    })
}

function fg(r) {
    const {
        CURVE: e,
        curveOpts: t,
        ecdsaOpts: n
    } = lg(r), i = ag(e, t), o = cg(i, n, t);
    return dg(r, o)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function hg(r, e) {
    const t = n => fg({
        ...r,
        hash: n
    });
    return {
        ...t(e),
        create: t
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const uo = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: BigInt(1),
    a: BigInt(0),
    b: BigInt(7),
    Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
    Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
};
BigInt(0);
const pg = BigInt(1),
    Gs = BigInt(2),
    zc = (r, e) => (r + e / Gs) / e;

function yg(r) {
    const e = uo.p,
        t = BigInt(3),
        n = BigInt(6),
        i = BigInt(11),
        o = BigInt(22),
        s = BigInt(23),
        a = BigInt(44),
        u = BigInt(88),
        d = r * r * r % e,
        l = d * d * r % e,
        b = tt(l, t, e) * l % e,
        S = tt(b, t, e) * l % e,
        m = tt(S, Gs, e) * d % e,
        v = tt(m, i, e) * m % e,
        T = tt(v, o, e) * v % e,
        R = tt(T, a, e) * T % e,
        N = tt(R, u, e) * R % e,
        $ = tt(N, a, e) * T % e,
        P = tt($, t, e) * l % e,
        K = tt(P, s, e) * v % e,
        U = tt(K, n, e) * d % e,
        Y = tt(U, Gs, e);
    if (!js.eql(js.sqr(Y), r)) throw new Error("Cannot find square root");
    return Y
}
const js = Wr(uo.p, void 0, void 0, {
        sqrt: yg
    }),
    Ua = hg({
        ...uo,
        Fp: js,
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: r => {
                const e = uo.n,
                    t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    n = -pg * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    o = t,
                    s = BigInt("0x100000000000000000000000000000000"),
                    a = zc(o * r, e),
                    u = zc(-n * r, e);
                let d = it(r - a * t - u * i, e),
                    l = it(-a * n - u * o, e);
                const b = d > s,
                    S = l > s;
                if (b && (d = e - d), S && (l = e - l), d > s || l > s) throw new Error("splitScalar: Endomorphism failed, k=" + r);
                return {
                    k1neg: b,
                    k1: d,
                    k2neg: S,
                    k2: l
                }
            }
        }
    }, dl),
    mg = qr.utils.randomPrivateKey,
    Kc = () => {
        const r = qr.utils.randomPrivateKey(),
            e = lo(r),
            t = new Uint8Array(64);
        return t.set(r), t.set(e, 32), {
            publicKey: e,
            secretKey: t
        }
    },
    lo = qr.getPublicKey;

function $c(r) {
    try {
        return qr.ExtendedPoint.fromHex(r), !0
    } catch {
        return !1
    }
}
const Da = (r, e) => qr.sign(r, e.slice(0, 32)),
    gg = qr.verify,
    be = r => se.isBuffer(r) ? r : r instanceof Uint8Array ? se.from(r.buffer, r.byteOffset, r.byteLength) : se.from(r);
let Fa = class {
    constructor(e) {
        Object.assign(this, e)
    }
    encode() {
        return se.from(Bl(li, this))
    }
    static decode(e) {
        return Ml(li, this, e)
    }
    static decodeUnchecked(e) {
        return xl(li, this, e)
    }
};
class wg extends Fa {
    constructor(e) {
        if (super(e), this.enum = "", Object.keys(e).length !== 1) throw new Error("Enum can only take single value");
        Object.keys(e).map(t => {
            this.enum = t
        })
    }
}
const li = new Map;
var bd;
const _d = 32,
    gn = 32;

function bg(r) {
    return r._bn !== void 0
}
let Wc = 1;
class j extends Fa {
    constructor(e) {
        if (super({}), this._bn = void 0, bg(e)) this._bn = e._bn;
        else {
            if (typeof e == "string") {
                const t = ot.decode(e);
                if (t.length != gn) throw new Error("Invalid public key input");
                this._bn = new Nn(t)
            } else this._bn = new Nn(e);
            if (this._bn.byteLength() > gn) throw new Error("Invalid public key input")
        }
    }
    static unique() {
        const e = new j(Wc);
        return Wc += 1, new j(e.toBuffer())
    }
    equals(e) {
        return this._bn.eq(e._bn)
    }
    toBase58() {
        return ot.encode(this.toBytes())
    }
    toJSON() {
        return this.toBase58()
    }
    toBytes() {
        const e = this.toBuffer();
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
    }
    toBuffer() {
        const e = this._bn.toArrayLike(se);
        if (e.length === gn) return e;
        const t = se.alloc(32);
        return e.copy(t, 32 - e.length), t
    }
    get[Symbol.toStringTag]() {
        return `PublicKey(${this.toString()})`
    }
    toString() {
        return this.toBase58()
    }
    static async createWithSeed(e, t, n) {
        const i = se.concat([e.toBuffer(), se.from(t), n.toBuffer()]),
            o = no(i);
        return new j(o)
    }
    static createProgramAddressSync(e, t) {
        let n = se.alloc(0);
        e.forEach(function (o) {
            if (o.length > _d) throw new TypeError("Max seed length exceeded");
            n = se.concat([n, be(o)])
        }), n = se.concat([n, t.toBuffer(), se.from("ProgramDerivedAddress")]);
        const i = no(n);
        if ($c(i)) throw new Error("Invalid seeds, address must fall off the curve");
        return new j(i)
    }
    static async createProgramAddress(e, t) {
        return this.createProgramAddressSync(e, t)
    }
    static findProgramAddressSync(e, t) {
        let n = 255,
            i;
        for (; n != 0;) {
            try {
                const o = e.concat(se.from([n]));
                i = this.createProgramAddressSync(o, t)
            } catch (o) {
                if (o instanceof TypeError) throw o;
                n--;
                continue
            }
            return [i, n]
        }
        throw new Error("Unable to find a viable program address nonce")
    }
    static async findProgramAddress(e, t) {
        return this.findProgramAddressSync(e, t)
    }
    static isOnCurve(e) {
        const t = new j(e);
        return $c(t.toBytes())
    }
}
bd = j;
j.default = new bd("11111111111111111111111111111111");
li.set(j, {
    kind: "struct",
    fields: [
        ["_bn", "u256"]
    ]
});
class _g {
    constructor(e) {
        if (this._publicKey = void 0, this._secretKey = void 0, e) {
            const t = be(e);
            if (e.length !== 64) throw new Error("bad secret key size");
            this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32)
        } else this._secretKey = be(mg()), this._publicKey = be(lo(this._secretKey))
    }
    get publicKey() {
        return new j(this._publicKey)
    }
    get secretKey() {
        return se.concat([this._secretKey, this._publicKey], 64)
    }
}
const Eg = new j("BPFLoader1111111111111111111111111111111111"),
    Gn = 1232,
    No = 127,
    gi = 64;
class Ha extends Error {
    constructor(e) {
        super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e
    }
}
Object.defineProperty(Ha.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
});
class za extends Error {
    constructor(e, t) {
        super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e
    }
}
Object.defineProperty(za.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
});
class Or extends Error {
    constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e
    }
}
Object.defineProperty(Or.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
});
class wi {
    constructor(e, t) {
        this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t
    }
    keySegments() {
        const e = [this.staticAccountKeys];
        return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e
    }
    get(e) {
        for (const t of this.keySegments()) {
            if (e < t.length) return t[e];
            e -= t.length
        }
    }
    get length() {
        return this.keySegments().flat().length
    }
    compileInstructions(e) {
        if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
        const n = new Map;
        this.keySegments().flat().forEach((o, s) => {
            n.set(o.toBase58(), s)
        });
        const i = o => {
            const s = n.get(o.toBase58());
            if (s === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
            return s
        };
        return e.map(o => ({
            programIdIndex: i(o.programId),
            accountKeyIndexes: o.keys.map(s => i(s.pubkey)),
            data: o.data
        }))
    }
}
const _e = (r = "publicKey") => Pe(32, r),
    vg = (r = "signature") => Pe(64, r),
    ar = (r = "string") => {
        const e = ce([ae("length"), ae("lengthPadding"), Pe(Vn(ae(), -8), "chars")], r),
            t = e.decode.bind(e),
            n = e.encode.bind(e),
            i = e;
        return i.decode = (o, s) => t(o, s).chars.toString(), i.encode = (o, s, a) => {
            const u = {
                chars: se.from(o, "utf8")
            };
            return n(u, s, a)
        }, i.alloc = o => ae().span + ae().span + se.from(o, "utf8").length, i
    },
    Rg = (r = "authorized") => ce([_e("staker"), _e("withdrawer")], r),
    Ag = (r = "lockup") => ce([Vt("unixTimestamp"), Vt("epoch"), _e("custodian")], r),
    kg = (r = "voteInit") => ce([_e("nodePubkey"), _e("authorizedVoter"), _e("authorizedWithdrawer"), ve("commission")], r),
    Sg = (r = "voteAuthorizeWithSeedArgs") => ce([ae("voteAuthorizationType"), _e("currentAuthorityDerivedKeyOwnerPubkey"), ar("currentAuthorityDerivedKeySeed"), _e("newAuthorized")], r);

function Ed(r, e) {
    const t = i => {
        if (i.span >= 0) return i.span;
        if (typeof i.alloc == "function") return i.alloc(e[i.property]);
        if ("count" in i && "elementLayout" in i) {
            const o = e[i.property];
            if (Array.isArray(o)) return o.length * t(i.elementLayout)
        } else if ("fields" in i) return Ed({
            layout: i
        }, e[i.property]);
        return 0
    };
    let n = 0;
    return r.layout.fields.forEach(i => {
        n += t(i)
    }), n
}

function Dt(r) {
    let e = 0,
        t = 0;
    for (;;) {
        let n = r.shift();
        if (e |= (n & 127) << t * 7, t += 1, !(n & 128)) break
    }
    return e
}

function Gt(r, e) {
    let t = e;
    for (;;) {
        let n = t & 127;
        if (t >>= 7, t == 0) {
            r.push(n);
            break
        } else n |= 128, r.push(n)
    }
}

function Te(r, e) {
    if (!r) throw new Error(e || "Assertion failed")
}
class Co {
    constructor(e, t) {
        this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t
    }
    static compile(e, t) {
        const n = new Map,
            i = s => {
                const a = s.toBase58();
                let u = n.get(a);
                return u === void 0 && (u = {
                    isSigner: !1,
                    isWritable: !1,
                    isInvoked: !1
                }, n.set(a, u)), u
            },
            o = i(t);
        o.isSigner = !0, o.isWritable = !0;
        for (const s of e) {
            i(s.programId).isInvoked = !0;
            for (const a of s.keys) {
                const u = i(a.pubkey);
                u.isSigner || (u.isSigner = a.isSigner), u.isWritable || (u.isWritable = a.isWritable)
            }
        }
        return new Co(t, n)
    }
    getMessageComponents() {
        const e = [...this.keyMetaMap.entries()];
        Te(e.length <= 256, "Max static account keys length exceeded");
        const t = e.filter(([, u]) => u.isSigner && u.isWritable),
            n = e.filter(([, u]) => u.isSigner && !u.isWritable),
            i = e.filter(([, u]) => !u.isSigner && u.isWritable),
            o = e.filter(([, u]) => !u.isSigner && !u.isWritable),
            s = {
                numRequiredSignatures: t.length + n.length,
                numReadonlySignedAccounts: n.length,
                numReadonlyUnsignedAccounts: o.length
            }; {
            Te(t.length > 0, "Expected at least one writable signer key");
            const [u] = t[0];
            Te(u === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
        }
        const a = [...t.map(([u]) => new j(u)), ...n.map(([u]) => new j(u)), ...i.map(([u]) => new j(u)), ...o.map(([u]) => new j(u))];
        return [s, a]
    }
    extractTableLookup(e) {
        const [t, n] = this.drainKeysFoundInLookupTable(e.state.addresses, s => !s.isSigner && !s.isInvoked && s.isWritable), [i, o] = this.drainKeysFoundInLookupTable(e.state.addresses, s => !s.isSigner && !s.isInvoked && !s.isWritable);
        if (!(t.length === 0 && i.length === 0)) return [{
            accountKey: e.key,
            writableIndexes: t,
            readonlyIndexes: i
        }, {
            writable: n,
            readonly: o
        }]
    }
    drainKeysFoundInLookupTable(e, t) {
        const n = new Array,
            i = new Array;
        for (const [o, s] of this.keyMetaMap.entries())
            if (t(s)) {
                const a = new j(o),
                    u = e.findIndex(d => d.equals(a));
                u >= 0 && (Te(u < 256, "Max lookup table index exceeded"), n.push(u), i.push(a), this.keyMetaMap.delete(o))
            } return [n, i]
    }
}
const vd = "Reached end of buffer unexpectedly";

function pn(r) {
    if (r.length === 0) throw new Error(vd);
    return r.shift()
}

function Ft(r, ...e) {
    const [t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > r.length : t >= r.length) throw new Error(vd);
    return r.splice(...e)
}
class cn {
    constructor(e) {
        this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = e.header, this.accountKeys = e.accountKeys.map(t => new j(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach(t => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]))
    }
    get version() {
        return "legacy"
    }
    get staticAccountKeys() {
        return this.accountKeys
    }
    get compiledInstructions() {
        return this.instructions.map(e => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: ot.decode(e.data)
        }))
    }
    get addressTableLookups() {
        return []
    }
    getAccountKeys() {
        return new wi(this.staticAccountKeys)
    }
    static compile(e) {
        const t = Co.compile(e.instructions, e.payerKey),
            [n, i] = t.getMessageComponents(),
            s = new wi(i).compileInstructions(e.instructions).map(a => ({
                programIdIndex: a.programIdIndex,
                accounts: a.accountKeyIndexes,
                data: ot.encode(a.data)
            }));
        return new cn({
            header: n,
            accountKeys: i,
            recentBlockhash: e.recentBlockhash,
            instructions: s
        })
    }
    isAccountSigner(e) {
        return e < this.header.numRequiredSignatures
    }
    isAccountWritable(e) {
        const t = this.header.numRequiredSignatures;
        if (e >= this.header.numRequiredSignatures) {
            const n = e - t,
                o = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
            return n < o
        } else {
            const n = t - this.header.numReadonlySignedAccounts;
            return e < n
        }
    }
    isProgramId(e) {
        return this.indexToProgramIds.has(e)
    }
    programIds() {
        return [...this.indexToProgramIds.values()]
    }
    nonProgramIds() {
        return this.accountKeys.filter((e, t) => !this.isProgramId(t))
    }
    serialize() {
        const e = this.accountKeys.length;
        let t = [];
        Gt(t, e);
        const n = this.instructions.map(b => {
            const {
                accounts: S,
                programIdIndex: m
            } = b, v = Array.from(ot.decode(b.data));
            let T = [];
            Gt(T, S.length);
            let R = [];
            return Gt(R, v.length), {
                programIdIndex: m,
                keyIndicesCount: se.from(T),
                keyIndices: S,
                dataLength: se.from(R),
                data: v
            }
        });
        let i = [];
        Gt(i, n.length);
        let o = se.alloc(Gn);
        se.from(i).copy(o);
        let s = i.length;
        n.forEach(b => {
            const m = ce([ve("programIdIndex"), Pe(b.keyIndicesCount.length, "keyIndicesCount"), xt(ve("keyIndex"), b.keyIndices.length, "keyIndices"), Pe(b.dataLength.length, "dataLength"), xt(ve("userdatum"), b.data.length, "data")]).encode(b, o, s);
            s += m
        }), o = o.slice(0, s);
        const a = ce([Pe(1, "numRequiredSignatures"), Pe(1, "numReadonlySignedAccounts"), Pe(1, "numReadonlyUnsignedAccounts"), Pe(t.length, "keyCount"), xt(_e("key"), e, "keys"), _e("recentBlockhash")]),
            u = {
                numRequiredSignatures: se.from([this.header.numRequiredSignatures]),
                numReadonlySignedAccounts: se.from([this.header.numReadonlySignedAccounts]),
                numReadonlyUnsignedAccounts: se.from([this.header.numReadonlyUnsignedAccounts]),
                keyCount: se.from(t),
                keys: this.accountKeys.map(b => be(b.toBytes())),
                recentBlockhash: ot.decode(this.recentBlockhash)
            };
        let d = se.alloc(2048);
        const l = a.encode(u, d);
        return o.copy(d, l), d.slice(0, l + o.length)
    }
    static from(e) {
        let t = [...e];
        const n = pn(t);
        if (n !== (n & No)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
        const i = pn(t),
            o = pn(t),
            s = Dt(t);
        let a = [];
        for (let S = 0; S < s; S++) {
            const m = Ft(t, 0, gn);
            a.push(new j(se.from(m)))
        }
        const u = Ft(t, 0, gn),
            d = Dt(t);
        let l = [];
        for (let S = 0; S < d; S++) {
            const m = pn(t),
                v = Dt(t),
                T = Ft(t, 0, v),
                R = Dt(t),
                N = Ft(t, 0, R),
                $ = ot.encode(se.from(N));
            l.push({
                programIdIndex: m,
                accounts: T,
                data: $
            })
        }
        const b = {
            header: {
                numRequiredSignatures: n,
                numReadonlySignedAccounts: i,
                numReadonlyUnsignedAccounts: o
            },
            recentBlockhash: ot.encode(se.from(u)),
            accountKeys: a,
            instructions: l
        };
        return new cn(b)
    }
}
class dr {
    constructor(e) {
        this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups
    }
    get version() {
        return 0
    }
    get numAccountKeysFromLookups() {
        let e = 0;
        for (const t of this.addressTableLookups) e += t.readonlyIndexes.length + t.writableIndexes.length;
        return e
    }
    getAccountKeys(e) {
        let t;
        if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
            t = e.accountKeysFromLookups
        } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
        return new wi(this.staticAccountKeys, t)
    }
    isAccountSigner(e) {
        return e < this.header.numRequiredSignatures
    }
    isAccountWritable(e) {
        const t = this.header.numRequiredSignatures,
            n = this.staticAccountKeys.length;
        if (e >= n) {
            const i = e - n,
                o = this.addressTableLookups.reduce((s, a) => s + a.writableIndexes.length, 0);
            return i < o
        } else if (e >= this.header.numRequiredSignatures) {
            const i = e - t,
                s = n - t - this.header.numReadonlyUnsignedAccounts;
            return i < s
        } else {
            const i = t - this.header.numReadonlySignedAccounts;
            return e < i
        }
    }
    resolveAddressTableLookups(e) {
        const t = {
            writable: [],
            readonly: []
        };
        for (const n of this.addressTableLookups) {
            const i = e.find(o => o.key.equals(n.accountKey));
            if (!i) throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
            for (const o of n.writableIndexes)
                if (o < i.state.addresses.length) t.writable.push(i.state.addresses[o]);
                else throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`);
            for (const o of n.readonlyIndexes)
                if (o < i.state.addresses.length) t.readonly.push(i.state.addresses[o]);
                else throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`)
        }
        return t
    }
    static compile(e) {
        const t = Co.compile(e.instructions, e.payerKey),
            n = new Array,
            i = {
                writable: new Array,
                readonly: new Array
            },
            o = e.addressLookupTableAccounts || [];
        for (const l of o) {
            const b = t.extractTableLookup(l);
            if (b !== void 0) {
                const [S, {
                    writable: m,
                    readonly: v
                }] = b;
                n.push(S), i.writable.push(...m), i.readonly.push(...v)
            }
        }
        const [s, a] = t.getMessageComponents(), d = new wi(a, i).compileInstructions(e.instructions);
        return new dr({
            header: s,
            staticAccountKeys: a,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: d,
            addressTableLookups: n
        })
    }
    serialize() {
        const e = Array();
        Gt(e, this.staticAccountKeys.length);
        const t = this.serializeInstructions(),
            n = Array();
        Gt(n, this.compiledInstructions.length);
        const i = this.serializeAddressTableLookups(),
            o = Array();
        Gt(o, this.addressTableLookups.length);
        const s = ce([ve("prefix"), ce([ve("numRequiredSignatures"), ve("numReadonlySignedAccounts"), ve("numReadonlyUnsignedAccounts")], "header"), Pe(e.length, "staticAccountKeysLength"), xt(_e(), this.staticAccountKeys.length, "staticAccountKeys"), _e("recentBlockhash"), Pe(n.length, "instructionsLength"), Pe(t.length, "serializedInstructions"), Pe(o.length, "addressTableLookupsLength"), Pe(i.length, "serializedAddressTableLookups")]),
            a = new Uint8Array(Gn),
            d = s.encode({
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map(l => l.toBytes()),
                recentBlockhash: ot.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(n),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: i
            }, a);
        return a.slice(0, d)
    }
    serializeInstructions() {
        let e = 0;
        const t = new Uint8Array(Gn);
        for (const n of this.compiledInstructions) {
            const i = Array();
            Gt(i, n.accountKeyIndexes.length);
            const o = Array();
            Gt(o, n.data.length);
            const s = ce([ve("programIdIndex"), Pe(i.length, "encodedAccountKeyIndexesLength"), xt(ve(), n.accountKeyIndexes.length, "accountKeyIndexes"), Pe(o.length, "encodedDataLength"), Pe(n.data.length, "data")]);
            e += s.encode({
                programIdIndex: n.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(i),
                accountKeyIndexes: n.accountKeyIndexes,
                encodedDataLength: new Uint8Array(o),
                data: n.data
            }, t, e)
        }
        return t.slice(0, e)
    }
    serializeAddressTableLookups() {
        let e = 0;
        const t = new Uint8Array(Gn);
        for (const n of this.addressTableLookups) {
            const i = Array();
            Gt(i, n.writableIndexes.length);
            const o = Array();
            Gt(o, n.readonlyIndexes.length);
            const s = ce([_e("accountKey"), Pe(i.length, "encodedWritableIndexesLength"), xt(ve(), n.writableIndexes.length, "writableIndexes"), Pe(o.length, "encodedReadonlyIndexesLength"), xt(ve(), n.readonlyIndexes.length, "readonlyIndexes")]);
            e += s.encode({
                accountKey: n.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(i),
                writableIndexes: n.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(o),
                readonlyIndexes: n.readonlyIndexes
            }, t, e)
        }
        return t.slice(0, e)
    }
    static deserialize(e) {
        let t = [...e];
        const n = pn(t),
            i = n & No;
        Te(n !== i, "Expected versioned message but received legacy message");
        const o = i;
        Te(o === 0, `Expected versioned message with version 0 but found version ${o}`);
        const s = {
                numRequiredSignatures: pn(t),
                numReadonlySignedAccounts: pn(t),
                numReadonlyUnsignedAccounts: pn(t)
            },
            a = [],
            u = Dt(t);
        for (let v = 0; v < u; v++) a.push(new j(Ft(t, 0, gn)));
        const d = ot.encode(Ft(t, 0, gn)),
            l = Dt(t),
            b = [];
        for (let v = 0; v < l; v++) {
            const T = pn(t),
                R = Dt(t),
                N = Ft(t, 0, R),
                $ = Dt(t),
                P = new Uint8Array(Ft(t, 0, $));
            b.push({
                programIdIndex: T,
                accountKeyIndexes: N,
                data: P
            })
        }
        const S = Dt(t),
            m = [];
        for (let v = 0; v < S; v++) {
            const T = new j(Ft(t, 0, gn)),
                R = Dt(t),
                N = Ft(t, 0, R),
                $ = Dt(t),
                P = Ft(t, 0, $);
            m.push({
                accountKey: T,
                writableIndexes: N,
                readonlyIndexes: P
            })
        }
        return new dr({
            header: s,
            staticAccountKeys: a,
            recentBlockhash: d,
            compiledInstructions: b,
            addressTableLookups: m
        })
    }
}
const Ka = {
    deserializeMessageVersion(r) {
        const e = r[0],
            t = e & No;
        return t === e ? "legacy" : t
    },
    deserialize: r => {
        const e = Ka.deserializeMessageVersion(r);
        if (e === "legacy") return cn.from(r);
        if (e === 0) return dr.deserialize(r);
        throw new Error(`Transaction message version ${e} deserialization is not supported`)
    }
};
let xn = function (r) {
    return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT", r[r.NONCE_INVALID = 3] = "NONCE_INVALID", r
}({});
const Ig = se.alloc(gi).fill(0);
class Oe {
    constructor(e) {
        this.keys = void 0, this.programId = void 0, this.data = se.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data)
    }
    toJSON() {
        return {
            keys: this.keys.map(({
                pubkey: e,
                isSigner: t,
                isWritable: n
            }) => ({
                pubkey: e.toJSON(),
                isSigner: t,
                isWritable: n
            })),
            programId: this.programId.toJSON(),
            data: [...this.data]
        }
    }
}
class Ee {
    get signature() {
        return this.signatures.length > 0 ? this.signatures[0].signature : null
    }
    constructor(e) {
        if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e)
            if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                const {
                    minContextSlot: t,
                    nonceInfo: n
                } = e;
                this.minNonceContextSlot = t, this.nonceInfo = n
            } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
            const {
                blockhash: t,
                lastValidBlockHeight: n
            } = e;
            this.recentBlockhash = t, this.lastValidBlockHeight = n
        } else {
            const {
                recentBlockhash: t,
                nonceInfo: n
            } = e;
            n && (this.nonceInfo = n), this.recentBlockhash = t
        }
    }
    toJSON() {
        return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
            } : null,
            instructions: this.instructions.map(e => e.toJSON()),
            signers: this.signatures.map(({
                publicKey: e
            }) => e.toJSON())
        }
    }
    add(...e) {
        if (e.length === 0) throw new Error("No instructions");
        return e.forEach(t => {
            "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new Oe(t))
        }), this
    }
    compileMessage() {
        if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
        let e, t;
        if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e) throw new Error("Transaction recentBlockhash required");
        t.length < 1 && console.warn("No instructions provided");
        let n;
        if (this.feePayer) n = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey) n = this.signatures[0].publicKey;
        else throw new Error("Transaction fee payer required");
        for (let T = 0; T < t.length; T++)
            if (t[T].programId === void 0) throw new Error(`Transaction instruction index ${T} has undefined program id`);
        const i = [],
            o = [];
        t.forEach(T => {
            T.keys.forEach(N => {
                o.push({
                    ...N
                })
            });
            const R = T.programId.toString();
            i.includes(R) || i.push(R)
        }), i.forEach(T => {
            o.push({
                pubkey: new j(T),
                isSigner: !1,
                isWritable: !1
            })
        });
        const s = [];
        o.forEach(T => {
            const R = T.pubkey.toString(),
                N = s.findIndex($ => $.pubkey.toString() === R);
            N > -1 ? (s[N].isWritable = s[N].isWritable || T.isWritable, s[N].isSigner = s[N].isSigner || T.isSigner) : s.push(T)
        }), s.sort(function (T, R) {
            if (T.isSigner !== R.isSigner) return T.isSigner ? -1 : 1;
            if (T.isWritable !== R.isWritable) return T.isWritable ? -1 : 1;
            const N = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower"
            };
            return T.pubkey.toBase58().localeCompare(R.pubkey.toBase58(), "en", N)
        });
        const a = s.findIndex(T => T.pubkey.equals(n));
        if (a > -1) {
            const [T] = s.splice(a, 1);
            T.isSigner = !0, T.isWritable = !0, s.unshift(T)
        } else s.unshift({
            pubkey: n,
            isSigner: !0,
            isWritable: !0
        });
        for (const T of this.signatures) {
            const R = s.findIndex(N => N.pubkey.equals(T.publicKey));
            if (R > -1) s[R].isSigner || (s[R].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
            else throw new Error(`unknown signer: ${T.publicKey.toString()}`)
        }
        let u = 0,
            d = 0,
            l = 0;
        const b = [],
            S = [];
        s.forEach(({
            pubkey: T,
            isSigner: R,
            isWritable: N
        }) => {
            R ? (b.push(T.toString()), u += 1, N || (d += 1)) : (S.push(T.toString()), N || (l += 1))
        });
        const m = b.concat(S),
            v = t.map(T => {
                const {
                    data: R,
                    programId: N
                } = T;
                return {
                    programIdIndex: m.indexOf(N.toString()),
                    accounts: T.keys.map($ => m.indexOf($.pubkey.toString())),
                    data: ot.encode(R)
                }
            });
        return v.forEach(T => {
            Te(T.programIdIndex >= 0), T.accounts.forEach(R => Te(R >= 0))
        }), new cn({
            header: {
                numRequiredSignatures: u,
                numReadonlySignedAccounts: d,
                numReadonlyUnsignedAccounts: l
            },
            accountKeys: m,
            recentBlockhash: e,
            instructions: v
        })
    }
    _compile() {
        const e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
        return this.signatures.length === t.length && this.signatures.every((i, o) => t[o].equals(i.publicKey)) || (this.signatures = t.map(n => ({
            signature: null,
            publicKey: n
        }))), e
    }
    serializeMessage() {
        return this._compile().serialize()
    }
    async getEstimatedFee(e) {
        return (await e.getFeeForMessage(this.compileMessage())).value
    }
    setSigners(...e) {
        if (e.length === 0) throw new Error("No signers");
        const t = new Set;
        this.signatures = e.filter(n => {
            const i = n.toString();
            return t.has(i) ? !1 : (t.add(i), !0)
        }).map(n => ({
            signature: null,
            publicKey: n
        }))
    }
    sign(...e) {
        if (e.length === 0) throw new Error("No signers");
        const t = new Set,
            n = [];
        for (const o of e) {
            const s = o.publicKey.toString();
            t.has(s) || (t.add(s), n.push(o))
        }
        this.signatures = n.map(o => ({
            signature: null,
            publicKey: o.publicKey
        }));
        const i = this._compile();
        this._partialSign(i, ...n)
    }
    partialSign(...e) {
        if (e.length === 0) throw new Error("No signers");
        const t = new Set,
            n = [];
        for (const o of e) {
            const s = o.publicKey.toString();
            t.has(s) || (t.add(s), n.push(o))
        }
        const i = this._compile();
        this._partialSign(i, ...n)
    }
    _partialSign(e, ...t) {
        const n = e.serialize();
        t.forEach(i => {
            const o = Da(n, i.secretKey);
            this._addSignature(i.publicKey, be(o))
        })
    }
    addSignature(e, t) {
        this._compile(), this._addSignature(e, t)
    }
    _addSignature(e, t) {
        Te(t.length === 64);
        const n = this.signatures.findIndex(i => e.equals(i.publicKey));
        if (n < 0) throw new Error(`unknown signer: ${e.toString()}`);
        this.signatures[n].signature = se.from(t)
    }
    verifySignatures(e = !0) {
        return !this._getMessageSignednessErrors(this.serializeMessage(), e)
    }
    _getMessageSignednessErrors(e, t) {
        const n = {};
        for (const {
                signature: i,
                publicKey: o
            }
            of this.signatures) i === null ? t && (n.missing || (n.missing = [])).push(o) : gg(i, e, o.toBytes()) || (n.invalid || (n.invalid = [])).push(o);
        return n.invalid || n.missing ? n : void 0
    }
    serialize(e) {
        const {
            requireAllSignatures: t,
            verifySignatures: n
        } = Object.assign({
            requireAllSignatures: !0,
            verifySignatures: !0
        }, e), i = this.serializeMessage();
        if (n) {
            const o = this._getMessageSignednessErrors(i, t);
            if (o) {
                let s = "Signature verification failed.";
                throw o.invalid && (s += `
Invalid signature for public key${o.invalid.length===1?"":"(s)"} [\`${o.invalid.map(a=>a.toBase58()).join("`, `")}\`].`), o.missing && (s += `
Missing signature for public key${o.missing.length===1?"":"(s)"} [\`${o.missing.map(a=>a.toBase58()).join("`, `")}\`].`), new Error(s)
            }
        }
        return this._serialize(i)
    }
    _serialize(e) {
        const {
            signatures: t
        } = this, n = [];
        Gt(n, t.length);
        const i = n.length + t.length * 64 + e.length,
            o = se.alloc(i);
        return Te(t.length < 256), se.from(n).copy(o, 0), t.forEach(({
            signature: s
        }, a) => {
            s !== null && (Te(s.length === 64, "signature has invalid length"), se.from(s).copy(o, n.length + a * 64))
        }), e.copy(o, n.length + t.length * 64), Te(o.length <= Gn, `Transaction too large: ${o.length} > ${Gn}`), o
    }
    get keys() {
        return Te(this.instructions.length === 1), this.instructions[0].keys.map(e => e.pubkey)
    }
    get programId() {
        return Te(this.instructions.length === 1), this.instructions[0].programId
    }
    get data() {
        return Te(this.instructions.length === 1), this.instructions[0].data
    }
    static from(e) {
        let t = [...e];
        const n = Dt(t);
        let i = [];
        for (let o = 0; o < n; o++) {
            const s = Ft(t, 0, gi);
            i.push(ot.encode(se.from(s)))
        }
        return Ee.populate(cn.from(t), i)
    }
    static populate(e, t = []) {
        const n = new Ee;
        return n.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]), t.forEach((i, o) => {
            const s = {
                signature: i == ot.encode(Ig) ? null : ot.decode(i),
                publicKey: e.accountKeys[o]
            };
            n.signatures.push(s)
        }), e.instructions.forEach(i => {
            const o = i.accounts.map(s => {
                const a = e.accountKeys[s];
                return {
                    pubkey: a,
                    isSigner: n.signatures.some(u => u.publicKey.toString() === a.toString()) || e.isAccountSigner(s),
                    isWritable: e.isAccountWritable(s)
                }
            });
            n.instructions.push(new Oe({
                keys: o,
                programId: e.accountKeys[i.programIdIndex],
                data: ot.decode(i.data)
            }))
        }), n._message = e, n._json = n.toJSON(), n
    }
}
class $a {
    constructor(e) {
        this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash
    }
    static decompile(e, t) {
        const {
            header: n,
            compiledInstructions: i,
            recentBlockhash: o
        } = e, {
            numRequiredSignatures: s,
            numReadonlySignedAccounts: a,
            numReadonlyUnsignedAccounts: u
        } = n, d = s - a;
        Te(d > 0, "Message header is invalid");
        const l = e.staticAccountKeys.length - s - u;
        Te(l >= 0, "Message header is invalid");
        const b = e.getAccountKeys(t),
            S = b.get(0);
        if (S === void 0) throw new Error("Failed to decompile message because no account keys were found");
        const m = [];
        for (const v of i) {
            const T = [];
            for (const N of v.accountKeyIndexes) {
                const $ = b.get(N);
                if ($ === void 0) throw new Error(`Failed to find key for account key index ${N}`);
                const P = N < s;
                let K;
                P ? K = N < d : N < b.staticAccountKeys.length ? K = N - s < l : K = N - b.staticAccountKeys.length < b.accountKeysFromLookups.writable.length, T.push({
                    pubkey: $,
                    isSigner: N < n.numRequiredSignatures,
                    isWritable: K
                })
            }
            const R = b.get(v.programIdIndex);
            if (R === void 0) throw new Error(`Failed to find program id for program id index ${v.programIdIndex}`);
            m.push(new Oe({
                programId: R,
                data: be(v.data),
                keys: T
            }))
        }
        return new $a({
            payerKey: S,
            instructions: m,
            recentBlockhash: o
        })
    }
    compileToLegacyMessage() {
        return cn.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions
        })
    }
    compileToV0Message(e) {
        return dr.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e
        })
    }
}
class Wa {
    get version() {
        return this.message.version
    }
    constructor(e, t) {
        if (this.signatures = void 0, this.message = void 0, t !== void 0) Te(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
        else {
            const n = [];
            for (let i = 0; i < e.header.numRequiredSignatures; i++) n.push(new Uint8Array(gi));
            this.signatures = n
        }
        this.message = e
    }
    serialize() {
        const e = this.message.serialize(),
            t = Array();
        Gt(t, this.signatures.length);
        const n = ce([Pe(t.length, "encodedSignaturesLength"), xt(vg(), this.signatures.length, "signatures"), Pe(e.length, "serializedMessage")]),
            i = new Uint8Array(2048),
            o = n.encode({
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e
            }, i);
        return i.slice(0, o)
    }
    static deserialize(e) {
        let t = [...e];
        const n = [],
            i = Dt(t);
        for (let s = 0; s < i; s++) n.push(new Uint8Array(Ft(t, 0, gi)));
        const o = Ka.deserialize(new Uint8Array(t));
        return new Wa(o, n)
    }
    sign(e) {
        const t = this.message.serialize(),
            n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
        for (const i of e) {
            const o = n.findIndex(s => s.equals(i.publicKey));
            Te(o >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`), this.signatures[o] = Da(t, i.secretKey)
        }
    }
    addSignature(e, t) {
        Te(t.byteLength === 64, "Signature must be 64 bytes long");
        const i = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(o => o.equals(e));
        Te(i >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[i] = t
    }
}
const xg = 160,
    Tg = 64,
    Og = xg / Tg,
    Rd = 1e3 / Og,
    fn = new j("SysvarC1ock11111111111111111111111111111111"),
    Ng = new j("SysvarEpochSchedu1e111111111111111111111111"),
    Cg = new j("Sysvar1nstructions1111111111111111111111111"),
    Zi = new j("SysvarRecentB1ockHashes11111111111111111111"),
    Hr = new j("SysvarRent111111111111111111111111111111111"),
    Bg = new j("SysvarRewards111111111111111111111111111111"),
    Mg = new j("SysvarS1otHashes111111111111111111111111111"),
    Pg = new j("SysvarS1otHistory11111111111111111111111111"),
    Yi = new j("SysvarStakeHistory1111111111111111111111111");
class Yn extends Error {
    constructor({
        action: e,
        signature: t,
        transactionMessage: n,
        logs: i
    }) {
        const o = i ? `Logs: 
${JSON.stringify(i.slice(-10),null,2)}. ` : "",
            s = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
        let a;
        switch (e) {
            case "send":
                a = `Transaction ${t} resulted in an error. 
${n}. ` + o + s;
                break;
            case "simulate":
                a = `Simulation failed. 
Message: ${n}. 
` + o + s;
                break;
            default:
                a = `Unknown action '${(u=>u)(e)}'`
        }
        super(a), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = t, this.transactionMessage = n, this.transactionLogs = i || void 0
    }
    get transactionError() {
        return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
        }
    }
    get logs() {
        const e = this.transactionLogs;
        if (!(e != null && typeof e == "object" && "then" in e)) return e
    }
    async getLogs(e) {
        return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((t, n) => {
            e.getTransaction(this.signature).then(i => {
                if (i && i.meta && i.meta.logMessages) {
                    const o = i.meta.logMessages;
                    this.transactionLogs = o, t(o)
                } else n(new Error("Log messages not found"))
            }).catch(n)
        })), await this.transactionLogs
    }
}
const Lg = {
    JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
    JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
    JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
    JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
    JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
    JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
    JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
    JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
    JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
    JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
    JSON_RPC_SCAN_ERROR: -32012,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
    JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
    JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
    JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
};
class le extends Error {
    constructor({
        code: e,
        message: t,
        data: n
    }, i) {
        super(i != null ? `${i}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = n, this.name = "SolanaJSONRPCError"
    }
}
async function Zs(r, e, t, n) {
    const i = n && {
            skipPreflight: n.skipPreflight,
            preflightCommitment: n.preflightCommitment || n.commitment,
            maxRetries: n.maxRetries,
            minContextSlot: n.minContextSlot
        },
        o = await r.sendTransaction(e, t, i);
    let s;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null) s = (await r.confirmTransaction({
        abortSignal: n == null ? void 0 : n.abortSignal,
        signature: o,
        blockhash: e.recentBlockhash,
        lastValidBlockHeight: e.lastValidBlockHeight
    }, n && n.commitment)).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
        const {
            nonceInstruction: a
        } = e.nonceInfo, u = a.keys[0].pubkey;
        s = (await r.confirmTransaction({
            abortSignal: n == null ? void 0 : n.abortSignal,
            minContextSlot: e.minNonceContextSlot,
            nonceAccountPubkey: u,
            nonceValue: e.nonceInfo.nonce,
            signature: o
        }, n && n.commitment)).value
    } else(n == null ? void 0 : n.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), s = (await r.confirmTransaction(o, n && n.commitment)).value;
    if (s.err) throw o != null ? new Yn({
        action: "send",
        signature: o,
        transactionMessage: `Status: (${JSON.stringify(s)})`
    }) : new Error(`Transaction ${o} failed (${JSON.stringify(s)})`);
    return o
}

function ir(r) {
    return new Promise(e => setTimeout(e, r))
}

function xe(r, e) {
    const t = r.layout.span >= 0 ? r.layout.span : Ed(r, e),
        n = se.alloc(t),
        i = Object.assign({
            instruction: r.index
        }, e);
    return r.layout.encode(i, n), n
}

function Ce(r, e) {
    let t;
    try {
        t = r.layout.decode(e)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (t.instruction !== r.index) throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${r.index}`);
    return t
}
const Ad = St("lamportsPerSignature"),
    kd = ce([ae("version"), ae("state"), _e("authorizedPubkey"), _e("nonce"), ce([Ad], "feeCalculator")]),
    Ys = kd.span;
class Bo {
    constructor(e) {
        this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator
    }
    static fromAccountData(e) {
        const t = kd.decode(be(e), 0);
        return new Bo({
            authorizedPubkey: new j(t.authorizedPubkey),
            nonce: new j(t.nonce).toString(),
            feeCalculator: t.feeCalculator
        })
    }
}

function zr(r) {
    const e = Pe(8, r),
        t = e.decode.bind(e),
        n = e.encode.bind(e),
        i = e,
        o = um();
    return i.decode = (s, a) => {
        const u = t(s, a);
        return o.decode(u)
    }, i.encode = (s, a, u) => {
        const d = o.encode(s);
        return n(d, a, u)
    }, i
}
class Ug {
    constructor() {}
    static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        const n = ae("instruction").decode(e.data);
        let i;
        for (const [o, s] of Object.entries(De))
            if (s.index == n) {
                i = o;
                break
            } if (!i) throw new Error("Instruction type incorrect; not a SystemInstruction");
        return i
    }
    static decodeCreateAccount(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        const {
            lamports: t,
            space: n,
            programId: i
        } = Ce(De.Create, e.data);
        return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            lamports: t,
            space: n,
            programId: new j(i)
        }
    }
    static decodeTransfer(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        const {
            lamports: t
        } = Ce(De.Transfer, e.data);
        return {
            fromPubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            lamports: t
        }
    }
    static decodeTransferWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            lamports: t,
            seed: n,
            programId: i
        } = Ce(De.TransferWithSeed, e.data);
        return {
            fromPubkey: e.keys[0].pubkey,
            basePubkey: e.keys[1].pubkey,
            toPubkey: e.keys[2].pubkey,
            lamports: t,
            seed: n,
            programId: new j(i)
        }
    }
    static decodeAllocate(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        const {
            space: t
        } = Ce(De.Allocate, e.data);
        return {
            accountPubkey: e.keys[0].pubkey,
            space: t
        }
    }
    static decodeAllocateWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        const {
            base: t,
            seed: n,
            space: i,
            programId: o
        } = Ce(De.AllocateWithSeed, e.data);
        return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new j(t),
            seed: n,
            space: i,
            programId: new j(o)
        }
    }
    static decodeAssign(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        const {
            programId: t
        } = Ce(De.Assign, e.data);
        return {
            accountPubkey: e.keys[0].pubkey,
            programId: new j(t)
        }
    }
    static decodeAssignWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        const {
            base: t,
            seed: n,
            programId: i
        } = Ce(De.AssignWithSeed, e.data);
        return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new j(t),
            seed: n,
            programId: new j(i)
        }
    }
    static decodeCreateWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        const {
            base: t,
            seed: n,
            lamports: i,
            space: o,
            programId: s
        } = Ce(De.CreateWithSeed, e.data);
        return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            basePubkey: new j(t),
            seed: n,
            lamports: i,
            space: o,
            programId: new j(s)
        }
    }
    static decodeNonceInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            authorized: t
        } = Ce(De.InitializeNonceAccount, e.data);
        return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: new j(t)
        }
    }
    static decodeNonceAdvance(e) {
        return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), Ce(De.AdvanceNonceAccount, e.data), {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey
        }
    }
    static decodeNonceWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        const {
            lamports: t
        } = Ce(De.WithdrawNonceAccount, e.data);
        return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t
        }
    }
    static decodeNonceAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        const {
            authorized: t
        } = Ce(De.AuthorizeNonceAccount, e.data);
        return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[1].pubkey,
            newAuthorizedPubkey: new j(t)
        }
    }
    static checkProgramId(e) {
        if (!e.equals(st.programId)) throw new Error("invalid instruction; programId is not SystemProgram")
    }
    static checkKeyLength(e, t) {
        if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
    }
}
const De = Object.freeze({
    Create: {
        index: 0,
        layout: ce([ae("instruction"), Vt("lamports"), Vt("space"), _e("programId")])
    },
    Assign: {
        index: 1,
        layout: ce([ae("instruction"), _e("programId")])
    },
    Transfer: {
        index: 2,
        layout: ce([ae("instruction"), zr("lamports")])
    },
    CreateWithSeed: {
        index: 3,
        layout: ce([ae("instruction"), _e("base"), ar("seed"), Vt("lamports"), Vt("space"), _e("programId")])
    },
    AdvanceNonceAccount: {
        index: 4,
        layout: ce([ae("instruction")])
    },
    WithdrawNonceAccount: {
        index: 5,
        layout: ce([ae("instruction"), Vt("lamports")])
    },
    InitializeNonceAccount: {
        index: 6,
        layout: ce([ae("instruction"), _e("authorized")])
    },
    AuthorizeNonceAccount: {
        index: 7,
        layout: ce([ae("instruction"), _e("authorized")])
    },
    Allocate: {
        index: 8,
        layout: ce([ae("instruction"), Vt("space")])
    },
    AllocateWithSeed: {
        index: 9,
        layout: ce([ae("instruction"), _e("base"), ar("seed"), Vt("space"), _e("programId")])
    },
    AssignWithSeed: {
        index: 10,
        layout: ce([ae("instruction"), _e("base"), ar("seed"), _e("programId")])
    },
    TransferWithSeed: {
        index: 11,
        layout: ce([ae("instruction"), zr("lamports"), ar("seed"), _e("programId")])
    },
    UpgradeNonceAccount: {
        index: 12,
        layout: ce([ae("instruction")])
    }
});
class st {
    constructor() {}
    static createAccount(e) {
        const t = De.Create,
            n = xe(t, {
                lamports: e.lamports,
                space: e.space,
                programId: be(e.programId.toBuffer())
            });
        return new Oe({
            keys: [{
                pubkey: e.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: e.newAccountPubkey,
                isSigner: !0,
                isWritable: !0
            }],
            programId: this.programId,
            data: n
        })
    }
    static transfer(e) {
        let t, n;
        if ("basePubkey" in e) {
            const i = De.TransferWithSeed;
            t = xe(i, {
                lamports: BigInt(e.lamports),
                seed: e.seed,
                programId: be(e.programId.toBuffer())
            }), n = [{
                pubkey: e.fromPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.toPubkey,
                isSigner: !1,
                isWritable: !0
            }]
        } else {
            const i = De.Transfer;
            t = xe(i, {
                lamports: BigInt(e.lamports)
            }), n = [{
                pubkey: e.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: e.toPubkey,
                isSigner: !1,
                isWritable: !0
            }]
        }
        return new Oe({
            keys: n,
            programId: this.programId,
            data: t
        })
    }
    static assign(e) {
        let t, n;
        if ("basePubkey" in e) {
            const i = De.AssignWithSeed;
            t = xe(i, {
                base: be(e.basePubkey.toBuffer()),
                seed: e.seed,
                programId: be(e.programId.toBuffer())
            }), n = [{
                pubkey: e.accountPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }]
        } else {
            const i = De.Assign;
            t = xe(i, {
                programId: be(e.programId.toBuffer())
            }), n = [{
                pubkey: e.accountPubkey,
                isSigner: !0,
                isWritable: !0
            }]
        }
        return new Oe({
            keys: n,
            programId: this.programId,
            data: t
        })
    }
    static createAccountWithSeed(e) {
        const t = De.CreateWithSeed,
            n = xe(t, {
                base: be(e.basePubkey.toBuffer()),
                seed: e.seed,
                lamports: e.lamports,
                space: e.space,
                programId: be(e.programId.toBuffer())
            });
        let i = [{
            pubkey: e.fromPubkey,
            isSigner: !0,
            isWritable: !0
        }, {
            pubkey: e.newAccountPubkey,
            isSigner: !1,
            isWritable: !0
        }];
        return e.basePubkey.equals(e.fromPubkey) || i.push({
            pubkey: e.basePubkey,
            isSigner: !0,
            isWritable: !1
        }), new Oe({
            keys: i,
            programId: this.programId,
            data: n
        })
    }
    static createNonceAccount(e) {
        const t = new Ee;
        "basePubkey" in e && "seed" in e ? t.add(st.createAccountWithSeed({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.noncePubkey,
            basePubkey: e.basePubkey,
            seed: e.seed,
            lamports: e.lamports,
            space: Ys,
            programId: this.programId
        })) : t.add(st.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.noncePubkey,
            lamports: e.lamports,
            space: Ys,
            programId: this.programId
        }));
        const n = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey
        };
        return t.add(this.nonceInitialize(n)), t
    }
    static nonceInitialize(e) {
        const t = De.InitializeNonceAccount,
            n = xe(t, {
                authorized: be(e.authorizedPubkey.toBuffer())
            }),
            i = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Zi,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Hr,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            };
        return new Oe(i)
    }
    static nonceAdvance(e) {
        const t = De.AdvanceNonceAccount,
            n = xe(t),
            i = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Zi,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            };
        return new Oe(i)
    }
    static nonceWithdraw(e) {
        const t = De.WithdrawNonceAccount,
            n = xe(t, {
                lamports: e.lamports
            });
        return new Oe({
            keys: [{
                pubkey: e.noncePubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.toPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Zi,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Hr,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: e.authorizedPubkey,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: n
        })
    }
    static nonceAuthorize(e) {
        const t = De.AuthorizeNonceAccount,
            n = xe(t, {
                authorized: be(e.newAuthorizedPubkey.toBuffer())
            });
        return new Oe({
            keys: [{
                pubkey: e.noncePubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authorizedPubkey,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: n
        })
    }
    static allocate(e) {
        let t, n;
        if ("basePubkey" in e) {
            const i = De.AllocateWithSeed;
            t = xe(i, {
                base: be(e.basePubkey.toBuffer()),
                seed: e.seed,
                space: e.space,
                programId: be(e.programId.toBuffer())
            }), n = [{
                pubkey: e.accountPubkey,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }]
        } else {
            const i = De.Allocate;
            t = xe(i, {
                space: e.space
            }), n = [{
                pubkey: e.accountPubkey,
                isSigner: !0,
                isWritable: !0
            }]
        }
        return new Oe({
            keys: n,
            programId: this.programId,
            data: t
        })
    }
}
st.programId = new j("11111111111111111111111111111111");
const Dg = Gn - 300;
class fr {
    constructor() {}
    static getMinNumSignatures(e) {
        return 2 * (Math.ceil(e / fr.chunkSize) + 1 + 1)
    }
    static async load(e, t, n, i, o) {
        {
            const b = await e.getMinimumBalanceForRentExemption(o.length),
                S = await e.getAccountInfo(n.publicKey, "confirmed");
            let m = null;
            if (S !== null) {
                if (S.executable) return console.error("Program load failed, account is already executable"), !1;
                S.data.length !== o.length && (m = m || new Ee, m.add(st.allocate({
                    accountPubkey: n.publicKey,
                    space: o.length
                }))), S.owner.equals(i) || (m = m || new Ee, m.add(st.assign({
                    accountPubkey: n.publicKey,
                    programId: i
                }))), S.lamports < b && (m = m || new Ee, m.add(st.transfer({
                    fromPubkey: t.publicKey,
                    toPubkey: n.publicKey,
                    lamports: b - S.lamports
                })))
            } else m = new Ee().add(st.createAccount({
                fromPubkey: t.publicKey,
                newAccountPubkey: n.publicKey,
                lamports: b > 0 ? b : 1,
                space: o.length,
                programId: i
            }));
            m !== null && await Zs(e, m, [t, n], {
                commitment: "confirmed"
            })
        }
        const s = ce([ae("instruction"), ae("offset"), ae("bytesLength"), ae("bytesLengthPadding"), xt(ve("byte"), Vn(ae(), -8), "bytes")]),
            a = fr.chunkSize;
        let u = 0,
            d = o,
            l = [];
        for (; d.length > 0;) {
            const b = d.slice(0, a),
                S = se.alloc(a + 16);
            s.encode({
                instruction: 0,
                offset: u,
                bytes: b,
                bytesLength: 0,
                bytesLengthPadding: 0
            }, S);
            const m = new Ee().add({
                keys: [{
                    pubkey: n.publicKey,
                    isSigner: !0,
                    isWritable: !0
                }],
                programId: i,
                data: S
            });
            l.push(Zs(e, m, [t, n], {
                commitment: "confirmed"
            })), e._rpcEndpoint.includes("solana.com") && await ir(1e3 / 4), u += a, d = d.slice(a)
        }
        await Promise.all(l); {
            const b = ce([ae("instruction")]),
                S = se.alloc(b.span);
            b.encode({
                instruction: 1
            }, S);
            const m = new Ee().add({
                    keys: [{
                        pubkey: n.publicKey,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: Hr,
                        isSigner: !1,
                        isWritable: !1
                    }],
                    programId: i,
                    data: S
                }),
                v = "processed",
                T = await e.sendTransaction(m, [t, n], {
                    preflightCommitment: v
                }),
                {
                    context: R,
                    value: N
                } = await e.confirmTransaction({
                    signature: T,
                    lastValidBlockHeight: m.lastValidBlockHeight,
                    blockhash: m.recentBlockhash
                }, v);
            if (N.err) throw new Error(`Transaction ${T} failed (${JSON.stringify(N)})`);
            for (;;) {
                try {
                    if (await e.getSlot({
                            commitment: v
                        }) > R.slot) break
                } catch {}
                await new Promise($ => setTimeout($, Math.round(Rd / 2)))
            }
        }
        return !0
    }
}
fr.chunkSize = Dg;
const Fg = new j("BPFLoader2111111111111111111111111111111111");
class Hg {
    static getMinNumSignatures(e) {
        return fr.getMinNumSignatures(e)
    }
    static load(e, t, n, i, o) {
        return fr.load(e, t, n, o, i)
    }
}

function zg(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Ss, qc;

function Kg() {
    if (qc) return Ss;
    qc = 1;
    var r = Object.prototype.toString,
        e = Object.keys || function (n) {
            var i = [];
            for (var o in n) i.push(o);
            return i
        };

    function t(n, i) {
        var o, s, a, u, d, l, b;
        if (n === !0) return "true";
        if (n === !1) return "false";
        switch (typeof n) {
            case "object":
                if (n === null) return null;
                if (n.toJSON && typeof n.toJSON == "function") return t(n.toJSON(), i);
                if (b = r.call(n), b === "[object Array]") {
                    for (a = "[", s = n.length - 1, o = 0; o < s; o++) a += t(n[o], !0) + ",";
                    return s > -1 && (a += t(n[o], !0)), a + "]"
                } else if (b === "[object Object]") {
                    for (u = e(n).sort(), s = u.length, a = "", o = 0; o < s;) d = u[o], l = t(n[d], !1), l !== void 0 && (a && (a += ","), a += JSON.stringify(d) + ":" + l), o++;
                    return "{" + a + "}"
                } else return JSON.stringify(n);
            case "function":
            case "undefined":
                return i ? null : void 0;
            case "string":
                return JSON.stringify(n);
            default:
                return isFinite(n) ? n : null
        }
    }
    return Ss = function (n) {
        var i = t(n, !1);
        if (i !== void 0) return "" + i
    }, Ss
}
var $g = Kg(),
    Vc = zg($g);
const ii = 32;

function Is(r) {
    let e = 0;
    for (; r > 1;) r /= 2, e++;
    return e
}

function Wg(r) {
    return r === 0 ? 1 : (r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r |= r >> 32, r + 1)
}
class Sd {
    constructor(e, t, n, i, o) {
        this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = n, this.firstNormalEpoch = i, this.firstNormalSlot = o
    }
    getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0]
    }
    getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
            const t = Is(Wg(e + ii + 1)) - Is(ii) - 1,
                n = this.getSlotsInEpoch(t),
                i = e - (n - ii);
            return [t, i]
        } else {
            const t = e - this.firstNormalSlot,
                n = Math.floor(t / this.slotsPerEpoch),
                i = this.firstNormalEpoch + n,
                o = t % this.slotsPerEpoch;
            return [i, o]
        }
    }
    getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * ii : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
    }
    getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
    }
    getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch ? Math.pow(2, e + Is(ii)) : this.slotsPerEpoch
    }
}
var qg = globalThis.fetch;
class Vg extends Gm {
    constructor(e, t, n) {
        const i = o => {
            const s = qm(o, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...t
            });
            return "socket" in s ? this.underlyingSocket = s.socket : this.underlyingSocket = s, s
        };
        super(i, e, t, n), this.underlyingSocket = void 0
    }
    call(...e) {
        var n;
        const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
        return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
    }
    notify(...e) {
        var n;
        const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
        return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
    }
}

function Gg(r, e) {
    let t;
    try {
        t = r.layout.decode(e)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (t.typeIndex !== r.index) throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`);
    return t
}
const Gc = 56;
class Xs {
    constructor(e) {
        this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state
    }
    isActive() {
        const e = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === e
    }
    static deserialize(e) {
        const t = Gg(jg, e),
            n = e.length - Gc;
        Te(n >= 0, "lookup table is invalid"), Te(n % 32 === 0, "lookup table is invalid");
        const i = n / 32,
            {
                addresses: o
            } = ce([xt(_e(), i, "addresses")]).decode(e.slice(Gc));
        return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority: t.authority.length !== 0 ? new j(t.authority[0]) : void 0,
            addresses: o.map(s => new j(s))
        }
    }
}
const jg = {
        index: 1,
        layout: ce([ae("typeIndex"), zr("deactivationSlot"), St("lastExtendedSlot"), ve("lastExtendedStartIndex"), ve(), xt(_e(), Vn(ve(), -1), "authority")])
    },
    Zg = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;

function Yg(r) {
    const e = r.match(Zg);
    if (e == null) throw TypeError(`Failed to validate endpoint URL \`${r}\``);
    const [t, n, i, o] = e, s = r.startsWith("https:") ? "wss:" : "ws:", a = i == null ? null : parseInt(i.slice(1), 10), u = a == null ? "" : `:${a+1}`;
    return `${s}//${n}${u}${o}`
}
const Ze = ki(Ma(j), Q(), r => new j(r)),
    Id = Pa([Q(), je("base64")]),
    qa = ki(Ma(se), Id, r => se.from(r[0], "base64")),
    xd = 30 * 1e3;

function Xg(r) {
    if (/^https?:/.test(r) === !1) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return r
}

function Ue(r) {
    let e, t;
    if (typeof r == "string") e = r;
    else if (r) {
        const {
            commitment: n,
            ...i
        } = r;
        e = n, t = i
    }
    return {
        commitment: e,
        config: t
    }
}

function jc(r) {
    return r.map(e => "memcmp" in e ? {
        ...e,
        memcmp: {
            ...e.memcmp,
            encoding: e.memcmp.encoding ?? "base58"
        }
    } : e)
}

function Td(r) {
    return Ut([X({
        jsonrpc: je("2.0"),
        id: Q(),
        result: r
    }), X({
        jsonrpc: je("2.0"),
        id: Q(),
        error: X({
            code: jr(),
            message: Q(),
            data: de(ym())
        })
    })])
}
const Jg = Td(jr());

function we(r) {
    return ki(Td(r), Jg, e => "error" in e ? e : {
        ...e,
        result: te(e.result, r)
    })
}

function nt(r) {
    return we(X({
        context: X({
            slot: H()
        }),
        value: r
    }))
}

function Mo(r) {
    return X({
        context: X({
            slot: H()
        }),
        value: r
    })
}

function xs(r, e) {
    return r === 0 ? new dr({
        header: e.header,
        staticAccountKeys: e.accountKeys.map(t => new j(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map(t => ({
            programIdIndex: t.programIdIndex,
            accountKeyIndexes: t.accounts,
            data: ot.decode(t.data)
        })),
        addressTableLookups: e.addressTableLookups
    }) : new cn(e)
}
const Qg = X({
        foundation: H(),
        foundationTerm: H(),
        initial: H(),
        taper: H(),
        terminal: H()
    }),
    e1 = we(re(ie(X({
        epoch: H(),
        effectiveSlot: H(),
        amount: H(),
        postBalance: H(),
        commission: de(ie(H()))
    })))),
    t1 = re(X({
        slot: H(),
        prioritizationFee: H()
    })),
    n1 = X({
        total: H(),
        validator: H(),
        foundation: H(),
        epoch: H()
    }),
    r1 = X({
        epoch: H(),
        slotIndex: H(),
        slotsInEpoch: H(),
        absoluteSlot: H(),
        blockHeight: de(H()),
        transactionCount: de(H())
    }),
    i1 = X({
        slotsPerEpoch: H(),
        leaderScheduleSlotOffset: H(),
        warmup: wn(),
        firstNormalEpoch: H(),
        firstNormalSlot: H()
    }),
    o1 = rd(Q(), re(H())),
    mr = ie(Ut([X({}), Q()])),
    s1 = X({
        err: mr
    }),
    a1 = je("receivedSignature"),
    c1 = X({
        "solana-core": Q(),
        "feature-set": de(H())
    }),
    u1 = X({
        program: Q(),
        programId: Ze,
        parsed: jr()
    }),
    l1 = X({
        programId: Ze,
        accounts: re(Ze),
        data: Q()
    }),
    Zc = nt(X({
        err: ie(Ut([X({}), Q()])),
        logs: ie(re(Q())),
        accounts: de(ie(re(ie(X({
            executable: wn(),
            owner: Q(),
            lamports: H(),
            data: re(Q()),
            rentEpoch: de(H())
        }))))),
        unitsConsumed: de(H()),
        returnData: de(ie(X({
            programId: Q(),
            data: Pa([Q(), je("base64")])
        }))),
        innerInstructions: de(ie(re(X({
            index: H(),
            instructions: re(Ut([u1, l1]))
        }))))
    })),
    d1 = nt(X({
        byIdentity: rd(Q(), re(H())),
        range: X({
            firstSlot: H(),
            lastSlot: H()
        })
    }));

function f1(r, e, t, n, i, o) {
    const s = t || qg;
    let a;
    o != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let u;
    return n && (u = async (l, b) => {
        const S = await new Promise((m, v) => {
            try {
                n(l, b, (T, R) => m([T, R]))
            } catch (T) {
                v(T)
            }
        });
        return await s(...S)
    }), new Km(async (l, b) => {
        const S = {
            method: "POST",
            body: l,
            agent: a,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, e || {}, fw)
        };
        try {
            let m = 5,
                v, T = 500;
            for (; u ? v = await u(r, S) : v = await s(r, S), !(v.status !== 429 || i === !0 || (m -= 1, m === 0));) console.error(`Server responded with ${v.status} ${v.statusText}.  Retrying after ${T}ms delay...`), await ir(T), T *= 2;
            const R = await v.text();
            v.ok ? b(null, R) : b(new Error(`${v.status} ${v.statusText}: ${R}`))
        } catch (m) {
            m instanceof Error && b(m)
        }
    }, {})
}

function h1(r) {
    return (e, t) => new Promise((n, i) => {
        r.request(e, t, (o, s) => {
            if (o) {
                i(o);
                return
            }
            n(s)
        })
    })
}

function p1(r) {
    return e => new Promise((t, n) => {
        e.length === 0 && t([]);
        const i = e.map(o => r.request(o.methodName, o.args));
        r.request(i, (o, s) => {
            if (o) {
                n(o);
                return
            }
            t(s)
        })
    })
}
const y1 = we(Qg),
    m1 = we(n1),
    g1 = we(t1),
    w1 = we(r1),
    b1 = we(i1),
    _1 = we(o1),
    E1 = we(H()),
    v1 = nt(X({
        total: H(),
        circulating: H(),
        nonCirculating: H(),
        nonCirculatingAccounts: re(Ze)
    })),
    Js = X({
        amount: Q(),
        uiAmount: ie(H()),
        decimals: H(),
        uiAmountString: de(Q())
    }),
    R1 = nt(re(X({
        address: Ze,
        amount: Q(),
        uiAmount: ie(H()),
        decimals: H(),
        uiAmountString: de(Q())
    }))),
    A1 = nt(re(X({
        pubkey: Ze,
        account: X({
            executable: wn(),
            owner: Ze,
            lamports: H(),
            data: qa,
            rentEpoch: H()
        })
    }))),
    Qs = X({
        program: Q(),
        parsed: jr(),
        space: H()
    }),
    k1 = nt(re(X({
        pubkey: Ze,
        account: X({
            executable: wn(),
            owner: Ze,
            lamports: H(),
            data: Qs,
            rentEpoch: H()
        })
    }))),
    S1 = nt(re(X({
        lamports: H(),
        address: Ze
    }))),
    bi = X({
        executable: wn(),
        owner: Ze,
        lamports: H(),
        data: qa,
        rentEpoch: H()
    }),
    I1 = X({
        pubkey: Ze,
        account: bi
    }),
    x1 = ki(Ut([Ma(se), Qs]), Ut([Id, Qs]), r => Array.isArray(r) ? te(r, qa) : r),
    ea = X({
        executable: wn(),
        owner: Ze,
        lamports: H(),
        data: x1,
        rentEpoch: H()
    }),
    T1 = X({
        pubkey: Ze,
        account: ea
    }),
    O1 = X({
        state: Ut([je("active"), je("inactive"), je("activating"), je("deactivating")]),
        active: H(),
        inactive: H()
    }),
    N1 = we(re(X({
        signature: Q(),
        slot: H(),
        err: mr,
        memo: ie(Q()),
        blockTime: de(ie(H()))
    }))),
    C1 = we(re(X({
        signature: Q(),
        slot: H(),
        err: mr,
        memo: ie(Q()),
        blockTime: de(ie(H()))
    }))),
    B1 = X({
        subscription: H(),
        result: Mo(bi)
    }),
    M1 = X({
        pubkey: Ze,
        account: bi
    }),
    P1 = X({
        subscription: H(),
        result: Mo(M1)
    }),
    L1 = X({
        parent: H(),
        slot: H(),
        root: H()
    }),
    U1 = X({
        subscription: H(),
        result: L1
    }),
    D1 = Ut([X({
        type: Ut([je("firstShredReceived"), je("completed"), je("optimisticConfirmation"), je("root")]),
        slot: H(),
        timestamp: H()
    }), X({
        type: je("createdBank"),
        parent: H(),
        slot: H(),
        timestamp: H()
    }), X({
        type: je("frozen"),
        slot: H(),
        timestamp: H(),
        stats: X({
            numTransactionEntries: H(),
            numSuccessfulTransactions: H(),
            numFailedTransactions: H(),
            maxTransactionsPerEntry: H()
        })
    }), X({
        type: je("dead"),
        slot: H(),
        timestamp: H(),
        err: Q()
    })]),
    F1 = X({
        subscription: H(),
        result: D1
    }),
    H1 = X({
        subscription: H(),
        result: Mo(Ut([s1, a1]))
    }),
    z1 = X({
        subscription: H(),
        result: H()
    }),
    K1 = X({
        pubkey: Q(),
        gossip: ie(Q()),
        tpu: ie(Q()),
        rpc: ie(Q()),
        version: ie(Q())
    }),
    Yc = X({
        votePubkey: Q(),
        nodePubkey: Q(),
        activatedStake: H(),
        epochVoteAccount: wn(),
        epochCredits: re(Pa([H(), H(), H()])),
        commission: H(),
        lastVote: H(),
        rootSlot: ie(H())
    }),
    $1 = we(X({
        current: re(Yc),
        delinquent: re(Yc)
    })),
    W1 = Ut([je("processed"), je("confirmed"), je("finalized")]),
    q1 = X({
        slot: H(),
        confirmations: ie(H()),
        err: mr,
        confirmationStatus: de(W1)
    }),
    V1 = nt(re(ie(q1))),
    G1 = we(H()),
    Od = X({
        accountKey: Ze,
        writableIndexes: re(H()),
        readonlyIndexes: re(H())
    }),
    Va = X({
        signatures: re(Q()),
        message: X({
            accountKeys: re(Q()),
            header: X({
                numRequiredSignatures: H(),
                numReadonlySignedAccounts: H(),
                numReadonlyUnsignedAccounts: H()
            }),
            instructions: re(X({
                accounts: re(H()),
                data: Q(),
                programIdIndex: H()
            })),
            recentBlockhash: Q(),
            addressTableLookups: de(re(Od))
        })
    }),
    Nd = X({
        pubkey: Ze,
        signer: wn(),
        writable: wn(),
        source: de(Ut([je("transaction"), je("lookupTable")]))
    }),
    Cd = X({
        accountKeys: re(Nd),
        signatures: re(Q())
    }),
    Bd = X({
        parsed: jr(),
        program: Q(),
        programId: Ze
    }),
    Md = X({
        accounts: re(Ze),
        data: Q(),
        programId: Ze
    }),
    j1 = Ut([Md, Bd]),
    Z1 = Ut([X({
        parsed: jr(),
        program: Q(),
        programId: Q()
    }), X({
        accounts: re(Q()),
        data: Q(),
        programId: Q()
    })]),
    Pd = ki(j1, Z1, r => "accounts" in r ? te(r, Md) : te(r, Bd)),
    Ld = X({
        signatures: re(Q()),
        message: X({
            accountKeys: re(Nd),
            instructions: re(Pd),
            recentBlockhash: Q(),
            addressTableLookups: de(ie(re(Od)))
        })
    }),
    fo = X({
        accountIndex: H(),
        mint: Q(),
        owner: de(Q()),
        programId: de(Q()),
        uiTokenAmount: Js
    }),
    Ud = X({
        writable: re(Ze),
        readonly: re(Ze)
    }),
    Po = X({
        err: mr,
        fee: H(),
        innerInstructions: de(ie(re(X({
            index: H(),
            instructions: re(X({
                accounts: re(H()),
                data: Q(),
                programIdIndex: H()
            }))
        })))),
        preBalances: re(H()),
        postBalances: re(H()),
        logMessages: de(ie(re(Q()))),
        preTokenBalances: de(ie(re(fo))),
        postTokenBalances: de(ie(re(fo))),
        loadedAddresses: de(Ud),
        computeUnitsConsumed: de(H())
    }),
    Ga = X({
        err: mr,
        fee: H(),
        innerInstructions: de(ie(re(X({
            index: H(),
            instructions: re(Pd)
        })))),
        preBalances: re(H()),
        postBalances: re(H()),
        logMessages: de(ie(re(Q()))),
        preTokenBalances: de(ie(re(fo))),
        postTokenBalances: de(ie(re(fo))),
        loadedAddresses: de(Ud),
        computeUnitsConsumed: de(H())
    }),
    Zr = Ut([je(0), je("legacy")]),
    gr = X({
        pubkey: Q(),
        lamports: H(),
        postBalance: ie(H()),
        rewardType: ie(Q()),
        commission: de(ie(H()))
    }),
    Y1 = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        transactions: re(X({
            transaction: Va,
            meta: ie(Po),
            version: de(Zr)
        })),
        rewards: de(re(gr)),
        blockTime: ie(H()),
        blockHeight: ie(H())
    }))),
    X1 = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        rewards: de(re(gr)),
        blockTime: ie(H()),
        blockHeight: ie(H())
    }))),
    J1 = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        transactions: re(X({
            transaction: Cd,
            meta: ie(Po),
            version: de(Zr)
        })),
        rewards: de(re(gr)),
        blockTime: ie(H()),
        blockHeight: ie(H())
    }))),
    Q1 = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        transactions: re(X({
            transaction: Ld,
            meta: ie(Ga),
            version: de(Zr)
        })),
        rewards: de(re(gr)),
        blockTime: ie(H()),
        blockHeight: ie(H())
    }))),
    ew = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        transactions: re(X({
            transaction: Cd,
            meta: ie(Ga),
            version: de(Zr)
        })),
        rewards: de(re(gr)),
        blockTime: ie(H()),
        blockHeight: ie(H())
    }))),
    tw = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        rewards: de(re(gr)),
        blockTime: ie(H()),
        blockHeight: ie(H())
    }))),
    nw = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        transactions: re(X({
            transaction: Va,
            meta: ie(Po)
        })),
        rewards: de(re(gr)),
        blockTime: ie(H())
    }))),
    Xc = we(ie(X({
        blockhash: Q(),
        previousBlockhash: Q(),
        parentSlot: H(),
        signatures: re(Q()),
        blockTime: ie(H())
    }))),
    Ts = we(ie(X({
        slot: H(),
        meta: ie(Po),
        blockTime: de(ie(H())),
        transaction: Va,
        version: de(Zr)
    }))),
    Ki = we(ie(X({
        slot: H(),
        transaction: Ld,
        meta: ie(Ga),
        blockTime: de(ie(H())),
        version: de(Zr)
    }))),
    rw = nt(X({
        blockhash: Q(),
        lastValidBlockHeight: H()
    })),
    iw = nt(wn()),
    ow = X({
        slot: H(),
        numTransactions: H(),
        numSlots: H(),
        samplePeriodSecs: H()
    }),
    sw = we(re(ow)),
    aw = nt(ie(X({
        feeCalculator: X({
            lamportsPerSignature: H()
        })
    }))),
    cw = we(Q()),
    uw = we(Q()),
    lw = X({
        err: mr,
        logs: re(Q()),
        signature: Q()
    }),
    dw = X({
        result: Mo(lw),
        subscription: H()
    }),
    fw = {
        "solana-client": "js/1.0.0-maintenance"
    };
class ta {
    constructor(e, t) {
        this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: []
        }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, this.getBlockHeight = (() => {
            const d = {};
            return async l => {
                const {
                    commitment: b,
                    config: S
                } = Ue(l), m = this._buildArgs([], b, void 0, S), v = Vc(m);
                return d[v] = d[v] ?? (async () => {
                    try {
                        const T = await this._rpcRequest("getBlockHeight", m),
                            R = te(T, we(H()));
                        if ("error" in R) throw new le(R.error, "failed to get block height information");
                        return R.result
                    } finally {
                        delete d[v]
                    }
                })(), await d[v]
            }
        })();
        let n, i, o, s, a, u;
        t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, n = t.wsEndpoint, i = t.httpHeaders, o = t.fetch, s = t.fetchMiddleware, a = t.disableRetryOnRateLimit, u = t.httpAgent), this._rpcEndpoint = Xg(e), this._rpcWsEndpoint = n || Yg(e), this._rpcClient = f1(e, i, o, s, a, u), this._rpcRequest = h1(this._rpcClient), this._rpcBatchRequest = p1(this._rpcClient), this._rpcWebSocket = new Vg(this._rpcWsEndpoint, {
            autoconnect: !1,
            max_reconnects: 1 / 0
        }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
    }
    get commitment() {
        return this._commitment
    }
    get rpcEndpoint() {
        return this._rpcEndpoint
    }
    async getBalanceAndContext(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgs([e.toBase58()], n, void 0, i), s = await this._rpcRequest("getBalance", o), a = te(s, nt(H()));
        if ("error" in a) throw new le(a.error, `failed to get balance for ${e.toBase58()}`);
        return a.result
    }
    async getBalance(e, t) {
        return await this.getBalanceAndContext(e, t).then(n => n.value).catch(n => {
            throw new Error("failed to get balance of account " + e.toBase58() + ": " + n)
        })
    }
    async getBlockTime(e) {
        const t = await this._rpcRequest("getBlockTime", [e]),
            n = te(t, we(ie(H())));
        if ("error" in n) throw new le(n.error, `failed to get block time for slot ${e}`);
        return n.result
    }
    async getMinimumLedgerSlot() {
        const e = await this._rpcRequest("minimumLedgerSlot", []),
            t = te(e, we(H()));
        if ("error" in t) throw new le(t.error, "failed to get minimum ledger slot");
        return t.result
    }
    async getFirstAvailableBlock() {
        const e = await this._rpcRequest("getFirstAvailableBlock", []),
            t = te(e, E1);
        if ("error" in t) throw new le(t.error, "failed to get first available block");
        return t.result
    }
    async getSupply(e) {
        let t = {};
        typeof e == "string" ? t = {
            commitment: e
        } : e ? t = {
            ...e,
            commitment: e && e.commitment || this.commitment
        } : t = {
            commitment: this.commitment
        };
        const n = await this._rpcRequest("getSupply", [t]),
            i = te(n, v1);
        if ("error" in i) throw new le(i.error, "failed to get supply");
        return i.result
    }
    async getTokenSupply(e, t) {
        const n = this._buildArgs([e.toBase58()], t),
            i = await this._rpcRequest("getTokenSupply", n),
            o = te(i, nt(Js));
        if ("error" in o) throw new le(o.error, "failed to get token supply");
        return o.result
    }
    async getTokenAccountBalance(e, t) {
        const n = this._buildArgs([e.toBase58()], t),
            i = await this._rpcRequest("getTokenAccountBalance", n),
            o = te(i, nt(Js));
        if ("error" in o) throw new le(o.error, "failed to get token account balance");
        return o.result
    }
    async getTokenAccountsByOwner(e, t, n) {
        const {
            commitment: i,
            config: o
        } = Ue(n);
        let s = [e.toBase58()];
        "mint" in t ? s.push({
            mint: t.mint.toBase58()
        }) : s.push({
            programId: t.programId.toBase58()
        });
        const a = this._buildArgs(s, i, "base64", o),
            u = await this._rpcRequest("getTokenAccountsByOwner", a),
            d = te(u, A1);
        if ("error" in d) throw new le(d.error, `failed to get token accounts owned by account ${e.toBase58()}`);
        return d.result
    }
    async getParsedTokenAccountsByOwner(e, t, n) {
        let i = [e.toBase58()];
        "mint" in t ? i.push({
            mint: t.mint.toBase58()
        }) : i.push({
            programId: t.programId.toBase58()
        });
        const o = this._buildArgs(i, n, "jsonParsed"),
            s = await this._rpcRequest("getTokenAccountsByOwner", o),
            a = te(s, k1);
        if ("error" in a) throw new le(a.error, `failed to get token accounts owned by account ${e.toBase58()}`);
        return a.result
    }
    async getLargestAccounts(e) {
        const t = {
                ...e,
                commitment: e && e.commitment || this.commitment
            },
            n = t.filter || t.commitment ? [t] : [],
            i = await this._rpcRequest("getLargestAccounts", n),
            o = te(i, S1);
        if ("error" in o) throw new le(o.error, "failed to get largest accounts");
        return o.result
    }
    async getTokenLargestAccounts(e, t) {
        const n = this._buildArgs([e.toBase58()], t),
            i = await this._rpcRequest("getTokenLargestAccounts", n),
            o = te(i, R1);
        if ("error" in o) throw new le(o.error, "failed to get token largest accounts");
        return o.result
    }
    async getAccountInfoAndContext(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgs([e.toBase58()], n, "base64", i), s = await this._rpcRequest("getAccountInfo", o), a = te(s, nt(ie(bi)));
        if ("error" in a) throw new le(a.error, `failed to get info about account ${e.toBase58()}`);
        return a.result
    }
    async getParsedAccountInfo(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgs([e.toBase58()], n, "jsonParsed", i), s = await this._rpcRequest("getAccountInfo", o), a = te(s, nt(ie(ea)));
        if ("error" in a) throw new le(a.error, `failed to get info about account ${e.toBase58()}`);
        return a.result
    }
    async getAccountInfo(e, t) {
        try {
            return (await this.getAccountInfoAndContext(e, t)).value
        } catch (n) {
            throw new Error("failed to get info about account " + e.toBase58() + ": " + n)
        }
    }
    async getMultipleParsedAccounts(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = e.map(d => d.toBase58()), s = this._buildArgs([o], n, "jsonParsed", i), a = await this._rpcRequest("getMultipleAccounts", s), u = te(a, nt(re(ie(ea))));
        if ("error" in u) throw new le(u.error, `failed to get info for accounts ${o}`);
        return u.result
    }
    async getMultipleAccountsInfoAndContext(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = e.map(d => d.toBase58()), s = this._buildArgs([o], n, "base64", i), a = await this._rpcRequest("getMultipleAccounts", s), u = te(a, nt(re(ie(bi))));
        if ("error" in u) throw new le(u.error, `failed to get info for accounts ${o}`);
        return u.result
    }
    async getMultipleAccountsInfo(e, t) {
        return (await this.getMultipleAccountsInfoAndContext(e, t)).value
    }
    async getStakeActivation(e, t, n) {
        const {
            commitment: i,
            config: o
        } = Ue(t), s = this._buildArgs([e.toBase58()], i, void 0, {
            ...o,
            epoch: n ?? (o == null ? void 0 : o.epoch)
        }), a = await this._rpcRequest("getStakeActivation", s), u = te(a, we(O1));
        if ("error" in u) throw new le(u.error, `failed to get Stake Activation ${e.toBase58()}`);
        return u.result
    }
    async getProgramAccounts(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), {
            encoding: o,
            ...s
        } = i || {}, a = this._buildArgs([e.toBase58()], n, o || "base64", {
            ...s,
            ...s.filters ? {
                filters: jc(s.filters)
            } : null
        }), u = await this._rpcRequest("getProgramAccounts", a), d = re(I1), l = s.withContext === !0 ? te(u, nt(d)) : te(u, we(d));
        if ("error" in l) throw new le(l.error, `failed to get accounts owned by program ${e.toBase58()}`);
        return l.result
    }
    async getParsedProgramAccounts(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgs([e.toBase58()], n, "jsonParsed", i), s = await this._rpcRequest("getProgramAccounts", o), a = te(s, we(re(T1)));
        if ("error" in a) throw new le(a.error, `failed to get accounts owned by program ${e.toBase58()}`);
        return a.result
    }
    async confirmTransaction(e, t) {
        var o;
        let n;
        if (typeof e == "string") n = e;
        else {
            const s = e;
            if ((o = s.abortSignal) != null && o.aborted) return Promise.reject(s.abortSignal.reason);
            n = s.signature
        }
        let i;
        try {
            i = ot.decode(n)
        } catch {
            throw new Error("signature must be base58 encoded: " + n)
        }
        return Te(i.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: t || this.commitment,
            signature: n
        }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
            commitment: t || this.commitment,
            strategy: e
        }) : await this.confirmTransactionUsingDurableNonceStrategy({
            commitment: t || this.commitment,
            strategy: e
        })
    }
    getCancellationPromise(e) {
        return new Promise((t, n) => {
            e != null && (e.aborted ? n(e.reason) : e.addEventListener("abort", () => {
                n(e.reason)
            }))
        })
    }
    getTransactionConfirmationPromise({
        commitment: e,
        signature: t
    }) {
        let n, i, o = !1;
        const s = new Promise((u, d) => {
            try {
                n = this.onSignature(t, (b, S) => {
                    n = void 0;
                    const m = {
                        context: S,
                        value: b
                    };
                    u({
                        __type: xn.PROCESSED,
                        response: m
                    })
                }, e);
                const l = new Promise(b => {
                    n == null ? b() : i = this._onSubscriptionStateChange(n, S => {
                        S === "subscribed" && b()
                    })
                });
                (async () => {
                    if (await l, o) return;
                    const b = await this.getSignatureStatus(t);
                    if (o || b == null) return;
                    const {
                        context: S,
                        value: m
                    } = b;
                    if (m != null)
                        if (m != null && m.err) d(m.err);
                        else {
                            switch (e) {
                                case "confirmed":
                                case "single":
                                case "singleGossip": {
                                    if (m.confirmationStatus === "processed") return;
                                    break
                                }
                                case "finalized":
                                case "max":
                                case "root": {
                                    if (m.confirmationStatus === "processed" || m.confirmationStatus === "confirmed") return;
                                    break
                                }
                                case "processed":
                                case "recent":
                            }
                            o = !0, u({
                                __type: xn.PROCESSED,
                                response: {
                                    context: S,
                                    value: m
                                }
                            })
                        }
                })()
            } catch (l) {
                d(l)
            }
        });
        return {
            abortConfirmation: () => {
                i && (i(), i = void 0), n != null && (this.removeSignatureListener(n), n = void 0)
            },
            confirmationPromise: s
        }
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: e,
        strategy: {
            abortSignal: t,
            lastValidBlockHeight: n,
            signature: i
        }
    }) {
        let o = !1;
        const s = new Promise(b => {
                const S = async () => {
                    try {
                        return await this.getBlockHeight(e)
                    } catch {
                        return -1
                    }
                };
                (async () => {
                    let m = await S();
                    if (!o) {
                        for (; m <= n;)
                            if (await ir(1e3), o || (m = await S(), o)) return;
                        b({
                            __type: xn.BLOCKHEIGHT_EXCEEDED
                        })
                    }
                })()
            }),
            {
                abortConfirmation: a,
                confirmationPromise: u
            } = this.getTransactionConfirmationPromise({
                commitment: e,
                signature: i
            }),
            d = this.getCancellationPromise(t);
        let l;
        try {
            const b = await Promise.race([d, u, s]);
            if (b.__type === xn.PROCESSED) l = b.response;
            else throw new Ha(i)
        } finally {
            o = !0, a()
        }
        return l
    }
    async confirmTransactionUsingDurableNonceStrategy({
        commitment: e,
        strategy: {
            abortSignal: t,
            minContextSlot: n,
            nonceAccountPubkey: i,
            nonceValue: o,
            signature: s
        }
    }) {
        let a = !1;
        const u = new Promise(m => {
                let v = o,
                    T = null;
                const R = async () => {
                    try {
                        const {
                            context: N,
                            value: $
                        } = await this.getNonceAndContext(i, {
                            commitment: e,
                            minContextSlot: n
                        });
                        return T = N.slot, $ == null ? void 0 : $.nonce
                    } catch {
                        return v
                    }
                };
                (async () => {
                    if (v = await R(), !a)
                        for (;;) {
                            if (o !== v) {
                                m({
                                    __type: xn.NONCE_INVALID,
                                    slotInWhichNonceDidAdvance: T
                                });
                                return
                            }
                            if (await ir(2e3), a || (v = await R(), a)) return
                        }
                })()
            }),
            {
                abortConfirmation: d,
                confirmationPromise: l
            } = this.getTransactionConfirmationPromise({
                commitment: e,
                signature: s
            }),
            b = this.getCancellationPromise(t);
        let S;
        try {
            const m = await Promise.race([b, l, u]);
            if (m.__type === xn.PROCESSED) S = m.response;
            else {
                let v;
                for (;;) {
                    const T = await this.getSignatureStatus(s);
                    if (T == null) break;
                    if (T.context.slot < (m.slotInWhichNonceDidAdvance ?? n)) {
                        await ir(400);
                        continue
                    }
                    v = T;
                    break
                }
                if (v != null && v.value) {
                    const T = e || "finalized",
                        {
                            confirmationStatus: R
                        } = v.value;
                    switch (T) {
                        case "processed":
                        case "recent":
                            if (R !== "processed" && R !== "confirmed" && R !== "finalized") throw new Or(s);
                            break;
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                            if (R !== "confirmed" && R !== "finalized") throw new Or(s);
                            break;
                        case "finalized":
                        case "max":
                        case "root":
                            if (R !== "finalized") throw new Or(s);
                            break;
                        default:
                    }
                    S = {
                        context: v.context,
                        value: {
                            err: v.value.err
                        }
                    }
                } else throw new Or(s)
            }
        } finally {
            a = !0, d()
        }
        return S
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: e,
        signature: t
    }) {
        let n;
        const i = new Promise(u => {
                let d = this._confirmTransactionInitialTimeout || 6e4;
                switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip": {
                        d = this._confirmTransactionInitialTimeout || 3e4;
                        break
                    }
                }
                n = setTimeout(() => u({
                    __type: xn.TIMED_OUT,
                    timeoutMs: d
                }), d)
            }),
            {
                abortConfirmation: o,
                confirmationPromise: s
            } = this.getTransactionConfirmationPromise({
                commitment: e,
                signature: t
            });
        let a;
        try {
            const u = await Promise.race([s, i]);
            if (u.__type === xn.PROCESSED) a = u.response;
            else throw new za(t, u.timeoutMs / 1e3)
        } finally {
            clearTimeout(n), o()
        }
        return a
    }
    async getClusterNodes() {
        const e = await this._rpcRequest("getClusterNodes", []),
            t = te(e, we(re(K1)));
        if ("error" in t) throw new le(t.error, "failed to get cluster nodes");
        return t.result
    }
    async getVoteAccounts(e) {
        const t = this._buildArgs([], e),
            n = await this._rpcRequest("getVoteAccounts", t),
            i = te(n, $1);
        if ("error" in i) throw new le(i.error, "failed to get vote accounts");
        return i.result
    }
    async getSlot(e) {
        const {
            commitment: t,
            config: n
        } = Ue(e), i = this._buildArgs([], t, void 0, n), o = await this._rpcRequest("getSlot", i), s = te(o, we(H()));
        if ("error" in s) throw new le(s.error, "failed to get slot");
        return s.result
    }
    async getSlotLeader(e) {
        const {
            commitment: t,
            config: n
        } = Ue(e), i = this._buildArgs([], t, void 0, n), o = await this._rpcRequest("getSlotLeader", i), s = te(o, we(Q()));
        if ("error" in s) throw new le(s.error, "failed to get slot leader");
        return s.result
    }
    async getSlotLeaders(e, t) {
        const n = [e, t],
            i = await this._rpcRequest("getSlotLeaders", n),
            o = te(i, we(re(Ze)));
        if ("error" in o) throw new le(o.error, "failed to get slot leaders");
        return o.result
    }
    async getSignatureStatus(e, t) {
        const {
            context: n,
            value: i
        } = await this.getSignatureStatuses([e], t);
        Te(i.length === 1);
        const o = i[0];
        return {
            context: n,
            value: o
        }
    }
    async getSignatureStatuses(e, t) {
        const n = [e];
        t && n.push(t);
        const i = await this._rpcRequest("getSignatureStatuses", n),
            o = te(i, V1);
        if ("error" in o) throw new le(o.error, "failed to get signature status");
        return o.result
    }
    async getTransactionCount(e) {
        const {
            commitment: t,
            config: n
        } = Ue(e), i = this._buildArgs([], t, void 0, n), o = await this._rpcRequest("getTransactionCount", i), s = te(o, we(H()));
        if ("error" in s) throw new le(s.error, "failed to get transaction count");
        return s.result
    }
    async getTotalSupply(e) {
        return (await this.getSupply({
            commitment: e,
            excludeNonCirculatingAccountsList: !0
        })).value.total
    }
    async getInflationGovernor(e) {
        const t = this._buildArgs([], e),
            n = await this._rpcRequest("getInflationGovernor", t),
            i = te(n, y1);
        if ("error" in i) throw new le(i.error, "failed to get inflation");
        return i.result
    }
    async getInflationReward(e, t, n) {
        const {
            commitment: i,
            config: o
        } = Ue(n), s = this._buildArgs([e.map(d => d.toBase58())], i, void 0, {
            ...o,
            epoch: t ?? (o == null ? void 0 : o.epoch)
        }), a = await this._rpcRequest("getInflationReward", s), u = te(a, e1);
        if ("error" in u) throw new le(u.error, "failed to get inflation reward");
        return u.result
    }
    async getInflationRate() {
        const e = await this._rpcRequest("getInflationRate", []),
            t = te(e, m1);
        if ("error" in t) throw new le(t.error, "failed to get inflation rate");
        return t.result
    }
    async getEpochInfo(e) {
        const {
            commitment: t,
            config: n
        } = Ue(e), i = this._buildArgs([], t, void 0, n), o = await this._rpcRequest("getEpochInfo", i), s = te(o, w1);
        if ("error" in s) throw new le(s.error, "failed to get epoch info");
        return s.result
    }
    async getEpochSchedule() {
        const e = await this._rpcRequest("getEpochSchedule", []),
            t = te(e, b1);
        if ("error" in t) throw new le(t.error, "failed to get epoch schedule");
        const n = t.result;
        return new Sd(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot)
    }
    async getLeaderSchedule() {
        const e = await this._rpcRequest("getLeaderSchedule", []),
            t = te(e, _1);
        if ("error" in t) throw new le(t.error, "failed to get leader schedule");
        return t.result
    }
    async getMinimumBalanceForRentExemption(e, t) {
        const n = this._buildArgs([e], t),
            i = await this._rpcRequest("getMinimumBalanceForRentExemption", n),
            o = te(i, G1);
        return "error" in o ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : o.result
    }
    async getRecentBlockhashAndContext(e) {
        const {
            context: t,
            value: {
                blockhash: n
            }
        } = await this.getLatestBlockhashAndContext(e);
        return {
            context: t,
            value: {
                blockhash: n,
                feeCalculator: {
                    get lamportsPerSignature() {
                        throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.")
                    },
                    toJSON() {
                        return {}
                    }
                }
            }
        }
    }
    async getRecentPerformanceSamples(e) {
        const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
            n = te(t, sw);
        if ("error" in n) throw new le(n.error, "failed to get recent performance samples");
        return n.result
    }
    async getFeeCalculatorForBlockhash(e, t) {
        const n = this._buildArgs([e], t),
            i = await this._rpcRequest("getFeeCalculatorForBlockhash", n),
            o = te(i, aw);
        if ("error" in o) throw new le(o.error, "failed to get fee calculator");
        const {
            context: s,
            value: a
        } = o.result;
        return {
            context: s,
            value: a !== null ? a.feeCalculator : null
        }
    }
    async getFeeForMessage(e, t) {
        const n = be(e.serialize()).toString("base64"),
            i = this._buildArgs([n], t),
            o = await this._rpcRequest("getFeeForMessage", i),
            s = te(o, nt(ie(H())));
        if ("error" in s) throw new le(s.error, "failed to get fee for message");
        if (s.result === null) throw new Error("invalid blockhash");
        return s.result
    }
    async getRecentPrioritizationFees(e) {
        var s;
        const t = (s = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : s.map(a => a.toBase58()),
            n = t != null && t.length ? [t] : [],
            i = await this._rpcRequest("getRecentPrioritizationFees", n),
            o = te(i, g1);
        if ("error" in o) throw new le(o.error, "failed to get recent prioritization fees");
        return o.result
    }
    async getRecentBlockhash(e) {
        try {
            return (await this.getRecentBlockhashAndContext(e)).value
        } catch (t) {
            throw new Error("failed to get recent blockhash: " + t)
        }
    }
    async getLatestBlockhash(e) {
        try {
            return (await this.getLatestBlockhashAndContext(e)).value
        } catch (t) {
            throw new Error("failed to get recent blockhash: " + t)
        }
    }
    async getLatestBlockhashAndContext(e) {
        const {
            commitment: t,
            config: n
        } = Ue(e), i = this._buildArgs([], t, void 0, n), o = await this._rpcRequest("getLatestBlockhash", i), s = te(o, rw);
        if ("error" in s) throw new le(s.error, "failed to get latest blockhash");
        return s.result
    }
    async isBlockhashValid(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgs([e], n, void 0, i), s = await this._rpcRequest("isBlockhashValid", o), a = te(s, iw);
        if ("error" in a) throw new le(a.error, "failed to determine if the blockhash `" + e + "`is valid");
        return a.result
    }
    async getVersion() {
        const e = await this._rpcRequest("getVersion", []),
            t = te(e, we(c1));
        if ("error" in t) throw new le(t.error, "failed to get version");
        return t.result
    }
    async getGenesisHash() {
        const e = await this._rpcRequest("getGenesisHash", []),
            t = te(e, we(Q()));
        if ("error" in t) throw new le(t.error, "failed to get genesis hash");
        return t.result
    }
    async getBlock(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgsAtLeastConfirmed([e], n, void 0, i), s = await this._rpcRequest("getBlock", o);
        try {
            switch (i == null ? void 0 : i.transactionDetails) {
                case "accounts": {
                    const a = te(s, J1);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                case "none": {
                    const a = te(s, X1);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                default: {
                    const a = te(s, Y1);
                    if ("error" in a) throw a.error;
                    const {
                        result: u
                    } = a;
                    return u ? {
                        ...u,
                        transactions: u.transactions.map(({
                            transaction: d,
                            meta: l,
                            version: b
                        }) => ({
                            meta: l,
                            transaction: {
                                ...d,
                                message: xs(b, d.message)
                            },
                            version: b
                        }))
                    } : null
                }
            }
        } catch (a) {
            throw new le(a, "failed to get confirmed block")
        }
    }
    async getParsedBlock(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", i), s = await this._rpcRequest("getBlock", o);
        try {
            switch (i == null ? void 0 : i.transactionDetails) {
                case "accounts": {
                    const a = te(s, ew);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                case "none": {
                    const a = te(s, tw);
                    if ("error" in a) throw a.error;
                    return a.result
                }
                default: {
                    const a = te(s, Q1);
                    if ("error" in a) throw a.error;
                    return a.result
                }
            }
        } catch (a) {
            throw new le(a, "failed to get block")
        }
    }
    async getBlockProduction(e) {
        let t, n;
        if (typeof e == "string") n = e;
        else if (e) {
            const {
                commitment: a,
                ...u
            } = e;
            n = a, t = u
        }
        const i = this._buildArgs([], n, "base64", t),
            o = await this._rpcRequest("getBlockProduction", i),
            s = te(o, d1);
        if ("error" in s) throw new le(s.error, "failed to get block production information");
        return s.result
    }
    async getTransaction(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgsAtLeastConfirmed([e], n, void 0, i), s = await this._rpcRequest("getTransaction", o), a = te(s, Ts);
        if ("error" in a) throw new le(a.error, "failed to get transaction");
        const u = a.result;
        return u && {
            ...u,
            transaction: {
                ...u.transaction,
                message: xs(u.version, u.transaction.message)
            }
        }
    }
    async getParsedTransaction(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", i), s = await this._rpcRequest("getTransaction", o), a = te(s, Ki);
        if ("error" in a) throw new le(a.error, "failed to get transaction");
        return a.result
    }
    async getParsedTransactions(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = e.map(u => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([u], n, "jsonParsed", i)
        }));
        return (await this._rpcBatchRequest(o)).map(u => {
            const d = te(u, Ki);
            if ("error" in d) throw new le(d.error, "failed to get transactions");
            return d.result
        })
    }
    async getTransactions(e, t) {
        const {
            commitment: n,
            config: i
        } = Ue(t), o = e.map(u => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([u], n, void 0, i)
        }));
        return (await this._rpcBatchRequest(o)).map(u => {
            const d = te(u, Ts);
            if ("error" in d) throw new le(d.error, "failed to get transactions");
            const l = d.result;
            return l && {
                ...l,
                transaction: {
                    ...l.transaction,
                    message: xs(l.version, l.transaction.message)
                }
            }
        })
    }
    async getConfirmedBlock(e, t) {
        const n = this._buildArgsAtLeastConfirmed([e], t),
            i = await this._rpcRequest("getBlock", n),
            o = te(i, nw);
        if ("error" in o) throw new le(o.error, "failed to get confirmed block");
        const s = o.result;
        if (!s) throw new Error("Confirmed block " + e + " not found");
        const a = {
            ...s,
            transactions: s.transactions.map(({
                transaction: u,
                meta: d
            }) => {
                const l = new cn(u.message);
                return {
                    meta: d,
                    transaction: {
                        ...u,
                        message: l
                    }
                }
            })
        };
        return {
            ...a,
            transactions: a.transactions.map(({
                transaction: u,
                meta: d
            }) => ({
                meta: d,
                transaction: Ee.populate(u.message, u.signatures)
            }))
        }
    }
    async getBlocks(e, t, n) {
        const i = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n),
            o = await this._rpcRequest("getBlocks", i),
            s = te(o, we(re(H())));
        if ("error" in s) throw new le(s.error, "failed to get blocks");
        return s.result
    }
    async getBlockSignatures(e, t) {
        const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1
            }),
            i = await this._rpcRequest("getBlock", n),
            o = te(i, Xc);
        if ("error" in o) throw new le(o.error, "failed to get block");
        const s = o.result;
        if (!s) throw new Error("Block " + e + " not found");
        return s
    }
    async getConfirmedBlockSignatures(e, t) {
        const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1
            }),
            i = await this._rpcRequest("getBlock", n),
            o = te(i, Xc);
        if ("error" in o) throw new le(o.error, "failed to get confirmed block");
        const s = o.result;
        if (!s) throw new Error("Confirmed block " + e + " not found");
        return s
    }
    async getConfirmedTransaction(e, t) {
        const n = this._buildArgsAtLeastConfirmed([e], t),
            i = await this._rpcRequest("getTransaction", n),
            o = te(i, Ts);
        if ("error" in o) throw new le(o.error, "failed to get transaction");
        const s = o.result;
        if (!s) return s;
        const a = new cn(s.transaction.message),
            u = s.transaction.signatures;
        return {
            ...s,
            transaction: Ee.populate(a, u)
        }
    }
    async getParsedConfirmedTransaction(e, t) {
        const n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
            i = await this._rpcRequest("getTransaction", n),
            o = te(i, Ki);
        if ("error" in o) throw new le(o.error, "failed to get confirmed transaction");
        return o.result
    }
    async getParsedConfirmedTransactions(e, t) {
        const n = e.map(s => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([s], t, "jsonParsed")
        }));
        return (await this._rpcBatchRequest(n)).map(s => {
            const a = te(s, Ki);
            if ("error" in a) throw new le(a.error, "failed to get confirmed transactions");
            return a.result
        })
    }
    async getConfirmedSignaturesForAddress(e, t, n) {
        let i = {},
            o = await this.getFirstAvailableBlock();
        for (; !("until" in i) && (t--, !(t <= 0 || t < o));) try {
            const u = await this.getConfirmedBlockSignatures(t, "finalized");
            u.signatures.length > 0 && (i.until = u.signatures[u.signatures.length - 1].toString())
        } catch (u) {
            if (u instanceof Error && u.message.includes("skipped")) continue;
            throw u
        }
        let s = await this.getSlot("finalized");
        for (; !("before" in i) && (n++, !(n > s));) try {
            const u = await this.getConfirmedBlockSignatures(n);
            u.signatures.length > 0 && (i.before = u.signatures[u.signatures.length - 1].toString())
        } catch (u) {
            if (u instanceof Error && u.message.includes("skipped")) continue;
            throw u
        }
        return (await this.getConfirmedSignaturesForAddress2(e, i)).map(u => u.signature)
    }
    async getConfirmedSignaturesForAddress2(e, t, n) {
        const i = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t),
            o = await this._rpcRequest("getConfirmedSignaturesForAddress2", i),
            s = te(o, N1);
        if ("error" in s) throw new le(s.error, "failed to get confirmed signatures for address");
        return s.result
    }
    async getSignaturesForAddress(e, t, n) {
        const i = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t),
            o = await this._rpcRequest("getSignaturesForAddress", i),
            s = te(o, C1);
        if ("error" in s) throw new le(s.error, "failed to get signatures for address");
        return s.result
    }
    async getAddressLookupTable(e, t) {
        const {
            context: n,
            value: i
        } = await this.getAccountInfoAndContext(e, t);
        let o = null;
        return i !== null && (o = new Xs({
            key: e,
            state: Xs.deserialize(i.data)
        })), {
            context: n,
            value: o
        }
    }
    async getNonceAndContext(e, t) {
        const {
            context: n,
            value: i
        } = await this.getAccountInfoAndContext(e, t);
        let o = null;
        return i !== null && (o = Bo.fromAccountData(i.data)), {
            context: n,
            value: o
        }
    }
    async getNonce(e, t) {
        return await this.getNonceAndContext(e, t).then(n => n.value).catch(n => {
            throw new Error("failed to get nonce for account " + e.toBase58() + ": " + n)
        })
    }
    async requestAirdrop(e, t) {
        const n = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
            i = te(n, cw);
        if ("error" in i) throw new le(i.error, `airdrop to ${e.toBase58()} failed`);
        return i.result
    }
    async _blockhashWithExpiryBlockHeight(e) {
        if (!e) {
            for (; this._pollingBlockhash;) await ir(100);
            const n = Date.now() - this._blockhashInfo.lastFetch >= xd;
            if (this._blockhashInfo.latestBlockhash !== null && !n) return this._blockhashInfo.latestBlockhash
        }
        return await this._pollNewBlockhash()
    }
    async _pollNewBlockhash() {
        this._pollingBlockhash = !0;
        try {
            const e = Date.now(),
                t = this._blockhashInfo.latestBlockhash,
                n = t ? t.blockhash : null;
            for (let i = 0; i < 50; i++) {
                const o = await this.getLatestBlockhash("finalized");
                if (n !== o.blockhash) return this._blockhashInfo = {
                    latestBlockhash: o,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: []
                }, o;
                await ir(Rd / 2)
            }
            throw new Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)
        } finally {
            this._pollingBlockhash = !1
        }
    }
    async getStakeMinimumDelegation(e) {
        const {
            commitment: t,
            config: n
        } = Ue(e), i = this._buildArgs([], t, "base64", n), o = await this._rpcRequest("getStakeMinimumDelegation", i), s = te(o, nt(H()));
        if ("error" in s) throw new le(s.error, "failed to get stake minimum delegation");
        return s.result
    }
    async simulateTransaction(e, t, n) {
        if ("message" in e) {
            const T = e.serialize(),
                R = se.from(T).toString("base64");
            if (Array.isArray(t) || n !== void 0) throw new Error("Invalid arguments");
            const N = t || {};
            N.encoding = "base64", "commitment" in N || (N.commitment = this.commitment), t && typeof t == "object" && "innerInstructions" in t && (N.innerInstructions = t.innerInstructions);
            const $ = [R, N],
                P = await this._rpcRequest("simulateTransaction", $),
                K = te(P, Zc);
            if ("error" in K) throw new Error("failed to simulate transaction: " + K.error.message);
            return K.result
        }
        let i;
        if (e instanceof Ee) {
            let v = e;
            i = new Ee, i.feePayer = v.feePayer, i.instructions = e.instructions, i.nonceInfo = v.nonceInfo, i.signatures = v.signatures
        } else i = Ee.populate(e), i._message = i._json = void 0;
        if (t !== void 0 && !Array.isArray(t)) throw new Error("Invalid arguments");
        const o = t;
        if (i.nonceInfo && o) i.sign(...o);
        else {
            let v = this._disableBlockhashCaching;
            for (;;) {
                const T = await this._blockhashWithExpiryBlockHeight(v);
                if (i.lastValidBlockHeight = T.lastValidBlockHeight, i.recentBlockhash = T.blockhash, !o) break;
                if (i.sign(...o), !i.signature) throw new Error("!signature");
                const R = i.signature.toString("base64");
                if (!this._blockhashInfo.simulatedSignatures.includes(R) && !this._blockhashInfo.transactionSignatures.includes(R)) {
                    this._blockhashInfo.simulatedSignatures.push(R);
                    break
                } else v = !0
            }
        }
        const s = i._compile(),
            a = s.serialize(),
            d = i._serialize(a).toString("base64"),
            l = {
                encoding: "base64",
                commitment: this.commitment
            };
        if (n) {
            const v = (Array.isArray(n) ? n : s.nonProgramIds()).map(T => T.toBase58());
            l.accounts = {
                encoding: "base64",
                addresses: v
            }
        }
        o && (l.sigVerify = !0), t && typeof t == "object" && "innerInstructions" in t && (l.innerInstructions = t.innerInstructions);
        const b = [d, l],
            S = await this._rpcRequest("simulateTransaction", b),
            m = te(S, Zc);
        if ("error" in m) {
            let v;
            if ("data" in m.error && (v = m.error.data.logs, v && Array.isArray(v))) {
                const T = `
    `,
                    R = T + v.join(T);
                console.error(m.error.message, R)
            }
            throw new Yn({
                action: "simulate",
                signature: "",
                transactionMessage: m.error.message,
                logs: v
            })
        }
        return m.result
    }
    async sendTransaction(e, t, n) {
        if ("version" in e) {
            if (t && Array.isArray(t)) throw new Error("Invalid arguments");
            const s = e.serialize();
            return await this.sendRawTransaction(s, t)
        }
        if (t === void 0 || !Array.isArray(t)) throw new Error("Invalid arguments");
        const i = t;
        if (e.nonceInfo) e.sign(...i);
        else {
            let s = this._disableBlockhashCaching;
            for (;;) {
                const a = await this._blockhashWithExpiryBlockHeight(s);
                if (e.lastValidBlockHeight = a.lastValidBlockHeight, e.recentBlockhash = a.blockhash, e.sign(...i), !e.signature) throw new Error("!signature");
                const u = e.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(u)) s = !0;
                else {
                    this._blockhashInfo.transactionSignatures.push(u);
                    break
                }
            }
        }
        const o = e.serialize();
        return await this.sendRawTransaction(o, n)
    }
    async sendRawTransaction(e, t) {
        const n = be(e).toString("base64");
        return await this.sendEncodedTransaction(n, t)
    }
    async sendEncodedTransaction(e, t) {
        const n = {
                encoding: "base64"
            },
            i = t && t.skipPreflight,
            o = i === !0 ? "processed" : t && t.preflightCommitment || this.commitment;
        t && t.maxRetries != null && (n.maxRetries = t.maxRetries), t && t.minContextSlot != null && (n.minContextSlot = t.minContextSlot), i && (n.skipPreflight = i), o && (n.preflightCommitment = o);
        const s = [e, n],
            a = await this._rpcRequest("sendTransaction", s),
            u = te(a, uw);
        if ("error" in u) {
            let d;
            throw "data" in u.error && (d = u.error.data.logs), new Yn({
                action: i ? "send" : "simulate",
                signature: "",
                transactionMessage: u.error.message,
                logs: d
            })
        }
        return u.result
    }
    _wsOnOpen() {
        this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
            (async () => {
                try {
                    await this._rpcWebSocket.notify("ping")
                } catch {}
            })()
        }, 5e3), this._updateSubscriptions()
    }
    _wsOnError(e) {
        this._rpcWebSocketConnected = !1, console.error("ws error:", e.message)
    }
    _wsOnClose(e) {
        if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
            this._updateSubscriptions();
            return
        }
        this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([t, n]) => {
            this._setSubscription(t, {
                ...n,
                state: "pending"
            })
        })
    }
    _setSubscription(e, t) {
        var i;
        const n = (i = this._subscriptionsByHash[e]) == null ? void 0 : i.state;
        if (this._subscriptionsByHash[e] = t, n !== t.state) {
            const o = this._subscriptionStateChangeCallbacksByHash[e];
            o && o.forEach(s => {
                try {
                    s(t.state)
                } catch {}
            })
        }
    }
    _onSubscriptionStateChange(e, t) {
        var o;
        const n = this._subscriptionHashByClientSubscriptionId[e];
        if (n == null) return () => {};
        const i = (o = this._subscriptionStateChangeCallbacksByHash)[n] || (o[n] = new Set);
        return i.add(t), () => {
            i.delete(t), i.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n]
        }
    }
    async _updateSubscriptions() {
        if (Object.keys(this._subscriptionsByHash).length === 0) {
            this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                    this._rpcWebSocket.close()
                } catch (n) {
                    n instanceof Error && `${n.message}`
                }
            }, 500));
            return
        }
        if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
            this._rpcWebSocket.connect();
            return
        }
        const e = this._rpcWebSocketGeneration,
            t = () => e === this._rpcWebSocketGeneration;
        await Promise.all(Object.keys(this._subscriptionsByHash).map(async n => {
            const i = this._subscriptionsByHash[n];
            if (i !== void 0) switch (i.state) {
                case "pending":
                case "unsubscribed":
                    if (i.callbacks.size === 0) {
                        delete this._subscriptionsByHash[n], i.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[i.serverSubscriptionId], await this._updateSubscriptions();
                        return
                    }
                    await (async () => {
                        const {
                            args: o,
                            method: s
                        } = i;
                        try {
                            this._setSubscription(n, {
                                ...i,
                                state: "subscribing"
                            });
                            const a = await this._rpcWebSocket.call(s, o);
                            this._setSubscription(n, {
                                ...i,
                                serverSubscriptionId: a,
                                state: "subscribed"
                            }), this._subscriptionCallbacksByServerSubscriptionId[a] = i.callbacks, await this._updateSubscriptions()
                        } catch (a) {
                            if (console.error(`Received ${a instanceof Error?"":"JSON-RPC "}error calling \`${s}\``, {
                                    args: o,
                                    error: a
                                }), !t()) return;
                            this._setSubscription(n, {
                                ...i,
                                state: "pending"
                            }), await this._updateSubscriptions()
                        }
                    })();
                    break;
                case "subscribed":
                    i.callbacks.size === 0 && await (async () => {
                        const {
                            serverSubscriptionId: o,
                            unsubscribeMethod: s
                        } = i;
                        if (this._subscriptionsAutoDisposedByRpc.has(o)) this._subscriptionsAutoDisposedByRpc.delete(o);
                        else {
                            this._setSubscription(n, {
                                ...i,
                                state: "unsubscribing"
                            }), this._setSubscription(n, {
                                ...i,
                                state: "unsubscribing"
                            });
                            try {
                                await this._rpcWebSocket.call(s, [o])
                            } catch (a) {
                                if (a instanceof Error && console.error(`${s} error:`, a.message), !t()) return;
                                this._setSubscription(n, {
                                    ...i,
                                    state: "subscribed"
                                }), await this._updateSubscriptions();
                                return
                            }
                        }
                        this._setSubscription(n, {
                            ...i,
                            state: "unsubscribed"
                        }), await this._updateSubscriptions()
                    })();
                    break
            }
        }))
    }
    _handleServerNotification(e, t) {
        const n = this._subscriptionCallbacksByServerSubscriptionId[e];
        n !== void 0 && n.forEach(i => {
            try {
                i(...t)
            } catch (o) {
                console.error(o)
            }
        })
    }
    _wsOnAccountNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, B1);
        this._handleServerNotification(n, [t.value, t.context])
    }
    _makeSubscription(e, t) {
        const n = this._nextClientSubscriptionId++,
            i = Vc([e.method, t]),
            o = this._subscriptionsByHash[i];
        return o === void 0 ? this._subscriptionsByHash[i] = {
            ...e,
            args: t,
            callbacks: new Set([e.callback]),
            state: "pending"
        } : o.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[n] = i, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
            delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
            const s = this._subscriptionsByHash[i];
            Te(s !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), s.callbacks.delete(e.callback), await this._updateSubscriptions()
        }, this._updateSubscriptions(), n
    }
    onAccountChange(e, t, n) {
        const {
            commitment: i,
            config: o
        } = Ue(n), s = this._buildArgs([e.toBase58()], i || this._commitment || "finalized", "base64", o);
        return this._makeSubscription({
            callback: t,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe"
        }, s)
    }
    async removeAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "account change")
    }
    _wsOnProgramAccountNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, P1);
        this._handleServerNotification(n, [{
            accountId: t.value.pubkey,
            accountInfo: t.value.account
        }, t.context])
    }
    onProgramAccountChange(e, t, n, i) {
        const {
            commitment: o,
            config: s
        } = Ue(n), a = this._buildArgs([e.toBase58()], o || this._commitment || "finalized", "base64", s || (i ? {
            filters: jc(i)
        } : void 0));
        return this._makeSubscription({
            callback: t,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe"
        }, a)
    }
    async removeProgramAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "program account change")
    }
    onLogs(e, t, n) {
        const i = this._buildArgs([typeof e == "object" ? {
            mentions: [e.toString()]
        } : e], n || this._commitment || "finalized");
        return this._makeSubscription({
            callback: t,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe"
        }, i)
    }
    async removeOnLogsListener(e) {
        await this._unsubscribeClientSubscription(e, "logs")
    }
    _wsOnLogsNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, dw);
        this._handleServerNotification(n, [t.value, t.context])
    }
    _wsOnSlotNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, U1);
        this._handleServerNotification(n, [t])
    }
    onSlotChange(e) {
        return this._makeSubscription({
            callback: e,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe"
        }, [])
    }
    async removeSlotChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "slot change")
    }
    _wsOnSlotUpdatesNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, F1);
        this._handleServerNotification(n, [t])
    }
    onSlotUpdate(e) {
        return this._makeSubscription({
            callback: e,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe"
        }, [])
    }
    async removeSlotUpdateListener(e) {
        await this._unsubscribeClientSubscription(e, "slot update")
    }
    async _unsubscribeClientSubscription(e, t) {
        const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
        n ? await n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
    }
    _buildArgs(e, t, n, i) {
        const o = t || this._commitment;
        if (o || n || i) {
            let s = {};
            n && (s.encoding = n), o && (s.commitment = o), i && (s = Object.assign(s, i)), e.push(s)
        }
        return e
    }
    _buildArgsAtLeastConfirmed(e, t, n, i) {
        const o = t || this._commitment;
        if (o && !["confirmed", "finalized"].includes(o)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
        return this._buildArgs(e, t, n, i)
    }
    _wsOnSignatureNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, H1);
        t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, t.value === "receivedSignature" ? [{
            type: "received"
        }, t.context] : [{
            type: "status",
            result: t.value
        }, t.context])
    }
    onSignature(e, t, n) {
        const i = this._buildArgs([e], n || this._commitment || "finalized"),
            o = this._makeSubscription({
                callback: (s, a) => {
                    if (s.type === "status") {
                        t(s.result, a);
                        try {
                            this.removeSignatureListener(o)
                        } catch {}
                    }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, i);
        return o
    }
    onSignatureWithOptions(e, t, n) {
        const {
            commitment: i,
            ...o
        } = {
            ...n,
            commitment: n && n.commitment || this._commitment || "finalized"
        }, s = this._buildArgs([e], i, void 0, o), a = this._makeSubscription({
            callback: (u, d) => {
                t(u, d);
                try {
                    this.removeSignatureListener(a)
                } catch {}
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, s);
        return a
    }
    async removeSignatureListener(e) {
        await this._unsubscribeClientSubscription(e, "signature result")
    }
    _wsOnRootNotification(e) {
        const {
            result: t,
            subscription: n
        } = te(e, z1);
        this._handleServerNotification(n, [t])
    }
    onRootChange(e) {
        return this._makeSubscription({
            callback: e,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe"
        }, [])
    }
    async removeRootChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "root change")
    }
}
class Br {
    constructor(e) {
        this._keypair = void 0, this._keypair = e ?? Kc()
    }
    static generate() {
        return new Br(Kc())
    }
    static fromSecretKey(e, t) {
        if (e.byteLength !== 64) throw new Error("bad secret key size");
        const n = e.slice(32, 64);
        if (!t || !t.skipValidation) {
            const i = e.slice(0, 32),
                o = lo(i);
            for (let s = 0; s < 32; s++)
                if (n[s] !== o[s]) throw new Error("provided secretKey is invalid")
        }
        return new Br({
            publicKey: n,
            secretKey: e
        })
    }
    static fromSeed(e) {
        const t = lo(e),
            n = new Uint8Array(64);
        return n.set(e), n.set(t, 32), new Br({
            publicKey: t,
            secretKey: n
        })
    }
    get publicKey() {
        return new j(this._keypair.publicKey)
    }
    get secretKey() {
        return new Uint8Array(this._keypair.secretKey)
    }
}
const Bn = Object.freeze({
    CreateLookupTable: {
        index: 0,
        layout: ce([ae("instruction"), zr("recentSlot"), ve("bumpSeed")])
    },
    FreezeLookupTable: {
        index: 1,
        layout: ce([ae("instruction")])
    },
    ExtendLookupTable: {
        index: 2,
        layout: ce([ae("instruction"), zr(), xt(_e(), Vn(ae(), -8), "addresses")])
    },
    DeactivateLookupTable: {
        index: 3,
        layout: ce([ae("instruction")])
    },
    CloseLookupTable: {
        index: 4,
        layout: ce([ae("instruction")])
    }
});
class hw {
    constructor() {}
    static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        const n = ae("instruction").decode(e.data);
        let i;
        for (const [o, s] of Object.entries(Bn))
            if (s.index == n) {
                i = o;
                break
            } if (!i) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
        return i
    }
    static decodeCreateLookupTable(e) {
        this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
        const {
            recentSlot: t
        } = Ce(Bn.CreateLookupTable, e.data);
        return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t)
        }
    }
    static decodeExtendLookupTable(e) {
        if (this.checkProgramId(e.programId), e.keys.length < 2) throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
        const {
            addresses: t
        } = Ce(Bn.ExtendLookupTable, e.data);
        return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map(n => new j(n))
        }
    }
    static decodeCloseLookupTable(e) {
        return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 3), {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            recipient: e.keys[2].pubkey
        }
    }
    static decodeFreezeLookupTable(e) {
        return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey
        }
    }
    static decodeDeactivateLookupTable(e) {
        return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey
        }
    }
    static checkProgramId(e) {
        if (!e.equals(ja.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program")
    }
    static checkKeysLength(e, t) {
        if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
    }
}
class ja {
    constructor() {}
    static createLookupTable(e) {
        const [t, n] = j.findProgramAddressSync([e.authority.toBuffer(), ed().encode(e.recentSlot)], this.programId), i = Bn.CreateLookupTable, o = xe(i, {
            recentSlot: BigInt(e.recentSlot),
            bumpSeed: n
        }), s = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: e.authority,
            isSigner: !0,
            isWritable: !1
        }, {
            pubkey: e.payer,
            isSigner: !0,
            isWritable: !0
        }, {
            pubkey: st.programId,
            isSigner: !1,
            isWritable: !1
        }];
        return [new Oe({
            programId: this.programId,
            keys: s,
            data: o
        }), t]
    }
    static freezeLookupTable(e) {
        const t = Bn.FreezeLookupTable,
            n = xe(t),
            i = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
        return new Oe({
            programId: this.programId,
            keys: i,
            data: n
        })
    }
    static extendLookupTable(e) {
        const t = Bn.ExtendLookupTable,
            n = xe(t, {
                addresses: e.addresses.map(o => o.toBytes())
            }),
            i = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
        return e.payer && i.push({
            pubkey: e.payer,
            isSigner: !0,
            isWritable: !0
        }, {
            pubkey: st.programId,
            isSigner: !1,
            isWritable: !1
        }), new Oe({
            programId: this.programId,
            keys: i,
            data: n
        })
    }
    static deactivateLookupTable(e) {
        const t = Bn.DeactivateLookupTable,
            n = xe(t),
            i = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
        return new Oe({
            programId: this.programId,
            keys: i,
            data: n
        })
    }
    static closeLookupTable(e) {
        const t = Bn.CloseLookupTable,
            n = xe(t),
            i = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.recipient,
                isSigner: !1,
                isWritable: !0
            }];
        return new Oe({
            programId: this.programId,
            keys: i,
            data: n
        })
    }
}
ja.programId = new j("AddressLookupTab1e1111111111111111111111111");
class pw {
    constructor() {}
    static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        const n = ve("instruction").decode(e.data);
        let i;
        for (const [o, s] of Object.entries(yn))
            if (s.index == n) {
                i = o;
                break
            } if (!i) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
        return i
    }
    static decodeRequestUnits(e) {
        this.checkProgramId(e.programId);
        const {
            units: t,
            additionalFee: n
        } = Ce(yn.RequestUnits, e.data);
        return {
            units: t,
            additionalFee: n
        }
    }
    static decodeRequestHeapFrame(e) {
        this.checkProgramId(e.programId);
        const {
            bytes: t
        } = Ce(yn.RequestHeapFrame, e.data);
        return {
            bytes: t
        }
    }
    static decodeSetComputeUnitLimit(e) {
        this.checkProgramId(e.programId);
        const {
            units: t
        } = Ce(yn.SetComputeUnitLimit, e.data);
        return {
            units: t
        }
    }
    static decodeSetComputeUnitPrice(e) {
        this.checkProgramId(e.programId);
        const {
            microLamports: t
        } = Ce(yn.SetComputeUnitPrice, e.data);
        return {
            microLamports: t
        }
    }
    static checkProgramId(e) {
        if (!e.equals(Za.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram")
    }
}
const yn = Object.freeze({
    RequestUnits: {
        index: 0,
        layout: ce([ve("instruction"), ae("units"), ae("additionalFee")])
    },
    RequestHeapFrame: {
        index: 1,
        layout: ce([ve("instruction"), ae("bytes")])
    },
    SetComputeUnitLimit: {
        index: 2,
        layout: ce([ve("instruction"), ae("units")])
    },
    SetComputeUnitPrice: {
        index: 3,
        layout: ce([ve("instruction"), zr("microLamports")])
    }
});
class Za {
    constructor() {}
    static requestUnits(e) {
        const t = yn.RequestUnits,
            n = xe(t, e);
        return new Oe({
            keys: [],
            programId: this.programId,
            data: n
        })
    }
    static requestHeapFrame(e) {
        const t = yn.RequestHeapFrame,
            n = xe(t, e);
        return new Oe({
            keys: [],
            programId: this.programId,
            data: n
        })
    }
    static setComputeUnitLimit(e) {
        const t = yn.SetComputeUnitLimit,
            n = xe(t, e);
        return new Oe({
            keys: [],
            programId: this.programId,
            data: n
        })
    }
    static setComputeUnitPrice(e) {
        const t = yn.SetComputeUnitPrice,
            n = xe(t, {
                microLamports: BigInt(e.microLamports)
            });
        return new Oe({
            keys: [],
            programId: this.programId,
            data: n
        })
    }
}
Za.programId = new j("ComputeBudget111111111111111111111111111111");
const Jc = 64,
    Qc = 32,
    eu = 64,
    tu = ce([ve("numSignatures"), ve("padding"), Jt("signatureOffset"), Jt("signatureInstructionIndex"), Jt("publicKeyOffset"), Jt("publicKeyInstructionIndex"), Jt("messageDataOffset"), Jt("messageDataSize"), Jt("messageInstructionIndex")]);
class Lo {
    constructor() {}
    static createInstructionWithPublicKey(e) {
        const {
            publicKey: t,
            message: n,
            signature: i,
            instructionIndex: o
        } = e;
        Te(t.length === Qc, `Public Key must be ${Qc} bytes but received ${t.length} bytes`), Te(i.length === eu, `Signature must be ${eu} bytes but received ${i.length} bytes`);
        const s = tu.span,
            a = s + t.length,
            u = a + i.length,
            d = 1,
            l = se.alloc(u + n.length),
            b = o ?? 65535;
        return tu.encode({
            numSignatures: d,
            padding: 0,
            signatureOffset: a,
            signatureInstructionIndex: b,
            publicKeyOffset: s,
            publicKeyInstructionIndex: b,
            messageDataOffset: u,
            messageDataSize: n.length,
            messageInstructionIndex: b
        }, l), l.fill(t, s), l.fill(i, a), l.fill(n, u), new Oe({
            keys: [],
            programId: Lo.programId,
            data: l
        })
    }
    static createInstructionWithPrivateKey(e) {
        const {
            privateKey: t,
            message: n,
            instructionIndex: i
        } = e;
        Te(t.length === Jc, `Private key must be ${Jc} bytes but received ${t.length} bytes`);
        try {
            const o = Br.fromSecretKey(t),
                s = o.publicKey.toBytes(),
                a = Da(n, o.secretKey);
            return this.createInstructionWithPublicKey({
                publicKey: s,
                message: n,
                signature: a,
                instructionIndex: i
            })
        } catch (o) {
            throw new Error(`Error creating instruction; ${o}`)
        }
    }
}
Lo.programId = new j("Ed25519SigVerify111111111111111111111111111");
const yw = (r, e) => {
    const t = Ua.sign(r, e);
    return [t.toCompactRawBytes(), t.recovery]
};
Ua.utils.isValidPrivateKey;
const mw = Ua.getPublicKey,
    nu = 32,
    Os = 20,
    ru = 64,
    gw = 11,
    Ns = ce([ve("numSignatures"), Jt("signatureOffset"), ve("signatureInstructionIndex"), Jt("ethAddressOffset"), ve("ethAddressInstructionIndex"), Jt("messageDataOffset"), Jt("messageDataSize"), ve("messageInstructionIndex"), Pe(20, "ethAddress"), Pe(64, "signature"), ve("recoveryId")]);
class Mr {
    constructor() {}
    static publicKeyToEthAddress(e) {
        Te(e.length === ru, `Public key must be ${ru} bytes but received ${e.length} bytes`);
        try {
            return se.from(Fc(be(e))).slice(-Os)
        } catch (t) {
            throw new Error(`Error constructing Ethereum address: ${t}`)
        }
    }
    static createInstructionWithPublicKey(e) {
        const {
            publicKey: t,
            message: n,
            signature: i,
            recoveryId: o,
            instructionIndex: s
        } = e;
        return Mr.createInstructionWithEthAddress({
            ethAddress: Mr.publicKeyToEthAddress(t),
            message: n,
            signature: i,
            recoveryId: o,
            instructionIndex: s
        })
    }
    static createInstructionWithEthAddress(e) {
        const {
            ethAddress: t,
            message: n,
            signature: i,
            recoveryId: o,
            instructionIndex: s = 0
        } = e;
        let a;
        typeof t == "string" ? t.startsWith("0x") ? a = se.from(t.substr(2), "hex") : a = se.from(t, "hex") : a = t, Te(a.length === Os, `Address must be ${Os} bytes but received ${a.length} bytes`);
        const u = 1 + gw,
            d = u,
            l = u + a.length,
            b = l + i.length + 1,
            S = 1,
            m = se.alloc(Ns.span + n.length);
        return Ns.encode({
            numSignatures: S,
            signatureOffset: l,
            signatureInstructionIndex: s,
            ethAddressOffset: d,
            ethAddressInstructionIndex: s,
            messageDataOffset: b,
            messageDataSize: n.length,
            messageInstructionIndex: s,
            signature: be(i),
            ethAddress: be(a),
            recoveryId: o
        }, m), m.fill(be(n), Ns.span), new Oe({
            keys: [],
            programId: Mr.programId,
            data: m
        })
    }
    static createInstructionWithPrivateKey(e) {
        const {
            privateKey: t,
            message: n,
            instructionIndex: i
        } = e;
        Te(t.length === nu, `Private key must be ${nu} bytes but received ${t.length} bytes`);
        try {
            const o = be(t),
                s = mw(o, !1).slice(1),
                a = se.from(Fc(be(n))),
                [u, d] = yw(a, o);
            return this.createInstructionWithPublicKey({
                publicKey: s,
                message: n,
                signature: u,
                recoveryId: d,
                instructionIndex: i
            })
        } catch (o) {
            throw new Error(`Error creating instruction; ${o}`)
        }
    }
}
Mr.programId = new j("KeccakSecp256k11111111111111111111111111111");
var Dd;
const Fd = new j("StakeConfig11111111111111111111111111111111");
class Hd {
    constructor(e, t) {
        this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t
    }
}
class Si {
    constructor(e, t, n) {
        this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = n
    }
}
Dd = Si;
Si.default = new Dd(0, 0, j.default);
class ww {
    constructor() {}
    static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        const n = ae("instruction").decode(e.data);
        let i;
        for (const [o, s] of Object.entries(At))
            if (s.index == n) {
                i = o;
                break
            } if (!i) throw new Error("Instruction type incorrect; not a StakeInstruction");
        return i
    }
    static decodeInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        const {
            authorized: t,
            lockup: n
        } = Ce(At.Initialize, e.data);
        return {
            stakePubkey: e.keys[0].pubkey,
            authorized: new Hd(new j(t.staker), new j(t.withdrawer)),
            lockup: new Si(n.unixTimestamp, n.epoch, new j(n.custodian))
        }
    }
    static decodeDelegate(e) {
        return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), Ce(At.Delegate, e.data), {
            stakePubkey: e.keys[0].pubkey,
            votePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[5].pubkey
        }
    }
    static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            newAuthorized: t,
            stakeAuthorizationType: n
        } = Ce(At.Authorize, e.data), i = {
            stakePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new j(t),
            stakeAuthorizationType: {
                index: n
            }
        };
        return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey), i
    }
    static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        const {
            newAuthorized: t,
            stakeAuthorizationType: n,
            authoritySeed: i,
            authorityOwner: o
        } = Ce(At.AuthorizeWithSeed, e.data), s = {
            stakePubkey: e.keys[0].pubkey,
            authorityBase: e.keys[1].pubkey,
            authoritySeed: i,
            authorityOwner: new j(o),
            newAuthorizedPubkey: new j(t),
            stakeAuthorizationType: {
                index: n
            }
        };
        return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s
    }
    static decodeSplit(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            lamports: t
        } = Ce(At.Split, e.data);
        return {
            stakePubkey: e.keys[0].pubkey,
            splitStakePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            lamports: t
        }
    }
    static decodeMerge(e) {
        return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), Ce(At.Merge, e.data), {
            stakePubkey: e.keys[0].pubkey,
            sourceStakePubKey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey
        }
    }
    static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        const {
            lamports: t
        } = Ce(At.Withdraw, e.data), n = {
            stakePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t
        };
        return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey), n
    }
    static decodeDeactivate(e) {
        return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), Ce(At.Deactivate, e.data), {
            stakePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey
        }
    }
    static checkProgramId(e) {
        if (!e.equals(Uo.programId)) throw new Error("invalid instruction; programId is not StakeProgram")
    }
    static checkKeyLength(e, t) {
        if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
    }
}
const At = Object.freeze({
        Initialize: {
            index: 0,
            layout: ce([ae("instruction"), Rg(), Ag()])
        },
        Authorize: {
            index: 1,
            layout: ce([ae("instruction"), _e("newAuthorized"), ae("stakeAuthorizationType")])
        },
        Delegate: {
            index: 2,
            layout: ce([ae("instruction")])
        },
        Split: {
            index: 3,
            layout: ce([ae("instruction"), Vt("lamports")])
        },
        Withdraw: {
            index: 4,
            layout: ce([ae("instruction"), Vt("lamports")])
        },
        Deactivate: {
            index: 5,
            layout: ce([ae("instruction")])
        },
        Merge: {
            index: 7,
            layout: ce([ae("instruction")])
        },
        AuthorizeWithSeed: {
            index: 8,
            layout: ce([ae("instruction"), _e("newAuthorized"), ae("stakeAuthorizationType"), ar("authoritySeed"), _e("authorityOwner")])
        }
    }),
    bw = Object.freeze({
        Staker: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    });
class Uo {
    constructor() {}
    static initialize(e) {
        const {
            stakePubkey: t,
            authorized: n,
            lockup: i
        } = e, o = i || Si.default, s = At.Initialize, a = xe(s, {
            authorized: {
                staker: be(n.staker.toBuffer()),
                withdrawer: be(n.withdrawer.toBuffer())
            },
            lockup: {
                unixTimestamp: o.unixTimestamp,
                epoch: o.epoch,
                custodian: be(o.custodian.toBuffer())
            }
        }), u = {
            keys: [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Hr,
                isSigner: !1,
                isWritable: !1
            }],
            programId: this.programId,
            data: a
        };
        return new Oe(u)
    }
    static createAccountWithSeed(e) {
        const t = new Ee;
        t.add(st.createAccountWithSeed({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.stakePubkey,
            basePubkey: e.basePubkey,
            seed: e.seed,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId
        }));
        const {
            stakePubkey: n,
            authorized: i,
            lockup: o
        } = e;
        return t.add(this.initialize({
            stakePubkey: n,
            authorized: i,
            lockup: o
        }))
    }
    static createAccount(e) {
        const t = new Ee;
        t.add(st.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.stakePubkey,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId
        }));
        const {
            stakePubkey: n,
            authorized: i,
            lockup: o
        } = e;
        return t.add(this.initialize({
            stakePubkey: n,
            authorized: i,
            lockup: o
        }))
    }
    static delegate(e) {
        const {
            stakePubkey: t,
            authorizedPubkey: n,
            votePubkey: i
        } = e, o = At.Delegate, s = xe(o);
        return new Ee().add({
            keys: [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: i,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: fn,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Yi,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Fd,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: s
        })
    }
    static authorize(e) {
        const {
            stakePubkey: t,
            authorizedPubkey: n,
            newAuthorizedPubkey: i,
            stakeAuthorizationType: o,
            custodianPubkey: s
        } = e, a = At.Authorize, u = xe(a, {
            newAuthorized: be(i.toBuffer()),
            stakeAuthorizationType: o.index
        }), d = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: fn,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: n,
            isSigner: !0,
            isWritable: !1
        }];
        return s && d.push({
            pubkey: s,
            isSigner: !0,
            isWritable: !1
        }), new Ee().add({
            keys: d,
            programId: this.programId,
            data: u
        })
    }
    static authorizeWithSeed(e) {
        const {
            stakePubkey: t,
            authorityBase: n,
            authoritySeed: i,
            authorityOwner: o,
            newAuthorizedPubkey: s,
            stakeAuthorizationType: a,
            custodianPubkey: u
        } = e, d = At.AuthorizeWithSeed, l = xe(d, {
            newAuthorized: be(s.toBuffer()),
            stakeAuthorizationType: a.index,
            authoritySeed: i,
            authorityOwner: be(o.toBuffer())
        }), b = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: n,
            isSigner: !0,
            isWritable: !1
        }, {
            pubkey: fn,
            isSigner: !1,
            isWritable: !1
        }];
        return u && b.push({
            pubkey: u,
            isSigner: !0,
            isWritable: !1
        }), new Ee().add({
            keys: b,
            programId: this.programId,
            data: l
        })
    }
    static splitInstruction(e) {
        const {
            stakePubkey: t,
            authorizedPubkey: n,
            splitStakePubkey: i,
            lamports: o
        } = e, s = At.Split, a = xe(s, {
            lamports: o
        });
        return new Oe({
            keys: [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: i,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: a
        })
    }
    static split(e, t) {
        const n = new Ee;
        return n.add(st.createAccount({
            fromPubkey: e.authorizedPubkey,
            newAccountPubkey: e.splitStakePubkey,
            lamports: t,
            space: this.space,
            programId: this.programId
        })), n.add(this.splitInstruction(e))
    }
    static splitWithSeed(e, t) {
        const {
            stakePubkey: n,
            authorizedPubkey: i,
            splitStakePubkey: o,
            basePubkey: s,
            seed: a,
            lamports: u
        } = e, d = new Ee;
        return d.add(st.allocate({
            accountPubkey: o,
            basePubkey: s,
            seed: a,
            space: this.space,
            programId: this.programId
        })), t && t > 0 && d.add(st.transfer({
            fromPubkey: e.authorizedPubkey,
            toPubkey: o,
            lamports: t
        })), d.add(this.splitInstruction({
            stakePubkey: n,
            authorizedPubkey: i,
            splitStakePubkey: o,
            lamports: u
        }))
    }
    static merge(e) {
        const {
            stakePubkey: t,
            sourceStakePubKey: n,
            authorizedPubkey: i
        } = e, o = At.Merge, s = xe(o);
        return new Ee().add({
            keys: [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: fn,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Yi,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: i,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: s
        })
    }
    static withdraw(e) {
        const {
            stakePubkey: t,
            authorizedPubkey: n,
            toPubkey: i,
            lamports: o,
            custodianPubkey: s
        } = e, a = At.Withdraw, u = xe(a, {
            lamports: o
        }), d = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: i,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: fn,
            isSigner: !1,
            isWritable: !1
        }, {
            pubkey: Yi,
            isSigner: !1,
            isWritable: !1
        }, {
            pubkey: n,
            isSigner: !0,
            isWritable: !1
        }];
        return s && d.push({
            pubkey: s,
            isSigner: !0,
            isWritable: !1
        }), new Ee().add({
            keys: d,
            programId: this.programId,
            data: u
        })
    }
    static deactivate(e) {
        const {
            stakePubkey: t,
            authorizedPubkey: n
        } = e, i = At.Deactivate, o = xe(i);
        return new Ee().add({
            keys: [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: fn,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: o
        })
    }
}
Uo.programId = new j("Stake11111111111111111111111111111111111111");
Uo.space = 200;
class zd {
    constructor(e, t, n, i) {
        this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = n, this.commission = i
    }
}
class _w {
    constructor() {}
    static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        const n = ae("instruction").decode(e.data);
        let i;
        for (const [o, s] of Object.entries(mn))
            if (s.index == n) {
                i = o;
                break
            } if (!i) throw new Error("Instruction type incorrect; not a VoteInstruction");
        return i
    }
    static decodeInitializeAccount(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
        const {
            voteInit: t
        } = Ce(mn.InitializeAccount, e.data);
        return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new zd(new j(t.nodePubkey), new j(t.authorizedVoter), new j(t.authorizedWithdrawer), t.commission)
        }
    }
    static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            newAuthorized: t,
            voteAuthorizationType: n
        } = Ce(mn.Authorize, e.data);
        return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new j(t),
            voteAuthorizationType: {
                index: n
            }
        }
    }
    static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: t,
                currentAuthorityDerivedKeySeed: n,
                newAuthorized: i,
                voteAuthorizationType: o
            }
        } = Ce(mn.AuthorizeWithSeed, e.data);
        return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new j(t),
            currentAuthorityDerivedKeySeed: n,
            newAuthorizedPubkey: new j(i),
            voteAuthorizationType: {
                index: o
            },
            votePubkey: e.keys[0].pubkey
        }
    }
    static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        const {
            lamports: t
        } = Ce(mn.Withdraw, e.data);
        return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey
        }
    }
    static checkProgramId(e) {
        if (!e.equals(Yr.programId)) throw new Error("invalid instruction; programId is not VoteProgram")
    }
    static checkKeyLength(e, t) {
        if (e.length < t) throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
    }
}
const mn = Object.freeze({
        InitializeAccount: {
            index: 0,
            layout: ce([ae("instruction"), kg()])
        },
        Authorize: {
            index: 1,
            layout: ce([ae("instruction"), _e("newAuthorized"), ae("voteAuthorizationType")])
        },
        Withdraw: {
            index: 3,
            layout: ce([ae("instruction"), Vt("lamports")])
        },
        UpdateValidatorIdentity: {
            index: 4,
            layout: ce([ae("instruction")])
        },
        AuthorizeWithSeed: {
            index: 10,
            layout: ce([ae("instruction"), Sg()])
        }
    }),
    Ew = Object.freeze({
        Voter: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    });
class Yr {
    constructor() {}
    static initializeAccount(e) {
        const {
            votePubkey: t,
            nodePubkey: n,
            voteInit: i
        } = e, o = mn.InitializeAccount, s = xe(o, {
            voteInit: {
                nodePubkey: be(i.nodePubkey.toBuffer()),
                authorizedVoter: be(i.authorizedVoter.toBuffer()),
                authorizedWithdrawer: be(i.authorizedWithdrawer.toBuffer()),
                commission: i.commission
            }
        }), a = {
            keys: [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Hr,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: fn,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }],
            programId: this.programId,
            data: s
        };
        return new Oe(a)
    }
    static createAccount(e) {
        const t = new Ee;
        return t.add(st.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.votePubkey,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId
        })), t.add(this.initializeAccount({
            votePubkey: e.votePubkey,
            nodePubkey: e.voteInit.nodePubkey,
            voteInit: e.voteInit
        }))
    }
    static authorize(e) {
        const {
            votePubkey: t,
            authorizedPubkey: n,
            newAuthorizedPubkey: i,
            voteAuthorizationType: o
        } = e, s = mn.Authorize, a = xe(s, {
            newAuthorized: be(i.toBuffer()),
            voteAuthorizationType: o.index
        }), u = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: fn,
            isSigner: !1,
            isWritable: !1
        }, {
            pubkey: n,
            isSigner: !0,
            isWritable: !1
        }];
        return new Ee().add({
            keys: u,
            programId: this.programId,
            data: a
        })
    }
    static authorizeWithSeed(e) {
        const {
            currentAuthorityDerivedKeyBasePubkey: t,
            currentAuthorityDerivedKeyOwnerPubkey: n,
            currentAuthorityDerivedKeySeed: i,
            newAuthorizedPubkey: o,
            voteAuthorizationType: s,
            votePubkey: a
        } = e, u = mn.AuthorizeWithSeed, d = xe(u, {
            voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: be(n.toBuffer()),
                currentAuthorityDerivedKeySeed: i,
                newAuthorized: be(o.toBuffer()),
                voteAuthorizationType: s.index
            }
        }), l = [{
            pubkey: a,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: fn,
            isSigner: !1,
            isWritable: !1
        }, {
            pubkey: t,
            isSigner: !0,
            isWritable: !1
        }];
        return new Ee().add({
            keys: l,
            programId: this.programId,
            data: d
        })
    }
    static withdraw(e) {
        const {
            votePubkey: t,
            authorizedWithdrawerPubkey: n,
            lamports: i,
            toPubkey: o
        } = e, s = mn.Withdraw, a = xe(s, {
            lamports: i
        }), u = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: o,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: n,
            isSigner: !0,
            isWritable: !1
        }];
        return new Ee().add({
            keys: u,
            programId: this.programId,
            data: a
        })
    }
    static safeWithdraw(e, t, n) {
        if (e.lamports > t - n) throw new Error("Withdraw will leave vote account with insufficient funds.");
        return Yr.withdraw(e)
    }
    static updateValidatorIdentity(e) {
        const {
            votePubkey: t,
            authorizedWithdrawerPubkey: n,
            nodePubkey: i
        } = e, o = mn.UpdateValidatorIdentity, s = xe(o), a = [{
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: i,
            isSigner: !0,
            isWritable: !1
        }, {
            pubkey: n,
            isSigner: !0,
            isWritable: !1
        }];
        return new Ee().add({
            keys: a,
            programId: this.programId,
            data: s
        })
    }
}
Yr.programId = new j("Vote111111111111111111111111111111111111111");
Yr.space = 3762;
const Kd = new j("Va1idator1nfo111111111111111111111111111111"),
    vw = X({
        name: Q(),
        website: de(Q()),
        details: de(Q()),
        iconUrl: de(Q()),
        keybaseUsername: de(Q())
    });
class Ya {
    constructor(e, t) {
        this.key = void 0, this.info = void 0, this.key = e, this.info = t
    }
    static fromConfigData(e) {
        let t = [...e];
        if (Dt(t) !== 2) return null;
        const i = [];
        for (let o = 0; o < 2; o++) {
            const s = new j(Ft(t, 0, gn)),
                a = pn(t) === 1;
            i.push({
                publicKey: s,
                isSigner: a
            })
        }
        if (i[0].publicKey.equals(Kd) && i[1].isSigner) {
            const o = ar().decode(se.from(t)),
                s = JSON.parse(o);
            return td(s, vw), new Ya(i[1].publicKey, s)
        }
        return null
    }
}
const Rw = new j("Vote111111111111111111111111111111111111111"),
    Aw = ce([_e("nodePubkey"), _e("authorizedWithdrawer"), ve("commission"), St(), xt(ce([St("slot"), ae("confirmationCount")]), Vn(ae(), -8), "votes"), ve("rootSlotValid"), St("rootSlot"), St(), xt(ce([St("epoch"), _e("authorizedVoter")]), Vn(ae(), -8), "authorizedVoters"), ce([xt(ce([_e("authorizedPubkey"), St("epochOfLastAuthorizedSwitch"), St("targetEpoch")]), 32, "buf"), St("idx"), ve("isEmpty")], "priorVoters"), St(), xt(ce([St("epoch"), St("credits"), St("prevCredits")]), Vn(ae(), -8), "epochCredits"), ce([St("slot"), St("timestamp")], "lastTimestamp")]);
class Xa {
    constructor(e) {
        this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp
    }
    static fromAccountData(e) {
        const n = Aw.decode(be(e), 4);
        let i = n.rootSlot;
        return n.rootSlotValid || (i = null), new Xa({
            nodePubkey: new j(n.nodePubkey),
            authorizedWithdrawer: new j(n.authorizedWithdrawer),
            commission: n.commission,
            votes: n.votes,
            rootSlot: i,
            authorizedVoters: n.authorizedVoters.map(kw),
            priorVoters: Sw(n.priorVoters),
            epochCredits: n.epochCredits,
            lastTimestamp: n.lastTimestamp
        })
    }
}

function kw({
    authorizedVoter: r,
    epoch: e
}) {
    return {
        epoch: e,
        authorizedVoter: new j(r)
    }
}

function iu({
    authorizedPubkey: r,
    epochOfLastAuthorizedSwitch: e,
    targetEpoch: t
}) {
    return {
        authorizedPubkey: new j(r),
        epochOfLastAuthorizedSwitch: e,
        targetEpoch: t
    }
}

function Sw({
    buf: r,
    idx: e,
    isEmpty: t
}) {
    return t ? [] : [...r.slice(e + 1).map(iu), ...r.slice(0, e).map(iu)]
}
const ou = {
    http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/"
    },
    https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/"
    }
};

function Iw(r, e) {
    const t = e === !1 ? "http" : "https";
    if (!r) return ou[t].devnet;
    const n = ou[t][r];
    if (!n) throw new Error(`Unknown ${t} cluster: ${r}`);
    return n
}
async function xw(r, e, t, n) {
    let i, o;
    t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (i = t, o = n) : o = t;
    const s = o && {
            skipPreflight: o.skipPreflight,
            preflightCommitment: o.preflightCommitment || o.commitment,
            minContextSlot: o.minContextSlot
        },
        a = await r.sendRawTransaction(e, s),
        u = o && o.commitment,
        l = (await (i ? r.confirmTransaction(i, u) : r.confirmTransaction(a, u))).value;
    if (l.err) throw a != null ? new Yn({
        action: s != null && s.skipPreflight ? "send" : "simulate",
        signature: a,
        transactionMessage: `Status: (${JSON.stringify(l)})`
    }) : new Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);
    return a
}
const Tw = 1e9,
    Ow = Object.freeze(Object.defineProperty({
        __proto__: null,
        Account: _g,
        AddressLookupTableAccount: Xs,
        AddressLookupTableInstruction: hw,
        AddressLookupTableProgram: ja,
        Authorized: Hd,
        BLOCKHASH_CACHE_TIMEOUT_MS: xd,
        BPF_LOADER_DEPRECATED_PROGRAM_ID: Eg,
        BPF_LOADER_PROGRAM_ID: Fg,
        BpfLoader: Hg,
        COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: yn,
        ComputeBudgetInstruction: pw,
        ComputeBudgetProgram: Za,
        Connection: ta,
        Ed25519Program: Lo,
        Enum: wg,
        EpochSchedule: Sd,
        FeeCalculatorLayout: Ad,
        Keypair: Br,
        LAMPORTS_PER_SOL: Tw,
        LOOKUP_TABLE_INSTRUCTION_LAYOUTS: Bn,
        Loader: fr,
        Lockup: Si,
        MAX_SEED_LENGTH: _d,
        Message: cn,
        MessageAccountKeys: wi,
        MessageV0: dr,
        NONCE_ACCOUNT_LENGTH: Ys,
        NonceAccount: Bo,
        PACKET_DATA_SIZE: Gn,
        PUBLIC_KEY_LENGTH: gn,
        PublicKey: j,
        SIGNATURE_LENGTH_IN_BYTES: gi,
        SOLANA_SCHEMA: li,
        STAKE_CONFIG_ID: Fd,
        STAKE_INSTRUCTION_LAYOUTS: At,
        SYSTEM_INSTRUCTION_LAYOUTS: De,
        SYSVAR_CLOCK_PUBKEY: fn,
        SYSVAR_EPOCH_SCHEDULE_PUBKEY: Ng,
        SYSVAR_INSTRUCTIONS_PUBKEY: Cg,
        SYSVAR_RECENT_BLOCKHASHES_PUBKEY: Zi,
        SYSVAR_RENT_PUBKEY: Hr,
        SYSVAR_REWARDS_PUBKEY: Bg,
        SYSVAR_SLOT_HASHES_PUBKEY: Mg,
        SYSVAR_SLOT_HISTORY_PUBKEY: Pg,
        SYSVAR_STAKE_HISTORY_PUBKEY: Yi,
        Secp256k1Program: Mr,
        SendTransactionError: Yn,
        SolanaJSONRPCError: le,
        SolanaJSONRPCErrorCode: Lg,
        StakeAuthorizationLayout: bw,
        StakeInstruction: ww,
        StakeProgram: Uo,
        Struct: Fa,
        SystemInstruction: Ug,
        SystemProgram: st,
        Transaction: Ee,
        TransactionExpiredBlockheightExceededError: Ha,
        TransactionExpiredNonceInvalidError: Or,
        TransactionExpiredTimeoutError: za,
        TransactionInstruction: Oe,
        TransactionMessage: $a,
        TransactionStatus: xn,
        VALIDATOR_INFO_KEY: Kd,
        VERSION_PREFIX_MASK: No,
        VOTE_PROGRAM_ID: Rw,
        ValidatorInfo: Ya,
        VersionedMessage: Ka,
        VersionedTransaction: Wa,
        VoteAccount: Xa,
        VoteAuthorizationLayout: Ew,
        VoteInit: zd,
        VoteInstruction: _w,
        VoteProgram: Yr,
        clusterApiUrl: Iw,
        sendAndConfirmRawTransaction: xw,
        sendAndConfirmTransaction: Zs
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var Ja = {
    exports: {}
};
const Nw = /[\p{Lu}]/u,
    Cw = /[\p{Ll}]/u,
    su = /^[\p{Lu}](?![\p{Lu}])/gu,
    $d = /([\p{Alpha}\p{N}_]|$)/u,
    Wd = /[_.\- ]+/,
    Bw = new RegExp("^" + Wd.source),
    au = new RegExp(Wd.source + $d.source, "gu"),
    cu = new RegExp("\\d+" + $d.source, "gu"),
    Mw = (r, e, t) => {
        let n = !1,
            i = !1,
            o = !1;
        for (let s = 0; s < r.length; s++) {
            const a = r[s];
            n && Nw.test(a) ? (r = r.slice(0, s) + "-" + r.slice(s), n = !1, o = i, i = !0, s++) : i && o && Cw.test(a) ? (r = r.slice(0, s - 1) + "-" + r.slice(s - 1), o = i, i = !1, n = !0) : (n = e(a) === a && t(a) !== a, o = i, i = t(a) === a && e(a) !== a)
        }
        return r
    },
    Pw = (r, e) => (su.lastIndex = 0, r.replace(su, t => e(t))),
    Lw = (r, e) => (au.lastIndex = 0, cu.lastIndex = 0, r.replace(au, (t, n) => e(n)).replace(cu, t => e(t))),
    qd = (r, e) => {
        if (!(typeof r == "string" || Array.isArray(r))) throw new TypeError("Expected the input to be `string | string[]`");
        if (e = {
                pascalCase: !1,
                preserveConsecutiveUppercase: !1,
                ...e
            }, Array.isArray(r) ? r = r.map(o => o.trim()).filter(o => o.length).join("-") : r = r.trim(), r.length === 0) return "";
        const t = e.locale === !1 ? o => o.toLowerCase() : o => o.toLocaleLowerCase(e.locale),
            n = e.locale === !1 ? o => o.toUpperCase() : o => o.toLocaleUpperCase(e.locale);
        return r.length === 1 ? e.pascalCase ? n(r) : t(r) : (r !== t(r) && (r = Mw(r, t, n)), r = r.replace(Bw, ""), e.preserveConsecutiveUppercase ? r = Pw(r, t) : r = t(r), e.pascalCase && (r = n(r.charAt(0)) + r.slice(1)), Lw(r, n))
    };
Ja.exports = qd;
Ja.exports.default = qd;
var Uw = Ja.exports;
const Dw = $r(Uw);
var me = {},
    oe = {};
let Me = class {
    constructor(e, t) {
        if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
        this.span = e, this.property = t
    }
    makeDestinationObject() {
        return {}
    }
    decode(e, t) {
        throw new Error("Layout is abstract")
    }
    encode(e, t, n) {
        throw new Error("Layout is abstract")
    }
    getSpan(e, t) {
        if (0 > this.span) throw new RangeError("indeterminate span");
        return this.span
    }
    replicate(e) {
        const t = Object.create(this.constructor.prototype);
        return Object.assign(t, this), t.property = e, t
    }
    fromArray(e) {}
};
oe.Layout = Me;

function Qa(r, e) {
    return e.property ? r + "[" + e.property + "]" : r
}
oe.nameWithProperty = Qa;

function Fw(r, e) {
    if (typeof r != "function") throw new TypeError("Class must be constructor");
    if (r.hasOwnProperty("layout_")) throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof Me)) throw new TypeError("layout must be a Layout");
    if (e.hasOwnProperty("boundConstructor_")) throw new Error("layout is already bound to a constructor");
    r.layout_ = e, e.boundConstructor_ = r, e.makeDestinationObject = () => new r, Object.defineProperty(r.prototype, "encode", {
        value: function (t, n) {
            return e.encode(this, t, n)
        },
        writable: !0
    }), Object.defineProperty(r, "decode", {
        value: function (t, n) {
            return e.decode(t, n)
        },
        writable: !0
    })
}
oe.bindConstructorLayout = Fw;
let zt = class extends Me {
    isCount() {
        throw new Error("ExternalLayout is abstract")
    }
};
class Vd extends zt {
    constructor(e, t) {
        if (e === void 0 && (e = 1), !Number.isInteger(e) || 0 >= e) throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, t), this.elementSpan = e
    }
    isCount() {
        return !0
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.length - t;
        return Math.floor(n / this.elementSpan)
    }
    encode(e, t, n) {
        return 0
    }
}
let ec = class extends zt {
        constructor(e, t, n) {
            if (!(e instanceof Me)) throw new TypeError("layout must be a Layout");
            if (t === void 0) t = 0;
            else if (!Number.isInteger(t)) throw new TypeError("offset must be integer or undefined");
            super(e.span, n || e.property), this.layout = e, this.offset = t
        }
        isCount() {
            return this.layout instanceof vn || this.layout instanceof Un
        }
        decode(e, t) {
            return t === void 0 && (t = 0), this.layout.decode(e, t + this.offset)
        }
        encode(e, t, n) {
            return n === void 0 && (n = 0), this.layout.encode(e, t, n + this.offset)
        }
    },
    vn = class extends Me {
        constructor(e, t) {
            if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t) {
            return t === void 0 && (t = 0), e.readUIntLE(t, this.span)
        }
        encode(e, t, n) {
            return n === void 0 && (n = 0), t.writeUIntLE(e, n, this.span), this.span
        }
    },
    Un = class extends Me {
        constructor(e, t) {
            if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t) {
            return t === void 0 && (t = 0), e.readUIntBE(t, this.span)
        }
        encode(e, t, n) {
            return n === void 0 && (n = 0), t.writeUIntBE(e, n, this.span), this.span
        }
    };
class wr extends Me {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readIntLE(t, this.span)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeIntLE(e, n, this.span), this.span
    }
}
class Xr extends Me {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readIntBE(t, this.span)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeIntBE(e, n, this.span), this.span
    }
}
const na = Math.pow(2, 32);

function Do(r) {
    const e = Math.floor(r / na),
        t = r - e * na;
    return {
        hi32: e,
        lo32: t
    }
}

function Fo(r, e) {
    return r * na + e
}
let Hw = class extends Me {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.readUInt32LE(t),
            i = e.readUInt32LE(t + 4);
        return Fo(i, n)
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = Do(e);
        return t.writeUInt32LE(i.lo32, n), t.writeUInt32LE(i.hi32, n + 4), 8
    }
};
class zw extends Me {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.readUInt32BE(t),
            i = e.readUInt32BE(t + 4);
        return Fo(n, i)
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = Do(e);
        return t.writeUInt32BE(i.hi32, n), t.writeUInt32BE(i.lo32, n + 4), 8
    }
}
let Kw = class extends Me {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.readUInt32LE(t),
            i = e.readInt32LE(t + 4);
        return Fo(i, n)
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = Do(e);
        return t.writeUInt32LE(i.lo32, n), t.writeInt32LE(i.hi32, n + 4), 8
    }
};
class $w extends Me {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.readInt32BE(t),
            i = e.readUInt32BE(t + 4);
        return Fo(n, i)
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = Do(e);
        return t.writeInt32BE(i.hi32, n), t.writeUInt32BE(i.lo32, n + 4), 8
    }
}
class Gd extends Me {
    constructor(e) {
        super(4, e)
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readFloatLE(t)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeFloatLE(e, n), 4
    }
}
class jd extends Me {
    constructor(e) {
        super(4, e)
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readFloatBE(t)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeFloatBE(e, n), 4
    }
}
class Zd extends Me {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readDoubleLE(t)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeDoubleLE(e, n), 8
    }
}
class Yd extends Me {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readDoubleBE(t)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeDoubleBE(e, n), 8
    }
}
class Xd extends Me {
    constructor(e, t, n) {
        if (!(e instanceof Me)) throw new TypeError("elementLayout must be a Layout");
        if (!(t instanceof zt && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        let i = -1;
        !(t instanceof zt) && 0 < e.span && (i = t * e.span), super(i, n), this.elementLayout = e, this.count = t
    }
    getSpan(e, t) {
        if (0 <= this.span) return this.span;
        t === void 0 && (t = 0);
        let n = 0,
            i = this.count;
        if (i instanceof zt && (i = i.decode(e, t)), 0 < this.elementLayout.span) n = i * this.elementLayout.span;
        else {
            let o = 0;
            for (; o < i;) n += this.elementLayout.getSpan(e, t + n), ++o
        }
        return n
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = [];
        let i = 0,
            o = this.count;
        for (o instanceof zt && (o = o.decode(e, t)); i < o;) n.push(this.elementLayout.decode(e, t)), t += this.elementLayout.getSpan(e, t), i += 1;
        return n
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = this.elementLayout,
            o = e.reduce((s, a) => s + i.encode(a, t, n + s), 0);
        return this.count instanceof zt && this.count.encode(e.length, t, n), o
    }
}
let Jd = class extends Me {
        constructor(e, t, n) {
            if (!(Array.isArray(e) && e.reduce((o, s) => o && s instanceof Me, !0))) throw new TypeError("fields must be array of Layout instances");
            typeof t == "boolean" && n === void 0 && (n = t, t = void 0);
            for (const o of e)
                if (0 > o.span && o.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
            let i = -1;
            try {
                i = e.reduce((o, s) => o + s.getSpan(), 0)
            } catch {}
            super(i, t), this.fields = e, this.decodePrefixes = !!n
        }
        getSpan(e, t) {
            if (0 <= this.span) return this.span;
            t === void 0 && (t = 0);
            let n = 0;
            try {
                n = this.fields.reduce((i, o) => {
                    const s = o.getSpan(e, t);
                    return t += s, i + s
                }, 0)
            } catch {
                throw new RangeError("indeterminate span")
            }
            return n
        }
        decode(e, t) {
            t === void 0 && (t = 0);
            const n = this.makeDestinationObject();
            for (const i of this.fields)
                if (i.property !== void 0 && (n[i.property] = i.decode(e, t)), t += i.getSpan(e, t), this.decodePrefixes && e.length === t) break;
            return n
        }
        encode(e, t, n) {
            n === void 0 && (n = 0);
            const i = n;
            let o = 0,
                s = 0;
            for (const a of this.fields) {
                let u = a.span;
                if (s = 0 < u ? u : 0, a.property !== void 0) {
                    const d = e[a.property];
                    d !== void 0 && (s = a.encode(d, t, n), 0 > u && (u = a.getSpan(t, n)))
                }
                o = n, n += u
            }
            return o + s - i
        }
        fromArray(e) {
            const t = this.makeDestinationObject();
            for (const n of this.fields) n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
            return t
        }
        layoutFor(e) {
            if (typeof e != "string") throw new TypeError("property must be string");
            for (const t of this.fields)
                if (t.property === e) return t
        }
        offsetOf(e) {
            if (typeof e != "string") throw new TypeError("property must be string");
            let t = 0;
            for (const n of this.fields) {
                if (n.property === e) return t;
                0 > n.span ? t = -1 : 0 <= t && (t += n.span)
            }
        }
    },
    tc = class {
        constructor(e) {
            this.property = e
        }
        decode() {
            throw new Error("UnionDiscriminator is abstract")
        }
        encode() {
            throw new Error("UnionDiscriminator is abstract")
        }
    },
    ho = class extends tc {
        constructor(e, t) {
            if (!(e instanceof zt && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
            super(t || e.property || "variant"), this.layout = e
        }
        decode(e, t) {
            return this.layout.decode(e, t)
        }
        encode(e, t, n) {
            return this.layout.encode(e, t, n)
        }
    },
    nc = class extends Me {
        constructor(e, t, n) {
            const i = e instanceof vn || e instanceof Un;
            if (i) e = new ho(new ec(e));
            else if (e instanceof zt && e.isCount()) e = new ho(e);
            else if (!(e instanceof tc)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
            if (t === void 0 && (t = null), !(t === null || t instanceof Me)) throw new TypeError("defaultLayout must be null or a Layout");
            if (t !== null) {
                if (0 > t.span) throw new Error("defaultLayout must have constant span");
                t.property === void 0 && (t = t.replicate("content"))
            }
            let o = -1;
            t && (o = t.span, 0 <= o && i && (o += e.layout.span)), super(o, n), this.discriminator = e, this.usesPrefixDiscriminator = i, this.defaultLayout = t, this.registry = {};
            let s = this.defaultGetSourceVariant.bind(this);
            this.getSourceVariant = function (a) {
                return s(a)
            }, this.configGetSourceVariant = function (a) {
                s = a.bind(this)
            }
        }
        getSpan(e, t) {
            if (0 <= this.span) return this.span;
            t === void 0 && (t = 0);
            const n = this.getVariant(e, t);
            if (!n) throw new Error("unable to determine span for unrecognized variant");
            return n.getSpan(e, t)
        }
        defaultGetSourceVariant(e) {
            if (e.hasOwnProperty(this.discriminator.property)) {
                if (this.defaultLayout && e.hasOwnProperty(this.defaultLayout.property)) return;
                const t = this.registry[e[this.discriminator.property]];
                if (t && (!t.layout || e.hasOwnProperty(t.property))) return t
            } else
                for (const t in this.registry) {
                    const n = this.registry[t];
                    if (e.hasOwnProperty(n.property)) return n
                }
            throw new Error("unable to infer src variant")
        }
        decode(e, t) {
            t === void 0 && (t = 0);
            let n;
            const i = this.discriminator,
                o = i.decode(e, t);
            let s = this.registry[o];
            if (s === void 0) {
                let a = 0;
                s = this.defaultLayout, this.usesPrefixDiscriminator && (a = i.layout.span), n = this.makeDestinationObject(), n[i.property] = o, n[s.property] = this.defaultLayout.decode(e, t + a)
            } else n = s.decode(e, t);
            return n
        }
        encode(e, t, n) {
            n === void 0 && (n = 0);
            const i = this.getSourceVariant(e);
            if (i === void 0) {
                const o = this.discriminator,
                    s = this.defaultLayout;
                let a = 0;
                return this.usesPrefixDiscriminator && (a = o.layout.span), o.encode(e[o.property], t, n), a + s.encode(e[s.property], t, n + a)
            }
            return i.encode(e, t, n)
        }
        addVariant(e, t, n) {
            const i = new Qd(this, e, t, n);
            return this.registry[e] = i, i
        }
        getVariant(e, t) {
            let n = e;
            return he.isBuffer(e) && (t === void 0 && (t = 0), n = this.discriminator.decode(e, t)), this.registry[n]
        }
    },
    Qd = class extends Me {
        constructor(e, t, n, i) {
            if (!(e instanceof nc)) throw new TypeError("union must be a Union");
            if (!Number.isInteger(t) || 0 > t) throw new TypeError("variant must be a (non-negative) integer");
            if (typeof n == "string" && i === void 0 && (i = n, n = null), n) {
                if (!(n instanceof Me)) throw new TypeError("layout must be a Layout");
                if (e.defaultLayout !== null && 0 <= n.span && n.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                if (typeof i != "string") throw new TypeError("variant must have a String property")
            }
            let o = e.span;
            0 > e.span && (o = n ? n.span : 0, 0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)), super(o, i), this.union = e, this.variant = t, this.layout = n || null
        }
        getSpan(e, t) {
            if (0 <= this.span) return this.span;
            t === void 0 && (t = 0);
            let n = 0;
            return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), n + this.layout.getSpan(e, t + n)
        }
        decode(e, t) {
            const n = this.makeDestinationObject();
            if (t === void 0 && (t = 0), this !== this.union.getVariant(e, t)) throw new Error("variant mismatch");
            let i = 0;
            return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(e, t + i) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n
        }
        encode(e, t, n) {
            n === void 0 && (n = 0);
            let i = 0;
            if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout && !e.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, t, n);
            let o = i;
            if (this.layout && (this.layout.encode(e[this.property], t, n + i), o += this.layout.getSpan(t, n + i), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
            return o
        }
        fromArray(e) {
            if (this.layout) return this.layout.fromArray(e)
        }
    };

function xr(r) {
    return 0 > r && (r += 4294967296), r
}
class rc extends Me {
    constructor(e, t, n) {
        if (!(e instanceof vn || e instanceof Un)) throw new TypeError("word must be a UInt or UIntBE layout");
        if (typeof t == "string" && n === void 0 && (n = t, t = void 0), 4 < e.span) throw new RangeError("word cannot exceed 32 bits");
        super(e.span, n), this.word = e, this.msb = !!t, this.fields = [];
        let i = 0;
        this._packedSetValue = function (o) {
            return i = xr(o), this
        }, this._packedGetValue = function () {
            return i
        }
    }
    decode(e, t) {
        const n = this.makeDestinationObject();
        t === void 0 && (t = 0);
        const i = this.word.decode(e, t);
        this._packedSetValue(i);
        for (const o of this.fields) o.property !== void 0 && (n[o.property] = o.decode(i));
        return n
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = this.word.decode(t, n);
        this._packedSetValue(i);
        for (const o of this.fields)
            if (o.property !== void 0) {
                const s = e[o.property];
                s !== void 0 && o.encode(s)
            } return this.word.encode(this._packedGetValue(), t, n)
    }
    addField(e, t) {
        const n = new di(this, e, t);
        return this.fields.push(n), n
    }
    addBoolean(e) {
        const t = new ef(this, e);
        return this.fields.push(t), t
    }
    fieldFor(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        for (const t of this.fields)
            if (t.property === e) return t
    }
}
class di {
    constructor(e, t, n) {
        if (!(e instanceof rc)) throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(t) || 0 >= t) throw new TypeError("bits must be positive integer");
        const i = 8 * e.span,
            o = e.fields.reduce((s, a) => s + a.bits, 0);
        if (t + o > i) throw new Error("bits too long for span remainder (" + (i - o) + " of " + i + " remain)");
        this.container = e, this.bits = t, this.valueMask = (1 << t) - 1, t === 32 && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = i - o - t), this.wordMask = xr(this.valueMask << this.start), this.property = n
    }
    decode() {
        const e = this.container._packedGetValue();
        return xr(e & this.wordMask) >>> this.start
    }
    encode(e) {
        if (!Number.isInteger(e) || e !== xr(e & this.valueMask)) throw new TypeError(Qa("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const t = this.container._packedGetValue(),
            n = xr(e << this.start);
        this.container._packedSetValue(xr(t & ~this.wordMask) | n)
    }
}
let ef = class extends di {
        constructor(e, t) {
            super(e, 1, t)
        }
        decode(e, t) {
            return !!di.prototype.decode.call(this, e, t)
        }
        encode(e) {
            return typeof e == "boolean" && (e = +e), di.prototype.encode.call(this, e)
        }
    },
    tf = class extends Me {
        constructor(e, t) {
            if (!(e instanceof zt && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
            let n = -1;
            e instanceof zt || (n = e), super(n, t), this.length = e
        }
        getSpan(e, t) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(e, t)), n
        }
        decode(e, t) {
            t === void 0 && (t = 0);
            let n = this.span;
            return 0 > n && (n = this.length.decode(e, t)), e.slice(t, t + n)
        }
        encode(e, t, n) {
            let i = this.length;
            if (this.length instanceof zt && (i = e.length), !(he.isBuffer(e) && i === e.length)) throw new TypeError(Qa("Blob.encode", this) + " requires (length " + i + ") Buffer as src");
            if (n + i > t.length) throw new RangeError("encoding overruns Buffer");
            return t.write(e.toString("hex"), n, i, "hex"), this.length instanceof zt && this.length.encode(i, t, n), i
        }
    };
class nf extends Me {
    constructor(e) {
        super(-1, e)
    }
    getSpan(e, t) {
        if (!he.isBuffer(e)) throw new TypeError("b must be a Buffer");
        t === void 0 && (t = 0);
        let n = t;
        for (; n < e.length && e[n] !== 0;) n += 1;
        return 1 + n - t
    }
    decode(e, t, n) {
        t === void 0 && (t = 0);
        let i = this.getSpan(e, t);
        return e.slice(t, t + i - 1).toString("utf-8")
    }
    encode(e, t, n) {
        n === void 0 && (n = 0), typeof e != "string" && (e = e.toString());
        const i = new he(e, "utf8"),
            o = i.length;
        if (n + o > t.length) throw new RangeError("encoding overruns Buffer");
        return i.copy(t, n), t[n + o] = 0, o + 1
    }
}
class rf extends Me {
    constructor(e, t) {
        if (typeof e == "string" && t === void 0 && (t = e, e = void 0), e === void 0) e = -1;
        else if (!Number.isInteger(e)) throw new TypeError("maxSpan must be an integer");
        super(-1, t), this.maxSpan = e
    }
    getSpan(e, t) {
        if (!he.isBuffer(e)) throw new TypeError("b must be a Buffer");
        return t === void 0 && (t = 0), e.length - t
    }
    decode(e, t, n) {
        t === void 0 && (t = 0);
        let i = this.getSpan(e, t);
        if (0 <= this.maxSpan && this.maxSpan < i) throw new RangeError("text length exceeds maxSpan");
        return e.slice(t, t + i).toString("utf-8")
    }
    encode(e, t, n) {
        n === void 0 && (n = 0), typeof e != "string" && (e = e.toString());
        const i = new he(e, "utf8"),
            o = i.length;
        if (0 <= this.maxSpan && this.maxSpan < o) throw new RangeError("text length exceeds maxSpan");
        if (n + o > t.length) throw new RangeError("encoding overruns Buffer");
        return i.copy(t, n), o
    }
}
class of extends Me {
    constructor(e, t) {
        super(0, t), this.value = e
    }
    decode(e, t, n) {
        return this.value
    }
    encode(e, t, n) {
        return 0
    }
}
oe.ExternalLayout = zt;
oe.GreedyCount = Vd;
oe.OffsetLayout = ec;
oe.UInt = vn;
oe.UIntBE = Un;
oe.Int = wr;
oe.IntBE = Xr;
oe.Float = Gd;
oe.FloatBE = jd;
oe.Double = Zd;
oe.DoubleBE = Yd;
oe.Sequence = Xd;
oe.Structure = Jd;
oe.UnionDiscriminator = tc;
oe.UnionLayoutDiscriminator = ho;
oe.Union = nc;
oe.VariantLayout = Qd;
oe.BitStructure = rc;
oe.BitField = di;
oe.Boolean = ef;
oe.Blob = tf;
oe.CString = nf;
oe.UTF8 = rf;
oe.Constant = of;
oe.greedy = (r, e) => new Vd(r, e);
oe.offset = (r, e, t) => new ec(r, e, t);
oe.u8 = r => new vn(1, r);
oe.u16 = r => new vn(2, r);
oe.u24 = r => new vn(3, r);
oe.u32 = r => new vn(4, r);
oe.u40 = r => new vn(5, r);
oe.u48 = r => new vn(6, r);
oe.nu64 = r => new Hw(r);
oe.u16be = r => new Un(2, r);
oe.u24be = r => new Un(3, r);
oe.u32be = r => new Un(4, r);
oe.u40be = r => new Un(5, r);
oe.u48be = r => new Un(6, r);
oe.nu64be = r => new zw(r);
oe.s8 = r => new wr(1, r);
oe.s16 = r => new wr(2, r);
oe.s24 = r => new wr(3, r);
oe.s32 = r => new wr(4, r);
oe.s40 = r => new wr(5, r);
oe.s48 = r => new wr(6, r);
oe.ns64 = r => new Kw(r);
oe.s16be = r => new Xr(2, r);
oe.s24be = r => new Xr(3, r);
oe.s32be = r => new Xr(4, r);
oe.s40be = r => new Xr(5, r);
oe.s48be = r => new Xr(6, r);
oe.ns64be = r => new $w(r);
oe.f32 = r => new Gd(r);
oe.f32be = r => new jd(r);
oe.f64 = r => new Zd(r);
oe.f64be = r => new Yd(r);
oe.struct = (r, e, t) => new Jd(r, e, t);
oe.bits = (r, e, t) => new rc(r, e, t);
oe.seq = (r, e, t) => new Xd(r, e, t);
oe.union = (r, e, t) => new nc(r, e, t);
oe.unionLayoutDiscriminator = (r, e) => new ho(r, e);
oe.blob = (r, e) => new tf(r, e);
oe.cstr = r => new nf(r);
oe.utf8 = (r, e) => new rf(r, e);
oe.const = (r, e) => new of(r, e);
const Ww = wo(Ow);
(function (r) {
    var e = jt && jt.__importDefault || function (D) {
        return D && D.__esModule ? D : {
            default: D
        }
    };
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.struct = r.f64 = r.f32 = r.i32 = r.u32 = r.i16 = r.u16 = r.i8 = r.u8 = void 0, r.u64 = a, r.i64 = u, r.u128 = d, r.i128 = l, r.u256 = b, r.i256 = S, r.publicKey = v, r.option = R, r.bool = N, r.vec = K, r.tagged = U, r.vecU8 = Y, r.str = G, r.rustEnum = Z, r.array = L, r.map = M;
    const t = oe,
        n = Ww,
        i = e(Ra);
    var o = oe;
    Object.defineProperty(r, "u8", {
        enumerable: !0,
        get: function () {
            return o.u8
        }
    }), Object.defineProperty(r, "i8", {
        enumerable: !0,
        get: function () {
            return o.s8
        }
    }), Object.defineProperty(r, "u16", {
        enumerable: !0,
        get: function () {
            return o.u16
        }
    }), Object.defineProperty(r, "i16", {
        enumerable: !0,
        get: function () {
            return o.s16
        }
    }), Object.defineProperty(r, "u32", {
        enumerable: !0,
        get: function () {
            return o.u32
        }
    }), Object.defineProperty(r, "i32", {
        enumerable: !0,
        get: function () {
            return o.s32
        }
    }), Object.defineProperty(r, "f32", {
        enumerable: !0,
        get: function () {
            return o.f32
        }
    }), Object.defineProperty(r, "f64", {
        enumerable: !0,
        get: function () {
            return o.f64
        }
    }), Object.defineProperty(r, "struct", {
        enumerable: !0,
        get: function () {
            return o.struct
        }
    });
    class s extends t.Layout {
        constructor(w, c, f) {
            super(w, f), this.blob = (0, t.blob)(w), this.signed = c
        }
        decode(w, c = 0) {
            const f = new i.default(this.blob.decode(w, c), 10, "le");
            return this.signed ? f.fromTwos(this.span * 8).clone() : f
        }
        encode(w, c, f = 0) {
            return this.signed && (w = w.toTwos(this.span * 8)), this.blob.encode(w.toArrayLike(he, "le", this.span), c, f)
        }
    }

    function a(D) {
        return new s(8, !1, D)
    }

    function u(D) {
        return new s(8, !0, D)
    }

    function d(D) {
        return new s(16, !1, D)
    }

    function l(D) {
        return new s(16, !0, D)
    }

    function b(D) {
        return new s(32, !1, D)
    }

    function S(D) {
        return new s(32, !0, D)
    }
    class m extends t.Layout {
        constructor(w, c, f, g) {
            super(w.span, g), this.layout = w, this.decoder = c, this.encoder = f
        }
        decode(w, c) {
            return this.decoder(this.layout.decode(w, c))
        }
        encode(w, c, f) {
            return this.layout.encode(this.encoder(w), c, f)
        }
        getSpan(w, c) {
            return this.layout.getSpan(w, c)
        }
    }

    function v(D) {
        return new m((0, t.blob)(32), w => new n.PublicKey(w), w => w.toBuffer(), D)
    }
    class T extends t.Layout {
        constructor(w, c) {
            super(-1, c), this.layout = w, this.discriminator = (0, t.u8)()
        }
        encode(w, c, f = 0) {
            return w == null ? this.discriminator.encode(0, c, f) : (this.discriminator.encode(1, c, f), this.layout.encode(w, c, f + 1) + 1)
        }
        decode(w, c = 0) {
            const f = this.discriminator.decode(w, c);
            if (f === 0) return null;
            if (f === 1) return this.layout.decode(w, c + 1);
            throw new Error("Invalid option " + this.property)
        }
        getSpan(w, c = 0) {
            const f = this.discriminator.decode(w, c);
            if (f === 0) return 1;
            if (f === 1) return this.layout.getSpan(w, c + 1) + 1;
            throw new Error("Invalid option " + this.property)
        }
    }

    function R(D, w) {
        return new T(D, w)
    }

    function N(D) {
        return new m((0, t.u8)(), $, P, D)
    }

    function $(D) {
        if (D === 0) return !1;
        if (D === 1) return !0;
        throw new Error("Invalid bool: " + D)
    }

    function P(D) {
        return D ? 1 : 0
    }

    function K(D, w) {
        const c = (0, t.u32)("length"),
            f = (0, t.struct)([c, (0, t.seq)(D, (0, t.offset)(c, -c.span), "values")]);
        return new m(f, ({
            values: g
        }) => g, g => ({
            values: g
        }), w)
    }

    function U(D, w, c) {
        const f = (0, t.struct)([a("tag"), w.replicate("data")]);

        function g({
            tag: E,
            data: k
        }) {
            if (!E.eq(D)) throw new Error("Invalid tag, expected: " + D.toString("hex") + ", got: " + E.toString("hex"));
            return k
        }
        return new m(f, g, E => ({
            tag: D,
            data: E
        }), c)
    }

    function Y(D) {
        const w = (0, t.u32)("length"),
            c = (0, t.struct)([w, (0, t.blob)((0, t.offset)(w, -w.span), "data")]);
        return new m(c, ({
            data: f
        }) => f, f => ({
            data: f
        }), D)
    }

    function G(D) {
        return new m(Y(), w => w.toString("utf-8"), w => he.from(w, "utf-8"), D)
    }

    function Z(D, w, c) {
        const f = (0, t.union)(c ?? (0, t.u8)(), w);
        return D.forEach((g, E) => f.addVariant(E, g, g.property)), f
    }

    function L(D, w, c) {
        const f = (0, t.struct)([(0, t.seq)(D, w, "values")]);
        return new m(f, ({
            values: g
        }) => g, g => ({
            values: g
        }), c)
    }
    class q extends t.Layout {
        constructor(w, c, f) {
            super(w.span + c.span, f), this.keyLayout = w, this.valueLayout = c
        }
        decode(w, c) {
            c = c || 0;
            const f = this.keyLayout.decode(w, c),
                g = this.valueLayout.decode(w, c + this.keyLayout.getSpan(w, c));
            return [f, g]
        }
        encode(w, c, f) {
            f = f || 0;
            const g = this.keyLayout.encode(w[0], c, f),
                E = this.valueLayout.encode(w[1], c, f + g);
            return g + E
        }
        getSpan(w, c) {
            return this.keyLayout.getSpan(w, c) + this.valueLayout.getSpan(w, c)
        }
    }

    function M(D, w, c) {
        const f = (0, t.u32)("length"),
            g = (0, t.struct)([f, (0, t.seq)(new q(D, w), (0, t.offset)(f, -f.span), "values")]);
        return new m(g, ({
            values: E
        }) => new Map(E), E => ({
            values: Array.from(E.entries())
        }), c)
    }
})(me);

function Jr(r) {
    let e = r.length;
    for (; --e >= 0;) r[e] = 0
}
const qw = 3,
    Vw = 258,
    sf = 29,
    Gw = 256,
    jw = Gw + 1 + sf,
    af = 30,
    Zw = 512,
    Yw = new Array((jw + 2) * 2);
Jr(Yw);
const Xw = new Array(af * 2);
Jr(Xw);
const Jw = new Array(Zw);
Jr(Jw);
const Qw = new Array(Vw - qw + 1);
Jr(Qw);
const eb = new Array(sf);
Jr(eb);
const tb = new Array(af);
Jr(tb);
const nb = (r, e, t, n) => {
    let i = r & 65535 | 0,
        o = r >>> 16 & 65535 | 0,
        s = 0;
    for (; t !== 0;) {
        s = t > 2e3 ? 2e3 : t, t -= s;
        do i = i + e[n++] | 0, o = o + i | 0; while (--s);
        i %= 65521, o %= 65521
    }
    return i | o << 16 | 0
};
var ra = nb;
const rb = () => {
        let r, e = [];
        for (var t = 0; t < 256; t++) {
            r = t;
            for (var n = 0; n < 8; n++) r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
            e[t] = r
        }
        return e
    },
    ib = new Uint32Array(rb()),
    ob = (r, e, t, n) => {
        const i = ib,
            o = n + t;
        r ^= -1;
        for (let s = n; s < o; s++) r = r >>> 8 ^ i[(r ^ e[s]) & 255];
        return r ^ -1
    };
var ln = ob,
    ia = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    },
    cf = {
        Z_NO_FLUSH: 0,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_DEFLATED: 8
    };
const sb = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
var ab = function (r) {
        const e = Array.prototype.slice.call(arguments, 1);
        for (; e.length;) {
            const t = e.shift();
            if (t) {
                if (typeof t != "object") throw new TypeError(t + "must be non-object");
                for (const n in t) sb(t, n) && (r[n] = t[n])
            }
        }
        return r
    },
    cb = r => {
        let e = 0;
        for (let n = 0, i = r.length; n < i; n++) e += r[n].length;
        const t = new Uint8Array(e);
        for (let n = 0, i = 0, o = r.length; n < o; n++) {
            let s = r[n];
            t.set(s, i), i += s.length
        }
        return t
    },
    uf = {
        assign: ab,
        flattenChunks: cb
    };
let lf = !0;
try {
    String.fromCharCode.apply(null, new Uint8Array(1))
} catch {
    lf = !1
}
const _i = new Uint8Array(256);
for (let r = 0; r < 256; r++) _i[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
_i[254] = _i[254] = 1;
var ub = r => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(r);
    let e, t, n, i, o, s = r.length,
        a = 0;
    for (i = 0; i < s; i++) t = r.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = r.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
    for (e = new Uint8Array(a), o = 0, i = 0; o < a; i++) t = r.charCodeAt(i), (t & 64512) === 55296 && i + 1 < s && (n = r.charCodeAt(i + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), i++)), t < 128 ? e[o++] = t : t < 2048 ? (e[o++] = 192 | t >>> 6, e[o++] = 128 | t & 63) : t < 65536 ? (e[o++] = 224 | t >>> 12, e[o++] = 128 | t >>> 6 & 63, e[o++] = 128 | t & 63) : (e[o++] = 240 | t >>> 18, e[o++] = 128 | t >>> 12 & 63, e[o++] = 128 | t >>> 6 & 63, e[o++] = 128 | t & 63);
    return e
};
const lb = (r, e) => {
    if (e < 65534 && r.subarray && lf) return String.fromCharCode.apply(null, r.length === e ? r : r.subarray(0, e));
    let t = "";
    for (let n = 0; n < e; n++) t += String.fromCharCode(r[n]);
    return t
};
var db = (r, e) => {
        const t = e || r.length;
        if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(r.subarray(0, e));
        let n, i;
        const o = new Array(t * 2);
        for (i = 0, n = 0; n < t;) {
            let s = r[n++];
            if (s < 128) {
                o[i++] = s;
                continue
            }
            let a = _i[s];
            if (a > 4) {
                o[i++] = 65533, n += a - 1;
                continue
            }
            for (s &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < t;) s = s << 6 | r[n++] & 63, a--;
            if (a > 1) {
                o[i++] = 65533;
                continue
            }
            s < 65536 ? o[i++] = s : (s -= 65536, o[i++] = 55296 | s >> 10 & 1023, o[i++] = 56320 | s & 1023)
        }
        return lb(o, i)
    },
    fb = (r, e) => {
        e = e || r.length, e > r.length && (e = r.length);
        let t = e - 1;
        for (; t >= 0 && (r[t] & 192) === 128;) t--;
        return t < 0 || t === 0 ? e : t + _i[r[t]] > e ? t : e
    },
    oa = {
        string2buf: ub,
        buf2string: db,
        utf8border: fb
    };

function hb() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
}
var pb = hb;
const $i = 16209,
    yb = 16191;
var mb = function (e, t) {
    let n, i, o, s, a, u, d, l, b, S, m, v, T, R, N, $, P, K, U, Y, G, Z, L, q;
    const M = e.state;
    n = e.next_in, L = e.input, i = n + (e.avail_in - 5), o = e.next_out, q = e.output, s = o - (t - e.avail_out), a = o + (e.avail_out - 257), u = M.dmax, d = M.wsize, l = M.whave, b = M.wnext, S = M.window, m = M.hold, v = M.bits, T = M.lencode, R = M.distcode, N = (1 << M.lenbits) - 1, $ = (1 << M.distbits) - 1;
    e: do {
        v < 15 && (m += L[n++] << v, v += 8, m += L[n++] << v, v += 8), P = T[m & N];
        t: for (;;) {
            if (K = P >>> 24, m >>>= K, v -= K, K = P >>> 16 & 255, K === 0) q[o++] = P & 65535;
            else if (K & 16) {
                U = P & 65535, K &= 15, K && (v < K && (m += L[n++] << v, v += 8), U += m & (1 << K) - 1, m >>>= K, v -= K), v < 15 && (m += L[n++] << v, v += 8, m += L[n++] << v, v += 8), P = R[m & $];
                n: for (;;) {
                    if (K = P >>> 24, m >>>= K, v -= K, K = P >>> 16 & 255, K & 16) {
                        if (Y = P & 65535, K &= 15, v < K && (m += L[n++] << v, v += 8, v < K && (m += L[n++] << v, v += 8)), Y += m & (1 << K) - 1, Y > u) {
                            e.msg = "invalid distance too far back", M.mode = $i;
                            break e
                        }
                        if (m >>>= K, v -= K, K = o - s, Y > K) {
                            if (K = Y - K, K > l && M.sane) {
                                e.msg = "invalid distance too far back", M.mode = $i;
                                break e
                            }
                            if (G = 0, Z = S, b === 0) {
                                if (G += d - K, K < U) {
                                    U -= K;
                                    do q[o++] = S[G++]; while (--K);
                                    G = o - Y, Z = q
                                }
                            } else if (b < K) {
                                if (G += d + b - K, K -= b, K < U) {
                                    U -= K;
                                    do q[o++] = S[G++]; while (--K);
                                    if (G = 0, b < U) {
                                        K = b, U -= K;
                                        do q[o++] = S[G++]; while (--K);
                                        G = o - Y, Z = q
                                    }
                                }
                            } else if (G += b - K, K < U) {
                                U -= K;
                                do q[o++] = S[G++]; while (--K);
                                G = o - Y, Z = q
                            }
                            for (; U > 2;) q[o++] = Z[G++], q[o++] = Z[G++], q[o++] = Z[G++], U -= 3;
                            U && (q[o++] = Z[G++], U > 1 && (q[o++] = Z[G++]))
                        } else {
                            G = o - Y;
                            do q[o++] = q[G++], q[o++] = q[G++], q[o++] = q[G++], U -= 3; while (U > 2);
                            U && (q[o++] = q[G++], U > 1 && (q[o++] = q[G++]))
                        }
                    } else if (K & 64) {
                        e.msg = "invalid distance code", M.mode = $i;
                        break e
                    } else {
                        P = R[(P & 65535) + (m & (1 << K) - 1)];
                        continue n
                    }
                    break
                }
            } else if (K & 64)
                if (K & 32) {
                    M.mode = yb;
                    break e
                } else {
                    e.msg = "invalid literal/length code", M.mode = $i;
                    break e
                }
            else {
                P = T[(P & 65535) + (m & (1 << K) - 1)];
                continue t
            }
            break
        }
    } while (n < i && o < a);
    U = v >> 3, n -= U, v -= U << 3, m &= (1 << v) - 1, e.next_in = n, e.next_out = o, e.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), e.avail_out = o < a ? 257 + (a - o) : 257 - (o - a), M.hold = m, M.bits = v
};
const kr = 15,
    uu = 852,
    lu = 592,
    du = 0,
    Cs = 1,
    fu = 2,
    gb = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
    wb = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
    bb = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
    _b = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]),
    Eb = (r, e, t, n, i, o, s, a) => {
        const u = a.bits;
        let d = 0,
            l = 0,
            b = 0,
            S = 0,
            m = 0,
            v = 0,
            T = 0,
            R = 0,
            N = 0,
            $ = 0,
            P, K, U, Y, G, Z = null,
            L;
        const q = new Uint16Array(kr + 1),
            M = new Uint16Array(kr + 1);
        let D = null,
            w, c, f;
        for (d = 0; d <= kr; d++) q[d] = 0;
        for (l = 0; l < n; l++) q[e[t + l]]++;
        for (m = u, S = kr; S >= 1 && q[S] === 0; S--);
        if (m > S && (m = S), S === 0) return i[o++] = 1 << 24 | 64 << 16 | 0, i[o++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
        for (b = 1; b < S && q[b] === 0; b++);
        for (m < b && (m = b), R = 1, d = 1; d <= kr; d++)
            if (R <<= 1, R -= q[d], R < 0) return -1;
        if (R > 0 && (r === du || S !== 1)) return -1;
        for (M[1] = 0, d = 1; d < kr; d++) M[d + 1] = M[d] + q[d];
        for (l = 0; l < n; l++) e[t + l] !== 0 && (s[M[e[t + l]]++] = l);
        if (r === du ? (Z = D = s, L = 20) : r === Cs ? (Z = gb, D = wb, L = 257) : (Z = bb, D = _b, L = 0), $ = 0, l = 0, d = b, G = o, v = m, T = 0, U = -1, N = 1 << m, Y = N - 1, r === Cs && N > uu || r === fu && N > lu) return 1;
        for (;;) {
            w = d - T, s[l] + 1 < L ? (c = 0, f = s[l]) : s[l] >= L ? (c = D[s[l] - L], f = Z[s[l] - L]) : (c = 96, f = 0), P = 1 << d - T, K = 1 << v, b = K;
            do K -= P, i[G + ($ >> T) + K] = w << 24 | c << 16 | f | 0; while (K !== 0);
            for (P = 1 << d - 1; $ & P;) P >>= 1;
            if (P !== 0 ? ($ &= P - 1, $ += P) : $ = 0, l++, --q[d] === 0) {
                if (d === S) break;
                d = e[t + s[l]]
            }
            if (d > m && ($ & Y) !== U) {
                for (T === 0 && (T = m), G += b, v = d - T, R = 1 << v; v + T < S && (R -= q[v + T], !(R <= 0));) v++, R <<= 1;
                if (N += 1 << v, r === Cs && N > uu || r === fu && N > lu) return 1;
                U = $ & Y, i[U] = m << 24 | v << 16 | G - o | 0
            }
        }
        return $ !== 0 && (i[G + $] = d - T << 24 | 64 << 16 | 0), a.bits = m, 0
    };
var fi = Eb;
const vb = 0,
    df = 1,
    ff = 2,
    {
        Z_FINISH: hu,
        Z_BLOCK: Rb,
        Z_TREES: Wi,
        Z_OK: hr,
        Z_STREAM_END: Ab,
        Z_NEED_DICT: kb,
        Z_STREAM_ERROR: nn,
        Z_DATA_ERROR: hf,
        Z_MEM_ERROR: pf,
        Z_BUF_ERROR: Sb,
        Z_DEFLATED: pu
    } = cf,
    Ho = 16180,
    yu = 16181,
    mu = 16182,
    gu = 16183,
    wu = 16184,
    bu = 16185,
    _u = 16186,
    Eu = 16187,
    vu = 16188,
    Ru = 16189,
    po = 16190,
    In = 16191,
    Bs = 16192,
    Au = 16193,
    Ms = 16194,
    ku = 16195,
    Su = 16196,
    Iu = 16197,
    xu = 16198,
    qi = 16199,
    Vi = 16200,
    Tu = 16201,
    Ou = 16202,
    Nu = 16203,
    Cu = 16204,
    Bu = 16205,
    Ps = 16206,
    Mu = 16207,
    Pu = 16208,
    qe = 16209,
    yf = 16210,
    mf = 16211,
    Ib = 852,
    xb = 592,
    Tb = 15,
    Ob = Tb,
    Lu = r => (r >>> 24 & 255) + (r >>> 8 & 65280) + ((r & 65280) << 8) + ((r & 255) << 24);

function Nb() {
    this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
}
const br = r => {
        if (!r) return 1;
        const e = r.state;
        return !e || e.strm !== r || e.mode < Ho || e.mode > mf ? 1 : 0
    },
    gf = r => {
        if (br(r)) return nn;
        const e = r.state;
        return r.total_in = r.total_out = e.total = 0, r.msg = "", e.wrap && (r.adler = e.wrap & 1), e.mode = Ho, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(Ib), e.distcode = e.distdyn = new Int32Array(xb), e.sane = 1, e.back = -1, hr
    },
    wf = r => {
        if (br(r)) return nn;
        const e = r.state;
        return e.wsize = 0, e.whave = 0, e.wnext = 0, gf(r)
    },
    bf = (r, e) => {
        let t;
        if (br(r)) return nn;
        const n = r.state;
        return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? nn : (n.window !== null && n.wbits !== e && (n.window = null), n.wrap = t, n.wbits = e, wf(r))
    },
    _f = (r, e) => {
        if (!r) return nn;
        const t = new Nb;
        r.state = t, t.strm = r, t.window = null, t.mode = Ho;
        const n = bf(r, e);
        return n !== hr && (r.state = null), n
    },
    Cb = r => _f(r, Ob);
let Uu = !0,
    Ls, Us;
const Bb = r => {
        if (Uu) {
            Ls = new Int32Array(512), Us = new Int32Array(32);
            let e = 0;
            for (; e < 144;) r.lens[e++] = 8;
            for (; e < 256;) r.lens[e++] = 9;
            for (; e < 280;) r.lens[e++] = 7;
            for (; e < 288;) r.lens[e++] = 8;
            for (fi(df, r.lens, 0, 288, Ls, 0, r.work, {
                    bits: 9
                }), e = 0; e < 32;) r.lens[e++] = 5;
            fi(ff, r.lens, 0, 32, Us, 0, r.work, {
                bits: 5
            }), Uu = !1
        }
        r.lencode = Ls, r.lenbits = 9, r.distcode = Us, r.distbits = 5
    },
    Ef = (r, e, t, n) => {
        let i;
        const o = r.state;
        return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), n >= o.wsize ? (o.window.set(e.subarray(t - o.wsize, t), 0), o.wnext = 0, o.whave = o.wsize) : (i = o.wsize - o.wnext, i > n && (i = n), o.window.set(e.subarray(t - n, t - n + i), o.wnext), n -= i, n ? (o.window.set(e.subarray(t - n, t), 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0
    },
    Mb = (r, e) => {
        let t, n, i, o, s, a, u, d, l, b, S, m, v, T, R = 0,
            N, $, P, K, U, Y, G, Z;
        const L = new Uint8Array(4);
        let q, M;
        const D = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (br(r) || !r.output || !r.input && r.avail_in !== 0) return nn;
        t = r.state, t.mode === In && (t.mode = Bs), s = r.next_out, i = r.output, u = r.avail_out, o = r.next_in, n = r.input, a = r.avail_in, d = t.hold, l = t.bits, b = a, S = u, Z = hr;
        e: for (;;) switch (t.mode) {
            case Ho:
                if (t.wrap === 0) {
                    t.mode = Bs;
                    break
                }
                for (; l < 16;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                if (t.wrap & 2 && d === 35615) {
                    t.wbits === 0 && (t.wbits = 15), t.check = 0, L[0] = d & 255, L[1] = d >>> 8 & 255, t.check = ln(t.check, L, 2, 0), d = 0, l = 0, t.mode = yu;
                    break
                }
                if (t.head && (t.head.done = !1), !(t.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
                    r.msg = "incorrect header check", t.mode = qe;
                    break
                }
                if ((d & 15) !== pu) {
                    r.msg = "unknown compression method", t.mode = qe;
                    break
                }
                if (d >>>= 4, l -= 4, G = (d & 15) + 8, t.wbits === 0 && (t.wbits = G), G > 15 || G > t.wbits) {
                    r.msg = "invalid window size", t.mode = qe;
                    break
                }
                t.dmax = 1 << t.wbits, t.flags = 0, r.adler = t.check = 1, t.mode = d & 512 ? Ru : In, d = 0, l = 0;
                break;
            case yu:
                for (; l < 16;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                if (t.flags = d, (t.flags & 255) !== pu) {
                    r.msg = "unknown compression method", t.mode = qe;
                    break
                }
                if (t.flags & 57344) {
                    r.msg = "unknown header flags set", t.mode = qe;
                    break
                }
                t.head && (t.head.text = d >> 8 & 1), t.flags & 512 && t.wrap & 4 && (L[0] = d & 255, L[1] = d >>> 8 & 255, t.check = ln(t.check, L, 2, 0)), d = 0, l = 0, t.mode = mu;
            case mu:
                for (; l < 32;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                t.head && (t.head.time = d), t.flags & 512 && t.wrap & 4 && (L[0] = d & 255, L[1] = d >>> 8 & 255, L[2] = d >>> 16 & 255, L[3] = d >>> 24 & 255, t.check = ln(t.check, L, 4, 0)), d = 0, l = 0, t.mode = gu;
            case gu:
                for (; l < 16;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                t.head && (t.head.xflags = d & 255, t.head.os = d >> 8), t.flags & 512 && t.wrap & 4 && (L[0] = d & 255, L[1] = d >>> 8 & 255, t.check = ln(t.check, L, 2, 0)), d = 0, l = 0, t.mode = wu;
            case wu:
                if (t.flags & 1024) {
                    for (; l < 16;) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    t.length = d, t.head && (t.head.extra_len = d), t.flags & 512 && t.wrap & 4 && (L[0] = d & 255, L[1] = d >>> 8 & 255, t.check = ln(t.check, L, 2, 0)), d = 0, l = 0
                } else t.head && (t.head.extra = null);
                t.mode = bu;
            case bu:
                if (t.flags & 1024 && (m = t.length, m > a && (m = a), m && (t.head && (G = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(n.subarray(o, o + m), G)), t.flags & 512 && t.wrap & 4 && (t.check = ln(t.check, n, m, o)), a -= m, o += m, t.length -= m), t.length)) break e;
                t.length = 0, t.mode = _u;
            case _u:
                if (t.flags & 2048) {
                    if (a === 0) break e;
                    m = 0;
                    do G = n[o + m++], t.head && G && t.length < 65536 && (t.head.name += String.fromCharCode(G)); while (G && m < a);
                    if (t.flags & 512 && t.wrap & 4 && (t.check = ln(t.check, n, m, o)), a -= m, o += m, G) break e
                } else t.head && (t.head.name = null);
                t.length = 0, t.mode = Eu;
            case Eu:
                if (t.flags & 4096) {
                    if (a === 0) break e;
                    m = 0;
                    do G = n[o + m++], t.head && G && t.length < 65536 && (t.head.comment += String.fromCharCode(G)); while (G && m < a);
                    if (t.flags & 512 && t.wrap & 4 && (t.check = ln(t.check, n, m, o)), a -= m, o += m, G) break e
                } else t.head && (t.head.comment = null);
                t.mode = vu;
            case vu:
                if (t.flags & 512) {
                    for (; l < 16;) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    if (t.wrap & 4 && d !== (t.check & 65535)) {
                        r.msg = "header crc mismatch", t.mode = qe;
                        break
                    }
                    d = 0, l = 0
                }
                t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), r.adler = t.check = 0, t.mode = In;
                break;
            case Ru:
                for (; l < 32;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                r.adler = t.check = Lu(d), d = 0, l = 0, t.mode = po;
            case po:
                if (t.havedict === 0) return r.next_out = s, r.avail_out = u, r.next_in = o, r.avail_in = a, t.hold = d, t.bits = l, kb;
                r.adler = t.check = 1, t.mode = In;
            case In:
                if (e === Rb || e === Wi) break e;
            case Bs:
                if (t.last) {
                    d >>>= l & 7, l -= l & 7, t.mode = Ps;
                    break
                }
                for (; l < 3;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                switch (t.last = d & 1, d >>>= 1, l -= 1, d & 3) {
                    case 0:
                        t.mode = Au;
                        break;
                    case 1:
                        if (Bb(t), t.mode = qi, e === Wi) {
                            d >>>= 2, l -= 2;
                            break e
                        }
                        break;
                    case 2:
                        t.mode = Su;
                        break;
                    case 3:
                        r.msg = "invalid block type", t.mode = qe
                }
                d >>>= 2, l -= 2;
                break;
            case Au:
                for (d >>>= l & 7, l -= l & 7; l < 32;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                if ((d & 65535) !== (d >>> 16 ^ 65535)) {
                    r.msg = "invalid stored block lengths", t.mode = qe;
                    break
                }
                if (t.length = d & 65535, d = 0, l = 0, t.mode = Ms, e === Wi) break e;
            case Ms:
                t.mode = ku;
            case ku:
                if (m = t.length, m) {
                    if (m > a && (m = a), m > u && (m = u), m === 0) break e;
                    i.set(n.subarray(o, o + m), s), a -= m, o += m, u -= m, s += m, t.length -= m;
                    break
                }
                t.mode = In;
                break;
            case Su:
                for (; l < 14;) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                if (t.nlen = (d & 31) + 257, d >>>= 5, l -= 5, t.ndist = (d & 31) + 1, d >>>= 5, l -= 5, t.ncode = (d & 15) + 4, d >>>= 4, l -= 4, t.nlen > 286 || t.ndist > 30) {
                    r.msg = "too many length or distance symbols", t.mode = qe;
                    break
                }
                t.have = 0, t.mode = Iu;
            case Iu:
                for (; t.have < t.ncode;) {
                    for (; l < 3;) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    t.lens[D[t.have++]] = d & 7, d >>>= 3, l -= 3
                }
                for (; t.have < 19;) t.lens[D[t.have++]] = 0;
                if (t.lencode = t.lendyn, t.lenbits = 7, q = {
                        bits: t.lenbits
                    }, Z = fi(vb, t.lens, 0, 19, t.lencode, 0, t.work, q), t.lenbits = q.bits, Z) {
                    r.msg = "invalid code lengths set", t.mode = qe;
                    break
                }
                t.have = 0, t.mode = xu;
            case xu:
                for (; t.have < t.nlen + t.ndist;) {
                    for (; R = t.lencode[d & (1 << t.lenbits) - 1], N = R >>> 24, $ = R >>> 16 & 255, P = R & 65535, !(N <= l);) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    if (P < 16) d >>>= N, l -= N, t.lens[t.have++] = P;
                    else {
                        if (P === 16) {
                            for (M = N + 2; l < M;) {
                                if (a === 0) break e;
                                a--, d += n[o++] << l, l += 8
                            }
                            if (d >>>= N, l -= N, t.have === 0) {
                                r.msg = "invalid bit length repeat", t.mode = qe;
                                break
                            }
                            G = t.lens[t.have - 1], m = 3 + (d & 3), d >>>= 2, l -= 2
                        } else if (P === 17) {
                            for (M = N + 3; l < M;) {
                                if (a === 0) break e;
                                a--, d += n[o++] << l, l += 8
                            }
                            d >>>= N, l -= N, G = 0, m = 3 + (d & 7), d >>>= 3, l -= 3
                        } else {
                            for (M = N + 7; l < M;) {
                                if (a === 0) break e;
                                a--, d += n[o++] << l, l += 8
                            }
                            d >>>= N, l -= N, G = 0, m = 11 + (d & 127), d >>>= 7, l -= 7
                        }
                        if (t.have + m > t.nlen + t.ndist) {
                            r.msg = "invalid bit length repeat", t.mode = qe;
                            break
                        }
                        for (; m--;) t.lens[t.have++] = G
                    }
                }
                if (t.mode === qe) break;
                if (t.lens[256] === 0) {
                    r.msg = "invalid code -- missing end-of-block", t.mode = qe;
                    break
                }
                if (t.lenbits = 9, q = {
                        bits: t.lenbits
                    }, Z = fi(df, t.lens, 0, t.nlen, t.lencode, 0, t.work, q), t.lenbits = q.bits, Z) {
                    r.msg = "invalid literal/lengths set", t.mode = qe;
                    break
                }
                if (t.distbits = 6, t.distcode = t.distdyn, q = {
                        bits: t.distbits
                    }, Z = fi(ff, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, q), t.distbits = q.bits, Z) {
                    r.msg = "invalid distances set", t.mode = qe;
                    break
                }
                if (t.mode = qi, e === Wi) break e;
            case qi:
                t.mode = Vi;
            case Vi:
                if (a >= 6 && u >= 258) {
                    r.next_out = s, r.avail_out = u, r.next_in = o, r.avail_in = a, t.hold = d, t.bits = l, mb(r, S), s = r.next_out, i = r.output, u = r.avail_out, o = r.next_in, n = r.input, a = r.avail_in, d = t.hold, l = t.bits, t.mode === In && (t.back = -1);
                    break
                }
                for (t.back = 0; R = t.lencode[d & (1 << t.lenbits) - 1], N = R >>> 24, $ = R >>> 16 & 255, P = R & 65535, !(N <= l);) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                if ($ && !($ & 240)) {
                    for (K = N, U = $, Y = P; R = t.lencode[Y + ((d & (1 << K + U) - 1) >> K)], N = R >>> 24, $ = R >>> 16 & 255, P = R & 65535, !(K + N <= l);) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    d >>>= K, l -= K, t.back += K
                }
                if (d >>>= N, l -= N, t.back += N, t.length = P, $ === 0) {
                    t.mode = Bu;
                    break
                }
                if ($ & 32) {
                    t.back = -1, t.mode = In;
                    break
                }
                if ($ & 64) {
                    r.msg = "invalid literal/length code", t.mode = qe;
                    break
                }
                t.extra = $ & 15, t.mode = Tu;
            case Tu:
                if (t.extra) {
                    for (M = t.extra; l < M;) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    t.length += d & (1 << t.extra) - 1, d >>>= t.extra, l -= t.extra, t.back += t.extra
                }
                t.was = t.length, t.mode = Ou;
            case Ou:
                for (; R = t.distcode[d & (1 << t.distbits) - 1], N = R >>> 24, $ = R >>> 16 & 255, P = R & 65535, !(N <= l);) {
                    if (a === 0) break e;
                    a--, d += n[o++] << l, l += 8
                }
                if (!($ & 240)) {
                    for (K = N, U = $, Y = P; R = t.distcode[Y + ((d & (1 << K + U) - 1) >> K)], N = R >>> 24, $ = R >>> 16 & 255, P = R & 65535, !(K + N <= l);) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    d >>>= K, l -= K, t.back += K
                }
                if (d >>>= N, l -= N, t.back += N, $ & 64) {
                    r.msg = "invalid distance code", t.mode = qe;
                    break
                }
                t.offset = P, t.extra = $ & 15, t.mode = Nu;
            case Nu:
                if (t.extra) {
                    for (M = t.extra; l < M;) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    t.offset += d & (1 << t.extra) - 1, d >>>= t.extra, l -= t.extra, t.back += t.extra
                }
                if (t.offset > t.dmax) {
                    r.msg = "invalid distance too far back", t.mode = qe;
                    break
                }
                t.mode = Cu;
            case Cu:
                if (u === 0) break e;
                if (m = S - u, t.offset > m) {
                    if (m = t.offset - m, m > t.whave && t.sane) {
                        r.msg = "invalid distance too far back", t.mode = qe;
                        break
                    }
                    m > t.wnext ? (m -= t.wnext, v = t.wsize - m) : v = t.wnext - m, m > t.length && (m = t.length), T = t.window
                } else T = i, v = s - t.offset, m = t.length;
                m > u && (m = u), u -= m, t.length -= m;
                do i[s++] = T[v++]; while (--m);
                t.length === 0 && (t.mode = Vi);
                break;
            case Bu:
                if (u === 0) break e;
                i[s++] = t.length, u--, t.mode = Vi;
                break;
            case Ps:
                if (t.wrap) {
                    for (; l < 32;) {
                        if (a === 0) break e;
                        a--, d |= n[o++] << l, l += 8
                    }
                    if (S -= u, r.total_out += S, t.total += S, t.wrap & 4 && S && (r.adler = t.check = t.flags ? ln(t.check, i, S, s - S) : ra(t.check, i, S, s - S)), S = u, t.wrap & 4 && (t.flags ? d : Lu(d)) !== t.check) {
                        r.msg = "incorrect data check", t.mode = qe;
                        break
                    }
                    d = 0, l = 0
                }
                t.mode = Mu;
            case Mu:
                if (t.wrap && t.flags) {
                    for (; l < 32;) {
                        if (a === 0) break e;
                        a--, d += n[o++] << l, l += 8
                    }
                    if (t.wrap & 4 && d !== (t.total & 4294967295)) {
                        r.msg = "incorrect length check", t.mode = qe;
                        break
                    }
                    d = 0, l = 0
                }
                t.mode = Pu;
            case Pu:
                Z = Ab;
                break e;
            case qe:
                Z = hf;
                break e;
            case yf:
                return pf;
            case mf:
            default:
                return nn
        }
        return r.next_out = s, r.avail_out = u, r.next_in = o, r.avail_in = a, t.hold = d, t.bits = l, (t.wsize || S !== r.avail_out && t.mode < qe && (t.mode < Ps || e !== hu)) && Ef(r, r.output, r.next_out, S - r.avail_out), b -= r.avail_in, S -= r.avail_out, r.total_in += b, r.total_out += S, t.total += S, t.wrap & 4 && S && (r.adler = t.check = t.flags ? ln(t.check, i, S, r.next_out - S) : ra(t.check, i, S, r.next_out - S)), r.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === In ? 128 : 0) + (t.mode === qi || t.mode === Ms ? 256 : 0), (b === 0 && S === 0 || e === hu) && Z === hr && (Z = Sb), Z
    },
    Pb = r => {
        if (br(r)) return nn;
        let e = r.state;
        return e.window && (e.window = null), r.state = null, hr
    },
    Lb = (r, e) => {
        if (br(r)) return nn;
        const t = r.state;
        return t.wrap & 2 ? (t.head = e, e.done = !1, hr) : nn
    },
    Ub = (r, e) => {
        const t = e.length;
        let n, i, o;
        return br(r) || (n = r.state, n.wrap !== 0 && n.mode !== po) ? nn : n.mode === po && (i = 1, i = ra(i, e, t, 0), i !== n.check) ? hf : (o = Ef(r, e, t, t), o ? (n.mode = yf, pf) : (n.havedict = 1, hr))
    };
var Db = wf,
    Fb = bf,
    Hb = gf,
    zb = Cb,
    Kb = _f,
    $b = Mb,
    Wb = Pb,
    qb = Lb,
    Vb = Ub,
    Gb = "pako inflate (from Nodeca project)",
    On = {
        inflateReset: Db,
        inflateReset2: Fb,
        inflateResetKeep: Hb,
        inflateInit: zb,
        inflateInit2: Kb,
        inflate: $b,
        inflateEnd: Wb,
        inflateGetHeader: qb,
        inflateSetDictionary: Vb,
        inflateInfo: Gb
    };

function jb() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
}
var Zb = jb;
const vf = Object.prototype.toString,
    {
        Z_NO_FLUSH: Yb,
        Z_FINISH: Xb,
        Z_OK: Ei,
        Z_STREAM_END: Ds,
        Z_NEED_DICT: Fs,
        Z_STREAM_ERROR: Jb,
        Z_DATA_ERROR: Du,
        Z_MEM_ERROR: Qb
    } = cf;

function zo(r) {
    this.options = uf.assign({
        chunkSize: 1024 * 64,
        windowBits: 15,
        to: ""
    }, r || {});
    const e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(r && r.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new pb, this.strm.avail_out = 0;
    let t = On.inflateInit2(this.strm, e.windowBits);
    if (t !== Ei) throw new Error(ia[t]);
    if (this.header = new Zb, On.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = oa.string2buf(e.dictionary) : vf.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = On.inflateSetDictionary(this.strm, e.dictionary), t !== Ei))) throw new Error(ia[t])
}
zo.prototype.push = function (r, e) {
    const t = this.strm,
        n = this.options.chunkSize,
        i = this.options.dictionary;
    let o, s, a;
    if (this.ended) return !1;
    for (e === ~~e ? s = e : s = e === !0 ? Xb : Yb, vf.call(r) === "[object ArrayBuffer]" ? t.input = new Uint8Array(r) : t.input = r, t.next_in = 0, t.avail_in = t.input.length;;) {
        for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), o = On.inflate(t, s), o === Fs && i && (o = On.inflateSetDictionary(t, i), o === Ei ? o = On.inflate(t, s) : o === Du && (o = Fs)); t.avail_in > 0 && o === Ds && t.state.wrap > 0 && r[t.next_in] !== 0;) On.inflateReset(t), o = On.inflate(t, s);
        switch (o) {
            case Jb:
            case Du:
            case Fs:
            case Qb:
                return this.onEnd(o), this.ended = !0, !1
        }
        if (a = t.avail_out, t.next_out && (t.avail_out === 0 || o === Ds))
            if (this.options.to === "string") {
                let u = oa.utf8border(t.output, t.next_out),
                    d = t.next_out - u,
                    l = oa.buf2string(t.output, u);
                t.next_out = d, t.avail_out = n - d, d && t.output.set(t.output.subarray(u, u + d), 0), this.onData(l)
            } else this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
        if (!(o === Ei && a === 0)) {
            if (o === Ds) return o = On.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
            if (t.avail_in === 0) break
        }
    }
    return !0
};
zo.prototype.onData = function (r) {
    this.chunks.push(r)
};
zo.prototype.onEnd = function (r) {
    r === Ei && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = uf.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg
};

function e_(r, e) {
    const t = new zo(e);
    if (t.push(r), t.err) throw t.msg || ia[t.err];
    return t.result
}
var t_ = e_,
    n_ = {
        inflate: t_
    };
const {
    inflate: r_
} = n_;
var i_ = r_,
    Rf = {
        exports: {}
    };
(function (r) {
    var e = Object.prototype.hasOwnProperty,
        t = "~";

    function n() {}
    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (t = !1));

    function i(u, d, l) {
        this.fn = u, this.context = d, this.once = l || !1
    }

    function o(u, d, l, b, S) {
        if (typeof l != "function") throw new TypeError("The listener must be a function");
        var m = new i(l, b || u, S),
            v = t ? t + d : d;
        return u._events[v] ? u._events[v].fn ? u._events[v] = [u._events[v], m] : u._events[v].push(m) : (u._events[v] = m, u._eventsCount++), u
    }

    function s(u, d) {
        --u._eventsCount === 0 ? u._events = new n : delete u._events[d]
    }

    function a() {
        this._events = new n, this._eventsCount = 0
    }
    a.prototype.eventNames = function () {
        var d = [],
            l, b;
        if (this._eventsCount === 0) return d;
        for (b in l = this._events) e.call(l, b) && d.push(t ? b.slice(1) : b);
        return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(l)) : d
    }, a.prototype.listeners = function (d) {
        var l = t ? t + d : d,
            b = this._events[l];
        if (!b) return [];
        if (b.fn) return [b.fn];
        for (var S = 0, m = b.length, v = new Array(m); S < m; S++) v[S] = b[S].fn;
        return v
    }, a.prototype.listenerCount = function (d) {
        var l = t ? t + d : d,
            b = this._events[l];
        return b ? b.fn ? 1 : b.length : 0
    }, a.prototype.emit = function (d, l, b, S, m, v) {
        var T = t ? t + d : d;
        if (!this._events[T]) return !1;
        var R = this._events[T],
            N = arguments.length,
            $, P;
        if (R.fn) {
            switch (R.once && this.removeListener(d, R.fn, void 0, !0), N) {
                case 1:
                    return R.fn.call(R.context), !0;
                case 2:
                    return R.fn.call(R.context, l), !0;
                case 3:
                    return R.fn.call(R.context, l, b), !0;
                case 4:
                    return R.fn.call(R.context, l, b, S), !0;
                case 5:
                    return R.fn.call(R.context, l, b, S, m), !0;
                case 6:
                    return R.fn.call(R.context, l, b, S, m, v), !0
            }
            for (P = 1, $ = new Array(N - 1); P < N; P++) $[P - 1] = arguments[P];
            R.fn.apply(R.context, $)
        } else {
            var K = R.length,
                U;
            for (P = 0; P < K; P++) switch (R[P].once && this.removeListener(d, R[P].fn, void 0, !0), N) {
                case 1:
                    R[P].fn.call(R[P].context);
                    break;
                case 2:
                    R[P].fn.call(R[P].context, l);
                    break;
                case 3:
                    R[P].fn.call(R[P].context, l, b);
                    break;
                case 4:
                    R[P].fn.call(R[P].context, l, b, S);
                    break;
                default:
                    if (!$)
                        for (U = 1, $ = new Array(N - 1); U < N; U++) $[U - 1] = arguments[U];
                    R[P].fn.apply(R[P].context, $)
            }
        }
        return !0
    }, a.prototype.on = function (d, l, b) {
        return o(this, d, l, b, !1)
    }, a.prototype.once = function (d, l, b) {
        return o(this, d, l, b, !0)
    }, a.prototype.removeListener = function (d, l, b, S) {
        var m = t ? t + d : d;
        if (!this._events[m]) return this;
        if (!l) return s(this, m), this;
        var v = this._events[m];
        if (v.fn) v.fn === l && (!S || v.once) && (!b || v.context === b) && s(this, m);
        else {
            for (var T = 0, R = [], N = v.length; T < N; T++)(v[T].fn !== l || S && !v[T].once || b && v[T].context !== b) && R.push(v[T]);
            R.length ? this._events[m] = R.length === 1 ? R[0] : R : s(this, m)
        }
        return this
    }, a.prototype.removeAllListeners = function (d) {
        var l;
        return d ? (l = t ? t + d : d, this._events[l] && s(this, l)) : (this._events = new n, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, r.exports = a
})(Rf);
var o_ = Rf.exports;
const s_ = $r(o_);

function a_(r, e) {
    return Array.apply(0, new Array(Math.ceil(r.length / e))).map((t, n) => r.slice(n * e, (n + 1) * e))
}
const er = r => "version" in r;

function c_(r) {
    return r.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "0x")
}

function u_(r) {
    r.indexOf("0x") === 0 && (r = r.substr(2)), r.length % 2 === 1 && (r = "0" + r);
    let e = r.match(/.{2}/g);
    return e === null ? se.from([]) : se.from(e.map(t => parseInt(t, 16)))
}
var l_ = Object.freeze({
    __proto__: null,
    encode: c_,
    decode: u_
});

function Af(r) {
    return new TextDecoder("utf-8").decode(r)
}

function d_(r) {
    return new TextEncoder().encode(r)
}
var f_ = Object.freeze({
    __proto__: null,
    decode: Af,
    encode: d_
});

function sa(r) {
    return ot.encode(r)
}

function h_(r) {
    return ot.decode(r)
}
var p_ = Object.freeze({
    __proto__: null,
    encode: sa,
    decode: h_
});

function y_(r) {
    return r.toString("base64")
}

function ic(r) {
    return se.from(r, "base64")
}
var m_ = Object.freeze({
        __proto__: null,
        encode: y_,
        decode: ic
    }),
    g_ = Object.freeze({
        __proto__: null,
        hex: l_,
        utf8: f_,
        bs58: p_,
        base64: m_
    });

function $n(r) {
    return "accounts" in r
}
async function w_(r) {
    const e = (await j.findProgramAddress([], r))[0];
    return await j.createWithSeed(e, b_(), r)
}

function b_() {
    return "anchor:idl"
}
const __ = me.struct([me.publicKey("authority"), me.vecU8("data")]);

function E_(r) {
    return __.decode(r)
}

function v_(r) {
    const e = ["name", "path", "account", "relations", "generic"],
        t = o => o.split(".").map(Dw).join("."),
        n = o => {
            for (const s in o) {
                const a = o[s];
                e.includes(s) ? o[s] = Array.isArray(a) ? a.map(t) : t(a) : typeof a == "object" && n(a)
            }
        },
        i = structuredClone(r);
    return n(i), i
}

function Nr(r, e, t, n) {
    return r != null && r.length ? r[0].name ? t(r) : n(r) : e()
}

function R_(r) {
    const e = new Map;
    return r.errors && r.errors.forEach(t => {
        var n;
        let i = (n = t.msg) !== null && n !== void 0 ? n : t.name;
        e.set(t.code, i)
    }), e
}

function A_(r, ...e) {
    if (r.args.length != e.length) throw new Error("Invalid argument length");
    const t = {};
    let n = 0;
    return r.args.forEach(i => {
        t[i.name] = e[n], n += 1
    }), t
}

function kf(r, e = {}) {
    r.forEach(t => {
        if ($n(t)) kf(t.accounts, e[t.name]);
        else if (!e[t.name]) throw new Error(`Account \`${t.name}\` not provided.`)
    })
}

function Qt(r) {
    return r instanceof j ? r : new j(r)
}
class k_ extends TypeError {
    constructor(e, t) {
        let n;
        const {
            message: i,
            ...o
        } = e, {
            path: s
        } = e, a = s.length === 0 ? i : "At path: " + s.join(".") + " -- " + i;
        super(a), this.value = void 0, this.key = void 0, this.type = void 0, this.refinement = void 0, this.path = void 0, this.branch = void 0, this.failures = void 0, Object.assign(this, o), this.name = this.constructor.name, this.failures = () => {
            var u;
            return (u = n) != null ? u : n = [e, ...t()]
        }
    }
}

function S_(r) {
    return Pr(r) && typeof r[Symbol.iterator] == "function"
}

function Pr(r) {
    return typeof r == "object" && r != null
}

function Xn(r) {
    return typeof r == "string" ? JSON.stringify(r) : "" + r
}

function I_(r) {
    const {
        done: e,
        value: t
    } = r.next();
    return e ? void 0 : t
}

function x_(r, e, t, n) {
    if (r === !0) return;
    r === !1 ? r = {} : typeof r == "string" && (r = {
        message: r
    });
    const {
        path: i,
        branch: o
    } = e, {
        type: s
    } = t, {
        refinement: a,
        message: u = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + Xn(n) + "`"
    } = r;
    return {
        value: n,
        type: s,
        refinement: a,
        key: i[i.length - 1],
        path: i,
        branch: o,
        ...r,
        message: u
    }
}

function* Fu(r, e, t, n) {
    S_(r) || (r = [r]);
    for (const i of r) {
        const o = x_(i, e, t, n);
        o && (yield o)
    }
}

function* oc(r, e, t) {
    t === void 0 && (t = {});
    const {
        path: n = [],
        branch: i = [r],
        coerce: o = !1,
        mask: s = !1
    } = t, a = {
        path: n,
        branch: i
    };
    if (o && (r = e.coercer(r, a), s && e.type !== "type" && Pr(e.schema) && Pr(r) && !Array.isArray(r)))
        for (const d in r) e.schema[d] === void 0 && delete r[d];
    let u = !0;
    for (const d of e.validator(r, a)) u = !1, yield [d, void 0];
    for (let [d, l, b] of e.entries(r, a)) {
        const S = oc(l, b, {
            path: d === void 0 ? n : [...n, d],
            branch: d === void 0 ? i : [...i, l],
            coerce: o,
            mask: s
        });
        for (const m of S) m[0] ? (u = !1, yield [m[0], void 0]) : o && (l = m[1], d === void 0 ? r = l : r instanceof Map ? r.set(d, l) : r instanceof Set ? r.add(l) : Pr(r) && (r[d] = l))
    }
    if (u)
        for (const d of e.refiner(r, a)) u = !1, yield [d, void 0];
    u && (yield [void 0, r])
}
class Qn {
    constructor(e) {
        this.TYPE = void 0, this.type = void 0, this.schema = void 0, this.coercer = void 0, this.validator = void 0, this.refiner = void 0, this.entries = void 0;
        const {
            type: t,
            schema: n,
            validator: i,
            refiner: o,
            coercer: s = u => u,
            entries: a = function* () {}
        } = e;
        this.type = t, this.schema = n, this.entries = a, this.coercer = s, i ? this.validator = (u, d) => {
            const l = i(u, d);
            return Fu(l, d, this, u)
        } : this.validator = () => [], o ? this.refiner = (u, d) => {
            const l = o(u, d);
            return Fu(l, d, this, u)
        } : this.refiner = () => []
    }
    assert(e) {
        return T_(e, this)
    }
    create(e) {
        return sc(e, this)
    }
    is(e) {
        return Sf(e, this)
    }
    mask(e) {
        return O_(e, this)
    }
    validate(e, t) {
        return t === void 0 && (t = {}), Ii(e, this, t)
    }
}

function T_(r, e) {
    const t = Ii(r, e);
    if (t[0]) throw t[0]
}

function sc(r, e) {
    const t = Ii(r, e, {
        coerce: !0
    });
    if (t[0]) throw t[0];
    return t[1]
}

function O_(r, e) {
    const t = Ii(r, e, {
        coerce: !0,
        mask: !0
    });
    if (t[0]) throw t[0];
    return t[1]
}

function Sf(r, e) {
    return !Ii(r, e)[0]
}

function Ii(r, e, t) {
    t === void 0 && (t = {});
    const n = oc(r, e, t),
        i = I_(n);
    return i[0] ? [new k_(i[0], function* () {
        for (const s of n) s[0] && (yield s[0])
    }), void 0] : [void 0, i[1]]
}

function xi(r, e) {
    return new Qn({
        type: r,
        schema: null,
        validator: e
    })
}

function N_() {
    return xi("any", () => !0)
}

function Hs(r) {
    return new Qn({
        type: "array",
        schema: r,
        * entries(e) {
            if (r && Array.isArray(e))
                for (const [t, n] of e.entries()) yield [t, n, r]
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        },
        validator(e) {
            return Array.isArray(e) || "Expected an array value, but received: " + Xn(e)
        }
    })
}

function C_() {
    return xi("boolean", r => typeof r == "boolean")
}

function Hu(r) {
    const e = Xn(r);
    return new Qn({
        type: "literal",
        schema: r,
        validator(t) {
            return t === r || "Expected the literal `" + e + "`, but received: " + Xn(t)
        }
    })
}

function Gi(r) {
    return new Qn({
        ...r,
        validator: (e, t) => e === null || r.validator(e, t),
        refiner: (e, t) => e === null || r.refiner(e, t)
    })
}

function Xi() {
    return xi("number", r => typeof r == "number" && !isNaN(r) || "Expected a number, but received: " + Xn(r))
}

function Ji(r) {
    return new Qn({
        ...r,
        validator: (e, t) => e === void 0 || r.validator(e, t),
        refiner: (e, t) => e === void 0 || r.refiner(e, t)
    })
}

function cr() {
    return xi("string", r => typeof r == "string" || "Expected a string, but received: " + Xn(r))
}

function jn(r) {
    const e = Object.keys(r);
    return new Qn({
        type: "type",
        schema: r,
        * entries(t) {
            if (Pr(t))
                for (const n of e) yield [n, t[n], r[n]]
        },
        validator(t) {
            return Pr(t) || "Expected an object, but received: " + Xn(t)
        }
    })
}

function If(r) {
    const e = r.map(t => t.type).join(" | ");
    return new Qn({
        type: "union",
        schema: null,
        coercer(t, n) {
            return (r.find(o => {
                const [s] = o.validate(t, {
                    coerce: !0
                });
                return !s
            }) || ac()).coercer(t, n)
        },
        validator(t, n) {
            const i = [];
            for (const o of r) {
                const [...s] = oc(t, o, n), [a] = s;
                if (a[0])
                    for (const [u] of s) u && i.push(u);
                else return []
            }
            return ["Expected the value to satisfy a union of `" + e + "`, but received: " + Xn(t), ...i]
        }
    })
}

function ac() {
    return xi("unknown", () => !0)
}

function B_(r, e, t) {
    return new Qn({
        ...r,
        coercer: (n, i) => Sf(n, e) ? r.coercer(t(n, i), i) : r.coercer(n, i)
    })
}
async function M_(r, e, t, n) {
    r = Qt(r), n || (n = yo());
    const i = new Ee;
    if (i.add(new Oe({
            programId: r,
            keys: e ?? [],
            data: t
        })), n.sendAndConfirm === void 0) throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
    return await n.sendAndConfirm(i, [])
}
const zu = 99;
async function P_(r, e, t) {
    return (await cc(r, e, t)).map(i => i ? {
        publicKey: i.publicKey,
        account: i.account
    } : null)
}
async function cc(r, e, t) {
    if (e.length <= zu) return await Ku(r, e, t); {
        const n = a_(e, zu);
        return (await Promise.all(n.map(o => Ku(r, o, t)))).flat()
    }
}
async function Ku(r, e, t) {
    const n = t ?? r.commitment,
        {
            value: i,
            context: o
        } = await r.getMultipleAccountsInfoAndContext(e, n);
    return i.map((a, u) => a === null ? null : {
        publicKey: e[u],
        account: a,
        context: o
    })
}
async function xf(r, e, t, n, i) {
    var o;
    t && t.length > 0 && e.sign(...t);
    const s = e._compile(),
        a = s.serialize(),
        d = e._serialize(a).toString("base64"),
        l = {
            encoding: "base64",
            commitment: n ?? r.commitment
        };
    if (i) {
        const v = (Array.isArray(i) ? i : s.nonProgramIds()).map(T => T.toBase58());
        l.accounts = {
            encoding: "base64",
            addresses: v
        }
    }
    t && t.length > 0 && (l.sigVerify = !0);
    const b = [d, l],
        S = await r._rpcRequest("simulateTransaction", b),
        m = sc(S, F_);
    if ("error" in m) {
        let v;
        if ("data" in m.error && (v = (o = m.error.data) === null || o === void 0 ? void 0 : o.logs, v && Array.isArray(v))) {
            const T = `
    `,
                R = T + v.join(T);
            console.error(m.error.message, R)
        }
        throw new Yn("failed to simulate transaction: " + m.error.message, v)
    }
    return m.result
}

function L_(r) {
    return B_(Tf(r), U_, e => "error" in e ? e : {
        ...e,
        result: sc(e.result, r)
    })
}
const U_ = Tf(ac());

function Tf(r) {
    return If([jn({
        jsonrpc: Hu("2.0"),
        id: cr(),
        result: r
    }), jn({
        jsonrpc: Hu("2.0"),
        id: cr(),
        error: jn({
            code: ac(),
            message: cr(),
            data: Ji(N_())
        })
    })])
}

function D_(r) {
    return L_(jn({
        context: jn({
            slot: Xi()
        }),
        value: r
    }))
}
const F_ = D_(jn({
    err: Gi(If([jn({}), cr()])),
    logs: Gi(Hs(cr())),
    accounts: Ji(Gi(Hs(Gi(jn({
        executable: C_(),
        owner: cr(),
        lamports: Xi(),
        data: Hs(cr()),
        rentEpoch: Ji(Xi())
    }))))),
    unitsConsumed: Ji(Xi())
}));
var H_ = Object.freeze({
    __proto__: null,
    invoke: M_,
    getMultipleAccounts: P_,
    getMultipleAccountsAndContext: cc,
    simulateTransaction: xf
});
class Jn {
    constructor(e, t, n = Jn.defaultOptions()) {
        this.connection = e, this.wallet = t, this.opts = n, this.publicKey = t == null ? void 0 : t.publicKey
    }
    static defaultOptions() {
        return {
            preflightCommitment: "processed",
            commitment: "processed"
        }
    }
    static local(e, t = Jn.defaultOptions()) {
        throw new Error("Provider local is not available on browser.")
    }
    static env() {
        throw new Error("Provider env is not available on browser.")
    }
    async sendAndConfirm(e, t, n) {
        var i, o, s, a;
        if (n === void 0 && (n = this.opts), er(e)) t && e.sign(t);
        else if (e.feePayer = (i = e.feePayer) !== null && i !== void 0 ? i : this.wallet.publicKey, e.recentBlockhash = (await this.connection.getLatestBlockhash(n.preflightCommitment)).blockhash, t)
            for (const d of t) e.partialSign(d);
        e = await this.wallet.signTransaction(e);
        const u = e.serialize();
        try {
            return await $u(this.connection, u, n)
        } catch (d) {
            if (d instanceof aa) {
                const l = sa(er(e) ? ((o = e.signatures) === null || o === void 0 ? void 0 : o[0]) || new Uint8Array : (s = e.signature) !== null && s !== void 0 ? s : new Uint8Array),
                    b = er(e) ? 0 : void 0,
                    S = await this.connection.getTransaction(l, {
                        commitment: "confirmed",
                        maxSupportedTransactionVersion: b
                    });
                if (S) {
                    const m = (a = S.meta) === null || a === void 0 ? void 0 : a.logMessages;
                    throw m ? new Yn(d.message, m) : d
                } else throw d
            } else throw d
        }
    }
    async sendAll(e, t) {
        var n, i, o;
        t === void 0 && (t = this.opts);
        const s = (await this.connection.getLatestBlockhash(t.preflightCommitment)).blockhash;
        let a = e.map(l => {
            var b, S;
            if (er(l.tx)) {
                let m = l.tx;
                return l.signers && m.sign(l.signers), m
            } else {
                let m = l.tx,
                    v = (b = l.signers) !== null && b !== void 0 ? b : [];
                return m.feePayer = (S = m.feePayer) !== null && S !== void 0 ? S : this.wallet.publicKey, m.recentBlockhash = s, v.forEach(T => {
                    m.partialSign(T)
                }), m
            }
        });
        const u = await this.wallet.signAllTransactions(a),
            d = [];
        for (let l = 0; l < a.length; l += 1) {
            const b = u[l],
                S = b.serialize();
            try {
                d.push(await $u(this.connection, S, t))
            } catch (m) {
                if (m instanceof aa) {
                    const v = sa(er(b) ? ((n = b.signatures) === null || n === void 0 ? void 0 : n[0]) || new Uint8Array : (i = b.signature) !== null && i !== void 0 ? i : new Uint8Array),
                        T = er(b) ? 0 : void 0,
                        R = await this.connection.getTransaction(v, {
                            commitment: "confirmed",
                            maxSupportedTransactionVersion: T
                        });
                    if (R) {
                        const N = (o = R.meta) === null || o === void 0 ? void 0 : o.logMessages;
                        throw N ? new Yn(m.message, N) : m
                    } else throw m
                } else throw m
            }
        }
        return d
    }
    async simulate(e, t, n, i) {
        let o = (await this.connection.getLatestBlockhash(n ?? this.connection.commitment)).blockhash,
            s;
        if (er(e) ? (t && t.length > 0 && (e.sign(t), e = await this.wallet.signTransaction(e)), s = await this.connection.simulateTransaction(e, {
                commitment: n
            })) : (e.feePayer = e.feePayer || this.wallet.publicKey, e.recentBlockhash = o, t && t.length > 0 && (e = await this.wallet.signTransaction(e)), s = await xf(this.connection, e, t, n, i)), s.value.err) throw new z_(s.value);
        return s.value
    }
}
class z_ extends Error {
    constructor(e, t) {
        super(t), this.simulationResponse = e
    }
}
async function $u(r, e, t) {
    const n = t ? {
        skipPreflight: t.skipPreflight,
        preflightCommitment: t.preflightCommitment || t.commitment,
        maxRetries: t.maxRetries,
        minContextSlot: t.minContextSlot
    } : {};
    let i;
    const o = Date.now();
    for (; Date.now() - o < 6e4;) try {
        const s = await r.sendRawTransaction(e, n);
        if (t != null && t.blockhash)
            if (n.maxRetries === 0) {
                const a = AbortSignal.timeout(15e3);
                i = (await r.confirmTransaction({
                    abortSignal: a,
                    signature: s,
                    ...t.blockhash
                }, t && t.commitment)).value
            } else i = (await r.confirmTransaction({
                signature: s,
                ...t.blockhash
            }, t && t.commitment)).value;
        else i = (await r.confirmTransaction(s, t && t.commitment)).value;
        if (i.err) throw new aa(`Raw transaction ${s} failed (${JSON.stringify(i)})`);
        return s
    } catch (s) {
        if (s.name === "TimeoutError") continue;
        throw s
    }
    throw Error("Transaction failed to confirm in 60s")
}
class aa extends Error {
    constructor(e) {
        super(e)
    }
}

function yo() {
    return Jn.local()
}
var K_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof bc < "u" ? bc : typeof self < "u" ? self : {};

function $_(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var z = {};
Object.defineProperty(z, "__esModule", {
    value: !0
});
var Of = z.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = Sh = z.ANCHOR_ERROR__REQUIRE_VIOLATED = kh = z.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = Ah = z.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = Rh = z.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = vh = z.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = Eh = z.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = _h = z.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = bh = z.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = wh = z.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = gh = z.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = mh = z.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = yh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = ph = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = hh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = fh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = dh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = lh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = uh = z.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = ch = z.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = ah = z.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = sh = z.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = oh = z.ANCHOR_ERROR__CONSTRAINT_SPACE = ih = z.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = rh = z.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = nh = z.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = th = z.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = eh = z.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = Qf = z.ANCHOR_ERROR__CONSTRAINT_ZERO = Jf = z.ANCHOR_ERROR__CONSTRAINT_ADDRESS = Xf = z.ANCHOR_ERROR__CONSTRAINT_CLOSE = Yf = z.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = Zf = z.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = jf = z.ANCHOR_ERROR__CONSTRAINT_STATE = Gf = z.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = Vf = z.ANCHOR_ERROR__CONSTRAINT_SEEDS = qf = z.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = Wf = z.ANCHOR_ERROR__CONSTRAINT_OWNER = $f = z.ANCHOR_ERROR__CONSTRAINT_RAW = Kf = z.ANCHOR_ERROR__CONSTRAINT_SIGNER = zf = z.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = Hf = z.ANCHOR_ERROR__CONSTRAINT_MUT = Ff = z.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = Df = z.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = Uf = z.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = Lf = z.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = Pf = z.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = Mf = z.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = Bf = z.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = Cf = z.ANCHOR_ERROR__INSTRUCTION_MISSING = void 0,
    Nf = z.ANCHOR_ERROR__DEPRECATED = Jh = z.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = Xh = z.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = Yh = z.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = Zh = z.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = jh = z.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = Gh = z.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = Vh = z.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = qh = z.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = Wh = z.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = $h = z.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = Kh = z.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = zh = z.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = Hh = z.ANCHOR_ERROR__INVALID_PROGRAM_ID = Fh = z.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = Dh = z.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = Uh = z.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = Lh = z.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = Ph = z.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = Mh = z.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = Bh = z.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = Ch = z.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = Nh = z.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = Oh = z.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = Th = z.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = xh = z.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = Ih = z.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = void 0,
    Cf = z.ANCHOR_ERROR__INSTRUCTION_MISSING = 100,
    Bf = z.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101,
    Mf = z.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102,
    Pf = z.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103,
    Lf = z.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1e3,
    Uf = z.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001,
    Df = z.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002,
    Ff = z.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500,
    Hf = z.ANCHOR_ERROR__CONSTRAINT_MUT = 2e3,
    zf = z.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001,
    Kf = z.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002,
    $f = z.ANCHOR_ERROR__CONSTRAINT_RAW = 2003,
    Wf = z.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004,
    qf = z.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005,
    Vf = z.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006,
    Gf = z.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007,
    jf = z.ANCHOR_ERROR__CONSTRAINT_STATE = 2008,
    Zf = z.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009,
    Yf = z.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010,
    Xf = z.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011,
    Jf = z.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012,
    Qf = z.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013,
    eh = z.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014,
    th = z.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015,
    nh = z.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016,
    rh = z.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017,
    ih = z.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018,
    oh = z.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019,
    sh = z.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020,
    ah = z.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021,
    ch = z.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022,
    uh = z.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023,
    lh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024,
    dh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025,
    fh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026,
    hh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027,
    ph = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028,
    yh = z.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029,
    mh = z.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030,
    gh = z.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031,
    wh = z.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032,
    bh = z.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033,
    _h = z.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034,
    Eh = z.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035,
    vh = z.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036,
    Rh = z.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037,
    Ah = z.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038,
    kh = z.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039,
    Sh = z.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500;
Of = z.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
var Ih = z.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502,
    xh = z.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503,
    Th = z.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504,
    Oh = z.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505,
    Nh = z.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506,
    Ch = z.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3e3,
    Bh = z.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001,
    Mh = z.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002,
    Ph = z.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003,
    Lh = z.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004,
    Uh = z.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005,
    Dh = z.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006,
    Fh = z.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007,
    Hh = z.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008,
    zh = z.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009,
    Kh = z.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010,
    $h = z.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011,
    Wh = z.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012,
    qh = z.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013,
    Vh = z.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014,
    Gh = z.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015,
    jh = z.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016,
    Zh = z.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017,
    Yh = z.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100,
    Xh = z.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101,
    Jh = z.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102;
Nf = z.ANCHOR_ERROR__DEPRECATED = 5e3;
const W_ = new Set(["debug-logs"]),
    Qh = new Map;

function q_(r) {
    if (!W_.has(r)) throw new Error("Invalid feature");
    Qh.set(r, !0)
}

function uc(r) {
    return Qh.get(r) !== void 0
}
var V_ = Object.freeze({
    __proto__: null,
    set: q_,
    isSet: uc
});
class Kn extends Error {
    constructor(e) {
        super(e), this.name = "IdlError"
    }
}
class Ti {
    constructor(e) {
        this.stack = e
    }
    static parse(e) {
        var t;
        const n = /^Program (\w*) invoke/,
            i = /^Program \w* success/,
            o = [];
        for (let s = 0; s < e.length; s++) {
            if (i.exec(e[s])) {
                o.pop();
                continue
            }
            const a = (t = n.exec(e[s])) === null || t === void 0 ? void 0 : t[1];
            a && o.push(new j(a))
        }
        return new Ti(o)
    }
}
class hi extends Error {
    constructor(e, t, n, i, o, s) {
        super(n.join(`
`).replace("Program log: ", "")), this.errorLogs = n, this.logs = i, this.error = {
            errorCode: e,
            errorMessage: t,
            comparedValues: s,
            origin: o
        }, this._programErrorStack = Ti.parse(i)
    }
    static parse(e) {
        if (!e) return null;
        const t = e.findIndex(S => S.startsWith("Program log: AnchorError"));
        if (t === -1) return null;
        const n = e[t],
            i = [n];
        let o;
        if (t + 1 < e.length) {
            if (e[t + 1] === "Program log: Left:") {
                const S = /^Program log: (.*)$/,
                    m = S.exec(e[t + 2])[1],
                    v = S.exec(e[t + 4])[1];
                o = [new j(m), new j(v)], i.push(...e.slice(t + 1, t + 5))
            } else if (e[t + 1].startsWith("Program log: Left:")) {
                const S = /^Program log: (Left|Right): (.*)$/,
                    m = S.exec(e[t + 1])[2],
                    v = S.exec(e[t + 2])[2];
                i.push(...e.slice(t + 1, t + 3)), o = [m, v]
            }
        }
        const a = /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n),
            d = /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n),
            b = /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(n);
        if (a) {
            const [S, m, v] = a.slice(1, 4), T = {
                code: S,
                number: parseInt(m)
            };
            return new hi(T, v, i, e, void 0, o)
        } else if (d) {
            const [S, m, v, T, R] = d.slice(1, 6), N = {
                code: v,
                number: parseInt(T)
            }, $ = {
                file: S,
                line: parseInt(m)
            };
            return new hi(N, R, i, e, $, o)
        } else if (b) {
            const [S, m, v, T] = b.slice(1, 5), R = S, N = {
                code: m,
                number: parseInt(v)
            };
            return new hi(N, T, i, e, R, o)
        } else return null
    }
    get program() {
        return this._programErrorStack.stack[this._programErrorStack.stack.length - 1]
    }
    get programErrorStack() {
        return this._programErrorStack.stack
    }
    toString() {
        return this.message
    }
}
class mo extends Error {
    constructor(e, t, n) {
        super(), this.code = e, this.msg = t, this.logs = n, n && (this._programErrorStack = Ti.parse(n))
    }
    static parse(e, t) {
        const n = e.toString();
        let i;
        if (n.includes("custom program error:")) {
            let a = n.split("custom program error: ");
            if (a.length !== 2) return null;
            i = a[1]
        } else {
            const a = n.match(/"Custom":([0-9]+)}/g);
            if (!a || a.length > 1) return null;
            i = a[0].match(/([0-9]+)/g)[0]
        }
        let o;
        try {
            o = parseInt(i)
        } catch {
            return null
        }
        let s = t.get(o);
        return s !== void 0 ? new mo(o, s, e.logs) : (s = G_.get(o), s !== void 0 ? new mo(o, s, e.logs) : null)
    }
    get program() {
        var e;
        return (e = this._programErrorStack) === null || e === void 0 ? void 0 : e.stack[this._programErrorStack.stack.length - 1]
    }
    get programErrorStack() {
        var e;
        return (e = this._programErrorStack) === null || e === void 0 ? void 0 : e.stack
    }
    toString() {
        return this.msg
    }
}

function ep(r, e) {
    uc("debug-logs");
    const t = hi.parse(r.logs);
    if (t) return t;
    const n = mo.parse(r, e);
    if (n) return n;
    if (r.logs) {
        const i = {
            get: function (o, s) {
                return s === "programErrorStack" ? o.programErrorStack.stack : s === "program" ? o.programErrorStack.stack[r.programErrorStack.stack.length - 1] : Reflect.get(...arguments)
            }
        };
        return r.programErrorStack = Ti.parse(r.logs), new Proxy(r, i)
    }
    return r
}
const ne = {
        InstructionMissing: Cf,
        InstructionFallbackNotFound: Bf,
        InstructionDidNotDeserialize: Mf,
        InstructionDidNotSerialize: Pf,
        IdlInstructionStub: Lf,
        IdlInstructionInvalidProgram: Uf,
        IdlAccountNotEmpty: Df,
        EventInstructionStub: Ff,
        ConstraintMut: Hf,
        ConstraintHasOne: zf,
        ConstraintSigner: Kf,
        ConstraintRaw: $f,
        ConstraintOwner: Wf,
        ConstraintRentExempt: qf,
        ConstraintSeeds: Vf,
        ConstraintExecutable: Gf,
        ConstraintState: jf,
        ConstraintAssociated: Zf,
        ConstraintAssociatedInit: Yf,
        ConstraintClose: Xf,
        ConstraintAddress: Jf,
        ConstraintZero: Qf,
        ConstraintTokenMint: eh,
        ConstraintTokenOwner: th,
        ConstraintMintMintAuthority: nh,
        ConstraintMintFreezeAuthority: rh,
        ConstraintMintDecimals: ih,
        ConstraintSpace: oh,
        ConstraintAccountIsNone: sh,
        ConstraintTokenTokenProgram: ah,
        ConstraintMintTokenProgram: ch,
        ConstraintAssociatedTokenTokenProgram: uh,
        ConstraintMintGroupPointerExtension: lh,
        ConstraintMintGroupPointerExtensionAuthority: dh,
        ConstraintMintGroupPointerExtensionGroupAddress: fh,
        ConstraintMintGroupMemberPointerExtension: hh,
        ConstraintMintGroupMemberPointerExtensionAuthority: ph,
        ConstraintMintGroupMemberPointerExtensionMemberAddress: yh,
        ConstraintMintMetadataPointerExtension: mh,
        ConstraintMintMetadataPointerExtensionAuthority: gh,
        ConstraintMintMetadataPointerExtensionMetadataAddress: wh,
        ConstraintMintCloseAuthorityExtension: bh,
        ConstraintMintCloseAuthorityExtensionAuthority: _h,
        ConstraintMintPermanentDelegateExtension: Eh,
        ConstraintMintPermanentDelegateExtensionDelegate: vh,
        ConstraintMintTransferHookExtension: Rh,
        ConstraintMintTransferHookExtensionAuthority: Ah,
        ConstraintMintTransferHookExtensionProgramId: kh,
        RequireViolated: Sh,
        RequireEqViolated: Of,
        RequireKeysEqViolated: Ih,
        RequireNeqViolated: xh,
        RequireKeysNeqViolated: Th,
        RequireGtViolated: Oh,
        RequireGteViolated: Nh,
        AccountDiscriminatorAlreadySet: Ch,
        AccountDiscriminatorNotFound: Bh,
        AccountDiscriminatorMismatch: Mh,
        AccountDidNotDeserialize: Ph,
        AccountDidNotSerialize: Lh,
        AccountNotEnoughKeys: Uh,
        AccountNotMutable: Dh,
        AccountOwnedByWrongProgram: Fh,
        InvalidProgramId: Hh,
        InvalidProgramExecutable: zh,
        AccountNotSigner: Kh,
        AccountNotSystemOwned: $h,
        AccountNotInitialized: Wh,
        AccountNotProgramData: qh,
        AccountNotAssociatedTokenAccount: Vh,
        AccountSysvarMismatch: Gh,
        AccountReallocExceedsLimit: jh,
        AccountDuplicateReallocs: Zh,
        DeclaredProgramIdMismatch: Yh,
        TryingToInitPayerAsProgramAccount: Xh,
        InvalidNumericConversion: Jh,
        Deprecated: Nf
    },
    G_ = new Map([
        [ne.InstructionMissing, "Instruction discriminator not provided"],
        [ne.InstructionFallbackNotFound, "Fallback functions are not supported"],
        [ne.InstructionDidNotDeserialize, "The program could not deserialize the given instruction"],
        [ne.InstructionDidNotSerialize, "The program could not serialize the given instruction"],
        [ne.IdlInstructionStub, "The program was compiled without idl instructions"],
        [ne.IdlInstructionInvalidProgram, "The transaction was given an invalid program for the IDL instruction"],
        [ne.IdlAccountNotEmpty, "IDL account must be empty in order to resize, try closing first"],
        [ne.EventInstructionStub, "The program was compiled without `event-cpi` feature"],
        [ne.ConstraintMut, "A mut constraint was violated"],
        [ne.ConstraintHasOne, "A has one constraint was violated"],
        [ne.ConstraintSigner, "A signer constraint was violated"],
        [ne.ConstraintRaw, "A raw constraint was violated"],
        [ne.ConstraintOwner, "An owner constraint was violated"],
        [ne.ConstraintRentExempt, "A rent exemption constraint was violated"],
        [ne.ConstraintSeeds, "A seeds constraint was violated"],
        [ne.ConstraintExecutable, "An executable constraint was violated"],
        [ne.ConstraintState, "Deprecated Error, feel free to replace with something else"],
        [ne.ConstraintAssociated, "An associated constraint was violated"],
        [ne.ConstraintAssociatedInit, "An associated init constraint was violated"],
        [ne.ConstraintClose, "A close constraint was violated"],
        [ne.ConstraintAddress, "An address constraint was violated"],
        [ne.ConstraintZero, "Expected zero account discriminant"],
        [ne.ConstraintTokenMint, "A token mint constraint was violated"],
        [ne.ConstraintTokenOwner, "A token owner constraint was violated"],
        [ne.ConstraintMintMintAuthority, "A mint mint authority constraint was violated"],
        [ne.ConstraintMintFreezeAuthority, "A mint freeze authority constraint was violated"],
        [ne.ConstraintMintDecimals, "A mint decimals constraint was violated"],
        [ne.ConstraintSpace, "A space constraint was violated"],
        [ne.ConstraintAccountIsNone, "A required account for the constraint is None"],
        [ne.ConstraintTokenTokenProgram, "A token account token program constraint was violated"],
        [ne.ConstraintMintTokenProgram, "A mint token program constraint was violated"],
        [ne.ConstraintAssociatedTokenTokenProgram, "An associated token account token program constraint was violated"],
        [ne.ConstraintMintGroupPointerExtension, "A group pointer extension constraint was violated"],
        [ne.ConstraintMintGroupPointerExtensionAuthority, "A group pointer extension authority constraint was violated"],
        [ne.ConstraintMintGroupPointerExtensionGroupAddress, "A group pointer extension group address constraint was violated"],
        [ne.ConstraintMintGroupMemberPointerExtension, "A group member pointer extension constraint was violated"],
        [ne.ConstraintMintGroupMemberPointerExtensionAuthority, "A group member pointer extension authority constraint was violated"],
        [ne.ConstraintMintGroupMemberPointerExtensionMemberAddress, "A group member pointer extension group address constraint was violated"],
        [ne.ConstraintMintMetadataPointerExtension, "A metadata pointer extension constraint was violated"],
        [ne.ConstraintMintMetadataPointerExtensionAuthority, "A metadata pointer extension authority constraint was violated"],
        [ne.ConstraintMintMetadataPointerExtensionMetadataAddress, "A metadata pointer extension metadata address constraint was violated"],
        [ne.ConstraintMintCloseAuthorityExtension, "A close authority constraint was violated"],
        [ne.ConstraintMintCloseAuthorityExtensionAuthority, "A close authority extension authority constraint was violated"],
        [ne.ConstraintMintPermanentDelegateExtension, "A permanent delegate extension constraint was violated"],
        [ne.ConstraintMintPermanentDelegateExtensionDelegate, "A permanent delegate extension delegate constraint was violated"],
        [ne.ConstraintMintTransferHookExtension, "A transfer hook extension constraint was violated"],
        [ne.ConstraintMintTransferHookExtensionAuthority, "A transfer hook extension authority constraint was violated"],
        [ne.ConstraintMintTransferHookExtensionProgramId, "A transfer hook extension transfer hook program id constraint was violated"],
        [ne.RequireViolated, "A require expression was violated"],
        [ne.RequireEqViolated, "A require_eq expression was violated"],
        [ne.RequireKeysEqViolated, "A require_keys_eq expression was violated"],
        [ne.RequireNeqViolated, "A require_neq expression was violated"],
        [ne.RequireKeysNeqViolated, "A require_keys_neq expression was violated"],
        [ne.RequireGtViolated, "A require_gt expression was violated"],
        [ne.RequireGteViolated, "A require_gte expression was violated"],
        [ne.AccountDiscriminatorAlreadySet, "The account discriminator was already set on this account"],
        [ne.AccountDiscriminatorNotFound, "No discriminator was found on the account"],
        [ne.AccountDiscriminatorMismatch, "Account discriminator did not match what was expected"],
        [ne.AccountDidNotDeserialize, "Failed to deserialize the account"],
        [ne.AccountDidNotSerialize, "Failed to serialize the account"],
        [ne.AccountNotEnoughKeys, "Not enough account keys given to the instruction"],
        [ne.AccountNotMutable, "The given account is not mutable"],
        [ne.AccountOwnedByWrongProgram, "The given account is owned by a different program than expected"],
        [ne.InvalidProgramId, "Program ID was not as expected"],
        [ne.InvalidProgramExecutable, "Program account is not executable"],
        [ne.AccountNotSigner, "The given account did not sign"],
        [ne.AccountNotSystemOwned, "The given account is not owned by the system program"],
        [ne.AccountNotInitialized, "The program expected this account to be already initialized"],
        [ne.AccountNotProgramData, "The given account is not a program data account"],
        [ne.AccountNotAssociatedTokenAccount, "The given account is not the associated token account"],
        [ne.AccountSysvarMismatch, "The given public key does not match the required sysvar"],
        [ne.AccountReallocExceedsLimit, "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit"],
        [ne.AccountDuplicateReallocs, "The account was duplicated for more than one reallocation"],
        [ne.DeclaredProgramIdMismatch, "The declared program id does not match the actual program id"],
        [ne.TryingToInitPayerAsProgramAccount, "You cannot/should not initialize the payer account as a program account"],
        [ne.InvalidNumericConversion, "The program could not perform the numeric conversion, out of range integral type conversion attempted"],
        [ne.Deprecated, "The API being used is deprecated and should no longer be used"]
    ]);
class Ie {
    static fieldLayout(e, t = [], n) {
        const i = e.name;
        switch (e.type) {
            case "bool":
                return me.bool(i);
            case "u8":
                return me.u8(i);
            case "i8":
                return me.i8(i);
            case "u16":
                return me.u16(i);
            case "i16":
                return me.i16(i);
            case "u32":
                return me.u32(i);
            case "i32":
                return me.i32(i);
            case "f32":
                return me.f32(i);
            case "u64":
                return me.u64(i);
            case "i64":
                return me.i64(i);
            case "f64":
                return me.f64(i);
            case "u128":
                return me.u128(i);
            case "i128":
                return me.i128(i);
            case "u256":
                return me.u256(i);
            case "i256":
                return me.i256(i);
            case "bytes":
                return me.vecU8(i);
            case "string":
                return me.str(i);
            case "pubkey":
                return me.publicKey(i);
            default: {
                if ("option" in e.type) return me.option(Ie.fieldLayout({
                    type: e.type.option
                }, t, n), i);
                if ("vec" in e.type) return me.vec(Ie.fieldLayout({
                    type: e.type.vec
                }, t, n), i);
                if ("array" in e.type) {
                    let [o, s] = e.type.array;
                    return s = Ie.resolveArrayLen(s, n), me.array(Ie.fieldLayout({
                        type: o
                    }, t, n), s, i)
                }
                if ("defined" in e.type) {
                    if (!t) throw new Kn("User defined types not provided");
                    const o = e.type.defined.name,
                        s = t.find(a => a.name === o);
                    if (!s) throw new Kn(`Type not found: ${e.name}`);
                    return Ie.typeDefLayout({
                        typeDef: s,
                        types: t,
                        genericArgs: n ?? e.type.defined.generics,
                        name: i
                    })
                }
                if ("generic" in e.type) {
                    const o = n == null ? void 0 : n.at(0);
                    if ((o == null ? void 0 : o.kind) !== "type") throw new Kn(`Invalid generic field: ${e.name}`);
                    return Ie.fieldLayout({
                        ...e,
                        type: o.type
                    }, t)
                }
                throw new Kn(`Not yet implemented: ${JSON.stringify(e.type)}`)
            }
        }
    }
    static typeDefLayout({
        typeDef: e,
        types: t,
        name: n,
        genericArgs: i
    }) {
        switch (e.type.kind) {
            case "struct": {
                const o = Nr(e.type.fields, () => [], s => s.map(a => {
                    const u = i && Ie.resolveGenericArgs({
                        type: a.type,
                        typeDef: e,
                        genericArgs: i
                    });
                    return Ie.fieldLayout(a, t, u)
                }), s => s.map((a, u) => {
                    const d = i && Ie.resolveGenericArgs({
                        type: a,
                        typeDef: e,
                        genericArgs: i
                    });
                    return Ie.fieldLayout({
                        name: u.toString(),
                        type: a
                    }, t, d)
                }));
                return me.struct(o, n)
            }
            case "enum": {
                const o = e.type.variants.map(s => {
                    const a = Nr(s.fields, () => [], u => u.map(d => {
                        const l = i && Ie.resolveGenericArgs({
                            type: d.type,
                            typeDef: e,
                            genericArgs: i
                        });
                        return Ie.fieldLayout(d, t, l)
                    }), u => u.map((d, l) => {
                        const b = i && Ie.resolveGenericArgs({
                            type: d,
                            typeDef: e,
                            genericArgs: i
                        });
                        return Ie.fieldLayout({
                            name: l.toString(),
                            type: d
                        }, t, b)
                    }));
                    return me.struct(a, s.name)
                });
                return n !== void 0 ? me.rustEnum(o).replicate(n) : me.rustEnum(o, n)
            }
            case "type":
                return Ie.fieldLayout({
                    type: e.type.alias,
                    name: n
                }, t)
        }
    }
    static typeSize(e, t, n) {
        var i;
        switch (e) {
            case "bool":
                return 1;
            case "u8":
                return 1;
            case "i8":
                return 1;
            case "i16":
                return 2;
            case "u16":
                return 2;
            case "u32":
                return 4;
            case "i32":
                return 4;
            case "f32":
                return 4;
            case "u64":
                return 8;
            case "i64":
                return 8;
            case "f64":
                return 8;
            case "u128":
                return 16;
            case "i128":
                return 16;
            case "u256":
                return 32;
            case "i256":
                return 32;
            case "bytes":
                return 1;
            case "string":
                return 1;
            case "pubkey":
                return 32;
            default:
                if ("option" in e) return 1 + Ie.typeSize(e.option, t, n);
                if ("coption" in e) return 4 + Ie.typeSize(e.coption, t, n);
                if ("vec" in e) return 1;
                if ("array" in e) {
                    let [o, s] = e.array;
                    return s = Ie.resolveArrayLen(s, n), Ie.typeSize(o, t, n) * s
                }
                if ("defined" in e) {
                    const o = (i = t.types) === null || i === void 0 ? void 0 : i.find(a => a.name === e.defined.name);
                    if (!o) throw new Kn(`Type not found: ${JSON.stringify(e)}`);
                    const s = a => {
                        const u = n ?? e.defined.generics,
                            d = u && Ie.resolveGenericArgs({
                                type: a,
                                typeDef: o,
                                genericArgs: u
                            });
                        return Ie.typeSize(a, t, d)
                    };
                    switch (o.type.kind) {
                        case "struct":
                            return Nr(o.type.fields, () => [0], a => a.map(u => s(u.type)), a => a.map(u => s(u))).reduce((a, u) => a + u, 0);
                        case "enum": {
                            const a = o.type.variants.map(u => Nr(u.fields, () => [0], d => d.map(l => s(l.type)), d => d.map(l => s(l))).reduce((d, l) => d + l, 0));
                            return Math.max(...a) + 1
                        }
                        case "type":
                            return Ie.typeSize(o.type.alias, t, n)
                    }
                }
                if ("generic" in e) {
                    const o = n == null ? void 0 : n.at(0);
                    if ((o == null ? void 0 : o.kind) !== "type") throw new Kn(`Invalid generic: ${e.generic}`);
                    return Ie.typeSize(o.type, t, n)
                }
                throw new Error(`Invalid type ${JSON.stringify(e)}`)
        }
    }
    static resolveArrayLen(e, t) {
        if (typeof e == "number") return e;
        if (t) {
            const n = t.find(i => i.kind === "const");
            (n == null ? void 0 : n.kind) === "const" && (e = +n.value)
        }
        if (typeof e != "number") throw new Kn("Generic array length did not resolve");
        return e
    }
    static resolveGenericArgs({
        type: e,
        typeDef: t,
        genericArgs: n,
        isDefined: i
    }) {
        if (typeof e != "object") return null;
        for (const o in t.generics) {
            const s = t.generics[o];
            if ("generic" in e && s.name === e.generic) return [n[o]];
            if ("option" in e) {
                const a = Ie.resolveGenericArgs({
                    type: e.option,
                    typeDef: t,
                    genericArgs: n,
                    isDefined: i
                });
                if (!a || !i) return a;
                if (a[0].kind === "type") return [{
                    kind: "type",
                    type: {
                        option: a[0].type
                    }
                }]
            }
            if ("vec" in e) {
                const a = Ie.resolveGenericArgs({
                    type: e.vec,
                    typeDef: t,
                    genericArgs: n,
                    isDefined: i
                });
                if (!a || !i) return a;
                if (a[0].kind === "type") return [{
                    kind: "type",
                    type: {
                        vec: a[0].type
                    }
                }]
            }
            if ("array" in e) {
                const [a, u] = e.array, d = typeof u == "object", l = Ie.resolveGenericArgs({
                    type: a,
                    typeDef: t,
                    genericArgs: n,
                    isDefined: i
                }) || [];
                if (d) {
                    const b = t.generics.findIndex(S => S.name === u.generic);
                    b !== -1 && l.push(n[b])
                }
                if (l.length > 0) {
                    if (!i) return l;
                    if (l[0].kind === "type" && l[1].kind === "const") return [{
                        kind: "type",
                        type: {
                            array: [l[0].type, +l[1].value]
                        }
                    }]
                }
                if (d && s.name === u.generic) {
                    const b = n[o];
                    return i ? [{
                        kind: "type",
                        type: {
                            array: [a, +b.value]
                        }
                    }] : [b]
                }
                return null
            }
            if ("defined" in e) return e.defined.generics ? e.defined.generics.flatMap(a => {
                switch (a.kind) {
                    case "type":
                        return Ie.resolveGenericArgs({
                            type: a.type,
                            typeDef: t,
                            genericArgs: n,
                            isDefined: !0
                        });
                    case "const":
                        return [a]
                }
            }).filter(a => a !== null) : null
        }
        return null
    }
}
class j_ {
    constructor(e) {
        this.idl = e;
        const t = e.instructions.map(n => {
            const i = n.name,
                o = n.args.map(a => Ie.fieldLayout(a, e.types)),
                s = me.struct(o, i);
            return [i, {
                discriminator: n.discriminator,
                layout: s
            }]
        });
        this.ixLayouts = new Map(t)
    }
    encode(e, t) {
        const n = se.alloc(1e3),
            i = this.ixLayouts.get(e);
        if (!i) throw new Error(`Unknown method: ${e}`);
        const o = i.layout.encode(t, n),
            s = n.slice(0, o);
        return se.concat([se.from(i.discriminator), s])
    }
    decode(e, t = "hex") {
        typeof e == "string" && (e = t === "hex" ? se.from(e, "hex") : ot.decode(e));
        for (const [n, i] of this.ixLayouts) {
            const o = e.subarray(0, i.discriminator.length);
            if (o.equals(se.from(i.discriminator))) return {
                name: n,
                data: i.layout.decode(e.subarray(o.length))
            }
        }
        return null
    }
    format(e, t) {
        return qt.format(e, t, this.idl)
    }
}
class qt {
    static format(e, t, n) {
        const i = n.instructions.find(u => e.name === u.name);
        if (!i) return console.error("Invalid instruction given"), null;
        const o = i.args.map(u => ({
                name: u.name,
                type: qt.formatIdlType(u.type),
                data: qt.formatIdlData(u, e.data[u.name], n.types)
            })),
            s = qt.flattenIdlAccounts(i.accounts),
            a = t.map((u, d) => d < s.length ? {
                name: s[d].name,
                ...u
            } : {
                name: void 0,
                ...u
            });
        return {
            args: o,
            accounts: a
        }
    }
    static formatIdlType(e) {
        if (typeof e == "string") return e;
        if ("option" in e) return `Option<${this.formatIdlType(e.option)}>`;
        if ("coption" in e) return `COption<${this.formatIdlType(e.coption)}>`;
        if ("vec" in e) return `Vec<${this.formatIdlType(e.vec)}>`;
        if ("array" in e) return `Array<${e.array[0]}; ${e.array[1]}>`;
        if ("defined" in e) {
            const t = e.defined.name;
            if (e.defined.generics) {
                const n = e.defined.generics.map(i => {
                    switch (i.kind) {
                        case "type":
                            return qt.formatIdlType(i.type);
                        case "const":
                            return i.value
                    }
                }).join(", ");
                return `${t}<${n}>`
            }
            return t
        }
        throw new Error(`Unknown IDL type: ${e}`)
    }
    static formatIdlData(e, t, n) {
        if (typeof e.type == "string") return t.toString();
        if ("vec" in e.type) return "[" + t.map(i => this.formatIdlData({
            name: "",
            type: e.type.vec
        }, i, n)).join(", ") + "]";
        if ("option" in e.type) return t === null ? "null" : this.formatIdlData({
            name: "",
            type: e.type.option
        }, t, n);
        if ("defined" in e.type) {
            if (!n) throw new Error("User defined types not provided");
            const i = e.type.defined.name,
                o = n.find(s => s.name === i);
            if (!o) throw new Error(`Type not found: ${i}`);
            return qt.formatIdlDataDefined(o, t, n)
        }
        return "unknown"
    }
    static formatIdlDataDefined(e, t, n) {
        switch (e.type.kind) {
            case "struct":
                return "{ " + Nr(e.type.fields, () => "", i => Object.entries(t).map(([o, s]) => {
                    const a = i.find(u => u.name === o);
                    if (!a) throw new Error(`Field not found: ${o}`);
                    return o + ": " + qt.formatIdlData(a, s, n)
                }).join(", "), i => Object.entries(t).map(([o, s]) => o + ": " + qt.formatIdlData({
                    name: "",
                    type: i[o]
                }, s, n)).join(", ")) + " }";
            case "enum": {
                const i = Object.keys(t)[0],
                    o = e.type.variants.find(a => a.name === i);
                if (!o) throw new Error(`Unable to find variant: ${i}`);
                const s = t[i];
                return Nr(o.fields, () => i, a => {
                    const u = Object.keys(s).map(d => {
                        const l = s[d],
                            b = a.find(S => S.name === d);
                        if (!b) throw new Error(`Field not found: ${d}`);
                        return d + ": " + qt.formatIdlData(b, l, n)
                    }).join(", ");
                    return `${i} { ${u} }`
                }, a => {
                    const u = Object.entries(s).map(([d, l]) => d + ": " + qt.formatIdlData({
                        name: "",
                        type: a[d]
                    }, l, n)).join(", ");
                    return `${i} { ${u} }`
                })
            }
            case "type":
                return qt.formatIdlType(e.type.alias)
        }
    }
    static flattenIdlAccounts(e, t) {
        return e.map(n => {
            const i = Z_(n.name);
            if (n.hasOwnProperty("accounts")) {
                const o = t ? `${t} > ${i}` : i;
                return qt.flattenIdlAccounts(n.accounts, o)
            } else return {
                ...n,
                name: t ? `${t} > ${i}` : i
            }
        }).flat()
    }
}

function Z_(r) {
    const e = r.replace(/([A-Z])/g, " $1");
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class Y_ {
    constructor(e) {
        if (this.idl = e, !e.accounts) {
            this.accountLayouts = new Map;
            return
        }
        const t = e.types;
        if (!t) throw new Error("Accounts require `idl.types`");
        const n = e.accounts.map(i => {
            const o = t.find(s => s.name === i.name);
            if (!o) throw new Error(`Account not found: ${i.name}`);
            return [i.name, {
                discriminator: i.discriminator,
                layout: Ie.typeDefLayout({
                    typeDef: o,
                    types: t
                })
            }]
        });
        this.accountLayouts = new Map(n)
    }
    async encode(e, t) {
        const n = se.alloc(1e3),
            i = this.accountLayouts.get(e);
        if (!i) throw new Error(`Unknown account: ${e}`);
        const o = i.layout.encode(t, n),
            s = n.slice(0, o),
            a = this.accountDiscriminator(e);
        return se.concat([a, s])
    }
    decode(e, t) {
        const n = this.accountDiscriminator(e);
        if (n.compare(t.slice(0, n.length))) throw new Error("Invalid account discriminator");
        return this.decodeUnchecked(e, t)
    }
    decodeAny(e) {
        for (const [t, n] of this.accountLayouts)
            if (e.subarray(0, n.discriminator.length).equals(se.from(n.discriminator))) return this.decodeUnchecked(t, e);
        throw new Error("Account not found")
    }
    decodeUnchecked(e, t) {
        const n = this.accountDiscriminator(e),
            i = t.subarray(n.length),
            o = this.accountLayouts.get(e);
        if (!o) throw new Error(`Unknown account: ${e}`);
        return o.layout.decode(i)
    }
    memcmp(e, t) {
        const n = this.accountDiscriminator(e);
        return {
            offset: 0,
            bytes: ot.encode(t ? se.concat([n, t]) : n)
        }
    }
    size(e) {
        return this.accountDiscriminator(e).length + Ie.typeSize({
            defined: {
                name: e
            }
        }, this.idl)
    }
    accountDiscriminator(e) {
        var t;
        const n = (t = this.idl.accounts) === null || t === void 0 ? void 0 : t.find(i => i.name === e);
        if (!n) throw new Error(`Account not found: ${e}`);
        return se.from(n.discriminator)
    }
}
class X_ {
    constructor(e) {
        if (!e.events) {
            this.layouts = new Map;
            return
        }
        const t = e.types;
        if (!t) throw new Error("Events require `idl.types`");
        const n = e.events.map(i => {
            const o = t.find(s => s.name === i.name);
            if (!o) throw new Error(`Event not found: ${i.name}`);
            return [i.name, {
                discriminator: i.discriminator,
                layout: Ie.typeDefLayout({
                    typeDef: o,
                    types: t
                })
            }]
        });
        this.layouts = new Map(n)
    }
    decode(e) {
        let t;
        try {
            t = ic(e)
        } catch {
            return null
        }
        for (const [n, i] of this.layouts) {
            const o = t.subarray(0, i.discriminator.length);
            if (o.equals(se.from(i.discriminator))) return {
                name: n,
                data: i.layout.decode(t.subarray(o.length))
            }
        }
        return null
    }
}
class J_ {
    constructor(e) {
        const t = e.types;
        if (!t) {
            this.typeLayouts = new Map;
            return
        }
        const n = t.filter(i => !i.generics).map(i => [i.name, Ie.typeDefLayout({
            typeDef: i,
            types: t
        })]);
        this.typeLayouts = new Map(n)
    }
    encode(e, t) {
        const n = se.alloc(1e3),
            i = this.typeLayouts.get(e);
        if (!i) throw new Error(`Unknown type: ${e}`);
        const o = i.encode(t, n);
        return n.slice(0, o)
    }
    decode(e, t) {
        const n = this.typeLayouts.get(e);
        if (!n) throw new Error(`Unknown type: ${e}`);
        return n.decode(t)
    }
}
class tp {
    constructor(e) {
        this.instruction = new j_(e), this.accounts = new Y_(e), this.events = new X_(e), this.types = new J_(e)
    }
}
class $t {
    constructor(e, t) {
        if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
        this.span = e, this.property = t
    }
    makeDestinationObject() {
        return {}
    }
    decode(e, t) {
        throw new Error("Layout is abstract")
    }
    encode(e, t, n) {
        throw new Error("Layout is abstract")
    }
    getSpan(e, t) {
        if (0 > this.span) throw new RangeError("indeterminate span");
        return this.span
    }
    replicate(e) {
        const t = Object.create(this.constructor.prototype);
        return Object.assign(t, this), t.property = e, t
    }
    fromArray(e) {}
}
var Ko = $t;

function Q_(r, e) {
    return e.property ? r + "[" + e.property + "]" : r
}
class ur extends $t {
    isCount() {
        throw new Error("ExternalLayout is abstract")
    }
}
class np extends ur {
    constructor(e, t, n) {
        if (!(e instanceof $t)) throw new TypeError("layout must be a Layout");
        if (t === void 0) t = 0;
        else if (!Number.isInteger(t)) throw new TypeError("offset must be integer or undefined");
        super(e.span, n || e.property), this.layout = e, this.offset = t
    }
    isCount() {
        return this.layout instanceof $o || this.layout instanceof rp
    }
    decode(e, t) {
        return t === void 0 && (t = 0), this.layout.decode(e, t + this.offset)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), this.layout.encode(e, t, n + this.offset)
    }
}
class $o extends $t {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readUIntLE(t, this.span)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeUIntLE(e, n, this.span), this.span
    }
}
class rp extends $t {
    constructor(e, t) {
        if (super(e, t), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t) {
        return t === void 0 && (t = 0), e.readUIntBE(t, this.span)
    }
    encode(e, t, n) {
        return n === void 0 && (n = 0), t.writeUIntBE(e, n, this.span), this.span
    }
}
const ca = Math.pow(2, 32);

function ip(r) {
    const e = Math.floor(r / ca),
        t = r - e * ca;
    return {
        hi32: e,
        lo32: t
    }
}

function op(r, e) {
    return r * ca + e
}
class eE extends $t {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.readUInt32LE(t),
            i = e.readUInt32LE(t + 4);
        return op(i, n)
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = ip(e);
        return t.writeUInt32LE(i.lo32, n), t.writeUInt32LE(i.hi32, n + 4), 8
    }
}
class tE extends $t {
    constructor(e) {
        super(8, e)
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = e.readUInt32LE(t),
            i = e.readInt32LE(t + 4);
        return op(i, n)
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = ip(e);
        return t.writeUInt32LE(i.lo32, n), t.writeInt32LE(i.hi32, n + 4), 8
    }
}
class nE extends $t {
    constructor(e, t, n) {
        if (!(Array.isArray(e) && e.reduce((o, s) => o && s instanceof $t, !0))) throw new TypeError("fields must be array of Layout instances");
        typeof t == "boolean" && n === void 0 && (n = t, t = void 0);
        for (const o of e)
            if (0 > o.span && o.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
        let i = -1;
        try {
            i = e.reduce((o, s) => o + s.getSpan(), 0)
        } catch {}
        super(i, t), this.fields = e, this.decodePrefixes = !!n
    }
    getSpan(e, t) {
        if (0 <= this.span) return this.span;
        t === void 0 && (t = 0);
        let n = 0;
        try {
            n = this.fields.reduce((i, o) => {
                const s = o.getSpan(e, t);
                return t += s, i + s
            }, 0)
        } catch {
            throw new RangeError("indeterminate span")
        }
        return n
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        const n = this.makeDestinationObject();
        for (const i of this.fields)
            if (i.property !== void 0 && (n[i.property] = i.decode(e, t)), t += i.getSpan(e, t), this.decodePrefixes && e.length === t) break;
        return n
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = n;
        let o = 0,
            s = 0;
        for (const a of this.fields) {
            let u = a.span;
            if (s = 0 < u ? u : 0, a.property !== void 0) {
                const d = e[a.property];
                d !== void 0 && (s = a.encode(d, t, n), 0 > u && (u = a.getSpan(t, n)))
            }
            o = n, n += u
        }
        return o + s - i
    }
    fromArray(e) {
        const t = this.makeDestinationObject();
        for (const n of this.fields) n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
        return t
    }
    layoutFor(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        for (const t of this.fields)
            if (t.property === e) return t
    }
    offsetOf(e) {
        if (typeof e != "string") throw new TypeError("property must be string");
        let t = 0;
        for (const n of this.fields) {
            if (n.property === e) return t;
            0 > n.span ? t = -1 : 0 <= t && (t += n.span)
        }
    }
}
class sp {
    constructor(e) {
        this.property = e
    }
    decode() {
        throw new Error("UnionDiscriminator is abstract")
    }
    encode() {
        throw new Error("UnionDiscriminator is abstract")
    }
}
class Wu extends sp {
    constructor(e, t) {
        if (!(e instanceof ur && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(t || e.property || "variant"), this.layout = e
    }
    decode(e, t) {
        return this.layout.decode(e, t)
    }
    encode(e, t, n) {
        return this.layout.encode(e, t, n)
    }
}
class ap extends $t {
    constructor(e, t, n) {
        const i = e instanceof $o || e instanceof rp;
        if (i) e = new Wu(new np(e));
        else if (e instanceof ur && e.isCount()) e = new Wu(e);
        else if (!(e instanceof sp)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (t === void 0 && (t = null), !(t === null || t instanceof $t)) throw new TypeError("defaultLayout must be null or a Layout");
        if (t !== null) {
            if (0 > t.span) throw new Error("defaultLayout must have constant span");
            t.property === void 0 && (t = t.replicate("content"))
        }
        let o = -1;
        t && (o = t.span, 0 <= o && i && (o += e.layout.span)), super(o, n), this.discriminator = e, this.usesPrefixDiscriminator = i, this.defaultLayout = t, this.registry = {};
        let s = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function (a) {
            return s(a)
        }, this.configGetSourceVariant = function (a) {
            s = a.bind(this)
        }
    }
    getSpan(e, t) {
        if (0 <= this.span) return this.span;
        t === void 0 && (t = 0);
        const n = this.getVariant(e, t);
        if (!n) throw new Error("unable to determine span for unrecognized variant");
        return n.getSpan(e, t)
    }
    defaultGetSourceVariant(e) {
        if (e.hasOwnProperty(this.discriminator.property)) {
            if (this.defaultLayout && e.hasOwnProperty(this.defaultLayout.property)) return;
            const t = this.registry[e[this.discriminator.property]];
            if (t && (!t.layout || e.hasOwnProperty(t.property))) return t
        } else
            for (const t in this.registry) {
                const n = this.registry[t];
                if (e.hasOwnProperty(n.property)) return n
            }
        throw new Error("unable to infer src variant")
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        let n;
        const i = this.discriminator,
            o = i.decode(e, t);
        let s = this.registry[o];
        if (s === void 0) {
            let a = 0;
            s = this.defaultLayout, this.usesPrefixDiscriminator && (a = i.layout.span), n = this.makeDestinationObject(), n[i.property] = o, n[s.property] = this.defaultLayout.decode(e, t + a)
        } else n = s.decode(e, t);
        return n
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        const i = this.getSourceVariant(e);
        if (i === void 0) {
            const o = this.discriminator,
                s = this.defaultLayout;
            let a = 0;
            return this.usesPrefixDiscriminator && (a = o.layout.span), o.encode(e[o.property], t, n), a + s.encode(e[s.property], t, n + a)
        }
        return i.encode(e, t, n)
    }
    addVariant(e, t, n) {
        const i = new rE(this, e, t, n);
        return this.registry[e] = i, i
    }
    getVariant(e, t) {
        let n = e;
        return he.isBuffer(e) && (t === void 0 && (t = 0), n = this.discriminator.decode(e, t)), this.registry[n]
    }
}
class rE extends $t {
    constructor(e, t, n, i) {
        if (!(e instanceof ap)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(t) || 0 > t) throw new TypeError("variant must be a (non-negative) integer");
        if (typeof n == "string" && i === void 0 && (i = n, n = null), n) {
            if (!(n instanceof $t)) throw new TypeError("layout must be a Layout");
            if (e.defaultLayout !== null && 0 <= n.span && n.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
            if (typeof i != "string") throw new TypeError("variant must have a String property")
        }
        let o = e.span;
        0 > e.span && (o = n ? n.span : 0, 0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)), super(o, i), this.union = e, this.variant = t, this.layout = n || null
    }
    getSpan(e, t) {
        if (0 <= this.span) return this.span;
        t === void 0 && (t = 0);
        let n = 0;
        return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), n + this.layout.getSpan(e, t + n)
    }
    decode(e, t) {
        const n = this.makeDestinationObject();
        if (t === void 0 && (t = 0), this !== this.union.getVariant(e, t)) throw new Error("variant mismatch");
        let i = 0;
        return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(e, t + i) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n
    }
    encode(e, t, n) {
        n === void 0 && (n = 0);
        let i = 0;
        if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout && !e.hasOwnProperty(this.property)) throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, t, n);
        let o = i;
        if (this.layout && (this.layout.encode(e[this.property], t, n + i), o += this.layout.getSpan(t, n + i), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
        return o
    }
    fromArray(e) {
        if (this.layout) return this.layout.fromArray(e)
    }
}
class iE extends $t {
    constructor(e, t) {
        if (!(e instanceof ur && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let n = -1;
        e instanceof ur || (n = e), super(n, t), this.length = e
    }
    getSpan(e, t) {
        let n = this.span;
        return 0 > n && (n = this.length.decode(e, t)), n
    }
    decode(e, t) {
        t === void 0 && (t = 0);
        let n = this.span;
        return 0 > n && (n = this.length.decode(e, t)), e.slice(t, t + n)
    }
    encode(e, t, n) {
        let i = this.length;
        if (this.length instanceof ur && (i = e.length), !(he.isBuffer(e) && i === e.length)) throw new TypeError(Q_("Blob.encode", this) + " requires (length " + i + ") Buffer as src");
        if (n + i > t.length) throw new RangeError("encoding overruns Buffer");
        return t.write(e.toString("hex"), n, i, "hex"), this.length instanceof ur && this.length.encode(i, t, n), i
    }
}
var oE = (r, e, t) => new np(r, e, t),
    sE = r => new $o(1, r),
    Mn = r => new $o(4, r),
    aE = r => new eE(r),
    Ln = r => new tE(r),
    vt = (r, e, t) => new nE(r, e, t),
    cp = (r, e, t) => new ap(r, e, t),
    Oi = (r, e) => new iE(r, e);
class cE extends Ko {
    constructor(e) {
        super(-1, e), this.property = e, this.layout = vt([Mn("length"), Mn("lengthPadding"), Oi(oE(Mn(), -8), "chars")], this.property)
    }
    encode(e, t, n = 0) {
        if (e == null) return this.layout.span;
        const i = {
            chars: he.from(e, "utf8")
        };
        return this.layout.encode(i, t, n)
    }
    decode(e, t = 0) {
        return this.layout.decode(e, t).chars.toString()
    }
    getSpan(e, t = 0) {
        return Mn().span + Mn().span + new Nn(new Uint8Array(e).slice(t, t + 4), 10, "le").toNumber()
    }
}

function Wo(r) {
    return new cE(r)
}

function rn(r) {
    return Oi(32, r)
}
const Yt = cp(Mn("instruction"));
Yt.addVariant(0, vt([Ln("lamports"), Ln("space"), rn("owner")]), "createAccount");
Yt.addVariant(1, vt([rn("owner")]), "assign");
Yt.addVariant(2, vt([Ln("lamports")]), "transfer");
Yt.addVariant(3, vt([rn("base"), Wo("seed"), Ln("lamports"), Ln("space"), rn("owner")]), "createAccountWithSeed");
Yt.addVariant(4, vt([rn("authorized")]), "advanceNonceAccount");
Yt.addVariant(5, vt([Ln("lamports")]), "withdrawNonceAccount");
Yt.addVariant(6, vt([rn("authorized")]), "initializeNonceAccount");
Yt.addVariant(7, vt([rn("authorized")]), "authorizeNonceAccount");
Yt.addVariant(8, vt([Ln("space")]), "allocate");
Yt.addVariant(9, vt([rn("base"), Wo("seed"), Ln("space"), rn("owner")]), "allocateWithSeed");
Yt.addVariant(10, vt([rn("base"), Wo("seed"), rn("owner")]), "assignWithSeed");
Yt.addVariant(11, vt([Ln("lamports"), Wo("seed"), rn("owner")]), "transferWithSeed");
Math.max(...Object.values(Yt.registry).map(r => r.span));
class uE extends Ko {
    constructor(e, t, n, i) {
        super(e.span, i), this.layout = e, this.decoder = t, this.encoder = n
    }
    decode(e, t) {
        return this.decoder(this.layout.decode(e, t))
    }
    encode(e, t, n) {
        return this.layout.encode(this.encoder(e), t, n)
    }
    getSpan(e, t) {
        return this.layout.getSpan(e, t)
    }
}

function qu(r) {
    return new uE(Oi(32), e => new j(e), e => e.toBuffer(), r)
}
vt([Mn("version"), Mn("state"), qu("authorizedPubkey"), qu("nonce"), vt([aE("lamportsPerSignature")], "feeCalculator")]);

function lE(r) {
    return new TextDecoder().decode(no(r))
}
var dE = Object.freeze({
    __proto__: null,
    hash: lE
});

function fE(r, e, t) {
    const n = se.concat([r.toBuffer(), se.from(e), t.toBuffer()]);
    return new j(no(n))
}
var hE = Object.freeze({
    __proto__: null,
    createWithSeedSync: fE
});
const up = new j("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
    lp = new j("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");

function pE({
    mint: r,
    owner: e
}) {
    return j.findProgramAddressSync([e.toBuffer(), up.toBuffer(), r.toBuffer()], lp)[0]
}
var yE = Object.freeze({
        __proto__: null,
        TOKEN_PROGRAM_ID: up,
        ASSOCIATED_PROGRAM_ID: lp,
        associatedAddress: pE
    }),
    ua = {
        exports: {}
    };
(function (r, e) {
    var t = typeof self < "u" ? self : K_,
        n = function () {
            function o() {
                this.fetch = !1, this.DOMException = t.DOMException
            }
            return o.prototype = t, new o
        }();
    (function (o) {
        (function (s) {
            var a = {
                searchParams: "URLSearchParams" in o,
                iterable: "Symbol" in o && "iterator" in Symbol,
                blob: "FileReader" in o && "Blob" in o && function () {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in o,
                arrayBuffer: "ArrayBuffer" in o
            };

            function u(c) {
                return c && DataView.prototype.isPrototypeOf(c)
            }
            if (a.arrayBuffer) var d = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                l = ArrayBuffer.isView || function (c) {
                    return c && d.indexOf(Object.prototype.toString.call(c)) > -1
                };

            function b(c) {
                if (typeof c != "string" && (c = String(c)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(c)) throw new TypeError("Invalid character in header field name");
                return c.toLowerCase()
            }

            function S(c) {
                return typeof c != "string" && (c = String(c)), c
            }

            function m(c) {
                var f = {
                    next: function () {
                        var g = c.shift();
                        return {
                            done: g === void 0,
                            value: g
                        }
                    }
                };
                return a.iterable && (f[Symbol.iterator] = function () {
                    return f
                }), f
            }

            function v(c) {
                this.map = {}, c instanceof v ? c.forEach(function (f, g) {
                    this.append(g, f)
                }, this) : Array.isArray(c) ? c.forEach(function (f) {
                    this.append(f[0], f[1])
                }, this) : c && Object.getOwnPropertyNames(c).forEach(function (f) {
                    this.append(f, c[f])
                }, this)
            }
            v.prototype.append = function (c, f) {
                c = b(c), f = S(f);
                var g = this.map[c];
                this.map[c] = g ? g + ", " + f : f
            }, v.prototype.delete = function (c) {
                delete this.map[b(c)]
            }, v.prototype.get = function (c) {
                return c = b(c), this.has(c) ? this.map[c] : null
            }, v.prototype.has = function (c) {
                return this.map.hasOwnProperty(b(c))
            }, v.prototype.set = function (c, f) {
                this.map[b(c)] = S(f)
            }, v.prototype.forEach = function (c, f) {
                for (var g in this.map) this.map.hasOwnProperty(g) && c.call(f, this.map[g], g, this)
            }, v.prototype.keys = function () {
                var c = [];
                return this.forEach(function (f, g) {
                    c.push(g)
                }), m(c)
            }, v.prototype.values = function () {
                var c = [];
                return this.forEach(function (f) {
                    c.push(f)
                }), m(c)
            }, v.prototype.entries = function () {
                var c = [];
                return this.forEach(function (f, g) {
                    c.push([g, f])
                }), m(c)
            }, a.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);

            function T(c) {
                if (c.bodyUsed) return Promise.reject(new TypeError("Already read"));
                c.bodyUsed = !0
            }

            function R(c) {
                return new Promise(function (f, g) {
                    c.onload = function () {
                        f(c.result)
                    }, c.onerror = function () {
                        g(c.error)
                    }
                })
            }

            function N(c) {
                var f = new FileReader,
                    g = R(f);
                return f.readAsArrayBuffer(c), g
            }

            function $(c) {
                var f = new FileReader,
                    g = R(f);
                return f.readAsText(c), g
            }

            function P(c) {
                for (var f = new Uint8Array(c), g = new Array(f.length), E = 0; E < f.length; E++) g[E] = String.fromCharCode(f[E]);
                return g.join("")
            }

            function K(c) {
                if (c.slice) return c.slice(0);
                var f = new Uint8Array(c.byteLength);
                return f.set(new Uint8Array(c)), f.buffer
            }

            function U() {
                return this.bodyUsed = !1, this._initBody = function (c) {
                    this._bodyInit = c, c ? typeof c == "string" ? this._bodyText = c : a.blob && Blob.prototype.isPrototypeOf(c) ? this._bodyBlob = c : a.formData && FormData.prototype.isPrototypeOf(c) ? this._bodyFormData = c : a.searchParams && URLSearchParams.prototype.isPrototypeOf(c) ? this._bodyText = c.toString() : a.arrayBuffer && a.blob && u(c) ? (this._bodyArrayBuffer = K(c.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(c) || l(c)) ? this._bodyArrayBuffer = K(c) : this._bodyText = c = Object.prototype.toString.call(c) : this._bodyText = "", this.headers.get("content-type") || (typeof c == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(c) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, a.blob && (this.blob = function () {
                    var c = T(this);
                    if (c) return c;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function () {
                    return this._bodyArrayBuffer ? T(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(N)
                }), this.text = function () {
                    var c = T(this);
                    if (c) return c;
                    if (this._bodyBlob) return $(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(P(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, a.formData && (this.formData = function () {
                    return this.text().then(L)
                }), this.json = function () {
                    return this.text().then(JSON.parse)
                }, this
            }
            var Y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function G(c) {
                var f = c.toUpperCase();
                return Y.indexOf(f) > -1 ? f : c
            }

            function Z(c, f) {
                f = f || {};
                var g = f.body;
                if (c instanceof Z) {
                    if (c.bodyUsed) throw new TypeError("Already read");
                    this.url = c.url, this.credentials = c.credentials, f.headers || (this.headers = new v(c.headers)), this.method = c.method, this.mode = c.mode, this.signal = c.signal, !g && c._bodyInit != null && (g = c._bodyInit, c.bodyUsed = !0)
                } else this.url = String(c);
                if (this.credentials = f.credentials || this.credentials || "same-origin", (f.headers || !this.headers) && (this.headers = new v(f.headers)), this.method = G(f.method || this.method || "GET"), this.mode = f.mode || this.mode || null, this.signal = f.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && g) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(g)
            }
            Z.prototype.clone = function () {
                return new Z(this, {
                    body: this._bodyInit
                })
            };

            function L(c) {
                var f = new FormData;
                return c.trim().split("&").forEach(function (g) {
                    if (g) {
                        var E = g.split("="),
                            k = E.shift().replace(/\+/g, " "),
                            O = E.join("=").replace(/\+/g, " ");
                        f.append(decodeURIComponent(k), decodeURIComponent(O))
                    }
                }), f
            }

            function q(c) {
                var f = new v,
                    g = c.replace(/\r?\n[\t ]+/g, " ");
                return g.split(/\r?\n/).forEach(function (E) {
                    var k = E.split(":"),
                        O = k.shift().trim();
                    if (O) {
                        var C = k.join(":").trim();
                        f.append(O, C)
                    }
                }), f
            }
            U.call(Z.prototype);

            function M(c, f) {
                f || (f = {}), this.type = "default", this.status = f.status === void 0 ? 200 : f.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in f ? f.statusText : "OK", this.headers = new v(f.headers), this.url = f.url || "", this._initBody(c)
            }
            U.call(M.prototype), M.prototype.clone = function () {
                return new M(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new v(this.headers),
                    url: this.url
                })
            }, M.error = function () {
                var c = new M(null, {
                    status: 0,
                    statusText: ""
                });
                return c.type = "error", c
            };
            var D = [301, 302, 303, 307, 308];
            M.redirect = function (c, f) {
                if (D.indexOf(f) === -1) throw new RangeError("Invalid status code");
                return new M(null, {
                    status: f,
                    headers: {
                        location: c
                    }
                })
            }, s.DOMException = o.DOMException;
            try {
                new s.DOMException
            } catch {
                s.DOMException = function (f, g) {
                    this.message = f, this.name = g;
                    var E = Error(f);
                    this.stack = E.stack
                }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
            }

            function w(c, f) {
                return new Promise(function (g, E) {
                    var k = new Z(c, f);
                    if (k.signal && k.signal.aborted) return E(new s.DOMException("Aborted", "AbortError"));
                    var O = new XMLHttpRequest;

                    function C() {
                        O.abort()
                    }
                    O.onload = function () {
                        var A = {
                            status: O.status,
                            statusText: O.statusText,
                            headers: q(O.getAllResponseHeaders() || "")
                        };
                        A.url = "responseURL" in O ? O.responseURL : A.headers.get("X-Request-URL");
                        var y = "response" in O ? O.response : O.responseText;
                        g(new M(y, A))
                    }, O.onerror = function () {
                        E(new TypeError("Network request failed"))
                    }, O.ontimeout = function () {
                        E(new TypeError("Network request failed"))
                    }, O.onabort = function () {
                        E(new s.DOMException("Aborted", "AbortError"))
                    }, O.open(k.method, k.url, !0), k.credentials === "include" ? O.withCredentials = !0 : k.credentials === "omit" && (O.withCredentials = !1), "responseType" in O && a.blob && (O.responseType = "blob"), k.headers.forEach(function (A, y) {
                        O.setRequestHeader(y, A)
                    }), k.signal && (k.signal.addEventListener("abort", C), O.onreadystatechange = function () {
                        O.readyState === 4 && k.signal.removeEventListener("abort", C)
                    }), O.send(typeof k._bodyInit > "u" ? null : k._bodyInit)
                })
            }
            return w.polyfill = !0, o.fetch || (o.fetch = w, o.Headers = v, o.Request = Z, o.Response = M), s.Headers = v, s.Request = Z, s.Response = M, s.fetch = w, Object.defineProperty(s, "__esModule", {
                value: !0
            }), s
        })({})
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = n;
    e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, r.exports = e
})(ua, ua.exports);
var mE = $_(ua.exports);
async function gE(r, e, t = 5) {
    const n = `https://api.apr.dev/api/v0/program/${e.toString()}/latest?limit=${t}`,
        [i, o] = await Promise.all([dp(r, e), mE(n)]),
        s = (await o.json()).filter(u => !u.aborted && u.state === "Built" && u.verified === "Verified");
    if (s.length === 0) return null;
    const a = s[0];
    return i.slot.toNumber() !== a.verified_slot ? null : a
}
async function dp(r, e) {
    const t = await r.getAccountInfo(e);
    if (t === null) throw new Error("program account not found");
    const {
        program: n
    } = la(t.data), i = await r.getAccountInfo(n.programdataAddress);
    if (i === null) throw new Error("program data account not found");
    const {
        programData: o
    } = la(i.data);
    return o
}
const wE = me.rustEnum([me.struct([], "uninitialized"), me.struct([me.option(me.publicKey(), "authorityAddress")], "buffer"), me.struct([me.publicKey("programdataAddress")], "program"), me.struct([me.u64("slot"), me.option(me.publicKey(), "upgradeAuthorityAddress")], "programData")], void 0, me.u32());

function la(r) {
    return wE.decode(r)
}
var bE = Object.freeze({
        __proto__: null,
        verifiedBuild: gE,
        fetchData: dp,
        decodeUpgradeableLoaderState: la
    }),
    gR = Object.freeze({
        __proto__: null,
        sha256: dE,
        rpc: H_,
        publicKey: hE,
        bytes: g_,
        token: yE,
        features: V_,
        registry: bE
    });
const da = "Program log: ",
    fp = "Program data: ",
    _E = da.length,
    EE = fp.length;
class vE {
    constructor(e, t, n) {
        this._programId = e, this._provider = t, this._eventParser = new hp(e, n), this._eventCallbacks = new Map, this._eventListeners = new Map, this._listenerIdCount = 0
    }
    addEventListener(e, t, n) {
        var i;
        let o = this._listenerIdCount;
        return this._listenerIdCount += 1, this._eventListeners.has(e) || this._eventListeners.set(e, []), this._eventListeners.set(e, ((i = this._eventListeners.get(e)) !== null && i !== void 0 ? i : []).concat(o)), this._eventCallbacks.set(o, [e, t]), this._onLogsSubscriptionId !== void 0 || (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (s, a) => {
            if (!s.err)
                for (const u of this._eventParser.parseLogs(s.logs)) {
                    const d = this._eventListeners.get(u.name);
                    d && d.forEach(l => {
                        const b = this._eventCallbacks.get(l);
                        if (b) {
                            const [, S] = b;
                            S(u.data, a.slot, s.signature)
                        }
                    })
                }
        }, n)), o
    }
    async removeEventListener(e) {
        const t = this._eventCallbacks.get(e);
        if (!t) throw new Error(`Event listener ${e} doesn't exist!`);
        const [n] = t;
        let i = this._eventListeners.get(n);
        if (!i) throw new Error(`Event listeners don't exist for ${n}!`);
        if (this._eventCallbacks.delete(e), i = i.filter(o => o !== e), this._eventListeners.set(n, i), i.length === 0 && this._eventListeners.delete(n), this._eventCallbacks.size === 0) {
            if (this._eventListeners.size !== 0) throw new Error(`Expected event listeners size to be 0 but got ${this._eventListeners.size}`);
            this._onLogsSubscriptionId !== void 0 && (await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId), this._onLogsSubscriptionId = void 0)
        }
    }
}
class hp {
    constructor(e, t) {
        this.coder = t, this.programId = e
    }* parseLogs(e, t = !1) {
        const n = new AE(e),
            i = new RE;
        let o = n.next();
        for (; o !== null;) {
            let [s, a, u] = this.handleLog(i, o, t);
            s && (yield s), a && i.push(a), u && i.pop(), o = n.next()
        }
    }
    handleLog(e, t, n) {
        return e.stack.length > 0 && e.program() === this.programId.toString() ? this.handleProgramLog(t, n) : [null, ...this.handleSystemLog(t)]
    }
    handleProgramLog(e, t) {
        if (e.startsWith(da) || e.startsWith(fp)) {
            const n = e.startsWith(da) ? e.slice(_E) : e.slice(EE),
                i = this.coder.events.decode(n);
            if (t && i === null) throw new Error(`Unable to decode event ${n}`);
            return [i, null, !1]
        } else return [null, ...this.handleSystemLog(e)]
    }
    handleSystemLog(e) {
        const t = e.split(":")[0];
        return t.match(/^Program (.*) success/g) !== null ? [null, !0] : t.startsWith(`Program ${this.programId.toString()} invoke`) ? [this.programId.toString(), !1] : t.includes("invoke") ? ["cpi", !1] : [null, !1]
    }
}
class RE {
    constructor() {
        this.stack = []
    }
    program() {
        if (!this.stack.length) throw new Error("Expected the stack to have elements");
        return this.stack[this.stack.length - 1]
    }
    push(e) {
        this.stack.push(e)
    }
    pop() {
        if (!this.stack.length) throw new Error("Expected the stack to have elements");
        this.stack.pop()
    }
}
class AE {
    constructor(e) {
        this.logs = e
    }
    next() {
        if (this.logs.length === 0) return null;
        let e = this.logs[0];
        return this.logs = this.logs.slice(1), e
    }
}

function qo(r, e) {
    var t, n;
    let i = {};
    const o = r.args ? r.args.length : 0;
    if (e.length > o) {
        if (e.length !== o + 1) throw new Error(`provided too many arguments ${e} to instruction ${r==null?void 0:r.name} expecting: ${(n=(t=r.args)===null||t===void 0?void 0:t.map(s=>s.name))!==null&&n!==void 0?n:[]}`);
        i = e.pop()
    }
    return [e, i]
}
class go {
    static build(e, t, n) {
        if (e.name === "_inner") throw new Kn("the _inner name is reserved");
        const i = (...o) => {
            const [s, a] = qo(e, [...o]);
            kf(e.accounts, a.accounts), kE(e, ...o);
            const u = i.accounts(a.accounts);
            return a.remainingAccounts !== void 0 && u.push(...a.remainingAccounts), uc("debug-logs"), new Oe({
                keys: u,
                programId: n,
                data: t(e.name, A_(e, ...s))
            })
        };
        return i.accounts = o => go.accountsArray(o, e.accounts, n, e.name), i
    }
    static accountsArray(e, t, n, i) {
        return e ? t.map(o => {
            if ($n(o)) {
                const l = e[o.name];
                return go.accountsArray(l, o.accounts, n, i).flat()
            }
            let s;
            try {
                s = Qt(e[o.name])
            } catch {
                throw new Error(`Wrong input type for account "${o.name}" in the instruction accounts object${i!==void 0?' for instruction "'+i+'"':""}. Expected PublicKey or string.`)
            }
            const a = o.optional && s.equals(n),
                u = !!(o.writable && !a),
                d = !!(o.signer && !a);
            return {
                pubkey: s,
                isWritable: u,
                isSigner: d
            }
        }).flat() : []
    }
}

function kE(r, ...e) {}
class SE {
    static build(e, t) {
        return (...i) => {
            var o, s, a;
            const [, u] = qo(e, [...i]), d = new Ee;
            if (u.preInstructions && u.instructions) throw new Error("instructions is deprecated, use preInstructions");
            return (o = u.preInstructions) === null || o === void 0 || o.forEach(l => d.add(l)), (s = u.instructions) === null || s === void 0 || s.forEach(l => d.add(l)), d.add(t(...i)), (a = u.postInstructions) === null || a === void 0 || a.forEach(l => d.add(l)), d
        }
    }
}
class IE {
    static build(e, t, n, i) {
        return async (...s) => {
            var a;
            const u = t(...s),
                [, d] = qo(e, [...s]);
            if (i.sendAndConfirm === void 0) throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
            try {
                return await i.sendAndConfirm(u, (a = d.signers) !== null && a !== void 0 ? a : [], d.options)
            } catch (l) {
                throw ep(l, n)
            }
        }
    }
}
class xE {
    static build(e, t, n, i) {
        var o;
        return ((o = e.accounts) !== null && o !== void 0 ? o : []).reduce((s, a) => (s[a.name] = new TE(e, a, n, i, t), s), {})
    }
}
class TE {
    get size() {
        return this._size
    }
    get programId() {
        return this._programId
    }
    get provider() {
        return this._provider
    }
    get coder() {
        return this._coder
    }
    constructor(e, t, n, i, o) {
        this._idlAccount = t, this._programId = n, this._provider = i ?? yo(), this._coder = o ?? new tp(e), this._size = this._coder.accounts.size(t.name)
    }
    async fetchNullable(e, t) {
        const {
            data: n
        } = await this.fetchNullableAndContext(e, t);
        return n
    }
    async fetchNullableAndContext(e, t) {
        const n = await this.getAccountInfoAndContext(e, t),
            {
                value: i,
                context: o
            } = n;
        return {
            data: i && i.data.length !== 0 ? this._coder.accounts.decode(this._idlAccount.name, i.data) : null,
            context: o
        }
    }
    async fetch(e, t) {
        const {
            data: n
        } = await this.fetchNullableAndContext(e, t);
        if (n === null) throw new Error(`Account does not exist or has no data ${e.toString()}`);
        return n
    }
    async fetchAndContext(e, t) {
        const {
            data: n,
            context: i
        } = await this.fetchNullableAndContext(e, t);
        if (n === null) throw new Error(`Account does not exist ${e.toString()}`);
        return {
            data: n,
            context: i
        }
    }
    async fetchMultiple(e, t) {
        return (await this.fetchMultipleAndContext(e, t)).map(i => i ? i.data : null)
    }
    async fetchMultipleAndContext(e, t) {
        return (await cc(this._provider.connection, e.map(i => Qt(i)), t)).map(i => {
            if (i == null) return null;
            const {
                account: o,
                context: s
            } = i;
            return {
                data: this._coder.accounts.decode(this._idlAccount.name, o.data),
                context: s
            }
        })
    }
    async all(e) {
        const t = this.coder.accounts.memcmp(this._idlAccount.name, e instanceof he ? e : void 0),
            n = [];
        return (t == null ? void 0 : t.offset) != null && (t == null ? void 0 : t.bytes) != null && n.push({
            memcmp: {
                offset: t.offset,
                bytes: t.bytes
            }
        }), (t == null ? void 0 : t.dataSize) != null && n.push({
            dataSize: t.dataSize
        }), (await this._provider.connection.getProgramAccounts(this._programId, {
            commitment: this._provider.connection.commitment,
            filters: [...n, ...Array.isArray(e) ? e : []]
        })).map(({
            pubkey: o,
            account: s
        }) => ({
            publicKey: o,
            account: this._coder.accounts.decode(this._idlAccount.name, s.data)
        }))
    }
    subscribe(e, t) {
        const n = oi.get(e.toString());
        if (n) return n.ee;
        const i = new s_;
        e = Qt(e);
        const o = this._provider.connection.onAccountChange(e, s => {
            const a = this._coder.accounts.decode(this._idlAccount.name, s.data);
            i.emit("change", a)
        }, t);
        return oi.set(e.toString(), {
            ee: i,
            listener: o
        }), i
    }
    async unsubscribe(e) {
        let t = oi.get(e.toString());
        if (!t) {
            console.warn("Address is not subscribed");
            return
        }
        oi && await this._provider.connection.removeAccountChangeListener(t.listener).then(() => {
            oi.delete(e.toString())
        }).catch(console.error)
    }
    async createInstruction(e, t) {
        const n = this.size;
        if (this._provider.publicKey === void 0) throw new Error("This function requires the Provider interface implementor to have a 'publicKey' field.");
        return st.createAccount({
            fromPubkey: this._provider.publicKey,
            newAccountPubkey: e.publicKey,
            space: t ?? n,
            lamports: await this._provider.connection.getMinimumBalanceForRentExemption(t ?? n),
            programId: this._programId
        })
    }
    async getAccountInfo(e, t) {
        return await this._provider.connection.getAccountInfo(Qt(e), t)
    }
    async getAccountInfoAndContext(e, t) {
        return await this._provider.connection.getAccountInfoAndContext(Qt(e), t)
    }
}
const oi = new Map;
class OE {
    static build(e, t, n, i, o, s, a) {
        return async (...d) => {
            var l;
            const b = t(...d),
                [, S] = qo(e, [...d]);
            let m;
            if (i.simulate === void 0) throw new Error("This function requires 'Provider.simulate' to be implemented.");
            try {
                m = await i.simulate(b, S.signers, (l = S.options) === null || l === void 0 ? void 0 : l.commitment)
            } catch (R) {
                throw ep(R, n)
            }
            if (m === void 0) throw new Error("Unable to simulate transaction");
            const v = m.logs;
            if (!v) throw new Error("Simulated logs not found");
            const T = [];
            if (a.events) {
                let R = new hp(s, o);
                for (const N of R.parseLogs(v)) T.push(N)
            }
            return {
                events: T,
                raw: v
            }
        }
    }
}

function zs(r) {
    return new pp(Oi(8), e => CE.fromBuffer(e), e => e.toBuffer(), r)
}

function ji(r) {
    return new pp(Oi(32), e => new j(e), e => e.toBuffer(), r)
}

function Ks(r, e) {
    return new NE(r, e)
}
class pp extends Ko {
    constructor(e, t, n, i) {
        super(e.span, i), this.layout = e, this.decoder = t, this.encoder = n
    }
    decode(e, t) {
        return this.decoder(this.layout.decode(e, t))
    }
    encode(e, t, n) {
        return this.layout.encode(this.encoder(e), t, n)
    }
    getSpan(e, t) {
        return this.layout.getSpan(e, t)
    }
}
class NE extends Ko {
    constructor(e, t) {
        super(-1, t), this.layout = e, this.discriminator = Mn()
    }
    encode(e, t, n = 0) {
        return e == null ? this.layout.span + this.discriminator.encode(0, t, n) : (this.discriminator.encode(1, t, n), this.layout.encode(e, t, n + 4) + 4)
    }
    decode(e, t = 0) {
        const n = this.discriminator.decode(e, t);
        if (n === 0) return null;
        if (n === 1) return this.layout.decode(e, t + 4);
        throw new Error("Invalid coption " + this.layout.property)
    }
    getSpan(e, t = 0) {
        return this.layout.getSpan(e, t + 4) + 4
    }
}
let CE = class yp extends Nn {
    toBuffer() {
        const e = super.toArray().reverse(),
            t = he.from(e);
        if (t.length === 8) return t;
        if (t.length >= 8) throw new Error("u64 too large");
        const n = he.alloc(8);
        return t.copy(n), n
    }
    static fromBuffer(e) {
        if (e.length !== 8) throw new Error(`Invalid buffer length: ${e.length}`);
        return new yp([...e].reverse().map(t => `00${t.toString(16)}`.slice(-2)).join(""), 16)
    }
};
const BE = vt([ji("mint"), ji("owner"), zs("amount"), Ks(ji(), "delegate"), (r => {
    const e = cp(sE("discriminator"), null, r);
    return e.addVariant(0, vt([]), "uninitialized"), e.addVariant(1, vt([]), "initialized"), e.addVariant(2, vt([]), "frozen"), e
})("state"), Ks(zs(), "isNative"), zs("delegatedAmount"), Ks(ji(), "closeAuthority")]);

function ME(r) {
    return BE.decode(r)
}
class PE {
    constructor(e, t, n, i, o, s, a, u) {
        this._args = e, this._accounts = t, this._provider = n, this._programId = i, this._idlIx = o, this._idlTypes = a, this._customResolver = u, this._accountStore = new LE(n, s, i)
    }
    args(e) {
        this._args = e
    }
    async resolve() {
        this.resolveEventCpi(this._idlIx.accounts), this.resolveConst(this._idlIx.accounts);
        let e = 0;
        for (; await this.resolvePdasAndRelations(this._idlIx.accounts) + await this.resolveCustom() > 0;)
            if (e++, e === 16) {
                const t = s => $n(s) ? s.accounts.some(t) : !!(s.address || s.pda || s.relations),
                    n = (s, a = [], u = []) => {
                        for (const d of s) $n(d) ? u.push(...n(d.accounts, [...a, d.name])) : u.push([...a, d.name]);
                        return u
                    },
                    i = this._idlIx.accounts.filter(t),
                    o = n(i).filter(s => !this.get(s)).map(s => s.reduce((a, u) => a + "." + u)).map(s => `\`${s}\``).join(", ");
                throw new Error(["Reached maximum depth for account resolution.", `Unresolved accounts: ${o}`].join(" "))
            }
    }
    resolveOptionals(e) {
        Object.assign(this._accounts, this.resolveOptionalsHelper(e, this._idlIx.accounts))
    }
    get(e) {
        const t = e.reduce((n, i) => n && n[i], this._accounts);
        if (t && t.toBase58) return t
    }
    set(e, t) {
        let n = this._accounts;
        e.forEach((i, o) => {
            var s;
            o === e.length - 1 && (n[i] = t), n[i] = (s = n[i]) !== null && s !== void 0 ? s : {}, n = n[i]
        })
    }
    resolveOptionalsHelper(e, t) {
        const n = {};
        for (const i of t) {
            const o = i.name,
                s = e[o];
            s !== void 0 && (mp(s) ? $n(i) ? n[o] = this.resolveOptionalsHelper(s, i.accounts) : n[o] = gp(s) : s !== null ? n[o] = Qt(s) : i.optional && (n[o] = this._programId))
        }
        return n
    }
    async resolveCustom() {
        if (this._customResolver) {
            const {
                accounts: e,
                resolved: t
            } = await this._customResolver({
                args: this._args,
                accounts: this._accounts,
                provider: this._provider,
                programId: this._programId,
                idlIx: this._idlIx
            });
            return this._accounts = e, t
        }
        return 0
    }
    resolveEventCpi(e, t = []) {
        for (const n in e) {
            const i = e[n];
            $n(i) && this.resolveEventCpi(i.accounts, [...t, i.name]);
            const o = +n + 1;
            if (o === e.length) return;
            const s = e[n].name,
                a = e[o].name;
            if (s === "eventAuthority" && a === "program") {
                const u = [...t, s],
                    d = [...t, a];
                this.get(u) || this.set(u, j.findProgramAddressSync([he.from("__event_authority")], this._programId)[0]), this.get(d) || this.set(d, this._programId);
                return
            }
        }
    }
    resolveConst(e, t = []) {
        for (const n of e) {
            const i = n.name;
            if ($n(n)) this.resolveConst(n.accounts, [...t, i]);
            else {
                const o = n;
                if ((o.signer || o.address) && !this.get([...t, i])) {
                    if (o.signer) {
                        if (!this._provider.publicKey) throw new Error("This function requires the `Provider` interface implementor to have a `publicKey` field.");
                        this.set([...t, i], this._provider.publicKey)
                    }
                    o.address && this.set([...t, i], Qt(o.address))
                }
            }
        }
    }
    async resolvePdasAndRelations(e, t = []) {
        let n = 0;
        for (const i of e) {
            const o = i.name;
            if ($n(i)) n += await this.resolvePdasAndRelations(i.accounts, [...t, o]);
            else {
                const s = i;
                if ((s.pda || s.relations) && !this.get([...t, o])) {
                    n++;
                    try {
                        if (s.pda) {
                            const a = await Promise.all(s.pda.seeds.map(l => this.toBuffer(l, t)));
                            if (a.some(l => !l)) continue;
                            const u = await this.parseProgramId(s, t),
                                [d] = j.findProgramAddressSync(a, u);
                            this.set([...t, o], d)
                        }
                    } catch {}
                    try {
                        if (s.relations) {
                            const a = this.get([...t, s.relations[0]]);
                            if (a) {
                                const u = await this._accountStore.fetchAccount({
                                    publicKey: a
                                });
                                this.set([...t, o], u[o])
                            }
                        }
                    } catch {}
                }
            }
        }
        return n
    }
    async parseProgramId(e, t = []) {
        var n;
        if (!(!((n = e.pda) === null || n === void 0) && n.program)) return this._programId;
        const i = await this.toBuffer(e.pda.program, t);
        if (!i) throw new Error(`Program seed not resolved: ${e.name}`);
        return new j(i)
    }
    async toBuffer(e, t = []) {
        switch (e.kind) {
            case "const":
                return this.toBufferConst(e);
            case "arg":
                return await this.toBufferArg(e);
            case "account":
                return await this.toBufferAccount(e, t);
            default:
                throw new Error(`Unexpected seed: ${e}`)
        }
    }
    toBufferConst(e) {
        return this.toBufferValue("bytes", e.value)
    }
    async toBufferArg(e) {
        const [t, ...n] = e.path.split("."), i = this._idlIx.args.findIndex(a => a.name === t);
        if (i === -1) throw new Error(`Unable to find argument for seed: ${t}`);
        const o = n.reduce((a, u) => (a ?? {})[u], this._args[i]);
        if (o === void 0) return;
        const s = this.getType(this._idlIx.args[i].type, n);
        return this.toBufferValue(s, o)
    }
    async toBufferAccount(e, t = []) {
        const [n, ...i] = e.path.split("."), o = this.get([...t, n]);
        if (!o) return;
        if (!i.length) return this.toBufferValue("pubkey", o);
        if (!e.account) throw new Error(`Seed account is required in order to resolve type: ${e.path}`);
        let a = await this._accountStore.fetchAccount({
                publicKey: o,
                name: e.account
            }),
            u = i;
        for (; u.length > 0;) a = a[u[0]], u = u.slice(1);
        if (a === void 0) return;
        const d = this.getType({
            defined: {
                name: e.account
            }
        }, i);
        return this.toBufferValue(d, a)
    }
    toBufferValue(e, t) {
        switch (e) {
            case "u8":
            case "i8":
                return he.from([t]);
            case "u16":
            case "i16":
                return new Nn(t).toArrayLike(he, "le", 2);
            case "u32":
            case "i32":
                return new Nn(t).toArrayLike(he, "le", 4);
            case "u64":
            case "i64":
                return new Nn(t).toArrayLike(he, "le", 8);
            case "u128":
            case "i128":
                return new Nn(t).toArrayLike(he, "le", 16);
            case "u256":
            case "i256":
                return new Nn(t).toArrayLike(he, "le", 32);
            case "string":
                return he.from(t);
            case "pubkey":
                return t.toBuffer();
            case "bytes":
                return he.from(t);
            default:
                if (e != null && e.array) return he.from(t);
                throw new Error(`Unexpected seed type: ${e}`)
        }
    }
    getType(e, t = []) {
        var n;
        const i = (n = e == null ? void 0 : e.defined) === null || n === void 0 ? void 0 : n.name;
        if (i) {
            if (i === "tokenAccount") switch (t.at(0)) {
                case "mint":
                case "owner":
                    return "pubkey";
                case "amount":
                case "delagatedAmount":
                    return "u64";
                default:
                    throw new Error(`Unknown token account path: ${t}`)
            }
            const o = this._idlTypes.find(l => l.name === i);
            if (!o) throw new Error(`Type not found: ${i}`);
            const [s, ...a] = t, d = o.type.fields.find(l => l.name === s);
            if (!d) throw new Error(`Field not found: ${s}`);
            return this.getType(d.type, a)
        }
        return e
    }
}
class LE {
    constructor(e, t, n) {
        this._provider = e, this._cache = new Map, this._idls = {}, this._idls[n.toBase58()] = t
    }
    async fetchAccount({
        publicKey: e,
        name: t
    }) {
        const n = e.toBase58();
        if (!this._cache.has(n)) {
            const i = await this._provider.connection.getAccountInfo(e);
            if (i === null) throw new Error(`Account not found: ${n}`);
            if (t === "tokenAccount") {
                const o = ME(i.data);
                this._cache.set(n, o)
            } else {
                const o = await this.getAccountsNs(i.owner);
                if (o) {
                    const s = Object.values(o)[0];
                    if (s) {
                        const a = s.coder.accounts.decodeAny(i.data);
                        this._cache.set(n, a)
                    }
                }
            }
        }
        return this._cache.get(n)
    }
    async getAccountsNs(e) {
        const t = e.toBase58();
        if (!this._idls[t]) {
            const n = await Kr.fetchIdl(e, this._provider);
            if (n) {
                const i = new Kr(n, this._provider);
                this._idls[t] = i.account
            }
        }
        return this._idls[t]
    }
}
class UE {
    static build(e, t, n, i, o, s, a, u, d, l, b) {
        return (...S) => new DE(S, i, o, s, a, u, e, t, n, d, l, b)
    }
}

function mp(r) {
    return typeof r == "object" && r !== null && !("_bn" in r)
}

function gp(r, e) {
    const t = {};
    for (const n in r) {
        const i = r[n];
        if (i === null) throw new Error("Failed to resolve optionals due to IDL type mismatch with input accounts!");
        t[n] = mp(i) ? gp(i) : Qt(i)
    }
    return t
}
class DE {
    constructor(e, t, n, i, o, s, a, u, d, l, b, S) {
        this._args = e, this._ixFn = t, this._txFn = n, this._rpcFn = i, this._simulateFn = o, this._viewFn = s, this._accounts = {}, this._remainingAccounts = [], this._signers = [], this._preInstructions = [], this._postInstructions = [], this._resolveAccounts = !0, this._accountsResolver = new PE(e, this._accounts, a, u, d, l, b, S)
    }
    args(e) {
        this._args = e, this._accountsResolver.args(e)
    }
    accounts(e) {
        return this.accountsPartial(e)
    }
    accountsPartial(e) {
        return this._resolveAccounts = !0, this._accountsResolver.resolveOptionals(e), this
    }
    accountsStrict(e) {
        return this._resolveAccounts = !1, this._accountsResolver.resolveOptionals(e), this
    }
    signers(e) {
        return this._signers = this._signers.concat(e), this
    }
    remainingAccounts(e) {
        return this._remainingAccounts = this._remainingAccounts.concat(e), this
    }
    preInstructions(e, t = !1) {
        return t ? this._preInstructions = e.concat(this._preInstructions) : this._preInstructions = this._preInstructions.concat(e), this
    }
    postInstructions(e) {
        return this._postInstructions = this._postInstructions.concat(e), this
    }
    async pubkeys() {
        return this._resolveAccounts && await this._accountsResolver.resolve(), this._accounts
    }
    async instruction() {
        return this._resolveAccounts && await this._accountsResolver.resolve(), this._ixFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions
        })
    }
    async transaction() {
        return this._resolveAccounts && await this._accountsResolver.resolve(), this._txFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions
        })
    }
    async simulate(e) {
        return this._resolveAccounts && await this._accountsResolver.resolve(), this._simulateFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
            options: e
        })
    }
    async view(e) {
        if (this._resolveAccounts && await this._accountsResolver.resolve(), !this._viewFn) throw new Error(["Method does not support views.", "The instruction should return a value, and its accounts must be read-only"].join(" "));
        return this._viewFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
            options: e
        })
    }
    async rpc(e) {
        return this._resolveAccounts && await this._accountsResolver.resolve(), this._rpcFn(...this._args, {
            accounts: this._accounts,
            signers: this._signers,
            remainingAccounts: this._remainingAccounts,
            preInstructions: this._preInstructions,
            postInstructions: this._postInstructions,
            options: e
        })
    }
    async rpcAndKeys(e) {
        return {
            signature: await this.rpc(e),
            pubkeys: await this.pubkeys()
        }
    }
    async prepare() {
        return {
            instruction: await this.instruction(),
            signers: this._signers,
            pubkeys: await this.pubkeys()
        }
    }
}
class FE {
    static build(e, t, n, i) {
        const o = t.accounts.find(u => u.writable),
            s = !!t.returns;
        return o || !s ? void 0 : async (...u) => {
            let d = await n(...u);
            const l = `Program return: ${e} `;
            let b = d.raw.find(T => T.startsWith(l));
            if (!b) throw new Error("View expected return log");
            let S = ic(b.slice(l.length)),
                m = t.returns;
            if (!m) throw new Error("View expected return type");
            return Ie.fieldLayout({
                type: m
            }, i.types).decode(S)
        }
    }
}
class HE {
    static build(e, t, n, i, o) {
        const s = {},
            a = {},
            u = {},
            d = {},
            l = {},
            b = {},
            S = R_(e),
            m = e.accounts ? xE.build(e, t, n, i) : {};
        return e.instructions.forEach(v => {
            const T = go.build(v, (Y, G) => t.instruction.encode(Y, G), n),
                R = SE.build(v, T),
                N = IE.build(v, R, S, i),
                $ = OE.build(v, R, S, i, t, n, e),
                P = FE.build(n, v, $, e),
                K = UE.build(i, n, v, T, R, N, $, P, m, e.types || [], o == null ? void 0 : o(v)),
                U = v.name;
            a[U] = T, u[U] = R, s[U] = N, d[U] = $, l[U] = K, P && (b[U] = P)
        }), [s, a, u, m, d, l, b]
    }
}
class Kr {
    get programId() {
        return this._programId
    }
    get idl() {
        return this._idl
    }
    get rawIdl() {
        return this._rawIdl
    }
    get coder() {
        return this._coder
    }
    get provider() {
        return this._provider
    }
    constructor(e, t = yo(), n, i) {
        this._idl = v_(e), this._rawIdl = e, this._provider = t, this._programId = Qt(e.address), this._coder = n ?? new tp(this._idl), this._events = new vE(this._programId, t, this._coder);
        const [o, s, a, u, d, l, b] = HE.build(this._idl, this._coder, this._programId, t, i);
        this.rpc = o, this.instruction = s, this.transaction = a, this.account = u, this.simulate = d, this.methods = l, this.views = b
    }
    static async at(e, t) {
        const n = Qt(e),
            i = await Kr.fetchIdl(n, t);
        if (!i) throw new Error(`IDL not found for program: ${e.toString()}`);
        return new Kr(i, t)
    }
    static async fetchIdl(e, t) {
        t = t ?? yo();
        const n = Qt(e),
            i = await w_(n),
            o = await t.connection.getAccountInfo(i);
        if (!o) return null;
        let s = E_(o.data.slice(8));
        const a = i_(s.data);
        return JSON.parse(Af(a))
    }
    addEventListener(e, t, n) {
        return this._events.addEventListener(e, t, n)
    }
    async removeEventListener(e) {
        return await this._events.removeEventListener(e)
    }
}
new j("11111111111111111111111111111111");
let Vu = !1;
class zE {
    constructor(e) {
        Ae(this, "connection");
        Ae(this, "provider");
        Ae(this, "anchorProvider");
        this.connection = e, this.init()
    }
    init() {
        var e;
        if (!Vu) {
            Vu = !0;
            const t = (e = window.okxwallet) == null ? void 0 : e.solana;
            if (!t || !t.isOkxWallet) {
                console.error("Okx Uninstall");
                return
            }
            t.on("accountChanged", n => {
                n ? window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: n.toString()
                })) : window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: ""
                }))
            }), t.on("connect", n => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: n.toString()
                }))
            }), t.on("disconnect", () => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: ""
                }))
            })
        }
    }
    get hasWallet() {
        var t;
        const e = (t = window.okxwallet) == null ? void 0 : t.solana;
        return !!e && e.isOkxWallet
    }
    get mobileUrl() {
        let e = new URL(window.location.href);
        (e.hostname === "localhost" || e.hostname.startsWith("192.")) && (e = new URL("https://devppp.ppp.fun"));
        const t = localStorage.getItem("refCode") || "";
        return e.searchParams.set("ref", t), Dp(e.href), "https://www.okx.com/download?deeplink=" + encodeURIComponent(`okx://wallet/dapp/url?dappUrl=${e}`)
    }
    getOkxProvider() {
        if ("okxwallet" in window) {
            const e = window.okxwallet;
            if (e.solana) return e.solana
        }
        return window.open("https://chromewebstore.google.com/detail/mcohilncbfahbmgdjkbpemcciiolgcge", "_blank"), null
    }
    async connectWallet() {
        if (this.provider = this.getOkxProvider(), !this.provider) return null;
        try {
            const e = await this.provider.connect();
            return this.anchorProvider = new Jn(this.connection, this.provider, {
                commitment: "confirmed"
            }), e.publicKey.toString()
        } catch (e) {
            return console.error("connectWallet err:", e), null
        }
    }
    async disconnectWallet() {
        if (this.provider) try {
            await this.provider.disconnect(), this.anchorProvider = null
        } catch (e) {
            console.error("disconnectWallet err:", e)
        }
    }
    async confirmTransaction(e) {
        try {
            const t = new Ee().add(...e),
                {
                    blockhash: n
                } = await this.connection.getLatestBlockhash();
            t.recentBlockhash = n, t.feePayer = this.provider.publicKey;
            const i = await this.provider.signTransaction(t),
                o = await this.connection.sendRawTransaction(i.serialize());
            return await this.connection.confirmTransaction(o, "confirmed")
        } catch (t) {
            throw console.error("Failed:", t), t
        }
    }
    async signMessage(e) {
        const t = new TextEncoder().encode(e),
            n = await this.provider.signMessage(t);
        return n.publicKey = this.provider.publicKey, n
    }
}

function KE({
    client: r,
    isSolana: e,
    connectOnly: t
}) {
    let n = new URL(window.location.href);
    (n.hostname === "localhost" || n.hostname.startsWith("192.")) && (n = new URL("https://devppp.ppp.fun"));
    const i = localStorage.getItem("refCode") || "";
    return n.searchParams.set("privy_connector", "solana_adapter"), n.searchParams.set("privy_wallet_client", r), n.searchParams.set("privy_connect_only", String(t)), n.searchParams.set("ref", i), encodeURIComponent(n.href.replace(/\/$/g, ""))
}
let Gu = !1;
class $E {
    constructor(e) {
        Ae(this, "connection");
        Ae(this, "provider");
        Ae(this, "anchorProvider", null);
        this.connection = e, this.provider = window.solana, this.init()
    }
    init() {
        if (!Gu) {
            Gu = !0;
            const e = window.solana;
            if (!e) {
                console.error("Phantom Uninstall");
                return
            }
            e.on("connect", t => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: t.toString()
                }))
            }), e.on("disconnect", () => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: ""
                }))
            })
        }
    }
    get hasWallet() {
        return !!window.solana
    }
    get mobileUrl() {
        const e = KE({
            client: "phantom",
            isSolana: !0,
            connectOnly: !1
        });
        return `phantom://browse/${e}?ref=${e}`
    }
    getPhantomProvider() {
        if ("solana" in window) {
            const e = window.solana;
            if (e.isPhantom) return e
        }
        return window.open("https://phantom.app", "_blank"), null
    }
    async connectWallet() {
        if (this.provider = this.getPhantomProvider(), !this.provider) return null;
        try {
            const e = await this.provider.connect();
            return this.anchorProvider = new Jn(this.connection, this.provider, {
                commitment: "confirmed"
            }), e.publicKey.toString()
        } catch (e) {
            return console.error("connectWallet err:", e), null
        }
    }
    async disconnectWallet() {
        if (this.provider) try {
            await this.provider.disconnect(), this.anchorProvider = null
        } catch (e) {
            console.error("disconnectWallet err:", e)
        }
    }
    async confirmTransaction(e) {
        try {
            const t = new Ee().add(...e),
                {
                    blockhash: n
                } = await this.connection.getLatestBlockhash();
            t.recentBlockhash = n, t.feePayer = this.provider.publicKey;
            const i = await this.provider.signTransaction(t),
                o = await this.connection.sendRawTransaction(i.serialize());
            return await this.connection.confirmTransaction(o, "confirmed")
        } catch (t) {
            throw console.error("Failed:", t), t
        }
    }
    async signMessage(e) {
        const t = new TextEncoder().encode(e);
        return await this.provider.signMessage(t)
    }
}
const WE = (r, e = 101) => {
    const t = "bnc://app.binance.com/mp/app",
        n = "yFK5FCqYprrXDiVFbhyRx7",
        i = window.btoa("/pages/browser/index"),
        o = window.btoa(`url=${r}&defaultChainId=${e}`),
        s = `${t}?appId=${n}&startPagePath=${i}&startPageQuery=${o}`;
    return {
        http: `https://app.binance.com/en/download?_dp=${window.btoa(s)}`,
        bnc: s
    }
};
let ju = !1;
class qE {
    constructor(e) {
        Ae(this, "connection");
        Ae(this, "provider");
        Ae(this, "anchorProvider", null);
        this.connection = e, this.provider = window.solana, this.init()
    }
    init() {
        if (!ju) {
            ju = !0;
            const e = window.solana;
            if (!e || !e.isBinance) {
                console.error("Binance Uninstall");
                return
            }
            e.on("connect", (t = "") => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: (this.provider.publicKey || t).toString()
                }))
            }), e.on("disconnect", () => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: ""
                }))
            })
        }
    }
    get hasWallet() {
        const e = window.solana;
        return !!e && e.isBinance
    }
    get mobileUrl() {
        setTimeout(() => {
            window.location.href = "https://www.binance.com/zh-CN/binancewallet"
        }, 500);
        let e = new URL(window.location.href);
        (e.hostname === "localhost" || e.hostname.startsWith("192.")) && (e = new URL("https://devppp.ppp.fun"));
        const t = localStorage.getItem("refCode") || "";
        e.searchParams.set("ref", t);
        const {
            http: n
        } = WE(e.href);
        return n
    }
    getBinanceProvider() {
        if ("solana" in window) {
            const e = window.solana;
            if (e.isBinance) return e
        }
        return window.open("https://www.binance.com/zh-CN/binancewallet", "_blank"), null
    }
    async connectWallet() {
        if (this.provider = this.getBinanceProvider(), !this.provider) return console.error("Binance Uninstall"), null;
        try {
            if (await this.provider.connect(), !this.provider.publicKey) throw new Error("No publicKey");
            return this.anchorProvider = new Jn(this.connection, this.provider, {
                commitment: "confirmed"
            }), this.provider.publicKey
        } catch (e) {
            return console.error("connectWallet err:", e), null
        }
    }
    async disconnectWallet() {
        if (this.provider) try {
            await this.provider.disconnect(), this.anchorProvider = null, window.dispatchEvent(new CustomEvent("accountChanged", {
                detail: ""
            }))
        } catch (e) {
            console.error("disconnectWallet err:", e)
        }
    }
    async confirmTransaction(e) {
        try {
            const t = new Ee().add(...e),
                {
                    blockhash: n
                } = await this.connection.getLatestBlockhash();
            t.recentBlockhash = n, t.feePayer = this.provider.publicKey;
            const i = await this.provider.signTransaction(t),
                o = await this.connection.sendRawTransaction(i.serialize());
            return await this.connection.confirmTransaction(o, "confirmed")
        } catch (t) {
            throw console.error("Failed:", t), t
        }
    }
    async signMessage(e) {
        const t = new TextEncoder().encode(e),
            n = await this.provider.signMessage(t);
        return n.publicKey = this.provider.publicKey, n
    }
}
var Qi = (r => (r.Phantom = "Phantom", r.OkxWallet = "OkxWallet", r.BinanceWallet = "BinanceWallet", r.Tokenpocket = "Tokenpocket", r))(Qi || {});
const Qr = new j("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
    Sr = new j("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),
    Vo = new j("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
    VE = new j("So11111111111111111111111111111111111111112");
new j("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");
const lc = r => {
    const e = r.decode.bind(r),
        t = r.encode.bind(r);
    return {
        decode: e,
        encode: t
    }
};
var Ni = {};
Object.defineProperty(Ni, "__esModule", {
    value: !0
});

function GE(r) {
    {
        const e = he.from(r);
        e.reverse();
        const t = e.toString("hex");
        return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`)
    }
}
var jE = Ni.toBigIntLE = GE;

function ZE(r) {
    {
        const e = r.toString("hex");
        return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`)
    }
}
Ni.toBigIntBE = ZE;

function YE(r, e) {
    {
        const t = r.toString(16),
            n = he.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex");
        return n.reverse(), n
    }
}
var XE = Ni.toBufferLE = YE;

function JE(r, e) {
    {
        const t = r.toString(16);
        return he.from(t.padStart(e * 2, "0").slice(0, e * 2), "hex")
    }
}
Ni.toBufferBE = JE;
const QE = r => e => {
        const t = Pe(r, e),
            {
                encode: n,
                decode: i
            } = lc(t),
            o = t;
        return o.decode = (s, a) => {
            const u = i(s, a);
            return jE(he.from(u))
        }, o.encode = (s, a, u) => {
            const d = XE(s, r);
            return n(d, a, u)
        }, o
    },
    wp = QE(8),
    ev = r => {
        const e = ve(r),
            {
                encode: t,
                decode: n
            } = lc(e),
            i = e;
        return i.decode = (o, s) => !!n(o, s), i.encode = (o, s, a) => {
            const u = Number(o);
            return t(u, s, a)
        }, i
    },
    Zu = r => {
        const e = Pe(32, r),
            {
                encode: t,
                decode: n
            } = lc(e),
            i = e;
        return i.decode = (o, s) => {
            const a = n(o, s);
            return new j(a)
        }, i.encode = (o, s, a) => {
            const u = o.toBuffer();
            return t(u, s, a)
        }, i
    };
class tv extends Error {
    constructor(e) {
        super(e)
    }
}
class bp extends tv {
    constructor() {
        super(...arguments), this.name = "TokenOwnerOffCurveError"
    }
}
var fa;
(function (r) {
    r[r.InitializeMint = 0] = "InitializeMint", r[r.InitializeAccount = 1] = "InitializeAccount", r[r.InitializeMultisig = 2] = "InitializeMultisig", r[r.Transfer = 3] = "Transfer", r[r.Approve = 4] = "Approve", r[r.Revoke = 5] = "Revoke", r[r.SetAuthority = 6] = "SetAuthority", r[r.MintTo = 7] = "MintTo", r[r.Burn = 8] = "Burn", r[r.CloseAccount = 9] = "CloseAccount", r[r.FreezeAccount = 10] = "FreezeAccount", r[r.ThawAccount = 11] = "ThawAccount", r[r.TransferChecked = 12] = "TransferChecked", r[r.ApproveChecked = 13] = "ApproveChecked", r[r.MintToChecked = 14] = "MintToChecked", r[r.BurnChecked = 15] = "BurnChecked", r[r.InitializeAccount2 = 16] = "InitializeAccount2", r[r.SyncNative = 17] = "SyncNative", r[r.InitializeAccount3 = 18] = "InitializeAccount3", r[r.InitializeMultisig2 = 19] = "InitializeMultisig2", r[r.InitializeMint2 = 20] = "InitializeMint2", r[r.GetAccountDataSize = 21] = "GetAccountDataSize", r[r.InitializeImmutableOwner = 22] = "InitializeImmutableOwner", r[r.AmountToUiAmount = 23] = "AmountToUiAmount", r[r.UiAmountToAmount = 24] = "UiAmountToAmount", r[r.InitializeMintCloseAuthority = 25] = "InitializeMintCloseAuthority", r[r.TransferFeeExtension = 26] = "TransferFeeExtension", r[r.ConfidentialTransferExtension = 27] = "ConfidentialTransferExtension", r[r.DefaultAccountStateExtension = 28] = "DefaultAccountStateExtension", r[r.Reallocate = 29] = "Reallocate", r[r.MemoTransferExtension = 30] = "MemoTransferExtension", r[r.CreateNativeMint = 31] = "CreateNativeMint", r[r.InitializeNonTransferableMint = 32] = "InitializeNonTransferableMint", r[r.InterestBearingMintExtension = 33] = "InterestBearingMintExtension", r[r.CpiGuardExtension = 34] = "CpiGuardExtension", r[r.InitializePermanentDelegate = 35] = "InitializePermanentDelegate", r[r.TransferHookExtension = 36] = "TransferHookExtension", r[r.MetadataPointerExtension = 39] = "MetadataPointerExtension", r[r.GroupPointerExtension = 40] = "GroupPointerExtension", r[r.GroupMemberPointerExtension = 41] = "GroupMemberPointerExtension", r[r.ScaledUiAmountExtension = 43] = "ScaledUiAmountExtension", r[r.PausableExtension = 44] = "PausableExtension"
})(fa || (fa = {}));

function nv(r, e, t) {
    if (t.length) {
        r.push({
            pubkey: e,
            isSigner: !1,
            isWritable: !1
        });
        for (const n of t) r.push({
            pubkey: n instanceof j ? n : n.publicKey,
            isSigner: !0,
            isWritable: !1
        })
    } else r.push({
        pubkey: e,
        isSigner: !0,
        isWritable: !1
    });
    return r
}
const Yu = ce([ve("instruction"), wp("amount"), ve("decimals")]);

function rv(r, e, t, n, i, o, s = [], a = Qr) {
    const u = nv([{
            pubkey: r,
            isSigner: !1,
            isWritable: !0
        }, {
            pubkey: e,
            isSigner: !1,
            isWritable: !1
        }, {
            pubkey: t,
            isSigner: !1,
            isWritable: !0
        }], n, s),
        d = he.alloc(Yu.span);
    return Yu.encode({
        instruction: fa.TransferChecked,
        amount: BigInt(i),
        decimals: o
    }, d), new Oe({
        keys: u,
        programId: a,
        data: d
    })
}
const iv = ce([ae("mintAuthorityOption"), Zu("mintAuthority"), wp("supply"), ve("decimals"), ev("isInitialized"), ae("freezeAuthorityOption"), Zu("freezeAuthority")]);
iv.span;
async function Xu(r, e, t = !1, n = Qr, i = Vo) {
    if (!t && !j.isOnCurve(e.toBuffer())) throw new bp;
    const [o] = await j.findProgramAddress([e.toBuffer(), n.toBuffer(), r.toBuffer()], i);
    return o
}

function wR(r, e, t = !1, n = Qr, i = Vo) {
    if (!t && !j.isOnCurve(e.toBuffer())) throw new bp;
    const [o] = j.findProgramAddressSync([e.toBuffer(), n.toBuffer(), r.toBuffer()], i);
    return o
}

function ov(r, e, t, n, i = Qr, o = Vo) {
    return sv(r, e, t, n, he.alloc(0), i, o)
}

function sv(r, e, t, n, i, o = Qr, s = Vo) {
    const a = [{
        pubkey: r,
        isSigner: !0,
        isWritable: !0
    }, {
        pubkey: e,
        isSigner: !1,
        isWritable: !0
    }, {
        pubkey: t,
        isSigner: !1,
        isWritable: !1
    }, {
        pubkey: n,
        isSigner: !1,
        isWritable: !1
    }, {
        pubkey: st.programId,
        isSigner: !1,
        isWritable: !1
    }, {
        pubkey: o,
        isSigner: !1,
        isWritable: !1
    }];
    return new Oe({
        keys: a,
        programId: s,
        data: i
    })
}
const av = "PPP5a1E95YMFv8Rmhvc7PBW6SSfHfvNKfAz7988xvB3",
    cv = {
        name: "pppfun",
        version: "0.1.0",
        spec: "0.1.0",
        description: "Created with Anchor"
    },
    uv = [{
        name: "burn",
        discriminator: [116, 110, 29, 56, 107, 219, 42, 93],
        accounts: [{
            name: "nft",
            writable: !0
        }, {
            name: "authority",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 97, 117, 116, 104]
                }, {
                    kind: "account",
                    path: "project.mint",
                    account: "Project"
                }]
            }
        }, {
            name: "mint"
        }, {
            name: "output_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "account",
                    path: "authority"
                }, {
                    kind: "const",
                    value: [6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169]
                }, {
                    kind: "account",
                    path: "mint"
                }],
                program: {
                    kind: "const",
                    value: [140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89]
                }
            }
        }, {
            name: "output_token_account",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "account",
                    path: "payer"
                }, {
                    kind: "const",
                    value: [6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169]
                }, {
                    kind: "account",
                    path: "mint"
                }],
                program: {
                    kind: "const",
                    value: [140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89]
                }
            }
        }, {
            name: "project",
            writable: !0
        }, {
            name: "payer",
            writable: !0,
            signer: !0
        }, {
            name: "token_program",
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "associated_token_program",
            address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }, {
            name: "system_program",
            address: "11111111111111111111111111111111"
        }],
        args: []
    }, {
        name: "buy",
        discriminator: [102, 6, 61, 18, 1, 218, 235, 234],
        accounts: [{
            name: "cp_swap_program",
            address: "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        }, {
            name: "payer",
            docs: ["The user performing the swap"],
            writable: !0,
            signer: !0
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "amm_config",
            docs: ["The factory state to read protocol fees"]
        }, {
            name: "pool_state",
            docs: ["The program account of the pool in which the swap will be performed"],
            writable: !0
        }, {
            name: "input_token_account",
            docs: ["The user token account for input token"],
            writable: !0
        }, {
            name: "output_token_account",
            docs: ["The user token account for output token"],
            writable: !0
        }, {
            name: "input_vault",
            docs: ["The vault token account for input token"],
            writable: !0
        }, {
            name: "output_vault",
            docs: ["The vault token account for output token"],
            writable: !0
        }, {
            name: "input_token_program",
            docs: ["SPL program for input token transfers"]
        }, {
            name: "output_token_program",
            docs: ["SPL program for output token transfers"]
        }, {
            name: "input_token_mint",
            docs: ["The mint of input token"]
        }, {
            name: "output_token_mint",
            docs: ["The mint of output token"]
        }, {
            name: "observation_state",
            docs: ["The program account for the most recent oracle observation"],
            writable: !0
        }, {
            name: "system_program",
            docs: ["To create a new program account"],
            address: "11111111111111111111111111111111"
        }, {
            name: "token_program",
            docs: ["Program to create mint account and mint tokens"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "project",
            writable: !0
        }, {
            name: "nft",
            writable: !0
        }, {
            name: "current_owner",
            docs: ["CHECK Current owner of the NFT (must match nft.owner and be a system account)"],
            writable: !0
        }, {
            name: "wsol_mint",
            address: "So11111111111111111111111111111111111111112"
        }, {
            name: "pool_wsol_vault",
            writable: !0
        }, {
            name: "pool_auth",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 97, 117, 116, 104]
                }, {
                    kind: "account",
                    path: "project.mint",
                    account: "Project"
                }]
            }
        }, {
            name: "protocol_fee",
            writable: !0,
            address: "DFShmtUPnJaxKSX6wg2zbyWEAVs9HuBeKNeGihg8o2oV"
        }, {
            name: "referral",
            writable: !0,
            optional: !0
        }, {
            name: "creator",
            docs: ["CHECK : Creator account, must match the project's creator"],
            writable: !0
        }],
        args: []
    }, {
        name: "create",
        discriminator: [24, 30, 200, 40, 5, 28, 7, 119],
        accounts: [{
            name: "new_project",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 112, 114, 111, 106, 101, 99, 116]
                }, {
                    kind: "account",
                    path: "mint"
                }]
            }
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 97, 117, 116, 104]
                }, {
                    kind: "account",
                    path: "mint"
                }]
            }
        }, {
            name: "metadata",
            writable: !0
        }, {
            name: "token_metadata_program",
            address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        }, {
            name: "mint",
            writable: !0,
            signer: !0
        }, {
            name: "pool_token_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "account",
                    path: "authority"
                }, {
                    kind: "const",
                    value: [6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169]
                }, {
                    kind: "account",
                    path: "mint"
                }],
                program: {
                    kind: "const",
                    value: [140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89]
                }
            }
        }, {
            name: "wsol_mint",
            address: "So11111111111111111111111111111111111111112"
        }, {
            name: "pool_wsol_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "account",
                    path: "authority"
                }, {
                    kind: "const",
                    value: [6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169]
                }, {
                    kind: "account",
                    path: "wsol_mint"
                }],
                program: {
                    kind: "const",
                    value: [140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89]
                }
            }
        }, {
            name: "payer",
            writable: !0,
            signer: !0
        }, {
            name: "token_program",
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "associated_token_program",
            address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }, {
            name: "rent",
            address: "SysvarRent111111111111111111111111111111111"
        }, {
            name: "system_program",
            address: "11111111111111111111111111111111"
        }],
        args: [{
            name: "project_name",
            type: "string"
        }, {
            name: "project_desc",
            type: "string"
        }, {
            name: "token_symbol",
            type: "string"
        }, {
            name: "token_uri",
            type: "string"
        }, {
            name: "init_nft_price",
            type: "u64"
        }, {
            name: "increase_per_round",
            type: "u64"
        }, {
            name: "trade_fee_rate",
            type: "u64"
        }, {
            name: "sec_per_round",
            type: "u64"
        }, {
            name: "sec_to_burn_nft",
            type: "u64"
        }, {
            name: "max_nft_supply",
            type: "u64"
        }]
    }, {
        name: "mint",
        discriminator: [51, 57, 225, 47, 182, 146, 137, 166],
        accounts: [{
            name: "cp_swap_program",
            address: "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
        }, {
            name: "payer",
            writable: !0,
            signer: !0
        }, {
            name: "creator",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 97, 117, 116, 104]
                }, {
                    kind: "account",
                    path: "project.mint",
                    account: "Project"
                }]
            }
        }, {
            name: "amm_config",
            docs: ["Which config the pool belongs to."]
        }, {
            name: "authority",
            pda: {
                seeds: [{
                    kind: "const",
                    value: [118, 97, 117, 108, 116, 95, 97, 110, 100, 95, 108, 112, 95, 109, 105, 110, 116, 95, 97, 117, 116, 104, 95, 115, 101, 101, 100]
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "pool_state",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108]
                }, {
                    kind: "account",
                    path: "amm_config"
                }, {
                    kind: "account",
                    path: "token_0_mint"
                }, {
                    kind: "account",
                    path: "token_1_mint"
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "token_0_mint",
            docs: ["Token_0 mint, the key must smaller then token_1 mint."]
        }, {
            name: "token_1_mint",
            docs: ["Token_1 mint, the key must grater then token_0 mint."]
        }, {
            name: "lp_mint",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108, 95, 108, 112, 95, 109, 105, 110, 116]
                }, {
                    kind: "account",
                    path: "pool_state"
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "creator_token_0",
            docs: ["payer token0 account"],
            writable: !0
        }, {
            name: "creator_token_1",
            docs: ["creator token1 account"],
            writable: !0
        }, {
            name: "creator_lp_token",
            writable: !0
        }, {
            name: "token_0_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108, 95, 118, 97, 117, 108, 116]
                }, {
                    kind: "account",
                    path: "pool_state"
                }, {
                    kind: "account",
                    path: "token_0_mint"
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "token_1_vault",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 111, 111, 108, 95, 118, 97, 117, 108, 116]
                }, {
                    kind: "account",
                    path: "pool_state"
                }, {
                    kind: "account",
                    path: "token_1_mint"
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "create_pool_fee",
            docs: ["create pool fee account"],
            writable: !0,
            address: "DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8"
        }, {
            name: "observation_state",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [111, 98, 115, 101, 114, 118, 97, 116, 105, 111, 110]
                }, {
                    kind: "account",
                    path: "pool_state"
                }],
                program: {
                    kind: "account",
                    path: "cp_swap_program"
                }
            }
        }, {
            name: "token_program",
            docs: ["Program to create mint account and mint tokens"],
            address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }, {
            name: "token_0_program",
            docs: ["Spl token program or token program 2022"]
        }, {
            name: "token_1_program",
            docs: ["Spl token program or token program 2022"]
        }, {
            name: "associated_token_program",
            docs: ["Program to create an ATA for receiving position NFT"],
            address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }, {
            name: "system_program",
            docs: ["To create a new program account"],
            address: "11111111111111111111111111111111"
        }, {
            name: "rent",
            docs: ["Sysvar for program account"],
            address: "SysvarRent111111111111111111111111111111111"
        }, {
            name: "new_nft",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 110, 102, 116]
                }, {
                    kind: "account",
                    path: "project.nft_id",
                    account: "Project"
                }, {
                    kind: "account",
                    path: "project"
                }]
            }
        }, {
            name: "project",
            writable: !0
        }, {
            name: "wsol_mint",
            address: "So11111111111111111111111111111111111111112"
        }, {
            name: "pool_wsol_vault",
            writable: !0
        }, {
            name: "protocol_fee",
            writable: !0,
            address: "DFShmtUPnJaxKSX6wg2zbyWEAVs9HuBeKNeGihg8o2oV"
        }],
        args: []
    }, {
        name: "split",
        discriminator: [124, 189, 27, 43, 216, 40, 147, 66],
        accounts: [{
            name: "new_nft",
            writable: !0,
            pda: {
                seeds: [{
                    kind: "const",
                    value: [112, 112, 112, 95, 110, 102, 116]
                }, {
                    kind: "account",
                    path: "project.nft_id",
                    account: "Project"
                }, {
                    kind: "account",
                    path: "project"
                }]
            }
        }, {
            name: "old_nft",
            writable: !0
        }, {
            name: "project",
            writable: !0
        }, {
            name: "payer",
            writable: !0,
            signer: !0
        }, {
            name: "system_program",
            address: "11111111111111111111111111111111"
        }],
        args: []
    }],
    lv = [{
        name: "AmmConfig",
        discriminator: [218, 244, 33, 104, 203, 203, 43, 111]
    }, {
        name: "NFT",
        discriminator: [97, 230, 6, 21, 131, 208, 111, 115]
    }, {
        name: "ObservationState",
        discriminator: [122, 174, 197, 53, 129, 9, 165, 132]
    }, {
        name: "PoolState",
        discriminator: [247, 237, 227, 245, 215, 195, 222, 70]
    }, {
        name: "Project",
        discriminator: [205, 168, 189, 202, 181, 247, 142, 19]
    }],
    dv = [{
        name: "CreatorRewardEvent",
        discriminator: [223, 185, 253, 3, 35, 164, 57, 144]
    }, {
        name: "NFTEvent",
        discriminator: [243, 91, 119, 67, 253, 51, 91, 233]
    }, {
        name: "ProjectCreateEvent",
        discriminator: [19, 238, 138, 63, 2, 74, 6, 61]
    }, {
        name: "ReferralRewardEvent",
        discriminator: [47, 6, 18, 225, 99, 16, 211, 7]
    }],
    fv = [{
        code: 6e3,
        name: "NameTooLong",
        msg: "Project name exceeds maximum length of 32 characters"
    }, {
        code: 6001,
        name: "SymbolTooLong",
        msg: "Token symbol exceeds maximum length of 10 characters"
    }, {
        code: 6002,
        name: "UriTooLong",
        msg: "Metadata URI exceeds maximum length of 200 characters"
    }, {
        code: 6003,
        name: "DescTooLong",
        msg: "Project description exceeds maximum length of 256 characters"
    }, {
        code: 6004,
        name: "InitNFTPrice",
        msg: "Initial NFT price must be at least 0.1 SOL"
    }, {
        code: 6005,
        name: "InvalidNFTPriceMultiple",
        msg: "NFT price must be a multiple of 0.1 SOL"
    }, {
        code: 6006,
        name: "InvalidMaxNFTSupply",
        msg: "Max NFT supply must be between 200 and 10,000, and a multiple of 100"
    }, {
        code: 6007,
        name: "InvalidIncreaseRate",
        msg: "Price increase rate must be between 5.00% and 20.00%"
    }, {
        code: 6008,
        name: "InvalidFeeRate",
        msg: "Trading fee rate must be between 1% and 10%"
    }, {
        code: 6009,
        name: "IncreaseBelowFee",
        msg: "Price increase rate must be greater than trading fee rate"
    }, {
        code: 6010,
        name: "NotHourMultiple",
        msg: "Time duration must be in full hours (multiples of 3600 seconds)"
    }, {
        code: 6011,
        name: "InvalidRoundDuration",
        msg: "Round duration must be between 1 hour and 3 days"
    }, {
        code: 6012,
        name: "InvalidBurnDuration",
        msg: "NFT burn timeout must be between 1 hour and 7 days"
    }, {
        code: 6013,
        name: "BurnTooShort",
        msg: "NFT burn timeout must be longer than round duration"
    }, {
        code: 6014,
        name: "IncreaseBelowFeeDiff",
        msg: "Increase rate must be at least 3% above trading fee rate"
    }, {
        code: 6015,
        name: "InvalidRound",
        msg: "Only first round can mint NFT"
    }, {
        code: 6016,
        name: "NFTSoldOut",
        msg: "NFT sold out"
    }, {
        code: 6017,
        name: "InsufficientFunds",
        msg: "Insufficient swap pool funds after fees"
    }, {
        code: 6018,
        name: "FundsMismatch",
        msg: "Funds distribution mismatch"
    }, {
        code: 6019,
        name: "InvalidTokenMint",
        msg: "Invalid token mint for mint 0"
    }, {
        code: 6020,
        name: "MathOverflow",
        msg: "Math overflow in price calculation"
    }, {
        code: 6021,
        name: "InvalidTokenPair",
        msg: "Invalid token pair for minting"
    }, {
        code: 6022,
        name: "InvalidOwner",
        msg: "Provided owner does not match the NFT's current owner"
    }, {
        code: 6023,
        name: "SelfPurchaseNotAllowed",
        msg: "Cannot purchase your own NFT"
    }, {
        code: 6024,
        name: "OwnerMismatch",
        msg: "Owner account mismatch"
    }, {
        code: 6025,
        name: "InvalidOwnerAccount",
        msg: "Owner must be a system account"
    }, {
        code: 6026,
        name: "MintingNotFinished",
        msg: "Cannot trade until minting phase is complete"
    }, {
        code: 6027,
        name: "InvalidMint",
        msg: "NFT does not belong to this project"
    }, {
        code: 6028,
        name: "NFTSoldOutThisRound",
        msg: "NFT already traded this round. Wait for next round to trade again"
    }, {
        code: 6029,
        name: "InvalidCreatorAccount",
        msg: "Invalid project creator account provided"
    }, {
        code: 6030,
        name: "NFTNotSplitable",
        msg: "NFT price must be at least 2x initial price to split"
    }, {
        code: 6031,
        name: "NFTMaxSupplyReached",
        msg: "Project has reached maximum NFT supply"
    }, {
        code: 6032,
        name: "InvalidNewPrice",
        msg: "Split price cannot be below initial NFT price"
    }, {
        code: 6033,
        name: "TimeEclipseNotReachedSplit",
        msg: "Must wait one full round before splitting again"
    }, {
        code: 6034,
        name: "TimeEclipseNotReached",
        msg: "Must wait for burn timeout period before burning NFT"
    }, {
        code: 6035,
        name: "NFTAlreadyBurned",
        msg: "NFT has already been burned"
    }],
    hv = [{
        name: "AmmConfig",
        docs: ["Holds the current owner of the factory"],
        type: {
            kind: "struct",
            fields: [{
                name: "bump",
                docs: ["Bump to identify PDA"],
                type: "u8"
            }, {
                name: "disable_create_pool",
                docs: ["Status to control if new pool can be create"],
                type: "bool"
            }, {
                name: "index",
                docs: ["Config index"],
                type: "u16"
            }, {
                name: "trade_fee_rate",
                docs: ["The trade fee, denominated in hundredths of a bip (10^-6)"],
                type: "u64"
            }, {
                name: "protocol_fee_rate",
                docs: ["The protocol fee"],
                type: "u64"
            }, {
                name: "fund_fee_rate",
                docs: ["The fund fee, denominated in hundredths of a bip (10^-6)"],
                type: "u64"
            }, {
                name: "create_pool_fee",
                docs: ["Fee for create a new pool"],
                type: "u64"
            }, {
                name: "protocol_owner",
                docs: ["Address of the protocol fee owner"],
                type: "pubkey"
            }, {
                name: "fund_owner",
                docs: ["Address of the fund fee owner"],
                type: "pubkey"
            }, {
                name: "padding",
                docs: ["padding"],
                type: {
                    array: ["u64", 16]
                }
            }]
        }
    }, {
        name: "CreatorRewardEvent",
        docs: ["Emitted when creator receives reward"],
        type: {
            kind: "struct",
            fields: [{
                name: "project",
                type: "pubkey"
            }, {
                name: "mint",
                type: "pubkey"
            }, {
                name: "nft",
                type: "pubkey"
            }, {
                name: "creator",
                type: "pubkey"
            }, {
                name: "buyer",
                type: "pubkey"
            }, {
                name: "reward_amount",
                type: "u64"
            }, {
                name: "nft_price",
                type: "u64"
            }, {
                name: "aid",
                type: "u64"
            }, {
                name: "round",
                type: "u64"
            }, {
                name: "time",
                type: "u64"
            }]
        }
    }, {
        name: "NFT",
        type: {
            kind: "struct",
            fields: [{
                name: "bump",
                type: "u8"
            }, {
                name: "mint",
                type: "pubkey"
            }, {
                name: "owner",
                type: "pubkey"
            }, {
                name: "id",
                type: "u64"
            }, {
                name: "round",
                type: "u64"
            }, {
                name: "price",
                type: "u64"
            }, {
                name: "split_count",
                type: "u64"
            }, {
                name: "last_split",
                type: "u64"
            }, {
                name: "last_trade",
                type: "u64"
            }, {
                name: "create_time",
                type: "u64"
            }, {
                name: "is_burned",
                type: "bool"
            }]
        }
    }, {
        name: "NFTEvent",
        docs: ["Emitted when NFT mint buy split burn"],
        type: {
            kind: "struct",
            fields: [{
                name: "mint",
                type: "pubkey"
            }, {
                name: "nft",
                type: "pubkey"
            }, {
                name: "id",
                type: "u64"
            }, {
                name: "aid",
                type: "u64"
            }, {
                name: "round",
                type: "u64"
            }, {
                name: "from",
                type: "pubkey"
            }, {
                name: "to",
                type: "pubkey"
            }, {
                name: "price",
                type: "u64"
            }, {
                name: "value",
                type: "u64"
            }, {
                name: "time",
                type: "u64"
            }, {
                name: "action",
                type: "string"
            }]
        }
    }, {
        name: "Observation",
        docs: ["The element of observations in ObservationState"],
        serialization: "bytemuckunsafe",
        repr: {
            kind: "c",
            packed: !0
        },
        type: {
            kind: "struct",
            fields: [{
                name: "block_timestamp",
                docs: ["The block timestamp of the observation"],
                type: "u64"
            }, {
                name: "cumulative_token_0_price_x32",
                docs: ["the cumulative of token0 price during the duration time, Q32.32, the remaining 64 bit for overflow"],
                type: "u128"
            }, {
                name: "cumulative_token_1_price_x32",
                docs: ["the cumulative of token1 price during the duration time, Q32.32, the remaining 64 bit for overflow"],
                type: "u128"
            }]
        }
    }, {
        name: "ObservationState",
        serialization: "bytemuckunsafe",
        repr: {
            kind: "c",
            packed: !0
        },
        type: {
            kind: "struct",
            fields: [{
                name: "initialized",
                docs: ["Whether the ObservationState is initialized"],
                type: "bool"
            }, {
                name: "observation_index",
                docs: ["the most-recently updated index of the observations array"],
                type: "u16"
            }, {
                name: "pool_id",
                type: "pubkey"
            }, {
                name: "observations",
                docs: ["observation array"],
                type: {
                    array: [{
                        defined: {
                            name: "Observation"
                        }
                    }, 100]
                }
            }, {
                name: "padding",
                docs: ["padding for feature update"],
                type: {
                    array: ["u64", 4]
                }
            }]
        }
    }, {
        name: "PoolState",
        serialization: "bytemuckunsafe",
        repr: {
            kind: "c",
            packed: !0
        },
        type: {
            kind: "struct",
            fields: [{
                name: "amm_config",
                docs: ["Which config the pool belongs"],
                type: "pubkey"
            }, {
                name: "pool_creator",
                docs: ["pool creator"],
                type: "pubkey"
            }, {
                name: "token_0_vault",
                docs: ["Token A"],
                type: "pubkey"
            }, {
                name: "token_1_vault",
                docs: ["Token B"],
                type: "pubkey"
            }, {
                name: "lp_mint",
                docs: ["Pool tokens are issued when A or B tokens are deposited.", "Pool tokens can be withdrawn back to the original A or B token."],
                type: "pubkey"
            }, {
                name: "token_0_mint",
                docs: ["Mint information for token A"],
                type: "pubkey"
            }, {
                name: "token_1_mint",
                docs: ["Mint information for token B"],
                type: "pubkey"
            }, {
                name: "token_0_program",
                docs: ["token_0 program"],
                type: "pubkey"
            }, {
                name: "token_1_program",
                docs: ["token_1 program"],
                type: "pubkey"
            }, {
                name: "observation_key",
                docs: ["observation account to store oracle data"],
                type: "pubkey"
            }, {
                name: "auth_bump",
                type: "u8"
            }, {
                name: "status",
                docs: ["Bitwise representation of the state of the pool", "bit0, 1: disable deposit(vaule is 1), 0: normal", "bit1, 1: disable withdraw(vaule is 2), 0: normal", "bit2, 1: disable swap(vaule is 4), 0: normal"],
                type: "u8"
            }, {
                name: "lp_mint_decimals",
                type: "u8"
            }, {
                name: "mint_0_decimals",
                docs: ["mint0 and mint1 decimals"],
                type: "u8"
            }, {
                name: "mint_1_decimals",
                type: "u8"
            }, {
                name: "lp_supply",
                docs: ["lp mint supply"],
                type: "u64"
            }, {
                name: "protocol_fees_token_0",
                docs: ["The amounts of token_0 and token_1 that are owed to the liquidity provider."],
                type: "u64"
            }, {
                name: "protocol_fees_token_1",
                type: "u64"
            }, {
                name: "fund_fees_token_0",
                type: "u64"
            }, {
                name: "fund_fees_token_1",
                type: "u64"
            }, {
                name: "open_time",
                docs: ["The timestamp allowed for swap in the pool."],
                type: "u64"
            }, {
                name: "padding",
                docs: ["padding for future updates"],
                type: {
                    array: ["u64", 32]
                }
            }]
        }
    }, {
        name: "Project",
        type: {
            kind: "struct",
            fields: [{
                name: "bump",
                type: "u8"
            }, {
                name: "creator",
                type: "pubkey"
            }, {
                name: "mint",
                type: "pubkey"
            }, {
                name: "authority",
                type: "pubkey"
            }, {
                name: "project_name",
                type: "string"
            }, {
                name: "project_desc",
                type: "string"
            }, {
                name: "token_symbol",
                type: "string"
            }, {
                name: "token_uri",
                type: "string"
            }, {
                name: "init_token_supply",
                type: "u64"
            }, {
                name: "max_token_supply",
                type: "u64"
            }, {
                name: "init_nft_supply",
                type: "u64"
            }, {
                name: "max_nft_supply",
                type: "u64"
            }, {
                name: "token_per_nft",
                type: "u64"
            }, {
                name: "init_nft_price",
                type: "u64"
            }, {
                name: "increase_per_round",
                type: "u64"
            }, {
                name: "trade_fee_rate",
                type: "u64"
            }, {
                name: "sec_per_round",
                type: "u64"
            }, {
                name: "sec_to_burn_nft",
                type: "u64"
            }, {
                name: "nft_id",
                type: "u64"
            }, {
                name: "aid",
                type: "u64"
            }, {
                name: "nft_issue_count",
                type: "u64"
            }, {
                name: "nft_burn_count",
                type: "u64"
            }, {
                name: "round",
                type: "u64"
            }, {
                name: "last_round",
                type: "u64"
            }, {
                name: "create_time",
                type: "u64"
            }]
        }
    }, {
        name: "ProjectCreateEvent",
        docs: ["Emitted when Project create"],
        type: {
            kind: "struct",
            fields: [{
                name: "project",
                type: "pubkey"
            }, {
                name: "creator",
                type: "pubkey"
            }, {
                name: "mint",
                type: "pubkey"
            }, {
                name: "authority",
                type: "pubkey"
            }, {
                name: "project_name",
                type: "string"
            }, {
                name: "init_nft_price",
                type: "u64"
            }, {
                name: "increase_per_round",
                type: "u64"
            }, {
                name: "trade_fee_rate",
                type: "u64"
            }, {
                name: "sec_per_round",
                type: "u64"
            }, {
                name: "sec_to_burn_nft",
                type: "u64"
            }, {
                name: "create_time",
                type: "u64"
            }]
        }
    }, {
        name: "ReferralRewardEvent",
        docs: ["Emitted when referral receives reward"],
        type: {
            kind: "struct",
            fields: [{
                name: "project",
                type: "pubkey"
            }, {
                name: "mint",
                type: "pubkey"
            }, {
                name: "nft",
                type: "pubkey"
            }, {
                name: "referral",
                type: "pubkey"
            }, {
                name: "buyer",
                type: "pubkey"
            }, {
                name: "reward_amount",
                type: "u64"
            }, {
                name: "nft_price",
                type: "u64"
            }, {
                name: "aid",
                type: "u64"
            }, {
                name: "round",
                type: "u64"
            }, {
                name: "time",
                type: "u64"
            }]
        }
    }],
    pv = [{
        name: "VERSION",
        type: "string",
        value: '"1.0.0"'
    }],
    yv = {
        address: av,
        metadata: cv,
        instructions: uv,
        accounts: lv,
        events: dv,
        errors: fv,
        types: hv,
        constants: pv
    },
    mv = Pp("Configs", {
        state: () => ({
            defaultExplorer: {
                name: "Solscan",
                url: "https://solscan.io"
            },
            rpcEndpoint: {
                name: "Defalut",
                rpc: "https://solana-mainnet.api.syndica.io/api-key/4Qpr2b9AEQaDKioEapvWWCMLTzP6tnxFr6eB9UYD5faGQerpjhiEgdyJ72Z4tg5xDCxzoztb4qvCWiRv6VURUFgdi5R7f6M3aFD"
            },
            ProgramIds: {
                PPPFUN: new j(yv.address),
                configAddress: new j("D4FPEruKEHrG5TenZ2mpDGEfu1iUvTiqBxvpU8HLBvC2"),
                cpSwapProgram: new j("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C")
            },
            TokenIds: {
                SOL: new j("11111111111111111111111111111111"),
                WSOL: new j("So11111111111111111111111111111111111111112"),
                DFS: new j("DFScgRYSLXpbXHa1ko6cHjnR76LhXxrxU8VPZwLVbKmQ")
            },
            default_ref: [new j("Bemn3fbCJXDaxFus8ch9V18MHiqXeqdqb8v5Xqk15vgT")]
        }),
        getters: {},
        actions: {
            setDefaultExplorer(r) {
                r = JSON.parse(JSON.stringify(r)), r.img && delete r.img, this.defaultExplorer = r
            },
            setRpcEndpoint(r) {
                r = JSON.parse(JSON.stringify(r)), r.delay && delete r.delay, this.rpcEndpoint = r, window.location.reload()
            }
        },
        persist: {
            key: "Configs",
            storage: localStorage
        }
    });

function gv() {
    return mv(Lp)
}
let Ju = !1;
class wv {
    constructor(e) {
        Ae(this, "connection");
        Ae(this, "provider");
        Ae(this, "anchorProvider", null);
        this.connection = e, this.provider = window.solana, this.init()
    }
    init() {
        if (!Ju) {
            Ju = !0;
            const e = window.solana;
            if (!e) {
                console.error("Tokenpocket Uninstall");
                return
            }
            e.on("connect", () => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: this.provider.publicKey.toBase58()
                }))
            }), e.on("disconnect", () => {
                window.dispatchEvent(new CustomEvent("accountChanged", {
                    detail: ""
                }))
            })
        }
    }
    get hasWallet() {
        return !!window.solana
    }
    get mobileUrl() {
        const e = localStorage.getItem("refCode") || "",
            t = {
                url: `https://devppp.ppp.fun${e?"?ref="+e:""}`,
                chain: "solana",
                source: "pppdotfun"
            };
        return `tpdapp://open?params=${encodeURIComponent(JSON.stringify(t))}`
    }
    getPhantomProvider() {
        return "solana" in window ? window.solana : (window.open("https://www.tokenpocket.pro/zh/download/app", "_blank"), null)
    }
    async connectWallet() {
        if (this.provider = this.getPhantomProvider(), !this.provider) return null;
        try {
            return await this.provider.connect(), this.anchorProvider = new Jn(this.connection, this.provider, {
                commitment: "confirmed"
            }), this.provider.publicKey.toBase58(), this.provider.publicKey.toBase58()
        } catch (e) {
            return console.error("connectWallet err:", e), null
        }
    }
    async disconnectWallet() {
        if (this.provider) try {
            await this.provider.disconnect(), this.anchorProvider = null
        } catch (e) {
            console.error("disconnectWallet err:", e)
        }
    }
    async confirmTransaction(e) {
        try {
            const t = new Ee().add(...e),
                {
                    blockhash: n
                } = await this.connection.getLatestBlockhash();
            t.recentBlockhash = n, t.feePayer = this.provider.publicKey;
            const i = await this.provider.signTransaction(t),
                o = await this.connection.sendRawTransaction(i.serialize());
            return await this.connection.confirmTransaction(o, "confirmed")
        } catch (t) {
            throw console.error("Failed:", t), t
        }
    }
    async signMessage(e) {
        const t = new TextEncoder().encode(e);
        return await this.provider.signMessage(t)
    }
}
const $s = gv();
class bv {
    constructor() {
        Ae(this, "memoAddress", "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
        Ae(this, "connection");
        Ae(this, "adpter");
        $s.rpcEndpoint.rpc;
        const e = new ta($s.rpcEndpoint.rpc, "confirmed");
        this.connection = e;
        let t = localStorage.getItem("user") || "{}";
        t = JSON.parse(t), t && t.walletName && t.account && (this.init(t.walletName), this.connectWallet().then(async n => {
            const {
                verifyTokenByPublicKey: i
            } = await Up(async () => {
                const {
                    verifyTokenByPublicKey: o
                } = await import("./user-rn3_sb6w.js");
                return {
                    verifyTokenByPublicKey: o
                }
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
            i(n).then(o => {
                _c().setUserInfo(o)
            }).catch(() => {
                _c().setUserInfo(""), this.disconnectWallet()
            })
        }))
    }
    async changeRpc() {
        const e = new ta($s.rpcEndpoint.rpc, "confirmed");
        this.connection = e
    }
    get provider() {
        var e;
        return (e = this.adpter) == null ? void 0 : e.provider
    }
    get anchorProvider() {
        var e;
        return (e = this.adpter) == null ? void 0 : e.anchorProvider
    }
    init(e) {
        switch (e) {
            case Qi.OkxWallet:
                this.adpter = new zE(this.connection);
                break;
            case Qi.BinanceWallet:
                this.adpter = new qE(this.connection);
                break;
            case Qi.Tokenpocket:
                this.adpter = new wv(this.connection);
                break;
            default:
                this.adpter = new $E(this.connection)
        }
    }
    async connectWallet() {
        if (!Fp.value) return await this.adpter.connectWallet();
        if (!this.adpter.hasWallet) location.href = this.adpter.mobileUrl;
        else return await this.adpter.connectWallet()
    }
    async disconnectWallet() {
        return await this.adpter.disconnectWallet()
    }
    async requestAirdrop(e) {
        try {
            const t = this.translateAddress(e),
                n = await this.connection.requestAirdrop(t, 2 * 10 ** 9);
            await this.connection.confirmTransaction(n, "confirmed")
        } catch (t) {
            throw console.error("Airdrop request failed:", t), t
        }
    }
    async getSolBalance(e) {
        try {
            const t = this.translateAddress(e);
            return await this.connection.getBalance(t, "confirmed") / 10 ** 9
        } catch (t) {
            return console.error("Failed to fetch balance:", t), 0
        }
    }
    async getAllTokenBal(e, t = !1) {
        try {
            const n = this.translateAddress(e);
            let i = [];
            const o = await this.connection.getParsedTokenAccountsByOwner(n, {
                programId: Qr
            });
            if (i.push(...o.value), t) {
                const u = await this.connection.getParsedTokenAccountsByOwner(n, {
                    programId: Sr
                });
                i.push(...u.value)
            }
            const s = this._dealBalance(i),
                a = await this.getSolBalance(e);
            return s.push({
                address: "11111111111111111111111111111111",
                balance: a,
                publicKey: "",
                decimals: 9
            }), s
        } catch (n) {
            throw console.error("getAllTokenBal err:", n), n
        }
    }
    _dealBalance(e) {
        let t = [];
        return e.forEach(n => {
            const i = n.account.data.parsed.info.mint,
                o = n.account.data.parsed.info.tokenAmount.uiAmount || 0,
                s = n.pubkey;
            t.push({
                address: i,
                balance: o,
                publicKey: s,
                decimals: n.account.data.parsed.info.tokenAmount.decimals
            })
        }), t
    }
    async getTokenBalance(e, t, n = Sr) {
        try {
            const i = this.translateAddress(e),
                o = this.translateAddress(t),
                a = (await this.connection.getParsedTokenAccountsByOwner(i, {
                    programId: n
                })).value.find(u => u.account.data.parsed.info.mint === o.toString());
            return a && a.account.data.parsed.info.tokenAmount.uiAmount || 0
        } catch (i) {
            throw console.error("getTokenBalance err:", i), i
        }
    }
    async transferSOL(e, t, n) {
        await this.connectWallet();
        try {
            const i = await this.getTransferSOLInstruction(e, t),
                o = await this.addMemo(n);
            return await this.adpter.confirmTransaction([o, i])
        } catch (i) {
            throw console.error("SOL transfer failed:", i), i
        }
    }
    async transferToken({
        recipientAddr: e,
        tokenAddr: t,
        amount: n,
        memo: i,
        decimals: o = 6,
        isATA: s = !1
    }) {
        await this.connectWallet();
        try {
            const a = {
                    recipientAddr: e,
                    tokenAddr: t,
                    amount: n,
                    decimals: o,
                    isATA: s
                },
                u = await this.getTransferTokenInstruction(a),
                d = await this.addMemo(i);
            return await this.adpter.confirmTransaction([d, ...u])
        } catch (a) {
            throw console.error("Token transfer failed:", a), a
        }
    }
    async signMessage(e) {
        return await this.adpter.signMessage(e)
    }
    translateAddress(e) {
        return e === "11111111111111111111111111111111" ? VE : e instanceof j ? e : new j(e)
    }
    async getTransferSOLInstruction(e, t) {
        const n = this.translateAddress(e),
            i = t * 10 ** 9;
        return st.transfer({
            fromPubkey: this.provider.publicKey,
            toPubkey: n,
            lamports: i
        })
    }
    async getTransferTokenInstruction({
        recipientAddr: e,
        tokenAddr: t,
        amount: n,
        decimals: i = 6,
        isATA: o = !1
    }) {
        const s = this.translateAddress(t),
            a = this.translateAddress(e),
            u = this.provider.publicKey,
            d = await Xu(s, u, !1, Sr);
        let l = a,
            b = [];
        if (o && (l = await Xu(s, a, !1, Sr), !await this.connection.getAccountInfo(l))) {
            const T = ov(u, l, a, s, Sr);
            b.push(T)
        }
        const S = n * 10 ** i,
            m = rv(d, s, l, this.provider.publicKey, S, i, [], Sr);
        return b.push(m), b
    }
    async addMemo(e) {
        return new Oe({
            programId: this.translateAddress(this.memoAddress),
            data: he.from(e),
            keys: []
        })
    }
    async getProgramAnchor(e) {
        return new Kr(e, {
            connection: this.connection
        })
    }
    async getAccountInfo(e) {
        return e = this.translateAddress(e), await this.connection.getAccountInfo(e)
    }
}
const bR = new bv;
export {
    Nn as B, Br as K, VE as N, j as P, st as S, Qr as T, Qi as W, Ee as a, nv as b, he as c, fa as d, Oe as e, ve as f, wR as g, ov as h, gR as i, yv as p, Ww as r, ce as s, gv as u, rl as v, bR as w
};
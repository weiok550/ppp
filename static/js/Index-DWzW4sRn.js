import {
    d as k,
    u as ye,
    a as M,
    c as X,
    b as g,
    o as m,
    r as z,
    n as E,
    e as o,
    _ as N,
    f as te,
    w as Ce,
    g as Y,
    h as C,
    i as ae,
    j as we,
    k as s,
    l as n,
    m as c,
    p as V,
    E as L,
    q as ke,
    F as G,
    s as j,
    t as R,
    v as S,
    x as U,
    y as se,
    z as Z,
    A as J,
    B as F,
    C as he,
    D as ne,
    G as $,
    H as Ee,
    I as be,
    J as le,
    K as Se,
    L as Ve,
    M as Be,
    N as Pe,
    O as Ue,
    P as De,
    Q as We,
    R as Te,
    S as oe
} from "./index-DejQ-iz-.js";
import {
    E as q
} from "./el-dialog-BXbic-ED.js";
import {
    E as Re,
    a as Qe
} from "./el-col-CGhe7whV.js";
import {
    E as re,
    a as ie,
    b as ce
} from "./el-dropdown-item-qzWx556N.js";
import "./el-popper-DfMgMTnx.js";
import {
    E as Fe
} from "./el-divider-BmWAspa3.js";
import {
    _ as H
} from "./SvgIcon-BS4YQbSZ.js";
import {
    E as Q,
    u as K,
    c as de,
    a as ue,
    g as xe,
    t as ze
} from "./index-Brp1LNR4.js";
import {
    u as Ie,
    w as O,
    v as Oe,
    W as P
} from "./el-loading-KWzNfS69.js";
import {
    E as Ge
} from "./el-popover-DUijcrBC.js";
import {
    c as x
} from "./isMobile-DPHpSBeS.js";
import {
    E as Me,
    g as Xe,
    I as Ne,
    a as Ye,
    b as Le
} from "./el-form-DeAxGT5b.js";
import "./el-progress-CQCGwsfG.js";
import {
    b as Ze
} from "./bus-CpQP4H_1.js";
import {
    verifyTokenByPublicKey as Je
} from "./user-rn3_sb6w.js";
import "./dropdown-BXx2P874.js";
import "./castArray-G03HepT3.js";
import "./isEqual-m-EOcnpd.js";
const qe = k({
        name: "ElContainer"
    }),
    He = k({
        ...qe,
        props: {
            direction: {
                type: String
            }
        },
        setup(h) {
            const u = h,
                r = ye(),
                d = M("container"),
                l = X(() => u.direction === "vertical" ? !0 : u.direction === "horizontal" ? !1 : r && r.default ? r.default().some(p => {
                    const f = p.type.name;
                    return f === "ElHeader" || f === "ElFooter"
                }) : !1);
            return (a, p) => (m(), g("section", {
                class: E([o(d).b(), o(d).is("vertical", o(l))])
            }, [z(a.$slots, "default")], 2))
        }
    });
var Ke = N(He, [
    ["__file", "container.vue"]
]);
const je = k({
        name: "ElAside"
    }),
    $e = k({
        ...je,
        props: {
            width: {
                type: String,
                default: null
            }
        },
        setup(h) {
            const u = h,
                r = M("aside"),
                d = X(() => u.width ? r.cssVarBlock({
                    width: u.width
                }) : {});
            return (l, a) => (m(), g("aside", {
                class: E(o(r).b()),
                style: te(o(d))
            }, [z(l.$slots, "default")], 6))
        }
    });
var pe = N($e, [
    ["__file", "aside.vue"]
]);
const et = k({
        name: "ElFooter"
    }),
    tt = k({
        ...et,
        props: {
            height: {
                type: String,
                default: null
            }
        },
        setup(h) {
            const u = h,
                r = M("footer"),
                d = X(() => u.height ? r.cssVarBlock({
                    height: u.height
                }) : {});
            return (l, a) => (m(), g("footer", {
                class: E(o(r).b()),
                style: te(o(d))
            }, [z(l.$slots, "default")], 6))
        }
    });
var me = N(tt, [
    ["__file", "footer.vue"]
]);
const ot = k({
        name: "ElHeader"
    }),
    at = k({
        ...ot,
        props: {
            height: {
                type: String,
                default: null
            }
        },
        setup(h) {
            const u = h,
                r = M("header"),
                d = X(() => u.height ? r.cssVarBlock({
                    height: u.height
                }) : {});
            return (l, a) => (m(), g("header", {
                class: E(o(r).b()),
                style: te(o(d))
            }, [z(l.$slots, "default")], 6))
        }
    });
var fe = N(at, [
    ["__file", "header.vue"]
]);
const st = k({
        name: "ElMain"
    }),
    nt = k({
        ...st,
        setup(h) {
            const u = M("main");
            return (r, d) => (m(), g("main", {
                class: E(o(u).b())
            }, [z(r.$slots, "default")], 2))
        }
    });
var ve = N(nt, [
    ["__file", "main.vue"]
]);
const lt = Ce(Ke, {
    Aside: pe,
    Footer: me,
    Header: fe,
    Main: ve
});
Y(pe);
Y(me);
const rt = Y(fe),
    it = Y(ve),
    ct = "/static/png/logo6-9DYVZHHc.png",
    Ae = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmpJREFUaIHtmb2O2kAQx8eWrTVaI7uicUMk2AYQLlxQWGZ5gtM9QfIm8CjJEyR+AnwdHU5LE1JAQXNGgABjtOnQKXx4QT6W0/knTTfMzt+a3dEwEpyAUmomSfI1SRJ7vV7bm83GZIyVT/m+F6qqjhljUbFYHCOEfsVx/DIYDMapP/Q8r1upVF4Nw2AA8BCGMWaEEOZ5Xvds4pTSsuM4Q4yx8ITPmaZpzHGcYavVOq4Gx3GGCCHhSfKKOCqbj5D825JyXbcHACBRSsvT6fTPaDS67bYJolqtRpZlfZH3+z2dTCai87ma2Wxm7na7b3Icx0+r1Up0Plczn88hSZKmvFwu7/q+Z8lms7EVADB5nG3bBtO87BoEAdfBWcXabrcmEEJSbz2llPFg2/ZdYxFCmMz1yThJ+6rvEStTASLIBYgmFyCazyEgiqLMDswyFgCAwuMUhiF0Op2LPlEUQbvdhm73/NAEAOD7PlesMAx5UgOuTsxr/X4/tcP2+/3Mzsu8E4sgFyCaXIBocgGi4WpkwDkG+r6fGsf3/UzH03ykfEs+Ut5ALkA0uQDRfA4BDz1SyrI8BoCL/1DzjpQ8Y2CWsVRVHUOz2RyKXhndarVabSgjhH6nSn1QdF3/K6uqGhqGITqXq8EYA0Lop6yq6vdSqZTtzboDlmVBHMcvAADgum7vkRfc/5umaYc164GPuug+9AFd158bjUaIELprKVwDxhjq9Xqo6/r5d9h13R4hhD1SSRmGwSqVyutR2QCAdEoEpbS83+9pHMdPi8WiLEmSudvt7rqOlSRprGlaVCgUQkVRQkVRfgRBcPTY/ANzIS3SMzJbTAAAAABJRU5ErkJggg==",
    ee = "data:image/svg+xml,%3csvg%20width='108'%20height='108'%20viewBox='0%200%20108%20108'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='108'%20height='108'%20rx='26'%20fill='%23AB9FF2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M46.5267%2069.9229C42.0054%2076.8509%2034.4292%2085.6182%2024.348%2085.6182C19.5824%2085.6182%2015%2083.6563%2015%2075.1342C15%2053.4305%2044.6326%2019.8327%2072.1268%2019.8327C87.768%2019.8327%2094%2030.6846%2094%2043.0079C94%2058.8258%2083.7355%2076.9122%2073.5321%2076.9122C70.2939%2076.9122%2068.7053%2075.1342%2068.7053%2072.314C68.7053%2071.5783%2068.8275%2070.7812%2069.0719%2069.9229C65.5893%2075.8699%2058.8685%2081.3878%2052.5754%2081.3878C47.993%2081.3878%2045.6713%2078.5063%2045.6713%2074.4598C45.6713%2072.9884%2045.9768%2071.4556%2046.5267%2069.9229ZM83.6761%2042.5794C83.6761%2046.1704%2081.5575%2047.9658%2079.1875%2047.9658C76.7816%2047.9658%2074.6989%2046.1704%2074.6989%2042.5794C74.6989%2038.9885%2076.7816%2037.1931%2079.1875%2037.1931C81.5575%2037.1931%2083.6761%2038.9885%2083.6761%2042.5794ZM70.2103%2042.5795C70.2103%2046.1704%2068.0916%2047.9658%2065.7216%2047.9658C63.3157%2047.9658%2061.233%2046.1704%2061.233%2042.5795C61.233%2038.9885%2063.3157%2037.1931%2065.7216%2037.1931C68.0916%2037.1931%2070.2103%2038.9885%2070.2103%2042.5795Z'%20fill='%23FFFDF8'/%3e%3c/svg%3e",
    ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAARVBMVEUzMzPwuQsmKzT0vAj4vwa9lBshKDQtLzNdTy5USS9aTS5uWytmVSxeUC0rLjQKHjXDmBocJjQVIjVQRi83NTJqWCx1YCpx1g69AAAB0UlEQVRoge1Y2ZKDIBBUBvAiasy6//+pSzScprIW0lVbW3SewkOnA93MMFVVUFBQ8K/RNDhuphSDcXdEHYid3WqNG4SddfUGhHbW0k5ObXZ21tcWfWZ21pMjp7zsvu7c2gPdmbWztj4g16nq7BzJM6Vpz84ROdJksnPEde02O2925uq+xx4Mcc0zkQepu/Hg+xX2SDcpJodwl9LZY91Pf0gVrqWyR9mhvQrF2hNP9cHfcGv2NVjnjyRyOXss5DITsPNZJpFXd8EPujf2wa5zcU/jrqrJsEd5kYob7imV22qnuKN4aU/SPerPjk27022bok270z1+jdVJaA/a49Pane5png2d1u50y/V0mnR2yBEuQnk/5BEOYnE/RCfTtGfHsUvzjxexbYWhHI0H5Upn02TqDsXFYBGvQ1zCdWP7E7XJ1Z3IItb0kUW86+C32uTXnWAbJ+EFxzO3tfwTn7U3wZ3HB9uON3MQebs+fvsXDalP/TuUHLot2APFWhEbImz8sRcX9sp1QBQLA2SZQxZoaGsBbYqg7Ry0EcW20NjmH/tswT64sE9F7CMX+zzHDhawIxHsMAc7hsIO0LCjP+zQEjtuxQ6KsSNu7HC+oKCg4C/gB9XIFm3Y8y14AAAAAElFTkSuQmCC",
    _e = "/static/png/Tokenpocket-gFcWVJtx.png",
    dt = "data:image/png;base64,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",
    ut = "data:image/png;base64,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",
    pt = "data:image/png;base64,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",
    mt = [{
        img: dt,
        url: "https://solscan.io",
        name: "Solscan"
    }, {
        img: ut,
        url: "https://explorer.solana.com",
        name: "Solana"
    }, {
        img: pt,
        url: "https://solana.fm",
        name: "SolanaFM"
    }],
    ft = [{
        name: "Defalut",
        rpc: "https://solana-mainnet.api.syndica.io/api-key/4Qpr2b9AEQaDKioEapvWWCMLTzP6tnxFr6eB9UYD5faGQerpjhiEgdyJ72Z4tg5xDCxzoztb4qvCWiRv6VURUFgdi5R7f6M3aFD",
        delay: -1
    }, {
        name: "Area 1",
        rpc: "https://rpc.ironforge.network/mainnet?apiKey=01JD13XZMKG88B0BYDVKP7HCG0",
        delay: -1
    }, {
        name: "Area 2",
        rpc: "https://mainnet.helius-rpc.com/?api-key=90aad231-9b81-4923-bcdd-9c6f723932db",
        delay: -1
    }],
    vt = {
        class: "settingDia"
    },
    At = {
        class: "item"
    },
    gt = {
        class: "title"
    },
    _t = {
        class: "explorers"
    },
    yt = ["onClick"],
    Ct = ["src"],
    wt = {
        class: "item"
    },
    kt = {
        class: "rpcInfos"
    },
    ht = ["onClick"],
    Et = {
        class: "info"
    },
    bt = {
        class: "name"
    },
    St = {
        class: "delay"
    },
    Vt = {
        key: 1
    },
    Bt = {
        key: 2,
        class: "red"
    },
    Pt = {
        class: "custom"
    },
    Ut = k({
        __name: "SettingDia",
        setup(h) {
            const u = Ie(),
                r = C(ft),
                d = i => {
                    u.setDefaultExplorer(i)
                },
                l = i => {
                    a.value = !1, u.setRpcEndpoint(i)
                },
                a = C(!1),
                p = C(""),
                f = async () => {
                    try {
                        const i = {
                            name: "Custom",
                            rpc: p.value
                        };
                        await v(i), u.setRpcEndpoint(i), a.value = !0, Q({
                            type: "success",
                            title: "Save Success",
                            message: "Saved custom rpc successfully"
                        })
                    } catch {
                        Q({
                            type: "error",
                            title: "Save Failed",
                            message: "Saved custom rpc failed"
                        })
                    }
                }, v = async i => {
                    try {
                        const e = Date.now();
                        if (!(await fetch(i.rpc, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    jsonrpc: "2.0",
                                    id: 1,
                                    method: "getHealth"
                                })
                            })).ok) throw new Error("Network response was not ok");
                        const y = Date.now();
                        i.delay = y - e
                    } catch (e) {
                        throw console.error(e), i.delay = -999, e
                    }
                }, _ = C(), b = () => {
                    _.value = setTimeout(() => {
                        b()
                    }, 5e3), r.value.forEach(async i => {
                        await v(i)
                    })
                };
            return ae(() => {
                u.rpcEndpoint.name === "Custom" && (a.value = !0, p.value = u.rpcEndpoint.rpc), b()
            }), we(() => {
                clearTimeout(_.value)
            }), (i, e) => {
                const t = L,
                    y = Ge,
                    w = H,
                    T = J,
                    D = se;
                return m(), g("div", vt, [s("div", At, [n(y, {
                    placement: "top-start",
                    width: "fit-content",
                    trigger: "hover",
                    "popper-class": "popper",
                    class: "popper"
                }, {
                    reference: c(() => [s("div", gt, [e[2] || (e[2] = V(" Default Explorer ")), n(t, {
                        class: "icon"
                    }, {
                        default: c(() => [n(o(ke))]),
                        _: 1
                    })])]),
                    default: c(() => [e[3] || (e[3] = s("div", {
                        class: "tip"
                    }, "Select preferred block explorer", -1))]),
                    _: 1,
                    __: [3]
                }), s("div", _t, [(m(!0), g(G, null, j(o(mt), A => (m(), g("div", {
                    class: E(["explorer", {
                        act: A.name === o(u).defaultExplorer.name
                    }]),
                    key: A.name,
                    onClick: I => d(A)
                }, [s("img", {
                    src: A.img,
                    class: "explorerImg"
                }, null, 8, Ct), V(" " + R(A.name), 1)], 10, yt))), 128))])]), s("div", wt, [e[6] || (e[6] = s("div", {
                    class: "title"
                }, "Rpc Endpoint", -1)), s("div", kt, [(m(!0), g(G, null, j(o(r), A => (m(), g("div", {
                    class: "rpcInfo",
                    key: A.name,
                    onClick: I => l(A)
                }, [s("div", {
                    class: E(["checkedBox", {
                        act: !o(a) && A.name === o(u).rpcEndpoint.name
                    }])
                }, [!o(a) && A.name === o(u).rpcEndpoint.name ? (m(), S(w, {
                    key: 0,
                    name: "Checked",
                    class: "checked"
                })) : U("", !0)], 2), s("div", Et, [s("div", bt, R(A.name), 1), s("div", St, [(A.delay || 0) >= 0 ? (m(), g("span", {
                    key: 0,
                    class: E(["green", {
                        red: (A.delay || 0) > 5e3,
                        yellow: (A.delay || 0) > 2e3
                    }])
                }, R(A.delay) + "ms", 3)) : A.delay === -1 ? (m(), g("span", Vt, "Loading...")) : (m(), g("span", Bt, "Time Out"))])])], 8, ht))), 128)), s("div", Pt, [s("div", {
                    class: "rpcInfo",
                    onClick: e[0] || (e[0] = A => a.value = !0)
                }, [s("div", {
                    class: E(["checkedBox", {
                        act: o(a)
                    }])
                }, [o(a) ? (m(), S(w, {
                    key: 0,
                    name: "Checked",
                    class: "checked"
                })) : U("", !0)], 2), e[4] || (e[4] = s("div", {
                    class: "info"
                }, [s("div", {
                    class: "name"
                }, "Custom"), s("div", {
                    class: "delay"
                })], -1))]), n(D, {
                    modelValue: o(p),
                    "onUpdate:modelValue": e[1] || (e[1] = A => Z(p) ? p.value = A : null),
                    placeholder: "Custom RPC URL",
                    class: "customInput"
                }, {
                    append: c(() => [n(T, {
                        type: "success",
                        onClick: f
                    }, {
                        default: c(() => e[5] || (e[5] = [V("Save")])),
                        _: 1,
                        __: [5]
                    })]),
                    _: 1
                }, 8, ["modelValue"])])])])])
            }
        }
    }),
    Dt = F(Ut, [
        ["__scopeId", "data-v-28b9c1b3"]
    ]),
    Wt = {
        class: "profile"
    },
    Tt = {
        class: "name"
    },
    Rt = {
        class: "description"
    },
    Qt = {
        class: "avatar"
    },
    Ft = ["src"],
    xt = {
        class: "address"
    },
    zt = {
        class: "bal"
    },
    It = {
        class: "addr"
    },
    Ot = k({
        __name: "Profile",
        props: {
            profileData: {}
        },
        emits: ["openEdit", "disconnect"],
        setup(h, {
            expose: u,
            emit: r
        }) {
            const d = r,
                l = C(!1),
                a = K(),
                p = () => {
                    d("openEdit")
                },
                f = () => {
                    l.value = !1, d("disconnect")
                },
                v = C("0.00"),
                _ = async () => {
                    try {
                        const i = await O.getSolBalance(a.account);
                        v.value = (i || 0).toFixed(2)
                    } catch (i) {
                        console.error("Error fetching SOL balance:", i), v.value = "0.00";
                        return
                    }
                };
            return u({
                init: () => {
                    l.value = !0, _()
                }
            }), (i, e) => {
                const t = J,
                    y = L,
                    w = Fe,
                    T = q;
                return m(), S(T, {
                    class: "profileDia",
                    title: "Profile",
                    modelValue: o(l),
                    "onUpdate:modelValue": e[1] || (e[1] = D => Z(l) ? l.value = D : null),
                    "close-on-click-modal": !0
                }, {
                    default: c(() => [s("div", Wt, [s("div", Tt, "@" + R(i.profileData.username), 1), s("div", Rt, "@" + R(i.profileData.description), 1), n(t, {
                        type: "primary",
                        plain: "",
                        icon: o(he),
                        onClick: p
                    }, {
                        default: c(() => e[2] || (e[2] = [V("Edit Profile")])),
                        _: 1,
                        __: [2]
                    }, 8, ["icon"])]), s("div", Qt, [s("img", {
                        src: i.profileData.avatar,
                        class: "avatar-image"
                    }, null, 8, Ft)]), s("div", xt, [s("div", zt, R(o(v)) + " SOL", 1), s("div", It, [s("span", null, R(o(de)(o(a).account)), 1), n(y, {
                        class: "copy",
                        onClick: e[0] || (e[0] = D => o(ue)(o(a).account))
                    }, {
                        default: c(() => [n(o(ne))]),
                        _: 1
                    })])]), n(w, null, {
                        default: c(() => e[3] || (e[3] = [s("span", {
                            class: "or"
                        }, "OR", -1)])),
                        _: 1,
                        __: [3]
                    }), n(t, {
                        class: "disconnect",
                        size: "large",
                        type: "danger",
                        plain: "",
                        onClick: f
                    }, {
                        default: c(() => e[4] || (e[4] = [V("Disconnect Wallet")])),
                        _: 1,
                        __: [4]
                    })]),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    }),
    Gt = F(Ot, [
        ["__scopeId", "data-v-2b66762b"]
    ]),
    Mt = k({
        __name: "UploadAvatarComp",
        emits: ["update:modelValue", "updateLoading"],
        setup(h, {
            emit: u
        }) {
            const r = u,
                d = C(),
                l = C([]),
                a = C([]),
                p = C(!1),
                f = e => {
                    var y;
                    d.value.clearFiles();
                    const t = e[0];
                    t.uid = Xe(), a.value = [], l.value = [], d.value.handleStart(t), (y = d.value) == null || y.submit()
                },
                v = e => p.value ? (Q({
                    message: "Upload in progress, please wait.",
                    type: "warning"
                }), !1) : e.type.indexOf("image") < 0 ? (Q({
                    message: "Picture must be image format!",
                    type: "error"
                }), !1) : e.size / 1024 / 1024 > 1.5 ? (Q({
                    message: "Picture size can not exceed 1.5MB!",
                    type: "error"
                }), !1) : !0,
                _ = e => (p.value = !0, r("updateLoading", p.value), l.value.push(e.file), (async () => {
                    const t = await Ne(e.file),
                        y = l.value.findIndex(w => w.uid === e.file.uid);
                    return a.value[y] = `https://ipfs.ppp.fun/ipfs/${t.cid}`, t.loadingEnd = !0, t
                })()),
                b = e => {
                    console.error("handleError", e), l.value.pop(), a.value.pop(), p.value = !1, r("updateLoading", p.value), Q({
                        message: "Upload failed",
                        title: "Upload failed",
                        type: "error"
                    })
                },
                i = () => {
                    p.value = !1, r("updateLoading", p.value), r("update:modelValue", a.value)
                };
            return (e, t) => {
                const y = Me;
                return m(), S(y, {
                    ref_key: "uploadRef",
                    ref: d,
                    class: "upload-avatar",
                    action: "#",
                    limit: 1,
                    "on-exceed": f,
                    "auto-upload": !0,
                    "http-request": _,
                    multiple: !1,
                    "list-type": "text",
                    "on-success": i,
                    "on-error": b,
                    "before-upload": v,
                    accept: "image/jpeg, image/png, image/webp, image/gif, image/svg+xml"
                }, {
                    default: c(() => [z(e.$slots, "default", {}, void 0, !0)]),
                    _: 3
                }, 512)
            }
        }
    }),
    Xt = F(Mt, [
        ["__scopeId", "data-v-af80d1ed"]
    ]),
    Nt = {
        style: {
            position: "relative"
        }
    },
    Yt = {
        class: "custom-content"
    },
    Lt = ["src"],
    Zt = {
        class: "dialog-footer"
    },
    Jt = k({
        __name: "EditProfile",
        emits: ["openEdit"],
        setup(h, {
            expose: u,
            emit: r
        }) {
            const d = C(!1),
                l = C(!1),
                a = $({
                    avatar: "",
                    username: "",
                    description: ""
                }),
                p = $({
                    username: [{
                        required: !0,
                        message: "Username is required",
                        trigger: "blur"
                    }, {
                        min: 3,
                        max: 20,
                        message: "Username must be between 3 and 20 characters",
                        trigger: "blur"
                    }]
                }),
                f = e => {
                    a.avatar = e[0]
                },
                v = C(),
                _ = C(!1),
                b = async () => {
                    var e;
                    if (!_.value) {
                        _.value = !0;
                        try {
                            await ((e = v.value) == null ? void 0 : e.validate()), Q({
                                title: "Success",
                                message: "Profile updated successfully",
                                type: "success"
                            }), d.value = !1
                        } catch (t) {
                            console.error("Validation failed:", t)
                        } finally {
                            _.value = !1
                        }
                    }
                };
            return u({
                init: e => {
                    var t;
                    (t = v.value) == null || t.resetFields(), a.avatar = e.avatar, a.username = e.username, a.description = e.description, d.value = !0
                }
            }), (e, t) => {
                const y = H,
                    w = Le,
                    T = se,
                    D = J,
                    A = q,
                    I = Oe;
                return m(), S(A, {
                    class: "profileDia",
                    title: "Edit Profile",
                    modelValue: o(d),
                    "onUpdate:modelValue": t[4] || (t[4] = W => Z(d) ? d.value = W : null),
                    "close-on-click-modal": !1
                }, {
                    footer: c(() => [s("span", Zt, [n(D, {
                        onClick: t[3] || (t[3] = W => d.value = !1)
                    }, {
                        default: c(() => t[5] || (t[5] = [V("Cancel")])),
                        _: 1,
                        __: [5]
                    }), n(D, {
                        type: "primary",
                        onClick: b
                    }, {
                        default: c(() => t[6] || (t[6] = [V("Save")])),
                        _: 1,
                        __: [6]
                    })])]),
                    default: c(() => [n(o(Ye), {
                        ref_key: "formRef",
                        ref: v,
                        model: o(a),
                        rules: o(p),
                        "label-width": "auto",
                        "label-position": "top"
                    }, {
                        default: c(() => [n(w, null, {
                            default: c(() => [n(Xt, {
                                class: "upload-avatar",
                                modelValue: o(a).avatar,
                                "onUpdate:modelValue": f,
                                onUpdateLoading: t[0] || (t[0] = W => l.value = W)
                            }, {
                                default: c(() => [s("div", Nt, [Ee((m(), g("div", Yt, [s("img", {
                                    src: o(xe)(o(a).avatar),
                                    class: "avatar"
                                }, null, 8, Lt)])), [
                                    [I, o(l)]
                                ]), o(l) ? U("", !0) : (m(), S(y, {
                                    key: 0,
                                    class: "camera",
                                    name: "camera",
                                    color: "var(--text)"
                                }))])]),
                                _: 1
                            }, 8, ["modelValue"])]),
                            _: 1
                        }), n(w, {
                            label: "Username",
                            prop: "username"
                        }, {
                            default: c(() => [n(T, {
                                modelValue: o(a).username,
                                "onUpdate:modelValue": t[1] || (t[1] = W => o(a).username = W)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }), n(w, {
                            label: "Bio"
                        }, {
                            default: c(() => [n(T, {
                                modelValue: o(a).description,
                                "onUpdate:modelValue": t[2] || (t[2] = W => o(a).description = W)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["model", "rules"])]),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    }),
    qt = F(Jt, [
        ["__scopeId", "data-v-f52bfa3d"]
    ]),
    Ht = {
        class: "flex-between"
    },
    Kt = {
        class: "header"
    },
    jt = {
        class: "header-logo Pixel"
    },
    $t = {
        key: 0,
        class: "navs"
    },
    eo = {
        class: "tools"
    },
    to = {
        class: "user"
    },
    oo = ["src"],
    ao = k({
        __name: "Header",
        setup(h) {
            const u = C(!1),
                r = K(),
                d = X(() => r.walletName === P.OkxWallet ? Ae : r.walletName === P.BinanceWallet ? ge : r.walletName === P.Phantom ? ee : r.walletName === P.Tokenpocket ? _e : ee),
                l = () => {
                    r.setAccount(""), O.disconnectWallet().catch(() => {
                        Q({
                            type: "error",
                            title: "Disconnect Failed",
                            message: "Disconnect wallet failed"
                        })
                    })
                },
                a = () => {
                    ue(r.account)
                },
                p = e => {
                    {
                        window.open("https://x.com/intent/follow?screen_name=pppdotfun", "_blank");
                        return
                    }
                },
                f = $({
                    avatar: "https://ppp.fun/cdn-cgi/imagedelivery/hc5yVyoIvwlbf8YqJjqHMw/QmZk7tVLLrRwUhKcLTQjmSoDccrfzG9PKM6Z4BAzZ941oB/h=120",
                    username: "name",
                    description: "description12"
                }),
                v = C(),
                _ = () => {
                    v.value && v.value.init()
                },
                b = C(),
                i = () => {
                    b.value && b.value.init(f)
                };
            return (e, t) => {
                const y = H,
                    w = L,
                    T = ie,
                    D = J,
                    A = re,
                    I = ce,
                    W = q;
                return m(), g(G, null, [s("div", Ht, [s("div", Kt, [s("div", jt, [s("img", {
                    src: ct,
                    onClick: t[0] || (t[0] = B => e.$router.push("/")),
                    class: "logo"
                })]), o(x) ? U("", !0) : (m(), g("div", $t, [s("span", {
                    class: E(["nav", {
                        active: e.$route.path === "/"
                    }]),
                    onClick: t[1] || (t[1] = B => e.$router.push("/"))
                }, "Board", 2), s("span", {
                    class: E(["nav", {
                        active: e.$route.name === "boardMyNftsPage"
                    }]),
                    onClick: t[2] || (t[2] = B => e.$router.push({
                        name: "boardMyNftsPage"
                    }))
                }, " My NFT ", 2), s("span", {
                    class: E(["nav", {
                        active: e.$route.path === "/ppp/about"
                    }]),
                    onClick: t[3] || (t[3] = B => e.$router.push("/ppp/about"))
                }, " About ", 2), s("span", {
                    class: E(["nav", {
                        active: e.$route.path === "/ppp/faq"
                    }]),
                    onClick: t[4] || (t[4] = B => e.$router.push("/ppp/faq"))
                }, " FAQ ", 2), s("div", {
                    class: "referral",
                    onClick: t[5] || (t[5] = B => e.$router.push({
                        name: "referralPage"
                    }))
                }, t[12] || (t[12] = [s("span", null, "Rewards", -1)]))]))]), s("div", eo, [o(x) ? (m(), g("div", {
                    key: 0,
                    class: "referral",
                    onClick: t[6] || (t[6] = B => e.$router.push({
                        name: "referralPage"
                    }))
                }, t[13] || (t[13] = [s("span", null, "Rewards", -1)]))) : U("", !0), n(y, {
                    name: "X",
                    class: "creater",
                    color: "var(--unhover)",
                    onClick: t[7] || (t[7] = B => p())
                }), U("", !0), o(r).account ? (m(), S(I, {
                    key: 2,
                    type: "primary",
                    placement: "bottom-end",
                    class: "dropdown"
                }, {
                    dropdown: c(() => [n(A, {
                        class: "mobileNavs"
                    }, {
                        default: c(() => [U("", !0), n(T, null, {
                            default: c(() => [s("div", {
                                class: "mobileNav",
                                onClick: a
                            }, [n(w, {
                                class: "copy"
                            }, {
                                default: c(() => [n(o(ne))]),
                                _: 1
                            }), t[15] || (t[15] = s("span", null, "Copy Address", -1))])]),
                            _: 1
                        }), n(T, null, {
                            default: c(() => [n(D, {
                                type: "danger",
                                class: "btn Pixel",
                                onClick: l
                            }, {
                                default: c(() => t[16] || (t[16] = [V("Disconnect")])),
                                _: 1,
                                __: [16]
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    default: c(() => [s("span", to, [s("img", {
                        src: o(d),
                        class: "walletLogo"
                    }, null, 8, oo), s("span", null, R(o(de)(o(r).account)), 1), n(w, null, {
                        default: c(() => [n(o(be))]),
                        _: 1
                    })])]),
                    _: 1
                })) : (m(), S(D, {
                    key: 3,
                    type: "primary",
                    class: "btn Pixel",
                    onClick: t[9] || (t[9] = B => o(r).setShowConnectWallet(!0))
                }, {
                    default: c(() => t[17] || (t[17] = [V("Connect")])),
                    _: 1,
                    __: [17]
                }))])]), n(W, {
                    modelValue: o(u),
                    "onUpdate:modelValue": t[11] || (t[11] = B => Z(u) ? u.value = B : null),
                    title: "Settings",
                    width: "500",
                    center: "",
                    "append-to": ".app"
                }, {
                    default: c(() => [n(Dt, {
                        onListenClose: t[10] || (t[10] = B => u.value = !1)
                    })]),
                    _: 1
                }, 8, ["modelValue"]), n(Gt, {
                    ref_key: "profileRef",
                    ref: v,
                    profileData: o(f),
                    onOpenEdit: i,
                    onDisconnect: l
                }, null, 8, ["profileData"]), n(qt, {
                    ref_key: "editProfileRef",
                    ref: b
                }, null, 512)], 64)
            }
        }
    }),
    so = F(ao, [
        ["__scopeId", "data-v-15a5ae94"]
    ]),
    no = {
        class: "more"
    },
    lo = {
        class: "telUs"
    },
    ro = k({
        __name: "MoreComp",
        setup(h) {
            const u = l => {
                    {
                        window.open("https://x.com/intent/follow?screen_name=pppdotfun", "_blank");
                        return
                    }
                },
                r = le(),
                d = l => {
                    r.push({
                        name: l
                    })
                };
            return (l, a) => {
                const p = ie,
                    f = H,
                    v = re;
                return m(), S(v, null, {
                    default: c(() => [s("div", no, [n(p, {
                        class: "link",
                        onClick: a[0] || (a[0] = _ => d("aboutPage"))
                    }, {
                        default: c(() => a[4] || (a[4] = [V("About")])),
                        _: 1,
                        __: [4]
                    }), n(p, {
                        class: "link",
                        onClick: a[1] || (a[1] = _ => d("workPage")),
                        target: "_blank"
                    }, {
                        default: c(() => a[5] || (a[5] = [V("How It Works?")])),
                        _: 1,
                        __: [5]
                    }), n(p, {
                        class: "link",
                        onClick: a[2] || (a[2] = _ => d("faqPage")),
                        target: "_blank"
                    }, {
                        default: c(() => a[6] || (a[6] = [V("FQA")])),
                        _: 1,
                        __: [6]
                    }), s("div", lo, [n(f, {
                        name: "X",
                        class: "creater",
                        color: "var(--unhover)",
                        onClick: a[3] || (a[3] = _ => u("twitter"))
                    })])])]),
                    _: 1
                })
            }
        }
    }),
    io = F(ro, [
        ["__scopeId", "data-v-e2abaf41"]
    ]),
    co = {
        class: "tabbar"
    },
    uo = k({
        __name: "Tabbar",
        setup(h) {
            const u = C(!1),
                r = le(),
                d = l => {
                    r.push({
                        name: l
                    })
                };
            return (l, a) => {
                const p = L,
                    f = ce;
                return m(), g("div", co, [s("div", {
                    class: E(["tab", {
                        active: l.$route.name === "boardPage"
                    }]),
                    onClick: a[0] || (a[0] = v => d("boardPage"))
                }, [n(p, {
                    class: "icon"
                }, {
                    default: c(() => [n(o(Se))]),
                    _: 1
                })], 2), s("div", {
                    class: E(["tab", {
                        active: l.$route.name === "boardCreatePage"
                    }]),
                    onClick: a[1] || (a[1] = v => d("boardCreatePage"))
                }, [n(p, {
                    class: "icon"
                }, {
                    default: c(() => [n(o(Ve))]),
                    _: 1
                })], 2), s("div", {
                    class: E(["tab", {
                        active: l.$route.name === "boardMyNftsPage"
                    }]),
                    onClick: a[2] || (a[2] = v => d("boardMyNftsPage"))
                }, [n(p, {
                    class: "icon"
                }, {
                    default: c(() => [n(o(Be))]),
                    _: 1
                })], 2), n(f, {
                    "popper-class": "morePopper",
                    class: "tab",
                    placement: "top",
                    "hide-on-click": !0
                }, {
                    dropdown: c(() => [n(io)]),
                    default: c(() => [s("div", {
                        class: "tab",
                        onClick: a[3] || (a[3] = v => u.value = !o(u))
                    }, [n(p, {
                        class: "icon more"
                    }, {
                        default: c(() => [n(o(Pe))]),
                        _: 1
                    })])]),
                    _: 1
                })])
            }
        }
    }),
    po = F(uo, [
        ["__scopeId", "data-v-ad018a2c"]
    ]),
    mo = {
        class: "connect-wallet"
    },
    fo = ["onClick"],
    vo = ["src"],
    Ao = {
        class: "name"
    },
    go = k({
        __name: "ConnectWallets",
        emits: ["listenClose"],
        setup(h, {
            emit: u
        }) {
            const r = localStorage.getItem("usedWallets"),
                d = r ? JSON.parse(r) : [],
                l = C([{
                    name: "Phantom",
                    icon: ee,
                    type: P.Phantom,
                    lastTime: 0,
                    isWalletAppOpen: !1
                }, {
                    name: "OKX Wallet",
                    icon: Ae,
                    type: P.OkxWallet,
                    lastTime: 0,
                    isWalletAppOpen: !1
                }, {
                    name: "Binance Wallet",
                    icon: ge,
                    type: P.BinanceWallet,
                    lastTime: 0,
                    isWalletAppOpen: !1
                }, {
                    name: "TokenPocket",
                    icon: _e,
                    type: P.Tokenpocket,
                    lastTime: 0,
                    isWalletAppOpen: !1
                }]);
            l.value.forEach(i => {
                const e = d.find(t => t.type === i.type);
                i.lastTime = e ? e.lastTime : 0
            }), l.value.sort((i, e) => e.lastTime - i.lastTime);
            const a = () => {
                if (x.value) {
                    if (navigator.userAgent.includes("TokenPocket")) return P.Tokenpocket;
                    if ("okxwallet" in window) return P.OkxWallet;
                    if ("solana" in window && window.solana.isBinance) return P.BinanceWallet
                }
                return ""
            };
            (() => {
                const i = a();
                if (i) {
                    const e = l.value.find(t => t.type === i);
                    e && (e.isWalletAppOpen = !0, l.value = l.value.filter(t => t.type !== i), l.value.unshift(e))
                }
            })();
            const f = u,
                v = K(),
                _ = async i => {
                    i.lastTime = ze(), d.unshift(i), localStorage.setItem("usedWallets", JSON.stringify(d)), l.value.sort((t, y) => y.lastTime - t.lastTime);
                    const e = i.type;
                    v.setWalletName(e), O.init(e), O.connectWallet().then(async t => {
                        await b(t), f("listenClose")
                    }).catch(t => {
                        Q({
                            type: "error",
                            title: "Connect Failed",
                            message: t.message || "Connect wallet failed"
                        })
                    })
                }, b = async i => {
                    try {
                        const e = await Je(i);
                        v.setUserInfo(e)
                    } catch (e) {
                        if (e.message.indexOf("Login expired") > -1) return await b(i);
                        throw v.setAccount(""), O.disconnectWallet(), new Error(e.message || "Token verification failed")
                    }
                };
            return (i, e) => (m(), g("div", mo, [(m(!0), g(G, null, j(o(l), t => (m(), g("div", {
                class: "item",
                key: t.name,
                onClick: y => _(t)
            }, [s("img", {
                src: t.icon,
                class: "icon"
            }, null, 8, vo), s("div", Ao, R(t.name), 1)], 8, fo))), 128))]))
        }
    }),
    _o = F(go, [
        ["__scopeId", "data-v-ac325415"]
    ]),
    yo = {
        key: 0,
        class: "tabbarDiv"
    },
    Co = k({
        __name: "Index",
        setup(h) {
            const u = K(),
                r = De(),
                d = C(),
                l = async () => {
                    const p = sessionStorage.getItem("boardHeight");
                    d.value.$el.scrollTo(0, Number(p || 0))
                };
            Ue(() => r.name, (p, f) => {
                f === "boardPage" && p === "boardDetailPage" ? (sessionStorage.setItem("boardHeight", d.value.$el.scrollTop + ""), d.value.$el.scrollTo(0, 0)) : f === "boardDetailPage" && p === "boardPage" ? l() : (sessionStorage.removeItem("boardHeight"), l(), p === "boardPage" && Ze.$emit("updateProjects"))
            }, {
                deep: !0
            });
            const a = () => {
                const f = new URLSearchParams(window.location.search).get("ref");
                f && localStorage.setItem("refCode", f)
            };
            return ae(() => {
                a()
            }), (p, f) => {
                const v = rt,
                    _ = Qe,
                    b = We("router-view"),
                    i = Re,
                    e = it,
                    t = lt,
                    y = q;
                return m(), g(G, null, [f[3] || (f[3] = s("div", {
                    class: "bg"
                }, null, -1)), n(t, {
                    class: E(["layout-container", {
                        hasBar: o(x) && o(r).meta.showTabbar
                    }])
                }, {
                    default: c(() => [!o(x) || o(r).meta.showMoboleHeader ? (m(), S(v, {
                        key: 0
                    }, {
                        default: c(() => [n(so)]),
                        _: 1
                    })) : U("", !0), n(e, null, {
                        default: c(() => [n(i, {
                            class: "layout-row",
                            ref_key: "layoutRow",
                            ref: d
                        }, {
                            default: c(() => [n(_, {
                                xs: 0,
                                sm: 1
                            }), n(_, {
                                xs: 24,
                                sm: 22
                            }, {
                                default: c(() => [n(b, null, {
                                    default: c(({
                                        Component: w
                                    }) => [(m(), S(Te, null, [p.$route.meta.keepAlive ? (m(), S(oe(w), {
                                        key: p.$route.name
                                    })) : U("", !0)], 1024)), p.$route.meta.keepAlive ? U("", !0) : (m(), S(oe(w), {
                                        key: 0
                                    }))]),
                                    _: 1
                                })]),
                                _: 1
                            }), n(_, {
                                xs: 0,
                                sm: 1
                            })]),
                            _: 1
                        }, 512)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["class"]), o(x) && o(r).meta.showTabbar ? (m(), g("div", yo, [f[2] || (f[2] = s("div", {
                    class: "null"
                }, null, -1)), n(po)])) : U("", !0), n(y, {
                    modelValue: o(u).showConnectWallet,
                    "onUpdate:modelValue": f[1] || (f[1] = w => o(u).showConnectWallet = w),
                    title: "Connect Wallet",
                    width: "500",
                    center: "",
                    "append-to": ".app"
                }, {
                    default: c(() => [n(_o, {
                        onListenClose: f[0] || (f[0] = w => o(u).setShowConnectWallet(!1))
                    })]),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    }),
    Io = F(Co, [
        ["__scopeId", "data-v-efce0b9c"]
    ]);
export {
    Io as
    default
};
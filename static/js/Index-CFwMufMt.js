import {
    d as Z,
    v as B,
    m as d,
    o as u,
    l as s,
    k as e,
    e as t,
    t as _,
    x as L,
    ad as _e,
    p as h,
    B as ee,
    h as w,
    O as le,
    b as D,
    H as $e,
    A as we,
    j as Se,
    c as X,
    G as he,
    P as Ne,
    i as Be,
    n as W,
    y as Me,
    aj as it,
    z as Te,
    E as be,
    am as ct,
    F as pe,
    s as Oe,
    M as Nt,
    J as ut,
    q as H,
    bf as Bt,
    bg as Mt,
    bh as Lt,
    bi as Ft,
    bj as ot,
    bk as Et,
    at as Vt
} from "./index-DejQ-iz-.js";
import {
    E as Je,
    a as Qe
} from "./el-col-CGhe7whV.js";
import {
    c as xe
} from "./isMobile-DPHpSBeS.js";
import {
    E as dt
} from "./el-popper-DfMgMTnx.js";
import {
    E as Ze
} from "./el-popover-DUijcrBC.js";
import {
    _ as Ie
} from "./SvgIcon-BS4YQbSZ.js";
import {
    _ as ge
} from "./SOL-C9Tst582.js";
import {
    g as ye,
    c as ke,
    m as Ue,
    h as Xe,
    b as K,
    i as He,
    u as De,
    E as G,
    t as Re,
    I as ve,
    k as pt,
    e as fe,
    n as Rt,
    f as Ke,
    d as We,
    o as mt,
    p as Ot
} from "./index-Brp1LNR4.js";
import {
    _ as qe
} from "./fetchRequest-DnbIkz7g.js";
import {
    E as ft,
    _ as _t
} from "./CountDown-Dz7lloNh.js";
import {
    E as et
} from "./el-progress-CQCGwsfG.js";
import {
    a as vt,
    s as gt,
    b as xt,
    c as Ut
} from "./projectApi-CUEHPrzz.js";
import {
    v as Le,
    u as Ge,
    g as at,
    P as yt,
    T as ze,
    w as ie,
    p as qt,
    a as Gt,
    B as je
} from "./el-loading-KWzNfS69.js";
import {
    N as Kt,
    a as zt,
    g as Yt,
    E as Xt,
    b as Ht
} from "./el-message-X88lOFud.js";
import {
    e as Ae,
    s as Wt,
    t as kt,
    d as Jt,
    a as Qt,
    b as Zt
} from "./tools-0n07ovjN.js";
import {
    b as ce
} from "./bus-CpQP4H_1.js";
import {
    g as ht,
    S as es,
    c as ts,
    s as nt,
    b as ss,
    a as os,
    d as as
} from "./SwapOutLinkComp-DCEezQxu.js";
import {
    E as ns,
    a as ls
} from "./el-table-column-CGTyOCrV.js"; /* empty css               */
import "./el-divider-BmWAspa3.js";
import {
    E as rs
} from "./index-uS1K0iTG.js";
import {
    _ as is
} from "./AppTitle-VMh4pfQS.js";
import {
    M as cs,
    N as us
} from "./NextRoundProgress-CXWtRJUE.js";
import {
    g as ds,
    a as ps,
    b as ms
} from "./raydium-pda-BIkJKZEq.js";
import {
    E as fs
} from "./el-dialog-BXbic-ED.js";
import {
    likeCommentApi as lt,
    likeApi as _s,
    unlikeApi as vs,
    getCommentApi as gs,
    postCommentApi as ys,
    sseThreadEvents as ks,
    getMessageApi as hs,
    postMessageApi as bs
} from "./user-rn3_sb6w.js";
import "./dropdown-BXx2P874.js";
import "./debounce-B0TYyvOo.js";
import "./isEqual-m-EOcnpd.js";
import "./castArray-G03HepT3.js";
const Ds = ["src"],
    js = {
        class: "programName"
    },
    $s = {
        class: "name"
    },
    Ts = {
        class: "programId"
    },
    Is = {
        class: "community"
    },
    ws = {
        class: "creator"
    },
    Ss = {
        class: "desc"
    },
    Cs = {
        class: "infos"
    },
    Ps = {
        class: "info"
    },
    As = {
        class: "value"
    },
    Ns = {
        class: "info"
    },
    Bs = {
        class: "value"
    },
    Ms = {
        class: "info"
    },
    Ls = {
        class: "value"
    },
    Fs = {
        class: "info"
    },
    Es = {
        class: "value"
    },
    Vs = {
        class: "info"
    },
    Rs = {
        class: "value"
    };
const Os = Z({
        __name: "DetailHeader",
        props: {
            projectData: {}
        },
        setup(I) {
            const n = i => {
                window.open(i, "_blank")
            };
            return (i, a) => {
                const m = Ie,
                    f = Ze,
                    j = Qe,
                    $ = Je;
                return u(), B($, {
                    class: "detailHeader"
                }, {
                    default: d(() => [s(j, {
                        lg: 10,
                        sm: 24,
                        class: "program"
                    }, {
                        default: d(() => {
                            var y, b, l, r, v, p, c, S;
                            return [e("img", {
                                src: t(ye)(((y = i.projectData) == null ? void 0 : y.image_url) || ""),
                                class: "programImg",
                                alt: ""
                            }, null, 8, Ds), e("div", js, [e("div", $s, [e("span", Ts, _((b = i.projectData) == null ? void 0 : b.project_name), 1), e("div", Is, [(l = i.projectData) != null && l.twitter ? (u(), B(m, {
                                key: 0,
                                name: "X",
                                onClick: a[0] || (a[0] = _e(k => {
                                    var C;
                                    return n(((C = i.projectData) == null ? void 0 : C.twitter) || "")
                                }, ["stop"])),
                                class: "iconSvg",
                                color: "#fff"
                            })) : L("", !0), (r = i.projectData) != null && r.telegram ? (u(), B(m, {
                                key: 1,
                                name: "TelegramWhite",
                                onClick: a[1] || (a[1] = _e(k => {
                                    var C;
                                    return n(((C = i.projectData) == null ? void 0 : C.telegram) || "")
                                }, ["stop"])),
                                class: "iconSvg ml20",
                                color: "#fff"
                            })) : L("", !0), (v = i.projectData) != null && v.website ? (u(), B(m, {
                                key: 2,
                                name: "website",
                                onClick: a[2] || (a[2] = _e(k => {
                                    var C;
                                    return n(((C = i.projectData) == null ? void 0 : C.website) || "")
                                }, ["stop"])),
                                class: "iconSvg",
                                color: "#fff"
                            })) : L("", !0)])]), e("div", ws, [e("span", {
                                class: "pubkey",
                                onClick: a[3] || (a[3] = k => {
                                    var C;
                                    return n(`https://explorer.solana.com/address/${((C=i.projectData)==null?void 0:C.creator_pubkey)||""}`)
                                })
                            }, _(t(ke)(((p = i.projectData) == null ? void 0 : p.creator_pubkey) || "")), 1), h(" created at " + _(t(Ue)((((c = i.projectData) == null ? void 0 : c.unix_ts) || 0) * 1e3)), 1)]), s(f, {
                                width: "300",
                                content: (S = i.projectData) == null ? void 0 : S.project_desc,
                                placement: "bottom-start"
                            }, {
                                reference: d(() => {
                                    var k;
                                    return [e("div", Ss, _(((k = i.projectData) == null ? void 0 : k.project_desc) || "-"), 1)]
                                }),
                                _: 1
                            }, 8, ["content"])])]
                        }),
                        _: 1
                    }), s(j, {
                        lg: {
                            span: 12,
                            offset: 2
                        },
                        sm: 24,
                        style: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, {
                        default: d(() => {
                            var y, b, l, r, v;
                            return [e("div", Cs, [e("div", Ps, [a[5] || (a[5] = e("div", {
                                class: "name"
                            }, "Market Cap", -1)), e("div", As, [a[4] || (a[4] = e("img", {
                                src: ge,
                                class: "coin"
                            }, null, -1)), e("span", null, _(t(Xe)(((y = i.projectData) == null ? void 0 : y.market_cap) || 0, 2)), 1)])]), e("div", Ns, [a[7] || (a[7] = e("div", {
                                class: "name"
                            }, "Volume(24H)", -1)), e("div", Bs, [a[6] || (a[6] = e("img", {
                                src: ge,
                                class: "coin"
                            }, null, -1)), e("span", null, _(t(K)(((b = i.projectData) == null ? void 0 : b.volume_24h) || 0, 10 ** 9).toFixed(2)), 1)])]), e("div", Ms, [a[8] || (a[8] = e("div", {
                                class: "name"
                            }, "Period", -1)), e("div", Ls, _(t(He)(((l = i.projectData) == null ? void 0 : l.sec_per_round) || 0)), 1)]), e("div", Fs, [a[9] || (a[9] = e("div", {
                                class: "name"
                            }, "Increment", -1)), e("div", Es, _(t(K)(((r = i.projectData) == null ? void 0 : r.increase_per_round) || 0, 100)) + "%", 1)]), e("div", Vs, [a[10] || (a[10] = e("div", {
                                class: "name"
                            }, "Trade Fees", -1)), e("div", Rs, _(t(K)(((v = i.projectData) == null ? void 0 : v.trade_fee_rate) || 0, 100)) + "%", 1)])]), L("", !0)]
                        }),
                        _: 1
                    })]),
                    _: 1
                })
            }
        }
    }),
    xs = ee(Os, [
        ["__scopeId", "data-v-41a5faf9"]
    ]),
    Us = {
        class: "marketNft"
    },
    qs = {
        class: "nft"
    },
    Gs = {
        class: "owner"
    },
    Ks = {
        class: "infos"
    },
    zs = {
        class: "info"
    },
    Ys = {
        class: "price"
    },
    Xs = {
        key: 2,
        class: "btns"
    },
    Hs = Z({
        __name: "MarketNftComp",
        props: {
            showMore: {
                type: Boolean
            },
            mintPercentage: {},
            nftInfo: {},
            projectData: {},
            programInfo: {},
            mintAccounts: {},
            buyAccounts: {}
        },
        emits: ["updateProjectData", "updateNftsInfo"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = I,
                m = De(),
                f = async l => {
                    if (a.mintPercentage < 100) {
                        G({
                            title: "Mint Error",
                            message: "Mint is not completed",
                            type: "error"
                        });
                        return
                    }
                    if (!m.account) {
                        G({
                            title: "Please connect wallet",
                            message: "Please connect wallet",
                            type: "error"
                        }), m.setShowConnectWallet(!0);
                        return
                    }
                    if (l.loadingBuy) return;
                    l.loadingBuy = !0;
                    const r = a.buyAccounts,
                        v = a.programInfo.project_PDA;
                    if (!(!r || !v || !a.projectData)) try {
                        await Yt(v, r, l.nft_id, a.projectData.creator_pubkey), setTimeout(() => {
                            i("updateProjectData"), l.loadingBuy = !1
                        }, 1e3), G({
                            title: "Success",
                            message: "Buy successfully",
                            type: "success"
                        })
                    } catch (p) {
                        console.error(p), l.loadingBuy = !1, G({
                            title: "Buy NFT Error",
                            message: Ae(p) || "Buy NFT failed",
                            type: "error"
                        })
                    }
                }, j = () => {
                    if (!a.nftInfo || !a.projectData) return 0;
                    if (a.nftInfo.round < a.projectData.round) return y.value = !0, $.value = 0, 0;
                    const l = a.projectData.last_round * 1e3,
                        r = a.projectData.sec_per_round * 1e3;
                    if (Re() > l + r) {
                        y.value = !0, $.value = 0;
                        return
                    }
                    y.value = !1, $.value = l + r
                }, $ = w(0), y = w(!1);
            le([() => a.nftInfo, () => a.projectData], () => {
                j()
            }, {
                deep: !0,
                immediate: !0
            });
            const b = l => {
                const r = K(l, 1e9);
                return Number(r.toFixed(6))
            };
            return (l, r) => {
                var k, C;
                const v = ft,
                    p = _t,
                    c = we,
                    S = Le;
                return u(), D("div", Us, [e("div", qs, [s(v, {
                    src: t(ye)(((k = l.projectData) == null ? void 0 : k.nft_image_url) || "", 300),
                    fit: "cover",
                    class: "nftImg"
                }, {
                    placeholder: d(() => r[2] || (r[2] = [e("div", {
                        class: "image-slot"
                    }, [h("Loading"), e("span", {
                        class: "dot"
                    }, "...")], -1)])),
                    _: 1
                }, 8, ["src"]), e("div", Gs, _(t(ke)(l.nftInfo.owner_pubkey)), 1)]), e("div", Ks, [e("div", zs, _((C = l.projectData) == null ? void 0 : C.nft_name) + "#" + _(l.nftInfo.nft_id), 1), e("div", Ys, [r[3] || (r[3] = e("img", {
                    src: ge,
                    class: "priceImg"
                }, null, -1)), e("span", null, _(b(l.nftInfo.price || 0)), 1)])]), l.showMore ? (u(), B(Kt, {
                    key: 0,
                    projectData: l.projectData,
                    nftInfo: l.nftInfo
                }, null, 8, ["projectData", "nftInfo"])) : L("", !0), l.showMore ? (u(), B(zt, {
                    key: 1,
                    projectData: l.projectData,
                    nftInfo: l.nftInfo
                }, null, 8, ["projectData", "nftInfo"])) : L("", !0), l.mintPercentage >= 100 ? (u(), D("div", Xs, [t(y) ? $e((u(), B(c, {
                    key: 1,
                    type: "primary",
                    class: "btn",
                    disabled: t(m).account === l.nftInfo.owner_pubkey,
                    onClick: r[1] || (r[1] = V => f(l.nftInfo))
                }, {
                    default: d(() => r[4] || (r[4] = [h(" Buy ")])),
                    _: 1,
                    __: [4]
                }, 8, ["disabled"])), [
                    [S, l.nftInfo.loadingBuy ?? !1]
                ]) : (u(), B(c, {
                    key: 0,
                    type: "primary",
                    class: "btn",
                    disabled: ""
                }, {
                    default: d(() => [s(p, {
                        endTime: t($),
                        onEndTime: r[0] || (r[0] = V => y.value = !0)
                    }, null, 8, ["endTime"])]),
                    _: 1
                }))])) : L("", !0)])
            }
        }
    }),
    bt = ee(Hs, [
        ["__scopeId", "data-v-65edf461"]
    ]),
    Ws = {
        class: "kline-iframe"
    },
    Js = ["src"],
    Qs = Z({
        __name: "DexscreenerIframe",
        props: {
            projectData: {}
        },
        setup(I) {
            const n = w(!0),
                i = w(),
                a = I,
                m = Ge(),
                f = w({
                    address: m.TokenIds.SOL.toBase58(),
                    decimals: 9
                }),
                j = async b => {
                    if (b.address) {
                        n.value = !0;
                        try {
                            const {
                                poolAddress: l
                            } = await ht({
                                inputToken: f.value.address,
                                outputToken: b.address
                            });
                            $(l.toBase58())
                        } catch {}
                    }
                };
            le(() => {
                var b;
                return (b = a.projectData) == null ? void 0 : b.mint_pubkey
            }, () => {
                var b, l;
                (b = a.projectData) != null && b.mint_pubkey && j({
                    address: (l = a.projectData) == null ? void 0 : l.mint_pubkey,
                    decimals: 6
                })
            }, {
                immediate: !0,
                deep: !0
            });
            const $ = b => {
                    y.value = b, setTimeout(() => {
                        i.value && (n.value = !0, i.value.onload = () => {
                            n.value = !1
                        })
                    }, 200)
                },
                y = w("");
            return ce.$on("showDexscreenerChat", b => {
                $(b)
            }), Se(() => {
                ce.$off("showDexscreenerChat")
            }), (b, l) => {
                const r = Le;
                return $e((u(), D("div", Ws, [t(y) ? (u(), D("iframe", {
                    key: 0,
                    class: "iframe",
                    ref_key: "iframe",
                    ref: i,
                    src: `https://dexscreener.com/solana/${t(y)}?embed=1&loadChartSettings=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15`,
                    frameborder: "0",
                    width: "100%"
                }, null, 8, Js)) : L("", !0)])), [
                    [r, t(n)]
                ])
            }
        }
    }),
    Dt = ee(Qs, [
        ["__scopeId", "data-v-f77fa050"]
    ]),
    Zs = {
        class: "nftTable"
    },
    eo = {
        class: "title"
    },
    to = {
        class: "tabs flex-start"
    },
    so = {
        class: "progressDiv"
    },
    oo = {
        key: 0,
        class: "mintDiv"
    },
    ao = {
        class: "progress"
    },
    no = {
        class: "time"
    },
    lo = {
        class: "flexc"
    },
    ro = {
        class: "name"
    },
    io = {
        class: "tip"
    },
    co = {
        key: 1,
        class: "saleDiv"
    },
    uo = {
        class: "progress"
    },
    po = {
        class: "time"
    },
    mo = {
        class: "flexc"
    },
    fo = {
        class: "name"
    },
    _o = {
        class: "progress"
    },
    vo = {
        class: "time"
    },
    go = {
        class: "flexc"
    },
    yo = {
        class: "tip"
    },
    ko = {
        class: "filterLists"
    },
    ho = {
        class: "filter"
    },
    bo = {
        class: "lists"
    },
    Do = Z({
        __name: "NftTable",
        props: {
            projectData: {},
            programInfo: {},
            mintAccounts: {},
            buyAccounts: {}
        },
        emits: ["updateProjectData"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = I,
                m = w(0),
                f = X(() => {
                    var P, N;
                    return K((P = a.projectData) == null ? void 0 : P.nft_id, (N = a.projectData) == null ? void 0 : N.init_nft_supply) * 100
                }),
                j = X(() => a.projectData ? K(a.projectData.nft_issue_count, a.projectData.max_nft_supply) * 100 : 0),
                $ = () => {
                    p.page = 1, p.has_more = !0, k()
                },
                y = w(0),
                b = P => {
                    if (a.projectData)
                        if (P > 0) {
                            const N = Math.max(0, (1 - K(P, a.projectData.sec_per_round * 1e3)) * 100);
                            y.value = N > 100 ? 100 : N
                        } else y.value = 100
                },
                l = w(!1),
                r = w(!1),
                v = () => {
                    r.value = !0, i("updateProjectData"), F == null || F.close(), se(), $(), setTimeout(() => {
                        r.value = !1
                    }, 1e3)
                },
                p = he({
                    list: [],
                    total: 0,
                    page: 1,
                    limit: 100,
                    total_pages: 1,
                    has_more: !0,
                    loading: !1
                }),
                c = Ne(),
                S = X(() => c.params.id),
                k = async () => {
                    if (!(p.loading || !p.has_more)) {
                        p.loading = !0;
                        try {
                            const P = {
                                    limit: p.limit,
                                    page: p.page,
                                    sort: te.value,
                                    nft_id: C() ? V.value : "",
                                    owner_pubkey: C() ? "" : V.value,
                                    order: "asc"
                                },
                                N = await vt(S.value, P);
                            p.page === 1 && (p.list = []), p.list.push(...N.data), p.total = N.meta.total, p.page = ++N.meta.page, p.limit = N.meta.limit, p.total_pages = N.meta.total_pages, p.has_more = N.meta.has_more, p.loading = !1
                        } catch (P) {
                            console.error(P)
                        } finally {
                            p.loading = !1
                        }
                    }
                }, C = () => V.value && !isNaN(Number(V.value)), V = w("");
            le(V, () => {
                Y()
            });
            const E = async () => {
                p.page = 1, p.has_more = !0, await k()
            }, Y = pt(E, 500), M = X(() => p.list), U = w(), te = w(ve.TradeTime), x = P => {
                var N;
                te.value = P, E(), (N = U.value) == null || N.hide()
            };
            let F;
            const se = async () => {
                S.value && (F = await gt(S.value, P => {
                    const N = [];
                    for (const z in P.nfts) N.push(P.nft[z]);
                    P.nft && N.push(P.nft), N.forEach(z => {
                        const oe = p.list.findIndex(A => A.nft_pubkey === z.nft_pubkey);
                        oe !== -1 && Object.assign(p.list[oe], z), P.eventType === "Burn" && (p.list = p.list.filter(A => A.nft_pubkey !== z.nft_pubkey))
                    })
                }, P => {
                    console.error(P)
                }))
            };
            return Be(() => {
                ce.$on("updateNftsInfo", $), se()
            }), Se(() => {
                ce.$off("updateNftsInfo"), F == null || F.close()
            }), (P, N) => {
                const z = Qe,
                    oe = et,
                    A = _t,
                    T = Me,
                    J = Ie,
                    ne = Ze,
                    ue = be,
                    me = Je,
                    Ce = qe;
                return u(), D("div", Zs, [e("div", eo, [s(me, null, {
                    default: d(() => [s(z, {
                        lg: 6,
                        xl: 12
                    }, {
                        default: d(() => [e("div", to, [e("div", {
                            class: W(["tab", {
                                act: t(m) === 0
                            }]),
                            onClick: N[0] || (N[0] = g => m.value = 0)
                        }, "Market", 2), t(f) >= 100 ? (u(), D("div", {
                            key: 0,
                            class: W(["tab", {
                                act: t(m) === 1
                            }]),
                            onClick: N[1] || (N[1] = g => m.value = 1)
                        }, " Chart ", 2)) : L("", !0)])]),
                        _: 1
                    }), s(z, {
                        lg: 18,
                        xl: 24
                    }, {
                        default: d(() => {
                            var g, o, R, q, ae, Q, de;
                            return [e("div", so, [t(f) < 100 ? (u(), D("div", oo, [e("div", ao, [e("div", no, [e("div", lo, [e("div", ro, " Minting Progress: " + _(Number(t(f).toFixed(2))) + "% ", 1), e("span", io, "(" + _(((g = P.projectData) == null ? void 0 : g.nft_id) || 0) + "/" + _(((o = P.projectData) == null ? void 0 : o.init_nft_supply) || 0) + ")", 1)]), s(oe, {
                                class: "progressBar",
                                "text-inside": !1,
                                "stroke-width": 6,
                                percentage: t(f),
                                "show-text": !1
                            }, null, 8, ["percentage"])])])])) : (u(), D("div", co, [e("div", uo, [e("div", po, [e("div", mo, [e("div", fo, "Round#" + _((R = P.projectData) == null ? void 0 : R.round) + ":", 1), s(A, {
                                endTime: (((q = P.projectData) == null ? void 0 : q.last_round) || 0) * 1e3 + (((ae = P.projectData) == null ? void 0 : ae.sec_per_round) || 0) * 1e3,
                                onChangeTime: b
                            }, null, 8, ["endTime"])]), s(oe, {
                                class: "progressBar",
                                "text-inside": !1,
                                "stroke-width": 5,
                                percentage: t(y),
                                color: "#2ebd85",
                                "show-text": !1
                            }, null, 8, ["percentage"])])]), e("div", _o, [e("div", vo, [e("div", go, [N[8] || (N[8] = e("div", {
                                class: "name"
                            }, "NFT Supply:", -1)), e("span", yo, "(" + _(((Q = P.projectData) == null ? void 0 : Q.nft_issue_count) || 0) + "/" + _(((de = P.projectData) == null ? void 0 : de.max_nft_supply) || 0) + ")", 1)]), s(oe, {
                                class: "progressBar",
                                "text-inside": !1,
                                "show-text": !1,
                                "stroke-width": 5,
                                percentage: t(j),
                                color: "#e6a23c"
                            }, null, 8, ["percentage"])])])])), s(T, {
                                modelValue: t(V),
                                "onUpdate:modelValue": N[2] || (N[2] = re => Te(V) ? V.value = re : null),
                                class: "searchIpt",
                                placeholder: "ID / Owner",
                                "prefix-icon": t(it)
                            }, null, 8, ["modelValue", "prefix-icon"]), s(ne, {
                                ref_key: "sortPopoverRef",
                                ref: U,
                                placement: "bottom",
                                width: 120,
                                trigger: "click"
                            }, {
                                reference: d(() => [e("div", ho, [s(J, {
                                    name: "sort",
                                    class: "iconSvg",
                                    color: "#fff"
                                })])]),
                                default: d(() => [e("div", ko, [e("div", {
                                    class: "filterList",
                                    onClick: N[3] || (N[3] = re => x(t(ve).ID))
                                }, "ID"), e("div", {
                                    class: "filterList",
                                    onClick: N[4] || (N[4] = re => x(t(ve).Price))
                                }, "Price"), e("div", {
                                    class: "filterList",
                                    onClick: N[5] || (N[5] = re => x(t(ve).TradeTime))
                                }, " Last Trade ")])]),
                                _: 1
                            }, 512), e("div", {
                                class: "filter",
                                onClick: v
                            }, [s(ue, {
                                class: W(["icon", {
                                    refreshing: t(r)
                                }])
                            }, {
                                default: d(() => [s(t(ct))]),
                                _: 1
                            }, 8, ["class"])]), e("div", {
                                class: W(["filter", {
                                    act: t(l)
                                }]),
                                onClick: N[6] || (N[6] = re => l.value = !t(l))
                            }, [s(J, {
                                name: "Switch",
                                class: "iconSvg",
                                color: t(l) ? "#29D4B0" : "#fff"
                            }, null, 8, ["color"])], 2)])]
                        }),
                        _: 1
                    })]),
                    _: 1
                })]), t(m) === 0 ? (u(), D(pe, {
                    key: 0
                }, [e("div", bo, [(u(!0), D(pe, null, Oe(t(M), (g, o) => (u(), B(bt, {
                    key: o,
                    showMore: t(l),
                    mintPercentage: t(f),
                    nftInfo: g,
                    projectData: P.projectData,
                    buyAccounts: P.buyAccounts,
                    mintAccounts: P.mintAccounts,
                    programInfo: P.programInfo,
                    onUpdateProjectData: N[7] || (N[7] = R => i("updateProjectData")),
                    onUpdateNftsInfo: $
                }, null, 8, ["showMore", "mintPercentage", "nftInfo", "projectData", "buyAccounts", "mintAccounts", "programInfo"]))), 128))]), s(Ce, {
                    more: t(p).has_more,
                    method: k
                }, null, 8, ["more"])], 64)) : (u(), B(Dt, {
                    key: 1,
                    projectData: P.projectData
                }, null, 8, ["projectData"]))])
            }
        }
    }),
    jo = ee(Do, [
        ["__scopeId", "data-v-8eb7b717"]
    ]),
    $o = {
        class: "trades"
    },
    To = {
        class: "typeDiv"
    },
    Io = {
        class: "flexc"
    },
    wo = {
        class: "tip"
    },
    So = Z({
        __name: "NftTrades",
        setup(I) {
            const n = he({
                    list: [],
                    total: 0,
                    page: 1,
                    limit: 50,
                    total_pages: 1,
                    has_more: !0,
                    loading: !1
                }),
                i = Ne(),
                a = X(() => i.params.id),
                m = async () => {
                    if (!(!n.has_more || n.loading)) {
                        n.page === 1 && (n.list = []), n.loading = !0;
                        try {
                            const f = await xt(a.value, {
                                limit: n.limit,
                                page: n.page
                            });
                            n.list.push(...f.data), n.total = f.meta.total, n.page = ++f.meta.page, n.limit = f.meta.limit, n.total_pages = f.meta.total_pages, n.has_more = f.meta.has_more, n.loading = !1
                        } catch (f) {
                            console.error(f)
                        }
                    }
                };
            return (f, j) => {
                const $ = ls,
                    y = rs,
                    b = qe,
                    l = ns;
                return u(), D("div", $o, [s(l, {
                    class: "tradesTable",
                    data: t(n).list,
                    "table-layout": "auto",
                    style: {
                        width: "100%"
                    },
                    height: (t(xe), "auto")
                }, {
                    append: d(() => [s(b, {
                        more: t(n).has_more,
                        method: m
                    }, null, 8, ["more"])]),
                    default: d(() => [s($, {
                        prop: "to_pubkey",
                        label: "User"
                    }, {
                        default: d(r => [h(_(t(ke)(r.row.to_pubkey)), 1)]),
                        _: 1
                    }), s($, {
                        label: "Type",
                        "header-align": "center"
                    }, {
                        default: d(r => [e("div", To, [r.row.act === "Mint" ? (u(), B(y, {
                            key: 0,
                            type: "success"
                        }, {
                            default: d(() => [h("Mint #" + _(r.row.nft_id), 1)]),
                            _: 2
                        }, 1024)) : L("", !0), r.row.act === "Buy" ? (u(), B(y, {
                            key: 1,
                            type: "success"
                        }, {
                            default: d(() => [h("Buy #" + _(r.row.nft_id), 1)]),
                            _: 2
                        }, 1024)) : L("", !0), r.row.act === "Sell" ? (u(), B(y, {
                            key: 2,
                            type: "danger"
                        }, {
                            default: d(() => [h("Sell #" + _(r.row.nft_id), 1)]),
                            _: 2
                        }, 1024)) : L("", !0), r.row.act === "Split" ? (u(), B(y, {
                            key: 3,
                            type: "warning"
                        }, {
                            default: d(() => [h("Split #" + _(r.row.nft_id), 1)]),
                            _: 2
                        }, 1024)) : L("", !0), r.row.act === "Burn" ? (u(), B(y, {
                            key: 4,
                            type: "danger"
                        }, {
                            default: d(() => [h("Burn #" + _(r.row.nft_id), 1)]),
                            _: 2
                        }, 1024)) : L("", !0)])]),
                        _: 1
                    }), s($, {
                        prop: "price",
                        label: "Price",
                        "header-align": "center"
                    }, {
                        default: d(r => [e("div", Io, [j[0] || (j[0] = e("img", {
                            src: ge,
                            class: "coin"
                        }, null, -1)), e("span", null, _(t(K)(r.row.price, 10 ** 9).toFixed(4)), 1)])]),
                        _: 1
                    }), s($, {
                        prop: "time",
                        label: "Date",
                        "header-align": "right",
                        align: "right"
                    }, {
                        default: d(r => [e("div", wo, _(t(Ue)(r.row.unix_ts * 1e3)), 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["data", "height"])])
            }
        }
    }),
    jt = ee(So, [
        ["__scopeId", "data-v-bfaeea84"]
    ]),
    Co = {
        class: "titleTool"
    },
    Po = Z({
        __name: "TitleToolComp",
        setup(I) {
            const n = ut(),
                i = a => {
                    {
                        n.push({
                            name: a
                        });
                        return
                    }
                };
            return (a, m) => {
                const f = be;
                return u(), D("div", Co, [s(f, {
                    class: "editIcon",
                    onClick: m[0] || (m[0] = j => i("boardMyNftsPage"))
                }, {
                    default: d(() => [s(t(Nt))]),
                    _: 1
                })])
            }
        }
    }),
    Ao = ee(Po, [
        ["__scopeId", "data-v-1b456eb2"]
    ]),
    No = {
        class: "progressDiv"
    },
    Bo = {
        class: "label"
    },
    Mo = {
        class: "countdown"
    },
    Lo = Z({
        __name: "SupplyProgress",
        props: {
            projectData: {},
            curSale: {}
        },
        setup(I) {
            const n = I,
                i = X(() => n.projectData ? K(n.projectData.nft_issue_count, n.projectData.max_nft_supply) * 100 : 0);
            return (a, m) => {
                var j, $;
                const f = et;
                return u(), D("div", No, [e("div", Bo, [m[0] || (m[0] = h(" NFT Supply： ")), e("span", Mo, _(t(i).toFixed(2)) + "% (" + _(((j = a.projectData) == null ? void 0 : j.nft_issue_count) || 0) + "/" + _((($ = a.projectData) == null ? void 0 : $.max_nft_supply) || 0) + ")", 1)]), s(f, {
                    "show-text": !1,
                    percentage: t(i),
                    "stroke-width": 6,
                    striped: "",
                    "striped-flow": "",
                    duration: 10,
                    status: "exception",
                    color: "#e6a23c"
                }, null, 8, ["percentage"])])
            }
        }
    }),
    Fo = ee(Lo, [
        ["__scopeId", "data-v-d45bf1fe"]
    ]),
    $t = Ge(),
    Tt = $t.ProgramIds,
    Ye = Tt.cpSwapProgram,
    rt = Tt.configAddress,
    Eo = async (I, n) => {
        let i = $t.TokenIds.WSOL,
            a = ze,
            m = I,
            f = ze;
        const [j, $] = Wt(i, m), [y] = await ds(Ye), [b] = await ps(rt, j, $, Ye), [l] = await ms(b, Ye), r = at(j, n, !0, a), v = at($, n, !0, f), [p] = yt.findProgramAddressSync([n.toBuffer(), ze.toBuffer(), l.toBuffer()], kt.ASSOCIATED_PROGRAM_ID), [c] = Jt(n);
        return {
            token0: j,
            token1: $,
            auth: y,
            configAddress: rt,
            poolAddress: b,
            lpMintAddress: l,
            creatorToken0: r,
            creatorToken1: v,
            creatorLpTokenAddress: p,
            token0Program: a,
            token1Program: f,
            pool_wsol_account: c
        }
    }, It = async (I, n, i = 1) => {
        const a = await ie.getProgramAnchor(qt),
            m = new Gt;
        for (let y = 0; y < i; y++) {
            const b = await a.methods.mint().accounts({
                payer: ie.anchorProvider.publicKey,
                ammConfig: n.configAddress,
                token0Mint: n.token0,
                token1Mint: n.token1,
                creatorToken0: n.creatorToken0,
                creatorToken1: n.creatorToken1,
                creatorLpToken: n.creatorLpTokenAddress,
                token0Program: n.token0Program,
                token1Program: n.token1Program,
                project: I,
                poolWsolVault: n.pool_wsol_account
            }).transaction();
            m.add(b)
        }
        const f = await ie.connection.getLatestBlockhash();
        m.recentBlockhash = f.blockhash, m.feePayer = ie.anchorProvider.publicKey;
        const j = await ie.provider.signAllTransactions([m]);
        let $ = [];
        for (const y of j) {
            const b = await ie.connection.sendRawTransaction(y.serialize());
            $.push(b)
        }
        return {
            txids: $
        }
    }, Vo = {
        class: "marketComp"
    }, Ro = {
        class: "tools"
    }, Oo = {
        class: "filters"
    }, xo = {
        class: "filterLists"
    }, Uo = {
        class: "filter"
    }, qo = {
        key: 0,
        class: "progress"
    }, Go = {
        class: "mintInfo"
    }, Ko = {
        class: "price"
    }, zo = {
        key: 1,
        class: "progress"
    }, Yo = {
        class: "lists"
    }, Xo = Z({
        __name: "MarketComp",
        props: {
            projectData: {},
            programInfo: {},
            mintAccounts: {},
            buyAccounts: {}
        },
        emits: ["updateProjectData"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = I,
                m = De(),
                f = w(0),
                j = async () => {
                    if (!m.account) {
                        f.value = 0;
                        return
                    }
                    const A = await ie.getSolBalance(m.account);
                    f.value = A
                };
            le(() => m.account, () => {
                j()
            }, {
                immediate: !0
            });
            const $ = X(() => {
                    var A, T;
                    return K((A = a.projectData) == null ? void 0 : A.nft_id, (T = a.projectData) == null ? void 0 : T.init_nft_supply) * 100
                }),
                y = w(1),
                b = X(() => {
                    var A;
                    return a.projectData ? K(y.value * ((A = a.projectData) == null ? void 0 : A.init_nft_price), 10 ** 9) : 0
                }),
                l = w(!1),
                r = async () => {
                    if (!m.account) {
                        G({
                            title: "Error",
                            message: "Please connect wallet",
                            type: "error"
                        }), m.setShowConnectWallet(!0);
                        return
                    }
                    if (l.value) return;
                    if (f.value < b.value) {
                        G({
                            title: "Error",
                            message: "Insufficient balance",
                            type: "error"
                        });
                        return
                    }
                    l.value = !0;
                    const A = a.mintAccounts,
                        T = a.programInfo.project_PDA;
                    if (!(!A || !T)) try {
                        await It(T, A), setTimeout(() => {
                            i("updateProjectData"), Y()
                        }, 1e3), G({
                            title: "Success",
                            message: "Mint success",
                            type: "success"
                        })
                    } catch (J) {
                        console.error(J), G({
                            title: "Error",
                            message: Ae(J) || "Mint failed",
                            type: "error"
                        })
                    } finally {
                        l.value = !1
                    }
                }, v = X(() => p.list.filter(A => {
                    var T;
                    return A.round === ((T = a.projectData) == null ? void 0 : T.round)
                }).length), p = he({
                    list: [],
                    total: 0,
                    page: 1,
                    limit: 100,
                    total_pages: 1,
                    has_more: !0,
                    loading: !1
                });
            let c;
            const S = Ne(),
                k = X(() => S.params.id),
                C = async () => {
                    if (!(p.loading || !p.has_more)) {
                        p.loading = !0;
                        try {
                            const A = {
                                    limit: p.limit,
                                    page: p.page,
                                    sort: P.value,
                                    nft_id: V() ? M.value : "",
                                    owner_pubkey: V() ? "" : M.value,
                                    order: "asc"
                                },
                                T = await vt(k.value, A);
                            p.page === 1 && (p.list = []), p.list.push(...T.data), p.total = T.meta.total, p.page = ++T.meta.page, p.limit = T.meta.limit, p.total_pages = T.meta.total_pages, p.has_more = T.meta.has_more, p.loading = !1
                        } catch (A) {
                            console.error(A)
                        }
                    }
                }, V = () => M.value && !isNaN(Number(M.value)), E = async () => {
                    k.value && (c = await gt(k.value, A => {
                        const T = [];
                        for (const J in A.nfts) T.push(A.nft[J]);
                        A.nft && T.push(A.nft), T.forEach(J => {
                            const ne = p.list.findIndex(ue => ue.nft_pubkey === J.nft_pubkey);
                            ne !== -1 && Object.assign(p.list[ne], J), A.eventType === "Burn" && (p.list = p.list.filter(ue => ue.nft_pubkey !== J.nft_pubkey))
                        })
                    }, A => {
                        console.error(A)
                    }))
                }, Y = () => {
                    p.page = 1, p.has_more = !0, C()
                };
            Be(() => {
                E()
            }), Se(() => {
                c == null || c.close()
            });
            const M = w("");
            le(M, () => {
                te()
            });
            const U = async () => {
                p.page = 1, p.has_more = !0, await C()
            }, te = pt(U, 500), x = X(() => p.list), F = w(!1), se = w(), P = w(ve.TradeTime), N = A => {
                var T;
                P.value = A, U(), (T = se.value) == null || T.hide()
            }, z = w(!1), oe = () => {
                z.value = !0, i("updateProjectData"), c == null || c.close(), E(), Y(), setTimeout(() => {
                    z.value = !1
                }, 1e3)
            };
            return (A, T) => {
                var R, q, ae;
                const J = Me,
                    ne = Ie,
                    ue = Ze,
                    me = be,
                    Ce = we,
                    g = qe,
                    o = Le;
                return u(), D("div", Vo, [e("div", Ro, [s(J, {
                    modelValue: t(M),
                    "onUpdate:modelValue": T[0] || (T[0] = Q => Te(M) ? M.value = Q : null),
                    class: "searchIpt",
                    placeholder: "ID / Owner",
                    "prefix-icon": t(it)
                }, null, 8, ["modelValue", "prefix-icon"]), e("div", Oo, [s(ue, {
                    ref_key: "sortPopoverRef",
                    ref: se,
                    placement: "bottom",
                    width: 120,
                    trigger: "click"
                }, {
                    reference: d(() => [e("div", Uo, [s(ne, {
                        name: "sort",
                        class: "iconSvg",
                        color: "#fff"
                    })])]),
                    default: d(() => [e("div", xo, [e("div", {
                        class: "filterList",
                        onClick: T[1] || (T[1] = Q => N(t(ve).ID))
                    }, "ID"), e("div", {
                        class: "filterList",
                        onClick: T[2] || (T[2] = Q => N(t(ve).Price))
                    }, "Price"), e("div", {
                        class: "filterList",
                        onClick: T[3] || (T[3] = Q => N(t(ve).TradeTime))
                    }, "Last Trade")])]),
                    _: 1
                }, 512), e("div", {
                    class: "filter",
                    onClick: oe
                }, [s(me, {
                    class: W(["icon", {
                        refreshing: t(z)
                    }])
                }, {
                    default: d(() => [s(t(ct))]),
                    _: 1
                }, 8, ["class"])]), e("div", {
                    class: W(["filter", {
                        act: t(F)
                    }]),
                    onClick: T[4] || (T[4] = Q => F.value = !t(F))
                }, [s(ne, {
                    name: "Switch",
                    class: "iconSvg",
                    color: t(F) ? "#29D4B0" : "#fff"
                }, null, 8, ["color"])], 2)])]), (((R = A.projectData) == null ? void 0 : R.nft_issue_count) || 0) < (((q = A.projectData) == null ? void 0 : q.init_nft_supply) || 0) ? (u(), D("div", qo, [s(cs, {
                    projectData: A.projectData
                }, null, 8, ["projectData"]), e("div", Go, [e("div", Ko, "Mint Price: " + _(t(K)(((ae = A.projectData) == null ? void 0 : ae.init_nft_price) || 0, 10 ** 9)) + " SOL", 1), $e((u(), B(Ce, {
                    type: "primary",
                    class: "mintBtn",
                    onClick: r
                }, {
                    default: d(() => T[7] || (T[7] = [h("Mint")])),
                    _: 1,
                    __: [7]
                })), [
                    [o, t(l)]
                ])])])) : (u(), D("div", zo, [s(us, {
                    class: "mb20",
                    projectData: A.projectData,
                    onUpdateProjectData: T[5] || (T[5] = Q => i("updateProjectData"))
                }, null, 8, ["projectData"]), s(Fo, {
                    projectData: A.projectData,
                    curSale: t(v)
                }, null, 8, ["projectData", "curSale"])])), e("div", Yo, [(u(!0), D(pe, null, Oe(t(x), (Q, de) => (u(), B(bt, {
                    key: de,
                    showMore: t(F),
                    mintPercentage: t($),
                    nftInfo: Q,
                    projectData: A.projectData,
                    buyAccounts: A.buyAccounts,
                    mintAccounts: A.mintAccounts,
                    programInfo: A.programInfo,
                    onUpdateProjectData: T[6] || (T[6] = re => i("updateProjectData")),
                    onUpdateNftsInfo: Y
                }, null, 8, ["showMore", "mintPercentage", "nftInfo", "projectData", "buyAccounts", "mintAccounts", "programInfo"]))), 128))]), s(g, {
                    more: t(p).has_more,
                    method: C
                }, null, 8, ["more"])])
            }
        }
    }), Ho = ee(Xo, [
        ["__scopeId", "data-v-e13b62ca"]
    ]), Wo = {
        class: "aboutComp"
    }, Jo = ["src"], Qo = {
        class: "desc"
    }, Zo = {
        class: "infos"
    }, ea = {
        class: "info"
    }, ta = {
        class: "flex-center"
    }, sa = {
        class: "info"
    }, oa = {
        class: "flex-center"
    }, aa = {
        class: "info"
    }, na = {
        class: "flex-center"
    }, la = {
        class: "info"
    }, ra = {
        class: "flex-center"
    }, ia = {
        class: "info"
    }, ca = {
        class: "flex-center"
    }, ua = {
        class: "info"
    }, da = {
        class: "flex-center"
    }, pa = {
        class: "info"
    }, ma = {
        class: "flex-center"
    }, fa = {
        class: "info"
    }, _a = {
        class: "flex-center"
    }, va = {
        class: "info"
    }, ga = {
        class: "flex-center"
    }, ya = {
        class: "info"
    }, ka = {
        class: "flex-center"
    }, ha = {
        class: "info"
    }, ba = {
        class: "flex-center"
    }, Da = {
        class: "info"
    }, ja = {
        class: "flex-center"
    }, $a = {
        class: "info"
    }, Ta = {
        class: "flex-center"
    }, Ia = {
        key: 0,
        class: "info"
    }, wa = {
        key: 1,
        class: "info"
    }, Sa = {
        key: 2,
        class: "info"
    }, Ca = {
        key: 3,
        class: "info"
    }, Pa = Z({
        __name: "AboutComp",
        props: {
            projectData: {}
        },
        setup(I) {
            return (n, i) => {
                var f, j, $, y, b, l, r, v, p, c, S, k, C, V, E, Y, M, U, te, x, F, se, P, N, z;
                const a = be,
                    m = dt;
                return u(), D("div", Wo, [t(xe) ? L("", !0) : (u(), D("img", {
                    key: 0,
                    src: t(ye)(((f = n.projectData) == null ? void 0 : f.nft_image_url) || "", 400),
                    class: "nftImg"
                }, null, 8, Jo)), e("div", Qo, _(((j = n.projectData) == null ? void 0 : j.project_desc) || ""), 1), i[17] || (i[17] = e("div", {
                    class: "border"
                }, null, -1)), e("div", Zo, [e("div", ea, [e("span", ta, [i[0] || (i[0] = h(" Creator ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The wallet address that created the project.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(ke)((($ = n.projectData) == null ? void 0 : $.creator_pubkey) || "")), 1)]), e("div", sa, [e("span", oa, [i[1] || (i[1] = h(" NFT Initial Supply ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The total number of NFTs available for minting during the initial launch phase (Round 0).",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(((y = n.projectData) == null ? void 0 : y.init_nft_supply) || 0), 1)]), e("div", aa, [e("span", na, [i[2] || (i[2] = h(" NFT Circulation Supply ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The current number of NFTs in existence that have not been burned.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _((((b = n.projectData) == null ? void 0 : b.nft_issue_count) || 0) - (((l = n.projectData) == null ? void 0 : l.nft_burn_count) || 0)), 1)]), e("div", la, [e("span", ra, [i[3] || (i[3] = h(" NFT Burned ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The number of NFTs permanently destroyed by holders after the eligible idle period.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(((r = n.projectData) == null ? void 0 : r.nft_burn_count) || 0), 1)]), e("div", ia, [e("span", ca, [i[4] || (i[4] = h(" NFT Max Supply ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The upper limit of NFTs that can ever exist for this project, including minted and burned.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(((v = n.projectData) == null ? void 0 : v.max_nft_supply) || 0), 1)]), e("div", ua, [e("span", da, [i[5] || (i[5] = h(" NFT Initial Price ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The mint price (in SOL) for each NFT at launch before any price increase rounds.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(K)(((p = n.projectData) == null ? void 0 : p.init_nft_price) || 0, 10 ** 9)) + " SOL", 1)]), e("div", pa, [e("span", ma, [i[6] || (i[6] = h(" NFT Split Price ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The threshold price at which an NFT becomes eligible for splitting into two NFTs of equal value. Usually >= 2 × NFT Initial Price.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(fe)(t(K)(((c = n.projectData) == null ? void 0 : c.init_nft_price) || 0, 10 ** 9), 2)) + " SOL", 1)]), e("div", fa, [e("span", _a, [i[7] || (i[7] = h(" Time Per Round ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "Duration (in seconds) of each round; affects price updates and split eligibility.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(He)(((S = n.projectData) == null ? void 0 : S.sec_per_round) || 0)), 1)]), e("div", va, [e("span", ga, [i[8] || (i[8] = h(" NFT Increase Per Round ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The percentage rate by which NFT prices automatically increase after each round.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(K)(((k = n.projectData) == null ? void 0 : k.increase_per_round) || 0, 100)) + "%", 1)]), e("div", ya, [e("span", ka, [i[9] || (i[9] = h(" NFT Trade Fees ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The percentage fee charged on each NFT purchase, used to pump project token.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(K)(((C = n.projectData) == null ? void 0 : C.trade_fee_rate) || 0, 100)) + "%", 1)]), e("div", ha, [e("span", ba, [i[10] || (i[10] = h(" NFT Burnable After ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The minimum amount of time (in seconds) an NFT must remain untraded before it becomes eligible to burn.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(He)(((V = n.projectData) == null ? void 0 : V.sec_to_burn_nft) || 0)), 1)]), e("div", Da, [e("span", ja, [i[11] || (i[11] = h(" Token Per NFT ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The fixed amount of project tokens (e.g. RICH) that can be reclaimed by burning a single NFT.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(K)(((E = n.projectData) == null ? void 0 : E.token_per_nft) || 0, 10 ** 6)) + " " + _((Y = n.projectData) == null ? void 0 : Y.token_symbol), 1)]), e("div", $a, [e("span", Ta, [i[12] || (i[12] = h(" Created at ")), s(m, {
                    "popper-class": "questionTooltip",
                    content: "The timestamp when this project was created.",
                    placement: "top"
                }, {
                    default: d(() => [s(a, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("span", null, _(t(Rt)((((M = n.projectData) == null ? void 0 : M.unix_ts) || 0) * 1e3)), 1)]), (U = n.projectData) != null && U.twitter ? (u(), D("div", Ia, [i[13] || (i[13] = e("span", null, "Twitter", -1)), e("span", null, _((te = n.projectData) == null ? void 0 : te.twitter), 1)])) : L("", !0), (x = n.projectData) != null && x.telegram ? (u(), D("div", wa, [i[14] || (i[14] = e("span", null, "Telegram", -1)), e("span", null, _((F = n.projectData) == null ? void 0 : F.telegram), 1)])) : L("", !0), (se = n.projectData) != null && se.discord ? (u(), D("div", Sa, [i[15] || (i[15] = e("span", null, "Discord", -1)), e("span", null, _((P = n.projectData) == null ? void 0 : P.discord), 1)])) : L("", !0), (N = n.projectData) != null && N.website ? (u(), D("div", Ca, [i[16] || (i[16] = e("span", null, "Website", -1)), e("span", null, _((z = n.projectData) == null ? void 0 : z.website), 1)])) : L("", !0)])])
            }
        }
    }), wt = ee(Pa, [
        ["__scopeId", "data-v-6bef5f90"]
    ]), Aa = {
        class: "swapLiq"
    }, Na = {
        key: 0,
        class: "mask"
    }, Ba = {
        class: "maskTitle"
    }, Ma = {
        class: "types"
    }, La = {
        class: "tools"
    }, Fa = {
        class: "balance"
    }, Ea = {
        key: 0
    }, Va = {
        key: 1
    }, Ra = {
        class: "iptDiv"
    }, Oa = {
        class: "coinDiv"
    }, xa = ["src"], Ua = {
        key: 2,
        class: "rates"
    }, qa = {
        key: 3,
        class: "errMsg"
    }, Ga = {
        key: 4,
        class: "amount"
    }, Ka = {
        class: "light"
    }, za = {
        class: "light"
    }, Ya = {
        key: 5,
        class: "amount"
    }, Xa = {
        class: "light"
    }, Ha = {
        class: "light"
    }, Wa = {
        class: "balance"
    }, Ja = {
        class: "iptDiv"
    }, Qa = {
        class: "coinDiv"
    }, Za = ["src"], en = {
        class: "rates"
    }, tn = {
        key: 0,
        class: "errMsg"
    }, sn = {
        key: 1,
        class: "receive"
    }, on = {
        key: 2,
        class: "receive"
    }, an = Z({
        __name: "SwapLiqComp",
        props: {
            projectData: {}
        },
        emits: ["updateSwapBals"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = I,
                m = X(() => {
                    var g, o;
                    return K((g = a.projectData) == null ? void 0 : g.nft_id, (o = a.projectData) == null ? void 0 : o.init_nft_supply) * 100
                }),
                f = De(),
                j = () => {
                    f.setShowConnectWallet(!0)
                },
                $ = w(),
                y = w(f.slippage || "0.01");
            le(y, () => {
                f.setSlippage(y.value), l.value === 0 ? J(v.value) : l.value === 1 && J("sell")
            });
            const b = () => {
                    var g;
                    (g = $.value) == null || g.init()
                },
                l = w(0),
                r = g => {
                    l.value = g, c.pay = "", c.get = "", c.sell = ""
                },
                v = w("in"),
                p = g => {
                    v.value = g, c.pay = "", c.get = "", c.sell = ""
                },
                c = he({
                    pay: "",
                    get: "",
                    sell: ""
                }),
                S = g => {
                    if (g === "in") {
                        const o = Ke(c.pay, {
                            decimalPrecision: x.value.decimals
                        });
                        c.pay = o
                    } else if (g === "out") {
                        const o = Ke(c.get, {
                            decimalPrecision: F.value.decimals
                        });
                        c.get = o
                    } else {
                        const o = Ke(c.sell, {
                            decimalPrecision: F.value.decimals
                        });
                        c.sell = o
                    }
                    J(g)
                },
                k = g => {
                    g === 0 ? c.pay = "" : g === 9999 ? c.pay = String(We(M.value, .01)) : c.pay = String(g), S("in")
                },
                C = g => {
                    g === 0 ? c.sell = "" : c.sell = `${fe(g,U.value)}`, S("sell")
                },
                V = Ge();
            let E = null;
            const Y = w([]),
                M = X(() => {
                    var g;
                    return ((g = Y.value.find(o => o.address === V.TokenIds.SOL.toBase58())) == null ? void 0 : g.balance) || 0
                }),
                U = X(() => {
                    var g;
                    return ((g = Y.value.find(o => {
                        var R;
                        return o.address === ((R = a.projectData) == null ? void 0 : R.mint_pubkey)
                    })) == null ? void 0 : g.balance) || 0
                }),
                te = async () => {
                    if (f.account) try {
                        E && clearTimeout(E), Y.value = await ie.getAllTokenBal(f.account), E = setTimeout(() => {
                            te()
                        }, 3e4)
                    } catch (g) {
                        console.error(g)
                    }
                };
            le(() => f.account, () => {
                te()
            }, {
                immediate: !0
            });
            const x = w({
                    address: V.TokenIds.SOL.toBase58(),
                    decimals: 9
                }),
                F = X(() => {
                    var g;
                    return {
                        address: ((g = a.projectData) == null ? void 0 : g.mint_pubkey) || "",
                        decimals: 9
                    }
                }),
                se = w(),
                P = w(""),
                N = async () => {
                    if (!(!x.value.address || !F.value.address)) try {
                        const {
                            poolState: g,
                            poolAddress: o
                        } = await ht({
                            inputToken: x.value.address,
                            outputToken: F.value.address
                        });
                        se.value = g, P.value = o.toBase58();
                        const R = ie.translateAddress(x.value.address).toBase58() === g.token0Mint.toBase58();
                        if (x.value.decimals = R ? g.mint0Decimals : g.mint1Decimals, F.value.decimals = R ? g.mint1Decimals : g.mint0Decimals, A(), m.value < 100) return;
                        ce.$emit("showDexscreenerChat", P.value)
                    } catch {}
                }, z = he({
                    poolX: 0,
                    poolY: 0
                });
            let oe = null;
            const A = async () => {
                try {
                    if (oe && clearTimeout(oe), !se.value || !x.value.address || !F.value.address) return;
                    const {
                        poolX: g,
                        poolY: o,
                        token0IsInputToken: R
                    } = await os(se.value, x.value.address);
                    z.poolX = g, z.poolY = o;
                    const q = {
                        token0: {
                            pubkey: R ? x.value.address : F.value.address,
                            balance: R ? z.poolX : z.poolY
                        },
                        token1: {
                            pubkey: R ? F.value.address : x.value.address,
                            balance: R ? z.poolY : z.poolX
                        }
                    };
                    i("updateSwapBals", q), l.value === 0 ? J(v.value) : l.value === 1 && J("sell")
                } catch (g) {
                    console.error(g)
                } finally {
                    oe = setTimeout(() => {
                        A()
                    }, 3e4)
                }
            }, T = he({}), J = async g => {
                if (!x.value.address || !F.value.address) return;
                const o = {
                    poolX: z.poolX,
                    poolY: z.poolY,
                    amount: c.pay,
                    type: g === "sell" ? "in" : g
                };
                if (g === "in" ? o.amount = c.pay : g === "out" ? o.amount = c.get : g === "sell" && (o.poolX = z.poolY, o.poolY = z.poolX, o.amount = c.sell, o.type = "in"), !Number(o.amount || 0)) {
                    T.outputAmount = 0, T.inputAmount = 0, T.minGet = 0, T.maxPay = 0, T.priceImpactPct = 0, T.fee = 0, g === "in" ? c.get = "" : g === "out" && (c.pay = "");
                    return
                }
                const R = await ts(o);
                T.outputAmount = Number(R.outputAmount), g !== "out" && (c.get = Xe(T.outputAmount, F.value.decimals)), T.inputAmount = Number(R.inputAmount), g !== "in" && (c.pay = Xe(T.inputAmount, x.value.decimals)), T.minGet = Number((R.outputAmount * (1 - Number(y.value))).toFixed(F.value.decimals)), T.maxPay = Number((R.inputAmount * (1 + Number(y.value))).toFixed(x.value.decimals)), T.priceImpactPct = Math.abs(R.priceImpactPct), T.fee = Number(R.fee)
            };
            le(() => a, () => {
                N()
            }, {
                immediate: !0,
                deep: !0
            });
            const ne = w(!1),
                ue = async () => {
                    var g, o;
                    if (!(!((g = x.value) != null && g.address) || !((o = F.value) != null && o.address)) && !ne.value) {
                        if (Number(c.pay || 0) > Number(M.value || 0)) {
                            G({
                                type: "error",
                                title: "Insufficient balance",
                                message: "Please check your balance"
                            });
                            return
                        }
                        ne.value = !0;
                        try {
                            if (v.value === "in") {
                                const re = fe(Number(c.pay || 0), 10 ** x.value.decimals),
                                    Fe = fe(T.minGet, 10 ** F.value.decimals),
                                    Ee = {
                                        inputToken: x.value.address,
                                        outputToken: F.value.address,
                                        amount_in: new je(re),
                                        minimum_amount_out: new je(Fe)
                                    },
                                    Ve = await nt(Ee);
                                c.get = "", c.pay = "", G({
                                    type: "success",
                                    title: "Swap Success",
                                    message: Ve.join(",")
                                });
                                return
                            }
                            const q = fe(Number(c.get || 0), 10 ** F.value.decimals),
                                ae = fe(T.maxPay, 10 ** x.value.decimals),
                                Q = {
                                    inputToken: x.value.address,
                                    outputToken: F.value.address,
                                    amount_out: new je(q),
                                    maximum_amount_in: new je(ae)
                                },
                                de = await ss(Q);
                            c.get = "", c.pay = "", G({
                                type: "success",
                                title: "Swap Success",
                                message: de.join(",")
                            })
                        } catch (R) {
                            console.error(R), G({
                                type: "error",
                                title: "Swap Failed",
                                message: Ae(R) || "Swap Failed"
                            })
                        } finally {
                            ne.value = !1, setTimeout(() => {
                                A(), te()
                            }, 1500)
                        }
                    }
                }, me = w(!1), Ce = async () => {
                    var g, o;
                    if (!(!((g = x.value) != null && g.address) || !((o = F.value) != null && o.address)) && !me.value) {
                        if (Number(c.sell || 0) > Number(U.value || 0)) {
                            G({
                                type: "error",
                                title: "Insufficient balance",
                                message: "Please check your balance"
                            });
                            return
                        }
                        me.value = !0;
                        try {
                            const R = fe(Number(c.sell || 0), 10 ** F.value.decimals),
                                q = fe(T.minGet, 10 ** x.value.decimals),
                                ae = {
                                    inputToken: F.value.address,
                                    outputToken: x.value.address,
                                    amount_in: new je(R),
                                    minimum_amount_out: new je(q)
                                },
                                Q = await nt(ae);
                            c.sell = "", G({
                                type: "success",
                                title: "Swap Success",
                                message: Q.join(",")
                            })
                        } catch (R) {
                            console.error(R), G({
                                type: "error",
                                title: "Swap Failed",
                                message: Ae(R) || "Swap Failed"
                            })
                        } finally {
                            me.value = !1, setTimeout(() => {
                                te(), A()
                            }, 1500)
                        }
                    }
                };
            return Se(() => {
                E && clearTimeout(E), oe && clearTimeout(oe)
            }), (g, o) => {
                var de, re, Fe, Ee, Ve, tt, st;
                const R = et,
                    q = we,
                    ae = Me,
                    Q = Le;
                return u(), D("div", Aa, [t(m) < 100 ? (u(), D("div", Na, [e("div", null, [e("div", Ba, "Minting Progress: " + _(Number(t(m).toFixed(2))) + "%", 1), s(R, {
                    class: "progressBar",
                    "text-inside": !1,
                    "show-text": !1,
                    "stroke-width": 10,
                    percentage: t(m)
                }, null, 8, ["percentage"])])])) : L("", !0), e("div", Ma, [s(q, {
                    class: "btn",
                    size: "large",
                    type: t(l) === 0 ? "primary" : "info",
                    onClick: o[0] || (o[0] = O => r(0))
                }, {
                    default: d(() => o[21] || (o[21] = [h("Buy")])),
                    _: 1,
                    __: [21]
                }, 8, ["type"]), s(q, {
                    class: "btn",
                    size: "large",
                    type: t(l) === 1 ? "danger" : "info",
                    onClick: o[1] || (o[1] = O => r(1))
                }, {
                    default: d(() => o[22] || (o[22] = [h("Sell")])),
                    _: 1,
                    __: [22]
                }, 8, ["type"])]), e("div", La, [e("div", {
                    class: W({
                        hide: t(l) === 1
                    })
                }, [t(v) === "in" ? (u(), B(q, {
                    key: 0,
                    round: "",
                    class: "toolBtn",
                    type: "default",
                    onClick: o[2] || (o[2] = O => p("out"))
                }, {
                    default: d(() => {
                        var O;
                        return [h("Switch to " + _((O = g.projectData) == null ? void 0 : O.token_symbol), 1)]
                    }),
                    _: 1
                })) : (u(), B(q, {
                    key: 1,
                    class: "toolBtn",
                    round: "",
                    type: "default",
                    onClick: o[3] || (o[3] = O => p("in"))
                }, {
                    default: d(() => o[23] || (o[23] = [h("Switch to SOL")])),
                    _: 1,
                    __: [23]
                }))], 2), s(q, {
                    class: "toolBtn",
                    round: "",
                    type: "default",
                    onClick: b
                }, {
                    default: d(() => o[24] || (o[24] = [h("set max slippage")])),
                    _: 1,
                    __: [24]
                })]), t(l) === 0 ? (u(), D(pe, {
                    key: 1
                }, [e("div", Fa, [o[25] || (o[25] = e("span", null, "Balance:", -1)), t(v) === "in" ? (u(), D("span", Ea, _(t(M)) + " SOL", 1)) : (u(), D("span", Va, _(t(U)) + " " + _((de = g.projectData) == null ? void 0 : de.token_symbol), 1))]), e("div", Ra, [t(v) === "in" ? (u(), B(ae, {
                    key: 0,
                    modelValue: t(c).pay,
                    "onUpdate:modelValue": o[4] || (o[4] = O => t(c).pay = O),
                    min: 0,
                    placeholder: "0.0",
                    size: "large",
                    onInput: o[5] || (o[5] = O => S("in"))
                }, {
                    suffix: d(() => o[26] || (o[26] = [e("span", {
                        class: "coinDiv"
                    }, [e("img", {
                        src: ge,
                        class: "coin"
                    }), h(" SOL ")], -1)])),
                    _: 1
                }, 8, ["modelValue"])) : (u(), B(ae, {
                    key: 1,
                    modelValue: t(c).get,
                    "onUpdate:modelValue": o[6] || (o[6] = O => t(c).get = O),
                    min: 0,
                    placeholder: "0.0",
                    size: "large",
                    onInput: o[7] || (o[7] = O => S("out"))
                }, {
                    suffix: d(() => {
                        var O, Pe;
                        return [e("span", Oa, [e("img", {
                            src: t(ye)(((O = g.projectData) == null ? void 0 : O.image_url) || ""),
                            class: "coin"
                        }, null, 8, xa), h(" " + _((Pe = g.projectData) == null ? void 0 : Pe.token_symbol), 1)])]
                    }),
                    _: 1
                }, 8, ["modelValue"])), t(v) === "in" ? (u(), D("div", Ua, [s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[8] || (o[8] = O => k(0))
                }, {
                    default: d(() => o[27] || (o[27] = [h("Reset")])),
                    _: 1,
                    __: [27]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[9] || (o[9] = O => k(.1))
                }, {
                    default: d(() => o[28] || (o[28] = [h("0.1 SOL")])),
                    _: 1,
                    __: [28]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[10] || (o[10] = O => k(.5))
                }, {
                    default: d(() => o[29] || (o[29] = [h("0.5 SOL")])),
                    _: 1,
                    __: [29]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[11] || (o[11] = O => k(1))
                }, {
                    default: d(() => o[30] || (o[30] = [h("1 SOL")])),
                    _: 1,
                    __: [30]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[12] || (o[12] = O => k(9999))
                }, {
                    default: d(() => o[31] || (o[31] = [h("Max")])),
                    _: 1,
                    __: [31]
                })])) : L("", !0), Number(t(c).pay || 0) > t(M) ? (u(), D("div", qa, " insufficient balance: you have " + _(t(M)) + " SOL ", 1)) : L("", !0), t(v) === "in" && t(c).get ? (u(), D("div", Ga, [e("div", null, [o[32] || (o[32] = h(" You receive: ")), e("span", Ka, _(t(c).get) + " " + _((re = g.projectData) == null ? void 0 : re.token_symbol), 1)]), e("div", null, [o[33] || (o[33] = h(" (Minimum received: ")), e("span", za, _(t(T).minGet) + " " + _((Fe = g.projectData) == null ? void 0 : Fe.token_symbol), 1), o[34] || (o[34] = h(") "))])])) : L("", !0), t(v) === "out" && t(c).pay ? (u(), D("div", Ya, [e("div", null, [o[35] || (o[35] = h(" You pay: ")), e("span", Xa, _(t(c).pay) + " SOL", 1)]), e("div", null, [o[36] || (o[36] = h(" (Maximum paid: ")), e("span", Ha, _(t(T).maxPay) + " SOL", 1), o[37] || (o[37] = h(") "))])])) : L("", !0)]), t(f).account ? $e((u(), B(q, {
                    key: 1,
                    type: "primary",
                    class: "tradeBtn",
                    size: "large",
                    disabled: !Number(t(c).pay || 0) || Number(t(c).pay || 0) > t(M),
                    onClick: ue
                }, {
                    default: d(() => o[39] || (o[39] = [h("Buy")])),
                    _: 1,
                    __: [39]
                }, 8, ["disabled"])), [
                    [Q, t(ne)]
                ]) : (u(), B(q, {
                    key: 0,
                    type: "primary",
                    class: "tradeBtn",
                    size: "large",
                    onClick: j
                }, {
                    default: d(() => o[38] || (o[38] = [h("Connect")])),
                    _: 1,
                    __: [38]
                }))], 64)) : (u(), D(pe, {
                    key: 2
                }, [e("div", Wa, [o[40] || (o[40] = e("span", null, "Balance:", -1)), e("span", null, _(t(U)) + " " + _((Ee = g.projectData) == null ? void 0 : Ee.token_symbol), 1)]), e("div", Ja, [s(ae, {
                    modelValue: t(c).sell,
                    "onUpdate:modelValue": o[13] || (o[13] = O => t(c).sell = O),
                    min: 0,
                    placeholder: "0.0",
                    size: "large",
                    onInput: o[14] || (o[14] = O => S("sell"))
                }, {
                    suffix: d(() => {
                        var O, Pe;
                        return [e("span", Qa, [e("img", {
                            src: t(ye)(((O = g.projectData) == null ? void 0 : O.image_url) || ""),
                            class: "coin"
                        }, null, 8, Za), h(" " + _((Pe = g.projectData) == null ? void 0 : Pe.token_symbol), 1)])]
                    }),
                    _: 1
                }, 8, ["modelValue"]), e("div", en, [s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[15] || (o[15] = O => C(0))
                }, {
                    default: d(() => o[41] || (o[41] = [h("Reset")])),
                    _: 1,
                    __: [41]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[16] || (o[16] = O => C(.25))
                }, {
                    default: d(() => o[42] || (o[42] = [h("25%")])),
                    _: 1,
                    __: [42]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[17] || (o[17] = O => C(.5))
                }, {
                    default: d(() => o[43] || (o[43] = [h("50%")])),
                    _: 1,
                    __: [43]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[18] || (o[18] = O => C(.75))
                }, {
                    default: d(() => o[44] || (o[44] = [h("75%")])),
                    _: 1,
                    __: [44]
                }), s(q, {
                    class: "rateBtn",
                    round: "",
                    type: "default",
                    onClick: o[19] || (o[19] = O => C(1))
                }, {
                    default: d(() => o[45] || (o[45] = [h("100%")])),
                    _: 1,
                    __: [45]
                })]), Number(t(c).sell || 0) > t(U) ? (u(), D("div", tn, " Insufficient balance: you have " + _(t(U)) + " " + _((Ve = g.projectData) == null ? void 0 : Ve.token_symbol), 1)) : L("", !0), t(c).sell ? (u(), D("div", sn, [o[46] || (o[46] = e("span", null, "You receive", -1)), e("span", null, _((tt = t(T).outputAmount) == null ? void 0 : tt.toFixed(9)) + " SOL", 1)])) : L("", !0), t(c).sell ? (u(), D("div", on, [o[47] || (o[47] = e("span", null, "Minimum received", -1)), e("span", null, _((st = t(T).minGet) == null ? void 0 : st.toFixed(9)) + " SOL", 1)])) : L("", !0)]), t(f).account ? $e((u(), B(q, {
                    key: 1,
                    type: "danger",
                    class: "tradeBtn",
                    size: "large",
                    disabled: !Number(t(c).sell || 0) || Number(t(c).sell || 0) > t(U),
                    onClick: Ce
                }, {
                    default: d(() => o[49] || (o[49] = [h("Sell")])),
                    _: 1,
                    __: [49]
                }, 8, ["disabled"])), [
                    [Q, t(me)]
                ]) : (u(), B(q, {
                    key: 0,
                    type: "danger",
                    class: "tradeBtn",
                    size: "large",
                    onClick: j
                }, {
                    default: d(() => o[48] || (o[48] = [h("Connect")])),
                    _: 1,
                    __: [48]
                }))], 64)), s(es, {
                    ref_key: "saveSlippage",
                    ref: $,
                    modelValue: t(y),
                    "onUpdate:modelValue": o[20] || (o[20] = O => Te(y) ? y.value = O : null)
                }, null, 8, ["modelValue"])])
            }
        }
    }), nn = ee(an, [
        ["__scopeId", "data-v-bc5a3f80"]
    ]), ln = {
        class: "infoDiv"
    }, rn = {
        class: "top"
    }, cn = {
        class: "token"
    }, un = ["src"], dn = {
        class: "price"
    }, pn = {
        class: "infos"
    }, mn = {
        class: "info"
    }, fn = {
        class: "label"
    }, _n = {
        key: 0,
        class: "value"
    }, vn = {
        key: 1,
        class: "value"
    }, gn = {
        class: "info"
    }, yn = {
        class: "label"
    }, kn = {
        key: 0,
        class: "value"
    }, hn = {
        key: 1,
        class: "value"
    }, bn = {
        class: "info"
    }, Dn = {
        class: "label"
    }, jn = {
        class: "value"
    }, $n = {
        class: "info"
    }, Tn = {
        class: "label"
    }, In = {
        key: 1,
        class: "value"
    }, wn = {
        class: "info"
    }, Sn = {
        class: "label"
    }, Cn = {
        class: "value"
    }, Pn = {
        class: "info"
    }, An = {
        class: "label"
    }, Nn = {
        class: "value"
    }, Bn = {
        class: "info"
    }, Mn = {
        class: "label"
    }, Ln = {
        class: "value"
    }, Fn = Z({
        __name: "TokenComp",
        props: {
            projectData: {},
            programInfo: {},
            mintAccounts: {},
            buyAccounts: {}
        },
        setup(I) {
            const n = I,
                i = X(() => {
                    var p, c;
                    const l = K((p = n.projectData) == null ? void 0 : p.init_nft_price, 1e9),
                        r = K(((c = n.projectData) == null ? void 0 : c.token_per_nft) || 0, 10 ** 6),
                        v = K(l, r).toFixed(8);
                    return parseFloat(v)
                }),
                a = w(0),
                m = X(() => {
                    var v;
                    const l = K(((v = n.projectData) == null ? void 0 : v.max_token_supply) || 0, 1e6),
                        r = a.value;
                    return We(l, r)
                }),
                f = async () => {
                    if (n.projectData) try {
                        const l = await ie.getTokenBalance(n.projectData.authority_pubkey, n.projectData.mint_pubkey, kt.TOKEN_PROGRAM_ID);
                        a.value = l
                    } catch (l) {
                        console.error(l)
                    }
                };
            le(() => n.projectData, () => {
                f()
            }, {
                immediate: !0
            });
            const j = w(0),
                $ = X(() => {
                    const l = We(j.value, i.value);
                    return K(l, i.value) * 100
                }),
                y = l => {
                    var p, c;
                    const r = l.token0.pubkey === ((p = n.projectData) == null ? void 0 : p.mint_pubkey) ? l.token0.balance : l.token1.balance,
                        v = l.token0.pubkey === ((c = n.projectData) == null ? void 0 : c.mint_pubkey) ? l.token1.balance : l.token0.balance;
                    j.value = K(v, r)
                },
                b = X(() => K(j.value * m.value, 1));
            return (l, r) => {
                var c, S, k, C, V, E, Y;
                const v = be,
                    p = dt;
                return u(), D("div", {
                    class: W(["tokenComp", {
                        noPad: !t(xe)
                    }])
                }, [s(nn, {
                    "project-data": l.projectData,
                    onUpdateSwapBals: y
                }, null, 8, ["project-data"]), e("div", ln, [e("div", rn, [e("div", cn, [e("img", {
                    src: t(ye)(((c = l.projectData) == null ? void 0 : c.image_url) || ""),
                    class: "logo"
                }, null, 8, un), e("span", null, _(((S = l.projectData) == null ? void 0 : S.token_symbol) || ""), 1)]), e("div", dn, [r[0] || (r[0] = e("img", {
                    src: ge,
                    class: "coin"
                }, null, -1)), e("span", null, _(t(j).toFixed(8) || 0), 1)])]), e("div", pn, [e("div", mn, [e("div", fn, [r[1] || (r[1] = h(" Market Cap ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "Circulating Supply × Current Price — represents the real-time token valuation.",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), Number(t(j)) ? (u(), D("div", _n, [r[2] || (r[2] = e("img", {
                    src: ge,
                    class: "coin"
                }, null, -1)), e("span", null, _(t(b).toFixed(2)), 1)])) : (u(), D("div", vn, "-"))]), e("div", gn, [e("div", yn, [r[3] || (r[3] = h(" FDV ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "Max Supply × Current Price — total potential value if all tokens were released.",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), Number(t(j)) ? (u(), D("div", kn, [r[4] || (r[4] = e("img", {
                    src: ge,
                    class: "coin"
                }, null, -1)), e("span", null, _((((k = l.projectData) == null ? void 0 : k.fdv) || 0).toFixed(2)), 1)])) : (u(), D("div", hn, "-"))]), e("div", bn, [e("div", Dn, [r[5] || (r[5] = h(" Issue Price ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "The token's price at the time of its initial launch (usually during mint phase).",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("div", jn, _(t(i)) + " SOL/" + _(((C = l.projectData) == null ? void 0 : C.token_symbol) || ""), 1)]), e("div", $n, [e("div", Tn, [r[6] || (r[6] = h(" Cumulative Increase ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "The percentage growth of the token price since its issuance.",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), Number(t(j)) ? (u(), D("div", {
                    key: 0,
                    class: W(["value", {
                        red: t($) < 0,
                        green: t($) > 0
                    }])
                }, _(t($).toFixed(2)) + " % ", 3)) : (u(), D("div", In, "-"))]), e("div", wn, [e("div", Sn, [r[7] || (r[7] = h(" Initial Supply ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "The number of tokens minted at the time of project creation.",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("div", Cn, _(t(K)(((V = l.projectData) == null ? void 0 : V.init_token_supply) || 0, 10 ** 6)), 1)]), e("div", Pn, [e("div", An, [r[8] || (r[8] = h(" Circulation Supply ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "The amount of tokens currently circulating in users' wallets.",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("div", Nn, _(t(m)), 1)]), e("div", Bn, [e("div", Mn, [r[9] || (r[9] = h(" Max Supply ")), s(p, {
                    "popper-class": "questionTooltip",
                    content: "The maximum number of tokens that will ever exist under the project rules.",
                    placement: "top"
                }, {
                    default: d(() => [s(v, {
                        class: "icon"
                    }, {
                        default: d(() => [s(t(H))]),
                        _: 1
                    })]),
                    _: 1
                })]), e("div", Ln, _(t(K)(((E = l.projectData) == null ? void 0 : E.max_token_supply) || 0, 10 ** 6)), 1)])])]), s(as, {
                    "contract-address": ((Y = l.projectData) == null ? void 0 : Y.mint_pubkey) || ""
                }, null, 8, ["contract-address"])], 2)
            }
        }
    }), St = ee(Fn, [
        ["__scopeId", "data-v-b03acc50"]
    ]);
var Ct = {
    exports: {}
};
(function (I, n) {
    (function (i, a) {
        I.exports = a()
    })(Bt, function () {
        return function (i) {
            return i == null ? "" : String(i).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
    })
})(Ct);
var En = Ct.exports;
const Pt = Mt(En),
    Vn = {
        class: "comment"
    },
    Rn = ["src"],
    On = {
        class: "info"
    },
    xn = {
        class: "flexs"
    },
    Un = {
        class: "addr"
    },
    qn = {
        class: "addr"
    },
    Gn = ["innerHTML"],
    Kn = {
        class: "flexb"
    },
    zn = {
        class: "bottom"
    },
    Yn = {
        class: "time"
    },
    Xn = {
        class: "tool"
    },
    Hn = {
        key: 0
    },
    Wn = Z({
        __name: "CommentComp",
        props: {
            messageId: {
                type: String,
                default: ""
            },
            cmt: {
                type: Object,
                default: {}
            },
            projectId: {
                type: String,
                default: ""
            }
        },
        setup(I) {
            const n = I,
                i = async () => {
                    const f = {
                        projectId: n.projectId,
                        messageId: n.messageId,
                        commentId: n.cmt._id
                    };
                    try {
                        await lt(f), G({
                            type: "success",
                            title: "Like Success",
                            message: "Like successfully"
                        }), n.cmt.isLike = !0, n.cmt.likeCount++
                    } catch (j) {
                        G({
                            type: "error",
                            title: "Like Failed",
                            message: j.message
                        })
                    }
                }, a = async () => {
                    const f = {
                        projectId: n.projectId,
                        messageId: n.messageId,
                        commentId: n.cmt._id
                    };
                    try {
                        await lt(f), G({
                            type: "success",
                            title: "Unlike Success",
                            message: "Unlike successfully"
                        }), n.cmt.isLike = !1, n.cmt.likeCount--
                    } catch (j) {
                        G({
                            type: "error",
                            title: "Unlike Failed",
                            message: j.message
                        })
                    }
                }, m = () => {
                    const f = {
                        messageId: n.messageId,
                        commentId: n.cmt._id,
                        user: n.cmt.user
                    };
                    ce.$emit("showReplyDia", f)
                };
            return (f, j) => {
                var b, l, r;
                const $ = be,
                    y = Ie;
                return u(), D("div", Vn, [e("img", {
                    src: t(mt)((b = I.cmt.user) == null ? void 0 : b.publicKey),
                    class: "avatar"
                }, null, 8, Rn), e("div", On, [e("div", xn, [e("div", Un, _(t(ke)((l = I.cmt.user) == null ? void 0 : l.publicKey)), 1), s($, {
                    class: "rightIcon"
                }, {
                    default: d(() => [s(t(Lt))]),
                    _: 1
                }), e("div", qn, _(t(ke)((r = I.cmt.replyTo) == null ? void 0 : r.publicKey)), 1)]), e("div", {
                    class: "cnt",
                    onClick: m,
                    innerHTML: t(Pt)(I.cmt.content) || "-"
                }, null, 8, Gn), e("div", Kn, [e("div", zn, [e("div", Yn, _(t(Ue)(I.cmt.time)), 1), e("div", {
                    class: "reply",
                    onClick: m
                }, "Reply")]), e("div", Xn, [I.cmt.isLike ? (u(), D("div", {
                    key: 1,
                    class: "flexc",
                    onClick: a
                }, [s(y, {
                    class: "icon",
                    name: "Loyalty",
                    color: "var(--red)"
                }), e("span", null, _(I.cmt.likeCount), 1)])) : (u(), D("div", {
                    key: 0,
                    class: "flexc",
                    onClick: i
                }, [s(y, {
                    class: "icon",
                    name: "Loyalty",
                    color: "#999"
                }), I.cmt.likeCount ? (u(), D("span", Hn, _(I.cmt.likeCount), 1)) : L("", !0)]))])])])])
            }
        }
    }),
    Jn = ee(Wn, [
        ["__scopeId", "data-v-aa218a8b"]
    ]),
    Qn = {
        class: "li"
    },
    Zn = ["src"],
    el = {
        class: "info"
    },
    tl = {
        class: "addr"
    },
    sl = ["innerHTML"],
    ol = {
        class: "flexb"
    },
    al = {
        class: "bottom"
    },
    nl = {
        class: "time"
    },
    ll = {
        class: "tool"
    },
    rl = {
        key: 0
    },
    il = {
        key: 0,
        class: "comments"
    },
    cl = {
        key: 2,
        class: "showReply"
    },
    ul = Z({
        __name: "MessageComp",
        props: {
            msg: {
                type: Object,
                default: {}
            },
            projectId: {
                type: String,
                default: ""
            }
        },
        setup(I) {
            const n = I,
                i = De(),
                a = async S => {
                    try {
                        await _s({
                            projectId: n.projectId,
                            messageId: S._id
                        }), G({
                            type: "success",
                            title: "Like Success",
                            message: "Like successfully"
                        }), S.isLike = !0, S.likeCount++
                    } catch (k) {
                        G({
                            type: "error",
                            title: "Like Failed",
                            message: k.message
                        })
                    }
                }, m = async S => {
                    try {
                        await vs({
                            projectId: n.projectId,
                            messageId: S._id
                        }), G({
                            type: "success",
                            title: "Unlike Success",
                            message: "Unlike successfully"
                        }), S.isLike = !1, S.likeCount--
                    } catch (k) {
                        G({
                            type: "error",
                            title: "Unlike Failed",
                            message: k.message
                        })
                    }
                }, f = w(!1), j = w(!1), $ = () => {
                    f.value = !1
                }, y = async () => {
                    f.value = !0, r.value.length || await p(3)
                }, b = async () => {
                    v.value && await p()
                };
            let l = 1;
            const r = w([]),
                v = w(!1),
                p = async (S = 10) => {
                    j.value = !0;
                    const k = n.projectId,
                        C = n.msg._id,
                        V = {
                            page: l,
                            limit: S,
                            publicKey: i.account
                        };
                    try {
                        const E = await gs(k, C, V);
                        S === 10 && l++, E.list = E.list.filter(Y => !r.value.find(M => M._id === Y._id)), r.value.push(...E.list), v.value = r.value.length < E.total
                    } catch (E) {
                        console.error(E)
                    } finally {
                        j.value = !1
                    }
                }, c = () => {
                    const S = {
                        messageId: n.msg._id,
                        user: n.msg.user
                    };
                    ce.$emit("showReplyDia", S)
                };
            return n.msg.pushNewComment = S => {
                r.value.unshift(S)
            }, (S, k) => {
                var V, E;
                const C = be;
                return u(), D("div", Qn, [e("img", {
                    src: t(mt)((V = I.msg.user) == null ? void 0 : V.publicKey),
                    class: "avatar"
                }, null, 8, Zn), e("div", el, [e("div", tl, _(t(ke)(((E = I.msg.user) == null ? void 0 : E.publicKey) || "")), 1), e("div", {
                    class: "cnt",
                    onClick: c,
                    innerHTML: t(Pt)(I.msg.content) || "-"
                }, null, 8, sl), e("div", ol, [e("div", al, [e("div", nl, _(t(Ue)(I.msg.time)), 1), e("div", {
                    class: "reply",
                    onClick: c
                }, "Reply")]), e("div", ll, [I.msg.isLike ? (u(), D("div", {
                    key: 1,
                    class: "flexc",
                    onClick: k[1] || (k[1] = _e(Y => m(I.msg), ["stop"]))
                }, [s(Ie, {
                    class: "icon",
                    name: "Loyalty",
                    color: "var(--red)"
                }), e("span", null, _(I.msg.likeCount), 1)])) : (u(), D("div", {
                    key: 0,
                    class: "flexc",
                    onClick: k[0] || (k[0] = _e(Y => a(I.msg), ["stop"]))
                }, [s(Ie, {
                    class: "icon",
                    name: "Loyalty",
                    color: "#999"
                }), I.msg.likeCount ? (u(), D("span", rl, _(I.msg.likeCount), 1)) : L("", !0)]))])]), t(f) ? (u(), D("div", il, [(u(!0), D(pe, null, Oe(t(r), Y => (u(), B(Jn, {
                    key: Y._id,
                    cmt: Y,
                    "message-id": I.msg._id,
                    "project-id": I.projectId
                }, null, 8, ["cmt", "message-id", "project-id"]))), 128))])) : L("", !0), t(j) ? (u(), B(C, {
                    key: 1,
                    class: "is-loading loadingIcon",
                    color: "#29D4B0"
                }, {
                    default: d(() => [s(t(Ft))]),
                    _: 1
                })) : I.msg.commentCount ? (u(), D("div", cl, [k[4] || (k[4] = e("span", {
                    class: "line"
                }, null, -1)), t(f) ? t(v) ? (u(), D("span", {
                    key: 1,
                    class: "replyCount",
                    onClick: _e(b, ["stop"])
                }, [k[2] || (k[2] = h("Expand more ")), s(C, {
                    class: "arrowIcon"
                }, {
                    default: d(() => [s(t(ot))]),
                    _: 1
                })])) : L("", !0) : (u(), D("span", {
                    key: 0,
                    class: "replyCount",
                    onClick: _e(y, ["stop"])
                }, [h(" Expand " + _(I.msg.commentCount) + " replies ", 1), s(C, {
                    class: "arrowIcon"
                }, {
                    default: d(() => [s(t(ot))]),
                    _: 1
                })])), t(f) ? (u(), D("span", {
                    key: 2,
                    class: "replyCount",
                    onClick: _e($, ["stop"])
                }, [k[3] || (k[3] = h("Close ")), s(C, {
                    class: "arrowIcon"
                }, {
                    default: d(() => [s(t(Et))]),
                    _: 1
                })])) : L("", !0)])) : L("", !0)])])
            }
        }
    }),
    dl = ee(ul, [
        ["__scopeId", "data-v-632b13e5"]
    ]),
    pl = {
        class: "replyDia"
    },
    ml = {
        class: "postMessage"
    },
    fl = {
        class: "tools"
    },
    _l = Z({
        __name: "ReplyDia",
        props: {
            params: {
                type: Object,
                default: {}
            },
            projectId: {
                type: String,
                default: ""
            }
        },
        emits: ["listenClose"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = I,
                m = w(""),
                f = async () => {
                    const l = {
                            messageId: a.params.messageId,
                            replyTo: a.params.user.publicKey,
                            content: m.value,
                            imageUrl: ""
                        },
                        r = a.projectId;
                    try {
                        const v = await ys(r, l);
                        i("listenClose", v.data), G({
                            type: "success",
                            title: "Reply Success",
                            message: "Reply successfully"
                        }), m.value = ""
                    } catch (v) {
                        console.error(v), G({
                            type: "error",
                            title: "Post Failed",
                            message: v.message
                        })
                    }
                };
            Be(() => {
                b()
            }), Se(() => {
                $ && clearTimeout($)
            });
            const j = De();
            let $ = null;
            const y = w(0),
                b = () => {
                    $ && clearTimeout($);
                    const l = Re(),
                        v = j.coolingTime - l;
                    v > 0 ? (y.value = Math.ceil(v % (1e3 * 60) / 1e3), $ = setTimeout(() => {
                        b()
                    }, 1e3)) : y.value = 0
                };
            return le(() => j.coolingTime, () => {
                b()
            }, {
                immediate: !0
            }), (l, r) => {
                const v = Me,
                    p = we;
                return u(), D("div", pl, [e("div", ml, [s(v, {
                    modelValue: t(m),
                    "onUpdate:modelValue": r[0] || (r[0] = c => Te(m) ? m.value = c : null),
                    rows: 5,
                    maxlength: "256",
                    placeholder: `@${t(ke)(I.params.user.publicKey)}`,
                    "show-word-limit": "",
                    type: "textarea"
                }, null, 8, ["modelValue", "placeholder"]), e("div", fl, [t(y) ? (u(), B(p, {
                    key: 0,
                    disabled: "",
                    type: "primary"
                }, {
                    default: d(() => [h(_(t(y)) + "s", 1)]),
                    _: 1
                })) : (u(), B(p, {
                    key: 1,
                    type: "primary",
                    class: "btn",
                    onClick: f
                }, {
                    default: d(() => r[1] || (r[1] = [h("Post")])),
                    _: 1,
                    __: [1]
                }))])])])
            }
        }
    }),
    vl = ee(_l, [
        ["__scopeId", "data-v-b37204b0"]
    ]),
    gl = {
        class: "threadRecords"
    },
    yl = {
        class: "postMessage"
    },
    kl = {
        class: "tools"
    },
    hl = {
        class: "lines"
    },
    bl = Z({
        __name: "ThreadRecords",
        setup(I) {
            const n = Ne(),
                i = w(n.params.id),
                a = w(""),
                m = async () => {
                    try {
                        if (!a.value) return;
                        await bs(i.value, {
                            content: a.value
                        }), G({
                            type: "success",
                            title: "Post Success",
                            message: "Post successfully"
                        }), a.value = ""
                    } catch (M) {
                        if (console.error(M), M.code === 401 || M.code === 403) {
                            m();
                            return
                        }
                        G({
                            type: "error",
                            title: "Post Failed",
                            message: M.message
                        })
                    }
                }, f = De(), j = w(!1), $ = async () => {
                    j.value || (j.value = !0, await r(), j.value = !1)
                }, y = w(1), b = w(!0), l = w([]), r = async () => {
                    if (b.value) try {
                        const M = await hs(i.value, {
                                page: y.value,
                                limit: 10,
                                publicKey: f.account
                            }),
                            U = M.list;
                        l.value.push(...U), l.value.length >= M.total && (b.value = !1), y.value++
                    } catch (M) {
                        console.error(M)
                    }
                }, v = w(!1), p = w(), c = M => {
                    v.value = !0, p.value = M
                }, S = M => {
                    v.value = !1
                };
            Be(() => {
                Y(), V(), ce.$on("showReplyDia", c)
            }), Se(() => {
                ce.$off("showReplyDia"), E == null || E.close(), k && clearTimeout(k)
            });
            let k = null;
            const C = w(0),
                V = () => {
                    k && clearTimeout(k);
                    const M = Re(),
                        te = f.coolingTime - M;
                    te > 0 ? (C.value = Math.ceil(te % (1e3 * 60) / 1e3), k = setTimeout(() => {
                        V()
                    }, 1e3)) : C.value = 0
                };
            le(() => f.coolingTime, () => {
                V()
            }, {
                immediate: !0
            });
            let E;
            const Y = async () => {
                i.value && (E = await ks(i.value, M => {
                    const U = M.data;
                    U.action || (U.time = Re(Ot(new Date(U.timestamp))), l.value.unshift(U))
                }, M => {
                    console.error(M)
                }))
            };
            return (M, U) => {
                const te = Me,
                    x = we,
                    F = qe,
                    se = fs;
                return u(), D(pe, null, [e("div", gl, [e("div", yl, [s(te, {
                    modelValue: t(a),
                    "onUpdate:modelValue": U[0] || (U[0] = P => Te(a) ? a.value = P : null),
                    rows: 5,
                    maxlength: "256",
                    placeholder: "Write something...",
                    "show-word-limit": "",
                    type: "textarea"
                }, null, 8, ["modelValue"]), e("div", kl, [t(C) ? (u(), B(x, {
                    key: 0,
                    type: "primary",
                    disabled: "",
                    class: "btn"
                }, {
                    default: d(() => [h(_(t(C)) + "s", 1)]),
                    _: 1
                })) : (u(), B(x, {
                    key: 1,
                    type: "primary",
                    class: "btn",
                    onClick: m
                }, {
                    default: d(() => U[2] || (U[2] = [h("Post")])),
                    _: 1,
                    __: [2]
                }))])]), e("div", hl, [(u(!0), D(pe, null, Oe(t(l), P => (u(), B(dl, {
                    key: P._id,
                    msg: P,
                    projectId: t(i)
                }, null, 8, ["msg", "projectId"]))), 128)), s(F, {
                    more: t(b),
                    method: $
                }, null, 8, ["more"])])]), s(se, {
                    modelValue: t(v),
                    "onUpdate:modelValue": U[1] || (U[1] = P => Te(v) ? v.value = P : null),
                    title: "Reply",
                    width: "500",
                    "close-on-click-modal": !1
                }, {
                    default: d(() => [s(vl, {
                        params: t(p),
                        projectId: t(i),
                        onListenClose: S
                    }, null, 8, ["params", "projectId"])]),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    }),
    At = ee(bl, [
        ["__scopeId", "data-v-ddf9a5a3"]
    ]),
    Dl = {
        class: "mainComp"
    },
    jl = {
        class: "proImg"
    },
    $l = {
        class: "tabs"
    },
    Tl = Z({
        __name: "MainComp",
        props: {
            projectData: {},
            programInfo: {},
            mintAccounts: {},
            buyAccounts: {}
        },
        emits: ["updateProjectData"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = w(0);
            return (m, f) => {
                var $, y;
                const j = ft;
                return u(), D(pe, null, [s(is, {
                    title: ($ = m.projectData) == null ? void 0 : $.project_name
                }, Vt({
                    _: 2
                }, [m.$route.name === "boardDetailPage" ? {
                    name: "right",
                    fn: d(() => [s(Ao)]),
                    key: "0"
                } : void 0]), 1032, ["title"]), e("div", Dl, [e("div", jl, [s(j, {
                    src: t(ye)(((y = m.projectData) == null ? void 0 : y.nft_image_url) || "", 400),
                    fit: "contain",
                    class: "img"
                }, {
                    placeholder: d(() => f[7] || (f[7] = [e("div", {
                        class: "image-slot"
                    }, [h("Loading"), e("span", {
                        class: "dot"
                    }, "...")], -1)])),
                    _: 1
                }, 8, ["src"])]), e("div", $l, [e("div", {
                    class: W(["tab", {
                        active: t(a) === 0
                    }]),
                    onClick: f[0] || (f[0] = b => a.value = 0)
                }, "Market", 2), e("div", {
                    class: W(["tab", {
                        active: t(a) === 1
                    }]),
                    onClick: f[1] || (f[1] = b => a.value = 1)
                }, "Info", 2), e("div", {
                    class: W(["tab", {
                        active: t(a) === 2
                    }]),
                    onClick: f[2] || (f[2] = b => a.value = 2)
                }, "Token", 2), e("div", {
                    class: W(["tab", {
                        active: t(a) === 3
                    }]),
                    onClick: f[3] || (f[3] = b => a.value = 3)
                }, "Trades", 2), e("div", {
                    class: W(["tab", {
                        active: t(a) === 5
                    }]),
                    onClick: f[4] || (f[4] = b => a.value = 5)
                }, "Thread", 2), m.projectData && m.projectData.init_nft_supply <= m.projectData.nft_issue_count ? (u(), D("div", {
                    key: 0,
                    class: W(["tab", {
                        active: t(a) === 4
                    }]),
                    onClick: f[5] || (f[5] = b => a.value = 4)
                }, " Chart ", 2)) : L("", !0)]), e("div", null, [t(a) === 0 ? (u(), B(Ho, {
                    key: 0,
                    projectData: m.projectData,
                    mintAccounts: m.mintAccounts,
                    buyAccounts: m.buyAccounts,
                    programInfo: m.programInfo,
                    onUpdateProjectData: f[6] || (f[6] = b => i("updateProjectData"))
                }, null, 8, ["projectData", "mintAccounts", "buyAccounts", "programInfo"])) : t(a) === 1 ? (u(), B(wt, {
                    key: 1,
                    class: "padding",
                    projectData: m.projectData
                }, null, 8, ["projectData"])) : t(a) === 2 ? (u(), B(St, {
                    key: 2,
                    projectData: m.projectData,
                    mintAccounts: m.mintAccounts,
                    buyAccounts: m.buyAccounts,
                    programInfo: m.programInfo
                }, null, 8, ["projectData", "mintAccounts", "buyAccounts", "programInfo"])) : t(a) === 3 ? (u(), B(jt, {
                    key: 3
                })) : t(a) === 5 ? (u(), B(At, {
                    key: 4
                })) : t(a) === 4 ? (u(), B(Dt, {
                    key: 5,
                    projectData: m.projectData
                }, null, 8, ["projectData"])) : L("", !0)])])], 64)
            }
        }
    }),
    Il = ee(Tl, [
        ["__scopeId", "data-v-770fc0e0"]
    ]),
    wl = {
        class: "mintComp"
    },
    Sl = ["src"],
    Cl = {
        class: "item"
    },
    Pl = {
        class: "price"
    },
    Al = {
        class: ""
    },
    Nl = Z({
        __name: "MintComp",
        props: {
            projectData: {},
            programInfo: {},
            mintAccounts: {},
            buyAccounts: {}
        },
        emits: ["updateProjectData", "updateNftsInfo"],
        setup(I, {
            emit: n
        }) {
            const i = n,
                a = I,
                m = De(),
                f = w(0),
                j = async () => {
                    if (!m.account) {
                        f.value = 0;
                        return
                    }
                    const r = await ie.getSolBalance(m.account);
                    f.value = r
                };
            le(() => m.account, () => {
                j()
            }, {
                immediate: !0
            });
            const $ = w(1),
                y = X(() => {
                    var r;
                    return a.projectData ? K($.value * ((r = a.projectData) == null ? void 0 : r.init_nft_price), 10 ** 9) : 0
                }),
                b = w(!1),
                l = async () => {
                    if (!m.account) {
                        G({
                            title: "Error",
                            message: "Please connect wallet",
                            type: "error"
                        }), m.setShowConnectWallet(!0);
                        return
                    }
                    if (b.value) return;
                    if (f.value < y.value) {
                        G({
                            title: "Error",
                            message: "Insufficient balance",
                            type: "error"
                        });
                        return
                    }
                    const r = a.mintAccounts,
                        v = a.programInfo.project_PDA;
                    if (!(!r || !v)) {
                        b.value = !0;
                        try {
                            await It(v, r, $.value), setTimeout(() => {
                                i("updateProjectData"), ce.$emit("updateNftsInfo")
                            }, 1e3), G({
                                title: "Success",
                                message: "Mint success",
                                type: "success"
                            })
                        } catch (p) {
                            console.error(p), G({
                                title: "Mint failed",
                                message: Ae(p) || "Mint failed",
                                type: "error"
                            })
                        } finally {
                            b.value = !1
                        }
                    }
                };
            return (r, v) => {
                var S, k;
                const p = we,
                    c = Le;
                return u(), D("div", wl, [e("img", {
                    src: t(ye)(((S = r.projectData) == null ? void 0 : S.nft_image_url) || "", 400),
                    class: "nftImg"
                }, null, 8, Sl), e("div", Cl, [v[1] || (v[1] = e("span", null, " Mint Price:", -1)), e("span", null, [e("span", Pl, _(t(K)((k = r.projectData) == null ? void 0 : k.init_nft_price, 10 ** 9)) + " SOL", 1), v[0] || (v[0] = h(" / per NFT"))])]), e("div", Al, [$e((u(), B(p, {
                    class: "mintBtn",
                    type: "primary",
                    size: "large",
                    onClick: l
                }, {
                    default: d(() => v[2] || (v[2] = [h("Mint")])),
                    _: 1,
                    __: [2]
                })), [
                    [c, t(b)]
                ])])])
            }
        }
    }),
    Bl = ee(Nl, [
        ["__scopeId", "data-v-36d6cae7"]
    ]),
    Ml = {
        key: 0,
        class: "programDetail"
    },
    Ll = {
        class: "rightBorder"
    },
    Fl = {
        class: "navs"
    },
    El = {
        key: 1,
        class: "programDetailMobile"
    },
    Vl = Z({
        __name: "Index",
        setup(I) {
            Be(() => {
                p(), b()
            });
            const i = Ge().ProgramIds,
                a = Ne(),
                m = ut(),
                f = X(() => new yt(a.params.id)),
                j = he({}),
                $ = w(),
                y = w(),
                b = async () => {
                    if (!f.value) {
                        Xt.error("project not found"), m.push({
                            name: "boardPage"
                        });
                        return
                    }
                    try {
                        const [S] = Qt(i.PPPFUN, f.value), [k] = Zt(i.PPPFUN, f.value);
                        j.project_PDA = S, j.authority_PDA = k;
                        const C = await Eo(f.value, k);
                        $.value = C;
                        const V = await Ht(f.value, k);
                        y.value = V
                    } catch (S) {
                        console.error(S)
                    }
                }, l = w(), r = w(!1), v = w(!0), p = async () => {
                    try {
                        const S = await Ut(f.value.toBase58());
                        l.value = S, v.value && (S.init_nft_supply > S.nft_issue_count ? (c.value = 3, r.value = !0) : (c.value = 4, r.value = !1), v.value = !1)
                    } catch {}
                }, c = w(4);
            return (S, k) => {
                const C = Qe,
                    V = Je;
                return t(xe) ? (u(), D("div", El, [s(Il, {
                    projectData: t(l),
                    mintAccounts: t($),
                    buyAccounts: t(y),
                    programInfo: t(j),
                    onUpdateProjectData: p
                }, null, 8, ["projectData", "mintAccounts", "buyAccounts", "programInfo"])])) : (u(), D("div", Ml, [s(xs, {
                    projectData: t(l)
                }, null, 8, ["projectData"]), s(V, {
                    class: "row"
                }, {
                    default: d(() => [s(C, {
                        span: 16
                    }, {
                        default: d(() => [s(jo, {
                            projectData: t(l),
                            mintAccounts: t($),
                            buyAccounts: t(y),
                            programInfo: t(j),
                            onUpdateProjectData: p
                        }, null, 8, ["projectData", "mintAccounts", "buyAccounts", "programInfo"])]),
                        _: 1
                    }), s(C, {
                        span: 8
                    }, {
                        default: d(() => [e("div", Ll, [e("div", Fl, [t(r) ? (u(), D("div", {
                            key: 0,
                            class: W(["nav", {
                                act: t(c) == 3
                            }]),
                            onClick: k[0] || (k[0] = E => c.value = 3)
                        }, "Mint", 2)) : L("", !0), e("div", {
                            class: W(["nav", {
                                act: t(c) == 4
                            }]),
                            onClick: k[1] || (k[1] = E => c.value = 4)
                        }, "Token", 2), e("div", {
                            class: W(["nav", {
                                act: t(c) === 2
                            }]),
                            onClick: k[2] || (k[2] = E => c.value = 2)
                        }, "Info", 2), e("div", {
                            class: W(["nav", {
                                act: t(c) == 1
                            }]),
                            onClick: k[3] || (k[3] = E => c.value = 1)
                        }, "Trades", 2), e("div", {
                            class: W(["nav", {
                                act: t(c) == 0
                            }]),
                            onClick: k[4] || (k[4] = E => c.value = 0)
                        }, "Thread", 2)]), t(c) == 3 ? (u(), B(Bl, {
                            key: 0,
                            projectData: t(l),
                            mintAccounts: t($),
                            buyAccounts: t(y),
                            programInfo: t(j),
                            onUpdateProjectData: p
                        }, null, 8, ["projectData", "mintAccounts", "buyAccounts", "programInfo"])) : t(c) === 2 ? (u(), B(wt, {
                            key: 1,
                            projectData: t(l)
                        }, null, 8, ["projectData"])) : L("", !0), t(c) == 0 ? (u(), B(At, {
                            key: 2
                        })) : L("", !0), t(c) == 1 ? (u(), B(jt, {
                            key: 3
                        })) : L("", !0), t(c) == 4 ? (u(), B(St, {
                            key: 4,
                            projectData: t(l),
                            mintAccounts: t($),
                            buyAccounts: t(y),
                            programInfo: t(j)
                        }, null, 8, ["projectData", "mintAccounts", "buyAccounts", "programInfo"])) : L("", !0)])]),
                        _: 1
                    })]),
                    _: 1
                })]))
            }
        }
    }),
    _r = ee(Vl, [
        ["__scopeId", "data-v-7f0bb1dc"]
    ]);
export {
    _r as
    default
};
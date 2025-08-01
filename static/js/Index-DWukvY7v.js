import {
	d as G,
	c as se,
	J as ee,
	b as f,
	o as d,
	n as W,
	k as e,
	t as v,
	v as P,
	x as S,
	ad as I,
	l as n,
	m as r,
	p as C,
	e as s,
	D as O,
	E as q,
	af as ne,
	ag as ae,
	B as K,
	ah as te,
	ai as Se,
	h as F,
	O as le,
	z as X,
	F as x,
	s as re,
	A as ie,
	y as de,
	aj as pe,
	ak as ue,
	I as z,
	al as ce,
	am as me,
	G as Me,
	j as Ie,
	an as Le
} from "./index-DejQ-iz-.js";
import {
	E as Te
} from "./el-dialog-BXbic-ED.js";
import {
	_ as _e
} from "./fetchRequest-DnbIkz7g.js";
import {
	E as Fe,
	a as Ve
} from "./el-col-CGhe7whV.js";
import {
	E as Q,
	a as Y,
	b as Z
} from "./el-dropdown-item-qzWx556N.js";
import "./el-popper-DfMgMTnx.js";
import "./el-divider-BmWAspa3.js";
import {
	u as fe,
	b as A,
	g as ve,
	c as ke,
	a as R,
	h as $e,
	i as je,
	F as $,
	j as h,
	k as Ne
} from "./index-Brp1LNR4.js";
import {
	c as Ae
} from "./isMobile-DPHpSBeS.js";
import {
	E as Ee
} from "./CountDown-Dz7lloNh.js";
import {
	_ as H
} from "./SvgIcon-BS4YQbSZ.js";
import {
	_ as J
} from "./SOL-C9Tst582.js";
import {
	M as ge,
	N as Ce
} from "./NextRoundProgress-CXWtRJUE.js";
import {
	g as He
} from "./projectApi-CUEHPrzz.js";
import Re from "./HowItWork-D-XTQ1mu.js";
import {
	b as oe
} from "./bus-CpQP4H_1.js";
import "./dropdown-BXx2P874.js";
import "./castArray-G03HepT3.js";
import "./debounce-B0TYyvOo.js";
import "./el-progress-CQCGwsfG.js";
import "./AppTitle-VMh4pfQS.js";
const Be = {
		class: "project"
	},
	Ue = {
		class: "flexs"
	},
	Xe = {
		class: "tokenName"
	},
	Oe = {
		class: "title"
	},
	ze = {
		class: "flexs"
	},
	Je = {
		class: "board"
	},
	Ge = {
		class: "infos"
	},
	We = {
		class: "ca"
	},
	qe = {
		class: "desc"
	},
	Ke = {
		class: "flexb"
	},
	Qe = {
		class: "others"
	},
	Ye = {
		class: "info"
	},
	Ze = {
		class: "info"
	},
	xe = {
		class: "info"
	},
	et = {
		class: "info"
	},
	tt = {
		class: "info"
	},
	ot = {
		class: "info"
	},
	st = G({
		__name: "BoardItem",
		props: {
			projectData: {}
		},
		setup(E) {
			const k = fe(),
				m = E,
				L = se(() => {
					const o = A(m.projectData.nft_id, m.projectData.init_nft_supply) * 100;
					return o > 100 ? 100 : o
				}),
				_ = o => {
					window.open(o, "_blank")
				},
				j = o => {
					var t, p;
					if (o === "CA") R(m.projectData.mint_pubkey);
					else if (o === "Link") {
						let c = window.location.origin + "/project/" + m.projectData.mint_pubkey;
						(t = k.userInfo) != null && t.refCode && (c += `?ref=${(p=k.userInfo)==null?void 0:p.refCode}`), R(c)
					} else o === "Share" && y(m.projectData)
				},
				y = o => {
					var u;
					const t = (u = k.userInfo) != null && u.refCode ? `?ref=${k.userInfo.refCode}` : "",
						p = `
	🚀 Just discovered an amazing fair-launch project on Solana!
	🎮 Project: ${o.project_name} (${o.token_symbol})
	💎 NFTs Minted: ${o.nft_issue_count} 
	🔥 Market Cap: ${o.market_cap.toFixed(2)} SOL
	🧠 Powered by PPP — Protocol Pump Player
	👉 Join now: https://ppp.fun/project/${o.mint_pubkey}${t}
	#PPP #Solana #FairLaunch #NFTGaming
	`,
						c = encodeURIComponent(p);
					window.open(`https://x.com/intent/tweet?text=${c}`, 'target="_blank"')
				},
				b = ee(),
				D = () => {
					b.push({
						name: "boardDetailPage",
						params: {
							id: m.projectData.mint_pubkey
						}
					})
				};
			return (o, t) => {
				var i;
				const p = H,
					c = Ee,
					u = q,
					a = Y,
					M = Q,
					T = Z;
				return d(), f("div", {
					class: W(["boardItem", {
						hot: o.projectData.nft_id >= o.projectData.init_nft_supply
					}]),
					onClick: D
				}, [e("div", Be, [e("div", Ue, [e("div", Xe, v(o.projectData.token_symbol || "-"), 1), e("div", Oe, v(o.projectData.project_name || "-"), 1)]), e("div", ze, [o.projectData.twitter ? (d(), P(p, {
					key: 0,
					name: "X",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[0] || (t[0] = I(l => _(o.projectData.twitter), ["stop"]))
				})) : S("", !0), o.projectData.telegram ? (d(), P(p, {
					key: 1,
					name: "telegram",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[1] || (t[1] = I(l => _(o.projectData.telegram), ["stop"]))
				})) : S("", !0), o.projectData.discord ? (d(), P(p, {
					key: 2,
					name: "discord",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[2] || (t[2] = I(l => _(o.projectData.discord), ["stop"]))
				})) : S("", !0), o.projectData.website ? (d(), P(p, {
					key: 3,
					name: "website",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[3] || (t[3] = I(l => _(o.projectData.website), ["stop"]))
				})) : S("", !0)])]), e("div", Je, [n(c, {
					src: s(ve)(o.projectData.nft_image_url || ""),
					class: "picture",
					fit: "cover"
				}, {
					placeholder: r(() => t[9] || (t[9] = [e("div", {
						class: "image-slot"
					}, [C("Loading"), e("span", {
						class: "dot"
					}, "...")], -1)])),
					_: 1
				}, 8, ["src"]), e("div", Ge, [e("div", null, [e("div", We, [e("span", null, "CA: " + v(s(ke)(o.projectData.mint_pubkey || "-")), 1), n(u, {
					class: "icon copy",
					onClick: t[4] || (t[4] = I(l => s(R)(o.projectData.mint_pubkey || ""), ["stop"]))
				}, {
					default: r(() => [n(s(O))]),
					_: 1
				}), n(T, {
					"popper-class": "mypopperShare",
					placement: "top"
				}, {
					dropdown: r(() => [n(M, null, {
						default: r(() => [n(a, {
							class: "item",
							onClick: t[6] || (t[6] = l => j("Share"))
						}, {
							default: r(() => [n(p, {
								name: "X",
								class: "iconShare",
								color: "var(--xcolor)"
							}), t[10] || (t[10] = e("span", {
								class: "labelShare"
							}, "Share on X", -1))]),
							_: 1,
							__: [10]
						}), n(a, {
							class: "item",
							onClick: t[7] || (t[7] = l => j("Link"))
						}, {
							default: r(() => [n(u, {
								class: "iconShare"
							}, {
								default: r(() => [n(s(ae))]),
								_: 1
							}), t[11] || (t[11] = e("span", {
								class: "labelShare"
							}, "Copy link", -1))]),
							_: 1,
							__: [11]
						}), n(a, {
							class: "item",
							onClick: t[8] || (t[8] = l => j("CA"))
						}, {
							default: r(() => [n(u, {
								class: "iconShare"
							}, {
								default: r(() => [n(s(O))]),
								_: 1
							}), t[12] || (t[12] = e("span", {
								class: "labelShare"
							}, "Copy CA", -1))]),
							_: 1,
							__: [12]
						})]),
						_: 1
					})]),
					default: r(() => [n(u, {
						onClick: t[5] || (t[5] = I(() => {}, ["stop"])),
						class: "icon copy"
					}, {
						default: r(() => [n(s(ne))]),
						_: 1
					})]),
					_: 1
				})]), e("div", qe, v(o.projectData.project_desc || "-"), 1)]), e("div", Ke, [s(L) < 100 ? (d(), P(ge, {
					key: 0,
					projectData: o.projectData,
					mintRate: s(L)
				}, null, 8, ["projectData", "mintRate"])) : (d(), P(Ce, {
					key: 1,
					projectData: o.projectData
				}, null, 8, ["projectData"]))])])]), e("div", Qe, [e("div", Ye, [t[14] || (t[14] = e("span", {
					class: "label"
				}, "MC:", -1)), e("span", null, [t[13] || (t[13] = e("img", {
					src: J,
					class: "coin"
				}, null, -1)), e("span", null, v(s($e)(((i = o.projectData) == null ? void 0 : i.market_cap) || 0, 2)), 1)])]), e("div", Ze, [t[16] || (t[16] = e("span", {
					class: "label"
				}, "VOL(24H):", -1)), e("span", null, [t[15] || (t[15] = e("img", {
					src: J,
					class: "coin"
				}, null, -1)), e("span", null, v(Number(s(A)(o.projectData.volume_24h || 0, 10 ** 9).toFixed(2)) || "0"), 1)])]), e("div", xe, [t[17] || (t[17] = e("span", {
					class: "label"
				}, "TXS(24H):", -1)), e("span", null, v(o.projectData.tx_24h || "-"), 1)]), e("div", et, [t[18] || (t[18] = e("span", {
					class: "label"
				}, "Period:", -1)), e("span", null, v(s(je)(o.projectData.sec_per_round) || "-"), 1)]), e("div", tt, [t[19] || (t[19] = e("span", {
					class: "label"
				}, "Increment:", -1)), e("span", null, v(s(A)(o.projectData.increase_per_round || 0, 100)) + "%", 1)]), e("div", ot, [t[20] || (t[20] = e("span", {
					class: "label"
				}, "Fee:", -1)), e("span", null, v(s(A)(o.projectData.trade_fee_rate || 0, 100)) + "%", 1)])])], 2)
			}
		}
	}),
	nt = K(st, [
		["__scopeId", "data-v-ce49ca2e"]
	]),
	at = {
		class: "homeMobile"
	},
	lt = {
		class: "subTitle"
	},
	rt = {
		class: "tools"
	},
	it = {
		class: "sorts"
	},
	dt = {
		class: "sortSelect"
	},
	pt = {
		class: "sort"
	},
	ut = {
		class: "name"
	},
	ct = {
		key: 0
	},
	mt = {
		key: 1
	},
	_t = {
		key: 2
	},
	ft = {
		class: "sortSelect"
	},
	vt = {
		class: "sort"
	},
	kt = {
		class: "name"
	},
	$t = {
		key: 0
	},
	jt = {
		key: 1
	},
	gt = {
		key: 2
	},
	Ct = {
		class: "lists"
	},
	yt = G({
		__name: "IndexMobile",
		props: te({
			projectsData: {}
		}, {
			modelValue: {},
			modelModifiers: {}
		}),
		emits: te(["refresh", "loadMore", "searchChange", "changeSort", "changeFilter", "changeShowHow"], ["update:modelValue"]),
		setup(E, {
			emit: k
		}) {
			const m = k,
				L = Se(E, "modelValue"),
				_ = u => {
					m("changeSort", u)
				},
				j = F($.All),
				y = u => {
					j.value = u, m("changeFilter", u)
				},
				b = F("");
			le(b, () => {
				m("searchChange", b.value)
			});
			const D = F(!1),
				o = async () => {
					D.value || (D.value = !0, m("refresh"), setTimeout(() => {
						D.value = !1
					}, 1e3))
				}, t = async () => {
					m("loadMore")
				}, p = ee(), c = u => {
					p.push({
						name: u
					})
				};
			return (u, a) => {
				const M = ie,
					T = de,
					i = q,
					l = Y,
					B = Q,
					V = Z,
					N = _e;
				return d(), f("div", at, [a[19] || (a[19] = e("div", {
					class: "title"
				}, "The First PPP (Protocol Pump Player)", -1)), a[20] || (a[20] = e("div", {
					class: "title"
				}, "Fair Launch Platform", -1)), n(M, {
					class: "launch",
					onClick: a[0] || (a[0] = w => c("boardCreatePage"))
				}, {
					default: r(() => a[10] || (a[10] = [C("Launch")])),
					_: 1,
					__: [10]
				}), e("div", {
					class: "tip",
					onClick: a[1] || (a[1] = w => m("changeShowHow", !0))
				}, "How it works?"), e("div", lt, [a[12] || (a[12] = e("div", {
					class: "name"
				}, "Project List", -1)), n(M, {
					class: "btn",
					type: "primary",
					size: "small",
					onClick: a[2] || (a[2] = w => c("boardMyNftsPage"))
				}, {
					default: r(() => a[11] || (a[11] = [C("My NFT")])),
					_: 1,
					__: [11]
				})]), e("div", rt, [n(T, {
					modelValue: s(b),
					"onUpdate:modelValue": a[3] || (a[3] = w => X(b) ? b.value = w : null),
					placeholder: "Name / Symbol / CA",
					class: "searchIpt",
					"prefix-icon": s(pe)
				}, null, 8, ["modelValue", "prefix-icon"]), e("div", it, [e("div", dt, [n(V, {
					placement: "bottom"
				}, {
					dropdown: r(() => [n(B, null, {
						default: r(() => [n(l, {
							class: "item",
							onClick: a[4] || (a[4] = w => _(s(h).Newest))
						}, {
							default: r(() => a[13] || (a[13] = [C("Newest")])),
							_: 1,
							__: [13]
						}), n(l, {
							class: "item",
							onClick: a[5] || (a[5] = w => _(s(h).Volume24))
						}, {
							default: r(() => a[14] || (a[14] = [C("24H Vol")])),
							_: 1,
							__: [14]
						}), n(l, {
							class: "item",
							onClick: a[6] || (a[6] = w => _(s(h).MC))
						}, {
							default: r(() => a[15] || (a[15] = [C("MC")])),
							_: 1,
							__: [15]
						})]),
						_: 1
					})]),
					default: r(() => [e("div", pt, [e("div", ut, [n(i, {
						class: "icon"
					}, {
						default: r(() => [n(s(ue))]),
						_: 1
					}), L.value === s(h).Newest ? (d(), f("span", ct, "Newest")) : L.value === s(h).Volume24 ? (d(), f("span", mt, "24H Vol")) : L.value === s(h).MC ? (d(), f("span", _t, "MC")) : S("", !0)]), n(i, {
						class: "el-icon--right"
					}, {
						default: r(() => [n(s(z))]),
						_: 1
					})])]),
					_: 1
				})]), e("div", ft, [n(V, {
					placement: "bottom"
				}, {
					dropdown: r(() => [n(B, null, {
						default: r(() => [n(l, {
							class: "item",
							onClick: a[7] || (a[7] = w => y(s($).All))
						}, {
							default: r(() => a[16] || (a[16] = [C("All")])),
							_: 1,
							__: [16]
						}), n(l, {
							class: "item",
							onClick: a[8] || (a[8] = w => y(s($).Minting))
						}, {
							default: r(() => a[17] || (a[17] = [C("Minting")])),
							_: 1,
							__: [17]
						}), n(l, {
							class: "item",
							onClick: a[9] || (a[9] = w => y(s($).Launched))
						}, {
							default: r(() => a[18] || (a[18] = [C("Launched")])),
							_: 1,
							__: [18]
						})]),
						_: 1
					})]),
					default: r(() => [e("div", vt, [e("div", kt, [n(i, {
						class: "icon"
					}, {
						default: r(() => [n(s(ce))]),
						_: 1
					}), s(j) === s($).All ? (d(), f("span", $t, "All")) : s(j) === s($).Minting ? (d(), f("span", jt, "Minting")) : s(j) === s($).Launched ? (d(), f("span", gt, "Launched")) : S("", !0)]), n(i, {
						class: "el-icon--right"
					}, {
						default: r(() => [n(s(z))]),
						_: 1
					})])]),
					_: 1
				})]), e("div", {
					class: "sortSelect refresh",
					onClick: o
				}, [n(i, {
					class: W(["refreshIcon", {
						ani: s(D)
					}])
				}, {
					default: r(() => [n(s(me))]),
					_: 1
				}, 8, ["class"])])])]), e("div", Ct, [(d(!0), f(x, null, re(u.projectsData.filterList, (w, U) => (d(), P(nt, {
					projectData: w,
					key: U
				}, null, 8, ["projectData"]))), 128))]), n(N, {
					more: u.projectsData.has_more,
					method: t
				}, null, 8, ["more"])])
			}
		}
	}),
	Dt = K(yt, [
		["__scopeId", "data-v-60a6677e"]
	]),
	wt = {
		class: "project"
	},
	bt = {
		class: "flexs"
	},
	ht = {
		class: "tokenName"
	},
	Pt = {
		class: "title"
	},
	St = {
		class: "flexs"
	},
	Mt = {
		class: "infos"
	},
	It = ["src"],
	Lt = {
		class: "rightInfo"
	},
	Tt = {
		class: "ca"
	},
	Ft = {
		class: "desc"
	},
	Vt = {
		class: "progressDiv2"
	},
	Nt = {
		key: 0
	},
	At = {
		key: 1
	},
	Et = {
		class: "items"
	},
	Ht = {
		class: "item"
	},
	Rt = {
		class: "item"
	},
	Bt = {
		class: "item"
	},
	Ut = {
		class: "item"
	},
	Xt = {
		class: "item"
	},
	Ot = {
		class: "item"
	},
	zt = G({
		__name: "BoardItemPc",
		props: {
			projectData: {}
		},
		setup(E) {
			const k = fe(),
				m = E,
				L = se(() => {
					var t, p;
					const o = A((t = m.projectData) == null ? void 0 : t.nft_id, (p = m.projectData) == null ? void 0 : p.init_nft_supply) * 100;
					return o > 100 ? 100 : o
				}),
				_ = o => {
					window.open(o, "_blank")
				},
				j = o => {
					var t, p;
					if (o === "CA") R(m.projectData.mint_pubkey);
					else if (o === "Link") {
						let c = window.location.origin + "/project/" + m.projectData.mint_pubkey;
						(t = k.userInfo) != null && t.refCode && (c += `?ref=${(p=k.userInfo)==null?void 0:p.refCode}`), R(c)
					} else o === "Share" && y(m.projectData)
				},
				y = o => {
					var u;
					const t = (u = k.userInfo) != null && u.refCode ? `?ref=${k.userInfo.refCode}` : "",
						p = `
	🚀 Just discovered an amazing fair-launch project on Solana!
	🎮 Project: ${o.project_name} (${o.token_symbol})
	💎 NFTs Minted: ${o.nft_issue_count} 
	🔥 Market Cap: ${o.market_cap.toFixed(2)} SOL
	🧠 Powered by PPP — Protocol Pump Player
	👉 Join now: https://ppp.fun/project/${o.mint_pubkey}${t}
	#PPP #Solana #FairLaunch #NFTGaming
	`,
						c = encodeURIComponent(p);
					window.open(`https://x.com/intent/tweet?text=${c}`, 'target="_blank"')
				},
				b = ee(),
				D = () => {
					var o;
					b.push({
						name: "boardDetailPage",
						params: {
							id: (o = m.projectData) == null ? void 0 : o.mint_pubkey
						}
					})
				};
			return (o, t) => {
				var M, T;
				const p = q,
					c = Y,
					u = Q,
					a = Z;
				return o.projectData ? (d(), f("div", {
					key: 0,
					class: W(["boardItem", {
						hot: o.projectData.nft_id >= o.projectData.init_nft_supply
					}]),
					onClick: D
				}, [e("div", wt, [e("div", bt, [e("div", ht, v(o.projectData.token_symbol || "-"), 1), e("div", Pt, v(o.projectData.project_name || "-"), 1)]), e("div", St, [o.projectData.twitter ? (d(), P(H, {
					key: 0,
					name: "X",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[0] || (t[0] = I(i => _(o.projectData.twitter), ["stop"]))
				})) : S("", !0), o.projectData.telegram ? (d(), P(H, {
					key: 1,
					name: "telegram",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[1] || (t[1] = I(i => _(o.projectData.telegram), ["stop"]))
				})) : S("", !0), o.projectData.discord ? (d(), P(H, {
					key: 2,
					name: "discord",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[2] || (t[2] = I(i => _(o.projectData.discord), ["stop"]))
				})) : S("", !0), o.projectData.website ? (d(), P(H, {
					key: 3,
					name: "website",
					class: "creater",
					color: "var(--hovercolor)",
					onClick: t[3] || (t[3] = I(i => _(o.projectData.website), ["stop"]))
				})) : S("", !0)])]), e("div", Mt, [e("img", {
					src: s(ve)(((M = o.projectData) == null ? void 0 : M.nft_image_url) || ""),
					class: "nftImg"
				}, null, 8, It), e("div", Lt, [e("div", null, [e("div", Tt, [e("span", null, "CA: " + v(s(ke)(o.projectData.mint_pubkey || "-")), 1), n(p, {
					class: "icon copy",
					onClick: t[4] || (t[4] = I(i => s(R)(o.projectData.mint_pubkey || ""), ["stop"]))
				}, {
					default: r(() => [n(s(O))]),
					_: 1
				}), n(a, {
					"popper-class": "mypopperShare",
					placement: "top"
				}, {
					dropdown: r(() => [n(u, null, {
						default: r(() => [n(c, {
							class: "item",
							onClick: t[6] || (t[6] = i => j("Share"))
						}, {
							default: r(() => [n(H, {
								name: "X",
								class: "iconShare",
								color: "var(--xcolor)"
							}), t[9] || (t[9] = e("span", {
								class: "labelShare"
							}, "Share on X", -1))]),
							_: 1,
							__: [9]
						}), n(c, {
							class: "item",
							onClick: t[7] || (t[7] = i => j("Link"))
						}, {
							default: r(() => [n(p, {
								class: "iconShare"
							}, {
								default: r(() => [n(s(ae))]),
								_: 1
							}), t[10] || (t[10] = e("span", {
								class: "labelShare"
							}, "Copy link", -1))]),
							_: 1,
							__: [10]
						}), n(c, {
							class: "item",
							onClick: t[8] || (t[8] = i => j("CA"))
						}, {
							default: r(() => [n(p, {
								class: "iconShare"
							}, {
								default: r(() => [n(s(O))]),
								_: 1
							}), t[11] || (t[11] = e("span", {
								class: "labelShare"
							}, "Copy CA", -1))]),
							_: 1,
							__: [11]
						})]),
						_: 1
					})]),
					default: r(() => [n(p, {
						onClick: t[5] || (t[5] = I(() => {}, ["stop"])),
						class: "icon copy"
					}, {
						default: r(() => [n(s(ne))]),
						_: 1
					})]),
					_: 1
				})]), e("div", Ft, v(o.projectData.project_desc || ""), 1)]), e("div", Vt, [s(L) < 100 ? (d(), f("div", Nt, [n(ge, {
					projectData: o.projectData,
					mintRate: s(L)
				}, null, 8, ["projectData", "mintRate"])])) : (d(), f("div", At, [n(Ce, {
					projectData: o.projectData
				}, null, 8, ["projectData"])]))])])]), e("div", Et, [e("div", Ht, [t[13] || (t[13] = e("span", {
					class: "label"
				}, "MC:", -1)), e("span", null, [t[12] || (t[12] = e("img", {
					src: J,
					class: "coin"
				}, null, -1)), e("span", null, v(s($e)(((T = o.projectData) == null ? void 0 : T.market_cap) || 0, 2)), 1)])]), e("div", Rt, [t[15] || (t[15] = e("span", {
					class: "label"
				}, "VOL(24H):", -1)), e("span", null, [t[14] || (t[14] = e("img", {
					src: J,
					class: "coin"
				}, null, -1)), e("span", null, v(Number(s(A)(o.projectData.volume_24h || 0, 10 ** 9).toFixed(2)) || "0"), 1)])]), e("div", Bt, [t[16] || (t[16] = e("span", {
					class: "label"
				}, "TXS(24H):", -1)), e("span", null, v(o.projectData.tx_24h || "-"), 1)]), e("div", Ut, [t[17] || (t[17] = e("span", {
					class: "label"
				}, "Period:", -1)), e("span", null, v(s(je)(o.projectData.sec_per_round) || "-"), 1)]), e("div", Xt, [t[18] || (t[18] = e("span", {
					class: "label"
				}, "Increment:", -1)), e("span", null, v(s(A)(o.projectData.increase_per_round || 0, 100)) + "%", 1)]), e("div", Ot, [t[19] || (t[19] = e("span", {
					class: "label"
				}, "Fee:", -1)), e("span", null, v(s(A)(o.projectData.trade_fee_rate || 0, 100)) + "%", 1)])])], 2)) : S("", !0)
			}
		}
	}),
	Jt = K(zt, [
		["__scopeId", "data-v-6534a610"]
	]),
	Gt = {
		key: 0
	},
	Wt = {
		class: "homeTip"
	},
	qt = {
		class: "topTools"
	},
	Kt = {
		class: "filters"
	},
	Qt = {
		class: "filter"
	},
	Yt = {
		key: 0
	},
	Zt = {
		key: 1
	},
	xt = {
		key: 2
	},
	eo = {
		class: "filter"
	},
	to = {
		key: 0
	},
	oo = {
		key: 1
	},
	so = {
		key: 2
	},
	no = {
		key: 3
	},
	ao = {
		class: "rightTools"
	},
	lo = {
		ref: "LoadMoreEle",
		class: "loadMore"
	},
	ro = G({
		__name: "Index",
		setup(E) {
			const k = F(!1),
				m = () => {
					k.value = !0
				},
				L = F(!1),
				_ = F($.All),
				j = i => {
					_.value = i, L.value = !1, T()
				},
				y = F(h.Volume24),
				b = i => {
					y.value = i, o()
				},
				D = F("");
			le(D, () => {
				t()
			});
			const o = async () => {
				a.page = 1, a.has_more = !0, await M()
			}, t = Ne(o, 500), p = i => {
				D.value = i
			}, c = F(!1), u = async () => {
				c.value || (c.value = !0, a.page = 1, a.has_more = !0, await M(), setTimeout(() => {
					c.value = !1
				}, 1e3))
			}, a = Me({
				list: [],
				filterList: [],
				total: 0,
				page: 1,
				limit: 20,
				total_pages: 1,
				has_more: !0,
				loading: !1
			}), M = async () => {
				if (!(a.loading || !a.has_more)) {
					a.loading = !0, a.page === 1 && (a.list = [], a.filterList = []);
					try {
						const i = {
								limit: a.limit,
								page: a.page,
								keyword: D.value,
								sort: y.value
							},
							l = await He(i);
						a.list.push(...l.data), a.total = l.meta.total, a.page = ++l.meta.page, a.limit = l.meta.limit, a.total_pages = l.meta.total_pages, a.has_more = l.meta.has_more, a.loading = !1, T()
					} catch (i) {
						console.error(i)
					}
				}
			}, T = () => {
				if (_.value === $.All) {
					a.filterList = [...a.list];
					return
				}
				if (_.value === $.Minting) {
					a.filterList = a.list.filter(i => i.nft_issue_count < i.init_nft_supply);
					return
				}
				if (_.value === $.Launched) {
					a.filterList = a.list.filter(i => i.nft_issue_count >= i.init_nft_supply);
					return
				}
			};
			return oe.$on("updateProjects", u), Ie(() => {
				oe.$off("updateProjects")
			}), (i, l) => {
				const B = ie,
					V = q,
					N = Y,
					w = Q,
					U = Z,
					ye = de,
					De = Ve,
					we = Fe,
					be = _e,
					he = Te;
				return d(), f(x, null, [s(Ae) ? (d(), P(Dt, {
					key: 1,
					projectsData: s(a),
					modelValue: s(y),
					"onUpdate:modelValue": l[10] || (l[10] = g => X(y) ? y.value = g : null),
					onRefresh: u,
					onLoadMore: M,
					onSearchChange: p,
					onChangeSort: b,
					onChangeFilter: j,
					onChangeShowHow: m
				}, null, 8, ["projectsData", "modelValue"])) : (d(), f("div", Gt, [e("div", Wt, [e("div", null, [l[13] || (l[13] = e("div", {
					class: "title"
				}, "The First PPP (Protocol Pump Player)", -1)), l[14] || (l[14] = e("div", {
					class: "title"
				}, "Fair Launch Platform", -1)), e("div", {
					class: "tip",
					onClick: l[0] || (l[0] = g => k.value = !0)
				}, "How it works?")]), e("div", null, [n(B, {
					type: "primary",
					class: "launch",
					onClick: l[1] || (l[1] = g => i.$router.push({
						name: "boardCreatePage"
					}))
				}, {
					default: r(() => l[15] || (l[15] = [C("Launch")])),
					_: 1,
					__: [15]
				})])]), e("div", qt, [e("div", Kt, [n(U, {
					"popper-class": "mypopper",
					placement: "bottom"
				}, {
					dropdown: r(() => [n(w, null, {
						default: r(() => [n(N, {
							class: "item",
							onClick: l[2] || (l[2] = g => b(s(h).Newest))
						}, {
							default: r(() => l[16] || (l[16] = [C("Newest")])),
							_: 1,
							__: [16]
						}), n(N, {
							class: "item",
							onClick: l[3] || (l[3] = g => b(s(h).Volume24))
						}, {
							default: r(() => l[17] || (l[17] = [C("24H Vol")])),
							_: 1,
							__: [17]
						}), n(N, {
							class: "item",
							onClick: l[4] || (l[4] = g => b(s(h).MC))
						}, {
							default: r(() => l[18] || (l[18] = [C("MC")])),
							_: 1,
							__: [18]
						})]),
						_: 1
					})]),
					default: r(() => [e("div", Qt, [n(V, {
						class: "icon"
					}, {
						default: r(() => [n(s(ue))]),
						_: 1
					}), s(y) === s(h).Newest ? (d(), f("span", Yt, "Newest")) : s(y) === s(h).Volume24 ? (d(), f("span", Zt, "24H Vol")) : s(y) === s(h).MC ? (d(), f("span", xt, "MC")) : S("", !0), n(V, {
						class: "icon"
					}, {
						default: r(() => [n(s(z))]),
						_: 1
					})])]),
					_: 1
				}), n(U, {
					"popper-class": "mypopper",
					placement: "bottom"
				}, {
					dropdown: r(() => [n(w, null, {
						default: r(() => [n(N, {
							class: "item",
							onClick: l[5] || (l[5] = g => j(s($).All))
						}, {
							default: r(() => l[19] || (l[19] = [C("All")])),
							_: 1,
							__: [19]
						}), n(N, {
							class: "item",
							onClick: l[6] || (l[6] = g => j(s($).Minting))
						}, {
							default: r(() => l[20] || (l[20] = [C("Minting")])),
							_: 1,
							__: [20]
						}), n(N, {
							class: "item",
							onClick: l[7] || (l[7] = g => j(s($).Launched))
						}, {
							default: r(() => l[21] || (l[21] = [C("Launched")])),
							_: 1,
							__: [21]
						})]),
						_: 1
					})]),
					default: r(() => [e("div", eo, [n(V, {
						class: "icon"
					}, {
						default: r(() => [n(s(ce))]),
						_: 1
					}), s(_) === s($).All ? (d(), f("span", to, "All")) : s(_) === s($).Minting ? (d(), f("span", oo, "Minting")) : s(_) === s($).Launched ? (d(), f("span", so, "Launched")) : s(_) === s($).Favorite ? (d(), f("span", no, "Favorite")) : S("", !0), n(V, {
						class: "icon"
					}, {
						default: r(() => [n(s(z))]),
						_: 1
					})])]),
					_: 1
				}), n(ye, {
					modelValue: s(D),
					"onUpdate:modelValue": l[8] || (l[8] = g => X(D) ? D.value = g : null),
					placeholder: "Name / Symbol / CA",
					class: "searchIpt",
					"prefix-icon": s(pe)
				}, null, 8, ["modelValue", "prefix-icon"])]), e("div", ao, [e("div", {
					class: "icon",
					onClick: u
				}, [n(V, {
					class: W(["refreshIcon", {
						ani: s(c)
					}])
				}, {
					default: r(() => [n(s(me))]),
					_: 1
				}, 8, ["class"])]), n(B, {
					type: "primary",
					class: "btn",
					icon: s(Le),
					onClick: l[9] || (l[9] = g => i.$router.push({
						name: "boardMyNftsPage"
					}))
				}, {
					default: r(() => l[22] || (l[22] = [C("My NFT")])),
					_: 1,
					__: [22]
				}, 8, ["icon"])])]), n(we, {
					gutter: 15
				}, {
					default: r(() => [(d(!0), f(x, null, re(s(a).filterList, (g, Pe) => (d(), P(De, {
						md: 12,
						lg: 8,
						class: "col",
						key: Pe
					}, {
						default: r(() => [n(Jt, {
							projectData: g
						}, null, 8, ["projectData"])]),
						_: 2
					}, 1024))), 128))]),
					_: 1
				}), e("div", lo, null, 512), n(be, {
					more: s(a).has_more,
					method: M
				}, null, 8, ["more"])])), n(he, {
					modelValue: s(k),
					"onUpdate:modelValue": l[12] || (l[12] = g => X(k) ? k.value = g : null),
					width: "800",
					center: "",
					"append-to": ".app"
				}, {
					default: r(() => [n(Re, {
						style: {
							"max-height": "75vh",
							overflow: "auto"
						},
						onListenClose: l[11] || (l[11] = g => k.value = !1)
					})]),
					_: 1
				}, 8, ["modelValue"])], 64)
			}
		}
	}),
	Io = K(ro, [
		["__scopeId", "data-v-668d999c"]
	]);
export {
	Io as
	default
};
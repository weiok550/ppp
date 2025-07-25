import {
    d as m,
    c as N,
    b as f,
    k as c,
    l as p,
    p as g,
    t as n,
    e as i,
    o as D,
    B as h,
    h as b
} from "./index-DejQ-iz-.js";
import {
    E as j
} from "./el-progress-CQCGwsfG.js";
import {
    b as v
} from "./index-Brp1LNR4.js";
import {
    _ as P
} from "./CountDown-Dz7lloNh.js";
const w = {
        class: "progressDiv"
    },
    M = {
        class: "tip"
    },
    k = m({
        __name: "MintProgress",
        props: {
            projectData: {
                type: Object,
                default: {}
            },
            mintRate: {
                type: Number,
                default: 0
            }
        },
        setup(s) {
            const o = s,
                a = N(() => {
                    if (o.mintRate) return o.mintRate;
                    const t = v(o.projectData.nft_id, o.projectData.init_nft_supply) * 100;
                    return t > 100 ? 100 : t
                });
            return (t, _) => {
                const e = j;
                return D(), f("div", w, [c("div", null, [g(" Minting Progress: " + n(Number(i(a).toFixed(2))) + "% ", 1), c("span", M, "(" + n(s.projectData.nft_id) + "/" + n(s.projectData.init_nft_supply) + ")", 1)]), p(e, {
                    class: "progressBar",
                    "text-inside": !1,
                    "stroke-width": 6,
                    percentage: i(a),
                    "show-text": !1
                }, null, 8, ["percentage"])])
            }
        }
    }),
    I = h(k, [
        ["__scopeId", "data-v-03935ea2"]
    ]),
    y = {
        class: "progressDiv"
    },
    B = {
        class: "label"
    },
    T = m({
        __name: "NextRoundProgress",
        props: {
            projectData: {}
        },
        emits: ["updateProjectData"],
        setup(s, {
            emit: o
        }) {
            const a = s,
                t = b(0),
                _ = e => {
                    if (a.projectData)
                        if (e > 0) {
                            const r = Math.max(0, (1 - v(e, a.projectData.sec_per_round * 1e3)) * 100);
                            t.value = r > 100 ? 100 : r
                        } else t.value = 100
                };
            return (e, r) => {
                var d, l, u;
                const x = P,
                    R = j;
                return D(), f("div", y, [c("div", B, [g(" Round#" + n((d = e.projectData) == null ? void 0 : d.round) + "： ", 1), p(x, {
                    endTime: (((l = e.projectData) == null ? void 0 : l.last_round) || 0) * 1e3 + (((u = e.projectData) == null ? void 0 : u.sec_per_round) || 0) * 1e3,
                    onChangeTime: _
                }, null, 8, ["endTime"])]), p(R, {
                    "show-text": !1,
                    percentage: i(t),
                    "stroke-width": 6,
                    striped: "",
                    "striped-flow": "",
                    duration: 10
                }, null, 8, ["percentage"])])
            }
        }
    }),
    F = h(T, [
        ["__scopeId", "data-v-cee7cb38"]
    ]);
export {
    I as M, F as N
};
import {
    d as l,
    c as n,
    b as i,
    a5 as p,
    e as o,
    k as u,
    o as _,
    B as m
} from "./index-DejQ-iz-.js";
const f = ["xlink:href", "fill"],
    d = l({
        __name: "SvgIcon",
        props: {
            name: {
                type: String,
                required: !0
            },
            color: {
                type: String,
                default: "#FFF"
            }
        },
        setup(r) {
            const e = r,
                t = n(() => `#icon-${e.name}`),
                s = n(() => e.color ? e.color : "#FFF"),
                c = n(() => e.name ? `svg-icon icon-${e.name}` : "svg-icon");
            return (a, g) => (_(), i("svg", p({
                class: o(c)
            }, a.$attrs, {
                style: {
                    color: o(s)
                }
            }), [u("use", {
                "xlink:href": o(t),
                fill: o(s)
            }, null, 8, f)], 16))
        }
    }),
    F = m(d, [
        ["__scopeId", "data-v-70d4bb89"]
    ]);
export {
    F as _
};
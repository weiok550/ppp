import {
    h as i
} from "./index-DejQ-iz-.js";

function e() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
const o = i(e());
window.onresize = () => {
    setTimeout(() => {
        o.value = e()
    }, 100)
};
export {
    o as c
};
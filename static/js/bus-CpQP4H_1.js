var n = Object.defineProperty;
var v = (e, t, s) => t in e ? n(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : e[t] = s;
var i = (e, t, s) => v(e, typeof t != "symbol" ? t + "" : t, s);
class L {
    constructor() {
        i(this, "eventList");
        this.eventList = {}
    }
    $on(t, s) {
        this.eventList[t] = this.eventList[t] || [], this.eventList[t].push(s)
    }
    $emit(t, s) {
        this.eventList[t] && this.eventList[t].forEach(h => {
            h(s)
        })
    }
    $off(t) {
        this.eventList[t] && delete this.eventList[t]
    }
}
const c = new L;
export {
    c as b
};
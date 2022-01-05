function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

class Result {
    constructor(pref, suf, res) {
        this.pref = pref;
        this.suf = suf;
        this.res = res;
    }
}

function calc(s) {
    sum = s.split('+');
    if (sum.length == 1) {
        t = s.split("d");
        if (t.length != 1) {
            v = parseInt(t[0]);
            d = parseInt(t[1]);
            res = new Result("[" + s + "]", "[", 0)
            for (var i = 0; i < v; ++i) {
                num = getRandomInt(d);
                if (i != 0) {
                    res.suf += ", ";
                }
                res.suf += num;
                res.res += num;
            }
            res.suf += "]";
            return res;
        }
        else {
            return new Result(s, s, parseInt(s));
        }
    }
    else {
        sum = sum.map(t => calc(t))
        sum = sum.reverse()
        res = sum.pop()
        sum = sum.reverse()
        sum.forEach(t => {
            res.pref += "+" + t.pref
            res.suf += "+" + t.suf
            res.res += t.res
        })
        return res
    }
}

function roll(s) {
    res = calc(s)
    return res.pref + " = " + res.suf + " = " + res.res;
}

module.exports = {
    roll
};
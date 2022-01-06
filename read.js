function read(id, skill) {
    const pers = require("./data/" + id);
    ЭМП = pers.ЭМП[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
    console.log(pers.ЭМП);
    console.log(ЭМП);
    if (ЭМП != undefined) {
        return ["1d10+ЭМП+" + skill, "1d10+" + pers.ЭМП[0] + "+" + ЭМП[1]];
    }
    return "err";
}

module.exports = {
    read
}
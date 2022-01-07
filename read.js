var request = require("request-promise")

pers = {}

headers = {}
headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'

async function getByUrl(url) {
    await request({
        url: url,
        headers: headers
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
        }
        console.log(error + ": " + JSON.stringify(response) + ": " + body)
        pers = JSON.parse(body)
    })
}

async function read(id, skill) {

    var url = "http://r91753y1.beget.tech/data/" + id + ".json"

    await getByUrl(url)

    {
        ИНТ = pers.ИНТ[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.ИНТ);
        console.log(ИНТ);
        if (ИНТ != undefined) {
            return ["1d10+ИНТ+" + skill, "1d10+" + pers.ИНТ[0] + "+" + ИНТ[1]];
        }
    }
    {
        РЕФ = pers.РЕФ[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.РЕФ);
        console.log(РЕФ);
        if (РЕФ != undefined) {
            return ["1d10+РЕФ+" + skill, "1d10+" + pers.РЕФ[0] + "+" + РЕФ[1]];
        }
    }
    {
        КРУ = pers.КРУ[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.КРУ);
        console.log(КРУ);
        if (КРУ != undefined) {
            return ["1d10+ЭМП+" + skill, "1d10+" + pers.КРУ[0] + "+" + КРУ[1]];
        }
    }
    {
        ТЕХ = pers.ТЕХ[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.ТЕХ);
        console.log(ТЕХ);
        if (ТЕХ != undefined) {
            return ["1d10+ТЕХ+" + skill, "1d10+" + pers.ТЕХ[0] + "+" + ТЕХ[1]];
        }
    }
    {
        ПРИ = pers.ПРИ[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.ПРИ);
        console.log(ПРИ);
        if (ПРИ != undefined) {
            return ["1d10+ПРИ+" + skill, "1d10+" + pers.ПРИ[0] + "+" + ПРИ[1]];
        }
    }
    {
        ЭМП = pers.ЭМП[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.ЭМП);
        console.log(ЭМП);
        if (ЭМП != undefined) {
            return ["1d10+ЭМП+" + skill, "1d10+" + pers.ЭМП[0] + "+" + ЭМП[1]];
        }
    }
    {
        ТЕЛ = pers.ТЕЛ[1].find((element) => { return element[0].toLowerCase() === skill.toLowerCase() });
        console.log(pers.ТЕЛ);
        console.log(ТЕЛ);
        if (ТЕЛ != undefined) {
            return ["1d10+ТЕЛ+" + skill, "1d10+" + pers.ТЕЛ[0] + "+" + ТЕЛ[1]];
        }
    }
    return "err";
}

module.exports = {
    read
}
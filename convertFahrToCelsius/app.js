function convertFahrToCelsius(convertNow) {
    if (typeof convertNow === 'number') {
        const celsius = ((convertNow - 32) / 1.8).toFixed(4);
        // .toFixed() reduces the length of the decimal number ... 
        return console.log("`" + `${celsius}` + "`");
    }

    else if (typeof convertNow === "string" && typeof parseInt(convertNow, 10) == "number") {
        const numCon = parseInt(convertNow, 10);
        // to parse the string to a number... 10 is just the radix
        const celsius = ((numCon - 32) / 1.8).toFixed(4);
        return console.log("`" + `${celsius}` + "`");
    }

    else {
        const theOutput = JSON.stringify(convertNow);
        // To avoid value parsing... for instance console.log({temp:0}) would have returned [object object]
        return console.log("`" + `${theOutput} is not a valid number but a/an ${typeof convertNow}'s type` + "`");
    }
}

convertFahrToCelsius(2); // `2 degree fahrenheit is equal to -16.6667 degree celsius...`
convertFahrToCelsius("6"); // `6 degree fahrenheit is equal to -14.4444 degree celsius...`
convertFahrToCelsius([1, 2, 4]); // `[1,2,4] is not a valid number but a/an object's type`
convertFahrToCelsius({ temp: 0 }); // `{"temp":0} is not a valid number but a/an object's type`
convertFahrToCelsius(true); // `true is not a valid number but a/an boolean's type`
convertFahrToCelsius(null); // `null is not a valid number but a/an object's type`




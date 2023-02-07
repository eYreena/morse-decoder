const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    let spaces = expr.match(/.{1,10}/g) ?? [];
    let cutSymbols = spaces.map((symbol) => {
        const number = parseInt(symbol);
        const string = number.toString();
        const twoNum = [];

        for (let i = 0; i < string.length; i += 2) {
            twoNum.push(string[i] + string[i + 1]);
        }

        const morseEncodedChars = twoNum
            .map((el) => {
                if (el === "10") {
                    return ".";
                } else if (el === "11") {
                    return "-";
                }
            })
            .join("");

        return MORSE_TABLE[morseEncodedChars];
    });

    return cutSymbols
        .map((element) => {
            if (element === undefined) {
                return " ";
            } else {
                return element;
            }
        })
        .join("");
}

module.exports = {
    decode,
};

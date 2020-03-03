const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayAll = expr.match(/.{1,10}/g)
    let arrayEl = []
    let letter = '';
    let word = '';
    for (let element of arrayAll){
        if (element == "**********") word = word + " ";
        else {arrayEl = element.match(/.{1,2}/g)
            for (let element of arrayEl){
                if(element == 00) letter = letter + ''
                else if (element == 10) letter = letter + '.'
                else if (element == 11) letter = letter + '-'
            }
            word = word + MORSE_TABLE[letter];
        }
        letter = ''
    }
    return(word);
}
module.exports = {
    decode
}

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
const BINARY = {
    '10' : '.',
    '11' : '-',
    '00' : ''
};

function decode(expr) {
    let arWords = expr.split('**********');
    let strDecode = '',
        symMorse = '';

    arWords.forEach(function(item, index){
        symMorse = '';
        for (let i = 0; i <= item.length; i +=2 ) {
            if (i && !(i % 10)) {
                strDecode += MORSE_TABLE[symMorse];
                symMorse = '';
            }
            symMorse += BINARY[item.substr(i, 2)];
        }

        strDecode += (index !== arWords.length - 1) ? ' ' : '';
    });
    return strDecode;
}

module.exports = {
    decode
}
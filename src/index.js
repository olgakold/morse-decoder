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
    var letters = []
    for (let i=0; i<expr.length; i = i +10){
      letters.push(expr.slice(i, i+10))
    }
    for (let i=0; i<letters.length; i++){
      for (let j=0; j<6; j++){
        letters[i] = letters[i].replace('00','').replace('10','.').replace('11',('-'));
      }
    }
    
    var words = ''
    for (let i=0; i<letters.length; i++){
      letters[i] === '**********' ? words = words + ' ' : words = words + MORSE_TABLE[letters[i]]
    }
    return words
}

module.exports = {
    decode
}

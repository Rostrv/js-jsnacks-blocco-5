/*Scrivi una funzione che accetti una stringa
 come argomento e la ritorni girata (es. Ciao -> oaiC)*/

/* const reverseString = (stringa) => {
    let newString = '';
    for (let i = stringa.length - 1; i >= 0; i--) {
        newString += stringa[i]
    }
    return newString
}

console.log(reverseString('ciao')) */

function Reverse(stringa) {
    return stringa.split('').reverse().join('')
}

console.log(Reverse('ciao'));
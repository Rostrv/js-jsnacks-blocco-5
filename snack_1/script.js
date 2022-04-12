/* Crea un array di 10 oggetti che rappresentano una zucchina,
 indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
 */

const zucchine = [{
        varieta: 'faenza',
        pesoGrammi: 350,
        lunghezzaCm: 14
    },
    {
        varieta: 'faenza',
        pesoGrammi: 341,
        lunghezzaCm: 28
    },
    {
        varieta: 'faenza',
        pesoGrammi: 350,
        lunghezzaCm: 31
    },
    {
        varieta: 'faenza',
        pesoGrammi: 374,
        lunghezzaCm: 38
    },
    {
        varieta: 'faenza',
        pesoGrammi: 310,
        lunghezzaCm: 23
    },
    {
        varieta: 'faenza',
        pesoGrammi: 362,
        lunghezzaCm: 33
    },
    {
        varieta: 'faenza',
        pesoGrammi: 320,
        lunghezzaCm: 38
    },
    {
        varieta: 'faenza',
        pesoGrammi: 333,
        lunghezzaCm: 37
    },
    {
        varieta: 'faenza',
        pesoGrammi: 374,
        lunghezzaCm: 42
    },
    {
        varieta: 'faenza',
        pesoGrammi: 373,
        lunghezzaCm: 49
    }
]

let sum = 0

zucchine.forEach((zucchina) => {
    let peso = zucchina.pesoGrammi
    sum += peso
    console.log(zucchina.pesoGrammi)

});
console.log(sum)
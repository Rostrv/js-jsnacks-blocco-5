/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [{
        varieta: 'faenza',
        pesoGrammi: 100,
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
        pesoGrammi: 200,
        lunghezzaCm: 13
    },
    {
        varieta: 'faenza',
        pesoGrammi: 320,
        lunghezzaCm: 38
    },
    {
        varieta: 'faenza',
        pesoGrammi: 90,
        lunghezzaCm: 8
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

let piccole = zucchine.filter((zucchina) => zucchina.lunghezzaCm < 15)
console.log(piccole)

let peso_piccole = 0

piccole.forEach((zucchina) => {
    let peso = zucchina.pesoGrammi
    peso_piccole += peso


});
console.log(peso_piccole)

let grandi = zucchine.filter((zucchina) => zucchina.lunghezzaCm > 15)
console.log(grandi)

let peso_grandi = 0

grandi.forEach((zucchina) => {
    let peso = zucchina.pesoGrammi
    peso_grandi += peso


});
console.log(peso_grandi)
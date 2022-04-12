/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
const both = [];


function fusion() {

    letters.forEach((element, index) => {
        both.push(element)
        both.push(numbers[index])
    })
    return both
}
console.log(fusion())
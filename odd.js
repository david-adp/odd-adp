/**
 * Test cases - different edge ones
 */
// let mixed = [1];
// let mixed = [];
// let mixed = [2,4,6,8,0];
let mixed = [1,2,3,4,5,6,7,8,9,0];
/**
 * 
 * @param {array} mixed 
 * return only odd numbers
 */
function odd(mixed) {
    let odd = [];
    mixed.map((e) => { if ((e % 2) !== 0) odd.push(e); }  );
    return odd;
}
console.log(odd(mixed));
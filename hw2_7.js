'use strict';

//7. Сравнить null и 0. Попробуйте объяснить результат.

let m = 0;

console.log(null == m) //false
console.log(null === m) //false

console.log(typeof (null)) // object
console.log(typeof (m)) //number

/* null - это объект в js, который указывает на отсутствие объекта.
Тогда как 0 - является числовым значением.
*/

import myCounter from './counter.mjs';

myCounter += 1;
//TypeError: Assignment to constant variable.
//因為 module import 進來的變數是唯讀的

console.log(myCounter);
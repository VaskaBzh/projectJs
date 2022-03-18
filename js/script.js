let num = "266219";
let mas = 1;


num.toString().split('').forEach(elem => mas *= elem);
console.log('mas: ', mas);

let stn = mas ** 3;
console.log(stn);
console.log(stn.toString().substring(0,2));
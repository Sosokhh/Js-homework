const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

console.log(numbers.filter(a => a!==0).map(a => a>0 ? a : a=a*(-1)).reduce((a,i) => a*i,1))
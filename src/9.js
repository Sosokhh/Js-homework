const numbers = [2, 5, 3, 6, 23, 745, 14, 347, 856, 252];

console.log(numbers.reduce((m,n) => m > n ? m : n, 0));
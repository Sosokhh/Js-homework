const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers.filter(a => a%2===1).map(a => a=a*a).forEach(i => console.log(i));

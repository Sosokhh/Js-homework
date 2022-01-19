const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

console.log(text.split(' ').map(a => a[0]).join('').toUpperCase());
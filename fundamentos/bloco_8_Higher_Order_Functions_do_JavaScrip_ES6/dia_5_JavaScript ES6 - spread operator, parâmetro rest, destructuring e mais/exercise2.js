const sum = (...args) => args.reduce((acc, arg) => acc += arg, 0);
console.log(sum(2, 3, 4, 5, 6, 7, 8, 9, 10));
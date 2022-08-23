
// this function is too slow 
//for higher fibinaci numbers
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

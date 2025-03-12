function fibs(n){
    if(n <=0){
        return [];
    }
    if(n == 1){
        return [0];
    }
    let fibo = [0, 1];
    for(let i = 2; i < n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibs(10));

function fibsRecursion(n, fibs = [0, 1]){
    if(n <= 0){
        return [];
    }
    if(n == 1){
        return [0];
    }
    if(fibs.length >= n){
        return fibs;
    }
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibsRecursion(n, fib);
}
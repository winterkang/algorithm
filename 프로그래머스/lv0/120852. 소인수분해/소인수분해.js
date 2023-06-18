function solution(n) {
    let primes = new Array(n + 1).fill(true)
    
    primes[0] = false
    primes[1] = false
    // console.log(primes)
    for (let i = 2; i <= Math.sqrt(n); i++){ 
        // console.log(i)
        if (primes[i]){
            for(let j = i * i; j <= n; j += i){
                primes[j] = false
            }
        }
    }
    let result = []
    for (let i = 2; i <= n; i++){
        if (primes[i] && (n % i === 0)){
            result.push(i)
        }
    }
    return result;
}
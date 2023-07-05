function solution(numer1, denom1, numer2, denom2) {
    let denom = (denom1 * denom2)
    let numer = (numer1 * denom2) + (numer2 * denom1)
    const result = [numer, denom]
    while(numer !== 0){
        const remainder = denom % numer
        denom = numer
        numer = remainder
    }
    const filtering = result.map(item => item / denom)
    return filtering
}
function solution(array, n) {
    let count = 0
    for(a of array){
        if (a === n){
            count += 1
        }
    }
    return count;
}
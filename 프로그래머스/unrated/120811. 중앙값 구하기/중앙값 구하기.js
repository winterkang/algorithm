function solution(array) {
    var answer = 0;
    const arr = array.sort((a, b) => a - b)
    answer = Math.floor(arr.length / 2) 
    return array[answer];
}
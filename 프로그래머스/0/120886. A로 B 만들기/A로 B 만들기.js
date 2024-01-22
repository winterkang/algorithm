function solution(before, after) {
    var answer = 1;
    const sortedB = before.split('').sort()
    const sortedA = after.split('').sort()
    for (let i = 0; i < sortedB.length; i++){
        if (sortedB[i] !== sortedA[i]){
            return 0
        }else{
            answer = 1
        }
    }
    return answer;
}
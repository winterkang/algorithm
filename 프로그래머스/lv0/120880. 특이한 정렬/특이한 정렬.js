function solution(numlist, n) {
    let arr = []
    for (let i = 0; i < numlist.length; i++){
        arr.push([Math.abs(numlist[i] - n), numlist[i]])
    }
    // 각 배열의 0번 인덱스를 오름차순으로 먼저 정렬하고, 앞의 정렬이 훼손되지 않는 범위내에서 1번 인덱스를 내림차순으로 정렬
    var answer = [];
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    for (let i = 0; i < arr.length; i++){
        const [a, b] = arr[i]
        answer.push(b)
    }
    return answer;
}
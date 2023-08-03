function solution(people, limit) {
    const sorted = people.sort((a, b) => b - a) // 내림차순 정렬
    let cnt = 0 // 보트를 사용한 횟수
    // start와 end는 sorted 배열에 인덱스로 접근
    let start = 0
    let end = people.length - 1
    while(start <= end){
        if (sorted[start] + sorted[end] <= limit){ // 가장 무거운 사람과 가벼운 사람의 합이 limit을 넘지 않는 경우
            start++
            end--
        }else{
            // 가장 무거운 사람만 보트에 탐
            start++
        }
        cnt++ // 위의 조건문을 통과할 때마다 +1
    }
    return cnt;
}
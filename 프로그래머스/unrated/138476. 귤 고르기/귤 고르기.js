function solution(k, tangerine) {
    let obj = {}
    for (let i = 0; i < tangerine.length; i++){
        if (obj[tangerine[i]]){
            obj[tangerine[i]]++
        }else{
            obj[tangerine[i]] = 1
        }
    }
    // 크기가 서로 다른 종류의 수(obj)인 귤을 최소화하려면 내림차순으로 정렬(values)하여 
    // 배열(values)에서 하나씩 꺼내어 더한 값(sum)이 k보다 크면 누적 더하기를 종료
    // 배열(values)에서 하나씩 꺼내어 더할때마다 카운트 횟수(cnt)를 체크하여 반환
    
    // value값만 배열로 만들어서 내림차순으로 정렬
    const values = Object.values(obj).sort((a, b) => b - a)
    
    let sum = 0
    let cnt = 0
    while(true){
        if (k <= sum){
            break
        }else{
            sum += values[cnt]
            cnt++
        }
    }
    return cnt;
}
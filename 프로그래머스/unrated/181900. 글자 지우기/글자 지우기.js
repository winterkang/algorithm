function solution(my_string, indices) {
    let answer;
    // indices 정렬
    const sorted = indices.sort((a, b) => a - b)
    // my_string길이만큼 반복하면서 indices에 없는 숫자만 골라서 새 배열에 저장 후 문자열 반환
    let index = [] // 새 배열
    for (let i = 0; i < my_string.length; i++){
        if (!sorted.includes(i)){
            index.push(i)
        }
    }
    // my_string에서 index에 맞는 문자 추출
    let string = ''
    for (i of index){
        string += my_string[i]
    }
    return string;
}
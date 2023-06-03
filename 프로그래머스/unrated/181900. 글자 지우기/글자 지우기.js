function solution(my_string, indices) {
    // my_string길이만큼 반복하면서 indices에 없는 숫자만 골라서 새 배열에 저장 후 문자열 반환
    let string = ''
    for (let i = 0; i < my_string.length; i++){
        if (!indices.includes(i)){
            string += my_string[i]
        }
    }
    return string;
}
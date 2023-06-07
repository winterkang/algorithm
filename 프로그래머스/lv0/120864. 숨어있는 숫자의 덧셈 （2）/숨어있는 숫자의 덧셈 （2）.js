function solution(my_string) {
    let number = '';
    for (str of my_string){
        if (!isNaN(parseInt(str))){ // str을 정수로 변환했을 때 타입이 숫자가 아니라면 ~
            number += str
        }else{
            number += ' '
        }
    }
    const numberArray = number.split(' ').filter(item => item.length >= 1) // 숫자만 필터링
    if (numberArray.length === 0){ // 문자열에 자연수가 없는 경우 0을 return
        return 0
    }
    const total = numberArray.map(item => parseInt(item)).reduce((acc, cur) => acc + cur) // 합 구하기
    return total;
}
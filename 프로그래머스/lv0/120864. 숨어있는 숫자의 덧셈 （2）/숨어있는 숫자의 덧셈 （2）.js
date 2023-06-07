function solution(my_string) {
    // my_string = "aAb1B2cC34oOp"
    let number = '';
    for (str of my_string){
        if (!isNaN(parseInt(str))){ // str을 정수로 변환했을 때 타입이 숫자가 아니라면 ~
            number += str
        }else{
            number += ' '
        }
    }
    // console.log(number)    1 2  34   
    const numberArray = number.split(' ').filter(item => item.length >= 1) 
    // console.log(numberArray) [ '1', '2', '34' ]
    if (numberArray.length === 0){
        return 0
    }
    const total = numberArray.map(item => parseInt(item)).reduce((acc, cur) => acc + cur)
    // console.log(total) 37
    return total;
}
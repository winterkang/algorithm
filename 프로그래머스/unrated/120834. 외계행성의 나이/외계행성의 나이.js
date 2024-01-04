function solution(age) {
    var answer = '';
    const obj = {
        '0': 'a',
        '1': 'b',
        '2': 'c', 
        '3': 'd',
        '4': 'e',
        '5': 'f',
        '6': 'g',
        '7': 'h',
        '8': 'i',
        '9': 'j'
    }
    const ageArr = age.toString().split('')
    for (let i = 0; i < ageArr.length; i++){
        for (const [key, value] of Object.entries(obj)){
            if (ageArr[i] === key){
                answer += value
            }
        }
    }
    return answer;
}
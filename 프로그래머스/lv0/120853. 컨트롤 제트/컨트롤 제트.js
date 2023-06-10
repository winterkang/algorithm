function solution(s) {
    const array = s.split(' ') // 공백으로 구분하여 배열 변환

    const arrNum = array.map(item => { // 정수와 'Z'조합으로 배열 생성
        const num = parseInt(item)
        return isNaN(num) ? item : num
    })

    // 'Z'의 인덱스를 찾아서 바로 앞의 값들의 합을 구하기
    let cnt = 0
    for (let i = 0; i < arrNum.length; i++){
        if (arrNum[i] === 'Z'){
            cnt += arrNum[i-1]
        }
    }   
    
    if (!arrNum.includes('Z')){ // 'Z'가 없다면 바로 합을 구하고
        const sum = arrNum.reduce((acc, cur) => acc + cur)
        return sum
    }else{ // 'Z'가 있다면 전체 합에서 cnt 빼기
        const sumNum = arrNum.filter(item => !isNaN(item)).reduce((acc, cur) => acc + cur)
        return sumNum - cnt
    }
}
function solution(numbers) {
    // numbers의 길이만큼 answer배열을 -1로 채워서 생성
    var answer = new Array(numbers.length).fill(-1);
    
    const stack = []
    for (let i = 0; i < numbers.length; i++){
        // stack 배열이 비어있지 않고, 
        // 현재 스택의 맨 위에 있는 인덱스가 가리키는 값이 현재 원소보다 작은지 확인
        while(stack.length && numbers[stack[stack.length - 1]] < numbers[i]){
            const smallerIndex = stack.pop()
            answer[smallerIndex] = numbers[i]
        }
        stack.push(i) // stack배열에 인덱스 값을 push
    }
    return answer;
}
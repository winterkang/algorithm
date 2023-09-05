function solution(food) {
    var answer = [];
    let arr = []
    for (let i = 1; i < food.length; i++){
        arr.push(Math.floor(food[i] / 2))
    }
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i], i+1)
        for (let j = 0; j < arr[i]; j++){
            // console.log(arr[i])
            answer.push(i + 1)
        }
    }
    return [...answer, 0].concat(answer.reverse()).join('');
}
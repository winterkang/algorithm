function solution(num_list, n) {
    var answer = [];
    let temp = []
    for (let i = 0; i < num_list.length; i++){
        temp.push(num_list[i])
        if (temp.length === n){
            answer.push(temp)
            temp = []
        }
    }
    return answer;
}
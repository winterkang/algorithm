function solution(my_string) {
    var answer = [];
    for (let i = 65; i <= 90; i++){
        answer.push(String.fromCodePoint(i))
    }
    for (let j = 97; j <= 122; j++){
        answer.push(String.fromCodePoint(j))
    }
    let obj = {}
    for(let k = 0; k < my_string.length; k++){
        if (obj[my_string[k]]){
            obj[my_string[k]]++
        }else{
            obj[my_string[k]] = 1
        }
    }
    for (let i = 0; i < answer.length; i++){
        for (o in obj){
            if (answer[i] === o){
                answer.splice(i, 1, obj[o])
            }
        }
    }
    for (let i = 0; i < answer.length; i++){
        if(!Number(answer[i])){
            answer.splice(i, 1, 0)
        }
    }
    return answer;
}
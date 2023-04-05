function solution(my_string) {
    var answer = [];
    const num = ['0','1','2','3','4','5','6','7','8','9']
    for (str of my_string){
        if (num.includes(str)){
            answer.push(parseInt(str))
        }
    }
    const sorting = answer.sort()
    return sorting;
}
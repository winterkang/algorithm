function solution(my_string, is_suffix) {
    var answer = 0;
    if(my_string.slice(my_string.length-is_suffix.length, my_string.length) === is_suffix){
        answer = 1
    }else{
        answer = 0
    }
    return answer
}
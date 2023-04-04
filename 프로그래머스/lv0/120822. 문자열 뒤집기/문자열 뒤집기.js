function solution(my_string) {

    const split = my_string.split("")
    const array = split.reverse()
    const joinstr = array.join("")
    
    return joinstr;
}
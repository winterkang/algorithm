function solution(my_string) {
    let result = '';
    vowel = ['a', 'e', 'i', 'o', 'u']
    for (str of my_string){
        // str이 vowel 배열에 없다면
        if (!vowel.includes(str)){
            result += str
        }
    }
    return result;
}
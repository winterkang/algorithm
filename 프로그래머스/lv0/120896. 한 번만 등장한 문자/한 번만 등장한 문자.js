function solution(s) {
    let count = {}
    for (let i = 0; i < s.length; i++){
        let char = s[i]
        count[char] = count[char] ? count[char] + 1 : 1
    }
    let answer = '';
    for (const [key, value] of Object.entries(count)){
        if (value === 1){
            answer += key
        }
    }
    return [...answer].sort().join('');
}
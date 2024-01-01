function solution(num_list) {
    var answer = 0;
    const even = num_list.filter(x => x % 2 === 0).join('')
    const odd = num_list.filter(x => x % 2 !== 0).join('')
    answer = Number(even) + Number(odd)
    return answer;
}
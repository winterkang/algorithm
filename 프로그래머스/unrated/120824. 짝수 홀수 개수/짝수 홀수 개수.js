function solution(num_list) {
    const even = num_list.filter(e => e % 2 === 0)
    const odd = num_list.filter(o => o % 2 !== 0)
    const answer = [even.length, odd.length]
    return answer;
}
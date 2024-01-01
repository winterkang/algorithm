function solution(money) {
    var answer = [];
    const buy = Math.floor(money / 5500)
    const remainder = money - buy * 5500
    answer = [buy, remainder]
    return answer;
}
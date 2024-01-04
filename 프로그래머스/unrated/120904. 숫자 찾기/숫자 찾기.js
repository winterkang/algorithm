function solution(num, k) {
    const idx = num.toString().split('').indexOf(k.toString())
    return idx !== -1 ? parseInt(idx) + 1 : idx ;
}
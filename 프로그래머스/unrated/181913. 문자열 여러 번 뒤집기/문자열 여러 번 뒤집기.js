function solution(my_string, queries) {
    let new_string = [...my_string.slice()]
    for (let i = 0; i < queries.length; i++){
        const [s, e] = queries[i]
        
        // 인덱스 s부터 e까지 뒤집어라
        new_string.splice(s, e - s + 1, ...new_string.slice(s, e + 1).reverse())
        // console.log([s, e], new_string.join(''))
    }
    return new_string.join('');
}
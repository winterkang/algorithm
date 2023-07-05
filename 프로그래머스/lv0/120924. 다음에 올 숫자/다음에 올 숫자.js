function solution(common) {
    const diff = common[1] - common[0] // 등차수열
    const ratio = common[1] / common[0] // 등비수열
    const len = common.length
    
    for (let i = 0; i < len - 1; i++){
        if (common[len - 2] + diff === common[len - 1]){
            return common[len - 1] + diff
        }else if (common[len - 2] * ratio === common[len - 1]){
            return common[len - 1] * ratio
        }
    } 
}
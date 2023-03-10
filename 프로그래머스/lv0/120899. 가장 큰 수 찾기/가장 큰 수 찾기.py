def solution(array):
    big_value = max(array)
    where = array.index(big_value)
    answer = [big_value, where]
    return answer
def solution(n):
    cnt = 0
    for i in range(1, n+1):
        if i % 2 == 0:
            cnt += i
    answer = cnt
    return answer
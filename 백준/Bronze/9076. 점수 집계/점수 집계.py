T = int(input())  # 테스트 케이스 수 : 4
for t in range(T):
    score = list(map(int, input().split()))

    score.remove(max(score))
    score.remove(min(score))

    if max(score) - min(score) >= 4:
        print('KIN')
    else:
        print(sum(score))

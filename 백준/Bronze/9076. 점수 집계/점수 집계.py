for _ in range(int(input())):
    score = list(map(int, input().split()))

    score.remove(max(score))
    score.remove(min(score))
    score.sort()
    if score[-1] - score[0] < 4:
        print(sum(score))
    else:
        print('KIN')

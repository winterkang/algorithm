for i in range(int(input())):
    ox = list(input())

    score = []
    cnt = 0
    for i in ox:
        if i == 'O':
            cnt += 1
            score.append(cnt)
        else:
            cnt = 0
    print(sum(score))

c = int(input())
for i in range(c):
    num = list(map(int, input().split()))
    total = sum(num[1:]) / num[0]

    cnt = 0
    for i in num[1:]:
        if i > total:
            cnt += 1
    rate = round(cnt / num[0] * 100, 3)
    print(f'{rate:.3f}%')

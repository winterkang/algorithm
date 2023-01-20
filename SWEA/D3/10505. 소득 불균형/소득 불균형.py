T = int(input())  # 3
for t in range(1, T + 1):
    N = int(input())  # 7 / 10 / 7
    num = list(map(int, input().split()))
    total = sum(num) / len(num)
    cnt = 0
    for i in num:
        if i <= total:
            cnt += 1
    print(f'#{t} {cnt}')

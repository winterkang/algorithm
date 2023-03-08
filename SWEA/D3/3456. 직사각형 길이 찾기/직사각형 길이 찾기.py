from collections import Counter
T = int(input())
for t in range(1, T+1):
    N = list(map(int, input().split()))
    square = Counter(N)
    new = []
    for k, v in square.items():
        if v == 1:
            print(f'#{t} {k}')
        elif v == 3:
            print(f'#{t} {k}')

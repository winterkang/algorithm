T = int(input())
for t in range(1, T+1):
    a, b = map(int, input().split())
    if a >= 10 or b >= 10:
        print(f'#{t} -1')
    else:
        print(f'#{t} {a * b}')

T = int(input())
for t in range(1, T+1):
    num = int(input())
    N = list(map(int, input().split()))
    N.sort()
    print(f'#{t}', end=" ")
    print(*N)

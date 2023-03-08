T = int(input())
for t in range(1, T+1):
    N, K = map(int, input().split())
    score = list(map(int, input().split()))
    score.sort()
    total = score[-1:-K-1:-1]
    print(f'#{t} {sum(total)}')

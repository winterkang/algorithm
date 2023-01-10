T = int(input())
for i in range(1, T + 1):
    a, b = map(int, input().split())
    q, r = divmod(a, b)
    print(f"#{i} {q} {r}")
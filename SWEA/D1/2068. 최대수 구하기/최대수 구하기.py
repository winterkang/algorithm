T = int(input())

for i in range(1, T + 1):
    numbers = map(int, input().split())
    big = max(numbers)
    print(f"#{i} {big}")
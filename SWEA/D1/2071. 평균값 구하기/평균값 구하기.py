T = int(input())
for i in range(1, T + 1):
    numbers = list(map(int, input().split()))
    total = sum(numbers)/len(numbers)
    avg = round(total)
    print(f"#{i} {avg}")

T = int(input())
for t in range(1, T + 1):
    number = list(map(int, input().split()))
    number.remove(max(number))
    number.remove(min(number))
    print(f'#{t} {round(sum(number)/len(number))}')

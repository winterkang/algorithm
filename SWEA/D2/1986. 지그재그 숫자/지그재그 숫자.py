T = int(input())
for t in range(1, T + 1):
    num = list(range(2, int(input())+1))
    number = [1]
    for i in num:
        if i % 2 == 0:
            number.append(-i)
        else:
            number.append(i)
    print(f'#{t} {sum(number)}')

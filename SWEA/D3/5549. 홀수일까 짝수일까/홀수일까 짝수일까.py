T = int(input())
for t in range(1, T + 1):
    num = int(input())
    if num % 2 == 0:
        print(f'#{t} Even')
    else:
        print(f'#{t} Odd')

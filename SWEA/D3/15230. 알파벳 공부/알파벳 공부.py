alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
         'h', 'i', 'j', 'k', 'l', 'm', 'n',
         'o', 'p', 'q', 'r', 's', 't', 'u',
         'v', 'w', 'x', 'y', 'z']
T = int(input())
for t in range(1, T+1):
    n = list(input())

    cnt = 0
    for i in range(26):
        try:
            if alpha[i] != n[i]:
                break
            elif alpha[i] == n[i]:
                cnt += 1
        except IndexError:
            break
    print(f'#{t} {cnt}')

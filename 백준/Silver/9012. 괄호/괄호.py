vps_list = []
for t in range(int(input())):  # 테스트 케이스 : 6
    vps = input()

    ls = list(vps)
    total = 0

    for i in ls:
        if i == '(':
            total += 1
        elif i == ')':
            total -= 1
        if total < 0:
            print('NO')
            break
    if total > 0:
        print('NO')
    elif total == 0:
        print('YES')
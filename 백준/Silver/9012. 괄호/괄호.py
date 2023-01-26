vps_list = []
for t in range(int(input())):
    vps = input()
    for s in vps:
        vps_list.append(s)

    total = 0

    for v in vps:
        if v == '(':
            total += 1
        elif v == ')':
            total -= 1
        if total < 0:
            break

    if total == 0:
        print('YES')
    else:
        print("NO")

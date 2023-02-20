num = int(input())
N = num
cnt = 2
new = [1, num]
for i in range(2, num+1):
    if N % cnt == 0:
        new.append(cnt)
        new.append(N // cnt)
        cnt += 1
    elif N % cnt != 0:
        cnt += 1
        pass
divisor = list(set(new))
divisor.sort()
print(*divisor)

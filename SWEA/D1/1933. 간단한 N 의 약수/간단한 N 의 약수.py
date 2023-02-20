num = int(input())
N = num
new = [1, num]
for i in range(2, num+1):
    if N % i == 0:
        new.append(i)
        new.append(N // i)

divisor = list(set(new))
divisor.sort()
print(*divisor)

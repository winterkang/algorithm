n = int(input())

num = [i for i in range(n+1)]

fib = []
for i in num:
    if i == 0:
        fib.append(i)
    elif i == 1:
        fib.append(i)
    elif i >= 2:
        fib.append(fib[i-1] + fib[i-2])
print(fib[-1])

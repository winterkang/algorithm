n = int(input())
cnt = 1
for i in range(1, n+1):
    if i != 0:
        cnt *= i
    else:
        print(1)
print(cnt)

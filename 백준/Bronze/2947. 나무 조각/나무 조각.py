num = list(map(int, input().split()))  
while num != [1,2,3,4,5]:
    for n in range(4):
        if num[n] > num[n+1]:
            num[n], num[n+1] = num[n+1], num[n]
            print(*num)

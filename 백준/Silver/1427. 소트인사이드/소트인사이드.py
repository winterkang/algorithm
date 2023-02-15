num = [int(i) for i in list(input())]
num.sort()
print(*num[::-1], sep='')

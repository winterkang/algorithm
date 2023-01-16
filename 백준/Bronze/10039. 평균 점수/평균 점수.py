won = int(input())
se = int(input())
sang = int(input())
soong = int(input())
kang = int(input())
list = [won, se, sang, soong, kang]
total = 0
cnt = 0
for i in list:
    if i < 40:
        total += 40
        cnt += 1
    else:
        total += i
        cnt += 1
print(int(total/cnt))


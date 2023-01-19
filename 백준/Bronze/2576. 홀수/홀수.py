even = []
odd_list = []
odd_total = 0
for i in range(7):
    num = int(input())
    if num % 2 == 0:
        even.append(num)
    else:  # 홀수일경우
        odd_list.append(num)
        odd_total += num

if len(even) == 7:
    print(-1)

else:
    print(odd_total, min(odd_list), sep='\n')

num_list = 1
new_list = []
zero = [0, 0, 0, 0, 0, 0, 0, 0, 0,0]
for i in range(3):
    num = int(input())
    num_list *= num  # num_list = 17037300
for n in str(num_list):
    new_list += n
for n in new_list:
    zero[int(n)] += 1

for i in zero:
    print(i)

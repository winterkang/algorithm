new_num = []
for i in range(int(input())):
    num = int(input())
    new_num.append(num)
stack = []
for i in new_num:
    if i != 0:
        stack.append(i)
    else:
        stack.pop()
print(sum(stack))

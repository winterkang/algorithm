new = [input() for i in range(3)]
for i in new:
    if i == '*':
        print(int(new[0]) * int(new[-1]))
    elif i == '+':
        print(int(new[0]) + int(new[-1]))

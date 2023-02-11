n = int(input())
for i in range(n, 3, -1):
    if len(str(i)) == str(i).count('7') + str(i).count('4'):
        print(i)
        break

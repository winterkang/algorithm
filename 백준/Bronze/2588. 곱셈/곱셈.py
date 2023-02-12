first = int(input())
sec = input()

for i in reversed(list(sec)):
    print(first * int(i))
print(first * int(sec))

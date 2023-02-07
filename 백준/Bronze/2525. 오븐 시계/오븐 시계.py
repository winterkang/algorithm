a, b = map(int, input().split())
c = int(input())
A = (b + c) // 60
B = (b + c) % 60

if a + A >= 24:
    a = (a + A) - 24
    print(a, B)
elif (b + c) >= 60:
    a = a + A
    print(a, B)
else:
    print(a, b + c)

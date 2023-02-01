
A, B = map(int, input().split())  # 23 48
cooking = int(input())  # 25

hour = ((B + cooking) // 60)
minu = ((B + cooking) % 60)

if (cooking + B) >= 60:
    A = hour + A
    if A >= 24:
        A = A - 24
        print(A, minu)
    else:
        print(A, minu)
else:
    A = hour + A
    print(A, minu)

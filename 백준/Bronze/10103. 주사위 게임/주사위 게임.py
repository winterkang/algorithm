T = int(input())
A = 100
B = 100
for t in range(1, T+1):
    a, b = map(int, input().split())
    if a > b:
        B = B - a
    elif a < b:
        A = A - b
    else:
        pass
print(A, B, sep="\n")

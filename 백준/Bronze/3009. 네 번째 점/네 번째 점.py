import statistics
A = []
B = []
for _ in range(3):
    a, b = map(int, input().split())
    A.append(a)
    B.append(b)

A_most = statistics.mode(A)
B_most = statistics.mode(B)
for n in A:
    if n == A_most:
        pass
    else:
        print(n, end=" ")
for n in B:
    if n == B_most:
        pass
    else:
        print(n)

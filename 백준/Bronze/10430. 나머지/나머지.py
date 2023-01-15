A, B, C = map(int, input().split())  # 5 8 4
for i in A, B, C:
    a = (A+B) % C
    b = ((A % C) + (B % C)) % C
    c = (A*B) % C
    d = ((A % C) * (B % C)) % C
print(a, b, c, d, sep="\n")

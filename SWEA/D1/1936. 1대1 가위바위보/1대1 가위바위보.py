a, b = list(map(int, input().split()))  # 3 2  # A

if (a == 1 and b == 3) or (a == 2 and b == 1) or (a == 3 and b == 2):
    print("A")
elif (a == 1 and b == 2) or (a == 2 and b == 3) or (a == 3 and b == 2):
    print("B")

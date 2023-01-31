matrix = [list(input()) for _ in range(5)]

for i in range(15):
    for j in range(5):
        try:
            print(matrix[j][i], end="")

        except IndexError:
            pass

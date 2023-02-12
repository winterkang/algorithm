chess = [1, 1, 2, 2, 2, 8]
donghuk = list(map(int, input().split()))

new_chess = []

# for i in range(6):
#     if chess[i] - donghuk[i] == 0:
#         new_chess.append(chess[i] - donghuk[i])
#     elif chess[i] - donghuk[i] > 0:
#         new_chess.append(chess[i] - donghuk[i])
#     elif chess[i] - donghuk[i] < 0:
#         new_chess.append(chess[i] - donghuk[i])
# print(*new_chess)

for i in range(6):
    new_chess.append(chess[i] - donghuk[i])
print(*new_chess)

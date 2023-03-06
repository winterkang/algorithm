T = int(input())

for t in range(1, T + 1):
    B = list(map(int, input().split()))
    A = B[0]
    B.pop(0)
    A_price = A*B[-1]
    if B[1] >= B[3]:
        total = min(A_price, B[0])
        print(f'#{t} {total}')

    else:
        B_price = ((B[-1]-B[1]) * B[2]) + B[0]
        total = min(A_price, B_price)
        print(f'#{t} {total}')

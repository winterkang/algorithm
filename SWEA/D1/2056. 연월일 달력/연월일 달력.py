end = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
T = int(input())
for t in range(1, T + 1):
    cal = list(input())

    year = cal[0] + cal[1] + cal[2] + cal[3]
    month = cal[4] + cal[5]
    day = cal[-2] + cal[-1]

    if int(month) > 0 and int(month) <= 12:
        if int(day) <= end[int(month)-1]:
            print(f'#{t} {year.zfill(2)}/{month.zfill(2)}/{day.zfill(2)}')
        else:
            print(f'#{t} -1')
    else:
        print(f'#{t} -1')

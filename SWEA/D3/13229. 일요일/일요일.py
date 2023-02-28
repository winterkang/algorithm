day = {'SUN': 7,
       'MON': 6,
       'TUE': 5,
       'WED': 4,
       'THU': 3,
       'FRI': 2,
       'SAT': 1
       }
T = int(input())
for t in range(1, T+1):
    s = input()
    print(f'#{t} {day[s]}')

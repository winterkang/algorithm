import sys
H, M = map(int, sys.stdin.readline().split())  # 0 30
if M < 45:
    min_alarm = (M + 60) - 45
    if H != 0:
        hour_alarm = H - 1
    else:
        hour_alarm = 23
else:
    min_alarm = M - 45
    if H != 0:
        hour_alarm = H
    else:
        hour_alarm = 0
print(hour_alarm, min_alarm)

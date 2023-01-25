
import statistics
word = input().upper()


if len(statistics.multimode(word)) >= 2:
    print('?')
else:
    print(statistics.mode(word))

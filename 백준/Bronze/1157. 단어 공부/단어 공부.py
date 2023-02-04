import statistics
word = list(input().upper())
most_ = statistics.multimode(word)
if len(most_) >= 2:
    print('?')
else:
    print(*most_)

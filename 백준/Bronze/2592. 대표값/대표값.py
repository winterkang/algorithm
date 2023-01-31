import statistics
number = []
for _ in range(10):
    num = int(input())
    number.append(num)

total = int(sum(number) / len(number))
print(total, statistics.mode(number), end="\n")

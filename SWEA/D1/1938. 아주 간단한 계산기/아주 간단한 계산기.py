b, a = map(int, input().split())
add, sub, mul, div = (b + a, b - a, b * a, round(b / a))

print(add, sub, mul, div, sep='\n')

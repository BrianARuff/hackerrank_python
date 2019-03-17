def getTotalX(a, b):
    pass


def factorial_tree(a):
    factorial_tree = []
    s = []
    for i in a:
        if isPrime(i):
                factorial_tree.append(i)
        else:
            s.append(i)
    while len(s) > 0:
        for i in s:
            found = False
            for j in range(2, i+1):
                for k in range(2, j+1):
                    if j * k == i:
                        found = True
                        if not isPrime(j) and not isPrime(k):
                            s.append(j)
                            s.append(k)
                            pos = s.index(i)
                            s.pop(pos)
                        elif isPrime(j) and  not isPrime(k):
                            s.append(k)
                            factorial_tree.append(j)
                            pos = s.index(i)
                            s.pop(pos)
                        elif not isPrime(j) and isPrime(k):
                            s.append(j)
                            factorial_tree.append(k)
                            pos = s.index(i)
                            s.pop(pos)
                        else:
                            factorial_tree.append(j)
                            factorial_tree.append(k)
                            pos = s.index(i)
                            s.pop(pos)
                        break
                if found:
                    break
    return factorial_tree

def isPrime(num):
    for i in range(2, num+1):
        for j in range(2, i+1):
            if i * j == num:
                return False
    return True

print(getTotalX([18], [24, 48]))
print(factorial_tree([36]))

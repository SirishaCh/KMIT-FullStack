# 1. Swapping middle element with the previous element (i.e., middle-1)
# Input: [12, 35, 9, 56, 24]
# Output: [12, 9,35, 56, 24]
# Input: [1, 2, 3]
# Output: [2, 1,3]

from math import ceil, floor


inp = int(input('Enter the number of elements in the list:'))
lst = []
for x in range(0, inp):
    lst.append(int(input()))

index = floor(len(lst)/2)

mid_ele = lst[index]
prev_ele = lst[index-1]

lst[index] = prev_ele
lst[index-1] = mid_ele

print(lst)

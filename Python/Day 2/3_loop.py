# 3. Given a positive integer 'x' (with even number of digits in it), 
# Program to compute the difference between  the sum of the digits occurring in the alternate positions 
# (starting from the first position) and the sum of the digits occurring in the alternate positions, 
# starting from the last rightmost position of 'x'

# Sample Input: 8975.  
# Sample Output: 1
# Explanation:
# The sum of the digits that occur in the alternate positions from the first position is 8+7=15.  
# The sum of the digits that occur in the alternate positions, starting from the rightmost position is 5+9 = 14. 
# Difference between the two sums is 1 (=15-14).  

from operator import indexOf


num = int(input("Enter the number"))
lsum =0
rsum =0
if len(str(num))%2 == 0:
    for i in str(num):
        if (str(num).index(i))%2 == 0:
            print("lsum",int(i))
            lsum = lsum + int(i)
        else:
            rsum = rsum + int(i)
print("lsum",lsum,"rsum",rsum,lsum-rsum)

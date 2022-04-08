# Write a program to print the sum of the digits of a given number.
# For example if the input is 123, the result should be 6. 

num = int(input("Enter the number"))
sum =0
if len(str(num)) > 1:
    for i in str(num):
        sum = sum + int(i)
else:
    sum = num
print(sum)
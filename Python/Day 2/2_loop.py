# Given a number 'n', Program to check if it can be written as sum of first few prime numbers. 
# Print ‘Yes’ if 'n' can be written as first few prime numbers and ‘No’ otherwise. 
# For example, 
# if n is 5 then print ‘Yes’ as it can be written as 2+3, 
# if n is 41 then print ‘Yes’ as it can be written as 2 + 3 + 5 + 7 + 11 + 13 
# if n is 11 then print 'No' as it cannot be written as sum of first few prime numbers.

x = int(input("Enter the number"))
arr1 = []
flag = False
sum =0
for n in range(2,x-1):
    for i in range(2,n-1):
        if n%i == 0:
            flag = True
            break
    if flag == False:
        arr1.append(n)
print("arr",arr1)
flag = False

for s in arr1:
    sum = sum + s
    if sum == x:
        flag = True
        break
if flag == True:
    print("Yes")
else:
    print("No")
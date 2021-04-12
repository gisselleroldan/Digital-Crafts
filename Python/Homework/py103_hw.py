# # 1. Find the smallest number

# mylist = [2,4,57,1]

# def smallestnum(mylist):
#     for number in mylist:
#         smallnum = mylist[0]
#         if number < smallnum:
#             smallnum = number
#     return smallnum

# print(smallestnum(mylist))

# # 2. Find the largest number

# mylist = [2,4,57,1]

# def largestnum(mylist):
#     max = mylist[0] #2

#     for number in mylist:
#         if number > max: #
#             max = number

#     return max
    
# print(largestnum(mylist))

# 3. Find the shortest string

# mylist = ['cake', 'lion', 'to', 'because']

# def shorteststr(mylist):
#     shortestword = mylist[0]
#     for word in mylist:
#         if len(word) < len(shortestword):
#             shortestword = word
#     return shortestword
# print(shorteststr(mylist))


#4 Longest string

mylist = ['cake', 'lion', 'to', 'because']

def largeststr(mylist):
    largestword = mylist[0]
    for word in mylist:
        if len(word) > len(largestword):
            largestword = word
    return largestword
print(largeststr(mylist))
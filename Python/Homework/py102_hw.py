# 1 multiply vectors
Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists.

listA = [2,4,5]
listB = [2,3,6]
new_list = []

for x in range(len(listA)): # 0 1 2
    result = listA[x] * listB[x]
    new_list.append(result)

print(new_list)

# 2. Matrix Addition
Given two two-dimensional lists of numbers of the size 2x2 two dimensional list is represented as an list of lists:

matrix1 = [
    [1,3],
    [2,4]
    ]

matrix2 = [
    [5,2],
    [1,0]
    ]

matrixSum = []

#listA[0][0] + listB[0][0] = 1 + 5 = 6
#listA[0][0] + listB[0][0] = 3 + 2 = 5
#listA[0][0] + listB[0][0] = 2 + 1 = 3
#listA[0][0] + listB[0][0] = 4 + 0 = 4

for firstIndex in range(len()):
    matrix3 = []
    for secondIndex in range(len()):
        matrix3.append(matrix1[firstIndex][secondIndex] + matrix2[firstIndex][secondIndex])

    matrixSum.append(matrix3)
    print(matrix3)

print(matrixSum)
    
# #4 dep dup
mylist = [1,2,3,3,4,4,4]
newlist = []

#for every number in my list
for num in mylist:
#if we haven't seen that number before
    if num not in newlist:
#append to my empty list
        newlist.append(num)
print(newlist)

#5 Leetspeak
name = "gisselle"
leetspeak = ""
myarr = [["A","4"], ["E", "3"],["G","6"],["I","1"],["O","0"],["S","5"],["T","7"]]

for letter in name.upper(): #G
    for index in myarr: 
        #if letter matches leetspeak character, replace it with translation
        if letter == index[0]:
            letter = index[1]
            break
    leetspeak = leetspeak + letter
print(leetspeak)
        

# 6
find() and replace()

word = "bbebe"
new_word = ""

for letter in word:

    # print(letter)

    if word.find('o') > 0:
        new_word = word.replace('o', ('o' * 5))
    elif word.find('a') > 0:
        new_word = word.replace('a', ('a' * 5))

    elif word.find('e') == True:
        print(word.find('e'))
        new_word = word.replace('e', ('e' * 5))

    elif word.find('i') > 0:
        new_word = word.replace('i', ('i' * 5))
    elif word.find('u') > 0:
        new_word = word.replace('u', ('u' * 5))

print(f'New word is {new_word}')

#7 caesar cipher


secret = "Lbh zhfg hayrnea, jung lbh unir yrnearq."

# secret = "hello"
offset = 13
alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = ''


for char in secret:
#ascii_code returns the unicode char for each character in "secret"
    # ascii_code = ord(char)
#char = lowercase version of the character  
    char = char.lower()
#if the char is not in the "alphabet"
    if char not in alphabet:
#newchar = char
        new_char = char
    else:
# look for the current char index in alphabet and set = to index
        index = alphabet.find(char) #11
    # print(index)
# new index =  that index plus 13   
        new_index = index + offset #24
# if that new char is > 25
        if new_index > 25:
#newindex = newindex - 26
            new_index = new_index - 26
#new index = alphabet at the decyphered index
        new_char = alphabet[new_index] #y
#result = new_index (will loop through "secret text")
    result += new_char

# print(result)
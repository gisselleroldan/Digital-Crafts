# 1. Tip Calculator

# #prompt the user for the total and the service level
total = float(input('Total bill amount? '))
service = input('Enter a Level of Service: Good, Fair, or Bad: ')
#if service was good, set tip to 20% and add to total
if service.lower() == 'good':
     tip = total * .2
    print(f'Tip amount: {tip}')
    new_total = tip + total
    print(f'Total amount is {new_total} ')

#if service was fair, set tip to 15% and add to total
elif service.lower() == 'fair':
    tip = total * .15
    print(f'Tip amount: {tip}')
    new_total = tip + total
    print(f'Total amount is {new_total} ')

#if service was fair, set tip to 10% and add to total
else:
    tip = total * .10
    print(f'Tip amount: {tip}')
    new_total = tip + total
    print(f'Total amount is {new_total} ')


#2 Tip Calculator 2

#prompt the user for the total, service level, and amount of people
total = float(input('Total bill amount? '))
service = input('Enter a Level of Service: Good, Fair, or Bad: ')
people = int(input('Split how many ways? '))

#if service was good, set tip to 20% and add to total
if service.lower() == 'good':
    tip = total * .2
    print(f'Tip amount: {tip}')
    new_total = tip + total
    print(f'Total is: {new_total}')
    print(f'Total amount per person: {new_total/people} ')

#if service was fair, set tip to 15% and add to total
elif service.lower() == 'fair':
    tip = total * .15
    print(f'Tip amount: {tip}')
    new_total = tip + total
    print(f'Total is: {new_total}')
    print(f'Total amount per person: {new_total/people} ')

# #if service was fair, set tip to 10% and add to total
else:
    tip = total * .10
    print(f'Tip amount: {tip}')
    new_total = tip + total
    print(f'Total is {new_total}')
    print(f'Total amount per person: {new_total/people} ')



# #3 How many coins

#set coin = 0, print amount of coins, ask if they want another coin
coins = 0
print(f'You have {coins} coins')
coins_yes_no = input('Do you want another coin? Enter yes or no ')

#if they want another coin, add 1 to their coin total, then ask again
while coins_yes_no == "yes":
    coins += 1
    print(f'You have {coins} coins')
    coins_yes_no = input('Do you want another coin? Enter yes or no ')

#if they say no, leave loop and print bye
print("Bye")


#4 Print a box

#Ask user for a height and width
width = int(input("Enter a width: "))
height = int(input("Enter a height: "))

for x in range(1, width+1):

    #print top line
    print("*" * width)

    #print sides 0,3
    for y in range(1, height-1):
        print('*' + ' ' * (width - 2) + "*")

    #print bottom line
    print("*" * width)


#5 Print a Triangle

for x in range(1, 8, 2):

    result = ("*" * x)
    print(result.center(7))


height = int(input("Enter a height? "))
count = 0
stars = 1
 width_size = height * 2 - 1

while count < height:
     star = '*' * stars
    count += 1
    stars += 2
    print(star.center(width_size))


#6 Multiplication Table

count = 1

while count <= 10:
    print(f'{count} X {count} = {count*count}')
    count += 1

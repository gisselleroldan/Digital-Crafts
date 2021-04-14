# CRUD - create, read, update, delete
phonebook = {}
import pickle

with open('phonebook.pickle', 'rb') as fh:
    phonebook = pickle.load(fh)



keep_going = True

def lookup():
    name = input("Enter whose number would you like to look up: ")
    if name in phonebook:
        print(f'Number for {name} is: {phonebook[name]}')
    else:
        print("Name not found. Please try again.")



def add():
    name = input('Name: ')
    number = input('Phone number: ')
    phonebook[name] = number
    with open('phonebook.pickle', 'wb') as fh:
        pickle.dump(phonebook, fh)
    print(f'Entry stored for {name}.')


def display():
    for index, item in enumerate(phonebook):
        print(f"{index + 1} {item} {phonebook[item]}")

def delete():
    name = input('Enter a name to delete: ')
    if name in phonebook.keys():
        del phonebook[name]
        with open('phonebook.pickle', 'wb') as fh:
            pickle.dump(phonebook, fh)
        print(f'{name} was deleted')
    else: 
        print('No entry found under that name')
    


print('''
Electronic Phone Book
=====================
1. Look up an entry
2. Add an entry
3. Delete an entry
4. List all entries
5. Quit
''')


    
while keep_going == True:
    choice = int(input('What do you want to do (1-5)? '))
    if choice == 1:
        lookup()
    elif choice == 2:
        add()
    elif choice == 3:
        delete()
    elif choice == 4:
        display()
    elif choice == 5:
        print('Quit Program')
        keep_going == False
        break


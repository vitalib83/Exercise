from utilities.number_generator import generate_two_numbers

def add(num1, num2):
    return num1+num2

def add_generated_numbers():
    num1, num2 = generate_two_numbers()
    return add(num1, num2)

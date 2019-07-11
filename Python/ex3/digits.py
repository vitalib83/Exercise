def analyze_number_digits():
    number = input("Please input 5-digit number")
    print("The number is: ", number)
    print("The digit are: ", end="")
    for index, digit in enumerate(number):
        if index == (len(number) - 1):
            print(digit)
        else:
            print(digit, ",", end="")

    s = 0
    for digit in number:
        s += int(digit)

    print("The Sum Is" , s)


analyze_number_digits()

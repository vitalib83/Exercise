import sys
print(sys.path)

from logic.calculator import add, add_generated_numbers

if __name__ == "__main__":
    print(add(1, 2))      
    print(add_generated_numbers())

#1# I use help('modules') command under python console.

#2# Import 3 built-in modules.
import random
import math
import os

#3# import 1 function from another built-in module.

#from math import degrees

#4# In 1 line import 3 functions from a built-in module.

from math import radians, ceil as ceiling, floor, exp as exponent, factorial as calcFactorial

#5# use a universal import to import all functions of a built-in module.

# from math import *


assert(calcFactorial(5) == 120)
print(exponent(3))
print(ceiling(3.2))

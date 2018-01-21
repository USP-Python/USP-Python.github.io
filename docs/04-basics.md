```python 
def sum(x, y):
    return x+y
```

This is a function. We use the keyword "def" to start off the function, followed by the name of the function (in this case, "sum"). 
Within the brackets, we specify the parameters or inputs to the function. We use the keyword "return" to specify the outputs of the function.

To use a function, or perform what we call a function call, we could write:

```python
a = sum(3,4)
```

This assigns the value of sum(3,4), which is 7, to the variable a. 

Unlike in maths, however, functions in python do not need to have inputs and outputs. So, this is also a valid function:

```python
def sayhi():
    print("hi")
```

Functions are an important tool that allows us to organise our code and package sets of instructions which perform a specific task. 
Once we have defined a function, we will be able to use it in multiple places. We can also use functions that other people have written in our code.

//give example

Let's say we download some data off a website and get this dictionary. We want to find all the choices that don't have fish in the menu. Try writing that function yourself!

```python
meals = {
    'noodle'    :   'SEAFOOD IPOH HOR FUN',
    'asian'     : '''WHITE & BROWN RICE
                     SOY BRAISED CHICKEN WING X 2
                     FISH IN PINEAPPLE SAUCE
                     SCRAMBLED EGG W/ TOMATO SAUCE
                     CHYE SIM W/ GARLIC
                     CARROT & CORN SOUP''',
    'western'   : '''CREAM OF CARROT
                     ROASTED BEEF STEAK W/ HERB BROWN SAUCE
                     MASHED POTATO
                     MIXED BEANS & MUSHROOM''',
    'indian'    : '''DAL
                     PANEER KADAI
                     CHANA MASLA
                     VEG JALFREZZI
                     CHICKEN MASALA
                     TOMATO RICE''',
    'malay'     : '''BAKED CHICKEN SERVED W/ MUSHROOM SAUCE
                     WEDGES
                     EGGPLANT W/ TOMATO PASTE''',
    'vegetarian': '''STEAMED BEANCURD W/ MUSHROOM GRAVY
                     SPRING ROLLS
                     LO HAN CHAI
                     STIR FRIED SWEET POTATO LEAVES'''
}
```

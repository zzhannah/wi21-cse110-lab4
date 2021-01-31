(var)
1. What will happen at line 11 and why?
   print out the last i(prices's length)
   because i is visible after loop

2. What will happen at line 12 and why?
   print out the last discountedPrice(last price in the list * whatever discount)
   because discountedPrice is visible after loop

3. What will happen at line 13 and why?
   print out the last finalPrice(calculate the discountedPrince and round to the closet integer)
   because finalPrice is visible after loop

4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.
   [ 50, 100, 150 ]
   because everytime loops, it push a new finalPrice to discounted in the loop, so discounted update in the loop and prints out the right list.
   
(let)
5. What will happen at line 11 and why?
   reference Error
   because i is created in the loop, and since it is type let, it can only use inside the loop, not visible outside

6. What will happen at line 12 and why?
   reference Error
   because discountedPrice is created in the loop, and since it is type let, it can only use inside the loop, not visible outside

7. What will happen at line 13 and why?
   reference Error
   because finalPrice is created in the loop, and since it is type let, it can only use inside the loop, not visible outside

8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
   reference Error
   because finalPrice is created in the loop, and since it is type let, although it pushes to the discounted in the loop, but because the variable type, return cannot find what is inside discounted.

(const)
9. What will happen at line 11 and why?
    reference Error, behave same with let
   because i is created in the loop, and since it is type let, it can only use inside the loop, not visible outside

10.  What will happen at line 12 and why?
    reference Error, behave same with let
   because discountedPrice is created in the loop, and since it is type let, it can only use inside the loop, not visible outside

11.  What will happen at line 13 and why?
    reference Error, behave same with let
   because finalPrice is created in the loop, and since it is type let, it can only use inside the loop, not visible outside

12.  What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    reference Error, behave same with let
   because finalPrice is created in the loop, and since it is type let, although it pushes to the discounted in the loop, but because the variable type, return cannot find what is inside discounted.

13. Given the above Object, write the notation for:  (These should be in your part1.md)

    Accessing the value of the name property in the student object
    `student[name]`

    Accessing the value of the Grad Year property in the student object
    `student['Grad Year']` / `student[Grad Year]`

    Calling the function for the greeting property in the student object
    `student.greeting`

    Accessing the name property of the object in the Favorite Teacher property in student
    `student['Favorate Teacher'[name]]`

    Access the first index in the array of the courseLoad property of the student object
    `student[courseload[0]]`

14. Arithmetic

    `‘3’ + 2`                 
    '32'
    because '3' is a string, + convert 2 to a string, two string added is '32'

    `‘3’ - 2`
    1
    because - let 3 convert to number 3, 3-2=1

    `3 + null`
    3
    because null is 0 in number, 3+0=3

    `‘3’ + null`
    '3null'
    null convert to string since '3', so two string added

    `true + 3`
    4
    true convert to number is 1, 1+3=4

    `false + null`
    0
    all converted to number, 0+0=0

    `“3” + undefined`
    "3undefined"
    undefined convert to a string since +, so two string added

    `“3” - undefined`
    NaN
    "3" converted to a number, but undifined is NaN, so 3-NaN=NaN

15. Comparison

    `‘2’ > 1`
    true
    because '2' converted to a number 2 and number 2 is greater than number 1

    `‘2’ < ‘12’`
    false
    because '2' is greater than '1' in string, so as '12'

    `2 == ‘2’`
    true
    because non-strick check, '2' converted to 2 becomes number equality

    `2 === ‘2’`
    false
    because strick check, 2 is number, '2' is string

    `true == 2`
    false
    because true is 1 in number

    `true === Boolean(2)`
    true
    because true is a boolean and 2 has been converted to a boolean


16. Explain the difference between the == and === operators.
    == does the type convertion and compare the final result
    === check equality without type convertion.

17. From the code snippet below, explain what gets printed and why.
    How are you?
    true is 1 in number, so cannot be Hello
    else if do not give an actual condition so whenever the first step is not correct, second step is printed

19. [ 6, 8, 10 ]
    [ 1, 2, 3] as the array, doSomething as the callback. In the for loop, when it gets the array, it calls doSomething to +2 to the number at the index, then go to function inside to *2, which comes out 6,8,10.

21. 1
    4
    3
    2
    1,4,3 printed immediately, since they are called by console.log and 3 is called 0 millisecond, 2 comes after 1000 milliseconds.


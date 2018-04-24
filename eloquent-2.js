Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it:

let abc = "abc";
console.log(abc.length);
// → 3

Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you 
can click code blocks to edit them.

//Create a loop
let poundTriangle = '';
//Seven calls
   for (var i = 1; i <= 7; i++){
   poundTriangle += '#';
//Output results    
 console.log(poundTriangle);
 } 

#
##
###
####
#####
######
#######

FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and 
    not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible 
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage 
    of programmer candidates. So if you solved it, your labor market value just went up.)

for (var sum = 1; sum <= 100; sum ++){
  var sumThree = sum % 3;
  var sumFive = sum % 5;
 if ((sumThree === 0) && (sumFive === 0)) 
    console.log( "fizzbuzz");
   else if (sumThree === 0)
  console.log( "fizz");
  else if (sumFive === 0)
 console.log( "buzz");
 else
 console.log( sum );
} 

1

2

fizz

4

buzz

fizz

7

8

fizz

buzz

11

fizz

13

14

fizzbuzz

16

17

fizz

19

buzz

fizz

22

23

fizz

buzz

26

fizz

28

29

fizzbuzz

31

32

fizz

34

buzz

fizz

37

38

fizz

buzz

41

fizz

43

44

fizzbuzz

46

47

fizz

49

buzz

fizz

52

53

fizz

buzz

56

fizz

58

59

fizzbuzz

61

62

fizz

64

buzz

fizz

67

68

fizz

buzz

71

fizz

73

74

fizzbuzz

76

77

fizz

79

buzz

fizz

82

83

fizz

buzz

86

fizz

88

89

fizzbuzz

91

92

fizz

94

buzz

fizz

97

98

fizz

buzz

Going over the numbers is clearly a looping job, and selecting what to print is a matter of 
conditional execution. Remember the trick of using the remainder (%) operator for checking whether 
a number is divisible by another number (has a remainder of zero).

In the first version, there are three possible outcomes for every number, so you’ll have to create 
an if/else if/else chain.

The second version of the program has a straightforward solution and a clever one. The simple way 
is to add another conditional “branch” to precisely test the given condition. For the clever method, 
build up a string containing the word or words to output and print either this word or the number if 
there is no word, potentially by making good use of the || operator.
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to 
separate lines. At each position of the grid there is either a space or a "#" character. The 
characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the 
program so that it works for any size, outputting a grid of the given width and height.

  var gridOne = " # # # #";
  var gridTwo = "# # # #";
  var space = "";
  var i = 1;
    while(i <= 8) {

  if( i % 2 ==0) {
     console.log(gridOne);
    }
    else {
     console.log(gridTwo);
    }
  var i= i+1;
    }

    RESULTS
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

The string can be built by starting with an empty one ("") and repeatedly adding characters. A 
newline character is written "\n".

To work with two dimensions, you will need a loop inside of a loop. Put curly braces around 
the bodies of both loops to make it easy to see where they start and end. Try to properly 
indent these bodies. The order of the loops must follow the order in which we build up the 
string (line by line, left to right, top to bottom). So the outer loop handles the lines and 
the inner loop handles the characters on a line.

You’ll need two bindings to track your progress. To know whether to put a space or a hash sign
at a given position, you could test whether the sum of the two counters is even (% 2).

Terminating a line by adding a newline character must happen after the line has been built up, 
so do this after the inner loop but inside of the outer loop.

MINIMUM
/ Your code here.
//Write a function min that takes two arguments and returns their minimum.
function min(a, b){
    return (a < b)? a : b;
}

////function Math.min that returns its smallest argument.
console.log(Math.min(0, 10));
// → 0
console.log(Math.min(0, -10));
// → -10

RECURSION
//Define a recursive function isEven corresponding to this description.
//Function accepts single parameter (a positive, whole number) return a Boolean.
function isEven(num){
    //Use if/else if/else chain that tests which of the three cases applies.  
     if(num === 0) { 
       return true;
     }
     else if(num === 1){
       return false;
     }
     return isEven(num-2);
   }
   console.log(isEven(50));
   // → true
   console.log(isEven(75));
   // → false
   console.log(isEven(-1));
   // → ??

BEAN COUNTING 
// Your code here.
//Write a function called countBs
function countBs(str){
    return countChar(str, 'B');
  }
  
  //Write a function called countChar that behaves like countBs 
  function countChar(str, letter){
    var num = 0;
  //Your function will need a loop that looks at every character in the string. 
    for(var i = 0; i < str.length; i += 1){
      if(str[i] === letter){
        num += 1;
      }
    }
  //Once the loop has finished, the counter can be returned.  
    return num;
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4

function greetUser(User)
{
    
console.log("Hello ", User);
}
function square(a)
{
    console.log("Square of", a ,"=" ,a*a);
}
function divide(a, b){
    console.log("Division of the 2 numbers  = ", a/b);
}
function multiply(a, b){
    console.log("Multiplication of the two number  = ", a* b);
}
function subtract(a, b){
    console.log("The subtraction of the two numbers = ", a-b);
}
function add(a, b){
    console.log("The addition of the two numbers = ", a+b );
}
fullName=prompt("Enter your name!");
disp=greetUser(fullName);
sq=Number(prompt("Enter a Number"));
s=square(sq);
f=Number(prompt("Enter the first number"));
s=Number(prompt("Enter the second number"));
ad=add(f,s);
sub=subtract(f,s);
mul=multiply(f,s);
div=divide(f,s);





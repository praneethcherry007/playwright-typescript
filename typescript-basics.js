console.log('Hello world')

//variables
//variable starts with a letter or underscore _ or doller sign $
let variable = "Praneeth"
let _variable = "how are u..?"
let $variable = "i'm fine :)"
console.log(variable)
console.log(_variable)
console.log($variable)

//String
console.log("hi") //String in Literal
let str = "hello" //String in variable type
console.log('hi' + 'llo') // String in Exression
let str2 = `${str}, Praneeth`
console.log(str2)

//num
let num = 1
let num2 = 2.2
console.log(num,num2)

//boolen
let boo = true

//Object
let obj = {}


//Array
let Arr = [1,2.2,true,"praneeth" ]
console.log(Arr)

//Reg
let re = /abc/

//undefined, null
let val1
let tempobj = null

console.log(`the type of the variable is: ${typeof variable}`) //string
console.log(`the type of the number is: ${typeof num}`) //number
console.log(`the type of the string is: ${typeof str}`) //string
console.log(`the type of the boolean is: ${typeof boo}`) //Boolean
console.log(`the type of the object is: ${typeof obj}`) //object
console.log(`the type of the Array is: ${typeof Arr}`) //object
console.log(`the type of the regexp is: ${typeof re}`) //object
console.log(`the type of the undefined is: ${typeof val1}`) //Undefined
console.log(`the type of the null is: ${typeof tempobj}`) //object


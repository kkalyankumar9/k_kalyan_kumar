// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

class Calculation{
    constructor(a,b,operation) {
        this.a=parseFloat(a);
        this.b=parseFloat(b);
        this.operation=operation.toLowerCase();
    }
    calculator(){
        switch(this.operation){
            case "add":
            case "+":
                return this.a + this.b;
            case "subtract":        
            case "-":
                return this.a - this.b; 
            case "multiply":
            case "*":
                return this.a * this.b;
            case "divide":
            case "/":
                if (this.b === 0) {
                    return "Error: Division by zero is not allowed.";
                }
                return this.a / this.b;
           default:
                return "Error: Invalid operation. Please use add, subtract, multiply, or divide.";
            

        }
    }

}

let result= new Calculation(10, 5, "+");
console.log("Result:", result.calculator());
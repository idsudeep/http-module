const Calculator = class {
    constructor(first,second){
        this.first = first;
        this.second = second;
    }

      addition = () =>{
        return this.first + this.second;
 }
    subtract = () =>{
     return this.first - this.second;
 }
     multiply = () =>{
         return this.first * this.second;
     }

     division = () =>{
         return this.first / this.second;
     }

}


/*
a = 10;
b = 20;
cal = new Calculator(a,b);
console.log(cal.addition());
*/

module.exports = {

    Calculator : Calculator
};

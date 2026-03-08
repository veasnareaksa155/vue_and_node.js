const calculate = {
    add: (a,b)=>a + b,
    subtract: (a,b)=>a - b,
    multiply: (a,b)=>a * b,
    divide: (a,b)=>a / b
}
console.log(
    " Sum of numbers: "+calculate.add(2,3)+"\n",
    "Subtraction: "+calculate.subtract(5,2)+"\n",
    "Multiplication: "+calculate.multiply(4,6)+"\n",
    "Division: "+calculate.divide(10,2)
);
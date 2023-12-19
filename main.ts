function multiply(a:number, b:number): number{
    return a * b
}

console.log(multiply(3, 5))

export {multiply}

//npx tsc main.ts para compilar manualmente o typescript

const applyDesc = (price:number, percent:number): number =>{
    return price - (price * (percent / 100))
}

console.log(applyDesc(100, 25))
function calculate(operation) {
   const num1 = parseFloat(document.getElementById('calcFirstNum').value)
   const num2 = parseFloat(document.getElementById('calcSecondNum').value)
   let result
   switch(operation) {
      case 'sum':
         result = num1 + num2
         break
      case 'subtract':
         result = num1 - num2
         break
      case 'mult':
         result = num1 * num2
         break
      case 'divide':
         result = num1 / num2
         break
      default:
         throw new Error('Incorrect operation')
         break
   }
   document.getElementById('clacResult').value = result
}

// Варіант з окремими функціями
// function sum() {
//    const num1 = parseFloat(document.getElementById('calcFirstNum').value)
//    const num2 = parseFloat(document.getElementById('calcSecondNum').value)
//    const result = num1 + num2
//    document.getElementById('clacResult').value = result
// }

// function subtract() {
//    const num1 = parseFloat(document.getElementById('calcFirstNum').value)
//    const num2 = parseFloat(document.getElementById('calcSecondNum').value)
//    const result = num1 - num2
//    document.getElementById('clacResult').value = result
// }

// function mult() {
//    const num1 = parseFloat(document.getElementById('calcFirstNum').value)
//    const num2 = parseFloat(document.getElementById('calcSecondNum').value)
//    const result = num1 * num2
//    document.getElementById('clacResult').value = result
// }

// function divide() {
//    const num1 = parseFloat(document.getElementById('calcFirstNum').value)
//    const num2 = parseFloat(document.getElementById('calcSecondNum').value)
//    const result = num1 / num2
//    document.getElementById('clacResult').value = result
// }


document.getElementById('calcAdd').onclick = () => calculate('sum') // sum
document.getElementById('calcSubtract').onclick = () => calculate('subtract') // subtract
document.getElementById('calcMult').onclick = () => calculate('mult') // mult
document.getElementById('calcDivide').onclick = () => calculate('divide') // divide
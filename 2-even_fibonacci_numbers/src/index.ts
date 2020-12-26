let sum = 0;
let sumEvenValued = 0;
let previous = 0;
while (sum < 4000000) {
  if (previous === 0) {
    previous = 1
    sum += 1
  } else {
    let auxPrevious = sum
    sum += previous
    previous = auxPrevious
  }
  console.log(sum)

  if (sum % 2 === 0) {
    sumEvenValued += sum
  }
}

console.log("Highest Fibonacci number: ", sum)
console.log("Result: ", sumEvenValued)
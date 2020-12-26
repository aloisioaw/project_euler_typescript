import { exit } from "process";
import { factory } from "./ConfigLog4j";
 
const logMax = factory.getLogger("maxPrimeFactor");

const max: number = 600851475143

function nextPrimeNumber(currentPrimeNumber: number) {
  for (let nextPrimeNumber = currentPrimeNumber + 1; nextPrimeNumber <= max; nextPrimeNumber++) {
    let prime = true;

    for (let div = 2; div < nextPrimeNumber; div++) {
      if (nextPrimeNumber % div == 0) {
        prime = false;
        break;
      }
    }
    
    if (prime) {
      return nextPrimeNumber;
    }
  }
  
  return 0
}

export const findMaxPrimeFactor = () => {
  let currentPrimeNumber = 1;
  // logMax.info('Starting with prime number ' + currentPrimeNumber)

  let currentNumber = max
  let highestPrime = 1
  while (currentPrimeNumber < currentNumber) {
    let primeNumber = nextPrimeNumber(currentPrimeNumber)

    if (primeNumber == 0 || currentNumber == 1) {
      logMax.info("nextPrimeNumber returned 0. Stopped at: " + currentPrimeNumber)
      process.exit()
    } else {
      currentPrimeNumber = primeNumber

      if (currentNumber % currentPrimeNumber == 0) {
        highestPrime = (currentPrimeNumber < highestPrime ? highestPrime : currentPrimeNumber)
        currentNumber = currentNumber / primeNumber
        // logMax.info('New base number: ' + currentNumber)
        // logMax.info('primeNumber ' + currentPrimeNumber + ' with rest 0')
        currentPrimeNumber = 1
      }
    }
  }

  logMax.info('Max Prime Factor: ' + highestPrime)
}
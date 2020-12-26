import { findMaxPrimeFactor } from './factorization'
import { factory } from "./ConfigLog4j";
 
const logger = factory.getLogger("primes");

findMaxPrimeFactor();
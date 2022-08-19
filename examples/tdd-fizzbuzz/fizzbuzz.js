function fizzBuzz(num){
  const divisible = (divisor, dividend) => dividend % divisor === 0

  if (divisible(3, num) && divisible(5, num)) {
    return 'fizzbuzz'
  }

  if(divisible(3, num)) {
    return 'fizz'
  }

  if (divisible(5, num)) {
    return 'buzz'
  }
  return 1
}

module.exports = fizzBuzz

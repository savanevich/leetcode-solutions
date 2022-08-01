import {fizzBuzz} from './fizz-buzz'

test('Returns a string array answer', () => {
    expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
    expect(fizzBuzz(5)).toEqual(["1","2","Fizz","4","Buzz"]);
    expect(fizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
});
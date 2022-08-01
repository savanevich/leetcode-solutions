/**
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * @param n
 */

export function fizzBuzz(n: number): string[] {
    const answerArray: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answerArray.push('FizzBuzz');
        } else if (i % 3 === 0) {
            answerArray.push('Fizz');
        } else if (i % 5 === 0) {
            answerArray.push('Buzz');
        } else {
            answerArray.push(i.toString());
        }
    }

    return answerArray;
};
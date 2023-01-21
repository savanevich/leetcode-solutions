/**
 * 2024. Maximize the Confusion of an Exam
 * Medium
 * 827
 * 18
 * Companies
 * A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).
 *
 * You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:
 *
 * Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
 * Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.
 *
 *
 *
 * Example 1:
 *
 * Input: answerKey = "TTFF", k = 2
 * Output: 4
 * Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
 * There are four consecutive 'T's.
 * Example 2:
 *
 * Input: answerKey = "TFFT", k = 1
 * Output: 3
 * Explanation: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
 * Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
 * In both cases, there are three consecutive 'F's.
 * Example 3:
 *
 * Input: answerKey = "TTFTTFTT", k = 1
 * Output: 5
 * Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
 * Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT".
 * In both cases, there are five consecutive 'T's.
 *
 *
 * Constraints:
 *
 * n == answerKey.length
 * 1 <= n <= 5 * 104
 * answerKey[i] is either 'T' or 'F'
 * 1 <= k <= n
 */

export function maxConsecutiveAnswers(answerKey: string, k: number): number {
  let maxConsecutiveAnswers = 0;

  for (let i = 0; i < answerKey.length; i++) {
    const remainingAnswers = answerKey.substring(i + 1)

    // if remaining string is less than the current maximum,
    // no needs to continue searching
    if (remainingAnswers.length < maxConsecutiveAnswers) {
      break;
    }

    const firstAnswer = answerKey[i];
    const flippedFirstAnswer = firstAnswer === 'T' ? 'F' : 'T'

    const maxWithFlipped = calculateMaxSequence(remainingAnswers, k - 1, flippedFirstAnswer);
    const maxWithoutFlipped = calculateMaxSequence(remainingAnswers, k, firstAnswer);

    maxConsecutiveAnswers = Math.max(maxConsecutiveAnswers, maxWithFlipped, maxWithoutFlipped)
  }

  return maxConsecutiveAnswers;
};

function calculateMaxSequence(answerKey: string, consensus: number, startingSymbol: string): number {
  let currentMaxConsecutiveAnswers = 1;
  let leftConsensus = consensus;
  let currentSequence = 1;

  for (let j = 0; j < answerKey.length; j++) {
    const currentAnswer = answerKey[j];
    const remainingString = answerKey.length - j

    // if remaining string is less than the current maximum,
    // no needs to continue searching
    if (remainingString < currentMaxConsecutiveAnswers) {
      break;
    }

    if (startingSymbol === currentAnswer) {
      currentSequence++;

      if (currentSequence > currentMaxConsecutiveAnswers && answerKey.length === j + 1) {
        currentMaxConsecutiveAnswers = currentSequence;
      }
    } else if (startingSymbol !== currentAnswer) {
      if (leftConsensus > 0) {
        currentSequence++;
        leftConsensus--;

        if (currentSequence > currentMaxConsecutiveAnswers && answerKey.length === j + 1) {
          currentMaxConsecutiveAnswers = currentSequence;
        }
      } else {
        if (currentSequence > currentMaxConsecutiveAnswers) {
          currentMaxConsecutiveAnswers = currentSequence;
        }

        break;
      }
    }
  }

  return currentMaxConsecutiveAnswers;
}

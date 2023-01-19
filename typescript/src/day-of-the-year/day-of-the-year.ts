/**
 * 1154. Day of the Year
 * Easy
 * 318
 * 377
 * Companies
 * Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
 *
 *
 *
 * Example 1:
 *
 * Input: date = "2019-01-09"
 * Output: 9
 * Explanation: Given date is the 9th day of the year in 2019.
 * Example 2:
 *
 * Input: date = "2019-02-10"
 * Output: 41
 *
 *
 * Constraints:
 *
 * date.length == 10
 * date[4] == date[7] == '-', and all other date[i]'s are digits
 * date represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.
 */

export function dayOfYear(date: string): number {
    const [year, month, day] = date.split('-').map(Number);
    const dayInMonth = {
        '1': 31,
        '2': 28,
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
        '12': 31
    }

    const isLeapYear = (y) => new Date(y, 1, 29).getDate() === 29;

    if (isLeapYear(year)) {
        dayInMonth['2'] = 29;
    }

    let result = 0;

    for (let m = 1; m < month; m++) {
        result += dayInMonth[m];
    }

    return result + day;
};
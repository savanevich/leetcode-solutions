import {dayOfYear} from './day-of-the-year'

test('Return the day number of the year', () => {
    expect(dayOfYear("2019-01-09")).toEqual(9);
    expect(dayOfYear("2019-02-10")).toEqual(41);
});
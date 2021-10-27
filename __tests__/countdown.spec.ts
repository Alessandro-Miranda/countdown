import { afterEach, describe, expect, jest, test } from '@jest/globals';
import { countdown } from '../src/countdown';

describe('Countdown', () => {
    afterEach(() => {
        jest.useRealTimers;
    });

    test.todo('Should return an error if no one target date has been passed');
    test.todo('Should return the difference between actual time and targe date');

    test('Should return 0 and true if target date is reached', () => {
        jest.useFakeTimers().setSystemTime(new Date('2021-10-27T12:00:00'));

        const expected = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            hasFinished: true
        };
        
        const timeRemaining = countdown();

        expect(timeRemaining).toStrictEqual(expected);
    });
})
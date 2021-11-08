import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { countdown } from '../src/countdown';

describe('Countdown', () => {
    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(new Date('2021-10-27T12:00:00'));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Should return the difference between actual time and targe date', () => {
        const expected = {
            days: '01',
            hours: '23',
            minutes: '59',
            seconds: '59',
            hasFinished: false
        };
        
        const timeRemaining = countdown('2021-10-28');
        
        expect(timeRemaining).toStrictEqual(expected);
        jest.runOnlyPendingTimers();
    });

    test('Should return 0 and true if target date is reached', () => {
        const expected = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            hasFinished: true
        };
        
        const timeRemaining = countdown(new Date('2021-10-27T12:00:00'));

        expect(timeRemaining).toStrictEqual(expected);
        jest.runOnlyPendingTimers();
    });
})
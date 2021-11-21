import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
import { countdown } from '../src/countdown';
import { TimeSplit } from '../src/types/globals';

let time = {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    hasFinished: false
};


function updateTimeRemaining(timeRemaining: TimeSplit)
{
    time = { ...timeRemaining }
}

describe('Countdown', () => {
    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(new Date('2021-10-27T12:00:00'));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('Should return the difference between actual time and targe date', () => {
        
        const expected = {
            days: '00',
            hours: '12',
            minutes: '00',
            seconds: '00',
            hasFinished: false
        };
        
        countdown('2021-10-28T00:00:00', updateTimeRemaining);
        jest.advanceTimersByTime(1000);
        expect(time).toStrictEqual(expected);
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
        
        countdown('2021-10-27T12:00:00', updateTimeRemaining);

        expect(time).toStrictEqual(expected);
        jest.runOnlyPendingTimers();
    });
})
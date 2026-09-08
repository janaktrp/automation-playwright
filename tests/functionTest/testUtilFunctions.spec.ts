import { test, expect } from '@playwright/test';
import { DateUtils } from '../../src/utils/dateUtils';
import { RandomUtils } from '../../src/utils/randomUtils';

test.describe('DateUtils - addDays', () => {

    test('should add days to a date', () => {
        const date = '2026-4-5';
        const result = DateUtils.addDays_string(date, 10);
        //expect(result).toEqual(new Date(2026, 8, 15));
        console.log('Original Date: ', date)
        console.log('New Date: ', result)
    });


    test('start of current month', () => {
        const date = new Date(2026, 6, 7);
        console.log('Start of current month: ', DateUtils.startOfMonth(date))
    });

    // .only -- runs this test only
    test.only('Generate random email', () => {
        const email = RandomUtils.randomEmail('janak.com');
        console.log('Random email: ', email)
    });

    test('Generate random username', () => {
        const username = RandomUtils.randomUsername();
        console.log('Random username: ', username)
    });

    test('Generate random password', () => {
        const password = RandomUtils.randomPassword();
        console.log('Random password: ', password)
    });
});
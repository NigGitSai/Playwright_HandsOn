import {test,expect} from '@playwright/test';

test('Non Retrying Assertion',async({page})=>{

    expect(5).toBe(5);
    expect(5).toBeGreaterThan(3);
});
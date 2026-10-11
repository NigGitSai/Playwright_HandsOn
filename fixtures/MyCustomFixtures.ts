import {test as baseTest} from '@playwright/test';

type myFixture = {
    fixture1: any
}

export const test = baseTest.extend<myFixture>({
     fixture1: async ({}, use) => {
        const testFixtureStr = "I am fixture1";
        console.log("Before part of fixture");
        await use(testFixtureStr);
       console.log("After part of fixture");
    } 
})
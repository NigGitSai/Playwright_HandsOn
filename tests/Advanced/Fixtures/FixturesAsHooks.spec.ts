import {test,expect} from '../../../fixtures/HooksFixtures';

test('Fixtures as Hook test',async({page,loginPage})=>{
    
    await expect(page.getByRole('button', {name: 'View details for Sauce Labs Backpack'}).first()).toBeVisible();
})
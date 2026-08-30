
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe.configure({
    mode: 'serial'
});

test('Test single file upload', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    const filePath = path.join(
        process.cwd(),
        'tests',
        'FilesToUpload',
        'sample.txt'
    );

    await page.locator('#file-upload').setInputFiles(filePath);

    // await expect(page.locator('#uploaded-files'))
    //     .toHaveText('sample.txt');
});


const getFilePath = (fileName: string) => {

    return path.join(
        process.cwd(),
        'tests',
        'FilesToUpload',
        fileName
    );
};


test('Test Multiple File uploads', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    const files = [
        getFilePath('sample.txt'),
        getFilePath('sample.pdf')
    ];

    const fileChooserPromise =
        page.waitForEvent('filechooser');

    await page.locator('#drag-drop-upload').click();

    const fileChooser =
        await fileChooserPromise;

    await fileChooser.setFiles(files);
});
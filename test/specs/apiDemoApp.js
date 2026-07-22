describe('API Demo App', () => {

    it('should launch the app', async () => {

        const view=await $('~Views');
        await view.click();

        const buttons=await $('~Buttons');
        await buttons.click();

        const toggle=await $('~Toggle');
        await toggle.click();

        const onText = await $('~Toggle').getText();
        await expect(onText).toBe('ON');

    });

    // it('enter text in text field', async () => {

    //     await driver.terminateApp('io.appium.android.apis');
    //     await driver.activateApp('io.appium.android.apis');

    //     const view=await $('~Views');
    //     await view.click();

    //     const textFields=await $(
    //         'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("TextFields"))'
    //     ).click();

    //     const text = await $('id=io.appium.android.apis:id/edit');

    //     await text.click();
    //     await text.setValue('playwright test');

    //     await expect(text).toHaveText('playwright test');

    // });

});
exports.config = {
    runner: 'local',

    port: 4723,

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        
        //sauce labs app
            "platformName": "Android",
            "appium:automationName": "UiAutomator2",
            "appium:deviceName": "Pixel 4",
            "appium:appPackage": "com.saucelabs.mydemoapp.android",
            "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.MainActivity",
            "appium:noReset": true

            // settings app
                // "platformName": "Android",
                // "appium:automationName": "UiAutomator2",
                // "appium:deviceName": "Pixel 4",
                // "appium:appPackage": "com.android.settings",
                // "appium:appActivity": "com.android.settings.Settings"

                // api demo app

                    // "platformName": "Android",
                    // "appium:automationName": "UiAutomator2",
                    // "appium:deviceName": "Pixel 4",
                    // "appium:appPackage": "io.appium.android.apis",
                    // "appium:appActivity": "io.appium.android.apis.ApiDemos",
                    // "appium:noReset": true
                  
                    // amazon app

                    
                        // "platformName": "Android",
                        // "appium:automationName": "UiAutomator2",
                        // "appium:deviceName": "Pixel 4",
                        // "appium:appPackage": "in.amazon.mShop.android.shopping",
                        // "appium:appActivity": "com.amazon.mShop.home.HomeActivity",
                        // "appium:noReset": true
                      
              
          
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Capture screenshot on test failure
    afterTest: async function (test, context, { error, passed }) {

        if (!passed) {

            const timestamp = Date.now();

            await browser.saveScreenshot(
                `./screenshots/${test.title}_${timestamp}.png`
            );

            console.log('📸 Screenshot captured');
        }
    }
};
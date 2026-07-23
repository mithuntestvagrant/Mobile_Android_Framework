// pipeline {
//     agent any

//     environment {
//         PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Run Appium Tests') {
//             steps {
//                 sh 'npx wdio run wdio.conf.js --spec ./test/specs/apiDemoApp.js'
//             }
//         }

//     }
// }

// pipeline {
//     agent any

//     environment {
//         PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
//     }

//     parameters {
//         string(
//             name: 'SPEC_FILE',
//             defaultValue: './test/specs/apiDemoApp.js',
//             description: 'Enter the WebdriverIO spec file path'
//         )
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Run Appium Tests') {
//             steps {
//                 sh "npx wdio run wdio.conf.js --spec ${params.SPEC_FILE}"
//             }
//         }
//     }
// }

// pipeline {
//     agent any

//     environment {
//         ANDROID_HOME = "/Users/mithunkumarmishra/Library/Android/sdk"
//         ANDROID_SDK_ROOT = "/Users/mithunkumarmishra/Library/Android/sdk"
//         PATH = "/opt/homebrew/bin:/usr/local/bin:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/emulator:${env.PATH}"
//     }

//     parameters {
//         string(
//             name: 'SPEC_FILE',
//             defaultValue: './test/specs/apiDemoApp.js',
//             description: 'Enter the WebdriverIO spec file path'
//         )
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Verify Android SDK') {
//             steps {
//                 sh '''
//                 which adb
//                 which emulator
//                 adb version
//                 emulator -list-avds
//                 '''
//             }
//         }

//         stage('Start Android Emulator') {
//             steps {
//                 sh '''
//                 emulator -avd Pixel_4 > emulator.log 2>&1 &
//                 adb wait-for-device

//                 while [ "$(adb shell getprop sys.boot_completed | tr -d '\r')" != "1" ]; do
//                     sleep 5
//                 done

//                 adb devices
//                 '''
//             }
//         }

//         stage('Start Appium Server') {
//             steps {
//                 sh '''
//                 appium > appium.log 2>&1 &
//                 sleep 10
//                 '''
//             }
//         }

//         stage('Run Appium Tests') {
//             steps {
//                 sh "npx wdio run wdio.conf.js --spec ${params.SPEC_FILE}"
//             }
//         }
//     }
// }

pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/Users/mithunkumarmishra/Library/Android/sdk/platform-tools:/Users/mithunkumarmishra/Library/Android/sdk/emulator:${env.PATH}"
    }

    parameters {
        string(
            name: 'SPEC_FILE',
            defaultValue: './test/specs/apiDemoApp.js',
            description: 'Enter the WebdriverIO spec file path'
        )
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Emulator & Appium') {
            steps {
                sh '''
                emulator -avd Pixel_4 &
                sleep 30

                appium &
                sleep 10
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx wdio run wdio.conf.js --spec ${params.SPEC_FILE}"
            }
        }
    }
}
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

pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
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

        stage('Start Android Emulator') {
            steps {
                sh '''
                echo "Starting Android Emulator..."

                emulator -avd Pixel_4 > emulator.log 2>&1 &

                adb wait-for-device

                echo "Waiting for emulator to boot..."

                while [ "$(adb shell getprop sys.boot_completed | tr -d '\r')" != "1" ]; do
                    sleep 5
                done

                echo "Emulator Started Successfully"

                adb devices
                '''
            }
        }

        stage('Start Appium Server') {
            steps {
                sh '''
                echo "Starting Appium Server..."

                appium > appium.log 2>&1 &

                sleep 10
                '''
            }
        }

        stage('Run Appium Tests') {
            steps {
                sh "npx wdio run wdio.conf.js --spec ${params.SPEC_FILE}"
            }
        }
    }
}
pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
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

        stage('Run Appium Tests') {
            steps {
                sh 'npx wdio run wdio.conf.js --spec ./test/specs/apiDemoApp.js'
            }
        }

    }
}
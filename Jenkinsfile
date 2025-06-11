pipeline{
    agent any
    tools{
        jdk 'jdk17'
    }
    environment {
        SCANNER_HOME=tool 'sonar-scanner'
    }
    stages {
        stage('clean workspace'){
            steps{
                cleanWs()
            }
        }
        stage('Checkout from Git'){
            steps{
                git branch: 'dev', url: 'https://github.com/aakashbshendage/robot-store-deployment.git'
            }
        }
        stage("Sonarqube Analysis "){
           steps{
               withSonarQubeEnv('sonar-server') {
                   sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Roboshop \
                   -Dsonar.projectKey=Roboshop '''
               }
           }
        }
    }
}

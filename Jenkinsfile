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
        stage("quality gate"){
           steps {
                script {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar-server' 
                }
            } 
        }
        stage("Docker Build & Push"){
            steps{
                script{
                   withDockerRegistry(credentialsId: 'docker', toolName: 'docker'){   
                       sh "docker build -t roboshop ."
                       sh "docker tag roboshop aakash3902/roboshop:latest "
                       sh "docker push aakash3902/roboshop:latest "
                    }
                }
            }
        }
		stage('Deploy to container'){
            steps{
                sh 'docker run -d --name roboapp -p 80:80 aakash3902/roboshop:latest'
            }
        }

    }
}
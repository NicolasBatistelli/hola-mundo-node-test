pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Verificar node.js') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Correr tests') {
            steps {
                sh 'npx jest'
            }
        }
        stage('Construir la imagen de Docker'){
            steps{
                script{
                    sh 'docker build -t app-node:latest .'
                }
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Haciendo el deploy'
                sh 'docker stop app-node || true'
                sh 'docker rm app-node || true'
                sh 'docker run -d -p 3000:3000 --name app-node app-node:latest'
            }
        }
    }
    post {
        success {
            echo 'Pipeline ejecutado correctamente'
        }
        failure {
            echo 'Pipeline fallido'
        }
    }
}

pipeline {
    agent { docker { image 'node:6.3' } }
    options { 
      skipDefaultCheckout() 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}

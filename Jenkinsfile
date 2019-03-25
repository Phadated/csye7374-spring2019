pipeline{
  agent any
  options { 
      skipDefaultCheckout() 
  }
  
  stages {
    
    stage('Clone sources') {
      steps {
      checkout scm
    }
    }
    
    stage('Ansible Init') {
            steps {
                script {
                sh "pwd"
                sh "kubectl version"
                sh "ansible --version"
                sh "docker --version"
                sh "aws --version"
                sh "docker run hello-world"
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        
        dir("webapp") {
           sh "echo ${workspace}"
           sh " docker build -t csye7374 ."
           sh "$(aws ecr get-login --no-include-email --region us-east-1)"
           sh ""       
        }
      }    
    }
    
    stage('deploy'){
      steps {
        sh "echo ${workspace}"
        sh "ansible-playbook ${workspace}/ansible/.yml"
        sh "ansible-playbook ${workspace}/ansible/pushimage.yml"
      }    
    }
   
  }
     
}

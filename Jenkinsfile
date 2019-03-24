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
                sh "ps aux"
                sh "docker run hello-world"
                
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        sh "echo ${workspace}"
        sh "ansible-playbook ${workspace}/ansible/buildimage.yml"
        sh "ansible-playbook ${workspace}/ansible/pushimage.yml"
      }    
    }
   
  }
     
}

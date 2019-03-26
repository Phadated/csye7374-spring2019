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
                sh "docker run hello-world"
                sh "kubectl cluster-info"
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        
        dir("webapp") {
           sh "echo ${workspace}"
           sh " docker build -t csye7374 ."
         
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

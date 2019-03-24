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
    
    stage('Preparation') {
      //Installing kubectl in Jenkins agent
      
       steps {
      sh "curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
  sh "chmod +x ./kubectl && mv kubectl /usr/local/sbin"
    }
      
   }
    
    stage('Ansible Init') {
            steps {
                script {
                
                sh "pwd"
                sh "kubectl version"
                sh "ansible --version"
                
                    
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

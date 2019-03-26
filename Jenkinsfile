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
                sh 'kubectl set image deployment csye7374-assign3-rc csye7374=432688518933.dkr.ecr.us-east-1.amazonaws.com/csye7374:latest'
                    
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

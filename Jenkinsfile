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
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        
        dir("webapp") {
           sh "echo ${workspace}"
          
          //cleanup current user docker credentials
       sh 'rm  ~/.dockercfg || true'
       sh 'rm ~/.docker/config.json || true'

       //configure registry
       docker.withRegistry('https://432688518933.dkr.ecr.us-east-1.amazonaws.com/csye7374', 'ecr:--1:66f2aa57-888d-43db-9b1d-f115a6a30491') {
           docker.build('csye7374')
           
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

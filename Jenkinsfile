pipeline{
  agent any
  tools {ansible "ansible"}
  options { 
      skipDefaultCheckout() 
  }
  
  stages {

    stage('Clone sources') {
      steps {
       checkout scm
    }
    }
    

    
    stage('Docker Build, Push'){
      steps {
        dir("ansible") {
        sh 'ls'
        sh 'apt-get install ansible'
        sh 'ansible --version'
        ansiblePlaybook(playbook : 'buildimage.yml')
        ansiblePlaybook(playbook : 'pushimage.yml')
          
        }
      }    
    }
   
  }
     
}

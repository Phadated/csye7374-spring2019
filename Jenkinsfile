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
    

    
    stage('Docker Build, Push'){
      steps {
        dir("ansible") {
        ansiblePlaybook('buildimage.yml') {
        ansibleName('1.9.4')  
    }
        ansiblePlaybook(playbook : 'buildimage.yml')
        ansiblePlaybook(playbook : 'pushimage.yml')
          
        }
      }    
    }
   
  }
     
}

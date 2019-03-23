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
        
        ansiblePlaybook('${workspace}/buildimage.yml') 
       
      }    
    }
   
  }
     
}

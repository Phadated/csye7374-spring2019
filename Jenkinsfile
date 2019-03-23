pipeline{
  agent any
  options { 
      skipDefaultCheckout() 
  }
  
  stages {

    stage('Docker Build, Push'){
      steps {
        
        ansiblePlaybook('${workspace}/buildimage.yml') 
       
      }    
    }
   
  }
     
}

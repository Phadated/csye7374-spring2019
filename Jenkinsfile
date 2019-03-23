pipeline{
  agent any
  options { 
      skipDefaultCheckout() 
  }
  
  
  
  stages {
    
    stage('Clone sources') {
      steps {
      checkout([$class: 'GitSCM', branches: [[name: 'refs/heads/Assignment_5']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'a816ea52-c260-4db4-b181-e96a012c2103', url: 'https://github.com/Phadated/csye7374-spring2019']]])
    }
    }

    stage('Docker Build, Push'){
      steps {
        sh "echo ${workspace}"
        sh "ansible-playbook ${workspace}/buildimage.yml "
       
      }    
    }
   
  }
     
}

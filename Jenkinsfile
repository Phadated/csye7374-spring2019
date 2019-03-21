pipeline{
  agent any
  
  stages {

    stage('Clone sources') {
      steps {
        checkout scm
    }
    }
    stage('Docker Build, Push'){
      steps {
        ansiblePlaybook('/home/jenkins/workspace/Ganesha/ansible/buildimage.yml')
        ansiblePlaybook('/home/jenkins/workspace/Ganesha/pushimage.yml')

      }    
    }
   
  }
     
}

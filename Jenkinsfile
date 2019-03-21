pipeline{
  agent any
  
  stages {

    stage('Clone sources') {
      steps {
        git url: 'https://github.com/krishjain4894/csye7374-spring2019.git'
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

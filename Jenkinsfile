pipeline{
  agent any
  
  stages {

    stage('Clone sources') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'a4a5e7a3-014a-4846-96be-23e14b530b9a', url: 'https://github.com/krishjain4894/csye7374-spring2019.git']]])
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

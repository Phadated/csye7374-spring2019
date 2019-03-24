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
                def tfHome = tool name: 'docker'
                sh "cd /usr/bin/"
                sh "tar -xvf ${tfHome}"
                sh "docker --version"
                sh "echo $tfHome"
                sh "pwd"
                sh "ansible --version"
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        sh "echo ${workspace}"
        sh "ansible-playbook ${workspace}/ansible/buildimage.yml"
        sh "ansible-playbook ${workspace}/ansible/pushimage.yml"
      }    
    }
   
  }
     
}

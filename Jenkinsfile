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
                
               def tfHome = tool name: 'ansible'
                env.PATH = "${tfHome}:${env.PATH}"
                 sh "pwd"
                 sh "echo $tfHome"
                  sh "ansible --version"
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        sh "echo ${workspace}"
        sh "ansible-playbook ${workspace}/ansible/buildimage.yml"
      }    
    }
   
  }
     
}

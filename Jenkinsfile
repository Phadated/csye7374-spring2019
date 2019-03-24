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
                sh "pwd"
                sh "kubectl version"
                sh "ansible --version"
                sh "docker --version"
                sh "docker run hello-world"
                    
            }
            }
        }

    stage('Docker Build, Push'){
      steps {
        
        dir("webapp") {
           sh "echo ${workspace}"
          
          //cleanup current user docker credentials
       sh 'rm  ~/.dockercfg || true'
       sh 'rm ~/.docker/config.json || true'
        docker.build('csye7374')
       
        }
      }    
    }
    
    stage('deploy'){
      steps {
        sh "echo ${workspace}"
        sh "ansible-playbook ${workspace}/ansible/.yml"
        sh "ansible-playbook ${workspace}/ansible/pushimage.yml"
      }    
    }
   
  }
     
}

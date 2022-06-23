pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          labels:
            some-label: some-label-value
        spec:
          containers:
          - name: node
            image: node:18.4.0
            command:
            - cat
            tty: true
        '''
    }
  }
  stages {
    stage('Git clone'){
      steps {
        checkout scm
      }
    }
    stage('Create docker image') {
      steps {
        container('node') {
          sh """        
            npm config set registry https://lib.matador.ais.co.th/repository/npm/
            npm install --verbose
            npm -v
            node -v
          """
        }
      }
    }
  }
}

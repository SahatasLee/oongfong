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
    stage('Create docker image') {
      when {
        tag "test-*"
      }
      steps {
        container('node') {
            echo 'test tag 004'
          sh """        
            npm config set registry https://lib.matador.ais.co.th/repository/npm/
            npm install --verbose
            npm -v
            node -v
          """
        }
      }
    }
    stage('npm build') {
        steps {
            container('node') {
                echo 'npm build'
                sh 'npm run build'
            }
        }
    }
    stage('zip') {
        steps {
            script{
                zip dir: './build', exclude: '', glob: '', zipFile: 'built'
            }
        }
    }
    // stage('publish'){
    //     steps {
    //         nexusPublisher nexusInstanceId: 'devops-releases', 
    //         nexusRepositoryId: 'devops-releases', 
    //         packages: [[$class: 'MavenPackage', mavenAssetList: [[classifier: '', extension: '', filePath: './built']], 
    //         mavenCoordinate: [artifactId: 'frontend', groupId: 'devops.frontend', packaging: 'zip', version: '1.0.0-20220613']]]
    //     }
    // }
  }
}

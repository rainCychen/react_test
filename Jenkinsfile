pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // configId 即为之前配置的npm配置文件
                nodejs('node15') {
                    // npm 编译安装
                    sh 'npm install && npm run build'
                }
            }
        }
    }
    
}
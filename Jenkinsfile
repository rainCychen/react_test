pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // configId 即为之前配置的npm配置文件
                nodejs(nodeJSInstallationName:'node15',configId: '4cc358a9-1ab7-446a-b082-bea43bc6c774') {
                    // npm 编译安装
                    sh 'npm install && npm run build'
                }
            }
        }
        stage('deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: "${ali13}", transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/usr/local/nginx/html/jenkinsTest', remoteDirectorySDF: false, removePrefix: 'build', sourceFiles: 'build/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
                
        }
    }
    
}
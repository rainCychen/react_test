pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // configId 即为之前配置的npm配置文件
                nodejs(nodeJSInstallationName:'node15',configId: '3b4e09b5-0989-4940-80b6-5ce1c67e2b12') {
                    // npm 编译安装
                    sh 'npm install && npm run build'
                }
            }
        }
        stage('deploy') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: "ali13", transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: './test2', remoteDirectorySDF: false, removePrefix: 'build', sourceFiles: 'build/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
                
        }
    }
    
}
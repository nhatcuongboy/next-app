pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo yarn"
                sh "sudo yarn build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /usr/share/nginx/html/next-app"
                sh "sudo cp -r ${WORKSPACE}/out/ /usr/share/nginx/html/next-app/"
            }
        }
    }
}
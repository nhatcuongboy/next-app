pipeline {
     agent any
     environment {     
        DOCKERHUB_CREDENTIALS= credentials('cb7dd0ab-e993-42ab-aac3-b25173580012');
        DOCKERHUB_REPOSITORY= 'next-app'
        DOCKER_CONTAINER_NAME= 'next-app-container'     
     }  
     stages {
        // stage("Build") {
        //     steps {
        //         sh "sudo yarn"
        //         sh "sudo yarn build"
        //     }
        // }
        // stage("Deploy") {
        //     steps {
        //         sh "sudo rm -rf /usr/share/nginx/html/next-app"
        //         sh "sudo cp -r ${WORKSPACE}/out/ /usr/share/nginx/html/next-app/"
        //     }
        // }
        stage('Build docker image') {
            steps {
                // sh 'sudo docker build -t $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER --build-arg version_info=$BUILD_NUMBER .'
                sh 'sudo docker build -t $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER .'
                echo 'Build Image Completed'
            }
        }
        stage('Login to Docker Hub') {         
          steps {                             
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                 
            echo 'Login Completed'                
          }           
        }               
        stage('Push Image to Docker Hub') {         
          steps {    
            // sh 'sudo docker tag $DOCKERHUB_REPOSITORY:$BUILD_NUMBER $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER'                        
            sh 'sudo docker push $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER'
            // sh 'sudo docker rmi $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER'                 
            echo 'Push Image Completed'       
          }           
        }   
        // stage('Pull Image from Docker Hub') {         
        //   steps {    
        //     sh 'sudo docker pull $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER'
        //     echo 'Pull Image Completed'       
        //   }           
        // }   
        stage('Run Docker Image') {         
          steps {    
            sh 'sudo docker stop $DOCKER_CONTAINER_NAME || true'
            sh 'sudo docker run --name $DOCKER_CONTAINER_NAME -d -p 3003:3000 --rm $DOCKERHUB_CREDENTIALS_USR/$DOCKERHUB_REPOSITORY:$BUILD_NUMBER'                 
            // sh 'sudo docker system prune -f'
            // sh 'sudo docker image prune -a -f'
            echo 'Run Image Completed'       
          }           
        }     
    }
    post {
        always {  
            sh 'docker logout'           
        }      
    }  
}
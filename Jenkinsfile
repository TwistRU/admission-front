pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"
    }

    stages {
        stage("Build master") {
            when {
                branch 'master'
            }
            environment {
                FRONTEND_PORT = "3000"
                FRONTEND_ENV_ID = 'env-prod' // env-prod
            }
            steps {
                buildFrontend(FRONTEND_ENV_ID)
                deployFrontend()
            }
        }
    }
}

def deployFrontend() {
    echo "Stopping previous container..."
    sh "docker-compose down"
    echo "Deploying..."
    sh "docker-compose up -d"
    echo "Deployed!"
}

def buildFrontend(envID) {
    withCredentials([
        file(credentialsId: envID, variable: 'REACT_APP_I18N_LOCALE'),
    ]) {
        echo "Creating .env"
        sh "rm -f .env"
        sh "cp $REACT_APP_I18N_LOCALE .env"
    }
    echo "Building..."
    sh "docker-compose build"
    echo "Built!"
}
@Library(["test@develop", "cache", "sonar"]) _

// Some things need to be changed in this Jenkinsfile for it to work:
// - Use a node label of a node with nodejs 10, java and docker installed
// - Look for the withCredentials tags and change the ids to credentials setted in your jenkins:
//      - bot-artifactory-npm = a .npmrc file configured for artifactory
//      - bot-testing-art = user/password credential for artifactory
//      - bot-saucelabs = user/password for saucelabs
//      - test-manager-url = a text credential with the test-manager url in the form https://user:password@globaldevtools.bbva.com/test-manager-api/
// Also review the info in the comments in the runTest block

pipeline {
    agent { 		
        kubernetes {
            defaultContainer "maven-testing"
			yamlFile "build-pod.yaml"
		} 
    }

    options {
        ansiColor colorMapName: 'XTerm'
        buildDiscarder(logRotator(numToKeepStr: '30', artifactNumToKeepStr: '5'))
        disableConcurrentBuilds()
    }

    environment {
        cacheKey = "cache-tests-node-pruebas-proyecto-personal"
        projectName = sh(script: "npm run --silent info:name", returnStdout: true).trim();
        
    }

    stages {
        stage("Initialize") {
            steps {
                withCredentials([file(credentialsId: 'bot-artifactory-npm', variable: 'NPMRC')]) {
                    sh "cp \${NPMRC} .npmrc"
                }
            }
        }

        stage("Install") {
            steps {
                downloadCache key: "${cacheKey}", destPath: "."
                
                sh "npm i"
            }
        }

        stage("Quality Code"){
            steps {
                sonar([
                    qualityProfile: 'Testing',
                    qualityGate: 'Testing',
                    waitForQualityGate: true,
                    blockWhenHaveNotCompliance: true
                ]) {
                    sh "npm run sonar"
                }
            }
        }

        

        stage("Test") {
            steps {
                runTests([
                    context: [
                        //The test-manager namespace. You can use this one for testing
                        namespace: 'test',
                        application: projectName,
                        testManagerCredentials: 'test-manager-url',
                        saucelabsCredentials: 'bot-saucelabs',
                        artifactoryNpmCredentials: 'bot-artifactory-npm',
                    ],
                    tests: [
                        [
                            type: 'e2e',
                            //Set the environment name of your choice
                            environment: 'work',
                            runner: { ctx ->
                               sh "npm run test:all"
                            },
                            results: [
                                attachments: [
                                    "results/*"
                                ],
                                pattern: "results/*-testsuite.xml"
                            ]
                        ]
                    ]
                ])
            }
        }

        
    }

    post {
        always {
            uploadCache key:"${cacheKey}", paths: ["node_modules"]
            
        }
    }
}

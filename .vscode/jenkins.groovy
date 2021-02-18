stage('Build'){
    sh ‘docker-compose –f build-compose.yml run –rm compile’
}
stage('run test') {
  parallel {
   stage('tester A') {
    steps {
     sh "npm run cy:run:parallel"
    }
   }
   // second tester runs the same command
   stage('tester B') {
    steps {
     sh "npm run cy:run:parallel"
    }
   }
   // third tester runs the same command
   stage('tester C') {
    steps {
     sh "npm run cy:run:parallel"
    }
   }
   // fourth tester runs the same command
   stage('tester D') {
    steps {
     sh "npm run cy:run:parallel"
    }
   }
  }
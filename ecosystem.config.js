module.exports = {
    apps: [{
      name: 'aws-deploy',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-220-189-138.us-east-2.compute.amazonaws.com',
        key: '~/aws_golang_test/ec2-golang.pem',
        ref: 'origin/master',
        repo: 'https://github.com/Yosua1011/aws-deploy.git',
        path: '/home/ubuntu/deploy',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
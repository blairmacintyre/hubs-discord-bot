module.exports = {
    apps: [{
      name: 'blairsworld-server',
      script: './src/index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-35-171-0-37.compute-1.amazonaws.com',
        key: '~/.ssh/blairs-home-on-the-web.pem',
        ref: 'origin/blairworld-server',
        repo: 'git@github.com:blairmacintyre/hubs-discord-bot.git',
        path: '/home/ubuntu/hubs-discord-bot-and-server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
  
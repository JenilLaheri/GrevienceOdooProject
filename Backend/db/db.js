const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tusharvaghasiya:tushar123@cluster0.zjqvfqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ogss')
    .then(e => {
        console.log("db Connect")
    })
    .catch((e) => {
        console.log("Error is :  ", e)
    })


// const githubToken = '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'; // Replace with your GitHub access token
// const githubUsername = 'TusharV27'; // Replace with your GitHub username
// const githubRepoName = 'PDF'; // Replace with your GitHub repository name
// const githubApiUrl = `https://api.github.com/repos/${githubUsername}/${githubRepoName}`;
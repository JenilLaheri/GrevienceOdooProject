const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const axios = require('axios');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const githubToken = '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'; // Replace with your GitHub access token
const githubUsername = 'TusharV27'; // Replace with your GitHub username
const githubRepoName = 'pdf'; // Replace with your GitHub repository name
const githubApiUrl = `https://api.github.com/repos/${githubUsername}/${githubRepoName}`;

router.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        // Ensure file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'No PDF file uploaded' });
        }

        // Upload file to GitHub
        const { originalname, buffer } = req.file;
        const response = await axios.post(
            githubApiUrl,
            {
                message: 'Add new PDF file',
                content: buffer.toString('base64'),
            },
            {
                headers: {
                    Authorization: `token ${githubToken}`,
                },
            }
        );

        // Check if GitHub API response contains expected data
        if (response.data && response.data.content && response.data.content.html_url) {
            // Store PDF URL in MongoDB
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                pdfUrl: response.data.content.html_url,
            });
            await newUser.save();

            return res.status(201).json({ message: 'PDF uploaded successfully', pdfUrl: newUser.pdfUrl });
        } else {
            // Handle unexpected GitHub API response
            console.error('Unexpected response from GitHub API:', response.data);
            return res.status(500).json({ error: 'Failed to upload PDF: Unexpected GitHub API response' });
        }
    } catch (error) {
        console.error('Error uploading PDF:', error);
        return res.status(500).json({ error: 'Failed to upload PDF' });
    }
});

module.exports = router;

import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', async (req, res) => {
    const { repoUrl } = req.query;

    try {
        // Fetch the repository or folder from the provided URL
        const response = await fetch(repoUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch repository: ${response.statusText}`);
        }

        // Convert the response body to a buffer
        const buffer = await response.buffer();

        // Set the appropriate headers for the response
        res.setHeader('Content-Disposition', 'attachment; filename="repository.zip"');
        res.setHeader('Content-Type', 'application/zip');

        // Send the buffer as the response
        res.send(buffer);
    } catch (error) {
        console.error('Error downloading repository:', error);
        res.status(500).send({ error: 'Failed to download repository.' });
    }
});

export default router;

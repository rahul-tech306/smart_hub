const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 6000;

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';  // Replace with your MongoDB connection string
const dbName = 'RAHULVENNU';

async function getWorkers() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection('workers');  // Assuming your workers' data is in 'workers' collection

        // Fetch workers' data
        const workers = await collection.find({}).toArray();
        return workers;
    } finally {
        // Close the connection
        await client.close();
    }
}

app.get('/workers', async (req, res) => {
    try {
        const workers = await getWorkers();
        res.json(workers);  // Sending workers data as JSON to the frontend
    } catch (error) {
        console.error("Error fetching workers' data:", error);
        res.status(500).send("Error fetching workers' data");
    }
});

app.listen(port, () => {
    console.log(`Customer server listening at http://localhost:${port}`);
});

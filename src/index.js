import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file and directory names using ES module's import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

// TODO: Serve static files from the 'public' directory
app.use('/', express.static(path.join(__dirname, 'public')));

// TODO: Handle the root route with a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// TODO: Start the server and listen on the specified port and hostname
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

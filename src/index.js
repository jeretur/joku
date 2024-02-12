// src/index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getItems, getItemById, createItem, deleteItemById } from './items.mjs';
import { createUser, getUserById, loginUser, getUsers } from './users.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to my REST API!');
});

app.get('/items', getItems);

// GET /items/:id
app.get('/items/:id', getItemById);

// POST /items
app.post('/items', createItem);

// DELETE /items/:id
app.delete('/items/:id', deleteItemById);

// GET /users
app.get('/users', getUsers);

// POST /users
app.post('/users', createUser);

// GET /users/:id
app.get('/users/:id', getUserById);

// POST /login
app.post('/login', loginUser);

console.log('Server is starting...');
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

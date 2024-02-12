// items.mjs
const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    // Add more items as needed
];

const getItems = (req, res) => {
    console.log('Items:', items); // Add this line for debugging
    res.json(items);
};

const getItemById = (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find((item) => item.id === itemId);

    console.log('Request received for item with id:', itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
};

const createItem = (req, res) => {
    const newItem = req.body; // Assuming you're sending the new item data in the request body
    console.log('Received data:', newItem);
    items.push(newItem);
    res.status(201).json(newItem);
};

const deleteItemById = (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = items.findIndex((item) => item.id === itemId);

    if (index !== -1) {
        const deletedItem = items.splice(index, 1)[0];
        res.json({ message: 'Item deleted successfully', deletedItem });
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
};

export { getItems, getItemById, createItem, deleteItemById };

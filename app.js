const express = require('express');
const app = express();
const PORT = 3000;

//Middlewatre to parse incoming JSON reqests
app.use(express.json());

let books = [
    { id: 1, title: 'book1', author: 'Piyush', year: 2015 },
    { id: 2, title: 'book2', author: 'author2', year: 1985 },
    { id: 3, title: 'book3', author: 'author3', year: 2002 }
]

// List all books [METHOD=GET PATH=/books  STATUS_CODE=200]
app.get('/books', (req, res) => {
    res.status(200);
    res.json(books);
});

// Get a specific book [METHOD=GET PATH=/books/:bookId  STATUS_CODE=200]
app.get('/books/bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
});

// Create a book [METHOD=POST PATH=/books  STATUS_CODE=201]
app.post('/books', (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = {
        id: books.length + 1, // Simple ID generation (can be replaced with more sophisticated logic)
        title,
        author,
        year
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Put a book [METHOD=PUT PATH=/books/:bookId  STATUS_CODE=200/204]
app.put('/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const { title, author, year } = req.body;

    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    if (!title || !author || !year) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    books[bookIndex] = { id: bookId, title, author, year };
    res.status(200).json(books[bookIndex]);
});

// Delete a book [METHOD=DELETE PATH=/books/:bookId  STATUS_CODE=200/204]
app.delete('/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(bookIndex, 1);
    res.status(204).send(); // 204 No Content - successfully deleted
});

app.listen(PORT, () => {
    console.log(`My server is listening to PORT ${PORT}`);
})


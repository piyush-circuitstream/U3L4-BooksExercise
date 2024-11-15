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
app.get('/books/:bookId', (req, res) => {

});

// Create a book [METHOD=POST PATH=/books  STATUS_CODE=201]
app.post('/books/:bookId', (req, res) => {

});

// Put a book [METHOD=PUT PATH=/books/:bookId  STATUS_CODE=200/204]
app.put('/books/:bookId', (req, res) => {

});

// Delete a book [METHOD=DELETE PATH=/books/:bookId  STATUS_CODE=200/204]
app.delete('/books/:bookId', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`My server is listening to PORT ${PORT}`);
})


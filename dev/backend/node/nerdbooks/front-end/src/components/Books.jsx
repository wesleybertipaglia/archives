import React, { useEffect, useState } from 'react';

const NerdBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/books'); 
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
            <div>
                <li key={book.id}>
                    <strong>{book.title}</strong> by {book.author}
                </li>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default NerdBooks;

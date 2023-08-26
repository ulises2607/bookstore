import BookList from "./BookList";
import AddBok from "./AddBook";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BooksLogic = () => {

    const [books, setBooks] = useState([
        {
            id: 1,
            category: 'Action',
            title: 'The Hunger Games',
            author: 'Susane Collins',
            progress: 64,
            chapter: 'Chapter 17',
        },
        {
            id: 2,
            category: 'Science Fiction',
            title: 'Dune',
            author: 'Frank Herbert',
            progress: 8,
            chapter: 'Chapter 3: "A Lesson Learned"',
        },
        {
            id: 3,
            category: 'Economy',
            title: 'Capital in the Twenty-First Century',
            author: 'Susane Collins',
            progress: 0,
            chapter: 'Introduccion',
        }
    ])

    const addBookCard = (title, category) => {
        const newBook = {
            id: uuidv4(),
            title: title,
            category:category,
            author: 'Author-example',
            progress: 0,
            chapter: '-',
        };
        setBooks([...books, newBook])
    }

    const deleteBookCard = (id) => {
        setBooks([
            ...books.filter((book) => {
                return book.id !== id
            })
        ])
    }

    return (
        <div className="books-container">
            <div>
                <BookList booksProps={books} setBooks= {setBooks} deleteBookCard={deleteBookCard}/>
            </div> 
            <div className="addbook-section">
                <AddBok addBookCard={addBookCard}/>
            </div>
        </div>
    )
}

export default BooksLogic;
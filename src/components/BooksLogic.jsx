import BookList from "./BookList";
import AddBok from "./AddBook";
import { useState } from "react";

const BooksLogic = () => {

    const [books, setBooks] = useState([
        {
            id: 1,
            category: 'Action',
            title: 'The Hunger Games',
            author: 'Susane Collins',
            progress: 64,
            chapter: 17,
        },
        {
            id: 2,
            category: 'Science Fiction',
            title: 'Dune',
            author: 'Frank Herbert',
            progress: 8,
            chapter: 3,
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

    return (
        <div className="books-container">
            <div>
                <BookList booksProps={books} setBooks= {setBooks}/>
            </div> 
            <div className="addbook-section">
                <AddBok />
            </div>
        </div>
    )
}

export default BooksLogic;
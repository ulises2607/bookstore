import { useState } from "react";
import '../styles/AddBook.css'

const AddBok = ({addBookCard}) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addBookCard(title,category);
            setTitle('');
            console.log('Added correctly, book; ',title);
          } else {
            console.log('Please add item');
          }

    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }


    return (
        <>
        <div className="addbook-container">
            <h2 className="addbook-title">ADD NEW BOOK</h2>
            <form className="form-book">
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    placeholder="Book title"
                    className="input-book"/>
                <select className="category-input" onChange={handleChangeCategory}>
                    <option value="action">Action</option>

                    <option value="science-fiction">Science Fiction</option>

                    <option value="economy">Economy</option>
                </select>
                <button
                    type="submit"
                    className="btn-addbook"
                    onClick={handleSubmit}>
                    ADD BOOK
                    </button>
            </form>
        </div>
        </>
        
    )
}

export default AddBok;
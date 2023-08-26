import { useState } from "react";

const AddBok = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        console.log(category);

    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }


    return (
        <>
        <h2>Add New Book</h2>
        <form className="form-book">
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Book title"
                className="input-book"/>
            <select onChange={handleChangeCategory}>
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
        </>
        
    )
}

export default AddBok;
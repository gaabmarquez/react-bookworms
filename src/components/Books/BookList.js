import React from 'react';
import { Link } from "react-router-dom";
import './BookList.scss'

export default function BookList({ books = [] }) {

    const trimBookName = (value, limit = 60) => {
        if (value.length > limit + 3)
            return value.toString().substring(0, limit - 3) + "...";

        return value;
    }

    return (
        <>
            <h1 className="mb-4">
                My books
            </h1>

            <div className="books-container ">

                <div className="card book-card">
                    <div className="book-info-container ">

                        <div className="card-body mt-4 ">
                            <div className="img-container add-new-container">
                                <i className="fas fa-book-open fa-10x"></i>
                            </div>

                            <h5 className="book-name">Add new book</h5>
                            <p className="author mb-4">
                                <b>
                                    Click the button below to add a new book
                                 </b>
                            </p>
                        </div>
                    </div>


                    <div className="notes-container">
                        <Link to="books" className="btn btn-action view-notes">
                            Add a new book
                      </Link>
                    </div>
                </div>


                {books.map((book) => (
                    <div key={book.id} className="card book-card">
                        <div className="book-info-container">
                            <div className="img-container mb-4 d-flex justify-content-center">
                                <img className="card-img-top pointer" src={book.img} alt="Card cap" />
                            </div>
                            <div className="card-body mt-4">
                                <h5 className="book-name">{trimBookName(book.name)}</h5>
                                <p className="author mb-4">
                                    <b>
                                        Author:
                                         </b>
                                    {book.author}
                                </p>
                            </div>
                        </div>

                        <div className="notes-container">

                            <Link to={`books/${book.id}`} className="btn btn-action view-notes">
                                View notes and words
                      </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

import React from 'react'
import BookList from './BookList'

export default function BookPage() {
    const books = [
        {
            id: "1",
            name: "Lean Startup",
            author: "Eric Ries",
            img: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
            notes: `Eric Ries is an entrepreneur and author of the popular blog Startup Lessons Learned. He co-founded and served as CTO of IMVU, his third startup,  and has had plenty of startup failures along the way. He is a frequent speaker at business events, has advised a number of startups, large companies, and venture capital firms on business and product strategy, and is an Entrepreneur-in-Residence at Harvard Business School. His Lean Startup methodology has been written about in the New York Times, the Wall Street Journal, the Harvard Business Review, the Huffington Post, and many blogs. He lives in San Francisco.`
        },
        {
            id: "2",
            name: "Zero To One",
            author: "Peter Thiel",
            img: "https://images-na.ssl-images-amazon.com/images/I/51JkDEpHUQL._SX317_BO1,204,203,200_.jpg"
        },
        {
            id: "3",
            name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future ",
            author: "Ashlee Vance",
            img: "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
        },
        {
            id: "4",
            name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future- THe fantastic book about cool stuff",
            author: "Ashlee Vance",
            img: "https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg"
        }
    ];
    return (
        <div>
            <BookList books={books} />
        </div>
    )
}

import React from "react";
import axios from "axios";

function saveBook(book) {
    axios.post("/api/saveVisits", book).then(console.log('set state as saved'))
}

function Display(props) {
    return (
        <div className="card">
            {props.results.map(result => (
                <div className='text' key={result.id}>
                    <h5 className="card-header">{result.volumeInfo.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{result.volumeInfo.authors[0]}</h5>
                        <p className="card-text">{result.volumeInfo.description}</p>
                    </div>

                    <a href={result.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">See More</a>
                    <button onClick={() => {
                        saveBook({
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors[0],
                            description: result.volumeInfo.description,
                            infoLink: result.volumeInfo.infoLink

                        })
                    }} className="btn btn-outline-dark">Save</button>
                </div>
            ))}

        </div>
    )
}
export default Display
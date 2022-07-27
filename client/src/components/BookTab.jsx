import React from "react";
import { serverUrlWithImage } from "../constants/serverUrl";
import { Link } from "react-router-dom";

function BookTab(props) {
  const { bookData } = props;
  const bookId = bookData._id;

  return (
    <div className="d-flex flex-row my-4 border border-secondary overflow-hidden rounded-4 shadow">
      <div className="flex-2">
        <img
          src={serverUrlWithImage + `/${bookId}.${bookData.coverFileType}`}
          alt="book_cover"
          className="img-fluid"
          style={{ maxWidth: 150 }}
        />
      </div>

      <div className="flex-8 d-flex flex-column justify-content-center px-4">
        <div>
          <Link to={`/book/${bookId}`}>
            <h4 className="bookTabTitle">{bookData.title}</h4>
          </Link>
          <h5 className="bookTabPublish">
            {bookData.publication || "Unknown Publication"}
          </h5>
        </div>

        <div>
          <h4 className="bookTabAuthor">{bookData.author}</h4>
        </div>

        <div className="d-flex flex-row">
          {bookData.publishYear !== 0 && (
            <div style={{ marginRight: "1rem" }}>{bookData.publishYear}</div>
          )}

          <div>{bookData.category}</div>
        </div>
      </div>
    </div>
  );
}

export default BookTab;

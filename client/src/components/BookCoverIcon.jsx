import React from "react";
import { serverUrlWithImage } from "../constants/serverUrl";
import { Link } from "react-router-dom";

function BookCoverIcon(props) {
  const { bookId, coverFileType } = props;

  return (
    <Link to={`/book/${bookId}`}>
      <img
        src={serverUrlWithImage + `/${bookId}.${coverFileType}`}
        alt="book_cover"
        className="img-fluid"
        style={{ maxWidth: 250, maxHeight: 300 }}
      />
    </Link>
  );
}

export default BookCoverIcon;

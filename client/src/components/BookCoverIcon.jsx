import React from "react";
import { serverUrlWithImage } from "../constants/serverUrl";

function BookCoverIcon(props) {
  const { bookId, coverFileType } = props;

  return (
    <img
      src={serverUrlWithImage + `/${bookId}.${coverFileType}`}
      alt="book_cover"
      className="img-fluid"
      style={{ maxWidth: 250, maxHeight: 300 }}
    />
  );
}

export default BookCoverIcon;

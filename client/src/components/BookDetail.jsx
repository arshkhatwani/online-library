import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetails } from "../redux/slices/singleBookSlice";
import Spinner from "react-bootstrap/Spinner";
import { serverUrlWithImage } from "../constants/serverUrl";

function BookDetail() {
  let { bookId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, bookData } = useSelector((store) => store.singleBook);

  useEffect(() => {
    dispatch(getBookDetails({ bookId }));
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <Spinner animation="border" variant="primary" />;

  return (
    <div className="d-flex flex-row px-5">
      <div>
        <img
          src={serverUrlWithImage + `/${bookId}.${bookData.coverFileType}`}
          alt="book_cover"
          className="img-fluid"
        />
      </div>
      <div>
        <h2>{bookData.title}</h2>
        <h4>{bookData.author}</h4>

        <div>
          <div>Category: {bookData.category}</div>
          <div>Publication: {bookData.publication || "Unknown"}</div>
          <div>PublishYear: {bookData.publishYear || "Unknown"}</div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;

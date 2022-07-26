import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/slices/booksSlice";
import Spinner from "react-bootstrap/Spinner";
import BookCoverIcon from "./BookCoverIcon";

function HomeBooks() {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks({ keyword: "" }));
  }, []);

  if (isLoading) return <Spinner animation="border" variant="primary" />;

  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center flex-row flex-wrap">
        {books.map((item) => (
          <BookCoverIcon bookId={item._id} coverFileType={item.coverFileType} />
        ))}
      </div>
    </div>
  );
}

export default HomeBooks;

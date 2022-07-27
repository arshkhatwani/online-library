import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetails } from "../redux/slices/singleBookSlice";
import { Spinner, Button } from "react-bootstrap";
import { serverUrlBook, serverUrlWithImage } from "../constants/serverUrl";

const Subdetails = ({ heading, value }) => {
  return (
    <div className="row my-2">
      <span className="col bookDetailSubheading">{heading}</span>

      <span className="col">{value}</span>
    </div>
  );
};

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
    <div
      className="d-flex flex-col justify-content-center align-items-center px-4 backgroundBg"
      style={{ height: "100vh" }}
    >
      <div
        className="d-flex flex-row px-5 py-5 bg-white rounded-4"
        style={{ minWidth: "80%" }}
      >
        <div>
          <img
            src={serverUrlWithImage + `/${bookId}.${bookData.coverFileType}`}
            alt="book_cover"
            className="img-fluid shadow rounded-3"
          />
        </div>

        <div
          className="p-5 d-flex flex-column justify-content-around"
          style={{ minWidth: "60%" }}
        >
          <div>
            <h2 className="bookDetailTitle">{bookData.title}</h2>
            <h4 className="authorTitle">{bookData.author}</h4>
          </div>

          <div className="mb-3">
            <Subdetails heading="Category" value={bookData.category} />
            <Subdetails
              heading="Publisher"
              value={bookData.publication || "Unknown"}
            />
            <Subdetails
              heading="Publish year"
              value={bookData.publishYear || "Unknown"}
            />
          </div>

          {/* eslint-disable-next-line */}
          <a href={serverUrlBook + `/${bookId}.pdf`} target="_blank">
            <Button className="rounded-5" style={{ width: "100%" }}>
              Read this book
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;

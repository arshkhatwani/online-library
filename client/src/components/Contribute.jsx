import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setFormData, submitForm } from "../redux/slices/contriFormSlice";
import NavbarComp from "./NavbarComp";
import { useNavigate } from "react-router-dom";

const categories = [
  "Self Help",
  "Finance",
  "Business",
  "Fiction",
  "Non Fiction",
  "Comic Book",
  "Science Fiction (Sci-Fi)",
  "Drama",
  "Thriller",
];

const Required = () => <span className="text-danger">*</span>;

function Contribute() {
  const { formData } = useSelector((store) => store.contriForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookFile, setBookFile] = useState();
  const [bookCoverFile, setBookCoverFile] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!bookFile || !bookCoverFile) {
      alert("Please upload correct file type");
      return;
    }

    const formBody = new FormData();
    Object.keys(formData).forEach((item) => {
      formBody.append(item, formData[item]);
    });
    formBody.append("bookFile", bookFile);
    formBody.append("bookCoverFile", bookCoverFile);

    dispatch(submitForm({ formBody }));

    navigate("/", { replace: true });
  };

  return (
    <>
      <NavbarComp />
      <div className="d-flex flex-column justify-content-center px-5 py-3">
        <h1 className="text-center">Contribute a book</h1>

        <div>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>
                Title <Required />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                required
                value={formData.title}
                onChange={(e) => {
                  dispatch(setFormData({ ...formData, title: e.target.value }));
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Author <Required />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author of the book"
                required
                value={formData.author}
                onChange={(e) => {
                  dispatch(
                    setFormData({ ...formData, author: e.target.value })
                  );
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>
                Category <Required />
              </Form.Label>
              <Form.Select
                required
                aria-label="Select category"
                value={formData.category}
                onChange={(e) => {
                  dispatch(
                    setFormData({ ...formData, category: e.target.value })
                  );
                }}
              >
                <option value="">Select category</option>
                {categories.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="bookCoverFile" className="mb-3">
              <Form.Label>
                Book Cover (png or jpg) <Required />
              </Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => {
                  if (
                    e.target.files[0].type !== "image/png" &&
                    e.target.files[0].type !== "image/jpeg"
                  ) {
                    alert("Please upload correct file type");
                    return;
                  }

                  setBookCoverFile(e.target.files[0]);
                }}
              />
            </Form.Group>

            <Form.Group controlId="bookFile" className="mb-3">
              <Form.Label>
                Book (pdf) <Required />
              </Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => {
                  if (e.target.files[0].type !== "application/pdf") {
                    alert("Please upload correct file type");
                    return;
                  }

                  setBookFile(e.target.files[0]);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publication</Form.Label>
              <Form.Control
                type="text"
                placeholder="Publication of book"
                value={formData.publication}
                onChange={(e) => {
                  dispatch(
                    setFormData({ ...formData, publication: e.target.value })
                  );
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publish Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Publish year of book"
                value={formData.publishYear}
                onChange={(e) => {
                  dispatch(
                    setFormData({
                      ...formData,
                      publishYear: e.target.value,
                    })
                  );
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contribute;

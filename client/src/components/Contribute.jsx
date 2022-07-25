import React from "react";
import { Form, Button } from "react-bootstrap";

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
  return (
    <div className="d-flex flex-column justify-content-center px-5 py-2">
      <h1 className="text-center">Contribute a book</h1>

      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              Title <Required />
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Title" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Author <Required />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author of the book"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>
              Category <Required />
            </Form.Label>
            <Form.Select required aria-label="Select category">
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
            <Form.Control type="file" required />
          </Form.Group>

          <Form.Group controlId="bookFile" className="mb-3">
            <Form.Label>
              Book (pdf) <Required />
            </Form.Label>
            <Form.Control type="file" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Publication</Form.Label>
            <Form.Control type="text" placeholder="Publication of book" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Publish Year</Form.Label>
            <Form.Control type="number" placeholder="Publish year of book" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contribute;

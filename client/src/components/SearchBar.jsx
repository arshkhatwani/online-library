import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchBar() {
  return (
    <div>
      <Form className="d-flex flex-row mb-3">
        <Form.Control type="text" placeholder="Search for a book" required />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default SearchBar;

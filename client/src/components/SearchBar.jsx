import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getBooks } from "../redux/slices/booksSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(getBooks({ keyword: search }));
    navigate("/searchresults");
  };

  return (
    <div>
      <Form className="d-flex flex-row mb-3" onSubmit={onSubmitHandler}>
        <Form.Control
          type="text"
          placeholder="Search by title, author, keyword etc."
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;

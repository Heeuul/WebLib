import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";

import SearchFilter from "../components/SearchFilter";
import TextInput from "../components/TextInput";
import BookCard from "../components/BookCard";

export default function FindBook() {
  const [filter, SetFilter] = useState("any");
  const [keyword, SetKeyword] = useState("");
  const [results, SetResults] = useState([]);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!keyword) return;

    fetch("http://localhost:8080/books?" + filter + "=" + keyword)
      .then((res) => res.json())
      .then((result) => SetResults(result))
      .then(() => console.log("Found " + results.length + " results"));
  }

  return (
    <div style={{ height: "500px" }}>
      <h1>Find Book</h1>
      <Container style={{ display: "flex" }}>
        <SearchFilter filterValue={filter} SetFilter={SetFilter} />
        <TextInput
          title="Keyword"
          textValue={keyword}
          SetText={SetKeyword}
          style={{ flex: 3 }}
        />
      </Container>
      <Button
        variant="contained"
        color="primary"
        onClick={HandleSubmit}
        style={{ marginTop: "20px" }}
      >
        Search
      </Button>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { my: 1 },
        }}
        noValidate
        autoComplete="off"
        style={{ height: "300px", overflowY: "scroll" }}
      >
        {results.length > 0 && results.map((book) => <BookCard book={book} />)}
      </Box>
    </div>
  );
}

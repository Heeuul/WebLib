import React from "react";

import BookCard from "../components/BookCard";
import useBook from "../hooks/useBook";

export default function BookList() {
  const { books } = useBook();

  return (
    <div style={{ height: "500px" }}>
      <h1>Book List </h1>
      <div style={{ height: "400px", overflowY: "scroll" }}>
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

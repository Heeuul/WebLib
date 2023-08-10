import { Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";

import useBook from "../hooks/useBook";

export default function BookCard({ book }) {
  const { SetCurrentBook } = useBook();
  const cardStyle = {
    margin: "10px",
    padding: "15px",
    textAlign: "left",
    whiteSpace: "pre-line",
  };

  return (
    <Card key={book.id}>
      <CardActionArea>
        <CardContent onClick={() => SetCurrentBook(book)}>
          <p style={cardStyle}>
            <span style={{ fontSize: 25 }}>{book.title}</span>
            <span>{" by " + book.author}</span>
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

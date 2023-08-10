import { Link } from "@mui/material";
import React from "react";

import DetailGrid from "../components/DetailGrid";
import useBook from "../hooks/useBook";

export default function BookDetails() {
  const { currentBook } = useBook();

  return (
    currentBook && (
      <div>
        <p>
          <span style={{ fontSize: "48px" }}>
            <b>{currentBook.title}</b>
          </span>
          <br />
          <span>by {currentBook.author}</span>
        </p>

        <DetailGrid book={currentBook} />

        {currentBook.link && (
          <p>
            <Link href={currentBook.link} target="_blank">
              {currentBook.link}
            </Link>
          </p>
        )}
      </div>
    )
  );
}

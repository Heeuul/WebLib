import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

import TextInput from "../components/TextInput";
import useBook from "../hooks/useBook";

export default function UpdateBook() {
  const { currentBook, SetCurrentBook } = useBook();

  const [title, SetTitle] = useState("");
  const [author, SetAuthor] = useState("");
  const [ISBN, SetISBN] = useState("");
  const [country, SetCountry] = useState("");
  const [lang, SetLang] = useState("");
  const [link, SetLink] = useState("");
  const [pages, SetPages] = useState(0);
  const [year, SetYear] = useState("");

  useEffect(() => {
    if (currentBook == null) return;

    SetTitle(currentBook.title);
    SetAuthor(currentBook.author);
    SetISBN(currentBook.isbn);
    SetCountry(currentBook.country);
    SetLang(currentBook.language);
    SetLink(currentBook.link);
    SetPages(currentBook.pages);
    SetYear(currentBook.year);
  }, []);

  function HandleUpdate(e) {
    e.preventDefault();
    const updatedBook = {
      id: currentBook.id,
      author: author.trim(),
      title: title.trim(),
      country: country.trim(),
      language: lang.trim(),
      link: link.trim(),
      pages: pages,
      year: year.toString(),
      isbn: ISBN.trim(),
    };

    fetch("http://localhost:8080/books/" + currentBook.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    }).then(() => console.log("Updated book " + title + " by " + author));

    SetCurrentBook(updatedBook);
  }

  return currentBook ? (
    <div style={{ height: "500px" }}>
      <h1>Update Book</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { my: 1 },
        }}
        noValidate
        autoComplete="off"
        style={{ height: "300px", overflowY: "scroll" }}
      >
        <TextInput
          title="Title"
          textValue={title}
          SetText={SetTitle}
          inputType="text"
        />
        <TextInput
          title="Author"
          textValue={author}
          SetText={SetAuthor}
          inputType={"text"}
        />
        <TextInput
          title="ISBN"
          textValue={ISBN}
          SetText={SetISBN}
          inputType="text"
        />
        <TextInput
          title="Country"
          textValue={country}
          SetText={SetCountry}
          inputType="text"
        />
        <TextInput
          title="Language"
          textValue={lang}
          SetText={SetLang}
          inputType="text"
        />
        <TextInput
          title="External Link"
          textValue={link}
          SetText={SetLink}
          inputType="url"
        />
        <TextInput
          title="Pages"
          textValue={pages}
          SetText={SetPages}
          inputType="number"
        />
        <TextInput
          title="Year"
          textValue={year}
          SetText={SetYear}
          inputType="text"
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={HandleUpdate}
        style={{ marginTop: "20px" }}
      >
        Update
      </Button>
    </div>
  ) : (
    <p>Please select a book from BOOK LIST</p>
  );
}

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

import TextInput from "../components/TextInput";
import useBook from "../hooks/useBook";

export default function AddBook() {
  const { SetCurrentBook } = useBook();

  const [title, SetTitle] = React.useState("");
  const [author, SetAuthor] = React.useState("");
  const [ISBN, SetISBN] = React.useState("");
  const [country, SetCountry] = React.useState("");
  const [lang, SetLang] = React.useState("");
  const [link, SetLink] = React.useState("");
  const [pages, SetPages] = React.useState(0);
  const [year, SetYear] = React.useState("");

  function HandleAdd(e) {
    e.preventDefault();
    if (!title || !author) return;

    const newBook = {
      title,
      author,
      isbn: ISBN,
      country,
      language: lang,
      link,
      pages,
      year,
    };

    fetch("http://localhost:10102/books/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    }).then(() => console.log("Added new book " + title + " by " + author));

    SetCurrentBook(newBook);
  }

  return (
    <div style={{ height: "500px" }}>
      <h1>Add Book</h1>
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
          inputType="text"
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
        onClick={HandleAdd}
        style={{ marginTop: "20px" }}
      >
        Add
      </Button>
    </div>
  );
}

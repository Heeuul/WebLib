import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const BookContext = createContext();
export function BookProvider({ children }) {
  const [currentBook, SetCurrentBook] = useState(null);
  const [books, SetBooks] = useState([]);

  useEffect(() => LoadBookList(), []);
  function LoadBookList() {
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((result) => SetBooks(result))
      .then(() => console.log("Loaded " + books.length + " books"));
  }

  const bookMemo = useMemo(
    () => ({
      currentBook,
      SetCurrentBook,
      books,
      SetBooks,
      Reload: () => LoadBookList(),
    }),
    [currentBook, books]
  );

  return (
    <BookContext.Provider value={bookMemo}>{children}</BookContext.Provider>
  );
}

export default function useBook() {
  return useContext(BookContext);
}

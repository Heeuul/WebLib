package com.silverworks.bookKeeping_backend.exception;

public class BookNotFoundException extends Exception {
    public BookNotFoundException(Long bookID) {
        super(String.format("Book is not found with id: '%s'", bookID));
    }
}

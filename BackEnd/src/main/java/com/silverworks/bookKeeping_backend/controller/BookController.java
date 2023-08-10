package com.silverworks.bookKeeping_backend.controller;

import com.silverworks.bookKeeping_backend.exception.BookNotFoundException;
import com.silverworks.bookKeeping_backend.repository.BookRepository;
import com.silverworks.bookKeeping_backend.model.Book;

import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
public class BookController {
    @Autowired
    BookRepository bookRepository;

    // Create a new Book
    @PostMapping("/books/new")
    public Book CreateNote(@Valid @RequestBody Book book) {
        return bookRepository.save(book);
    }

    // Create multiple Books
    @PostMapping("/books/newlist")
    public List<Book> CreateNotes(@Valid @RequestBody List<Book> books) {
        return bookRepository.saveAll(books);
    }

    // Get all Books
    @GetMapping("/books")
    public List<Book> GetAllNotes(@RequestParam(required = false) Map<String, String> params) {
        if (params.isEmpty())
            return bookRepository.findAll();

        List<Book> keywordResult = new ArrayList<Book>();
        if (params.containsKey("author"))
            keywordResult.addAll(bookRepository.FindAuthor(params.get("author")));
        if (params.containsKey("title"))
            keywordResult.addAll(bookRepository.FindTitle(params.get("title")));
        if (params.containsKey("country"))
            keywordResult.addAll(bookRepository.FindCountry(params.get("country")));
        if (params.containsKey("language"))
            keywordResult.addAll(bookRepository.FindLanguage(params.get("language")));
        if (params.containsKey("link"))
            keywordResult.addAll(bookRepository.FindLink(params.get("link")));
        if (params.containsKey("pages"))
            keywordResult.addAll(bookRepository.FindPages(params.get("pages")));
        if (params.containsKey("year"))
            keywordResult.addAll(bookRepository.FindYear(params.get("year")));
        if (params.containsKey("isbn"))
            keywordResult.addAll(bookRepository.FindISBN(params.get("isbn")));

        if (params.containsKey("any"))
            keywordResult.addAll(bookRepository.FindAny(params.get("any")));

        return keywordResult.stream().distinct().collect(Collectors.toList());
    }

    // Get a single Book by ID
    @GetMapping("/books/{id}")
    public Book GetNote(@PathVariable(value = "id") Long bookID) throws BookNotFoundException {
        return bookRepository.findById(bookID).orElseThrow(() -> new BookNotFoundException(bookID));
    }

    // Update a Book
    @PutMapping("/books/{id}")
    public Book UpdateNote(@PathVariable(value = "id") Long bookID, @Valid @RequestBody Book bookDetails)
            throws BookNotFoundException {
        Book book = GetNote(bookID);

        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setCountry(bookDetails.getCountry());
        book.setLanguage(bookDetails.getLanguage());
        book.setLink(bookDetails.getLink());
        book.setPages(bookDetails.getPages());
        book.setYear(bookDetails.getYear());
        book.setIsbn(bookDetails.getIsbn());

        return bookRepository.save(book);
    }

    // Delete a Book
    @DeleteMapping("/books/{id}")
    public ResponseEntity<?> DeleteBook(@PathVariable(value = "id") Long bookID) throws BookNotFoundException {
        Book book = GetNote(bookID);
        bookRepository.delete(book);

        return ResponseEntity.ok().build();
    }
}

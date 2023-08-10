package com.silverworks.bookKeeping_backend.repository;

import com.silverworks.bookKeeping_backend.model.Book;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query(value = "SELECT * FROM books WHERE author LIKE %:author%", nativeQuery = true)
    public List<Book> FindAuthor(@Param("author") String author);

    @Query(value = "SELECT * FROM books WHERE title LIKE %:title%", nativeQuery = true)
    public List<Book> FindTitle(@Param("title") String title);

    @Query(value = "SELECT * FROM books WHERE country LIKE %:country%", nativeQuery = true)
    public List<Book> FindCountry(@Param("country") String country);

    @Query(value = "SELECT * FROM books WHERE language LIKE %:language%", nativeQuery = true)
    public List<Book> FindLanguage(@Param("language") String language);

    @Query(value = "SELECT * FROM books WHERE link LIKE %:link%", nativeQuery = true)
    public List<Book> FindLink(@Param("link") String link);

    @Query(value = "SELECT * FROM books WHERE pages LIKE %:pages%", nativeQuery = true)
    public List<Book> FindPages(@Param("pages") String pages);

    @Query(value = "SELECT * FROM books WHERE year LIKE %:year%", nativeQuery = true)
    public List<Book> FindYear(@Param("year") String year);

    @Query(value = "SELECT * FROM books WHERE isbn LIKE %:isbn%", nativeQuery = true)
    public List<Book> FindISBN(@Param("isbn") String isbn);

    String anyQuery = "SELECT * FROM books WHERE author LIKE %:keyword% " +
            "OR title LIKE %:keyword% " +
            "OR country LIKE %:keyword% " +
            "OR language LIKE %:keyword% " +
            "OR link LIKE %:keyword% " +
            "OR pages LIKE %:keyword% " +
            "OR year LIKE %:keyword% " +
            "OR isbn LIKE %:keyword%";

    @Query(value = anyQuery, nativeQuery = true)
    public List<Book> FindAny(@Param("keyword") String keyword);
}

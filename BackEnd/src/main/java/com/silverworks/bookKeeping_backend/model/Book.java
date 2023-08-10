package com.silverworks.bookKeeping_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private String author;
    @NotBlank
    private String title;
    private String country;
    private String language;
    private String link;
    private int pages;
    private String year;
    private String isbn;
}

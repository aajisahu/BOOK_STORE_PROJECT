package com.bookstore.bookstore.service;

import com.bookstore.bookstore.model.BookModel;

import java.util.List;

public interface IWishlistService {
    String addBooktoWishlist(String token, int bookId);

    List<BookModel> findBookList(String token);

    String deleteBookFromWishList(String token, int bookId);

}
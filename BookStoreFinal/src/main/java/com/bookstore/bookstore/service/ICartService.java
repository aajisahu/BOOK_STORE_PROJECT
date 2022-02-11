package com.bookstore.bookstore.service;

import com.bookstore.bookstore.model.BookModel;

import javax.transaction.Transactional;
import java.util.List;

public interface ICartService {

    @Transactional
    String addBooktoCart(String token, int bookId);

    List<BookModel> findBookList(String token);

    String deleteBookFromCart(int bookId ,String token);

    String emptyCart(String token);
}

package com.bookstore.bookstore.service;

import com.bookstore.bookstore.dto.AddressDTO;
import com.bookstore.bookstore.dto.OrderDTO;
import com.bookstore.bookstore.model.AddressModel;
import com.bookstore.bookstore.model.BookModel;

import java.util.List;

public interface IOrderService {


    List<BookModel> placeOrder(String token,  List<BookModel> orderBookList);
}
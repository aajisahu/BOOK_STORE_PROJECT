package com.bookstore.bookstore.service;

import com.bookstore.bookstore.dto.AddressDTO;
import com.bookstore.bookstore.dto.OrderDTO;
import com.bookstore.bookstore.model.AddressModel;
import com.bookstore.bookstore.model.BookModel;
import com.bookstore.bookstore.model.Order;

import java.util.List;

public interface IOrderService {


    List<BookModel> placeOrder(String token,  List<BookModel> orderBookList);
    public List<Order> orderList(String token);
}
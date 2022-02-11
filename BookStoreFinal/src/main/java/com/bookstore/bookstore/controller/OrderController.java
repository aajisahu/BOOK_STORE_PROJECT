package com.bookstore.bookstore.controller;

import com.bookstore.bookstore.dto.AddressDTO;
import com.bookstore.bookstore.dto.OrderDTO;
import com.bookstore.bookstore.dto.ResponseDTO;
import com.bookstore.bookstore.model.AddressModel;
import com.bookstore.bookstore.model.BookModel;
import com.bookstore.bookstore.service.AddressService;
import com.bookstore.bookstore.service.IAddressService;
import com.bookstore.bookstore.service.IOrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping("/order")
    @Slf4j
    @CrossOrigin(origins = "*",allowedHeaders = "*")
    public class OrderController {

        @Autowired
        private IOrderService orderService;

        @Autowired
        private IAddressService addressService;

//        @PostMapping("/placeOrder/{token}")
//        public ResponseEntity<ResponseDTO> AddUserAddress(@RequestBody OrderDTO orderDTO, @PathVariable String token) {
//            List<BookModel> orderData = orderService.placeOrder(orderDTO, token);
//            ResponseDTO resDTO = new ResponseDTO("Order Placed Successfully ",orderData);
//            return new ResponseEntity<ResponseDTO>(resDTO, HttpStatus.OK);
//        }

    @PostMapping("/placeOrder/{token}")
    public ResponseEntity<ResponseDTO> AddUserBookList(@RequestBody List<BookModel> orderBookList,
                                                      @PathVariable String token) {
        List<BookModel> orderData = orderService.placeOrder(token,orderBookList);
        ResponseDTO resDTO = new ResponseDTO("Order Placed Successfully ",orderData);
        return new ResponseEntity<ResponseDTO>(resDTO, HttpStatus.OK);
    }

    @PostMapping("/addAddress/{token}")
    public ResponseEntity<ResponseDTO> AddUserAddress(@RequestBody AddressDTO addressDTO,
                                                      @PathVariable String token) {
        AddressModel orderData = addressService.addAddress(addressDTO,token);
        ResponseDTO resDTO = new ResponseDTO("Address Added Successfully ");
        return new ResponseEntity<ResponseDTO>(resDTO, HttpStatus.OK);
    }
}


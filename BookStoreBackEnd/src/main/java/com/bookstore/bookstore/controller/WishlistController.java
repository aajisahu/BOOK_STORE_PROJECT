package com.bookstore.bookstore.controller;

import com.bookstore.bookstore.dto.ResponseDTO;
import com.bookstore.bookstore.model.BookModel;
import com.bookstore.bookstore.service.IWishlistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@RequestMapping("/wishlist")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class WishlistController {

    @Autowired
    private IWishlistService WishlistService;

    @GetMapping("/addbookWishlist/{token}/{bookId}")
    public ResponseEntity<ResponseDTO> addBooktoWishlist(@PathVariable String token, @PathVariable int bookId) {
        String message = WishlistService.addBooktoWishlist(token,bookId);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(new ResponseDTO("book added to Wishlist", message));
    }
    @GetMapping("/getWishlistofUser/{token}")
    public List<BookModel> getCartBookList(@PathVariable String token){
        return WishlistService.findBookList(token);
    }

    @GetMapping("/deleteBookFromWishList/{token}/{bookId}")
    public ResponseEntity<ResponseDTO> deleteBookFromCart(@PathVariable String token,@PathVariable int bookId) {
        String message = WishlistService.deleteBookFromWishList(token,bookId);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(new ResponseDTO("Book is deleted from Wishlist", message));
    }
}
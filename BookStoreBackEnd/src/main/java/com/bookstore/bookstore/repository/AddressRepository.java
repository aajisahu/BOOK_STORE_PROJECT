package com.bookstore.bookstore.repository;

import com.bookstore.bookstore.model.AddressModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository  extends JpaRepository<AddressModel, Integer> {
}
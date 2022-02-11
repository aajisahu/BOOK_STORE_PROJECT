package com.bookstore.bookstore;
import org.springframework.context.ApplicationContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
public class BookstoreApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BookstoreApplication.class, args);
        log.info("Book store application Started in {} Environment",
                context.getEnvironment().getProperty("environment"));
        log.info("book_store_final User is {}",
                context.getEnvironment().getProperty("spring.datasource.username"));
    }
}

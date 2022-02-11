show databases;

use bookstore;

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `bookstore`.`book` (`book_id`, `author_name`, `book_details`, `book_name`, `image`, `no_of_books`, `price`, `book_rating`, `discount_price`,`quantity_in_cart`) 
VALUES ('1',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('2',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practices from React and Material Design. you can ial Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('3',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX  with practical advice on implemen' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('4',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. I fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('5',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare 22-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('6',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified commun Course. .' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('7',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('8',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('9',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practiceern-day web apps by implementing Material Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('10',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX consultants, tques that create r organisation' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('11',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kindslf and to your loved ones. Care p away from fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('12',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare for MBA admission 2022-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('13',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified community member.' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('14',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('15',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('16',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practices from React and Material Design. you can ial Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('17',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX  with practical advice on implemen' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('18',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. I fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('19',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare 22-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('20',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified commun Course. .' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('21',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('22',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('23',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practiceern-day web apps by implementing Material Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('24',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX consultants, tques that create r organisation' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('25',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kindslf and to your loved ones. Care p away from fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('26',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare for MBA admission 2022-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('27',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified community member.' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('28',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('29',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('30',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practices from React and Material Design. you can ial Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('31',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX  with practical advice on implemen' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('32',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. I fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('33',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare 22-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('34',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified commun Course. .' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('35',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('36',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('37',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practiceern-day web apps by implementing Material Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('38',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX consultants, tques that create r organisation' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('39',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kindslf and to your loved ones. Care p away from fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('40',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare for MBA admission 2022-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('41',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified community member.' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('42',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('43',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('44',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practices from React and Material Design. you can ial Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('45',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX  with practical advice on implemen' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('46',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. I fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('47',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare 22-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('48',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified commun Course. .' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('49',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('50',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1'),
('51',  'Cook Book', 'Material-UI is a component library for rendering UI elements, using modern best practiceern-day web apps by implementing Material Design considerations.', 'React UI Material','image 3.png', '15', '480', '3', '800','1'),
('52',  'Kevin', 'UX For Dummies is a hands-on guide to developing and implementing user experience strategy. Written by globally-recognized UX consultants, tques that create r organisation' , 'UX For Dummies','image 5.png', '20', '550', '5', '800','1'),
('53',  'Nandeep', 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kindslf and to your loved ones. Care p away from fire.' , 'Mastering Sharepoint Framework','image 6.png', '39', '200', '3', '750','1'),
('54',  'Ashish', 'GDPI forms the basis of candidate selection for MBA. Read detailed analysis of most trending GD topics for business, politics and current affairs to prepare for MBA admission 2022-23..' , 'Mastering Sharepoint Framework','image 11.png', '24', '500', '5', '1500','1'),
('55',  'Naval', 'Conduct practical projects to apply what you learn & build case studies for your portfolio. Learn from the worlds best designers and become a certified community member.' , 'The Design OF Every Day THings','image 17.png', '16', '200', '5', '500','1'),
('56',  'Steve Krug', 'Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have .', 'Dont Make Me Think','image 2.png', '49', '350', '4', '1119','1');

SET FOREIGN_KEY_CHECKS = 1;


Post-Man-->
-----------

cart item-
-----------
localhost:8080/cart/addbookCart/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.uJlv2hguQlJbMi2k1tbZUk5i48Y5j0zgGAKBS202KhM/7

create User-
------------
{
      "fullName": "Ashish",
      "mobileNo": "9439390435",
      "password": "123456",
      "emailId": "ashish@gmail.com"
}

insert via postman-
-------------------
{  
    "bookDetails": "think",
    "authorName":"Ashish",
    "bookName" :"The Tiger",
    "price" :200,
    "noOfBooks" : 20,
    "image" :"image 1.png"
}


login user--
------------
localhost:8080/loginuser

{ 
      "emailId":"aajisahu@gmail.com",
      "password":"123456"
}





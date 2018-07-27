create table users(
    id int primary key auto_increment,
    first_name varchar(55) not null,
    middle_name varchar(55),
    last_name varchar(55) not null,
    email varchar(255) not null unique
);

insert into users(first_name,middle_name,last_name,email) values 
    ("Praveen","Kumar","Rana","edxpraveenkumar@gmail.com"),
    ("Shiv", null, "Shankar", "shankar7shiv@gamil.com");
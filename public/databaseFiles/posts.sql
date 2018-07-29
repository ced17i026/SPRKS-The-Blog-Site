-- This will delete the table and make it again

drop table posts;

create table posts(
    id int primary key auto_increment,
    user_id int not null,
    imageUrl varchar(255),
    blogHeading varchar(255) not null,
    posts varchar(255) not null,
    postCreationDate timestamp default now(),
    foreign key(user_id) references users(id)
);

insert into posts(user_id,posts,blogHeading) values
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum"),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Lorem Ipsum");
    

create table posts(
    id int primary key auto_increment,
    user_id int not null,
    posts varchar(255) not null,
    foreign key(user_id) references users(id)
);

insert into posts(user_id,posts) values
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (1,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    (2,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    
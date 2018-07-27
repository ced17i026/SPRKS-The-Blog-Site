-- Querie for finding post and user to which the post belong
select first_name,last_name,posts from users inner join posts on users.id = posts.user_id;

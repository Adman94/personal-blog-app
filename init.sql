CREATE TABLE blogapi ( 
  ID SERIAL PRIMARY KEY, 
  title VARCHAR(255) NOT NULL, 
  content VARCHAR(255) NOT NULL, 
  post_image VARCHAR(255) NOT NULL, 
  added_date VARCHAR(255) NOT NULL
);

INSERT INTO blogapi (title, content, post_image, added_date) 
VALUES ('This is a New Blog Post', 'This is the content!', 'uploads/post-image-1581461442199.jpg', '1581461442206');
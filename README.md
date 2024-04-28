# tech-blog-m14
Module 14 MVC (Model-View-Controller) Challenge!

Building a CMS-style blog site!

## Introduction

For this assignment, I attempted to build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.  This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Criteria
To meet the Accepted Criteria of this assignment, I tried to accomplish as much of the following as I could:

When the user visits the site for the first time, they are taken to the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

When the user clicks on the homepage option, they are taken to the homepage.

When the user clicks on any other links in the navigation, they are prompted to either sign up or sign in.

When the user chooses to sign up, they are prompted to create a username and password.

When the user clicks on the sign-up button, their credentials are saved and they are logged into the site.

When the user revisits the site at a later time and chooses to sign in, they are prompted to enter their username and password.

When the user is signed in to the site, they can see the navigation links for the homepage, the dashboard, and the option to log out.

When the user clicks on the homepage option in the navigation, they are taken to the homepage and are presented with existing blog posts that includes the post title and the date created.

When the user clicks on an existing blog post, they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

When the user enters a comment and clicks on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

When the user clicks on the dashboard option in the navigation, they are taken to the dashboard and presented with any blog posts that have already been created and the option to add a new blog post.

When the user clicks on the button to add a new blog post, they are prompted to enter both a title and contents for a blog post.

When the user clicks on the button to create a new blog post, the title and the contents of the post are saved and they are taken back to an updated dashboard with the new blog post.

When the user clicks on one of their existing posts in the dashboard, they are able to delete or update their post and are then taken back to an updated dashboard.

When the user clicks on the logout option in the navigation, they are signed out of the site.

## References

To complete this assignment I studied the following activities from the Module 14-MVC (Model-View-Controller) Class Activity Files as references:

"09-Ins_Handlebars-FE-Logic"

"11-Ins_Partials"

"13-Ins_Custom-Helpers"

"15-Ins_Sessions"

"17-Ins_Session-Storage"

"21-Ins_MVC-Review"

"23-Ins_Auth-Review"

"28-Stu_Mini-Project"

After this, I searched the internet for further information and came across the following websites as references:

"https://github.com/fuuko08/MVC-Tech-Blog"

"https://github.com/OwaisIslam/tech-blog"

"https://github.com/coding-boot-camp/fantastic-umbrella/tree/main/Develop/seeds"

The process of coding for me involved using code from the activities and websites mentioned above and commenting out every section of code in all of the files to see what each specific block of code accomplished as I was structuring the app in the Model-View-Controller format listed in order below.

Config/connection.js

server.js

db/schema.sql

Models

Utils

Seeds

Controllers/Front and Back end API's

Views/Handlebars

Public (Javascript, then CSS)

This led to a lot of experimentation in order to see what I felt was needed to ultimately complete as much of the Accepted Criteria as possible.  To see if the back end was running properly, I used the POSTMAN app to test the GET, POST, PUT and DELETE methods in all the js files in the controllers/api files.

The experimentation was necessary since it should be pointed out that while the code given inside the above referenced websites was very helpful, simply copying and pasting code without understanding what that code does will lead to more complications and a lack of understanding.

## Screenshots
Here are the screenshots from my Postman App:

![](/screenshots/Dashboard%20Screenshot.png)

![](/screenshots/Login%20Screenshot.png)

![](/screenshots/Signup%20Screenshot.png)

![](/screenshots/Homepage%20Screenshot.png)

![](/screenshots/Create_Blog%20Screenshot.png)

![](/screenshots/Edit_Post%20Screenshot.png)

![](/screenshots/Comment%20Screenshot.png)

![](/screenshots/Comment_Displayed%20Screenshot.png)

![](/screenshots/Updated_Dashboard%20Screenshot.png)

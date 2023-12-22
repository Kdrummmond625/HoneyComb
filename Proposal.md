# HoneyComb
Welcome to HoneyComb a blog based app where you can communicate with a group of people going through similar things

## WireFrames
![HoneyComb](https://github.com/Kdrummmond625/HoneyComb/assets/150689031/9fd145f3-3194-4ee7-98c8-de4d2abefdb2)


## ERD
![HoneyComb](https://github.com/Kdrummmond625/HoneyComb/assets/150689031/846e360e-48f4-471b-b897-b003766d9f9e)


## Trello Link
https://trello.com/b/tg8Qgzra/honeycomb

## User Routes

| Category            | Action                   | Method   | Route                           | Description                                  |
|---------------------|--------------------------|----------|---------------------------------|----------------------------------------------|
| **User Routes**     |                          |          |                                 |                                              |
|                     | Register User            | POST     | `/users/register`               | Registers a new user.                        |
|                     | Login User               | POST     | `/users/login`                  | Authenticates a user.                        |
| **Profile Routes**  |                          |          |                                 |                                              |
|                     | Create Profile           | POST     | `/profiles`                     | Creates a new user profile.                  |
|                     | Update Profile           | PUT      | `/profiles/{profileId}`         | Updates a specific user profile.             |
| **Blog Post Routes**|                          |          |                                 |                                              |
|                     | Create Blog Post         | POST     | `/posts`                        | Creates a new blog post.                     |
|                     | View All Blog Posts      | GET      | `/posts`                        | Retrieves all blog posts.                    |
|                     | View Single Blog Post    | GET      | `/posts/{postId}`               | Retrieves a specific blog post.              |
|                     | Edit Blog Post           | PUT      | `/posts/{postId}`               | Updates a specific blog post.                |
|                     | Delete Blog Post         | DELETE   | `/posts/{postId}`               | Deletes a specific blog post.                |
|                     | View Posts by Category   | GET      | `/posts/category/{categoryId}`  | Retrieves posts for a specific category.     |
| **Category Routes** |                          |          |                                 |                                              |
|                     | View Categories          | GET      | `/categories`                   | Retrieves all categories.                    |

# MVP 
## User Stories
- As a user I will be able to create an 
- As a user I will be able to login in and log out of my account
-As a user, I will be able to view my profile and interface with the Honeycomb app
-As a user I will be able to create, edit, update and delete my blog post's
-As a user, I will be able to choose what category my blog post will be a  part of.
-As a user, I will be able to view post from all categories

## Ice Box

- As a user, I will be able to leave a I've been there. Similar to a like it will provide the author of the post with reassurance

- As a user, I will have access to the comments I've left. This will allow me to continue to interact and provide support to post that I find interesting

## Schedule
| Day | Task                                      | Details                                                        |
|-----|-------------------------------------------|----------------------------------------------------------------|
| 1   | Database Schema Implementation            | Implement MongoDB schema based on ERD.                         |
| 2   | Post Management Backend - Creation        | Develop logic for creating and categorizing posts.             |
| 3   | Post Management Backend - Editing         | Add functionality for editing and deleting posts.              |
| 4   | Backend Testing with Postman - Part 1     | Test post creation and categorization features.                |
| 5   | Backend Testing with Postman - Part 2     | Refine backend code, fix bugs, optimize performance.           |
| 6   | User Authentication - Signup              | Implement user signup functionality.                           |
| 7   | User Authentication - Login & Session     | Develop login and session management features.                 |
| 8   | User Account Management Backend           | Create backend functionalities for user account management.    |
| 9   | Further Backend Testing                   | Test user authentication and account management.               |
| 10  | Frontend Development - Start              | Begin frontend development with basic HTML/CSS.                |
| 11  | Frontend Development - Components         | Develop frontend components for post management and auth.      |
| 12  | Final Integration and Testing             | Integrate frontend with backend, final testing and debugging.  |

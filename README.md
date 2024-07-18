# Welcome to Honey Comb - Your Sanctuary for Sharing Life's Stories
![Home page for Honey Comb](assets/homepage.png)

![User page for Honey Comb](assets/userPosts.png)

At Honey Comb, we've crafted a unique, **judgment-free social media platform** where you can openly share your life experiences. Our mission is to create a supportive community where everyone realizes they're not alone in their journeys.

Whether you're grappling with life's challenges or celebrating your victories, Honey Comb offers you a space to connect and grow. Our platform is divided into three distinct categories, each tailored to your sharing needs:

### I Want to Vent
A safe haven for expressing your frustrations and stressful situations. Pour your heart out and find solace in the empathy of others who understand.

### I Want to Heal
When you're ready to turn a new page, this space is dedicated to your healing journey. Share your steps towards overcoming challenges and find inspiration and support from others who are on a similar path.

### I Won
Celebrate your triumphs and success stories here. Your victories, big or small, are a source of motivation and joy for the community.

**Join Honey Comb today** and be part of a nurturing environment where every story matters, every struggle is acknowledged, and every victory is celebrated.

# Getting Started
## Trello
https://trello.com/b/tg8Qgzra/honeycomb

## Honey Comb Link
https://honeycomb-frontend-xi.vercel.app/index.html

## Attributions
https://tuts.alexmercedcoder.dev/2021/8/basic_auth_express_mongo/
https://www.youtube.com/watch?v=O_9u1P5YjVc
ChatGPT
### WireFrames
![HoneyComb](https://github.com/Kdrummmond625/HoneyComb/assets/150689031/9fd145f3-3194-4ee7-98c8-de4d2abefdb2)


### ERD
![HoneyComb](https://github.com/Kdrummmond625/HoneyComb/assets/150689031/846e360e-48f4-471b-b897-b003766d9f9e)

## Technologies Used

This project is built with a combination of technologies and packages that ensure its efficiency and scalability. Below is a list of the key technologies and packages used:

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Mongoose**: An elegant mongodb object modeling for Node.js.
- **express-session**: Simple session middleware for Express.
- **jsonwebtoken**: An implementation of JSON Web Tokens for secure transmission of information.
- **bcryptjs**: A library to help you hash passwords.
- **cors**: A node.js package for providing a Connect/Express middleware that can be used to enable CORS (Cross-Origin Resource Sharing).
- **dotenv**: A zero-dependency module that loads environment variables from a .env file into `process.env`.

### Development Tools
- **Nodemon**: A utility that will monitor for any changes in your source and automatically restart your server.
- **Morgan**: HTTP request logger middleware for Node.js.
- **Mercedlogger**: A simple logger for debugging.

### Frontend
- **HTML**: Standard markup language for documents designed to be displayed in a web browser.
- **JavaScript**: A high-level, interpreted programming language that conforms to the ECMAScript specification.
- **CSS**: A style sheet language used for describing the presentation of a document written in HTML or XML.

Feel free to explore the `package.json` file for a detailed list of dependencies.


# Next Steps

## Adding a Comment Feature
The goal is to enable users to interact more deeply with the stories shared by allowing them to post comments.

### Key Tasks:
- **Update Database Schema**: Introduce a new `Comments` schema, including fields for the comment text, author, date, and a reference to the associated story.
- **Backend Development**: Create API endpoints for adding, retrieving, and managing comments.
- **Frontend Development**: Implement UI components for displaying and submitting comments.
- **Testing**: Rigorously test the functionality, user interface, and security aspects of the comment feature.

## Implementing the "I've Been There" Feature
This feature will function similarly to a 'like' button, allowing users to express empathy and support.

### Key Tasks:
- **Database Schema Decision**: Decide if a simple counter for each story suffices, or if a new schema to track individual user interactions is needed.
- **Backend Updates**: Develop endpoints for the "I've Been There" functionality, handling both the incrementing of the count and user-specific interactions.
- **Frontend Integration**: Add a button or icon for the "I've Been There" feature on each story, along with a display of the current count.
- **Testing**: Ensure the feature works seamlessly and integrates well with the existing platform.

By implementing these features, we aim to enhance user engagement and provide more ways for our community to connect and support each other.

## Acknowledgements

I would like to extend my heartfelt thanks to some incredible people whose support and guidance have been pivotal in the creation of this application:

### Ria
For the inspiration behind this app. Ria originally started Honey Comb in her house for our cousins to connect and share experiences, which profoundly impacted me. It was this experience that sparked the idea to extend such a supportive network to others. Her concept showed me the power of community in overcoming personal struggles and reinforced the belief that with a strong community, anything is possible.

### Greg
For his invaluable guidance on the backend development of the application. I was quite lost in understanding the intricacies of backend processes until an enlightening office hour with Greg. His patience and expertise not only made the development process smoother but also enriched my knowledge significantly. I am deeply grateful for his support and the lessons learned.

Their contributions have been instrumental in turning Honey Comb into a reality, offering a space for people to connect, share, and grow together.


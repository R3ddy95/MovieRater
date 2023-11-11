<meta name="title" content="Movie Rater">
<meta name="description" content="Movie Rater is a web application that allows people to watch movie trailers and leave a review on the movie they just watched, and also login and register feature.">
<meta name="keyword" content="Movie Rater, MovieRater, Springboot, Java, Springboot App, MovieRater Github, Github, R3ddy95, R3ddy95 Github, React">

# Movie Rater 🎬​
Movie Rater is a complete web application with both FrontEnd and BackEnd, that allows people to watch movie trailers and leave a review on the movie they just watched, and also login and register feature.

The project was created with:

* Front-end: React, Router-dom, Boostrap, Material-UI
* Backend: Java, SpringBoot
* Database: MongoDB
* Deployment: Render, Firebase

You can Try it [Here]([https://movierater-3b15c.web.app/)

## How it works
The user can start by registering on the website

<img src="MovieClient/src/images/register.png" width="70%" height="70%">

After registering you will be redirected to the login page

<img src="MovieClient/src/images/login.png" width="70%" height="70%">

Once logged in you will be redirected to the home page

<img src="MovieClient/src/images/movies.png" width="70%" height="70%">

Where you can watch the films and watch the trailer

<img src="MovieClient/src/images/trailer.png" width="70%" height="70%">

Or click on the review button to leave a review of the film with a comment

<img src="MovieClient/src/images/reviews.png" width="70%" height="70%">

And at the end you can log out at the top right of the header.

## Languages
* HTML5
* CSS3
* Javascript ES6
* JSX
* Java

## What i used
* [React](https://react.dev/)
* [Node.js](https://nodejs.org/it)
* [React-Router](https://reactrouter.com/en/main)
* [Axios](https://axios-http.com/) for the API requests
* [Bootstrap](https://getbootstrap.com/) as a CSS framework I have opted for
* [Material-UI](https://mui.com/)
* [Intellij IDE](https://www.jetbrains.com/idea/)
* [JDK](https://www.oracle.com/it/java/technologies/downloads/)
* [SpringBoot](https://spring.io/projects/spring-boot)
* [MongoDB](https://www.mongodb.com/)
* [Render](https://render.com/) for the deployment of the backend server
* [Firebase](https://firebase.google.com/) for the deployment of the frontend

## Installation
First of all, you need Node.js, and JDK installed.
If you don't have it, you can download it here:
[Node.js](https://nodejs.org/it/download/)<br>
[JDK](https://www.oracle.com/it/java/technologies/downloads/)<br>


### 1 - Clone the repository
```bash

git clone https://github.com/R3ddy95/MovieRater.git

```

### 2 - BackEnd
First of all you need to deploy the back end, although to make it work you should have a database already working.
I used MongoDB, if you use the same one, you have to create a .env file in the src/main/resource directory with the data entered, I created a .env.example file to have an example of how you should configure it.
However, if you don't want to do it yourself, you can simply start the JAR file in the target directory inside the MovieServer folder.


## 3 - FrontEnd
Once the server is started, you just need to start the client side in this way, installing the dependencies first:

```bash

npm install

```

Once installed, create an env file. inside the root directory with exactly this inside:

```env

REACT_APP_API_KEY=http://localhost:8080

```
However, keep in mind that the server is started on port 8080, this could change if you have opted for changes

### 4 - Run it!
```bash

npm start

```

and go to [http://localhost:3000](http://localhost:3000) to view it in your browser.

##  Try it!
Elsewhere, you can simply try it here:
[MovieRater](https://movierater-3b15c.web.app/)

##  License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact Me
My Email: edoardovitagliano3@gmail.com <br>
You can find my Linkedin profile here: https://www.linkedin.com/in/edoardo-vitagliano-299737110/

const express = require("express");

const server = express();

// Request handling methods
const handlePostRequest = (req, res) => {
  res.send("Response from server.use");
}

const handleGetRequest = (req, res) => {
  res.send("Login Page");
}

const handlePutRequest = (req, res) => {
  res.send("Make a post");
}

const handlePatchRequest = (req, res) => {
  res.send("Add new event");
}

const handleDeleteRequest = (req, res) => {
  res.send("Delete post");
};

server.post('/profile', handlePostRequest);
server.get('/login', handleGetRequest );
server.put('/post', handlePutRequest);
server.patch('/event', handlePatchRequest);
server.delete('/delete', handleDeleteRequest);

server.listen(3000, () => console.log("server is ready"));

// const handleAllRequests = (requestobject, responseobject) => {
//   console.log("Server has received a request");
//   const url = requestobject.url;
//   responseobject.setHeader("content-type", "text/html");

//   responseobject.write("<h2>Error 404: Page not found</h2>");
//   responseobject.end();
// };

// const handleProfileRequest = (req, res) => {
//   res.send("<h3>Your profile</h3>")}

// const handleLoginRequest = (req, res) => {
//   res.send("<h3>Login page</h3>")}

// const handleSignupRequest = (req, res) => {
//   res.send("<h3>Signup page</h3>")}

// const handleHomeRequest = (req, res) => {
//   res.send("<h3>Home page</h3>")}

// const handleProfileUploadRequest = (req, res) => {
//   res.send("<h3>Upload your profile</h3>")}



// server.use('/profileupload', handleProfileUploadRequest);
// server.use('/profile', handleProfileRequest);
// server.use('/login', handleLoginRequest);
// server.use('/signup', handleSignupRequest);
// server.use('/', handleHomeRequest);
// server.use(handleAllRequests);






// const http = require("http");

// const handleAllRequests = (requestobject, responseobject) => {
//   console.log("Server has received a request");
//   const url = requestobject.url;
//   responseobject.setHeader("content-type", "text/html");

//   if (url === "/") {
//     responseobject.write("<h2>Home page</h2>");
//   }

//   else if (url === "/login") {
//     responseobject.write("<h2>Login page </h2>");
//   }

//   else if (url === "/profile") {
//     responseobject.write("<h2>Your profile</h2>");
//   }

//   else if (url === "/signup") {
//     responseobject.write("<h2>SignUp page</h2>");
//   }

//   else {
//     responseobject.write("<h2>Error 404: Page not found</h2>");
//   }

//   responseobject.end();
// };

// const server = http.createServer(handleAllRequests);

// server.listen(3000, "127.0.0.1", () =>
//   console.log("server is ready")
// );

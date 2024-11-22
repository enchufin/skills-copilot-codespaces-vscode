//create web server
const express = require('express');
const app = express();
//parse incoming request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//get comments
app.get('/comments', (req, res) => {
  //get comments from database
  const comments = database.getComments();
  //send comments back to client
  res.json(comments);
});
//post comment
app.post('/comments', (req, res) => {
  //get comment from client
  const comment = req.body.comment;
  //save comment to database
  database.saveComment(comment);
  //send success status back to client
  res.json({status: 'success'});
});
//start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
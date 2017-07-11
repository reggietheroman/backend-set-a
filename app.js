import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/users', function (req, res) {
  var users = [
    {
      "name": "Frank",
      "age": "Sinatra",
      "nationality": "American"
    },
    {
      "name": "Billy",
      "age": "Joel",
      "nationality": "American"
    },
    {
      "name": "Ringo",
      "age": "Starr",
      "nationality": "British"
    }
  ]
  res.send(users)
})

app.post('/create-user', function (req, res) {
  res.send(req.body)
})

/** 
 * Create an API endpoint that will add/subtract/multiply/divide two numbers
 * Method: POST
 * Parameter:
 *   in: body
 *   type: json (you are free to decide how you the json will look like)
 * Response:
 *   answer
 *
 */

 /** 
 * Create an API endpoint that will only return odd or even numbers
 * Method: POST
 * Parameter 1:
 *   in: params
 *   type: string (odd or even)
 * Parameter 2:
 *   in: body
 *   type: json (the numbers)
 * Response:
 *   all numbers that fit the selected parity
 *  
 * Example:
 * Request: localhost:3000/odd, [{"Number": "1"},{"Number": "2"},{"Number": "3"},{"Number": "4"}]
 * Response: [{"Number": "1"}, {"Number": "3"}]
 *
 */

 /** 
 * Create an API endpoint that will create a file with your name in it
 * Method: POST
 * Parameter:
 *   in: params
 *   type: string
 * Response:
 *   status 200 and file directory
 *
 */
const express = require('express');
const cors = require('cors');
require('dotenv')

//npm install express
//npm install dotenv
//npm create-react-app node-fun-front
//check out npm install nodemon for auto server update
//npm instal cors     - cross-origin resource
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get('/', (request, response) => {
    response.send('howdy from home route');
});

app.get('/shopping-list', (request, response) => {
    response.send('shopping list soon');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
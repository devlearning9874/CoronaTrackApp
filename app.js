const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const api = require('./routes/api');
const beds = require('./routes/beds');
const deceased = require('./routes/deceased');


// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());



app.use("/api", api);
app.use("/beds", beds);
app.use("/deceased", deceased);

// Index Route
// app.get('/', (req, res) => {
//   res.send('invaild endpoint');
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

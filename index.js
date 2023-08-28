const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
    const ipaddress = req.ip
    const language = req.headers["accept-language"]
    const software = req.headers["user-agent"]
  
    res.json({ ipaddress, language, software })
  })
  

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200})); // some legacy browsers choke on 204


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/task', require('./routers/task'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', (req, res) => res.send('Working!'));

app.listen(port, () => console.log('🚀 Server ready server started'));
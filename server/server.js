const express = require('express');
const app = express();

const deviceRouter = require('./routes/router.device');


const PORT = 5000;

app.use(express.static('server/public'));
app.use('/devices',deviceRouter);


app.listen(PORT,() => console.log(`Listening on port ${PORT}...`));
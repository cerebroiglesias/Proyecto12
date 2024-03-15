const express = require('express');
const dotenv = require('dotenv');
const mascotasRouter = require('./routes/mascotasRouter');
const personasRouter = require('./routes/personasRouter');

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use('/api/mascotas', mascotasRouter);
app.use('/api/personas', personasRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})
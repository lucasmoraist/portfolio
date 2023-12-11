const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials:true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get("/downloadCV", (req, res) =>{
    res.download("./uploads/Currículo.pdf");
})

app.use((err, req, res, next) => res.json({error: err.message}));

app.listen(8000, () => {
  console.log('Servidor porta 8000');
})

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const photo = {
        id: 1,
        name: "Sample",
        desc: "test desc"
    }
    res.send(photo);
});

app.listen(port, () => {
  console.log(`App started ad ${port}th port`);
});

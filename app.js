const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.show('Hello, welcome to my website!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

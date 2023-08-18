const express = require("express")

const app = express();
PORT = 3000;

app.use(express.json())
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => console.log('server started'))

// const express = require("express");

// const app = express();

// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

// app.use("/api/users", require("./routes/api/users"));

// app.listen(3000, () => console.log('Server started'));
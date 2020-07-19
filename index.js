const express = require("express");

const app = express();

const productRoute = require("./routes/products.routes");

require("./database");

app.use(express.json());
app.use(productRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});

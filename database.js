const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/paginateapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`paginateapp db ejecutandose en ${db.connection.host}`)
  )
  .catch((e) => console.error(e));

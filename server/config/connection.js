const mongoose = require("mongoose");

// Check that Heroku makes mongodb available under this env variable

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Project3",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

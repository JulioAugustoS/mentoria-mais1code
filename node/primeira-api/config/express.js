const express = require("express");

module.exports = () => {
  const app = express();

  app.set("port", 3000);
  app.use(express.json());

  return app;
};

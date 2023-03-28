const app = require("./app");
const { port } = require("./config");

const port = port;
app.listen(port, () => {
  console.log("server listening on port: " + port);
});

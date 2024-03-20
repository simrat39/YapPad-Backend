const express = require("express");
const { dbConnect } = require("./services/db_service");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

async function main() {
  await dbConnect().catch((e) => {
    console.error("An error occured while connecting to mongodb");
    console.error(e);
    process.exit(1);
  });

  app.listen(PORT, () => {
    console.log(`Started listening on port ${PORT}`);
  });
}

main();

//STARTING THE SEVER

const app = require("./app");
const dotenv = require("dotenv");

//setting config file path
dotenv.config({ path: "./config/config.env" });

//uncaught Exception
process.on("uncaughtException", function (err) {
  console.log(err.mesage);
  console.log("shuting down the server due to uncaught exceotion error");
  process.exit(1);
});

//establish database connection
const connectDatabase = require("./database/database");
connectDatabase();

//listen to server
const port = process.env.PORT;
const server = app.listen(port, () => {
  // console.log(`server started on http://localhost:${port}`);
});

//unhandled Promise Rejection Error
process.on("unhandledRejection", (error) => {
  console.log(`Error occured : ${error.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});

import dotenv from "dotenv";
dotenv.config();

import App from "./src/app.js";
import membershipRouter from "./src/routes/memberRoute.js";
const app = App();

app.use("/v1/api/membership", membershipRouter);

process.on("uncaughtException", (error) => {
  console.log(error);
  console.log("exception handled carefully");
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  console.log("exception Rejected carefully");
});

console.log(process.env.COMPUTERNAME);

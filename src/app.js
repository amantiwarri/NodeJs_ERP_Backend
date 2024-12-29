import express from "express";
import connect from "./config/database.js";
export default function App() {
  const app = express();
  app.use(express.json()); // For parsing JSON data

  const PORT = process.env.PORT || 3000;
  const HTTP_SERVER = process.env.HTTP_SERVER;

  app.listen(PORT, HTTP_SERVER, () => {
    console.log(`Server started at Port : ${PORT}`);
    //connect();
  });
  return app;
}

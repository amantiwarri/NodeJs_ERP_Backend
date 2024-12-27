import mongoose from "mongoose";

function connect() {
  mongoose.connect(process.env.DB_URL);
  const db = mongoose.connection;
  db.on("error", (err) => {
    console.error("Error in DB Connection " + err);
  });

  db.on("open", () => {
    console.log("DB Connected ");
  });
}

export default connect;

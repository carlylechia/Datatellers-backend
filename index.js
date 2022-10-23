import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;
// Connect to the database
mongoose
  .connect(process.env.DB_URI,
    {
      useNewUrlParser: true,
    })
  .then( async client => {
    app.listen(port, () => console.log(`App is listening on port ${port}!`))
  } )
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });

  mongoose.Promise = global.Promise;

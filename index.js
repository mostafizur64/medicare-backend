import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 800;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is Working");
});

// database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database is connected");
  } catch (error) {
    console.log("MongoDB database is connected Failed");
  }
};
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute); //domain/api/v1/auth/register;
app.use("/api/v1/users", userRoute); //domain/api/v1/auth/users;
app.use("/api/v1/doctors", doctorRoute); //domain/api/v1/auth/users;

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});

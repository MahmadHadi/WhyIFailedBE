import express from "express";
import dotenv from "dotenv";

import AdminRouter from "./Routes/AdminRoutes.js";
import connectDB from "./Config/MongoDB.js";
import EmployeeRouter from "./Routes/EmployeeRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.use(express.json());


app.use("/api/admin", AdminRouter);
app.use("/api/employee", EmployeeRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

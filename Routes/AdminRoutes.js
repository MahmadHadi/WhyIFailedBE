import express from "express";

import { AddAdmin, GetAdmins } from "../Controllers/AdminController.js";

const AdminRouter = express.Router();

AdminRouter.post("/add", AddAdmin);
AdminRouter.get("/all", GetAdmins);

export default AdminRouter;

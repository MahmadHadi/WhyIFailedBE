import express from "express";
import { addEmployee, updateEmp, listEmployee, deleteEmployee } from "../Controllers/EmployeeController.js";

const EmployeeRouter = express.Router();

// Add emp
EmployeeRouter.post("/add", addEmployee);

// list emp
EmployeeRouter.get("/list", listEmployee);

// Update emp
EmployeeRouter.put("/update/:id", updateEmp);

// delete emp
EmployeeRouter.delete("/delete/:id", deleteEmployee);

export default EmployeeRouter;

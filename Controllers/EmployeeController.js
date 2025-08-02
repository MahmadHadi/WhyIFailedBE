import Employee from "../Models/EmployeeModel.js";

// Add employee
const addEmployee = async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.json({ success: true, message: "Employee added", newEmp });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding employee", error });
  }
};

// Get all employees
const listEmployee = async (req, res) => {
  try {
    const allEmp = await Employee.find({});
    console.log(allEmp);
    res.json({ success: true, allEmp });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error listing employee", error });
  }
};

// Update employee
const updateEmp = async (req, res) => {
  try {
    const updatedEmp = await Employee.findOneAndUpdate(
      { EMP_ID: req.params.id }, // use EMP_ID, not _id
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedEmp) {
      return res.json({ success: false, message: "Employee not found" });
    }

    res.json({ success: true, message: "Employee updated", updatedEmp });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating employee", error });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const deletedEmp = await Employee.findOneAndDelete({
      EMP_ID: req.params.id,
    });
    if (!deletedEmp) {
      return res.json({ success: false, message: "Employee not found" });
    }
    res.json({ success: true, message: "Employee deleted", deletedEmp });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting employee", error });
  }
};

const markAttendanceOnLogin = async (req, res) => {
  const empId = req.body.EMP_ID;
  const now = new Date();
  const todayStr = now.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  try {
    const employee = await Employee.findOne({ EMP_ID: empId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Check if already marked today
    const alreadyMarked = employee.EMP_ATTENDANCE.some(
      (entry) => entry.date === todayStr
    );

    if (alreadyMarked) {
      return res.status(200).json({
        message: "Attendance already marked for today",
        attendance: employee.EMP_ATTENDANCE,
      });
    }

    // Mark attendance for today
    employee.EMP_ATTENDANCE.push({
      date: todayStr,
      present: true,
      loginTime: now,
    });

    await employee.save();

    res.status(200).json({
      message: "Attendance marked successfully",
      attendance: employee.EMP_ATTENDANCE,
    });
  } catch (error) {
    res.status(500).json({ message: "Error marking attendance", error });
  }
};

// export const loginWithToken = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const user = await Employee.findOne({ EMP_EMAIL: email });
//     if (!user) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     const token = generateToken(user._id);

//     res.json({
//       success: true,
//       token,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed", error });
//   }
// };

export {
  addEmployee,
  listEmployee,
  deleteEmployee,
  updateEmp,
  markAttendanceOnLogin,
};

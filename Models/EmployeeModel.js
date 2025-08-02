import mongoose from "mongoose";

const EmpSchema = new mongoose.Schema({
  EMP_ID: {
    type: Number,
    required: true,
    unique: true,
  },
  EMP_IMG: {
    type: String, // URL from Cloudinary
  },
  EMP_NAME: {
    type: String,
    required: true,
  },
  EMP_EMAIL: {
    type: String,
    required: true,
    unique: true,
  },
  EMP_PHONE: {
    type: Number,
    required: true,
  },
  EMP_ROLE: {
    type: String, // e.g., "SD", "QA", "HR"
    required: true,
    default: "Intern",
  },
  EMP_DEPARTMENT: {
    type: String,
  },
  EMP_JOINING_DATE: {
    type: Date,
    required: true,
  },
  EMP_STATUS: {
    type: String,
    enum: ["Active", "Resigned"],
    default: "Active",
  },

  // Performance
  EMP_PERFORMANCE_RATING: {
    type: Number, // 1 to 5
    default: 3,
  },
  EMP_LAST_REVIEW_DATE: {
    type: Date,
    default: null,
  },
  EMP_FEEDBACK: {
    type: String,
    default: "",
  },

  // Attendance Summary
  EMP_ATTENDANCE: [
    {
      date: {
        type: String,
        required: true,
        default: () => new Date().toISOString().split("T")[0], // 'YYYY-MM-DD'
      },
      present: {
        type: Boolean,
        default: false,
      },
      loginTime: {
        type: Date,
        default: Date.now,
      },
      logoutTime: {
        type: Date,
      },
    },
  ],

  // Salary Breakdown
  EMP_SALARY: {
    type: Number,
    required: true,
  },
  EMP_SALARY_BREAKDOWN: {
    type: Object,
    default: {
      basic: 0,
      hra: 0,
      deductions: 0,
      net: 0,
    },
  },
});

const Employee =
  mongoose.models.Employee || mongoose.model("Employee", EmpSchema);
export default Employee;

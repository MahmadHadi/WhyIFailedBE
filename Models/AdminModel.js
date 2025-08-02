import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    ADMIN_ID: {
      type: Number,
      required: true,
      unique: true,
    },
    ADMIN_IMG: {
      type: String, // URL from Cloudinary
    },
    ADMIN_NAME: {
      type: String,
      required: true,
    },
    ADMIN_EMAIL: {
      type: String,
      required: true,
      unique: true,
    },
    ADMIN_PHONE: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const AdminModel =
  mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default AdminModel;

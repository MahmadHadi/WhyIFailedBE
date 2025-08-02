import AdminModel from "../Models/AdminModel.js";

const AddAdmin = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { ADMIN_ID, ADMIN_IMG, ADMIN_NAME, ADMIN_EMAIL, ADMIN_PHONE } =
      req.body;

    const newAdmin = new AdminModel({
      ADMIN_ID,
      ADMIN_IMG,
      ADMIN_NAME,
      ADMIN_EMAIL,
      ADMIN_PHONE,
    });

    await newAdmin.save();
    res
      .status(201)
      .json({ message: "Admin added successfully", admin: newAdmin });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding admin", error: error.message });
  }
};

const GetAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.find();
    res.status(200).json(admins);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching admins", error: error.message });
  }
};

export { AddAdmin, GetAdmins };

import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {
    if (req.method == "GET") {
      let users = await User.find({}, { password: 0 });
      res.status(200).json({ users });
    }

    if (req.method == "POST") {
      const { name, email, password,role } = req.body;
      console.log(req.body);
      let e = new User({
        name,
        email,
        password,
        role: role || "user",
      });

      await e.save();

      res.status(200).json({ success: e });
    }

    if (req.method == "DELETE") {
      const { id } = req.body;
      await User.findByIdAndDelete(id);
      res.status(200).json({ success: true });
    }

    if (req.method == "PUT") {
      console.log(req.body);
      const { id, name, email, password, role } = req.body;
      await User.findByIdAndUpdate(id, {
        name,
        email,
        password,
        role: role || "user",
      });
      res.status(200).json({ success: true });
    }
  } else {
    res.send({ message: "Not authenticated" });
  }
};

export default connectDB(handler);

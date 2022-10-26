import { getToken } from "next-auth/jwt";
import connectDB from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  const token = await getToken({ req })
  if (token) {
    if (req.method == "GET") {
      let users = await User.find();
      res.status(200).json({ users });
    }

    if (req.method == "POST") {
      const { firstName, lastName, email, password } = req.body;
      let e = new User({
        firstName,
        lastName,
        email,
        password,
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
      const { id, firstName, lastName, email, password } = req.body;
      await User.findByIdAndUpdate(id, {
        firstName,
        lastName,
        email,
        password,
      });
      res.status(200).json({ success: true });
    }
  } else {
    res.send({ message: "Not authenticated" });
  }
};

export default connectDB(handler);

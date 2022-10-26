import { getSession } from "next-auth/react";
import connectDB from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  // const session = await getSession({ req });

  // if (!session) {
  //   res.status(401).json({ message: "Not authenticated" });
  //   return;
  // }
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
};

export default connectDB(handler);

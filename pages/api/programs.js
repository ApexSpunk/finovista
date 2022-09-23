import React from "react";
import connectDB from "../../middleware/mongoose";
import Program from "../../models/Program";

const handler = async (req, res) => {
  if (req.method == "GET") {
    let programs = await Program.find();
    res.status(200).json({ programs });
  }

  if (req.method == "POST") {
    const { programTitle, pageContent, thumbnail, slug, category } = req.body;
    let e = new Program({
      title: programTitle,
      content: pageContent,
      thumbnail,
      created: Date.now(),
      slug,
      category
    });

    await e.save();

    res.status(200).json({ success: e });
  }

  if (req.method == "DELETE") {
    const { id } = req.body;
    await Program.findByIdAndDelete(id);
    res.status(200).json({ success: true });
  }

  if (req.method == "PUT") {
    const {
      id,
      programTitle,
      pageContent,
      thumbnail,
      slug,
      category
    } = req.body;
    await Program.findByIdAndUpdate(id, {
      title: programTitle,
      content: pageContent,
      thumbnail,
      slug,
      category
    });
    res.status(200).json({ success: true });
  }
};
export default connectDB(handler);

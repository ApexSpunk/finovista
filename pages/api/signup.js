import React from 'react'
import connectDB from '../../middleware/mongoose';
import User from '../../models/User'
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
  if (req.method == 'POST') {
    const { name, email, userType } = req.body
    console.log(name, email, userType)
    let u = new User({ name, email, userType: userType, password: CryptoJS.AES.encrypt(req.body.password, process.env.ENCRYPT_SECRET).toString() })

    await u.save()

    res.status(400).json({ success: u })
  } else {
    res.status(400).json({ error: 'This Method Is Not Allowed' })
  }
}
export default connectDB(handler)
import React from 'react'
import connectDB from '../../middleware/mongoose';
import User from '../../models/User'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
import { serialize } from 'cookie';



const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            var bytes = CryptoJS.AES.decrypt(user.password, process.env.ENCRYPT_SECRET);
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email == user.email && req.body.password == originalText) {
                var token = jwt.sign({ success: 'true', user: user.name, email: user.email, type: user.userType }, process.env.JWT_SECRET, {
                    expiresIn: '2h'
                });
                // const serialised = serialize('jwtToken', token, {
                //     httpOnly: true,
                //     sameSite: 'strict',
                //     maxAge: 60 * 60 * 24 * 30,
                //     path: '/'
                // })
                // res.setHeader('Set-Cookie', serialised);
                res.status(200).json({ success: 'Login Successfull', jwtToken: token })
            } else {
                res.status(400).json({ error: 'Wrong Password' })
            }
        } else {
            res.status(400).json({ error: 'User Not Found' })
        }
    } else {
        res.status(400).json({ error: 'This Method Is Not Allowed' })
    }
}
export default connectDB(handler)
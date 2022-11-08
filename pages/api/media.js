import connectDB from '../../middleware/mongoose';
import Image from '../../models/Image'
import formidable from "formidable";
import fs from "fs";
import S3 from 'aws-sdk/clients/s3';
import { getSession } from 'next-auth/react';

export const config = {
    api: {
        bodyParser: false
    }
};




const handler = async (req, res) => {
    const session = await getSession({ req })
    if (session) {
        const s3 = new S3({
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            region: process.env.S3_BUCKET_REGION,
            Bucket: process.env.S3_BUCKET_NAME,
        });


        if (req.method == 'POST') {
            const form = new formidable.IncomingForm();
            form.parse(req, async function (err, fields, files) {
                const data = fs.readFileSync(files.file.filepath);
                try {
                    const params = {
                        Bucket: process.env.S3_BUCKET_NAME,
                        Key: files.file.originalFilename,
                        Body: data,
                        ContentType: files.file.mimetype,
                    };

                    const response = await s3.upload(params).promise();
                    const { Bucket, Location, Key, ETag } = response
                    let newImage = new Image({ Name: Key, Bucket, Location, ETag, Key })
                    await newImage.save()

                    res.status(200).json({ success: true, data: newImage });
                } catch (error) {
                    res.status(400).json({ success: false, error });
                }
            });
        } else {
            res.status(200).json({ message: 'This Method is not allowed' })
        }
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
}
export default connectDB(handler)
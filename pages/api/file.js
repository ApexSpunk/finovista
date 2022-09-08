import formidable from "formidable";
import fs from "fs";
import S3 from 'aws-sdk/clients/s3';

export const config = {
  api: {
    bodyParser: false
  }
};

// const post = async (req, res) => {
//   const form = new formidable.IncomingForm();
//   console.log(form)
//   form.parse(req, async function (err, fields, files) {
//     await saveFile(files.file);
//     return res.status(201).send("");
//   });
// };

// const saveFile = async (file) => {
//   const data = fs.readFileSync(file.filepath);
//   fs.writeFileSync(`./public/uploads/${file.originalFilename}`, data);
//   await fs.unlinkSync(file.filepath);
//   console.log('done')
//   return;
// };

// export default (req, res) => {
//     req.method === "POST"
//         ? post(req, res)
//         : req.method === "PUT"
//             ? console.log("PUT")
//             : req.method === "DELETE"
//                 ? console.log("DELETE")
//                 : req.method === "GET"
//                     ? res.status(200).json({ success: 'success' })
//                     : res.status(200).json({ success: 'success' })
// };




const s3 = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
  Bucket: process.env.S3_BUCKET_NAME,
});

export default async (req, res) => {
  const { method } = req;
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    // await saveFile(files.file);
    // return res.status(201).send("");
    console.log(files)
    const data = fs.readFileSync(files.file.filepath);
    switch (method) {
      case 'POST':
        try {
          const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: files.file.originalFilename,
            Body: data,
            ContentType: files.file.mimetype,
          };
          console.log(params)

          const response = await s3.upload(params).promise();

          res.status(200).json({ success: true, data: response });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  });


}


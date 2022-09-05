import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false
    }
};

const post = async (req, res) => {
    const form = new formidable.IncomingForm();
    console.log(form)
    form.parse(req, async function (err, fields, files) {
        await saveFile(files.file);
        return res.status(201).send("");
    });
};

const saveFile = async (file) => {
    console.log(file,'this is file')
    const data = fs.readFileSync(file.filepath);
    console.log(data,"this is data")
    fs.writeFileSync(`./public/uploads/${file.originalFilename}`, data);
    await fs.unlinkSync(file.filepath);
    console.log('done')
    return;
};

export default (req, res) => {
    req.method === "POST"
        ? post(req, res)
        : req.method === "PUT"
            ? console.log("PUT")
            : req.method === "DELETE"
                ? console.log("DELETE")
                : req.method === "GET"
                    ? res.status(200).json({ success: 'success' })
                    : res.status(200).json({ success: 'success' })
};

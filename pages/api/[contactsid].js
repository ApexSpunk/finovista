import Mail from '../../models/Mail'
import connectDB from '../../middleware/mongoose';




const handler = async (req, res) => {
    if (req.method == 'GET') {
        let obj = {
            organizationType: req.query.orgType,
            sector: req.query.sector,
            subSector: req.query.subSector,
            subSector2: req.query.subSector2,
            country: req.query.country,
            state: req.query.state,
            city: req.query.city,
            status: req.query.status,
            addedBy: req.query.addedBy,
            date: req.query.date
        }
        let limit;
        if (req.query.limit == undefined) {
            limit = 20
        } else {
            limit = req.query.limit
        }
        let page;
        if (req.query.page == undefined) {
            page = 1
        } else {
            page = req.query.page
        }
        let search = {}
        for (let key in obj) {
            if (obj[key] != undefined) {
                search[key] = obj[key]
            }
        }

        console.log(search)
        console.log(page, limit)
        let contacts = await Mail.find(search).skip((page - 1) * limit).limit(limit)
        res.status(200).json({ contacts })
    }

    if (req.method == 'POST') {
        const { sal, firstName, lastName, email, secondEmail, phone, tel, designation, organizationName, organizationType, sector, subSector, subSector2, country, state, city, website, organizationProfile, remark1, remark2, remark3, addedBy,date } = req.body
        let u = new Mail({ sal, firstName, lastName, email, secondEmail, phone, tel, designation, organizationName, organizationType, sector, subSector, subSector2, country, state, city, website, organizationProfile, remark1, remark2, remark3, addedBy, status: 'pending', date })
        await u.save()
        res.status(200).json({ success: 'success', contact: u })
    }

}

export default connectDB(handler)
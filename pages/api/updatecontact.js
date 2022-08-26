import Mail from '../../models/Mail'
import connectDB from '../../middleware/mongoose';




const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { sal, firstName, lastName, email, secondEmail, phone, tel, designation, organizationName, organizationType, sector, subSector, subSector2, country, state, city, website, organizationProfile, remark1, remark2, remark3, status } = req.body
        try {
            let u = await Mail.findByIdAndUpdate(req.body._id, {
                sal: sal,
                firstName: firstName,
                lastName: lastName,
                email: email,
                secondEmail: secondEmail,
                phone: phone,
                tel: tel,
                designation: designation,
                organizationName: organizationName,
                organizationType: organizationType,
                sector: sector,
                subSector: subSector,
                subSector2: subSector2,
                country: country,
                state: state,
                city: city,
                website: website,
                organizationProfile: organizationProfile,
                remark1: remark1,
                remark2: remark2,
                remark3: remark3,
                status: status
            })
            res.status(200).json({ success: 'success' })
        } catch (error) {
            res.status(400).json({ error: error })
        }
    }

}

export default connectDB(handler)
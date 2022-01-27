import ProfileData from "../models/Profile.js";


export const getProfile = async (req, res) => {
    try {
        const profileData = await ProfileData.find()
        res.status(200).json(profileData);
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
}

export const getProfileById = async (req, res) => {
    try {
        const ID = req.query.ID;
        const profileData = await ProfileData.findById(ID)
        res.status(200).json(profileData);
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
}

export const createProfile = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const profileData = req.body;
    console.log(profileData)
    const newProfileData = new ProfileData(profileData);

    try {
        await newProfileData.save();
        res.status(201).json(newProfileData)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }

}

const school = require('../models/school');

const calculateDistance = (uLat, uLon, sLat, sLon) => {
    const R = 6371;
    const dLat = (sLat - uLat) * Math.PI / 180;
    const dLon = (sLon - uLon) * Math.PI / 180;

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(uLat * Math.PI / 180) * Math.cos(sLat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    return R * c;
}

const addSchool = async (req, res) => {
    const {name, address, latitude, longitude} = req.body;
    if(!name || !address || !latitude || !longitude){
        return res.status(400).json({ message: "Please fill all the required fields" });
    }
    try{
        const sId = await school.addSchool(name, address, latitude, longitude);
        res.status(201).json({ message: "School added successfully", sId });
    }
    catch(err){
        res.status(500).json({ message: "Server Error" });
    }
}

const listSchools = async (req, res) => {
    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);

    if(isNaN(userLatitude) || isNaN(userLongitude)){
        return res.status(400).json({ message: "Invalid latitude or longitude" });
    }

    try{
        const schools = await school.getSchools();
        const sortedSchools = schools.map((school) => {
            const distance = calculateDistance(userLatitude, userLongitude, school.latitude, school.longitude);
            return {...school, distance};
        }).sort((a, b) => a.distance - b.distance);
        res.status(200).json({ message: "Schools data fetched successfully", sortedSchools });
    }
    catch(err){
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { addSchool, listSchools };
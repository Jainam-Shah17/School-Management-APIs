const db = require('../config/db').pool;

const addSchool = async (name, address, latitude, longitude) => {
    try{
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(query, [name, address, latitude, longitude]);
        return result.insertId;
    }
    catch(err){
        throw err;
    }
}

const getSchools = async () => {
    try{
        const query = 'SELECT * FROM schools';
        const [rows] = await db.execute(query);
        return rows;
    }
    catch(err){
        throw err;
    }
}

module.exports = { addSchool, getSchools };
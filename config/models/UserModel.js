const db= require('../db');

// these functions contain the users interactions with the database

function createUser(data, cb) {
    const sql = 'INSERT INTO users (User_name, User_password, User_email) VALUES (?, ?,?)';
    const values = [data.User_name, data.User_password, data.User_email];  
    db.query(sql, values, (err,result)=>{
        if (err) return cb(err);
        return cb(null, result);
        });
    } 

    function getUserById (userId, cb) {
    const sql = 'SELECT * FROM users WHERE USER_ID = ?';
    db.query(sql, [userId], (err, results) => {
        if (err) return cb(err);
        return cb(null, results[0]);
    });
};

function updateLastLogin (userId, cb) {
    const sql = 'UPDATE users SET last_login = NOW() WHERE USER_ID = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) return cb(err);
        return cb(null, result);
    });
};

function getUserByEmail  (email, cb) {
    const sql = 'SELECT * FROM users WHERE User_email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return cb(err);
        return cb(null, results[0]);
    });
};

    
function getUserByUsername(username, cb) {
    const sql = 'SELECT * FROM users WHERE User_name = ?';
    db.query(sql, [username], (err, results) => {
        if (err) return cb(err);
        return cb(null, results[0]);
    });
}
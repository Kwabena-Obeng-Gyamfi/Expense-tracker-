const db = require('../db');

//this function gets all transactions from the database, and cb is a parameter
//that is a callback function that will be called in the controller folder 

function getAllTransactions(cb) {
    const sql= 'select * from transactions order by date desc';
    db.query(sql,cb);
}

function getTransactionsByUser(userId, cb){

    const sql='select * from transactions where USER_ID =? order by date desc';
    db.query(sql,[userId],cb);

}

function addTransaction(data,cb){

    const sql='insert into transactions (USER_ID, AMOUNT, TYPE, DATE,TITLE) values (?,?,?,?,?)'; 
    
    const values=[data.USER_ID, data.AMOUNT, data.TYPE, data.DATE, data.TITLE];
    
    db.query(sql,values,(err,result) =>{
        if (err) return cb(err);
        return cb(null, result);
    });
    
}

function deleteTransaction(id,cb){

    const sql='delete from transactions where ID = ?';
    db.query(sql,[id],cb);
}

module.exports={
    getAllTransactions,
    getTransactionsByUser,
    addTransaction,
    deleteTransaction
};    
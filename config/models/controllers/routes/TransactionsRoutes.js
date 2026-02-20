const express = require('express');
const router = express.Router();    

// import the controller functions

const transactionsController = require('../TransactionsController');

// define the routes and map them to controller functions
router.get('/transactions', transactionsController.getAllTransactionController);
router.get('/transactions/user/:userId', transactionsController.getTransactionsByUserController);
router.post('/transactions/add', transactionsController.addTransactionController);
router.delete('/transactions/delete/:id', transactionsController.deleteTransactionController);  

module.exports = router;
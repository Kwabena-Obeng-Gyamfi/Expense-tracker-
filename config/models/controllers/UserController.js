/*Receive data from your routes.

Use the model functions .

Send a proper response back to the frontend or API consumer.
*/

const UserController = require('../UserModel');

function createuserController (req,res){

    UserController.createuser((err,results)=> {
        if(err)
            { return res.status(500).json({error:"issue to be fixed "})
}
    return res.status(200).json(results);}
    
)};

function getUserByIdController (req,res){

    UserController.createuser((err,results)=> {
        if(err)
            { return res.status(500).json({error:"issue to be fixed "})
}
    return res.status(200).json(results);}
    
)};

function createuserController (req,res){

    UserController.createuser((err,results)=> {
        if(err)
            { return res.status(500).json({error:"issue to be fixed "})
}
    return res.status(200).json(results);}
    
)};

function createuserController (req,res){

    UserController.createuser((err,results)=> {
        if(err)
            { return res.status(500).json({error:"issue to be fixed "})
}
    return res.status(200).json(results);}
    
)};

function createuserController (req,res){

    UserController.createuser((err,results)=> {
        if(err)
            { return res.status(500).json({error:"issue to be fixed "})
}
    return res.status(200).json(results);}
    
)};
/*Receive data from your routes (like when someone hits /transactions/add).

Use the model functions (like addTransaction() and getAllTransactions()).

Send a proper response back to the frontend or API consumer.
*/

const TransactionsController= require('../TransactionsModel');

function getAllTransactionController(req,res){

    TransactionsController.getAllTransactions((err,results)=>{
    if(err){
        return res.status(500).json({error:"issue to be fixed "})
}
    return res.status(200).json(results);}

    )};   
    
    function getTransactionsByUserController(req,res){
        const userId=req.params.userId;

        TransactionsController.getTransactionsByUser(userId, (err,results)=>{

            if(err){
                return res.status(500).json({error:"issue to be fixed"})
            }

            res.status(200).json({results})

        });

        }


        function addTransactionController(req,res){

            const data=req.body;

            TransactionsController.addTransaction(data,(err,results)=>{

                if(err) {
                    return res.status(500).json({error:"issue to be fixed"})
                }

                res.status(200).json({results})
            
              });

            }

            function deleteTransactionController(req,res){

                const id=req.params.id;
                TransactionsController.deleteTransaction(id,(err,results)=>{

                    if(err){
                        return res.status(500).json({error:"issue to be fixed"})
                    }

                     res.status(200).json({results})
            
              });

            }
module.exports={
    getAllTransactionController,
    getTransactionsByUserController,
    addTransactionController,
    deleteTransactionController
};
         
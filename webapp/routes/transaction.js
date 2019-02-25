const fs = require('fs');
var jwt = require('jsonwebtoken');
var SECRET_KEY = "AnKm";
const uuidv2 = require('uuid/v1');

module.exports = {
   
    addTransaction: (req, res) => {

    	//get token using jwt verify
    	client.increment('addTransaction.http.post');
    	var token = req.headers['x-access-token'];
    	 if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    	 	jwt.verify(token, SECRET_KEY, function(err, decoded) {

	    		if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
	    		else {

	    			let id = uuidv2();
	    			let description = req.body.description;
	    			let merchant = req.body.merchant;
	    			let amount = req.body.amount;
	    			let date = req.body.date;
	    			let category = req.body.category;
	    			let user_id = decoded.id;

	    			console.log(req.body);

	    			//let addQuery = "insert into transaction (description, merchant, amount, date, category, user_id) values (description,:merchant,:amount,:date,:category,:user_id)";
	    			if(!description || !merchant || !amount || !date || !category || !user_id) {
	    					return res.status(400).send({ auth: false, message: 'Invalid Input' });
	    			}
	    			else {
	    				var postJson = {ID: id, description: description, merchant: merchant, amount: amount, date: date, category: category, user_id: user_id};

	                    db.query("insert into transaction set ? ",
	                    	postJson,(err, result) => {
	                         if (err) {
	                            return res.status(500).send(err);
	                          }
	                            
	                         res.status(200).json({ success: true, Transaction: result, transactionid: id });
	                    });
				   }
				}
			});

        
    },
    

    
    deleteTransaction: (req, res) => {

    	 //get token using jwt verify
    	 client.increment('deleteTransaction.http.delete');
    	 var token = req.headers['x-access-token'];
    	 if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    	 	jwt.verify(token, SECRET_KEY, function(err, decoded) {

	    		if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
	    		else {

	    			let ID = req.params.id;
	    			db.query("delete from transaction where ID = '"+ ID + "' and user_id =" + decoded.id,
	                    	(err, result) => {
	                         if (err) {
	                            return res.status(400).send(err);
	                          }
	                            
	                         res.status(204).json({ success: true, Transaction: result});
	                    });
				   }
			});

         

	},
	
	getTransaction: (req, res) => {

    	//get token using jwt verify
    	client.increment('getTransaction.http.get');
    	 var token = req.headers['x-access-token'];
    	 if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    	 	jwt.verify(token, SECRET_KEY, function(err, decoded) {

	    		if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
	    		else {

	    			let getQuery = "select * from transaction where user_id = " + decoded.id;

	                    db.query(getQuery, (err, result) => {
	                         if (err) {
	                            return res.status(500).send(err);
	                          }
	                          else if (result.affectedRows < 1) {
	                         	return res.status(400).json({ success: false, msg: 'Either the transaction ID is incorrect or it doesnot belong to you'});
	                         } 
	                            
	                         res.status(200).json({ success: true, Transaction: result});
	                    });
				   }
			});
	 },

    
    editTransaction: (req, res) => {

       //get token using jwt verify
       client.increment('editTransaction.http.put');
       var token = req.headers['x-access-token'];
    	 if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    	 	jwt.verify(token, SECRET_KEY, function(err, decoded) {

	    		if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
	    		else {

	    			let ID = req.params.id;
	    			let description = req.body.description;
	    			let merchant = req.body.merchant;
	    			let amount = req.body.amount;
	    			let date = req.body.date;
	    			let category = req.body.category;
	    			let user_id = decoded.id;

	    			console.log("ID "+ ID);

	    			//let addQuery = "insert into transaction (description, merchant, amount, date, category, user_id) values (description,:merchant,:amount,:date,:category,:user_id)";
	    			  db.query("update transaction set description = '"+ description+ "', merchant = '"+ merchant+ "',amount = '"+ amount+ "',date = '"+ date+ "',category = '"+ category+ "' where ID = '"+ ID + "' and user_id =" + user_id ,
	                    	(err, result) => {
	                         if (err) {
	                            return res.status(400).send(err);
	                          }
	                         else if (result.affectedRows < 1) {
	                         	return res.status(400).json({ success: false, msg: 'Either the transaction ID is incorrect or it doesnot belong to you'});
	                         }  

	                         res.status(200).json({ success: true, Transaction: result});
	                    });
				   
				}
			});

       
    },
};



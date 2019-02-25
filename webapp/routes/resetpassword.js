// const fs = require('fs');
// var jwt = require('jsonwebtoken');
// var SECRET_KEY = "AnKmJainism";
// var validator = require("email-validator");
// var AWS = require('aws-sdk');


// AWS.config.update({
//     // accessKeyId: process.env.AWS_ACCESS_KEY,
//     // secretAccessKey: process.env.AWS_SECRET_KEY,
//     region: process.env.REGION,
//     domain: process.env.DOMAINNAME
//   });

// var sns = new AWS.SNS();


// module.exports = {
    
    
//     resetpassword: (req, res) => {
//       client.increment('resetpassword.http.post');		
//       var username = req.body.username;
//       var token = jwt.sign({ username: username}, SECRET_KEY, { expiresIn: 5000 });
//       var mydomain =  process.env.DOMAINNAME;
   
//           // var params = {
//           //   Username: username,
//           //   Token: token,
//           //   Domain: mydomain
//           // };

//           // params = JSON.stringify(params);

          
//           // sns.publish({
//           //   Message: params,      // Required
//           //   TargetArn: process.env.PWDRESETARN // Required
//           // }, function(err, data) {
//           //   if (err) {
//           //     console.log(err.stack);
//           //     return;
//           //   }

//           //   console.log('push sent');
//           //   console.log(data);
//           // });

//         if(validator.validate(username)){

        
//             db.query("SELECT 1 FROM user WHERE username = ? ORDER BY username LIMIT 1", [username], function (error, results, fields) {
//                 if (error) {
//                    //return res.status(500).send(err);
//                    return res.status(400).json({ success: false, msg: err});
                   
//                 }
//                 if (results.length < 1) {
                   
//                    res.status(400).json({ success: false, msg: 'User doesnot exists. Please retry'});

//                 } else {

//                         var params = {
//                         Username: username,
//                         Token: token,
//                         Domain: mydomain
//                       };

//                       params = JSON.stringify(params);

                      
//                       sns.publish({
//                         Message: params,      // Required
//                         TargetArn: process.env.PWDRESETARN // Required
//                       }, function(err, data) {
//                         if (err) {
//                           console.log(err.stack);
//                           return;
//                         }

//                         console.log('push sent');
//                         console.log(data);
//                       });

//                       res.status(200).json({ success: true, msg: 'Email Sent'});


//                 }
                
//                 });
//         }   else {
//                       res.status(400).json({ success: false, msg: 'Username is invalid'});
//         }
//       }
        

            

// }

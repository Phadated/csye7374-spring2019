
module.exports = {
  getHomePage: (req, res) => {

    res.render('main.ejs', {
        title: "Welcome"

    });

},
    getPingPage: (req, res) => {
       res.send("PongKrish")
    },

  
};



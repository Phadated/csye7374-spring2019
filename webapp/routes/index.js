module.exports = {
    getHomePage: (req, res) => {
       res.send("Welcome")
    },
    getPingPage: (req, res) => {
       res.send("Pong")
    }
};



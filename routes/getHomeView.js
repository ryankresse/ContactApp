exports.get = function (req, res) {
    var options = {
      root:  "public" 
    }
   
   res.sendFile("html/home.html", options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log("Sent to");
    }
  });
}







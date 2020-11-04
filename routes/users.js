let express = require('express');
let routes = express.Router();



routes.get("/", (req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        users: [
          {
            userName: "felipe  ",
            email: "femonsao@gmail.com",
            password: "123456",
            id: 1
          }],
    });
  
});

routes.get("/admin", (req , res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        users: [
          {
            userName: "felipe",
            email: "femonsao@gmail.com",
            password: "123456",
            id: 1,
            activate:'true',
            cpf: '418.458.458.02'
          }],
    });

});

module.exports = routes;
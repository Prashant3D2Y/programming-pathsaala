const express = require('express');

const app = express();


app.get('/home',(req , res) => {
    res.send("This is the home page");
    });

    app.post('/home',(req , res) => {
        res.send("This is the home page");
        });

        app.put('/home',(req , res) => {
            res.send("This is the home page");
            });

             app.delete('/home',(req , res) => {
                 res.send("This is the home page");
                 });

                 app.patch('/home',(req , res) => {
                     res.send("This is the home page");
                     });

                     app.options('/home',(req , res) => {
                         res.send("This is the home page");
                         });

                         


app.listen( );


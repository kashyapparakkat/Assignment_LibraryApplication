const book = require("../models/bookData");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

router.get("/get-all-books", async function (req, res) {
    try {

        res.header("Access-Control-Allow-Origin",'*');
        res.header("Access-Control-Allow-method:GET,POST,PUT,DELETE");

        const contract = book
            //.findOne({email: req.email})
            .find()
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
                        message: ["Books not found"],
                    });
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});


// create course api
router.post("/add-book", async (req, res) => {

    try {
        res.header("Access-Control-Allow-Origin",'*');
        res.header("Access-Control-Allow-method:GET,POST,PUT,DELETE");
        // console.log("User email -- " + req.body.email);

        let uID = uniqueID();

        const apicontract = new book({
            id: uID,
            title: req.body.title,
            description: req.body.description,
            /*username: req.body.username,*/
            date: req.body.date,
            author: req.body.author,
            // location: req.body.location,
            rate: req.body.rate,
            //dob: req.body.dob,

        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                //res.send(data)
                res.json({
                    id: data.id,
                    title: data.title
                });
            })
            .catch((err) => {
                console.log("Error:", err);
                res.status(500);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});

router.delete('/remove-book/:id',(req,res)=>{

    id = req.params.id;
    book.findByIdAndDelete({"_id": id})
        .then(()=>{
            console.log('success')
            res.send();
        })
})

router.get('/book/:id',  (req, res) => {

    const id = req.params.id;
    book.findOne({"id":id})
        .then((course)=>{
            res.send(course);
        });
})

//update API by id
router.put("/update-book", (req, res) => {
    try {
        let title = req.body.title;


        const contract = book
            .findOneAndUpdate(
                {title: title},
                {
                    title : req.body.title,
                    description : req.body.description,
                    date : req.body.date,
                    author: req.body.author,
                    rate : req.body.rate
                }
            )
            .then((data) => {
                res.status(200);
                //res.send(data)
                res.json({
                    id: data.id,
                    title: data.title,
                    message: "book modified successfully",
                });
            })
            .catch((err) => {
                console.log("Error:", err);
                res.status(500);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});




module.exports = router;
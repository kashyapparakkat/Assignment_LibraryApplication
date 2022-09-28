
const user = require("../models/userData");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

router.get("/get-user-details", async function (req, res) {
    try {
        const contract = user
            .findOne({email: req.email})
            //.findOne({email: "kashyap.parakkat@gmail.com"})
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
                        message: ["student not found"],
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

// create user api
router.post("/add-user", async (req, res) => {
    try {
        console.log("User email -- " + req.body.email);

        let uID = uniqueID();

        const apicontract = new user({
            id: uID,
            name: req.body.fullname,
            email: req.body.email,
            /*username: req.body.username,*/
            password: req.body.pwd,
            number: req.body.mobile,
            //dob: req.body.dob,
            /*qualification: req.body.qualification,
            specialisation: req.body.specialisation,
            isEnrolled: req.body.isEnrolled*/

        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                res.json({
                    id: data.id,
                    name: data.name
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
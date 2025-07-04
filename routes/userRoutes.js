const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
    res.josn({message: "Register the user"});
});

router.post("/login", (req, res) => {
    res.josn({message: "login the user"});
});

router.post("/current", (req, res) => {
    res.josn({message: "current user information"});
});

module.exports = router; 
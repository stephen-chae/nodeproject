"use strict";

const home = (req, res) => {
    res.send("루트 입니다.");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};
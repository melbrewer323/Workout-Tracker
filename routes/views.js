const express = require("express");
const path = require("path");
const router = require("express").Router();

router.get("/", (req,res) => {
    res.get(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

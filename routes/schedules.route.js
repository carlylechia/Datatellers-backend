import express from "express";

const router = express.Router();

router.get("/schedules", ((req, res) => res.send('Now you see me?')));

export default router;

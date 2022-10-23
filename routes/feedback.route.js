import express from "express";

const router = express.Router();

router.get("/schedule/:id/feedback", ((req, res) => res.send('Feedback route: Now you see me?')));

export default router;

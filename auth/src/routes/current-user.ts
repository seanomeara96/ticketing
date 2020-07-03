import express from "express";

import { currentUser } from "@somtickets/common";
import { requireAuth } from "@somtickets/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };

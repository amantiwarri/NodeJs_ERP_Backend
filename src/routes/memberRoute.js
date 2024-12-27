import express from "express";
const router = express.Router();

import {
  getMemberByFilter,
  getMembers,
  members,
} from "../controller/membershipController.js";
///v1/api/membership

router.get("/member", getMembers);
router.post("/", getMemberByFilter);
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//Insert membership data
router.post("/member", members);

export default router;

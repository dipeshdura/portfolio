import express from "express";
import { allContact, contactForm } from "../controllers/contact.controller.js";

const router =express.Router();

router.post("/contact",contactForm);
router.get("/allContact",allContact);

export default router;
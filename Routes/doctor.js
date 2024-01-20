import express from "express";
import {
    updateDoctor,
  deleteDoctor,
  getSingleDoctor,
  getAllDoctor,
} from "../Controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
const router  = express.Router();
router.get("/:id",getSingleDoctor);
router.get("/",getAllDoctor);
router.put("/:id",restrict(['doctor']),updateDoctor);
router.delete("/:id",restrict(['doctor']),deleteDoctor);

export default router;
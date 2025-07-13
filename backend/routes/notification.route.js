import express from "express";
import {
  getNotifications,
  deleteNotifications,
} from "../controllers/notification.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.use(protectRoute);
router.get("/", getNotifications);
router.delete("/", deleteNotifications);
export default router;

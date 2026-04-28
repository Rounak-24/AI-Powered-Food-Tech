import {Router} from "express";
import{
    getItemByStatus,getItemByStatusAndCategory,getToBeExpiredItems,getAvailableInventory
} from "../controllers/internal.controller.js"
import { jwtAuthMiddleware } from "../middlewares/jwt.middleware.js";

const router=Router()
router.use(jwtAuthMiddleware)

router.get("/user_inventory/:user_id",getAvailableInventory)

router.get("/to-be-expire",getToBeExpiredItems)

router.get("/inventory/:status",getItemByStatus)

router.get("/inventory/:status/:category",getItemByStatusAndCategory)

export default router
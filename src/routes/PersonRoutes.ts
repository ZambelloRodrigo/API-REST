import { Router } from "express";
import { PersonController } from "../controllers/PersonController";

const personRouter = Router();
const personController = new PersonController();

personRouter.post('/', personController.create)
personRouter.get('/', personController.getAll)

export { personRouter }
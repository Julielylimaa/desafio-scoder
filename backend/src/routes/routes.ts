import { Router } from "express"
import { RegisterUserController } from "../controllers/RegisterUserController"

const routes = Router();
const registerUserController = new RegisterUserController()

routes.post("/user/", (req, res) => { registerUserController.handle(req, res) })

export { routes }
import { Router } from "express"
import { RegisterUserController } from "../controllers/RegisterUserController"
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateAccountingEntryController } from "../controllers/CreateAccountingEntryController";

const routes = Router();
const registerUserController = new RegisterUserController()
const authenticateUserController = new AuthenticateUserController()
const createAccountingEntryController = new CreateAccountingEntryController()

routes.post("/user/", registerUserController.handle)
routes.post("/login", authenticateUserController.handle)
routes.post("/account/", createAccountingEntryController.handle)
export { routes }
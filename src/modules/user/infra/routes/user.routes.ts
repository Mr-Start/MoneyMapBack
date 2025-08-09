import { Router, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import BCryptHashProvider from "../../../../shared/container/providers/HashProvider/implementation/BCryptHashProvider";
import { UserController } from "../controllers/user.controller";
// import { verifyApiKey } from "../../../../shared/infra/http/middlewares/verifyApiKey";
import { resolveController } from "../../../../shared/infra/http/adapters/resolverController";

export const userRoute = Router();

const userRepository = new UserRepository();
const hashProvider = new BCryptHashProvider();
const userController = new UserController(userRepository, hashProvider);

userRoute.post(
  "/",

  resolveController(async (req: Request, res: Response) => {
    return await userController.handleCreate(req, res);
  })
);

userRoute.get(
  "/",

  resolveController(async (req: Request, res: Response) => {
    return await userController.handleList(req, res);
  })
);

userRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await userController.handleFindById(req, res);
  })
);

userRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await userController.handleUpdate(req, res);
  })
);

userRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await userController.handleDelete(req, res);
  })
);

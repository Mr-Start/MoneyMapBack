import express from "express";
import { mainRoute } from "./mainRoute";
import { userRoute } from "../../../../modules/user/infra/routes/user.routes";
import { categoryRoute } from "../../../../modules/category/infra/routes/category.routes";

export const route = express.Router();

route.use("/", mainRoute);
route.use("/user", userRoute);
route.use("/category", categoryRoute);

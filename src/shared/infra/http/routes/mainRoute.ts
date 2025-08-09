import express, { Request, Response } from "express";

export const mainRoute = express.Router();

mainRoute.get("/", (_: Request, res: Response) => {
  res.json({
    project: "Money Map Backend",
    accountable: {
      name: "Paulo Henrique",
      contact: "phps6200@gmail.com",
    },
  });
});

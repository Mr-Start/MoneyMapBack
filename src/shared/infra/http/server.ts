import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { route } from "./routes";
import { handleError } from "./middlewares/handleError";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", route);

app.use(handleError);

app.listen(Number(process.env.PORT), () => {
  console.log("🚀 Backend Rodando...");
});

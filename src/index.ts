import "dotenv/config";
import config from "config";
import express from "express";
import cors from "cors";
import { handleErrors } from "./middlewares";
import morgan from "morgan";

const app = express();
// --------------------middlewares---------------------------

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log(`[+]Morgan logger Enabled for ${config.get("name")}`);
}
app.use(cors());
// ------------------End middlewares------------------------

//------------------- routes --------------------------------
//   app.use("/auth", asy);
//-------------------end routes-----------------------------

//---------------- error handler -----------------------
app.use(handleErrors);
//---------------- end error handler -----------------------

const port = config.get("port");
app.listen(port, () => {
  console.log(`[+]${config.get("name")} listening on port ${port}...`);
});

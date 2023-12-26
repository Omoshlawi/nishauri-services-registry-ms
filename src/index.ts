import "dotenv/config";
import config from "config";
import express from "express";
import cors from "cors";
import { handleErrors } from "./middlewares";
import morgan from "morgan";
import router from "./features/registry/route";
import { configuration } from "./utils";

const app = express();
// --------------------middlewares---------------------------

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log(`[+]Morgan logger Enabled for ${config.get("name")}`);
}
app.use(cors());
// ------------------End middlewares------------------------

//------------------- routes --------------------------------

app.use("/", router);
//-------------------end routes-----------------------------

//---------------- error handler -----------------------
app.use(handleErrors);
//---------------- end error handler -----------------------

const port = config.get("port");
app.listen(port, () => {
  console.log(
    `[+]${configuration.name}:${configuration.version} listening on port ${port}...`
  );
});

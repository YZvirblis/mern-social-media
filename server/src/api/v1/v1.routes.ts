import { Router } from "express";
import { PingController } from "./controllers/ping.controller";
import { UserController } from "./controllers/user.controller";

const v1Routes = () => {
  const router = Router();

  router.use("/ping", PingController());

  router.use("/user", UserController());

  return router;
};

export default v1Routes;

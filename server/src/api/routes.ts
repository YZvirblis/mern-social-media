import { Router } from "express";
import v1Routes from "./v1/v1.routes";

const initializeApiRoutes = () => {
  const router = Router();

  router.use("/v1/", v1Routes());

  console.log(`Routes initialized`);
  return router;
};
export default initializeApiRoutes;

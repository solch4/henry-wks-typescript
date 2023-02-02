import { Response, Request, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Soy la ruta get");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Soy la ruta post");
});

export default router;

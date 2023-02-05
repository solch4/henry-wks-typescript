import { Response, Request, Router, NextFunction } from "express";
import { User } from "../models/User";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users) => res.send(users))
    .catch((err) => next(err));
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  User.create(user)
    .then((createdUser) => res.send(createdUser))
    .catch((err) => next(err));
  res.send("Soy la ruta post");
});

export default router;

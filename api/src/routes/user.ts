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
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  User.findByPk(id).then((user) => {
    if (user) {
      user
        .destroy()
        .then(() => res.send("User deleted"))
        .catch((err) => next(err));
    } else res.status(404).send("User not found");
  });
});

export default router;

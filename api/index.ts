import { sequelize } from "./src/db";
import app from "./src/app";

const port = 3001;

sequelize
  .sync({ force: true, logging: false })
  .then(() => {
    app.listen(port, () => {
      console.log("App is listening on port", port);
    });
  })
  .catch((err) => console.error(err));

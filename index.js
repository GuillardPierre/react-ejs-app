import { app } from "./server.js";
const port = 3002;
app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
});

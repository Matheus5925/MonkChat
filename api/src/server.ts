// src/app.ts
import express from 'express'
import UserRoute from './routes/UserRoutes'
import AuthRoute from './routes/AuthRoutes';
import RoomRoute from './routes/RoomRoutes'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json())
app.use(RoomRoute)
app.use(UserRoute)
app.use(AuthRoute)


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});

import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import auctionItemRoutes from 'src/routes/auctionItemRoutes';
import descriptionRoutes from 'src/routes/descriptionRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/auctionItem', auctionItemRoutes);
app.use('/description', descriptionRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

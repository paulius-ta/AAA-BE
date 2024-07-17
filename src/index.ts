import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import auctionItemRoutes from 'src/routes/auctionItemRoutes';
import descriptionRoutes from 'src/routes/descriptionRoutes';
import historyRoutes from 'src/routes/historyRoutes';
import bidderRoutes from 'src/routes/bidderRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/auctionItem', auctionItemRoutes);
app.use('/description', descriptionRoutes);
app.use('/history', historyRoutes);
app.use('/bidder', bidderRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { db } from './db/db';
import { auctionItemTable } from './db/schema';
import { eq } from 'drizzle-orm';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/test', (req: Request, res: Response) => {
  res.json({ test: 'test123' });
});

app.get('/auctionItem/:id', async (req: Request, res: Response) => {
  const auctionItem = await db
    .select()
    .from(auctionItemTable)
    .where(eq(auctionItemTable.id, Number(req.params.id)));
  res.json({ data: auctionItem });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

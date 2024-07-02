import express, { Request, Response } from 'express';
import { db } from 'src/db/db';
import { historyTable } from 'src/db/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const history = await db
      .select()
      .from(historyTable)
      .where(eq(historyTable.auctionItemId, Number(req.params.id)));

    if (history) {
      res.status(200).json(
        history.map((entry) => {
          return {
            amount: entry.amount,
            timestamp: entry.timestamp,
          };
        }),
      );
    } else {
      res.status(404).json({ message: 'History not found' });
    }
  } catch (error) {
    console.error('Error fetching history list:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;

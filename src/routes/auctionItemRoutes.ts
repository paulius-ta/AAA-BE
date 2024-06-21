import express, { Request, Response } from 'express';
import { db } from 'src/db/db';
import { auctionItemTable } from 'src/db/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const auctionItem = await db
      .select()
      .from(auctionItemTable)
      .where(eq(auctionItemTable.id, Number(req.params.id)));

    if (auctionItem) {
      res.status(200).json({ data: auctionItem });
    } else {
      res.status(404).json({ message: 'Auction item not found' });
    }
  } catch (error) {
    console.error('Error fetching auction item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;

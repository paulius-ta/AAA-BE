import express, { Request, Response } from 'express';
import { db } from 'src/db/db';
import { descriptionTable } from 'src/db/schema';
import { eq } from 'drizzle-orm';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const description = await db
      .select()
      .from(descriptionTable)
      .where(eq(descriptionTable.auctionItemId, Number(req.params.id)));

    if (description) {
      res.status(200).json({ ...description[0] });
    } else {
      res.status(404).json({ message: 'Description not found' });
    }
  } catch (error) {
    console.error('Error fetching auction item description:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;

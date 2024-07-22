import express, { Request, Response } from 'express';
import { db } from 'src/db/db';
import { bidderTable } from 'src/db/schema';

const router = express.Router();

router.post('', async (req: Request, res: Response) => {
  try {
    const { contactDetails, paymentDetails } = req.body;

    if (!contactDetails || !paymentDetails) {
      return res.status(400).json({ message: 'Contact and payment details are required' });
    }

    const [newBidder] = await db
      .insert(bidderTable)
      .values({
        contactDetails,
        paymentDetails,
      })
      .returning({ id: bidderTable.id });

    res.status(201).json({ bidderId: newBidder.id });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;

import express, { Request, Response } from 'express';
const router = express.Router();

router.post('', async (req: Request, res: Response) => {
  try {
    const { contactDetails, paymentDetails } = req.body;

    if (!contactDetails || !paymentDetails) {
      res.status(404).json({ message: 'Contact and payment details are required' });
    }

    res.status(200).json({ contactDetails, paymentDetails });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;

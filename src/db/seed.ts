import { db } from 'src/db/db';
import { auctionItem, description, history, bidder } from 'src/db/schema';
import { sql } from 'drizzle-orm';

const main = async () => {
  try {
    await db.delete(auctionItem);
    await db.delete(description);
    await db.delete(history);
    await db.delete(bidder);

    await db.insert(auctionItem).values([
      {
        minPrice: 0,
        currentPrice: 100,
        startTimestamp: sql`CURRENT_TIMESTAMP`,
        endTimestamp: sql`CURRENT_TIMESTAMP + INTERVAL '1 hour'`,
        status: 'pending',
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

main();

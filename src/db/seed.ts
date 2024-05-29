import { db } from 'src/db/db';
import { auctionItem, description, history, bidder } from 'src/db/schema';
import { auctionItemData } from 'src/db/seed/auctionItemData';
import { descriptionData } from 'src/db/seed/descriptionData';

const main = async () => {
  try {
    await db.delete(auctionItem);
    await db.delete(description);
    await db.delete(history);
    await db.delete(bidder);

    await db.insert(auctionItem).values(auctionItemData);
    await db.insert(description).values(descriptionData);
  } catch (error) {
    console.error(error);
  }
};

main();

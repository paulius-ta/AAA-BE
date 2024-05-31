import { db } from 'src/db/db';
import { auctionItem, description, history, bidder } from 'src/db/schema';
import { auctionItemData } from 'src/db/seed/auctionItemData';
import { descriptionData } from 'src/db/seed/descriptionData';
import { bidderData } from 'src/db/seed/bidderData';
import { historyData } from 'src/db/seed/historyData';

const main = async () => {
  try {
    //TODO: FIX THIS, as it does not delete the db.
    await db.delete(auctionItem);
    await db.delete(description);
    await db.delete(history);
    await db.delete(bidder);

    await db.insert(auctionItem).values(auctionItemData);
    await db.insert(description).values(descriptionData);
    await db.insert(bidder).values(bidderData);
    await db.insert(history).values(historyData);
  } catch (error) {
    console.error(error);
  }
};

main();

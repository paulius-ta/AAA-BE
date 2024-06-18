import { db } from 'src/db/db';
import { auctionItemTable, descriptionTable, historyTable, bidderTable } from 'src/db/schema';
import { auctionItemData } from 'src/db/seed/auctionItemData';
import { descriptionData } from 'src/db/seed/descriptionData';
import { bidderData } from 'src/db/seed/bidderData';
import { historyData } from 'src/db/seed/historyData';

const main = async () => {
  try {
    //TODO: FIX THIS, as it does not delete the db.
    await db.delete(auctionItemTable);
    await db.delete(descriptionTable);
    await db.delete(historyTable);
    await db.delete(bidderTable);

    await db.insert(auctionItemTable).values(auctionItemData);
    await db.insert(descriptionTable).values(descriptionData);
    await db.insert(bidderTable).values(bidderData);
    await db.insert(historyTable).values(historyData);
  } catch (error) {
    console.error(error);
  }
};

main();

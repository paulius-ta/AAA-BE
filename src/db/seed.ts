import { db } from 'src/db/db';
import { auctionItemTable, descriptionTable, historyTable, bidderTable, imageTable } from 'src/db/schema';
import { auctionItemData } from 'src/db/seed/auctionItemData';
import { descriptionData } from 'src/db/seed/descriptionData';
import { bidderData } from 'src/db/seed/bidderData';
import { historyData } from 'src/db/seed/historyData';
import { sql } from 'drizzle-orm';

const main = async () => {
  try {
    console.log('Deleting existing data...');
    await db.delete(historyTable);
    await db.delete(imageTable);
    await db.delete(descriptionTable);
    await db.delete(auctionItemTable);
    await db.delete(bidderTable);

    console.log('Inserting new data...');
    await db.insert(bidderTable).values(bidderData);
    await db.insert(auctionItemTable).values(auctionItemData);
    await db.insert(descriptionTable).values(descriptionData);
    await db.insert(historyTable).values(historyData);

    console.log('Resetting sequences...');
    await db.execute(sql`SELECT setval(pg_get_serial_sequence('bidder', 'id'), (SELECT MAX(id) FROM bidder))`);
    await db.execute(
      sql`SELECT setval(pg_get_serial_sequence('auction_item', 'id'), (SELECT MAX(id) FROM auction_item))`,
    );
    await db.execute(
      sql`SELECT setval(pg_get_serial_sequence('description', 'id'), (SELECT MAX(id) FROM description))`,
    );
    await db.execute(sql`SELECT setval(pg_get_serial_sequence('history', 'id'), (SELECT MAX(id) FROM history))`);

    console.log('Database seeded successfully and sequences reset');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

main();

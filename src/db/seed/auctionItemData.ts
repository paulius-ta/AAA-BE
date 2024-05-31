import { sql } from 'drizzle-orm';

enum Status {
  Pending = 'pending',
  Finished = 'finished',
}

export const auctionItemData = [
  {
    id: 90137109120,
    minPrice: 0,
    currentPrice: 100,
    startTimestamp: sql`CURRENT_TIMESTAMP`,
    endTimestamp: sql`CURRENT_TIMESTAMP + INTERVAL '1 hour'`,
    status: Status.Pending,
  },
];

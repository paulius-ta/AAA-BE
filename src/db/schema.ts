import { pgTable, serial, json, timestamp, integer, text, pgEnum } from 'drizzle-orm/pg-core';
import { ContactDetails, Description, PaymentDetails } from 'src/api/types/apiTypes';
export const StatusEnum = pgEnum('status', ['pending', 'finished']);

export const auctionItem = pgTable('auction_item', {
  id: serial('id').primaryKey(),
  minPrice: integer('min_price'),
  currentPrice: integer('current_price'),
  startTimestamp: timestamp('start_timestamp'),
  endTimestamp: timestamp('end_timestamp'),
  status: StatusEnum('status'),
});

export const description = pgTable('description', {
  id: serial('id').primaryKey(),
  auctionItemId: serial('auction_item_id').references(() => auctionItem.id),
  details: json('details').$type<Description>(),
});

export const history = pgTable('history', {
  id: serial('id').primaryKey(),
  auctionItemId: serial('auction_item_id').references(() => auctionItem.id),
  bidderId: serial('bidder_id').references(() => bidder.id),
  amount: integer('amount'),
  timestamp: timestamp('timestamp'),
});

export const bidder = pgTable('bidder', {
  id: serial('id').primaryKey(),
  contactDetails: json('contact_details').$type<ContactDetails>(),
  paymentDetails: json('payment_details').$type<PaymentDetails>(),
});

export const image = pgTable('image', {
  id: serial('id').primaryKey(),
  auctionItemId: serial('auction_item_id').references(() => auctionItem.id),
  url: text('url'),
});

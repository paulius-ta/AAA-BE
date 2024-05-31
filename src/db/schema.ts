import { pgTable, serial, json, timestamp, integer, text, bigint } from 'drizzle-orm/pg-core';
import { ContactDetails, Description, PaymentDetails } from 'src/api/types/apiTypes';

export const auctionItem = pgTable('auction_item', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  minPrice: integer('min_price'),
  currentPrice: integer('current_price'),
  startTimestamp: timestamp('start_timestamp'),
  endTimestamp: timestamp('end_timestamp'),
  status: text('status'),
});

export const description = pgTable('description', {
  id: serial('id').primaryKey(),
  auctionItemId: bigint('auction_item_id', { mode: 'number' }).references(() => auctionItem.id),
  details: json('details').$type<Description>(),
});

export const history = pgTable('history', {
  id: serial('id').primaryKey(),
  auctionItemId: bigint('auction_item_id', { mode: 'number' }).references(() => auctionItem.id),
  bidderId: integer('bidder_id').references(() => bidder.id),
  amount: integer('amount'),
  timestamp: timestamp('timestamp'),
});

export const bidder = pgTable('bidder', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  contactDetails: json('contact_details').$type<ContactDetails>(),
  paymentDetails: json('payment_details').$type<PaymentDetails>(),
});

export const image = pgTable('image', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  auctionItemId: bigint('auction_item_id', { mode: 'number' }).references(() => auctionItem.id),
  url: text('url'),
});

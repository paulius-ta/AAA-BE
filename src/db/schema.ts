import { pgTable, serial, json, timestamp, integer, text, bigint } from 'drizzle-orm/pg-core';
import { ContactDetails, Description, PaymentDetails } from 'src/api/types/apiTypes';

export const auctionItemTable = pgTable('auction_item', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  minPrice: integer('min_price'),
  currentPrice: integer('current_price'),
  startTimestamp: timestamp('start_timestamp'),
  endTimestamp: timestamp('end_timestamp'),
  status: text('status'),
});

export const descriptionTable = pgTable('description', {
  id: serial('id').primaryKey(),
  auctionItemId: bigint('auction_item_id', { mode: 'number' }).references(() => auctionItemTable.id),
  details: json('details').$type<Description>(),
});

export const historyTable = pgTable('history', {
  id: serial('id').primaryKey(),
  auctionItemId: bigint('auction_item_id', { mode: 'number' }).references(() => auctionItemTable.id),
  bidderId: integer('bidder_id').references(() => bidderTable.id),
  amount: integer('amount'),
  timestamp: timestamp('timestamp'),
});

export const bidderTable = pgTable('bidder', {
  id: serial('id').primaryKey(),
  contactDetails: json('contact_details').$type<ContactDetails>(),
  paymentDetails: json('payment_details').$type<PaymentDetails>(),
});

export const imageTable = pgTable('image', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  auctionItemId: bigint('auction_item_id', { mode: 'number' }).references(() => auctionItemTable.id),
  url: text('url'),
});

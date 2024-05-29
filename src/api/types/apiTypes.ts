import { components } from 'src/api/apiSchemas';

export type SchemaTypes = components['schemas'];

export type Description = Omit<SchemaTypes['Description'], 'id'>;
export type ArtifactAttribute = SchemaTypes['ArtifactAttribute'];
export type History = SchemaTypes['History'];
export type HistoryEntry = SchemaTypes['HistoryEntry'];
export type Images = SchemaTypes['Images'];
export type ImageUrl = SchemaTypes['ImageUrl'];
export type PaymentMethods = SchemaTypes['PaymentMethods'];
export type ContactDetails = SchemaTypes['ContactDetails'];
export type PaymentDetails = SchemaTypes['PaymentDetails'];
export type SecurityCodeDetails = SchemaTypes['SecurityCode'];

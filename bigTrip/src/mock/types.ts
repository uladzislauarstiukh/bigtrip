import { SortDirection } from "@utils/sort";

type SortType = {
  title: string,
  sortDirection: SortDirection;
};

type OfferItem = {
  title: string;
  active: boolean;
  description?: string;
  price: number;
};

type PictureItem = {
  src: string,
  description: string;
};

type Destination = {
  description: string;
  name: string;
  pictures: PictureItem[];
};

type Offer = {
  type: string;
  offers: OfferItem[];
};

interface EventItem {
  basePrice: number;
  dateFrom: Date;
  dateTo: Date;
  destination: Destination;
  id: number;
  isFavorite: boolean;
  offers: OfferItem[];
  type: string;
}

export type {
  OfferItem,
  EventItem,
  Offer,
  Destination,
  PictureItem,
  SortType
};
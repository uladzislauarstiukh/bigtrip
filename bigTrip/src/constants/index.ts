import { OfferItem } from "mock/data";

const MENU_FILTERS = ['everything', 'future', 'past'];

const SORT_TYPES = ['day', 'event', 'time', 'price'];

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'transport',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const TRANSFER_TYPES = EVENT_TYPES.slice(0, 7);

const ACTIVITY_TYPES = EVENT_TYPES.slice(-3);

const DESTINATION_NAMES = [
  'London',
  'Warsaw',
  'Minsk',
  'Kyiv',
  'Washington'
];

const OFFERS: OfferItem[] = [
  {
    title: 'luggage',
    description: 'Add luggage',
    price: 100
  },
  {
    title: 'comfort',
    description: 'Switch to comfort class',
    price: 30,
  },
  {
    title: 'meal',
    description: 'Add meal',
    price: 150
  },
  {
    title: 'seats',
    description: 'Choose seats',
    price: 5
  },
  {
    title: 'seats',
    description: 'Choose seats',
    price: 35
  },
  {
    title: 'train',
    description: 'Travel by train',
    price: 50
  },
];

export {
  MENU_FILTERS,
  SORT_TYPES,
  EVENT_TYPES,
  TRANSFER_TYPES,
  ACTIVITY_TYPES,
  DESTINATION_NAMES,
  OFFERS
};
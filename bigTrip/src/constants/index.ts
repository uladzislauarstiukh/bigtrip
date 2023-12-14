import { SortDirection, SortTypes } from "@utils/sort";
import { OfferItem } from "mock/types";

const MENU_FILTERS = ['everything', 'future', 'past'];

const SORT_TYPES = [
  { title: SortTypes.Day, sortDirection: SortDirection.Default },
  { title: SortTypes.Event, sortDirection: SortDirection.Default },
  { title: SortTypes.Time, sortDirection: SortDirection.Default },
  { title: SortTypes.Price, sortDirection: SortDirection.Default },
];

const ARROW_SYMBOLS = {
  Down: '&darr;',
  Up: '&uarr;',
  Default: '',
};

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
    price: 100,
    active: false,
  },
  {
    title: 'comfort',
    description: 'Switch to comfort class',
    price: 30,
    active: false,
  },
  {
    title: 'meal',
    description: 'Add meal',
    price: 150,
    active: false,
  },
  {
    title: 'seats',
    description: 'Choose seats',
    price: 5,
    active: false,
  },
  {
    title: 'seats',
    description: 'Choose seats',
    price: 35,
    active: false,
  },
  {
    title: 'train',
    description: 'Travel by train',
    price: 50,
    active: false,
  },
];

export {
  MENU_FILTERS,
  SORT_TYPES,
  EVENT_TYPES,
  TRANSFER_TYPES,
  ACTIVITY_TYPES,
  DESTINATION_NAMES,
  OFFERS,
  ARROW_SYMBOLS
};
import { DESTINATION_NAMES, EVENT_TYPES } from "@constants";

const RANDOM_STR = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus";
const COUNT = 10;
const MS_IN_CURRENT_YEAR = 1701099025886;
const STRING_STEP = 5;

const getRandomStr = (str: string): string => {
  return str.split('.')[Math.floor(Math.random() * STRING_STEP)];
};

const getRandomTimeDuration = (): { start: Date, end: Date; } => {
  const random = Math.random();
  const start = new Date(MS_IN_CURRENT_YEAR + Math.floor(random * 10000000000));
  const end = new Date(+start + Math.floor(random * 1000000000));
  return {
    start,
    end
  };
};


export type OfferItem = {
  title: string,
  description?: string;
  price: number;
};

export type PictureItem = {
  src: string,
  description: string;
};

export type Destination = {
  description: string,
  name: string,
  pictures: PictureItem[];
};

export type Offer = {
  type: string;
  offers: OfferItem[];
};

export interface EventItem {
  basePrice: number,
  dateFrom: Date,
  dateTo: Date,
  destination: Destination,
  id: number,
  isFavorite: boolean,
  offers: OfferItem[],
  type: string;
}


class Event implements EventItem {
  basePrice: number;
  dateFrom: Date;
  dateTo: Date;
  destination: Destination;
  id: number;
  isFavorite: boolean;
  offers: OfferItem[];
  type: string;


  constructor() {
    this.basePrice = Math.floor(Math.random() * 10000);
    this.dateFrom = getRandomTimeDuration().start;
    this.dateTo = getRandomTimeDuration().end;
    this.destination = {
      description: getRandomStr(RANDOM_STR),
      name: DESTINATION_NAMES[Math.floor(Math.random() * DESTINATION_NAMES.length - 1)],
      pictures: [
        {
          src: 'http://picsum.photos/248/152?r=${Math.random()}',
          description: getRandomStr(RANDOM_STR)
        },
        {
          src: 'http://picsum.photos/248/152?r=${Math.random()}',
          description: getRandomStr(RANDOM_STR)
        },
        {
          src: 'http://picsum.photos/248/152?r=${Math.random()}',
          description: getRandomStr(RANDOM_STR)
        }
      ]
    };
    this.id = Math.floor(Math.random() * 10) + 100;
    this.isFavorite = Boolean(Math.random() > 0.5);
    this.offers = [
      {
        title: 'add luggage',
        price: 30,
      },
      {
        title: 'switch to comfort class',
        price: 100,
      },
      {
        title: 'add meal',
        price: 15,
      }
    ];
    this.type = EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length - 1)];
  }
}


export const generateData = () => {
  const events = [];

  for (let i = 0; i < COUNT; i++) {
    events.push(new Event());
  }

  return events;

};
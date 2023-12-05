import { Position, render, } from "@utils/render";
import {
  ButtonNewEvent,
  Info,
  TotalCost,
  TripInfo,
  Menu,
  Filter,
  Sort,
  EventList,
  Event,
} from "@view";
import { generateData } from "./mock/data";
import { getTotalCost } from "@utils/getTotalCost";


const COUNT = 10;
const data = generateData();
const totalCostNumber = getTotalCost(data);

const info = new Info();
const tripInfo = new TripInfo();
const totalCost = new TotalCost(totalCostNumber);
const menu = new Menu();
const filter = new Filter();
const buttonNewEvent = new ButtonNewEvent();
const sort = new Sort();
const eventList = new EventList();

const tripMainNode = document.querySelector('.trip-main');
render(tripMainNode, info, Position.AfterBegin);

const tripInfoNode = document.querySelector('.trip-main__trip-info');
render(tripInfoNode, tripInfo);
render(tripInfoNode, totalCost);

const navNode = document.querySelector('.trip-controls__navigation');
render(navNode, menu);

const filterNode = document.querySelector('.trip-controls__filters');
render(filterNode, filter);
render(tripMainNode, buttonNewEvent);

const tripEventsNode = document.querySelector('.trip-events');
render(tripEventsNode, sort);
render(tripEventsNode, eventList);


const tripEventsListNode = document.querySelector('.trip-events__list');

for (let i = 0; i < COUNT; i++) {
  const event = new Event(data[i]);
  event.onEditEventClick();
  render(tripEventsListNode, event);
}

console.log(data);




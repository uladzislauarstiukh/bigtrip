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
  EditEvent
} from "@view";
import { generateData } from "./mock/data";
import { getTotalCost } from "@utils/getTotalCost";


const COUNT = 10;
const data = generateData();
const totalCostNumber = getTotalCost(data);

const info = new Info().getElement();
const tripInfo = new TripInfo().getElement();
const totalCost = new TotalCost(totalCostNumber).getElement();
const menu = new Menu().getElement();
const filter = new Filter().getElement();
const buttonNewEvent = new ButtonNewEvent().getElement();
const sort = new Sort().getElement();
const eventList = new EventList().getElement();

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
  render(tripEventsListNode, event.getElement());
}

console.log(data);



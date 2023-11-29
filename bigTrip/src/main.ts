import { Position, render, } from "@utils/render";
import {
  buttonNewEvent,
  info,
  totalCost,
  tripInfo,
  menu,
  filter,
  sort,
  eventList,
  event,
  editEvent
} from "@view";
import { generateData } from "./mock/data";
import { getTotalCost } from "@utils/getTotalCost";


const COUNT = 10;
const data = generateData();
const totalCostNumber = getTotalCost(data);

const tripMainNode = document.querySelector('.trip-main');
render(tripMainNode, info(), Position.AfterBegin);

const tripInfoNode = document.querySelector('.trip-main__trip-info');
render(tripInfoNode, tripInfo());
render(tripInfoNode, totalCost(totalCostNumber));

const navNode = document.querySelector('.trip-controls__navigation');
render(navNode, menu());

const filterNode = document.querySelector('.trip-controls__filters');
render(filterNode, filter());
render(tripMainNode, buttonNewEvent());

const tripEventsNode = document.querySelector('.trip-events');
render(tripEventsNode, sort());
render(tripEventsNode, eventList());


const tripEventsListNode = document.querySelector('.trip-events__list');
render(tripEventsListNode, editEvent(data[0]));

for (let i = 0; i < COUNT; i++) {
  render(tripEventsListNode, event(data[i]));
}

console.log(data);



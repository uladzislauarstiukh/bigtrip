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

const tripMainNode = document.querySelector('.trip-main');
render(tripMainNode, new Info().getTemplate(), Position.AfterBegin);

const tripInfoNode = document.querySelector('.trip-main__trip-info');
render(tripInfoNode, new TripInfo().getTemplate());
render(tripInfoNode, new TotalCost(totalCostNumber).getTemplate());

const navNode = document.querySelector('.trip-controls__navigation');
render(navNode, new Menu().getTemplate());

const filterNode = document.querySelector('.trip-controls__filters');
render(filterNode, new Filter().getTemplate());
render(tripMainNode, new ButtonNewEvent().getTemplate());

const tripEventsNode = document.querySelector('.trip-events');
render(tripEventsNode, new Sort().getTemplate());
render(tripEventsNode, new EventList().getTemplate());


const tripEventsListNode = document.querySelector('.trip-events__list');
render(tripEventsListNode, new EditEvent(data[0]).getTemplate());

for (let i = 0; i < COUNT; i++) {
  render(tripEventsListNode, new Event(data[i]).getTemplate());
}

console.log(data);



import { Position, render } from "@utils/render";
import {
  ButtonNewEvent,
  Info,
  TotalCost,
  TripInfo,
  Menu,
  Filter,
  Sort,
  EventList,
} from "@view";
import { generateData } from "./mock/data";
import { getTotalCost } from "@utils/getTotalCost";
import { TripController } from "./controllers/TripController";

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

const tripController = new TripController(tripEventsListNode);
tripController.render(data)





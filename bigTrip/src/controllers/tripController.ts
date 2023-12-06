import { EventItem } from "mock/data";
import { Controller } from "./types";
import { EditEvent, EventList, Event as EventPoint, NoEvents, Sort } from "@view";
import { render, replace } from "@utils/render";

const COUNT = 10;



export class TripController implements Controller {
  _container: Element | null;
  constructor(container: Element | null) {
    this._container = container;
    this._sort = new Sort();
    this._eventList = new EventList();
  }

  render(data: EventItem[]) {

    if (data.length === 0) {
      render(this._container, new NoEvents());
      return;
    }

    render(this._container, this._sort);
    render(this._container, this._eventList);

    const tripEventsListNode = this._container?.querySelector('.trip-events__list');

    for (let i = 0; i < COUNT; i++) {
      const event = new EventPoint(data[i]);

      event.setOnEditEventHandler(() => {
        const editEvent = new EditEvent(data[i]);
        replace(editEvent, event);

        editEvent.setOnSaveEventHandler((e: Event) => {
          e.preventDefault();
          replace(event, editEvent);
        });

        const onEscClick = (e: KeyboardEvent) => {
          if (e.key === 'Escape' || e.code === 'Escape') {
            replace(event, editEvent);
          }
          window.removeEventListener('keydown', onEscClick);
        };
        window.addEventListener('keydown', onEscClick);
      });

      render(tripEventsListNode, event);
    }
  }
}
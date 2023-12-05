import { EventItem } from "mock/data";
import { Controller } from "./types";
import { EditEvent, Event as EventPoint } from "@view";
import { render, replace } from "@utils/render";

const COUNT = 10;

export class TripController implements Controller {
  _container: Element | null;
  constructor(container: Element | null) {
    this._container = container;
  }

  render(data: EventItem[]) {

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

      render(this._container, event);
    }
  }
}
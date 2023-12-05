import { AbstractComponent } from "@view";

const createEventListTemplate = () => {
  return (
    `<ul class="trip-events__list"></ul>`
  );
};
export class EventList extends AbstractComponent {

  getTemplate = () => {
    return createEventListTemplate();
  };

}
import { ViewComponent } from "view/types";
export class EventList implements ViewComponent {

  getTemplate = () => {
    return (
      `<ul class="trip-events__list"></ul>`
    );
  };

}
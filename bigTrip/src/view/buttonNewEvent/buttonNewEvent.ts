import { ViewComponent } from "view/types";
export class ButtonNewEvent implements ViewComponent {
  getTemplate = () => {
    return (
      `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>`
    );
  };
}
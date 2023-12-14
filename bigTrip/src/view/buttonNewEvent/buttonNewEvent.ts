import { AbstractComponent } from "@view";

const createButtonNewEventTemplate = () => {
  return (
    `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`
  );
};
export class ButtonNewEvent extends AbstractComponent {
  getTemplate = () => createButtonNewEventTemplate();
}
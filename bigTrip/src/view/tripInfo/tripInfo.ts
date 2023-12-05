import { AbstractComponent } from "@view";

const createTripInfoTemplate = () => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
    </div>`
  );
};
export class TripInfo extends AbstractComponent {
  getTemplate = () => {
    return createTripInfoTemplate();
  };
}
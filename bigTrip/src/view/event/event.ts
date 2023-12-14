import { getDateDiffInDHM, getDateFormatMonthDay } from "@utils/dates";
import { GetMarkupCallBack, getTemplate } from "@utils/getTemplate";
import { AbstractComponent } from "@view";
import { EventItem } from "mock/types";

const getOfferMarkup: GetMarkupCallBack = ({ title, price }) => {

  return (
    `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      +
      €&nbsp;<span class="event__offer-price">${price}</span>
    </li>`
  );
};

const createEventTemplate = (options: EventItem) => {
  const { basePrice, type, destination, offers, dateFrom, dateTo } = options;

  const hoursArrive = dateFrom.getHours();
  const minutesArrive = dateFrom.getMinutes();
  const hoursLeave = dateTo.getHours();
  const minutesLeave = dateTo.getMinutes();
  const { days, hours, minutes } = getDateDiffInDHM(dateFrom, dateTo);
  const { month, day } = getDateFormatMonthDay(dateTo);
  const displayDays = days ? `${days}D` : '';
  const offersTemplate = getTemplate(offers, getOfferMarkup);

  return (
    `
    <li class="trip-events__item">
      <div class="event">
      <time class="event__date">${month.toUpperCase()} ${day}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="./src/img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${destination.name}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T12:25">${hoursArrive}:${minutesArrive}</time>
            —
            <time class="event__end-time" datetime="2019-03-18T13:35">${hoursLeave}:${minutesLeave}</time>
          </p>
          <p class="event__duration">${displayDays} ${hours}H ${minutes}M</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersTemplate}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
    `
  );
};
export class Event extends AbstractComponent {
  _options: EventItem;

  constructor(options: EventItem) {
    super();
    this._options = options;
  }

  setOnEditEventHandler = (cb: () => void) => {
    const button = this.getElement()?.querySelector('.event__rollup-btn');
    button?.addEventListener('click', cb);
  };

  getTemplate = () => {
    return createEventTemplate(this._options);
  };

}
import { TRANSFER_TYPES, ACTIVITY_TYPES, DESTINATION_NAMES, OFFERS } from "@constants";
import { GetMarkupCallBack, getTemplate } from "@utils/getTemplate";
import { AbstractComponent } from "@view";
import { EventItem } from "mock/data";

const getTransferMarkup: GetMarkupCallBack = (transferType) => {
  return (
    `<div class="event__type-item">
        <input id="event-type-${transferType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transferType}">
        <label class="event__type-label  event__type-label--${transferType}" for="event-type-${transferType}-1">${transferType}</label>
      </div>`
  );
};

const getActivityMarkup: GetMarkupCallBack = (activityType) => {
  return (
    `<div class="event__type-item">
        <input id="event-type-${activityType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${activityType}">
        <label class="event__type-label  event__type-label--${activityType}" for="event-type-${activityType}-1">${activityType}</label>
      </div>`
  );
};

const getImageMarkup: GetMarkupCallBack = ({ src }) => {
  return (
    `<img class="event__photo" src="${src}" alt="Event photo">`
  );
};

const getOptionsMarkup: GetMarkupCallBack = (option) => {
  return (
    `<option value="${option}"></option>`
  );
};

const getOfferMarkup: GetMarkupCallBack = (options, idx) => {
  const { name, description, price } = options;
  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-${idx}" type="checkbox" name="event-offer-${name}" checked="">
      <label class="event__offer-label" for="event-offer-${name}-${idx}">
        <span class="event__offer-title">${description}</span>
        +
        €&nbsp;<span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
};


const createEditEventTemplate = (options: EventItem) => {
  const { type, destination } = options;

  const transfers = getTemplate(TRANSFER_TYPES, getTransferMarkup);
  const activities = getTemplate(ACTIVITY_TYPES, getActivityMarkup);
  const images = getTemplate(destination.pictures, getImageMarkup);
  const destinationOptions = getTemplate(DESTINATION_NAMES, getOptionsMarkup);
  const offers = getTemplate(OFFERS, getOfferMarkup);

  return (
    `
    <form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="./src/img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>
              ${transfers}
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>
              ${activities}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight to
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
          <datalist id="destination-list-1">
            ${destinationOptions}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
          —
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            €
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${offers}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${destination.description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${images}
            </div>
          </div>
        </section>
      </section>
  </form>
  `
  );
};

export class EditEvent extends AbstractComponent {

  _options: EventItem;
  _transfers: string;
  _activities: string;
  _images: string;
  _destinationOptions: string;
  _offers: string;

  constructor(options: EventItem) {
    super();
    this._options = options;
    this._transfers = getTemplate(TRANSFER_TYPES, getTransferMarkup);
    this._activities = getTemplate(ACTIVITY_TYPES, getActivityMarkup);
    this._images = getTemplate(this._options.destination.pictures, getImageMarkup);
    this._destinationOptions = getTemplate(DESTINATION_NAMES, getOptionsMarkup);
    this._offers = getTemplate(OFFERS, getOfferMarkup);
  }

  getTemplate = () => {
    return createEditEventTemplate(this._options);
  };

  setOnSaveEventHandler = (cb: (e: Event) => void) => {
    const button = this.getElement()?.querySelector('.event__save-btn');
    button?.addEventListener('click', cb);
  };
}
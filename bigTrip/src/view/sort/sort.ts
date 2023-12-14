import { ARROW_SYMBOLS, SORT_TYPES } from "@constants";
import { getTemplate } from "@utils/getTemplate";
import { AbstractComponent } from "@view";
import { SortType } from "mock/types";

const getSortMarkup = ({ title }: SortType, activeSortType: SortType) => {
  const sortDirectionIcon = title === activeSortType.title ? ARROW_SYMBOLS[activeSortType.sortDirection] : '';
  const checked = title === activeSortType.title ? 'checked' : '';
  return (
    `<div class="trip-sort__item  trip-sort__item--${title}">
        <input id="sort-${title}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${title}" ${checked}>
        <label class="trip-sort__btn" for="sort-${title}" data-sort-type="${title}">
          ${title} <span class="trip-sort__icon">${sortDirectionIcon}</span>
        </label>
      </div>`
  );
};

const createSortTemplate = (activeSortType: SortType) => {
  const sorts = getTemplate(SORT_TYPES, (sort) => getSortMarkup(sort, activeSortType));

  return (
    `<form class="trip-events__trip-sort  trip-sort">
          ${sorts}
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};
export class Sort extends AbstractComponent {
  _activeSortType: SortType;


  constructor(activeSortType: SortType) {
    super();
    this._activeSortType = activeSortType;
  }
  getTemplate = () => {
    return createSortTemplate(this._activeSortType);
  };

  onSortChange = (cb: (e: Event) => void) => {
    this._element?.addEventListener('click', cb);
  };
}
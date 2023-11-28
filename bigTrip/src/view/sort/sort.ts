import { SORT_TYPES } from "@constants";
import { GetMarkupCallBack, getTemplate } from "@utils/getTemplate";

const getSortMarkup: GetMarkupCallBack = (sortType) => {
  return (
    `<div class="trip-sort__item  trip-sort__item--${sortType}">
        <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}">
        <label class="trip-sort__btn" for="sort-${sortType}">
          ${sortType}
        </label>
      </div>`
  );
};

export const sort = () => {
  const sorts = getTemplate(SORT_TYPES, getSortMarkup);
  return (
    `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      
        ${sorts}
      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>
    `
  );
};
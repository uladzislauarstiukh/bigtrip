import { MENU_FILTERS } from "@constants";
import { GetMarkupCallBack, getTemplate } from "@utils/getTemplate";
import { AbstractComponent } from "@view";

const getFilterMarkup: GetMarkupCallBack = (filterName) => {
  return (
    `<div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
        <label class="trip-filters__filter-label" for="filter-everything">${filterName}</label>
      </div>`
  );
};

const createFilterTemplate = () => {
  const filters = getTemplate(MENU_FILTERS, getFilterMarkup);

  return (
    `
    <form class="trip-filters" action="#" method="get">
      ${filters}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `
  );
};
export class Filter extends AbstractComponent {

  getTemplate = () => {
    return createFilterTemplate();
  };

}
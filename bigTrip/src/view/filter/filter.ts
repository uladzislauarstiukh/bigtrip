import { MENU_FILTERS } from "@constants";
import { GetMarkupCallBack, getTemplate } from "@utils/getTemplate";


// const getFilterItemTemplate = () => {
//   return MENU_FILTERS.map((filterName) => {
//     return (
//       `<div class="trip-filters__filter">
//         <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
//         <label class="trip-filters__filter-label" for="filter-everything">${filterName}</label>
//       </div>`
//     );
//   }).join('\n');
// };


const getFilterMarkup: GetMarkupCallBack = (filterName) => {
  return (
    `<div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
        <label class="trip-filters__filter-label" for="filter-everything">${filterName}</label>
      </div>`
  );
};

export const filter = () => {
  // const filters = getFilterItemTemplate();
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
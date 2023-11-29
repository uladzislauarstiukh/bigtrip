import { ViewComponent } from "view/types";
export class Info implements ViewComponent {
  getTemplate = () => {
    return `
      <section class="trip-main__trip-info  trip-info"></section>
    `;
  };
}
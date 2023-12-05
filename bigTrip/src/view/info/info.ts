import { AbstractComponent } from "@view";

const createInfoTemplate = () => {
  return `
      <section class="trip-main__trip-info  trip-info"></section>
    `;
};
export class Info extends AbstractComponent {
  getTemplate = () => {
    return createInfoTemplate();
  };
}
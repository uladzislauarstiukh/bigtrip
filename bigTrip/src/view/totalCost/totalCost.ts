import { AbstractComponent } from "@view";

const createTotalCostTemplate = (totalCost: number) => {
  return (
    `<p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>`
  );
};
export class TotalCost extends AbstractComponent {
  _totalCost: number;

  constructor(totalCost: number) {
    super();
    this._totalCost = totalCost;
  }

  getTemplate = () => {
    return createTotalCostTemplate(this._totalCost);
  };

}
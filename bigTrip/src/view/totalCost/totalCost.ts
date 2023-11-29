import { ViewComponent } from "view/types";

interface TotalCostComponent extends ViewComponent {
  _totalCost: number;
}
export class TotalCost implements TotalCostComponent {
  _totalCost: number;

  constructor(totalCost: number) {
    this._totalCost = totalCost;
  }

  getTemplate = () => {
    return (
      `<p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">${this._totalCost}</span>
      </p>
      `
    );
  };

}

import { EventItem } from "mock/data";

export const getTotalCost = (data: EventItem[]) => {
  let totalCost = 0;
  if (data.length === 0) {
    return 0;
  }
  data.forEach(({ offers, basePrice }) => {
    totalCost += offers.reduce((sum, next) => sum += next.price + basePrice, 0);
  });

  return totalCost;
};

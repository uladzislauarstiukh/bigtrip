export const totalCost = (totalCost: number) => {
  return (
    `<p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
    `
  );
};
import { EventItem, SortType } from "mock/types";


enum SortTypes {
  Day = 'day',
  Event = 'event',
  Time = 'time',
  Price = 'price'
}

enum SortDirection {
  Up = 'Up',
  Down = 'Down',
  Default = 'Default'
}

const changeSort = ({ title, sortDirection }: SortType) => {
  let currentSortDirection = sortDirection;

  switch (sortDirection) {
    case SortDirection.Default: {
      currentSortDirection = SortDirection.Up;
      break;
    }

    case SortDirection.Up: {
      currentSortDirection = SortDirection.Down;
      break;
    }

    case SortDirection.Down: {
      currentSortDirection = SortDirection.Default;
      break;
    }
  }

  return { title, sortDirection: currentSortDirection } as SortType;
};

const sortByPrice = (sortDirection: SortDirection, data: EventItem[]) => {
  const unsortedData = data.slice();

  switch (sortDirection) {
    case SortDirection.Up: {
      return unsortedData.sort((a, b) => {
        return b.basePrice - a.basePrice;
      });
    }

    case SortDirection.Down: {
      return unsortedData.sort((a, b) => {
        return a.basePrice - b.basePrice;
      });
    }

    case SortDirection.Default: {

      return data;
    }

    default: {
      return data;
    }

  }
};

const sortByDay = (sortDirection: SortDirection, data: EventItem[]) => {
  const unsortedData = data.slice();

  switch (sortDirection) {
    case SortDirection.Up: {
      return unsortedData.sort((a, b) => {
        return +b.dateFrom - +a.dateFrom;
      });
    }

    case SortDirection.Down: {
      return unsortedData.sort((a, b) => {
        return +a.dateFrom - +b.dateFrom;
      });
    }

    case SortDirection.Default: {

      return data;
    }

    default: {
      return data;
    }

  }
};

const sortByTime = (sortDirection: SortDirection, data: EventItem[]) => {
  const unsortedData = data.slice();

  switch (sortDirection) {
    case SortDirection.Up: {
      return unsortedData.sort((a, b) => {
        if ((+a.dateTo - +a.dateFrom) > (+b.dateTo - +b.dateFrom)) {
          return -1;
        } else if ((+a.dateTo - +a.dateFrom) < (+b.dateTo - +b.dateFrom)) {
          return 1;
        }
        return 0;
      });
    }

    case SortDirection.Down: {
      return unsortedData.sort((a, b) => {
        if ((+a.dateTo - +a.dateFrom) < (+b.dateTo - +b.dateFrom)) {
          return -1;
        } else if ((+a.dateTo - +a.dateFrom) > (+b.dateTo - +b.dateFrom)) {
          return 1;
        }
        return 0;
      });
    }

    case SortDirection.Default: {

      return data;
    }

    default: {
      return data;
    }

  }
};

const sortByEventName = (sortDirection: SortDirection, data: EventItem[]) => {
  const unsortedData = data.slice();

  switch (sortDirection) {
    case SortDirection.Up: {
      return unsortedData.sort((a, b) => {
        if (a.destination.name.toLowerCase() > b.destination.name.toLowerCase()) {
          return -1;
        } else if (a.destination.name.toLowerCase() < b.destination.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }

    case SortDirection.Down: {
      return unsortedData.sort((a, b) => {
        if (a.destination.name.toLowerCase() < b.destination.name.toLowerCase()) {
          return -1;
        } else if (a.destination.name.toLowerCase() > b.destination.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }

    case SortDirection.Default: {

      return data;
    }

    default: {
      return data;
    }

  }
};

const sortOptions = {
  [SortTypes.Day]: sortByDay,
  [SortTypes.Event]: sortByEventName,
  [SortTypes.Time]: sortByTime,
  [SortTypes.Price]: sortByPrice,
};

export {
  sortOptions,
  SortTypes,
  SortDirection,
  changeSort
};
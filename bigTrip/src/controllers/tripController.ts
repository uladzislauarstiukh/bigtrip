import { TripControllerI } from "./types";
import { EditEvent, EventList, Event as EventPoint, NoEvents, Sort } from "@view";
import { Position, remove, render, replace } from "@utils/render";
import { SortTypes, changeSort, sortOptions } from "@utils/sort";
import { EventItem, SortType } from "mock/types";
import { SORT_TYPES } from "@constants";

const COUNT = 10;

export class TripController implements TripControllerI<EventItem> {

  _container: Element | null;
  _sort: Sort;
  _eventList: EventList;
  _data: EventItem[];
  _activeSortType: SortType;

  constructor(container: Element | null) {
    this._container = container;
    this._activeSortType = SORT_TYPES[0];
    this._sort = new Sort(this._activeSortType);
    this._eventList = new EventList();
    this._data = [];

  }

  setSortHandler = () => {

    this._sort.onSortChange((e) => {
      const sortType = e.target.closest('.trip-sort__btn')?.dataset.sortType as SortTypes;

      this._activeSortType = changeSort({ ...this._activeSortType, title: sortType });
      const data = sortOptions[sortType](this._activeSortType.sortDirection, this._data);

      remove(this._sort);
      this._sort = new Sort(this._activeSortType);
      render(this._container, this._sort, Position.AfterBegin);

      remove(this._eventList);
      this.render(data);
    });

  };

  render(data: EventItem[]) {
    if (this._data.length === 0) this._data = data.slice();
    console.log(data);
    if (data.length === 0) {
      render(this._container, new NoEvents());
      return;
    }

    render(this._container, this._sort);
    render(this._container, this._eventList);


    for (let i = 0; i < COUNT; i++) {
      const event = new EventPoint(data[i]);

      event.setOnEditEventHandler(() => {
        const editEvent = new EditEvent(data[i]);
        replace(editEvent, event);

        editEvent.setOnSaveEventHandler((e: Event) => {
          e.preventDefault();
          replace(event, editEvent);
        });

        const onEscClick = (e: KeyboardEvent) => {
          if (e.key === 'Escape' || e.code === 'Escape') {
            replace(event, editEvent);
          }
          window.removeEventListener('keydown', onEscClick);
        };
        window.addEventListener('keydown', onEscClick);
      });

      render(this._eventList.getElement(), event);
    }
    this.setSortHandler();
  }
}
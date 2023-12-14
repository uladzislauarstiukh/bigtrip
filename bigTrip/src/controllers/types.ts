import { Sort, EventList } from "@view";

export interface ControllerI<G> {
  _container: Element | null;
  render(data: G[]): void;
}

export interface TripControllerI<G> extends ControllerI<G> {
  _sort: Sort;
  _eventList: EventList;
}
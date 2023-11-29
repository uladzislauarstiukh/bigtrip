export enum Position {
  AfterBegin = 'afterbegin',
  Afterend = 'afterend',
  Beforebegin = 'beforebegin',
  Beforeend = 'beforeend'
}

type Render = (container: Element | null, template: string, position?: Position) => void;

export const render: Render = (container, template, position = Position.Beforeend) => {
  if (container) {
    container.insertAdjacentHTML(position, template);
  }
};
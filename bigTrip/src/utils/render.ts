import { ViewComponent } from "view/types";

enum Position {
  AfterBegin = 'afterbegin',
  Afterend = 'afterend',
  Beforebegin = 'beforebegin',
  Beforeend = 'beforeend'
}

type NodeElement = Element | null;

type Render = (container: NodeElement, component: ViewComponent, position?: Position) => void;

const render: Render = (container, component, position = Position.Beforeend) => {
  const element = component.getElement();
  if (container && element) {
    container.insertAdjacentElement(position, element);
  }
};

const createNodeElement = (html = '') => {
  const parentNode = document.createElement('div');
  parentNode.innerHTML = html;
  return parentNode.firstElementChild;
};

const replace = (newElement: NodeElement, oldElement: NodeElement) => {
  const parent = oldElement?.parentNode;
  if (parent && newElement && oldElement) {
    parent.replaceChild(newElement, oldElement);
  }
};

export {
  Position,
  render,
  createNodeElement,
  replace
};
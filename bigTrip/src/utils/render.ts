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

const replace = (newComponent: ViewComponent, oldComponent: ViewComponent) => {
  const parentElement = oldComponent.getElement()?.parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();
  if (parentElement && newElement && oldElement) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

const remove = (component: ViewComponent) => {
  component.getElement()?.remove();
  component.removeElement();
};

export {
  Position,
  render,
  createNodeElement,
  replace,
  remove
};
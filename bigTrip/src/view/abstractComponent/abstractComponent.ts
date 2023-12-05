import { createNodeElement } from '@utils/render';
import { ViewComponent } from 'view/types';


export class AbstractComponent implements ViewComponent {
  _element: Element | null;

  constructor() {
    this._element = null;
    if (new.target === AbstractComponent) {
      throw Error('Can not call class AbstractComponent with new key word');
    }
  }

  getTemplate = () => {
    throw Error('Method getTemplate is not implemented');
  };

  getElement = () => {

    if (!this._element) {
      this._element = createNodeElement(this.getTemplate());
    }
    return this._element;
  };

  removeElement = () => {
    this._element = null;
  };

} 